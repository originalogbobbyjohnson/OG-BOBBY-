/* G. Dep game (NYC map, Manhattan: East Harlem, where Trevell Coleman came up around the projects between Fifth Av and Third Av, E 112 to 115 St).
   Every subway stop near his blocks is already on the map, so his door is a real bus stop: Madison Av & E 111 St on the M1.
   1. Madison Av & E 111 St: the blue-and-white M1 pulling up, the bus-stop pole with the M1 tab, brick towers behind.
   2. The neighborhood post office on E 110 St, for "Special Delivery": red brick, limestone trim, the flag, a white mail truck pulling in, letters in the air.
   3. The Third Avenue Bridge over the Harlem River, the road out of East Harlem to the world tour ("Let's Get It"): the swing span, cars crossing, the river moving.
   4. Harlem Art Park at E 120 St and Lexington Av: Jorge Luis Rodriguez's bright red "Growth" sculpture (a seedling turning into a bird), the crew doing the Harlem Shake.
   5. Madison Av & E 113 St: green street signs, the wall tagged G. DEP, and the twin limestone towers of the 1908 Romanesque church on E 117 St behind.
   400 x 260 SVGs. No logos, no faces. All CSS classes prefixed gd-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gdflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.gd-flk{animation:gdflick 2.4s infinite}' +
    '@keyframes gdblink{0%,100%{opacity:.25}50%{opacity:1}}.gd-bl{animation:gdblink 1.8s ease-in-out infinite}.gd-bl2{animation-delay:.6s}.gd-bl3{animation-delay:1.2s}' +
    '@keyframes gdcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.gd-car{animation:gdcar 6s linear infinite}.gd-car2{animation-delay:-3s}' +
    '@keyframes gdcarl{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.gd-carl{animation:gdcarl 7s linear infinite}.gd-carl2{animation-delay:-3.5s}' +
    '@keyframes gdwave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.gd-flag{transform-box:fill-box;transform-origin:0 50%;animation:gdwave 1.4s ease-in-out infinite}' +
    '@keyframes gdfly{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(70px,-90px) rotate(30deg);opacity:0}}.gd-env{transform-box:fill-box;animation:gdfly 3.2s ease-out infinite}.gd-env2{animation-delay:-1.1s}.gd-env3{animation-delay:-2.2s}' +
    '@keyframes gdtruck{0%{transform:translateX(-170px)}55%,100%{transform:translateX(0)}}.gd-truck{animation:gdtruck 3.2s cubic-bezier(.2,.7,.3,1) both}' +
    '@keyframes gdwater{from{transform:translateX(0)}to{transform:translateX(-40px)}}.gd-wtr{animation:gdwater 2.5s linear infinite}' +
    '@keyframes gdshake{0%,100%{transform:translateY(0) rotate(-6deg)}25%{transform:translateY(-3px) rotate(6deg)}50%{transform:translateY(0) rotate(-6deg)}75%{transform:translateY(-3px) rotate(6deg)}}.gd-shk{transform-box:fill-box;transform-origin:50% 100%;animation:gdshake .7s ease-in-out infinite}.gd-shk2{animation-delay:-.23s}.gd-shk3{animation-delay:-.46s}' +
    '@keyframes gdbird{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.gd-bird{animation:gdbird 2.4s ease-in-out infinite}' +
    '@keyframes gdnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.gd-note{transform-box:fill-box;animation:gdnote 2.6s ease-out infinite}.gd-note2{animation-delay:-.9s}.gd-note3{animation-delay:-1.7s}' +
    '@keyframes gdcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.gd-cld{animation:gdcloud 30s linear infinite}.gd-cld2{animation-delay:-15s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* bus route tab: blue rounded rectangle with white route letters */
  const route = (x, y, r) => '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/>' + txt(r, x, y + 5.5, 14, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 56) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/>' +
    '<path d="M' + (x - 6) + ' ' + (y + 10) + 'l-7 9M' + (x + 6) + ' ' + (y + 10) + 'l7 -6M' + (x - 3) + ' ' + (y + 26) + 'l-3 12M' + (x + 3) + ' ' + (y + 26) + 'l3 12" stroke="' + col + '" stroke-width="4" stroke-linecap="round"/></g>';
  const GOLD = "#ffd166", RED = "#ef3e36", CREAM = "#f4ead8", SKY = "#7bdff2";
  /* a red-brick NYCHA-style tower with lit windows */
  const tower = (x, y, w, base, col) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="' + (col || "#7c3b2e") + '"/>';
    for (let yy = y + 8; yy < base - 8; yy += 12) for (let xx = x + 5; xx < x + w - 7; xx += 11) g += '<rect class="gd-bl gd-bl' + (((xx + yy) / 11 | 0) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".7"/>';
    return g; };

  /* 1. Madison Av & E 111 St: dusk, brick towers, the bus-stop pole, the M1 pulling in */
  function gdbus() {
    let win = "";
    for (let x = 96; x < 300; x += 26) win += '<rect x="' + x + '" y="148" width="18" height="16" rx="2" fill="#cfe6f7" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' + stars(14) +
      tower(10, 40, 70, 200) + tower(92, 62, 60, 200, "#8a4535") + tower(166, 30, 76, 200) + tower(256, 58, 62, 200, "#8a4535") + tower(330, 44, 70, 200) +
      /* sidewalk + street */
      '<rect x="0" y="196" width="400" height="16" fill="#8d8f94"/><rect x="0" y="212" width="400" height="48" fill="#3a3c41"/>' +
      '<path d="M0 236h400" stroke="#d9c35a" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* black stop sign panel */
      '<rect x="12" y="14" width="250" height="40" rx="3" fill="#111"/>' + '<text x="24" y="40" ' + font + ' font-size="17" fill="#fff">Madison Av / E 111 St</text>' +
      route(232, 34, "M1") +
      /* the M1 bus sliding in */
      '<g class="anim-train">' +
      '<rect x="80" y="134" width="236" height="68" rx="10" fill="#f2f4f6" stroke="#9aa3ad" stroke-width="2"/>' +
      '<rect x="80" y="178" width="236" height="10" fill="#0039a6"/>' + win +
      '<rect x="300" y="142" width="14" height="30" rx="3" fill="#2a3440"/>' +
      '<rect x="244" y="138" width="50" height="10" rx="2" fill="#111"/>' + '<text x="249" y="146" ' + font + ' font-size="8" fill="#ffb347">M1 HARLEM</text>' +
      '<circle cx="122" cy="204" r="11" fill="#1b1b1b"/><circle cx="122" cy="204" r="4" fill="#8a8f96"/><circle cx="274" cy="204" r="11" fill="#1b1b1b"/><circle cx="274" cy="204" r="4" fill="#8a8f96"/>' +
      '<circle class="gd-flk" cx="312" cy="190" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      /* bus-stop pole */
      '<rect x="356" y="96" width="5" height="102" fill="#9aa3ad"/>' +
      '<rect x="336" y="98" width="44" height="34" rx="3" fill="#0039a6" stroke="#fff" stroke-width="1.5"/>' + txt("BUS", 358, 112, 9, "#fff") + txt("STOP", 358, 125, 9, "#fff") +
      '<rect x="340" y="136" width="36" height="16" rx="8" fill="#fff"/>' + txt("M1", 358, 148, 11, "#0039a6"),
      sky("gb", "#120f2a", "#e0795a"));
  }

  /* 2. The post office on E 110 St: red brick, limestone trim, flag, the mail truck pulling in, letters flying */
  function gdpost() {
    let brick = "";
    for (let y = 72; y < 200; y += 7) brick += '<path d="M70 ' + y + 'h260" stroke="#7a2e22" stroke-width="1" opacity=".5"/>';
    let wins = "";
    [96, 140, 236, 280].forEach(x => { wins += '<rect x="' + x + '" y="92" width="26" height="40" fill="#f0d79a" opacity=".85"/><rect x="' + (x - 3) + '" y="88" width="32" height="5" fill="#e6dcc6"/><path d="M' + (x + 13) + ' 92v40M' + x + ' 112h26" stroke="#5a2a20" stroke-width="2"/>';
      wins += '<rect x="' + x + '" y="148" width="26" height="36" fill="#f0d79a" opacity=".85"/><rect x="' + (x - 3) + '" y="144" width="32" height="5" fill="#e6dcc6"/><path d="M' + (x + 13) + ' 148v36" stroke="#5a2a20" stroke-width="2"/>'; });
    const env = (x, y, cls) => '<g class="gd-env ' + cls + '"><rect x="' + x + '" y="' + y + '" width="18" height="12" rx="1" fill="#fff" stroke="#c8ccd2"/><path d="M' + x + ' ' + y + 'l9 7l9 -7" stroke="#9aa3ad" fill="none"/><rect x="' + (x + 12) + '" y="' + (y + 2) + '" width="4" height="4" fill="' + RED + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gp)"/>' +
      '<g class="gd-cld"><ellipse cx="40" cy="30" rx="34" ry="10" fill="#fff" opacity=".6"/></g><g class="gd-cld gd-cld2"><ellipse cx="40" cy="46" rx="26" ry="8" fill="#fff" opacity=".5"/></g>' +
      /* building */
      '<rect x="70" y="62" width="260" height="140" fill="#a7432f"/>' + brick +
      '<rect x="64" y="56" width="272" height="12" fill="#e6dcc6"/><rect x="70" y="136" width="260" height="6" fill="#e6dcc6"/>' + wins +
      /* entrance */
      '<rect x="178" y="92" width="44" height="110" fill="#e6dcc6"/><rect x="186" y="132" width="28" height="70" fill="#3a2a22"/><path d="M200 132v70" stroke="#c9a24a" stroke-width="2"/>' +
      '<path d="M186 132a14 14 0 0 1 28 0z" fill="#f0d79a"/>' +
      txt("POST OFFICE", 200, 84, 12, "#5a2a20", 'letter-spacing="2"') +
      txt("E 110 ST", 200, 108, 8, "#5a2a20", 'letter-spacing="2"') +
      '<rect x="170" y="200" width="60" height="6" fill="#cfc6b2"/><rect x="164" y="206" width="72" height="6" fill="#bdb4a0"/>' +
      /* flag pole + flag */
      '<rect x="334" y="20" width="3" height="48" fill="#ccc"/>' +
      '<g class="gd-flag"><rect x="337" y="22" width="34" height="20" fill="#fff"/><path d="M337 25h34M337 31h34M337 37h34" stroke="#c8102e" stroke-width="3"/><rect x="337" y="22" width="14" height="11" fill="#0a3161"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="202" width="400" height="12" fill="#9a9ca0"/><rect x="0" y="214" width="400" height="46" fill="#3a3c41"/>' +
      /* the white mail truck (no markings beyond a plain stripe) */
      '<g class="gd-truck">' +
      '<rect x="230" y="168" width="96" height="46" rx="5" fill="#f4f5f7" stroke="#9aa3ad" stroke-width="1.5"/>' +
      '<path d="M326 176h26l14 18v20h-40z" fill="#f4f5f7" stroke="#9aa3ad" stroke-width="1.5"/><path d="M330 180h18l10 13h-28z" fill="#9ccfe8"/>' +
      '<rect x="230" y="196" width="136" height="5" fill="#2b4b8c"/><rect x="230" y="201" width="136" height="3" fill="' + RED + '"/>' +
      '<circle cx="256" cy="216" r="9" fill="#1b1b1b"/><circle cx="256" cy="216" r="3.5" fill="#999"/><circle cx="344" cy="216" r="9" fill="#1b1b1b"/><circle cx="344" cy="216" r="3.5" fill="#999"/>' +
      '</g>' +
      env(120, 190, "") + env(150, 196, "gd-env2") + env(96, 198, "gd-env3"),
      sky("gp", "#7fb6e0", "#f5d9a8"));
  }

  /* 3. The Third Avenue Bridge over the Harlem River at dusk: swing span on its pier, cars crossing, water moving */
  function gdbridge() {
    let truss = "";
    for (let x = 60; x < 340; x += 20) truss += '<path d="M' + x + ' 150L' + (x + 10) + ' 118L' + (x + 20) + ' 150" stroke="#5f7d8c" stroke-width="3" fill="none"/>';
    let ripples = "";
    for (let y = 196; y < 260; y += 10) ripples += '<path d="M0 ' + y + 'q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#7fb3c9" stroke-width="1.4" fill="none" opacity=".45"/>';
    let skyline = "";
    [[0, 120, 40], [44, 132, 30], [300, 116, 44], [348, 128, 52]].forEach(b => { skyline += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (180 - b[1]) + '" fill="#2a2440"/>';
      for (let yy = b[1] + 6; yy < 176; yy += 10) for (let xx = b[0] + 4; xx < b[0] + b[2] - 5; xx += 9) skyline += '<rect class="gd-bl gd-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#ffd98a" opacity=".6"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#gr)"/>' + stars(10) +
      '<circle cx="320" cy="56" r="20" fill="#ffd8a0" opacity=".85"/>' + skyline +
      /* river */
      '<rect x="0" y="178" width="400" height="82" fill="#1d3a52"/><g class="gd-wtr">' + ripples + '</g>' +
      /* center pier */
      '<rect x="180" y="160" width="40" height="40" fill="#8a8f96"/><rect x="176" y="156" width="48" height="6" fill="#a3a8ae"/>' +
      /* approaches */
      '<rect x="0" y="150" width="60" height="10" fill="#6b6f75"/><rect x="340" y="150" width="60" height="10" fill="#6b6f75"/>' +
      '<rect x="10" y="160" width="12" height="20" fill="#7a7f86"/><rect x="376" y="160" width="12" height="20" fill="#7a7f86"/>' +
      /* swing span: deck, chords, truss */
      '<rect x="60" y="150" width="280" height="10" fill="#4f6b78"/><rect x="60" y="114" width="280" height="6" fill="#5f7d8c"/>' + truss +
      '<rect x="190" y="98" width="20" height="18" fill="#5f7d8c"/><rect x="194" y="102" width="12" height="8" fill="#ffd98a" class="gd-flk"/>' +
      /* traffic on the deck */
      '<g class="gd-car"><rect x="0" y="140" width="30" height="10" rx="3" fill="' + RED + '"/><circle cx="26" cy="144" r="2" fill="#fff6c2"/></g>' +
      '<g class="gd-carl"><rect x="0" y="141" width="26" height="9" rx="3" fill="' + GOLD + '"/></g>' +
      '<g class="gd-car gd-car2"><rect x="0" y="140" width="44" height="10" rx="3" fill="#e9eef2"/><circle cx="40" cy="144" r="2" fill="#fff6c2"/></g>' +
      '<g class="gd-carl gd-carl2"><rect x="0" y="141" width="30" height="9" rx="3" fill="#6fa8dc"/></g>' +
      /* label */
      '<rect x="120" y="20" width="160" height="36" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("THIRD AVENUE BRIDGE", 200, 36, 11, "#fff") + txt("HARLEM RIVER", 200, 50, 9, "#fff", 'letter-spacing="2"'),
      sky("gr", "#1b1636", "#c86a5a"));
  }

  /* 4. Harlem Art Park, E 120 St & Lexington Av: the red "Growth" sculpture (seedling turning into a bird), the crew doing the Harlem Shake */
  function gdart() {
    let tene = "";
    [[0, 54, 80, "#8b5a44"], [84, 70, 70, "#a0674b"], [250, 60, 74, "#8b5a44"], [328, 46, 72, "#7a4a3a"]].forEach(b => { tene += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (190 - b[1]) + '" fill="' + b[3] + '"/>' + '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="5" fill="#d8cbb4"/>';
      for (let yy = b[1] + 14; yy < 180; yy += 20) for (let xx = b[0] + 8; xx < b[0] + b[2] - 10; xx += 16) tene += '<rect x="' + xx + '" y="' + yy + '" width="8" height="12" fill="#2a2a33"/>';
      tene += '<path d="M' + (b[0] + 10) + ' ' + (b[1] + 30) + 'h' + (b[2] - 20) + 'M' + (b[0] + 10) + ' ' + (b[1] + 50) + 'h' + (b[2] - 20) + '" stroke="#222" stroke-width="2" opacity=".6"/>'; });
    const note = (x, y, cls) => '<g class="gd-note ' + cls + '"><path d="M' + x + ' ' + y + 'v-14l10 -3v14" stroke="' + GOLD + '" stroke-width="2" fill="none"/><circle cx="' + (x - 2) + '" cy="' + y + '" r="3" fill="' + GOLD + '"/><circle cx="' + (x + 8) + '" cy="' + (y - 3) + '" r="3" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ga)"/>' +
      '<g class="gd-cld"><ellipse cx="40" cy="26" rx="30" ry="9" fill="#fff" opacity=".7"/></g>' + tene +
      /* park: trees and plaza */
      '<circle cx="168" cy="142" r="30" fill="#3f8a4a"/><circle cx="238" cy="146" r="26" fill="#357a40"/><rect x="165" y="160" width="6" height="34" fill="#5a3d2a"/><rect x="235" y="160" width="6" height="34" fill="#5a3d2a"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#c9bfae"/><path d="M0 190h400" stroke="#a89d8a" stroke-width="3"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 40) p += '<path d="M' + x + ' 190l-20 70" stroke="#b5aa97" stroke-width="1.5"/>'; return p; })() +
      /* the sculpture: base, flowing red stem curling up, opening into wings */
      '<rect x="186" y="186" width="44" height="10" fill="#6c6f75"/>' +
      '<g class="gd-bird">' +
      '<path d="M200 186C196 160 216 150 208 128C202 112 186 112 190 98" stroke="' + RED + '" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<path d="M214 186C222 166 206 150 214 136" stroke="#c9252a" stroke-width="8" fill="none" stroke-linecap="round"/>' +
      '<path d="M190 98C170 84 150 90 136 78C160 74 178 80 194 92z" fill="' + RED + '"/>' +
      '<path d="M192 96C206 74 232 70 252 56C246 80 222 92 198 102z" fill="#ff5a4a"/>' +
      '<path d="M190 98q4 -10 12 -12" stroke="#c9252a" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '</g>' +
      /* the crew doing the Harlem Shake */
      person(70, 196, "#1b1b24", "gd-shk") + person(104, 200, "#2b2238", "gd-shk gd-shk2") + person(312, 198, "#1f2a2a", "gd-shk gd-shk3") + person(344, 196, "#241b1b", "gd-shk") +
      /* boombox */
      '<rect x="128" y="226" width="40" height="20" rx="3" fill="#1b1b1b"/><circle cx="138" cy="236" r="6" fill="#444"/><circle cx="158" cy="236" r="6" fill="#444"/><path d="M134 226v-6h28v6" stroke="#888" fill="none" stroke-width="2"/>' +
      note(148, 218, "") + note(132, 214, "gd-note2") + note(160, 212, "gd-note3") +
      /* sign */
      '<rect x="12" y="12" width="150" height="34" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("HARLEM ART PARK", 87, 27, 11, "#fff") + txt("E 120 ST &amp; LEXINGTON AV", 87, 40, 8, "#fff"),
      sky("ga", "#79b9e6", "#f0e2c0"));
  }

  /* 5. Madison Av & E 113 St: green street signs, the wall tagged G. DEP, the twin limestone towers of the church on E 117 St behind */
  function gdcorner() {
    const towerC = (x) => '<rect x="' + x + '" y="44" width="34" height="96" fill="#d9cfb8"/><path d="M' + (x - 3) + ' 44l20 -24l20 24z" fill="#8e8a80"/>' +
      '<rect x="' + (x + 11) + '" y="60" width="12" height="22" rx="6" fill="#3a3540"/><rect x="' + (x + 11) + '" y="96" width="12" height="18" rx="6" fill="#3a3540"/><path d="M' + x + ' 88h34" stroke="#b9ae96" stroke-width="2"/>' +
      '<path d="M' + (x + 17) + ' 20v-8M' + (x + 13) + ' 15h8" stroke="' + GOLD + '" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(18) +
      /* church behind: two towers, gable with rose window */
      towerC(110) + towerC(196) +
      '<rect x="144" y="80" width="52" height="60" fill="#d2c7ae"/><path d="M144 80l26 -22l26 22z" fill="#d2c7ae"/><circle cx="170" cy="96" r="10" fill="#5a4a6a"/><circle class="gd-flk" cx="170" cy="96" r="5" fill="' + GOLD + '" opacity=".7"/>' +
      txt("E 117 ST", 170, 152, 8, CREAM, 'letter-spacing="3" opacity=".7"') +
      /* the wall */
      '<rect x="0" y="136" width="400" height="90" fill="#45474e"/>' +
      (() => { let b = ""; for (let y = 146; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#3b3d43" stroke-width="1"/>'; for (let y = 146; y < 226; y += 24) for (let x = 0; x < 400; x += 30) b += '<path d="M' + x + ' ' + y + 'v12" stroke="#3b3d43"/>'; return b; })() +
      tag("G. DEP", 18, 200, 52, GOLD, -5) + tag("LET'S GET IT", 186, 214, 20, RED, -4) + tag("TAPE KINGZ", 24, 222, 14, SKY, -3) + tag("GHETTO DEP", 196, 176, 14, CREAM, -6) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="gd-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="#f2a541"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<g class="gd-carl gd-carl2"><rect x="0" y="240" width="40" height="12" rx="4" fill="#6fa8dc"/><circle cx="8" cy="252" r="4" fill="#111"/><circle cx="32" cy="252" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Madison Av", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E 113 St", 346, 108, 12, "#fff") +
      '<circle class="gd-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("gc", "#0b0c1c", "#33284a"));
  }

  window.SCENES = { gdbus: gdbus, gdpost: gdpost, gdbridge: gdbridge, gdart: gdart, gdcorner: gdcorner };
})();
