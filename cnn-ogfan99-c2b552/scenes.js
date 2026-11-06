/* Capone-N-Noreaga game (NYC map, Queens: Elmhurst, by LeFrak City where Capone came up; N.O.R.E. from Queensbridge).
   N.O.R.E.'s solo game already has Woodhaven Blvd, the LeFrak towers, the Armstrong House, Queens Center and Junction Blvd & 57 Av,
   and Homeboy Sandman has Elmhurst Av / Newtown High / the gas tanks, so these rooms use:
   1. the M/R down at Grand Av-Newtown (underground, under Queens Blvd), 2. the Queens Coliseum on Jamaica Av ("I'm in Queens Coliseum,
   just coppin' new kicks" from Phonetime), 3. Terrace on the Park in Flushing Meadows (the 1964 World's Fair heliport on four big
   pillars, a walk over from LeFrak), 4. the Queens Zoo aviary (the white geodesic dome from the '64 Fair), 5. Broadway and 41 Av in
   Elmhurst with Elmhurst Hospital's tower behind. 400 x 260 SVGs. All CSS classes prefixed cn- . No 9s drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cnflk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.cn-flk{animation:cnflk 2.3s infinite}' +
    '@keyframes cnbulb{0%,49%{opacity:1}50%,100%{opacity:.25}}.cn-bulb{animation:cnbulb .8s steps(1) infinite}.cn-bulb2{animation-delay:-.4s}' +
    '@keyframes cnbus{from{transform:translateX(-170px)}to{transform:translateX(560px)}}.cn-bus{animation:cnbus 9s linear infinite}' +
    '@keyframes cncarR{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.cn-carR{animation:cncarR 5s linear infinite}.cn-carR2{animation-delay:-2.5s}' +
    '@keyframes cnwalk{from{transform:translateX(0)}to{transform:translateX(420px)}}.cn-walk{animation:cnwalk 14s linear infinite}.cn-walk2{animation-delay:-5s}.cn-walk3{animation-delay:-10s}' +
    '@keyframes cnheli{0%{transform:translate(-60px,30px)}100%{transform:translate(460px,-10px)}}.cn-heli{animation:cnheli 12s linear infinite}' +
    '@keyframes cnrotor{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.15)}}.cn-rotor{transform-box:fill-box;transform-origin:50% 50%;animation:cnrotor .18s linear infinite}' +
    '@keyframes cnbird{0%{transform:translate(0,0)}25%{transform:translate(40px,-14px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,12px)}100%{transform:translate(0,0)}}.cn-bird{animation:cnbird 6s ease-in-out infinite}.cn-bird2{animation-delay:-2s;animation-duration:7s}.cn-bird3{animation-delay:-4s;animation-duration:5s}' +
    '@keyframes cnflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.cn-flap{transform-box:fill-box;transform-origin:50% 100%;animation:cnflap .35s linear infinite}' +
    '@keyframes cnsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.cn-sway{transform-box:fill-box;transform-origin:50% 100%;animation:cnsway 3s ease-in-out infinite}.cn-sway2{animation-delay:-1.5s}' +
    '@keyframes cnwin{0%,100%{opacity:.35}50%{opacity:1}}.cn-win{animation:cnwin 3s ease-in-out infinite}.cn-win2{animation-delay:-1s}.cn-win3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 83 + 11) % 400) + '" cy="' + (6 + (i * 41) % 64) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const lbl = (x, y, t, size, fill, ls, anchor) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" font-family="Barlow, Helvetica, Arial, sans-serif" font-weight="700" font-size="' + size + '" letter-spacing="' + (ls || 0) + '" fill="' + fill + '">' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + col + '"/><rect x="' + (x - 5) + '" y="' + (y + 6) + '" width="10" height="17" rx="4" fill="' + col + '"/><rect x="' + (x - 4) + '" y="' + (y + 22) + '" width="3" height="8" fill="' + col + '"/><rect x="' + (x + 1) + '" y="' + (y + 22) + '" width="3" height="8" fill="' + col + '"/></g>';
  const car = (x, y, color, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="60" height="15" rx="5" fill="' + color + '"/><path d="M' + (x + 12) + ' ' + y + 'l7-9h22l7 9z" fill="' + color + '"/><path d="M' + (x + 21) + ' ' + (y - 7) + 'h18l4 6h-26z" fill="#bfe3ff" opacity=".8"/><circle cx="' + (x + 13) + '" cy="' + (y + 16) + '" r="4.5" fill="#111"/><circle cx="' + (x + 47) + '" cy="' + (y + 16) + '" r="4.5" fill="#111"/></g>';
  const GOLD = "#e9b44c", RED = "#d62828", ARMY = "#8ab17d", SAND = "#d9c08c";

  /* 1. Grand Av-Newtown, underground under Queens Blvd: cream tile, the maroon-and-gold mosaic band, black sign with the M (orange) and R (yellow), the R train sliding in */
  function grandav() {
    let tiles = "";
    for (let y = 30; y < 160; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe7d2"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="38" width="8" height="8" fill="' + (x % 32 ? "#7a1f2b" : "#c9a24a") + '"/>';
    let win = "";
    for (let x = 34; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d8cfba"/>' + tiles +
      '<rect x="0" y="34" width="400" height="16" fill="#4a1520"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#26262a"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="cn-flk" style="animation-delay:-' + (i * 0.6) + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="34" y="56" width="332" height="34" rx="3" fill="#111"/><rect x="34" y="56" width="332" height="3" fill="#fff"/>' +
      '<text x="48" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Grand Av&#8211;Newtown</text>' +
      bullet(318, 74, "M", "#ff6319") + bullet(344, 74, "R", "#fccc0a", true) +
      [16, 384].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="140" fill="#5c6b78"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="100" width="300" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="138" width="300" height="5" fill="#6b7280"/>' + win +
        '<rect x="282" y="108" width="22" height="30" rx="3" fill="#2b3036"/>' + bullet(293, 122, "R", "#fccc0a", true) +
        '<circle cx="300" cy="152" r="3" fill="#fff6c2"/>' +
        '<path d="M100 100v62M200 100v62" stroke="#9aa1aa" stroke-width="1.5"/>' +
      '</g>' +
      '<rect x="0" y="168" width="400" height="8" fill="#eab308"/><rect x="0" y="176" width="400" height="30" fill="#a8a296"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#33363c"/>' +
      tag("CNN", 30, 242, 32, GOLD, -5) + tag("CHANNEL 10", 200, 240, 22, RED, -4));
  }

  /* 2. The Queens Coliseum on Jamaica Av: two floors of shops behind the long red marquee, sneakers stacked in the windows, a bus going by */
  function coliseum() {
    let bulbs = "";
    for (let x = 48; x < 356; x += 10) bulbs += '<circle class="cn-bulb' + ((x / 10) % 2 ? " cn-bulb2" : "") + '" cx="' + x + '" cy="78" r="2.2" fill="#fff3b0"/><circle class="cn-bulb' + ((x / 10) % 2 ? "" : " cn-bulb2") + '" cx="' + x + '" cy="108" r="2.2" fill="#fff3b0"/>';
    let upper = "";
    for (let x = 58; x < 330; x += 46) upper += '<rect x="' + x + '" y="36" width="30" height="30" fill="#2c3a4a"/><rect class="cn-win" style="animation-delay:-' + (x % 7) * 0.4 + 's" x="' + (x + 3) + '" y="39" width="24" height="24" fill="#ffd98a" opacity=".6"/>';
    const shoe = (x, y, c) => '<path d="M' + x + ' ' + y + 'h6q2-5 6-5l6 5h6q3 0 3 3v2h-27z" fill="' + c + '"/><path d="M' + x + ' ' + (y + 5) + 'h27" stroke="#fff" stroke-width="1.5"/>';
    let shelves = "";
    [[60, "#ffffff"], [92, RED], [124, "#111"], [60, "#f2c94c"], [92, "#ffffff"], [124, "#2f80ed"]].forEach((s, i) => { shelves += shoe(s[0], i < 3 ? 136 : 152, s[1]); });
    [[254, "#ffffff"], [286, "#27ae60"], [318, RED], [254, "#111"], [286, "#ffffff"], [318, GOLD]].forEach((s, i) => { shelves += shoe(s[0], i < 3 ? 136 : 152, s[1]); });
    return svg(
      '<rect width="400" height="260" fill="url(#c2)"/>' +
      '<rect x="36" y="24" width="328" height="160" fill="#8a4b34"/>' +
      (function () { let s = ""; for (let y = 30; y < 184; y += 8) s += '<path d="M36 ' + y + 'h328" stroke="#7a412c" stroke-width="1"/>'; return s; })() +
      '<rect x="32" y="18" width="336" height="8" fill="#e8dcc2"/>' + upper +
      /* the marquee */
      '<rect x="40" y="72" width="320" height="42" fill="#b3121f" stroke="#e8dcc2" stroke-width="3"/>' + bulbs +
      lbl(200, 101, "COLISEUM", 24, "#fff", 8) +
      /* shop windows */
      '<rect x="48" y="122" width="120" height="58" fill="#1d2630" stroke="#e8dcc2" stroke-width="2"/><path d="M48 148h120M48 164h120" stroke="#8a8f96" stroke-width="2"/>' +
      '<rect x="244" y="122" width="112" height="58" fill="#1d2630" stroke="#e8dcc2" stroke-width="2"/><path d="M244 148h112M244 164h112" stroke="#8a8f96" stroke-width="2"/>' +
      shelves +
      '<rect x="180" y="122" width="58" height="62" fill="#0f1418" stroke="#e8dcc2" stroke-width="2"/><path d="M209 122v62" stroke="#e8dcc2" stroke-width="2"/>' +
      lbl(200, 196, "JAMAICA AV", 7, "#3a2a20", 3) +
      /* sidewalk + people + street */
      '<rect x="0" y="184" width="400" height="20" fill="#9a958c"/>' +
      person(20, 172, "#2b2b33", "cn-walk") + person(20, 172, "#5a3a2a", "cn-walk cn-walk2") + person(20, 172, "#283a52", "cn-walk cn-walk3") +
      '<rect x="0" y="204" width="400" height="56" fill="#2a2c30"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="cn-bus"><rect x="0" y="206" width="150" height="40" rx="5" fill="#e9edf2" stroke="#6b7280" stroke-width="1.5"/><rect x="0" y="232" width="150" height="5" fill="#0039a6"/>' +
        (function () { let w = ""; for (let x = 8; x < 130; x += 22) w += '<rect x="' + x + '" y="212" width="16" height="14" rx="2" fill="#8fb3d6"/>'; return w; })() +
        '<rect x="132" y="210" width="15" height="18" rx="2" fill="#8fb3d6"/><circle cx="28" cy="248" r="6" fill="#111"/><circle cx="122" cy="248" r="6" fill="#111"/></g>',
      sky("c2", "#7eb6e6", "#f5e3b8"));
  }

  /* 3. Terrace on the Park, Flushing Meadows: the 1964 World's Fair heliport, a glassy two-level box up on four big tapered pillars, a helicopter crossing at sunset */
  function terrace() {
    let glass = "";
    for (let x = 112; x < 290; x += 14) glass += '<rect class="cn-win' + (x % 3 ? " cn-win2" : "") + '" x="' + x + '" y="56" width="10" height="16" fill="#ffd27a" opacity=".7"/><rect x="' + x + '" y="80" width="10" height="16" fill="#ffc46b" opacity=".75"/>';
    const pillar = x => '<path d="M' + x + ' 104h26l-8 96h-10z" fill="#e8e2d4"/><path d="M' + (x + 18) + ' 104h8l-8 96h-2z" fill="#c8bfae"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c3)"/>' +
      '<circle cx="320" cy="150" r="26" fill="#ffcf73" opacity=".85"/>' +
      /* far tree line */
      '<path d="M0 196q20-20 40 0q20-24 46 0q22-18 44 0q24-22 48 0q20-18 40 0q26-24 52 0q20-16 40 0q24-22 50 0q20-18 40 0V214H0z" fill="#2f4a34"/>' +
      /* the building: deck, two glass floors, roof */
      '<rect x="98" y="44" width="204" height="8" fill="#f2ede2"/>' +
      '<rect x="104" y="52" width="192" height="24" fill="#2b3442"/><rect x="100" y="76" width="200" height="4" fill="#f2ede2"/>' +
      '<rect x="104" y="80" width="192" height="20" fill="#2b3442"/>' + glass +
      '<rect x="92" y="100" width="216" height="8" fill="#f2ede2"/>' +
      /* roof railing (the old helipad) */
      '<path d="M100 44v-6h200v6" stroke="#f2ede2" stroke-width="1.5" fill="none"/>' +
      pillar(104) + pillar(148) + pillar(226) + pillar(270) +
      /* lawn + path */
      '<rect x="0" y="204" width="400" height="56" fill="#4f7a3a"/><path d="M160 260l30-56h20l30 56z" fill="#cdbf9e"/>' +
      '<g class="cn-sway"><path d="M30 214v-30" stroke="#4a3626" stroke-width="5"/><circle cx="30" cy="176" r="18" fill="#3c6b3a"/></g>' +
      '<g class="cn-sway cn-sway2"><path d="M366 214v-26" stroke="#4a3626" stroke-width="5"/><circle cx="366" cy="182" r="16" fill="#3c6b3a"/></g>' +
      /* the helicopter */
      '<g class="cn-heli"><path d="M20 30h26q8 0 8 7t-8 7H24q-6 0-6-6z" fill="#1f2a36"/><path d="M20 36H0" stroke="#1f2a36" stroke-width="3"/><path d="M-2 30v12" stroke="#1f2a36" stroke-width="3"/>' +
        '<rect x="42" y="31" width="9" height="6" rx="2" fill="#9fd0ff"/><path d="M26 46v4M44 46v4M20 50h32" stroke="#1f2a36" stroke-width="2"/>' +
        '<path d="M36 30v-4" stroke="#1f2a36" stroke-width="2"/><rect class="cn-rotor" x="12" y="24" width="48" height="2.5" rx="1" fill="#1f2a36"/></g>' +
      lbl(200, 250, "FLUSHING MEADOWS, A WALK FROM LEFRAK", 9, "#f4ead8", 2),
      sky("c3", "#3b2b5a", "#f2a65a"));
  }

  /* 4. The Queens Zoo aviary: the white geodesic dome from the 1964 Fair, trees around it, birds circling */
  function aviary() {
    const cx = 200, cy = 196, r = 120, st = 24, hgt = st * 0.866;
    let lat = "";
    for (let row = 0; row < 7; row++) {
      const y0 = cy - row * hgt, off = (row % 2) * st / 2;
      lat += '<path d="M60 ' + y0.toFixed(1) + 'H340" stroke="#f4f6f8" stroke-width="1.6"/>';
      for (let x = 60 - st + off; x < 360; x += st) lat += '<path d="M' + x.toFixed(1) + ' ' + y0.toFixed(1) + 'L' + (x + st / 2).toFixed(1) + ' ' + (y0 - hgt).toFixed(1) + 'L' + (x + st).toFixed(1) + ' ' + y0.toFixed(1) + '" stroke="#f4f6f8" stroke-width="1.6" fill="none"/>';
    }
    const dome = 'M' + (cx - r) + ' ' + cy + 'A' + r + ' ' + r + ' 0 0 1 ' + (cx + r) + ' ' + cy + 'z';
    const bird = (x, y, cls) => '<g class="cn-bird ' + cls + '"><g class="cn-flap"><path d="M' + x + ' ' + y + 'q5-6 10 0q5-6 10 0" stroke="#1d2b3a" stroke-width="2" fill="none"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#c4)"/>' +
      '<path d="' + dome + '" fill="#cfe3e8" opacity=".45"/>' +
      '<g clip-path="url(#cnDome)">' + lat + '</g>' +
      '<path d="M' + (cx - r) + ' ' + cy + 'A' + r + ' ' + r + ' 0 0 1 ' + (cx + r) + ' ' + cy + '" stroke="#f4f6f8" stroke-width="3.5" fill="none"/>' +
      '<g class="cn-sway"><circle cx="40" cy="186" r="30" fill="#3f7a3a"/><circle cx="72" cy="196" r="22" fill="#356b33"/></g>' +
      '<g class="cn-sway cn-sway2"><circle cx="352" cy="184" r="32" fill="#3f7a3a"/><circle cx="318" cy="198" r="20" fill="#356b33"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5b8a46"/><path d="M0 222q200-18 400 0v8q-200-18-400 0z" fill="#d6c8a6"/>' +
      person(150, 196, "#2b2b33") + person(176, 199, "#7a3a2a") +
      bird(60, 50, "") + bird(250, 40, "cn-bird2") + bird(150, 70, "cn-bird3") + bird(320, 80, "") +
      lbl(200, 250, "QUEENS ZOO AVIARY", 9, "#f4ead8", 3),
      sky("c4", "#78b9e6", "#e6f2f6") + '<clipPath id="cnDome"><path d="' + dome + '"/></clipPath>');
  }

  /* corner backdrop: Elmhurst Hospital's tall pale tower on Broadway, rows of windows, the rooftop light */
  const hospital = () => {
    let w = "";
    for (let y = 30; y < 120; y += 9) for (let x = 168; x < 286; x += 10) w += '<rect class="cn-win' + ((x + y) % 3 ? " cn-win3" : "") + '" x="' + x + '" y="' + y + '" width="6" height="5" fill="#ffe7a8" opacity=".55"/>';
    return '<rect x="160" y="22" width="132" height="100" fill="#b9ad97"/><rect x="160" y="22" width="132" height="5" fill="#d6ccb8"/>' + w +
      '<rect x="120" y="70" width="44" height="52" fill="#a99d87"/><rect x="292" y="62" width="50" height="60" fill="#a99d87"/>' +
      '<circle class="cn-bulb" cx="226" cy="18" r="2.5" fill="#ff4d4d"/>';
  };

  /* 5. Broadway and 41 Av in Elmhurst: green street signs, CNN tagged on the wall, Elmhurst Hospital's tower behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) + hospital() +
      '<path d="M0 122V100h40v-8h34v8h36v22zM300 122V96h40v-6h36v6h24v26z" fill="#151a24"/>' +
      '<rect x="12" y="122" width="300" height="98" fill="#3a3530"/>' +
      (function () { let s = ""; for (let y = 132; y < 220; y += 11) s += '<path d="M12 ' + y + 'h300" stroke="#302b27" stroke-width="1"/>'; return s; })() +
      tag("CAPONE-N-NOREAGA", 24, 172, 23, GOLD, -6) +
      tag("CNN", 30, 210, 24, RED, -3) + tag("T.O.N.Y.", 150, 212, 20, ARMY, -4) +
      '<rect x="332" y="80" width="5" height="140" fill="#1d2329"/><path d="M334 82h-22" stroke="#1d2329" stroke-width="5"/><path class="cn-flk" d="M300 86h24l-6 8h-12z" fill="#ffe7a8"/>' +
      '<rect x="318" y="118" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="356" y="131" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Broadway</text>' +
      '<rect x="324" y="140" width="64" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="356" y="153" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">41 Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car(0, 226, RED, "cn-carR") + car(0, 226, "#cfd4da", "cn-carR cn-carR2") +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#f4ead8" letter-spacing="2">ELMHURST, QUEENS</text>',
      sky("c5", "#0b0f1e", "#3a2a3a"));
  }

  window.SCENES = { grandav, coliseum, terrace, aviary, corner };
})();
