/* earthwindfire scenes (Regions tab: CHICAGO; GENRES: R&B. Maurice White founded the band in Chicago in 1969, out of the Salty Peppers, after years as a Chess Records session drummer on Record Row, S Michigan Ave). CSS classes prefixed ew- (the page's own anim-train is kept).
   1 Cermak-McCormick Place on the CTA Green Line, up on the 'L' at Cermak and State: the long curved see-through tube canopy over the platform, a silver 'L' train with green trim sliding in, black station sign with the green bullet.
   2 2120 S Michigan Ave, the old Chess Records studio on Record Row where Maurice drummed on sessions: cream terra-cotta front, big studio windows, a drum kit inside, sticks keeping time.
   3 Columbia College Chicago on S Michigan Ave, where Maurice and the band got honorary degrees in 2008: stone tower front, banners, grad caps flying.
   4 The Michigan Avenue Bridge over the Chicago River, the jazz-club run Maurice played as drummer in the Ramsey Lewis Trio: bridge houses, the river flowing, a club window with a piano.
   5 S Michigan Ave and E Cermak Rd on Record Row: green signs, EWF tagged on the wall, the skyline up Michigan Ave behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ewglow{0%,100%{opacity:.4}50%{opacity:1}}.ew-glow{animation:ewglow 2.4s ease-in-out infinite}.ew-g2{animation-delay:-1.2s}' +
    '@keyframes ewnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-20px,-70px);opacity:0}}.ew-note{animation:ewnote 3.6s ease-out infinite}.ew-n2{animation-delay:-1.2s}.ew-n3{animation-delay:-2.4s}' +
    '@keyframes ewstick{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(14deg)}}.ew-stick{transform-box:fill-box;transform-origin:100% 100%;animation:ewstick .5s ease-in-out infinite}.ew-s2{animation-delay:-.25s}' +
    '@keyframes ewcap{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(0,-46px) rotate(180deg)}100%{transform:translate(0,0) rotate(360deg)}}.ew-cap{transform-box:fill-box;transform-origin:50% 50%;animation:ewcap 2.6s ease-in-out infinite}.ew-c2{animation-delay:-.9s}.ew-c3{animation-delay:-1.7s}' +
    '@keyframes ewflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}.ew-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ewflag 1.8s ease-in-out infinite}' +
    '@keyframes ewwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.ew-wave{animation:ewwave 2.2s linear infinite}' +
    '@keyframes ewboat{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ew-boat{animation:ewboat 12s linear infinite}' +
    '@keyframes ewcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ew-car{animation:ewcar 7s linear infinite}' +
    '@keyframes ewspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ew-sp{animation:ewspray 1.4s ease-out infinite}.ew-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ew-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="ew-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const GOLD = "#f4b223", FIRE = "#e2531f", TEAL = "#2fa9b8", GRN = "#009b3a";
  /* skyline with the tall black tower and its two antennas */
  const skyline = (y, c) => '<g fill="' + c + '">' +
    '<rect x="20" y="' + (y - 40) + '" width="30" height="40"/><rect x="56" y="' + (y - 62) + '" width="24" height="62"/><rect x="86" y="' + (y - 50) + '" width="34" height="50"/>' +
    '<rect x="150" y="' + (y - 96) + '" width="20" height="96"/><rect x="170" y="' + (y - 116) + '" width="22" height="116"/><rect x="192" y="' + (y - 104) + '" width="18" height="104"/><rect x="176" y="' + (y - 140) + '" width="2.5" height="24"/><rect x="185" y="' + (y - 140) + '" width="2.5" height="24"/>' +
    '<rect x="230" y="' + (y - 70) + '" width="26" height="70"/><rect x="262" y="' + (y - 84) + '" width="20" height="84"/><path d="M262 ' + (y - 84) + 'l10 -14l10 14z"/><rect x="290" y="' + (y - 56) + '" width="40" height="56"/><rect x="336" y="' + (y - 74) + '" width="22" height="74"/><rect x="362" y="' + (y - 44) + '" width="34" height="44"/></g>';

  /* 1. Cermak-McCormick Place, Green Line, up on the 'L' */
  function ewstation() {
    const car = x => '<rect x="' + x + '" y="112" width="150" height="58" rx="5" fill="#d6dbe2" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="160" width="150" height="5" fill="' + GRN + '"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="122" width="20" height="22" rx="2" fill="#20303f"/>').join("") +
      '<rect x="' + (x + 66) + '" y="118" width="18" height="40" fill="#b7bec8" stroke="#6b737e"/>';
    const train = '<g class="anim-train">' + car(40) + car(194) + '<rect x="318" y="118" width="22" height="12" rx="2" fill="#111"/><text x="329" y="127" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GRN + '">GREEN</text><circle class="ew-glow" cx="338" cy="156" r="4" fill="#fff6c8"/></g>';
    /* the long curved see-through tube canopy */
    const ribs = Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 182 Q' + (i * 20) + ' 54 ' + (i * 20 + 10) + ' 54" stroke="#b9c4cc" stroke-width="1.4" fill="none" opacity=".55"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ew-s1)"/>' + stars(9) + skyline(200, "#26304a") +
      '<path d="M0 182V96Q0 50 60 50H340Q400 50 400 96V182z" fill="#cfe3ea" opacity=".16"/>' + ribs +
      '<path d="M0 96Q0 50 60 50H340Q400 50 400 96" stroke="#d9e2e8" stroke-width="3" fill="none"/>' +
      train +
      '<rect x="0" y="176" width="400" height="12" fill="#5a6a6a"/><rect x="0" y="174" width="400" height="3" fill="#f2d24a"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 188l10 20l10 -20" stroke="#3a4a4a" stroke-width="3" fill="none"/>').join("") +
      '<rect x="0" y="206" width="400" height="6" fill="#3a4a4a"/>' + [60, 200, 340].map(x => '<rect x="' + x + '" y="212" width="10" height="48" fill="#3a4a4a"/>').join("") +
      '<rect x="80" y="220" width="240" height="30" rx="3" fill="#111"/><text x="190" y="240" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">CERMAK-McCORMICK PL</text>' +
      '<circle cx="303" cy="235" r="10" fill="' + GRN + '"/><text x="303" y="239" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">G</text>',
      sky("ew-s1", "#0e1630", "#3a2a4a"));
  }

  /* 2. 2120 S Michigan Ave, the Chess Records studio on Record Row */
  function ewchess() {
    return svg(
      '<rect width="400" height="260" fill="url(#ew-s2)"/>' +
      '<rect x="0" y="40" width="70" height="180" fill="#5a3a30"/><rect x="330" y="30" width="70" height="190" fill="#4a3a3a"/>' +
      [0, 1, 2].map(i => '<rect x="12" y="' + (56 + i * 50) + '" width="46" height="30" fill="#2a2030"/><rect x="342" y="' + (50 + i * 52) + '" width="46" height="32" fill="#2a2030"/>').join("") +
      /* cream terra-cotta front */
      '<rect x="70" y="36" width="260" height="184" fill="#e6d6b4" stroke="#b9a37a" stroke-width="2"/>' +
      '<rect x="70" y="36" width="260" height="14" fill="#d4c098"/>' + Array.from({ length: 13 }, (_, i) => '<rect x="' + (76 + i * 20) + '" y="40" width="12" height="6" fill="#b9a37a"/>').join("") +
      /* upper studio windows */
      [0, 1, 2].map(i => '<rect x="' + (88 + i * 78) + '" y="62" width="68" height="52" fill="#2a3448" stroke="#8a7550" stroke-width="3"/><rect x="' + (121 + i * 78) + '" y="62" width="2" height="52" fill="#8a7550"/>').join("") +
      '<rect class="ew-glow" x="88" y="62" width="68" height="52" fill="' + GOLD + '" opacity=".25"/>' +
      '<text x="200" y="132" text-anchor="middle" ' + font + ' font-size="15" fill="#5a4630" letter-spacing="2">2120</text>' +
      /* storefront: drum kit seen through the big window */
      '<rect x="88" y="142" width="150" height="70" fill="#1e2636" stroke="#8a7550" stroke-width="3"/>' +
      '<ellipse cx="160" cy="196" rx="20" ry="13" fill="' + FIRE + '" stroke="#f3e2c0" stroke-width="2"/><circle cx="160" cy="196" r="7" fill="#f3e2c0"/>' +
      '<rect x="122" y="178" width="20" height="12" rx="2" fill="' + FIRE + '" stroke="#f3e2c0" stroke-width="1.5"/><rect x="180" y="178" width="20" height="12" rx="2" fill="' + FIRE + '" stroke="#f3e2c0" stroke-width="1.5"/>' +
      '<ellipse cx="114" cy="164" rx="14" ry="3" fill="' + GOLD + '"/><rect x="113" y="164" width="2" height="40" fill="#999"/><ellipse cx="210" cy="160" rx="16" ry="3" fill="' + GOLD + '"/><rect x="209" y="160" width="2" height="44" fill="#999"/>' +
      '<rect class="ew-stick" x="132" y="160" width="22" height="2.4" rx="1" fill="#e8d2a0"/><rect class="ew-stick ew-s2" x="168" y="160" width="22" height="2.4" rx="1" fill="#e8d2a0"/>' +
      /* door */
      '<rect x="252" y="142" width="62" height="78" fill="#2a2a30" stroke="#8a7550" stroke-width="3"/><rect x="262" y="152" width="42" height="40" fill="#3a4a5a"/><circle cx="306" cy="186" r="2.5" fill="' + GOLD + '"/>' +
      note(240, 70, GOLD) + note(170, 56, "#fff", "ew-n2") + note(300, 66, TEAL, "ew-n3") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3a40"/><rect x="0" y="218" width="400" height="4" fill="#8a8a90"/>',
      sky("ew-s2", "#1a2240", "#5a3a50"));
  }

  /* 3. Columbia College Chicago on S Michigan Ave, honorary degrees in 2008 */
  function ewcolumbia() {
    const cap = (x, y, cls) => '<g class="ew-cap ' + cls + '"><path d="M' + (x - 12) + ' ' + y + 'l12 -6l12 6l-12 6z" fill="#111" stroke="' + GOLD + '" stroke-width="1"/><rect x="' + (x - 6) + '" y="' + (y + 2) + '" width="12" height="5" fill="#111"/><path d="M' + x + ' ' + y + 'l8 7" stroke="' + GOLD + '" stroke-width="1.4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ew-s3)"/>' +
      /* grey stone tower front */
      '<rect x="110" y="30" width="180" height="196" fill="#b9b2a4" stroke="#7e786c" stroke-width="2"/>' +
      '<rect x="104" y="24" width="192" height="12" fill="#a39c8e"/><rect x="128" y="10" width="144" height="16" fill="#a39c8e"/>' +
      Array.from({ length: 5 }, (_, r) => [0, 1, 2, 3, 4].map(c => '<rect x="' + (124 + c * 32) + '" y="' + (44 + r * 30) + '" width="22" height="20" fill="#2c3646"/>').join("")).join("") +
      '<rect class="ew-glow" x="156" y="74" width="22" height="20" fill="' + GOLD + '" opacity=".35"/><rect class="ew-glow ew-g2" x="220" y="104" width="22" height="20" fill="' + GOLD + '" opacity=".35"/>' +
      /* banners */
      '<rect x="112" y="60" width="4" height="70" fill="#555"/><rect class="ew-flag" x="116" y="62" width="18" height="44" fill="' + FIRE + '"/>' +
      '<rect x="284" y="60" width="4" height="70" fill="#555"/><rect class="ew-flag" x="266" y="62" width="18" height="44" fill="' + TEAL + '" style="animation-delay:-.9s"/>' +
      /* entrance */
      '<rect x="170" y="190" width="60" height="36" fill="#2a2a30"/><rect x="164" y="184" width="72" height="8" fill="#7e786c"/>' +
      /* neighbors */
      '<rect x="0" y="80" width="104" height="146" fill="#6a5a50"/><rect x="296" y="66" width="104" height="160" fill="#5a5060"/>' +
      [0, 1, 2, 3].map(i => '<rect x="14" y="' + (94 + i * 32) + '" width="76" height="18" fill="#2c3646"/><rect x="310" y="' + (82 + i * 34) + '" width="76" height="18" fill="#2c3646"/>').join("") +
      cap(150, 150, "") + cap(200, 140, "ew-c2") + cap(250, 152, "ew-c3") +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a40"/><rect x="0" y="224" width="400" height="3" fill="#9a9aa0"/>' +
      [30, 120, 280, 370].map(x => '<rect x="' + x + '" y="186" width="3" height="40" fill="#2a2a2a"/><circle class="ew-glow" cx="' + (x + 1.5) + '" cy="184" r="5" fill="#fff2c0"/>').join(""),
      sky("ew-s3", "#2a6aa8", "#9ac8e0"));
  }

  /* 4. The Michigan Avenue Bridge over the Chicago River, jazz-club nights with the Ramsey Lewis Trio */
  function ewbridge() {
    const waves = '<g class="ew-wave">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 214q10 -5 20 0t20 0" stroke="#7ac8d0" stroke-width="2" fill="none" opacity=".6"/><path d="M' + (i * 40 + 20) + ' 236q10 -5 20 0t20 0" stroke="#7ac8d0" stroke-width="2" fill="none" opacity=".4"/>').join("") + '</g>';
    const house = x => '<rect x="' + x + '" y="112" width="34" height="52" fill="#e2dccb" stroke="#9a9280" stroke-width="2"/><rect x="' + (x - 3) + '" y="106" width="40" height="8" fill="#c9c1ac"/>' +
      '<rect x="' + (x + 9) + '" y="124" width="16" height="22" fill="#2a3448"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ew-s4)"/>' + stars(14) + skyline(150, "#1c2238") +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="ew-glow' + (i % 2 ? " ew-g2" : "") + '" x="' + (60 + i * 52) + '" y="' + (98 + (i % 3) * 10) + '" width="4" height="4" fill="' + GOLD + '"/>').join("") +
      /* river */
      '<rect x="0" y="196" width="400" height="64" fill="#0f3a4a"/>' + waves +
      '<g class="ew-boat"><path d="M0 206h70l-8 10h-56z" fill="#e8e8e8"/><rect x="14" y="196" width="40" height="10" fill="#cfd8de"/></g>' +
      /* bridge deck and the four bridge houses */
      '<rect x="0" y="164" width="400" height="16" fill="#6a6a60"/><rect x="0" y="160" width="400" height="5" fill="#8a8a7a"/>' +
      '<path d="M0 180Q200 210 400 180" fill="#4a4a42"/>' + house(40) + house(110) + house(256) + house(326) +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 6) + '" y="150" width="2" height="10" fill="#8a8a7a"/>').join("") + '<rect x="0" y="148" width="400" height="3" fill="#8a8a7a"/>' +
      /* jazz club window at the river corner */
      '<rect x="160" y="96" width="80" height="52" rx="3" fill="#2a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="172" y="122" width="40" height="16" fill="#111"/><rect x="172" y="122" width="40" height="4" fill="#f3f3f3"/>' + [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (174 + i * 6) + '" y="122" width="2.5" height="3" fill="#111"/>').join("") +
      '<ellipse cx="226" cy="132" rx="8" ry="5" fill="' + FIRE + '"/><ellipse cx="226" cy="118" rx="8" ry="2" fill="' + GOLD + '"/>' +
      '<text x="200" y="110" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="2">JAZZ</text>' +
      note(186, 92, GOLD) + note(214, 88, "#fff", "ew-n2") + note(230, 96, TEAL, "ew-n3"),
      sky("ew-s4", "#0a1028", "#2a2a5a"));
  }

  /* 5. S Michigan Ave and E Cermak Rd on Record Row */
  function ewcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ew-s5)"/>' + skyline(150, "#2a2a48") +
      '<circle class="ew-glow" cx="186" cy="12" r="2" fill="#ff4040"/>' +
      /* brick wall with the tag */
      '<rect x="0" y="118" width="400" height="100" fill="#7a3a2a"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (126 + r * 10) + 'H400" stroke="#5a2a20" stroke-width="1"/>').join("") +
      tag("EWF", 40, 186, 46, GOLD, -6) + tag("BA-DE-YA", 170, 176, 26, FIRE, -4) + tag("RECORD ROW", 196, 206, 18, TEAL, -3) +
      '<circle class="ew-sp" cx="150" cy="150" r="3" fill="' + GOLD + '" opacity=".8"/><circle class="ew-sp ew-sp2" cx="156" cy="156" r="2" fill="' + GOLD + '" opacity=".8"/>' +
      /* street sign pole */
      '<rect x="330" y="60" width="5" height="160" fill="#4a5a4a"/>' + sign(268, 64, 128, "S MICHIGAN AVE") + sign(278, 90, 112, "E CERMAK RD") +
      /* sidewalk and street */
      '<rect x="0" y="218" width="400" height="42" fill="#444"/><rect x="0" y="216" width="400" height="4" fill="#888"/>' +
      '<g class="ew-car"><rect x="0" y="228" width="70" height="18" rx="5" fill="' + TEAL + '"/><rect x="12" y="220" width="40" height="12" rx="4" fill="#1f6a74"/><circle cx="16" cy="248" r="6" fill="#111"/><circle cx="54" cy="248" r="6" fill="#111"/></g>',
      sky("ew-s5", "#3a2a5a", "#e2733f"));
  }

  window.SCENES = { ewstation, ewchess, ewcolumbia, ewbridge, ewcorner };
})();
