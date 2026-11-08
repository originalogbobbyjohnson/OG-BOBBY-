/* kidfrost scenes (Regions tab: Los Angeles + SoCal; East Los Angeles). CSS classes prefixed kfr- (the page's own anim-train is kept).
   1 East LA Civic Center station, Metro E Line: the street-level platform in the middle of 3rd St, a silver E Line train sliding in.
   2 Belvedere Park lake by the East LA Civic Center: the lake, the fountain, palms, ducks.
   3 The Aztec warrior's sun ("It's in my blood to be an Aztec Warrior", La Raza): a stepped temple under a carved sun stone, rays turning.
   4 The oldies dedication booth ("Told Art Laboe to play my dedication", I'm Still Here; "a Huggy Boy rola", La Familia): ON AIR light, a spinning record, the request line.
   5 Whittier Blvd and S Arizona Ave, East LA: green signs, KID FROST tagged, the Whittier Blvd arch over the street behind, a lowrider hopping. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kfrcar{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.kfr-car{animation:kfrcar 6s linear infinite}.kfr-car2{animation-delay:-3s}' +
    '@keyframes kfrsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.kfr-sway{transform-box:fill-box;transform-origin:50% 100%;animation:kfrsway 3.4s ease-in-out infinite}' +
    '@keyframes kfrjet{0%,100%{transform:scaleY(.7)}50%{transform:scaleY(1.1)}}.kfr-jet{transform-box:fill-box;transform-origin:50% 100%;animation:kfrjet 1.2s ease-in-out infinite}' +
    '@keyframes kfrduck{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}.kfr-duck{animation:kfrduck 6s ease-in-out infinite}' +
    '@keyframes kfrspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.kfr-spin{transform-box:fill-box;transform-origin:50% 50%;animation:kfrspin 2s linear infinite}.kfr-slow{animation-duration:30s}' +
    '@keyframes kfrglow{0%,100%{opacity:.35}50%{opacity:1}}.kfr-glow{animation:kfrglow 1.6s ease-in-out infinite}' +
    '@keyframes kfrhop{0%,60%,100%{transform:translateY(0)}75%{transform:translateY(-14px)}}.kfr-hop{animation:kfrhop 1.6s ease-in-out infinite}' +
    '@keyframes kfrnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.kfr-note{animation:kfrnote 2.6s ease-out infinite}.kfr-n2{animation-delay:-1.3s}' +
    '@keyframes kfrspray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.kfr-spray{transform-box:fill-box;transform-origin:50% 100%;animation:kfrspray 1s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, tc) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (tc || "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="kfr-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const low = (x, y, body) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 18q2 -10 14 -10l14 -10h36l14 10q16 0 18 10v6H0z" fill="' + body + '"/><path d="M30 0h14v8H24zM48 0h14l10 8H48z" fill="#bfe3f2"/>' +
    '<path d="M0 16h96" stroke="#f2c14e" stroke-width="2"/><circle cx="20" cy="26" r="8" fill="#111"/><circle cx="20" cy="26" r="5" fill="#e6e6e6"/><circle cx="76" cy="26" r="8" fill="#111"/><circle cx="76" cy="26" r="5" fill="#e6e6e6"/></g>';
  const ELINE = "#fdb913", ICE = "#7fd3ff", GOLD = "#e8b23a", RED = "#d7263d";

  /* 1. East LA Civic Center station, Metro E Line, in the middle of 3rd St */
  function kfrstation() {
    let win = ""; for (let x = 44; x < 300; x += 32) win += '<rect x="' + x + '" y="124" width="24" height="22" rx="3" fill="#1f2a36"/>';
    const train = '<g class="anim-train"><path d="M18 116h300q20 0 24 18v40H18z" fill="#d6dadf" stroke="#7d848c" stroke-width="2"/>' + win +
      '<rect x="18" y="152" width="324" height="7" fill="' + ELINE + '"/><rect x="178" y="116" width="5" height="58" fill="#5a6068"/>' +
      '<path d="M318 122h12q6 2 8 14h-20z" fill="#1f2a36"/><circle cx="334" cy="166" r="4" fill="#fff6c2"/>' + bullet(290, 136, "E", ELINE, "#222") +
      '<rect x="40" y="174" width="60" height="8" fill="#333"/><rect x="250" y="174" width="60" height="8" fill="#333"/>' +
      '<circle cx="54" cy="182" r="6" fill="#111"/><circle cx="86" cy="182" r="6" fill="#111"/><circle cx="264" cy="182" r="6" fill="#111"/><circle cx="296" cy="182" r="6" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kfrs1)"/>' +
      /* buildings along 3rd St */
      '<rect x="0" y="62" width="90" height="56" fill="#c98a5a"/><rect x="96" y="74" width="70" height="44" fill="#e2c49a"/><rect x="240" y="54" width="80" height="64" fill="#b9c4cc"/><rect x="326" y="70" width="74" height="48" fill="#d7a26e"/>' +
      [10, 34, 58, 250, 274, 298].map(x => '<rect x="' + x + '" y="78" width="14" height="12" fill="#ffe7a8" opacity=".8"/>').join("") +
      palm(200, 116, 70) + palm(372, 116, 56) +
      /* canopy */
      '<rect x="0" y="100" width="400" height="8" fill="#6b5a46"/>' + [40, 140, 260, 360].map(x => '<rect x="' + (x - 3) + '" y="106" width="6" height="80" fill="#7c6a54"/>').join("") +
      train +
      '<rect x="0" y="186" width="400" height="74" fill="#a39b8c"/><rect x="0" y="186" width="400" height="6" fill="#e8d36b"/>' +
      '<rect x="110" y="200" width="230" height="40" rx="4" fill="#111"/><text x="234" y="226" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">EAST LA CIVIC CTR</text>' + bullet(128, 220, "E", ELINE, "#222") +
      '<rect x="20" y="212" width="74" height="28" rx="3" fill="#111"/><text x="57" y="223" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ATLANTIC</text><text x="57" y="234" text-anchor="middle" ' + font + ' font-size="8" fill="' + ELINE + '">E LINE</text>',
      sky("kfrs1", "#5aa6d6", "#f6d8a8"));
  }

  /* 2. Belvedere Park lake, East LA Civic Center */
  function kfrlake() {
    return svg(
      '<rect width="400" height="260" fill="url(#kfrl1)"/>' +
      '<rect x="250" y="70" width="120" height="70" fill="#e4dccb"/><rect x="250" y="64" width="120" height="8" fill="#b8ad96"/>' + [262, 286, 310, 334].map(x => '<rect x="' + x + '" y="84" width="14" height="40" fill="#7a95a8"/>').join("") +
      '<path d="M0 132q100 -14 200 -4t200 -4v136H0z" fill="#6aa84f"/>' +
      palm(40, 140, 80) + palm(110, 136, 64) + palm(230, 134, 72) +
      /* lake */
      '<ellipse cx="200" cy="196" rx="180" ry="44" fill="#3d8fb8"/><ellipse cx="200" cy="196" rx="170" ry="38" fill="#4fa6cf"/>' +
      '<path d="M60 206q30 -4 60 0M240 214q40 -4 80 0M150 186q30 -3 60 0" stroke="#bfe6f5" stroke-width="2" fill="none"/>' +
      /* fountain */
      '<g class="kfr-jet"><path d="M196 196q-2 -30 4 -50q6 20 4 50z" fill="#e6f6ff" opacity=".9"/></g><ellipse cx="200" cy="196" rx="20" ry="5" fill="#bfe6f5"/>' +
      /* ducks */
      '<g class="kfr-duck"><g transform="translate(90 210)"><ellipse cx="0" cy="0" rx="10" ry="5" fill="#f4f1e8"/><circle cx="8" cy="-5" r="4" fill="#f4f1e8"/><path d="M12 -5l5 1l-5 1z" fill="#e8a23a"/></g>' +
      '<g transform="translate(120 218)"><ellipse cx="0" cy="0" rx="8" ry="4" fill="#7a5a3a"/><circle cx="6" cy="-4" r="3" fill="#2f6b39"/><path d="M9 -4l4 1l-4 1z" fill="#e8a23a"/></g></g>' +
      '<rect x="300" y="226" width="80" height="22" rx="3" fill="#7a4e2a"/><text x="340" y="241" text-anchor="middle" ' + font + ' font-size="9" fill="#fff4d6">BELVEDERE PARK</text>',
      sky("kfrl1", "#8fd0f2", "#e6f5fb"));
  }

  /* 3. The Aztec warrior's sun */
  function kfraztec() {
    let rays = ""; for (let a = 0; a < 360; a += 30) rays += '<path d="M200 70l-6 -46h12z" fill="' + GOLD + '" transform="rotate(' + a + ' 200 70)"/>';
    let glyph = ""; for (let a = 0; a < 360; a += 45) glyph += '<rect x="196" y="38" width="8" height="8" fill="#7a5512" transform="rotate(' + a + ' 200 70)"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kfra1)"/>' +
      '<g class="kfr-spin kfr-slow">' + rays + '</g>' +
      '<circle cx="200" cy="70" r="36" fill="#e8c27a" stroke="#7a5512" stroke-width="3"/><circle cx="200" cy="70" r="24" fill="none" stroke="#7a5512" stroke-width="2"/>' + glyph +
      '<circle cx="200" cy="70" r="10" fill="' + RED + '"/>' +
      /* stepped temple */
      '<path d="M60 230h280l-20 -28H80z" fill="#9a6b45"/><path d="M84 202h232l-18 -26H102z" fill="#a8774e"/><path d="M106 176h188l-16 -24H122z" fill="#b5845a"/><path d="M126 152h148l-14 -22H140z" fill="#c29166"/>' +
      '<path d="M186 230v-100h28v100z" fill="#7a5233"/>' + [140, 150, 160, 170, 180, 190, 200, 210, 220].map((y, i) => '<rect x="186" y="' + y + '" width="28" height="3" fill="#5c3c24"/>').join("") +
      '<rect x="158" y="106" width="84" height="26" fill="#8a3b26"/><rect x="152" y="100" width="96" height="8" fill="#5c2a1a"/><rect x="190" y="114" width="20" height="18" fill="#2a1a10"/>' +
      '<path d="M0 230h400v30H0z" fill="#5a4a32"/>' +
      '<g class="kfr-sway"><path d="M30 230v-40" stroke="#3a6b3a" stroke-width="6"/><path d="M30 196q-14 -6 -18 -20M30 200q14 -6 18 -20" stroke="#3a6b3a" stroke-width="5" fill="none"/></g>' +
      '<g class="kfr-sway"><path d="M370 230v-34" stroke="#3a6b3a" stroke-width="6"/><path d="M370 202q-12 -6 -16 -18M370 206q12 -6 16 -18" stroke="#3a6b3a" stroke-width="5" fill="none"/></g>',
      sky("kfra1", "#3a1f4a", "#e8743b"));
  }

  /* 4. The oldies dedication booth */
  function kfrradio() {
    return svg(
      '<rect width="400" height="260" fill="#2a1d18"/><rect x="0" y="0" width="400" height="150" fill="#3b2a22"/>' +
      [20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map(x => '<rect x="' + (x - 14) + '" y="20" width="28" height="100" rx="2" fill="#4a362b"/><circle cx="' + x + '" cy="45" r="4" fill="#2a1d18"/><circle cx="' + x + '" cy="70" r="4" fill="#2a1d18"/><circle cx="' + x + '" cy="95" r="4" fill="#2a1d18"/>').join("") +
      /* ON AIR light */
      '<rect x="150" y="28" width="100" height="30" rx="5" fill="#3a0c0c" stroke="#111" stroke-width="2"/><text x="200" y="50" text-anchor="middle" ' + font + ' font-size="18" fill="#ff4a4a" class="kfr-glow">ON AIR</text>' +
      /* desk */
      '<rect x="0" y="150" width="400" height="110" fill="#5c3a24"/><rect x="0" y="150" width="400" height="8" fill="#7a4e2a"/>' +
      /* turntable */
      '<rect x="40" y="168" width="140" height="70" rx="6" fill="#c9c2b4" stroke="#6b6458" stroke-width="2"/>' +
      '<g class="kfr-spin"><circle cx="100" cy="203" r="30" fill="#111"/><circle cx="100" cy="203" r="22" fill="none" stroke="#2a2a2a" stroke-width="2"/><circle cx="100" cy="203" r="10" fill="' + RED + '"/><rect x="99" y="196" width="2" height="6" fill="#fff"/></g>' +
      '<path d="M160 176l-14 28" stroke="#555" stroke-width="3"/><circle cx="160" cy="176" r="4" fill="#888"/>' +
      /* mic */
      '<path d="M250 150l20 -50" stroke="#555" stroke-width="4"/><rect x="262" y="72" width="18" height="32" rx="9" fill="#888" stroke="#333" stroke-width="2"/>' +
      /* phone + request card */
      '<path d="M300 200h60v28h-60z" fill="#c03030"/><path d="M296 196q34 -16 68 0v6h-68z" fill="#e04040"/><circle cx="330" cy="214" r="8" fill="#f4f1e8"/>' +
      '<rect x="200" y="196" width="80" height="44" rx="2" fill="#f4f1e8" transform="rotate(-4 240 218)"/><text x="240" y="212" text-anchor="middle" ' + font + ' font-size="8" fill="#222" transform="rotate(-4 240 218)">DEDICATION</text><text x="240" y="226" text-anchor="middle" font-family="Brush Script MT, cursive" font-size="11" fill="#c03030" transform="rotate(-4 240 218)">for my lady</text>' +
      '<text x="70" y="160" ' + font + ' font-size="18" fill="' + GOLD + '" class="kfr-note">&#9835;</text><text x="130" y="160" ' + font + ' font-size="16" fill="' + GOLD + '" class="kfr-note kfr-n2">&#9834;</text>');
  }

  /* 5. Whittier Blvd and S Arizona Ave, East LA */
  function kfrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kfrc1)"/>' +
      /* the Whittier Blvd arch over the street */
      '<path d="M60 150V96q140 -66 280 0v54h-10V102q-130 -58 -260 0v48z" fill="#f4f1e8" stroke="#8a8f96" stroke-width="2"/>' +
      '<text x="200" y="64" text-anchor="middle" font-family="Brush Script MT, Georgia, serif" font-style="italic" font-weight="700" font-size="22" fill="#1d4f91" stroke="#f4f1e8" stroke-width="3" paint-order="stroke">Whittier Boulevard</text>' +
      '<rect x="0" y="146" width="400" height="16" fill="#c9b79a"/>' + [20, 120, 280, 380].map(x => '<rect x="' + (x - 18) + '" y="110" width="36" height="36" fill="' + ["#e8a23a", "#7fd3ff", "#e0b0d0", "#9ad09a"][x % 4 === 0 ? 0 : 1] + '" opacity=".75"/>').join("") +
      palm(150, 146, 60) + palm(250, 146, 66) +
      /* wall */
      '<rect x="20" y="162" width="250" height="70" fill="#d9c7a3"/><rect x="20" y="162" width="250" height="5" fill="#b9a783"/>' +
      tag("KID FROST", 36, 210, 36, ICE, -5) + tag("EAST LOS", 150, 226, 16, RED, -3) +
      '<g class="kfr-spray"><rect x="236" y="196" width="12" height="28" rx="3" fill="' + GOLD + '"/><rect x="238" y="190" width="8" height="6" fill="#ccc"/></g>' +
      /* street + hopping lowrider */
      '<rect x="0" y="232" width="400" height="28" fill="#5a5a5f"/><rect x="0" y="230" width="400" height="4" fill="#cfcac0"/>' +
      '<g class="kfr-hop">' + low(280, 204, "#8a2be2") + '</g>' +
      '<rect x="376" y="60" width="6" height="172" fill="#7a7f86"/>' +
      sign(300, 62, 96, "WHITTIER BLVD", 11) + sign(300, 88, 96, "S ARIZONA AV", 11),
      sky("kfrc1", "#2a3f7a", "#f2a65a"));
  }

  window.SCENES = { kfrstation, kfrlake, kfraztec, kfrradio, kfrcorner };
})();
