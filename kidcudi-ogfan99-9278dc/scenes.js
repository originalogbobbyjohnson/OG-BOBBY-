/* kidcudi scenes (REGIONS tab: St. Louis + Ohio; Shaker Heights, Cleveland). CSS classes and ids prefixed kd- (the page's own anim-train is kept).
   1 RTA Blue Line pulling into Lee-Van Aken, down in the cut in the median of Van Aken Blvd, under the Lee Rd bridge. BLUE bullet.
   2 Shaker Heights High School (he went there before Solon): red brick, white cupola, red-and-white Raiders pennant waving.
   3 Horseshoe Lake at the Shaker Lakes at night, the full moon shimmering on the water.
   4 Man on the Moon: a lone figure in a hoodie sitting on the crescent moon, humming notes floating off into space.
   5 Lee Rd and Van Aken Blvd: green signs, KID CUDI tagged on the brick, the moon over Key Tower downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kdflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kd-flk{animation:kdflick 2.2s infinite}.kd-flk2{animation-delay:.7s}' +
    '@keyframes kdwave{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(6deg) scaleX(.92)}}.kd-flag{transform-box:fill-box;transform-origin:0 50%;animation:kdwave 1.4s ease-in-out infinite}' +
    '@keyframes kdshim{0%,100%{opacity:.25;transform:scaleX(1)}50%{opacity:.6;transform:scaleX(1.25)}}.kd-shim{transform-box:fill-box;transform-origin:50% 50%;animation:kdshim 2.4s ease-in-out infinite}.kd-shim2{animation-delay:-1.2s}' +
    '@keyframes kdfly{0%,100%{transform:translate(0,0);opacity:.2}50%{transform:translate(8px,-10px);opacity:1}}.kd-ffly{animation:kdfly 3s ease-in-out infinite}.kd-ffly2{animation-delay:-1.5s}' +
    '@keyframes kdnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(60px,-70px);opacity:0}}.kd-note{animation:kdnote 3.6s ease-out infinite}.kd-note2{animation-delay:-1.2s}.kd-note3{animation-delay:-2.4s}' +
    '@keyframes kdbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.kd-bob{animation:kdbob 4s ease-in-out infinite}' +
    '@keyframes kdcar{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.kd-car{animation:kdcar 6s linear infinite}' +
    '@keyframes kdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kd-sp{animation:kdspray 1.4s ease-out infinite}.kd-sp2{animation-delay:.45s}' +
    '@keyframes kdtw{0%,100%{opacity:.25}50%{opacity:1}}.kd-tw{animation:kdtw 2s ease-in-out infinite}.kd-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const cap = (txt, w) => '<rect x="' + (200 - w / 2) + '" y="240" width="' + w + '" height="15" rx="2" fill="#000" opacity=".55"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">' + txt + '</text>';
  const LAV = "#b9a7ff", MOON = "#ffcf4a", TEAL = "#5ad1c8", BLUE = "#3272b3";
  const stars = (n, maxY) => Array.from({ length: n }, (_, i) => '<circle class="kd-tw' + (i % 2 ? " kd-tw2" : "") + '" cx="' + ((i * 53 + 11) % 400) + '" cy="' + ((i * 37) % maxY) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff"/>').join("");
  const tree = (x, base, r, c) => '<rect x="' + (x - 3) + '" y="' + (base - 18) + '" width="6" height="18" fill="#2a1d14"/><circle cx="' + x + '" cy="' + (base - 18 - r * .6) + '" r="' + r + '" fill="' + (c || "#1d3a2a") + '"/>';

  /* 1. Lee-Van Aken, RTA Blue Line, below grade in the Van Aken Blvd median */
  function kdstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 46) + '" y="112" width="34" height="22" rx="3" fill="#1f2a36"/>').join("");
    const train = '<g class="anim-train"><path d="M190 100l20 -16M210 84h-30" stroke="#333" stroke-width="2"/>' +
      '<rect x="40" y="100" width="340" height="62" rx="8" fill="#d6dadf" stroke="#7d858c" stroke-width="2"/>' + win +
      '<rect x="40" y="140" width="340" height="6" fill="' + BLUE + '"/><rect x="40" y="148" width="340" height="3" fill="#1f2a36"/>' +
      '<rect x="326" y="104" width="48" height="10" rx="2" fill="#111"/><text x="350" y="112" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">VAN AKEN</text>' +
      '<circle class="kd-flk" cx="372" cy="154" r="3.5" fill="#fff6c2"/><circle cx="100" cy="164" r="7" fill="#222"/><circle cx="160" cy="164" r="7" fill="#222"/><circle cx="270" cy="164" r="7" fill="#222"/><circle cx="330" cy="164" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds1)"/>' +
      tree(30, 70, 22, "#2f5a3a") + tree(90, 64, 26, "#3a6a42") + tree(320, 66, 24, "#2f5a3a") + tree(380, 70, 20, "#3a6a42") +
      /* Lee Rd bridge over the cut */
      '<rect x="0" y="36" width="400" height="18" fill="#a59c8e"/><rect x="0" y="32" width="400" height="5" fill="#c7beb0"/>' +
      '<g class="kd-car"><rect x="0" y="22" width="40" height="10" rx="4" fill="#c0392b"/><rect x="8" y="16" width="22" height="7" rx="3" fill="#c0392b"/><circle cx="9" cy="33" r="3.5" fill="#111"/><circle cx="31" cy="33" r="3.5" fill="#111"/></g>' +
      '<text x="200" y="49" text-anchor="middle" ' + font + ' font-size="8" fill="#3a3630" letter-spacing="2">LEE RD</text>' +
      /* sloped grass walls of the cut + catenary */
      '<path d="M0 54h400v30H0z" fill="#4c7a45"/><path d="M0 84h400" stroke="#3a5e34" stroke-width="2"/>' +
      '<path d="M0 84h400" stroke="#222" stroke-width="1"/><rect x="24" y="60" width="4" height="114" fill="#555"/><rect x="372" y="60" width="4" height="114" fill="#555"/><path d="M24 64h352" stroke="#555" stroke-width="2"/>' +
      '<rect x="0" y="170" width="400" height="8" fill="#5b4a3c"/><path d="M0 172h400" stroke="#777" stroke-width="2"/>' +
      train +
      '<rect x="0" y="178" width="400" height="12" fill="#bdb8ad"/><rect x="0" y="178" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4c7a45"/>' +
      '<rect x="88" y="196" width="224" height="40" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="182" y="222" text-anchor="middle" ' + font + ' font-size="17" fill="#fff" letter-spacing="1">LEE–VAN AKEN</text>' +
      '<circle cx="284" cy="216" r="15" fill="' + BLUE + '"/><text x="284" y="219.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BLUE</text>' +
      cap("VAN AKEN BLVD · SHAKER HEIGHTS", 236),
      sky("kds1", "#8fb8e0", "#e8d9c0"));
  }

  /* 2. Shaker Heights High School: red brick, white cupola, Raiders pennant */
  function kdschool() {
    const wins = (x0, n, y) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * 26) + '" y="' + y + '" width="14" height="22" fill="#2a3a4a" stroke="#f4f1ea" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kds2)"/>' +
      tree(20, 196, 30, "#3a6a42") + tree(384, 196, 30, "#3a6a42") +
      /* wings */
      '<rect x="30" y="110" width="340" height="86" fill="#9a3a2a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M30 ' + (116 + i * 8) + 'h340" stroke="#843022" stroke-width="1"/>').join("") +
      '<rect x="30" y="104" width="340" height="8" fill="#f4f1ea"/>' + wins(44, 5, 124) + wins(256, 5, 124) + wins(44, 5, 160) + wins(256, 5, 160) +
      /* center portico + cupola */
      '<path d="M160 104l40 -26l40 26z" fill="#f4f1ea"/><rect x="160" y="104" width="80" height="92" fill="#a8432f"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (166 + i * 20) + '" y="110" width="7" height="86" fill="#f4f1ea"/>').join("") +
      '<rect x="190" y="150" width="20" height="46" fill="#3a2a22"/>' +
      '<rect x="186" y="50" width="28" height="30" fill="#f4f1ea"/><path d="M182 50l18 -20l18 20z" fill="#5d7a8a"/><rect x="198" y="18" width="3" height="14" fill="#5d7a8a"/>' +
      '<rect x="192" y="58" width="16" height="16" rx="8" fill="#2a3a4a"/>' +
      /* flagpole + pennant */
      '<rect x="330" y="36" width="3" height="160" fill="#8a8a8a"/><g class="kd-flag"><path d="M333 40l50 12l-50 12z" fill="#d42a2a"/><text x="352" y="56" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RAIDERS</text></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5b8f4a"/><path d="M150 260l40 -64h20l40 64z" fill="#c7beb0"/>' +
      cap("SHAKER HEIGHTS HIGH", 200),
      sky("kds2", "#7fb2e6", "#d8ecf6"));
  }

  /* 3. Horseshoe Lake, the full moon on the water */
  function kdlake() {
    return svg(
      '<rect width="400" height="260" fill="url(#kds3)"/>' + stars(26, 110) +
      '<circle cx="290" cy="64" r="30" fill="#f6efd2"/><circle cx="280" cy="56" r="6" fill="#e2d9b8"/><circle cx="300" cy="74" r="4" fill="#e2d9b8"/>' +
      Array.from({ length: 10 }, (_, i) => tree(i * 44 + 8, 150, 20 + (i % 3) * 5, i % 2 ? "#13241c" : "#182e22")).join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#0f1c33"/>' +
      '<ellipse class="kd-shim" cx="290" cy="176" rx="34" ry="4" fill="#f6efd2"/><ellipse class="kd-shim kd-shim2" cx="290" cy="192" rx="24" ry="3" fill="#f6efd2"/><ellipse class="kd-shim" cx="290" cy="208" rx="14" ry="2.5" fill="#f6efd2"/>' +
      '<path d="M0 222q100 -8 200 0t200 0v38H0z" fill="#22301f"/>' +
      '<circle class="kd-ffly" cx="80" cy="196" r="2" fill="' + MOON + '"/><circle class="kd-ffly kd-ffly2" cx="140" cy="182" r="2" fill="' + MOON + '"/><circle class="kd-ffly" cx="360" cy="214" r="2" fill="' + MOON + '"/>' +
      cap("HORSESHOE LAKE · SHAKER LAKES", 236),
      sky("kds3", "#060716", "#2a2350"));
  }

  /* 4. Man on the Moon: a lone figure on the crescent, humming notes drifting off */
  function kdmoon() {
    const note = (x, y, cls) => '<g class="kd-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + LAV + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14l7 3" stroke="' + LAV + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds4)"/>' + stars(40, 260) +
      '<circle cx="60" cy="210" r="34" fill="#3a5a9a" opacity=".55"/><path d="M34 196q26 10 52 0" stroke="#5a8a6a" stroke-width="5" fill="none" opacity=".6"/>' +
      '<mask id="kdmask"><rect width="400" height="260" fill="#fff"/><circle cx="222" cy="118" r="80" fill="#000"/></mask>' +
      '<g class="kd-bob"><circle cx="180" cy="140" r="90" fill="' + MOON + '" mask="url(#kdmask)"/>' +
      '<circle cx="118" cy="150" r="8" fill="#e3b33a"/><circle cx="132" cy="196" r="5" fill="#e3b33a"/><circle cx="170" cy="214" r="6" fill="#e3b33a"/>' +
      /* hooded figure sitting on the crescent's upper rim (no face) */
      '<g transform="translate(-56 -4)"><path d="M176 72q-2 -18 12 -20q14 2 12 20v14h-24z" fill="#2a2440"/><path d="M174 86h28l6 18h-12l-2 -8h-12l-4 12h-10z" fill="#2a2440"/>' +
      '<path d="M200 98l14 6l2 14" stroke="#2a2440" stroke-width="5" fill="none" stroke-linecap="round"/></g></g>' +
      note(158, 56, "") + note(166, 48, "kd-note2") + note(150, 52, "kd-note3") +
      cap("MAN ON THE MOON", 170),
      sky("kds4", "#05040f", "#1d1640"));
  }

  /* 5. Lee Rd and Van Aken Blvd: the moon over Key Tower downtown */
  function kdcorner() {
    const key = '<g fill="#3a3352"><rect x="182" y="40" width="40" height="90"/><path d="M182 40l20 -22l20 22z"/><rect x="200" y="8" width="3" height="12"/></g>' +
      '<g fill="#5a5274">' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (186 + i * 6) + '" y="48" width="2" height="78"/>').join("") + '</g>' +
      '<circle class="kd-flk" cx="201.5" cy="8" r="2.5" fill="#ff4a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds5)"/>' + stars(18, 80) +
      '<path d="M86 22a24 24 0 1 0 26 34a19 19 0 1 1 -26 -34z" fill="' + MOON + '"/>' +
      '<g fill="#2a2440"><rect x="40" y="90" width="36" height="40"/><rect x="96" y="76" width="34" height="54"/><rect x="250" y="80" width="40" height="50"/><rect x="306" y="96" width="46" height="34"/></g>' + key +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3a2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#64301f" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#64301f" stroke-width="1"/>').join("")).join("") +
      tag("KID CUDI", 14, 190, 44, LAV, -6) + tag("CUDDER", 26, 216, 20, MOON, -3) + tag("216", 136, 216, 20, TEAL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 140, "Van Aken Blvd") + sign(290, 124, 74, "Lee Rd") +
      '<g class="kd-sp"><circle cx="246" cy="166" r="3" fill="' + LAV + '" opacity=".7"/></g><g class="kd-sp kd-sp2"><circle cx="252" cy="160" r="2" fill="' + LAV + '" opacity=".6"/></g>',
      sky("kds5", "#0d0a1e", "#5a3a6a"));
  }

  window.SCENES = { kdstation: kdstation, kdschool: kdschool, kdlake: kdlake, kdmoon: kdmoon, kdcorner: kdcorner };
})();
