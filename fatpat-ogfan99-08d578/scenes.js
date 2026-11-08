/* fatpat scenes (Regions tab: Houston + Texas; the Dead End, the south edge of South Park, where MLK Blvd used to dead-end just past Airport Blvd - Houston Press; Wikipedia: Dead End Records named for that block). CSS classes and ids prefixed fp- (the page's own anim-train is kept).
   1 METRO 80 MLK/Lockwood bus pulling into the M L King Blvd @ Airport Blvd stop: wide boulevard, live oaks, one-story brick houses, the stop flag with the 80.
   2 Ghetto Dreams ("black lacquer screens, three story dreams, house on a hill ... private jet"): a little South Park house at night, a dream cloud above it with a three-story house on a hill, a jet crossing.
   3 Tops Drop ("trunks pop, tops drop, and the front end hop ... sunshine let it down"): a candy-red drop-top in the sun, the top folding, the trunk popping, the front end hopping.
   4 "Roll out the red carpet ... valet": a club door at night, velvet ropes, the red carpet rolling out, the valet stand, camera flashes popping, SUPERSTAR on the marquee.
   5 M L King Blvd and Airport Blvd, the old Dead End: green signs, FAT PAT tagged on the wall, the white art-deco air terminal at Hobby with its beacon turning far off behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fptw{0%,100%{opacity:.25}50%{opacity:1}}.fp-tw{animation:fptw 1.8s ease-in-out infinite}.fp-tw2{animation-delay:-.6s}.fp-tw3{animation-delay:-1.2s}' +
    '@keyframes fpjet{from{transform:translateX(-80px)}to{transform:translateX(200px)}}.fp-jet{animation:fpjet 6s linear infinite}' +
    '@keyframes fpbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.fp-bob{animation:fpbob 3.4s ease-in-out infinite}' +
    '@keyframes fptop{0%,15%{transform:rotate(0)}45%,80%{transform:rotate(-150deg)}100%{transform:rotate(0)}}.fp-top{transform-box:fill-box;transform-origin:100% 100%;animation:fptop 5s ease-in-out infinite}' +
    '@keyframes fptrunk{0%,30%{transform:rotate(0)}50%,80%{transform:rotate(-40deg)}100%{transform:rotate(0)}}.fp-trunk{transform-box:fill-box;transform-origin:0% 100%;animation:fptrunk 5s ease-in-out infinite}' +
    '@keyframes fphop{0%,100%{transform:rotate(0)}10%{transform:rotate(-4deg)}20%{transform:rotate(0)}30%{transform:rotate(-4deg)}40%{transform:rotate(0)}}.fp-hop{transform-box:fill-box;transform-origin:100% 100%;animation:fphop 2.4s ease-in-out infinite}' +
    '@keyframes fpsun{from{transform:rotate(0)}to{transform:rotate(360deg)}}.fp-sun{transform-box:fill-box;transform-origin:50% 50%;animation:fpsun 20s linear infinite}' +
    '@keyframes fproll{0%{transform:scaleX(.05)}60%,100%{transform:scaleX(1)}}.fp-roll{transform-box:fill-box;transform-origin:0% 50%;animation:fproll 4s ease-out infinite}' +
    '@keyframes fpflash{0%,82%,100%{opacity:0}86%{opacity:1}92%{opacity:.2}}.fp-fl{animation:fpflash 2.2s linear infinite}.fp-fl2{animation-delay:-.7s}.fp-fl3{animation-delay:-1.5s}' +
    '@keyframes fpchase{0%,100%{fill:#ffd23f}50%{fill:#fff6c2}}.fp-ch{animation:fpchase .8s steps(1) infinite}.fp-ch2{animation-delay:-.4s}' +
    '@keyframes fpbeam{from{transform:rotate(0)}to{transform:rotate(360deg)}}.fp-beam{transform-box:view-box;transform-origin:300px 66px;animation:fpbeam 5s linear infinite}' +
    '@keyframes fpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fp-sp{animation:fpspray 1.4s ease-out infinite}.fp-sp2{animation-delay:.45s}' +
    '@keyframes fpleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.fp-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:fpleaf 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="fp-tw' + (i % 3 ? " fp-tw" + (i % 3 + 1) : "") + '" cx="' + ((i * 83 + 17) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const METRO = "#1f4e79", BERRY = "#e0457b", GOLD = "#f5c542", CANDY = "#d81e3a";
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-5" y="0" width="10" height="44" fill="#5b4632"/><path d="M-5 12l-18 -10M5 10l18 -12" stroke="#5b4632" stroke-width="5"/><g class="fp-leaf"><ellipse cx="0" cy="-8" rx="44" ry="22" fill="#3f6b35"/><ellipse cx="-22" cy="-16" rx="22" ry="14" fill="#4d7d40"/><ellipse cx="22" cy="-14" rx="20" ry="12" fill="#4d7d40"/></g></g>';
  const house = (x, y, wall, roof, lit) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M-4 0l38 -22l38 22z" fill="' + roof + '"/><rect x="0" y="0" width="68" height="34" fill="' + wall + '"/>' +
    '<rect x="8" y="8" width="16" height="13" fill="' + (lit ? "#ffd27a" : "#3f4a56") + '"/><rect x="44" y="8" width="16" height="13" fill="' + (lit ? "#ffd27a" : "#3f4a56") + '"/><rect x="28" y="14" width="12" height="20" fill="#5a3a26"/></g>';
  const swanga = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="#222"/><circle cx="' + cx + '" cy="' + cy + '" r="7" fill="#d6dbe0" stroke="#8a9096" stroke-width="1.5"/><path d="M' + cx + ' ' + cy + 'l14 3" stroke="#eef2f5" stroke-width="3" stroke-linecap="round"/>';

  /* 1. METRO 80 MLK/Lockwood at M L King Blvd @ Airport Blvd */
  function fpstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="146" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="136" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="146" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="176" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="186" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="138" width="124" height="10" rx="2" fill="#111"/><text x="94" y="146" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">80 MLK / LOCKWOOD</text>' +
      '<circle cx="80" cy="208" r="12" fill="#222"/><circle cx="80" cy="208" r="5" fill="#9aa1a8"/><circle cx="294" cy="208" r="12" fill="#222"/><circle cx="294" cy="208" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="196" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fps1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff3c4" opacity=".9"/>' +
      house(84, 94, "#a0583e", "#4a3a34", false) + house(166, 96, "#c9b08a", "#5a4a40", false) + house(248, 94, "#8f6a52", "#3f3430", false) +
      oak(40, 86, 1) + oak(360, 86, 1.05) +
      '<rect x="0" y="128" width="400" height="10" fill="#cfc9bd"/><rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="104" width="5" height="112" fill="#6b7178"/><rect x="356" y="92" width="40" height="30" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="376" y="104" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><text x="376" y="117" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">80</text>' +
      '<rect x="14" y="220" width="320" height="34" rx="3" fill="#111"/><text x="24" y="242" ' + font + ' font-size="13" fill="#fff">M L King Blvd @ Airport Blvd</text><rect x="278" y="228" width="44" height="18" rx="9" fill="' + METRO + '"/><text x="300" y="241" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">80</text>',
      sky("fps1", "#7cc0ea", "#e7f4fb"));
  }

  /* 2. Ghetto Dreams */
  function fpdreams() {
    const cloud = '<g class="fp-bob"><path d="M70 120q-26 0 -26 -22q0 -20 24 -22q6 -30 40 -28q20 -26 56 -14q30 -18 58 6q40 -6 46 26q30 4 26 30q-2 24 -30 24z" fill="#2c2350" stroke="#8e7bd6" stroke-width="2" opacity=".95"/>' +
      '<path d="M120 100q36 -40 96 -6q-20 6 -96 6z" fill="#3d6b3a"/>' +
      '<g transform="translate(140 50)"><rect x="0" y="0" width="56" height="48" fill="#f2efe6"/><path d="M-6 0l34 -16l34 16z" fill="' + CANDY + '"/>' +
      [0, 1, 2].map(r => [0, 1, 2].map(c => '<rect x="' + (6 + c * 17) + '" y="' + (5 + r * 15) + '" width="10" height="9" fill="#ffd27a" class="fp-tw' + ((r + c) % 3 ? " fp-tw" + ((r + c) % 3 + 1) : "") + '"/>').join("")).join("") + '</g>' +
      '<text x="168" y="116" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">THREE STORY DREAMS</text></g>' +
      '<g class="fp-jet"><g transform="translate(150 36)"><path d="M0 6h40l10 -4l-2 6l-8 2h-40z" fill="#e8ecf0"/><path d="M18 6l-8 -10h6l12 10zM18 8l-8 8h6l12 -8z" fill="#c7cdd3"/><circle cx="44" cy="5" r="1.5" fill="#ff5a5a" class="fp-tw"/></g></g>' +
      '<circle cx="104" cy="148" r="5" fill="#2c2350" stroke="#8e7bd6" stroke-width="1.5"/><circle cx="96" cy="162" r="3.5" fill="#2c2350" stroke="#8e7bd6" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fps2)"/>' + stars(40) + '<circle cx="350" cy="44" r="16" fill="#f7f0d0"/><circle cx="356" cy="40" r="14" fill="#151033"/>' +
      cloud +
      '<rect x="0" y="196" width="400" height="64" fill="#1c2a1e"/>' + oak(330, 160, .9) +
      house(60, 176, "#8f5a44", "#2e2522", true) +
      '<rect x="0" y="214" width="400" height="46" fill="#2f3036"/><path d="M0 238h400" stroke="#ddd" stroke-width="2" stroke-dasharray="18 14" opacity=".6"/>' +
      '<rect x="230" y="222" width="160" height="22" rx="3" fill="#111" opacity=".9"/><text x="310" y="237" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">GHETTO DREAMS</text>',
      sky("fps2", "#0d0a24", "#3b2a5e"));
  }

  /* 3. Tops Drop */
  function fptops() {
    const car = '<g transform="translate(70 150)"><g class="fp-hop">' +
      '<rect x="0" y="20" width="250" height="34" rx="10" fill="' + CANDY + '"/><path d="M6 30h238" stroke="#fff" stroke-width="2" opacity=".35"/>' +
      '<rect x="60" y="6" width="100" height="16" rx="3" fill="#3a1a1a"/><path d="M150 20l-14 -22h6l14 22z" fill="#cfe9ff" opacity=".8"/>' +
      '<rect x="72" y="8" width="24" height="12" rx="3" fill="#f2e8d0"/><rect x="104" y="8" width="24" height="12" rx="3" fill="#f2e8d0"/>' +
      '<g class="fp-top"><path d="M24 20q20 -34 56 -34h20v34z" fill="#1a1a1a"/></g>' +
      '<g class="fp-trunk"><rect x="2" y="12" width="44" height="9" rx="2" fill="' + CANDY + '" stroke="#000" stroke-width=".8"/></g>' +
      '<rect x="244" y="30" width="6" height="6" fill="#fff6c2"/><rect x="0" y="32" width="5" height="6" fill="#ff5a5a"/>' +
      '<rect x="18" y="40" width="30" height="10" rx="2" fill="#f2f2f2" stroke="#333" stroke-width=".8"/><text x="33" y="48" text-anchor="middle" ' + font + ' font-size="6.5" fill="#1f4e79">TX PAT</text>' +
      swanga(50, 56) + swanga(204, 56) + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fps3)"/>' +
      '<g class="fp-sun"><circle cx="340" cy="46" r="22" fill="' + GOLD + '"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M340 46l' + (Math.cos(i * Math.PI / 6) * 38).toFixed(1) + ' ' + (Math.sin(i * Math.PI / 6) * 38).toFixed(1) + '" stroke="' + GOLD + '" stroke-width="3" opacity=".6"/>').join("") + '</g>' +
      '<path d="M0 150q60 -18 120 -6t130 -4t150 4v16h-400z" fill="#7aa25c"/>' + oak(40, 112, .8) +
      '<rect x="0" y="160" width="400" height="100" fill="#5a5b61"/><path d="M0 236h400" stroke="#f5c542" stroke-width="3"/>' +
      car +
      '<rect x="60" y="14" width="230" height="28" rx="4" fill="#111" opacity=".85"/><text x="175" y="34" text-anchor="middle" ' + font + ' font-size="15" fill="' + CANDY + '">TRUNKS POP · TOPS DROP</text>',
      sky("fps3", "#5fb4ec", "#dff1fb"));
  }

  /* 4. Roll out the red carpet */
  function fpcarpet() {
    const bulbs = Array.from({ length: 16 }, (_, i) => '<circle cx="' + (118 + i * 11) + '" cy="40" r="2.6" class="fp-ch' + (i % 2 ? " fp-ch2" : "") + '" fill="#ffd23f"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (118 + i * 11) + '" cy="78" r="2.6" class="fp-ch' + (i % 2 ? "" : " fp-ch2") + '" fill="#ffd23f"/>').join("");
    const post = x => '<rect x="' + (x - 3) + '" y="170" width="6" height="40" fill="' + GOLD + '"/><circle cx="' + x + '" cy="168" r="5" fill="' + GOLD + '"/><rect x="' + (x - 9) + '" y="208" width="18" height="5" rx="2" fill="' + GOLD + '"/>';
    const flash = (x, y, cls) => '<g class="fp-fl ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="14" fill="#fff" opacity=".9"/><path d="M' + (x - 26) + ' ' + y + 'h52M' + x + ' ' + (y - 26) + 'v52" stroke="#fff" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fps4)"/>' + stars(18) +
      '<rect x="60" y="30" width="280" height="170" fill="#241826"/><rect x="60" y="30" width="280" height="6" fill="#3a2a3e"/>' +
      '<rect x="110" y="36" width="180" height="48" rx="4" fill="#120c14" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="68" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + BERRY + '">SUPERSTAR</text>' +
      '<rect x="168" y="104" width="64" height="96" fill="#0c080d" stroke="' + GOLD + '" stroke-width="2"/><path d="M200 104v96" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2b2b30"/>' +
      '<g class="fp-roll"><path d="M168 200h64l70 60h-204z" fill="#c4122e"/><path d="M176 200h48l58 60h-164z" fill="#e01f3d" opacity=".5"/></g>' +
      post(150) + post(250) + '<path d="M150 172q-30 14 -60 2M250 172q30 14 60 2" stroke="#7a1022" stroke-width="5" fill="none"/>' + post(90) + post(310) +
      '<g transform="translate(330 150)"><rect x="0" y="0" width="44" height="60" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="1.5"/><text x="22" y="16" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">VALET</text><rect x="8" y="24" width="28" height="30" fill="#2c2c32"/>' +
      [0, 1, 2].map(i => '<circle cx="' + (14 + i * 8) + '" cy="' + (32 + i * 7) + '" r="2.4" fill="' + GOLD + '"/>').join("") + '</g>' +
      flash(36, 120, "") + flash(120, 150, "fp-fl2") + flash(296, 120, "fp-fl3") +
      '<rect x="16" y="226" width="150" height="22" rx="3" fill="#111" opacity=".9"/><text x="91" y="241" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + GOLD + '">ROLL OUT THE CARPET</text>',
      sky("fps4", "#06040a", "#2a1430"));
  }

  /* 5. M L King Blvd and Airport Blvd, the old Dead End */
  function fpcorner() {
    const terminal = '<g transform="translate(240 50)"><rect x="0" y="40" width="120" height="30" fill="#ebe6da"/><rect x="40" y="22" width="40" height="48" fill="#f3efe4"/><rect x="50" y="8" width="20" height="16" fill="#f3efe4"/>' +
      '<rect x="46" y="4" width="28" height="6" fill="#d8d2c4"/><rect x="52" y="10" width="16" height="10" fill="#3f6f8a" opacity=".85"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (6 + i * 8) + '" y="48" width="5" height="16" fill="#3f6f8a" opacity=".8"/><rect x="' + (86 + i * 8) + '" y="48" width="5" height="16" fill="#3f6f8a" opacity=".8"/>').join("") +
      '<path d="M44 30h32M44 36h32" stroke="#c9c2b2" stroke-width="2"/><rect x="58" y="-2" width="4" height="6" fill="#888"/></g>';
    const beam = '<g class="fp-beam"><path d="M300 66l140 -22v44z" fill="#fff6c2" opacity=".18"/><path d="M300 66l-140 22v-44z" fill="#9be7ff" opacity=".14"/></g><circle cx="300" cy="50" r="3" fill="#fff6c2"/>';
    const wall = '<rect x="0" y="120" width="400" height="104" fill="#7d4b3a"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (130 + r * 10) + 'h400" stroke="#653a2c" stroke-width="1"/>').join("") +
      Array.from({ length: 10 }, (_, r) => Array.from({ length: 10 }, (_, c) => '<path d="M' + (c * 40 + (r % 2) * 20) + ' ' + (120 + r * 10) + 'v10" stroke="#653a2c" stroke-width="1"/>').join("")).join("");
    const spray = '<g transform="translate(330 150)"><rect x="0" y="0" width="16" height="34" rx="3" fill="' + BERRY + '"/><rect x="3" y="-6" width="10" height="7" fill="#ccc"/><circle class="fp-sp" cx="8" cy="-10" r="3" fill="' + BERRY + '" opacity=".7"/><circle class="fp-sp fp-sp2" cx="4" cy="-12" r="2.5" fill="' + GOLD + '" opacity=".7"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fps5)"/>' + stars(22) +
      '<rect x="0" y="112" width="400" height="10" fill="#2a2d33"/>' + terminal + beam +
      wall +
      tag("FAT PAT", 60, 186, 46, BERRY, -6) + tag("DEAD END", 236, 206, 22, GOLD, -4) + tag("P-A-T", 70, 214, 18, "#9be7ff", 3) + spray +
      '<rect x="0" y="224" width="400" height="36" fill="#3a3b40"/><path d="M0 242h400" stroke="#ddd" stroke-width="2" stroke-dasharray="18 14" opacity=".5"/>' +
      '<rect x="28" y="60" width="5" height="164" fill="#6b7178"/>' + sign(6, 52, 140, "M L King Blvd") + sign(16, 78, 120, "Airport Blvd"),
      sky("fps5", "#0d0d22", "#3a2846"));
  }

  window.SCENES = { fpstation, fpdreams, fptops, fpcarpet, fpcorner };
})();
