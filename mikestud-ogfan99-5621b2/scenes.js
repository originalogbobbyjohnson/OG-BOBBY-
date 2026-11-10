/* mikestud scenes (Regions tab: Boston + New England; Cranston, Rhode Island - born there, pitched at St. Ray's in Pawtucket, then Duke).
   CSS classes prefixed ms- (the page's own anim-train slides the bus in).
   1 RIPTA 21 Reservoir/Garden City rolling into Garden City Center, Cranston.
   2 McCoy Stadium, Pawtucket: the old home of the PawSox, light towers and the mound - baseball first.
   3 The Big Blue Bug up on the roof beside the interstate in Providence, cars flying by.
   4 The Towers in Narragansett: the stone arch and its two round towers over Ocean Rd - Boys of the Summer.
   5 Broad St and Post Rd in Pawtuxet Village, Cranston: green signs, MIKE STUD tagged, the Pawtuxet falls and stone bridge behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes msball{0%{transform:translate(0,0)}100%{transform:translate(-150px,-60px)}}.ms-ball{animation:msball 1.6s ease-in infinite}' +
    '@keyframes msglow{0%,100%{opacity:.35}50%{opacity:1}}.ms-glow{animation:msglow 1.3s ease-in-out infinite}.ms-glow2{animation-delay:-.65s}' +
    '@keyframes mscar{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.ms-car{animation:mscar 4s linear infinite}.ms-car2{animation-duration:6s;animation-delay:-2s}' +
    '@keyframes mscarL{from{transform:translateX(470px)}to{transform:translateX(-90px)}}.ms-carL{animation:mscarL 5s linear infinite}' +
    '@keyframes mswave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.ms-wave{animation:mswave 3s ease-in-out infinite}.ms-wave2{animation-delay:-1.5s}' +
    '@keyframes msant{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.ms-ant{transform-box:fill-box;transform-origin:50% 100%;animation:msant 1.8s ease-in-out infinite}' +
    '@keyframes msfall{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(16px);opacity:.2}}.ms-fall{animation:msfall 1s linear infinite}.ms-fall2{animation-delay:-.5s}' +
    '@keyframes msgull{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.ms-gull{animation:msgull 12s linear infinite}' +
    '@keyframes msspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ms-sp{animation:msspray 1.4s ease-out infinite}.ms-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const NAVY = "#1d3557", SKY = "#5fa8d3", RED = "#c8102e", SAND = "#e9d8b4";
  const tree = (x, base, r, c) => '<g><rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#5a4632"/><circle cx="' + x + '" cy="' + (base - r) + '" r="' + r * .6 + '" fill="' + (c || "#3f6e3a") + '"/><circle cx="' + (x - r * .45) + '" cy="' + (base - r * .7) + '" r="' + r * .42 + '" fill="' + (c || "#3f6e3a") + '"/><circle cx="' + (x + r * .45) + '" cy="' + (base - r * .7) + '" r="' + r * .42 + '" fill="' + (c || "#3f6e3a") + '"/></g>';
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="24" height="8" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 14) + '" r="4" fill="#111"/><rect x="44" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>';

  /* 1. RIPTA 21 into Garden City Center */
  function msstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (50 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="32" y="116" width="322" height="78" rx="10" fill="#f4f6f7" stroke="#6d757c" stroke-width="2"/>' + win +
      '<path d="M32 162h322v10H32z" fill="' + NAVY + '"/><path d="M32 174h322v5H32z" fill="' + SKY + '"/>' +
      '<rect x="318" y="124" width="32" height="42" rx="4" fill="#1b2630"/><rect x="250" y="118" width="100" height="11" rx="2" fill="#111"/><text x="300" y="127" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">21 GARDEN CITY</text>' +
      '<circle cx="80" cy="194" r="12" fill="#222"/><circle cx="80" cy="194" r="5" fill="#888"/><circle cx="300" cy="194" r="12" fill="#222"/><circle cx="300" cy="194" r="5" fill="#888"/><circle cx="350" cy="178" r="3" fill="#fff6c2" class="ms-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mss1)"/>' +
      /* shopping-center storefronts behind */
      '<rect x="0" y="70" width="400" height="44" fill="#d8c7a8"/><path d="M0 70h400" stroke="#8a6a4a" stroke-width="5"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (10 + i * 50) + '" y="82" width="38" height="28" fill="#6f8ea6"/><rect x="' + (10 + i * 50) + '" y="76" width="38" height="5" fill="' + ['#2e5e4e', '#7a2e2e', '#2e4a7a', '#6a5a2e'][i % 4] + '"/>').join("") +
      tree(20, 116, 30) + tree(384, 116, 28) +
      bus +
      '<rect x="0" y="206" width="400" height="26" fill="#9a9a96"/>' +
      /* RIPTA stop sign post */
      '<rect x="20" y="150" width="4" height="60" fill="#777"/><rect x="8" y="138" width="28" height="18" rx="2" fill="' + NAVY + '"/><text x="22" y="151" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">21</text>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      label(60, 280, "RIPTA 21 · GARDEN CITY CENTER · CRANSTON"),
      sky("mss1", "#7fb4e0", "#e4eef4"));
  }

  /* 2. McCoy Stadium, Pawtucket */
  function msmccoy() {
    const tower = (x) => '<g><rect x="' + (x - 2) + '" y="20" width="4" height="96" fill="#8a8f96"/><rect x="' + (x - 14) + '" y="12" width="28" height="14" fill="#5d6268"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (x - 11 + i * 4.4) + '" cy="16" r="1.6" fill="#fff8d0" class="ms-glow' + (i % 2 ? ' ms-glow2' : '') + '"/><circle cx="' + (x - 11 + i * 4.4) + '" cy="22" r="1.6" fill="#fff8d0" class="ms-glow' + (i % 2 ? '' : ' ms-glow2') + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mss2)"/>' +
      tower(40) + tower(360) +
      /* grandstand */
      '<path d="M30 116h340l-20 -40h-300z" fill="#c9c3b6"/>' +
      Array.from({ length: 5 }, (_, r) => '<path d="M' + (52 + r * 4) + ' ' + (82 + r * 7) + 'h' + (296 - r * 8) + '" stroke="#2f6b4a" stroke-width="4"/>').join("") +
      '<rect x="30" y="112" width="340" height="8" fill="' + NAVY + '"/>' +
      /* round ramp towers */
      '<rect x="12" y="70" width="30" height="56" rx="14" fill="#d8d2c4" stroke="#a49e90"/><rect x="358" y="70" width="30" height="56" rx="14" fill="#d8d2c4" stroke="#a49e90"/>' +
      '<text x="200" y="74" text-anchor="middle" ' + font + ' font-size="12" fill="#ffb000">McCOY STADIUM</text>' +
      /* field */
      '<rect x="0" y="120" width="400" height="112" fill="#3f8a3a"/>' +
      '<path d="M200 232l-120 -70l120 -40l120 40z" fill="#b9825a"/><path d="M200 222l-80 -46l80 -28l80 28z" fill="#3f8a3a"/>' +
      '<ellipse cx="200" cy="182" rx="16" ry="7" fill="#b9825a"/><rect x="194" y="180" width="12" height="3" fill="#fff"/>' +
      '<g fill="#fff"><rect x="196" y="216" width="8" height="8" transform="rotate(45 200 220)"/><rect x="276" y="172" width="7" height="7"/><rect x="117" y="172" width="7" height="7"/><rect x="196" y="144" width="7" height="7"/></g>' +
      '<g class="ms-ball"><circle cx="210" cy="176" r="3.5" fill="#fff" stroke="' + RED + '" stroke-width="1"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#2c3a2c"/>' +
      label(40, 320, "McCOY STADIUM · PAWTUCKET · THE OLD PAWSOX HOME"),
      sky("mss2", "#0d1b3a", "#3a5a8a"));
  }

  /* 3. The Big Blue Bug beside the interstate */
  function msbug() {
    return svg(
      '<rect width="400" height="260" fill="url(#mss3)"/>' +
      /* building + roof */
      '<rect x="110" y="110" width="200" height="70" fill="#d9d4c8" stroke="#a8a294"/><path d="M104 110h212" stroke="#7a756a" stroke-width="5"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (124 + i * 36) + '" y="126" width="22" height="18" fill="#6f8ea6"/>').join("") +
      /* the bug */
      '<g><ellipse cx="160" cy="92" rx="26" ry="16" fill="#2f6fd6" stroke="#173f80" stroke-width="2"/><ellipse cx="208" cy="90" rx="24" ry="17" fill="#2f6fd6" stroke="#173f80" stroke-width="2"/>' +
      '<ellipse cx="250" cy="82" rx="20" ry="18" fill="#2f6fd6" stroke="#173f80" stroke-width="2"/>' +
      '<circle cx="258" cy="76" r="6" fill="#fff"/><circle cx="260" cy="76" r="3" fill="#111"/>' +
      '<g class="ms-ant"><path d="M254 66q4 -26 20 -30" stroke="#173f80" stroke-width="3" fill="none"/></g><g class="ms-ant" style="animation-delay:-.9s"><path d="M244 66q-2 -26 -16 -32" stroke="#173f80" stroke-width="3" fill="none"/></g>' +
      [146, 172, 196, 222].map(x => '<path d="M' + x + ' 104l-8 8M' + (x + 4) + ' 104l6 8" stroke="#173f80" stroke-width="3"/>').join("") + '</g>' +
      /* highway */
      '<rect x="0" y="180" width="400" height="52" fill="#4b4d52"/><path d="M0 206h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("ms-car", 188, RED) + car("ms-car ms-car2", 188, "#e7e7e7") + '<g transform="translate(0 26)">' + car("ms-carL", 188, "#2a2a2a") + '</g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      label(80, 240, "THE BIG BLUE BUG · BY THE HIGHWAY · PROVIDENCE"),
      sky("mss3", "#86c0ec", "#eef4f8"));
  }

  /* 4. The Towers, Narragansett */
  function mstowers() {
    const ttower = (x) => '<g><rect x="' + (x - 22) + '" y="70" width="44" height="110" fill="#8a8478"/>' +
      Array.from({ length: 7 }, (_, r) => '<path d="M' + (x - 22) + ' ' + (82 + r * 14) + 'h44" stroke="#6e685e" stroke-width="1.2"/>').join("") +
      '<path d="M' + (x - 28) + ' 72l28 -42l28 42z" fill="#9a4a32" stroke="#6a2e1e" stroke-width="2"/><rect x="' + (x - 6) + '" y="96" width="12" height="18" rx="6" fill="#2a2a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mss4)"/>' +
      '<g class="ms-gull"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* ocean */
      '<rect x="0" y="150" width="400" height="40" fill="#3f7fa8"/>' +
      '<g class="ms-wave"><path d="M0 162q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d6eef8" stroke-width="2" fill="none"/></g>' +
      '<g class="ms-wave ms-wave2"><path d="M0 176q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d6eef8" stroke-width="2" fill="none"/></g>' +
      /* the stone arch with two towers */
      '<path d="M120 180V110h160v70h-34v-30q0 -34 -46 -34t-46 34v30z" fill="#8a8478" stroke="#6e685e" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, r) => '<path d="M120 ' + (122 + r * 12) + 'h' + (r < 2 ? 160 : 34) + (r < 2 ? '' : 'M246 ' + (122 + r * 12) + 'h34') + '" stroke="#6e685e" stroke-width="1.2"/>').join("") +
      ttower(110) + ttower(290) +
      '<rect x="0" y="180" width="400" height="52" fill="' + SAND + '"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#c9b48a"/>' +
      label(90, 220, "THE TOWERS · NARRAGANSETT · OCEAN RD"),
      sky("mss4", "#5aa6e0", "#f6e3c4"));
  }

  /* 5. Broad St and Post Rd, Pawtuxet Village */
  function mscorner() {
    const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#msc1)"/>' +
      tree(30, 120, 40, "#4f7a3a") + tree(380, 118, 36, "#4f7a3a") +
      /* the stone bridge and the falls */
      '<path d="M40 104h320v20h-40q-20 -26 -40 0h-40q-20 -26 -40 0h-40q-20 -26 -40 0h-40z" fill="#8f877a" stroke="#6e685e" stroke-width="2"/>' +
      '<rect x="0" y="124" width="400" height="30" fill="#4f7f98"/>' +
      '<g stroke="#e4f2f8" stroke-width="2" opacity=".85">' + [96, 176, 256].map(x => '<path class="ms-fall" d="M' + (x - 10) + ' 120v12M' + (x - 4) + ' 118v14M' + (x + 2) + ' 118v14M' + (x + 8) + ' 120v12"/><path class="ms-fall ms-fall2" d="M' + (x - 7) + ' 122v10M' + (x + 5) + ' 122v10"/>').join("") + '</g>' +
      '<rect x="0" y="154" width="400" height="78" fill="#e2d6c4"/>' +
      '<g stroke="#c4b6a0" stroke-width="1">' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (170 + r * 16) + 'h400"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40 + (r % 2) * 20) + ' ' + (154 + r * 16) + 'v16"/>').join("")).join("") + '</g>' +
      tag("MIKE STUD", 22, 212, 40, SKY, -5) +
      tag("BOYS OF THE SUMMER", 236, 186, 11, RED, 4) + tag("CRANSTON", 236, 222, 18, "#ffb000", -3) +
      '<g fill="' + SKY + '" opacity=".75"><circle class="ms-sp" cx="206" cy="200" r="3"/><circle class="ms-sp ms-sp2" cx="214" cy="194" r="2.5"/><circle class="ms-sp" cx="210" cy="206" r="2"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      '<rect x="364" y="80" width="5" height="152" fill="#7a7f86"/>' +
      sign(290, 70, 106, "BROAD ST") + sign(296, 96, 100, "POST RD") +
      label(12, 330, "BROAD ST &amp; POST RD · PAWTUXET VILLAGE · CRANSTON"),
      sky("msc1", "#2a3a6a", "#e08a5a"));
  }

  window.SCENES = { msstop, msmccoy, msbug, mstowers, mscorner };
})();
