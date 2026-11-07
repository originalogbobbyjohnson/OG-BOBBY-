/* andre3000 scenes (Regions tab: Atlanta; East Point - Tri-Cities High, Headland and Delowe). CSS classes prefixed a3- (the page's own anim-train is kept).
   1 Lakewood/Ft. McPherson station on MARTA's Red + Gold lines, the stop for Lakewood Heights and the Headland Dr side of East Point
     ("me and my partner rode the MARTA through the hood" - Elevators), a silver train sliding in.
   2 Tri-Cities High School, East Point, where he met Big Boi: red-brick front, red + black + silver Bulldogs banner, music notes out the arts wing.
   3 Spaghetti Junction (the I-85 / I-285 interchange, title of the Stankonia track): stacked concrete ramps, headlights streaming.
   4 Stankonia Studios at night, OutKast's own studio in Atlanta: brick front, the funky marquee lights chasing.
   5 Headland Dr and Delowe Dr in East Point ("on Headland and Delowe was the start of something good"): green signs, ANDRE 3000 tagged,
     the SkyView wheel at Centennial Olympic Park (OutKast's 2014 homecoming shows) turning far behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes a3blink{0%,100%{opacity:1}50%{opacity:.25}}.a3-blink{animation:a3blink 1.2s infinite}.a3-b2{animation-delay:-.4s}.a3-b3{animation-delay:-.8s}' +
    '@keyframes a3wave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.a3-flag{transform-box:fill-box;transform-origin:0% 50%;animation:a3wave 1.4s ease-in-out infinite}' +
    '@keyframes a3note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-44px);opacity:0}}.a3-note{animation:a3note 2.4s ease-out infinite}.a3-n2{animation-delay:-.8s}.a3-n3{animation-delay:-1.6s}' +
    '@keyframes a3pad{0%,100%{opacity:.25}50%{opacity:1}}.a3-pad{animation:a3pad .8s steps(1) infinite}' +
    '@keyframes a3swing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.a3-swing{transform-box:view-box;transform-origin:200px 0px;animation:a3swing 2.6s ease-in-out infinite}' +
    '@keyframes a3spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.a3-spin{transform-box:fill-box;transform-origin:50% 50%;animation:a3spin 30s linear infinite}' +
    '@keyframes a3spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.a3-sp{animation:a3spray 1.4s ease-out infinite}.a3-sp2{animation-delay:.5s}' +
    '@keyframes a3tw{0%,100%{opacity:.3}50%{opacity:1}}.a3-tw{animation:a3tw 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 5 ? "" : "a3-tw") + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const RD = "#ce242b", GD = "#d4a723", TEAL = "#3fc1a5", ORANGE = "#f05a28", YEL = "#f7d046", CLAY = "#b5502b";

  /* 1. Lakewood/Ft. McPherson station */
  function a3station() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="120" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="110" width="330" height="66" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="148" width="330" height="6" fill="#f08a24"/><rect x="24" y="156" width="330" height="4" fill="#1f5fa8"/>' +
      '<rect x="334" y="114" width="18" height="56" rx="4" fill="#aeb4ba"/><circle cx="344" cy="164" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="114" width="60" height="12" rx="2" fill="#111"/><text x="300" y="123" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">AIRPORT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#a3s1)"/>' +
      /* retaining wall beside the tracks */
      '<rect x="0" y="40" width="400" height="66" fill="#a49d92"/><g stroke="#8e877c" stroke-width="2">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 40v66"/>').join("") + '</g>' +
      '<rect x="0" y="34" width="400" height="8" fill="#6f6a62"/>' +
      /* street-level railing + old storefront roofs above */
      '<g fill="#7a4a36"><rect x="20" y="10" width="70" height="24"/><rect x="100" y="16" width="56" height="18"/><rect x="250" y="8" width="80" height="26"/></g>' +
      '<path d="M0 34h400" stroke="#333" stroke-width="2"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20 + 10) + ' 24v10" stroke="#333" stroke-width="1.5"/>').join("") + '<path d="M0 24h400" stroke="#333" stroke-width="1.5"/>' +
      /* lights on the wall */
      '<rect class="a3-blink" x="60" y="60" width="40" height="4" fill="#fff3c4"/><rect class="a3-blink a3-b2" x="300" y="60" width="40" height="4" fill="#fff3c4"/>' +
      '<rect x="0" y="100" width="400" height="8" fill="#5d6772"/>' +
      train +
      '<rect x="0" y="176" width="400" height="8" fill="#f2c200"/><rect x="0" y="184" width="400" height="76" fill="#8f8a80"/>' +
      '<rect x="40" y="196" width="320" height="40" rx="3" fill="#111"/><text x="52" y="222" ' + font + ' font-size="16" fill="#fff">Lakewood/Ft. McPherson</text>' + badge(256, 216, "RED", RD) + badge(302, 216, "GOLD", GD, true),
      sky("a3s1", "#6aa7dc", "#f2d6a6"));
  }

  /* 2. Tri-Cities High School */
  function a3tricities() {
    const winrow = y => Array.from({ length: 8 }, (_, i) => '<rect x="' + (60 + i * 36) + '" y="' + y + '" width="20" height="22" fill="#cfe3ef" stroke="#ddd" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#a3s2)"/>' +
      '<g fill="#3d6a3a"><circle cx="16" cy="130" r="30"/><circle cx="390" cy="126" r="26"/></g>' +
      '<rect x="44" y="76" width="312" height="124" fill="#8e3b2c"/><g stroke="#7a3226" stroke-width="1">' + Array.from({ length: 12 }, (_, i) => '<path d="M44 ' + (86 + i * 10) + 'h312"/>').join("") + '</g>' +
      '<rect x="40" y="70" width="320" height="8" fill="#1c1c1f"/>' + winrow(88) +
      '<rect x="96" y="120" width="208" height="24" fill="#1c1c1f"/><text x="200" y="137" text-anchor="middle" ' + font + ' font-size="12.5" fill="#d9dde1">TRI-CITIES HIGH SCHOOL</text>' +
      /* entrance */
      '<rect x="170" y="150" width="60" height="50" fill="#d9dde1"/><rect x="178" y="160" width="20" height="40" fill="#2b3a46"/><rect x="202" y="160" width="20" height="40" fill="#2b3a46"/>' +
      /* bulldogs banner */
      '<rect x="62" y="152" width="80" height="40" fill="#c8102e" stroke="#1c1c1f" stroke-width="3"/><text x="102" y="169" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GO</text><text x="102" y="184" text-anchor="middle" ' + font + ' font-size="13" fill="#d9dde1">BULLDOGS</text>' +
      /* arts wing window with notes */
      '<rect x="262" y="152" width="70" height="36" fill="#f7e7a8" stroke="#ddd" stroke-width="2"/><path d="M297 152v36" stroke="#ddd" stroke-width="2"/>' +
      '<g fill="' + YEL + '" ' + font + '><text class="a3-note" x="270" y="150" font-size="18">&#9835;</text><text class="a3-note a3-n2" x="300" y="146" font-size="15">&#9834;</text><text class="a3-note a3-n3" x="320" y="150" font-size="17">&#9835;</text></g>' +
      /* flag */
      '<rect x="24" y="30" width="4" height="170" fill="#bbb"/><g class="a3-flag"><rect x="28" y="34" width="44" height="26" fill="#c8102e"/><rect x="28" y="42" width="44" height="5" fill="#1c1c1f"/><rect x="28" y="48" width="44" height="5" fill="#d9dde1"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4f7a3c"/><path d="M180 200h40l20 60h-80z" fill="#cfc8b8"/>' +
      label(120, 160, "TRI-CITIES HIGH, EAST POINT"),
      sky("a3s2", "#5ea0dc", "#dbeef8"));
  }

  /* 3. Spaghetti Junction: stacked ramps of the I-85 / I-285 interchange at dusk */
  function a3junction() {
    const ramp = (y, curve, col) => '<path d="M-20 ' + y + 'q210 ' + curve + ' 440 0v12q-230 ' + curve + ' -440 0z" fill="' + col + '"/>';
    const pillars = (y, xs) => xs.map(x => '<rect x="' + (x - 5) + '" y="' + y + '" width="10" height="' + (214 - y) + '" fill="#8d8a84"/>').join("");
    const lights = (cls, y, col) => Array.from({ length: 4 }, (_, i) => '<g class="' + cls + ' a3-c' + i + '"><circle cx="0" cy="' + y + '" r="2.4" fill="' + col + '"/><circle cx="7" cy="' + y + '" r="2.4" fill="' + col + '"/></g>').join("");
    return svg(
      '<style>@keyframes a3R{from{transform:translateX(-30px)}to{transform:translateX(430px)}}@keyframes a3L{from{transform:translateX(430px)}to{transform:translateX(-30px)}}' +
      '.a3-r{animation:a3R 3.2s linear infinite}.a3-l{animation:a3L 3.8s linear infinite}.a3-c1{animation-delay:-.8s}.a3-c2{animation-delay:-1.6s}.a3-c3{animation-delay:-2.4s}</style>' +
      '<rect width="400" height="260" fill="url(#a3s3)"/>' + stars(14) +
      '<g fill="#2c3550"><rect x="20" y="110" width="30" height="60"/><rect x="330" y="96" width="40" height="74"/><rect x="60" y="126" width="20" height="44"/></g>' +
      pillars(60, [70, 200, 330]) + ramp(54, -30, "#bdb8ae") + lights("a3-r", 52, "#fff3c4") +
      pillars(104, [130, 270]) + ramp(98, 26, "#a9a49a") + lights("a3-l", 106, "#ff5a4a") +
      pillars(150, [40, 210, 360]) + ramp(144, -18, "#97928a") + lights("a3-r", 144, "#fff3c4") +
      '<rect x="0" y="214" width="400" height="46" fill="#2a2a2e"/><path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g transform="translate(300 176)"><rect x="-40" y="0" width="80" height="26" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="0" y="17" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">I-85 / I-285</text></g>' +
      label(120, 160, "SPAGHETTI JUNCTION"),
      sky("a3s3", "#24305e", "#f08a5a"));
  }

  /* 4. Stankonia Studios at night */
  function a3stankonia() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="a3-blink' + (i % 3 === 1 ? " a3-b2" : i % 3 === 2 ? " a3-b3" : "") + '" cx="' + (92 + i * 10.4) + '" cy="' + (i % 2 ? 72 : 72) + '" r="2.6" fill="' + YEL + '"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="a3-blink' + (i % 3 === 2 ? " a3-b2" : i % 3 === 0 ? " a3-b3" : "") + '" cx="' + (92 + i * 10.4) + '" cy="116" r="2.6" fill="' + YEL + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#a3s4)"/>' + stars(22) +
      '<g fill="#2b4a33"><circle cx="20" cy="150" r="34"/><circle cx="380" cy="146" r="30"/></g>' +
      /* building */
      '<rect x="40" y="60" width="320" height="150" fill="#6e3b2c"/><g stroke="#5c3124" stroke-width="1">' + Array.from({ length: 14 }, (_, i) => '<path d="M40 ' + (70 + i * 10) + 'h320"/>').join("") + '</g>' +
      '<rect x="36" y="54" width="328" height="8" fill="#2a1a14"/>' +
      /* marquee */
      '<rect x="84" y="66" width="232" height="56" rx="4" fill="#120c1c" stroke="' + ORANGE + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="99" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + TEAL + '" letter-spacing="2">STANKONIA</text>' +
      '<text x="200" y="111" text-anchor="middle" ' + font + ' font-size="8" fill="#f7e7a8" letter-spacing="3">STUDIOS</text>' +
      /* door + windows with warm light */
      '<rect x="180" y="146" width="40" height="64" fill="#1b1b22"/><rect x="186" y="152" width="28" height="30" fill="#ffcf7a" opacity=".85"/>' +
      '<rect x="70" y="146" width="70" height="36" fill="#ffcf7a" opacity=".8"/><rect x="260" y="146" width="70" height="36" fill="#ffcf7a" opacity=".8"/>' +
      '<path d="M105 146v36M295 146v36" stroke="#6e3b2c" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#26262b"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      label(130, 140, "STANKONIA STUDIOS, ATLANTA"),
      sky("a3s4", "#140f2e", "#5a2f5e"));
  }

  /* 5. Headland Dr and Delowe Dr */
  function a3corner() {
    const spokes = Array.from({ length: 12 }, (_, i) => { const a = i / 12 * Math.PI * 2; return '<path d="M0 0L' + (Math.cos(a) * 46).toFixed(1) + ' ' + (Math.sin(a) * 46).toFixed(1) + '" stroke="#d9dde1" stroke-width="1.2"/><rect x="' + (Math.cos(a) * 46 - 3.5).toFixed(1) + '" y="' + (Math.sin(a) * 46 - 3).toFixed(1) + '" width="7" height="6" rx="1.5" fill="' + [TEAL, ORANGE, YEL][i % 3] + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#a3s5)"/>' +
      /* SkyView wheel far behind */
      '<g transform="translate(300 74)" opacity=".92"><circle r="46" fill="none" stroke="#d9dde1" stroke-width="3"/><g class="a3-spin">' + spokes + '</g><circle r="5" fill="#d9dde1"/></g>' +
      '<path d="M300 74l-26 70M300 74l26 70" stroke="#c0c6cc" stroke-width="4"/>' +
      '<g fill="#3c4a5c"><rect x="200" y="118" width="26" height="30"/><rect x="356" y="104" width="30" height="44"/></g>' +
      /* wall */
      '<rect x="0" y="100" width="270" height="106" fill="#5c5f6a"/>' + '<g stroke="#50535d" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (110 + i * 10) + 'h270"/>').join("") + '</g>' +
      tag("ANDRE", 18, 156, 40, TEAL, -6) + tag("3000", 150, 190, 34, ORANGE, -4) + tag("ATLiENS", 160, 134, 16, YEL, 6) +
      '<g fill="' + ORANGE + '"><circle class="a3-sp" cx="250" cy="176" r="3"/><circle class="a3-sp a3-sp2" cx="242" cy="184" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="330" y="150" width="6" height="60" fill="#6b6b6b"/><rect x="330" y="140" width="6" height="12" fill="#6b6b6b"/>' + sign(282, 140, 96, "Headland Dr") + sign(290, 164, 84, "Delowe Dr") +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>',
      sky("a3s5", "#7cc6e8", "#f6e3b4"));
  }

  window.SCENES = { a3station, a3tricities, a3junction, a3stankonia, a3corner };
})();
