/* sims scenes (Regions tab: Minneapolis; Hopkins). CSS classes prefixed sm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes smglow{0%,100%{opacity:.45}50%{opacity:1}}.sm-glow{animation:smglow 2.2s ease-in-out infinite}.sm-g2{animation-delay:-1.1s}' +
    '@keyframes smspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.sm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:smspin 14s linear infinite}' +
    '@keyframes smsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.sm-sw{transform-box:fill-box;transform-origin:50% 100%;animation:smsweep 4s ease-in-out infinite}.sm-sw2{animation-delay:-2s}' +
    '@keyframes smblink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}.sm-eye{transform-box:fill-box;transform-origin:50% 50%;animation:smblink 3.6s infinite}.sm-e2{animation-delay:-1.3s}.sm-e3{animation-delay:-2.4s}' +
    '@keyframes smpad{0%,100%{opacity:.25}50%{opacity:1}}.sm-pad{animation:smpad .8s steps(2) infinite}.sm-p2{animation-delay:-.2s}.sm-p3{animation-delay:-.4s}.sm-p4{animation-delay:-.6s}' +
    '@keyframes smbump{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.sm-bump{transform-box:fill-box;transform-origin:50% 50%;animation:smbump .5s ease-in-out infinite}' +
    '@keyframes smflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.sm-flag{transform-box:fill-box;transform-origin:0 0;animation:smflag 1.6s ease-in-out infinite}' +
    '@keyframes smspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.sm-sp{animation:smspray 1.4s ease-out infinite}.sm-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sm-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#e0475b", BERRY = "#c2185b", TEAL = "#3fc1c9", GOLD = "#f2c14e", MTBLUE = "#0053a0";
  /* two-story brick storefronts */
  const fronts = (x0, n, y, h, cols) => Array.from({ length: n }, (_, i) => { const x = x0 + i * 62; const c = cols[i % cols.length];
    return '<rect x="' + x + '" y="' + y + '" width="60" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (y - 4) + '" width="60" height="6" fill="#3a2a22"/>' +
      [0, 1, 2].map(k => '<rect x="' + (x + 6 + k * 18) + '" y="' + (y + 10) + '" width="12" height="16" fill="#2a2a34"/>').join("") +
      '<rect class="' + (i % 2 ? "sm-glow" : "sm-glow sm-g2") + '" x="' + (x + 6) + '" y="' + (y + h - 30) + '" width="48" height="24" fill="#ffd98a" opacity=".85"/>'; }).join("");

  /* 1. Mainstreet in downtown Hopkins: two-story brick storefronts, the Metro Transit 612 bus pulling in, the black stop sign */
  function smstop() {
    const bus = '<g class="anim-train"><rect x="30" y="150" width="250" height="68" rx="9" fill="#f4f4f2" stroke="#8a9196" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 40) + '" y="160" width="32" height="26" rx="3" fill="#1d2a33"/>').join("") +
      '<rect x="36" y="160" width="22" height="50" rx="2" fill="#1d2a33"/><rect x="30" y="192" width="250" height="6" fill="' + MTBLUE + '"/><rect x="30" y="199" width="250" height="3" fill="#f2c200"/>' +
      '<rect x="240" y="152" width="34" height="10" rx="2" fill="#111"/><text x="257" y="160" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb02e">612</text>' +
      '<circle cx="80" cy="220" r="11" fill="#1a1a1a"/><circle cx="236" cy="220" r="11" fill="#1a1a1a"/><circle cx="80" cy="220" r="4" fill="#888"/><circle cx="236" cy="220" r="4" fill="#888"/><circle cx="276" cy="208" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sm1)"/>' +
      fronts(4, 7, 66, 86, ["#8a4a34", "#a0603e", "#7a3e30", "#94583a"]) +
      '<rect x="0" y="152" width="400" height="4" fill="#cfc6b6"/><rect x="0" y="156" width="400" height="104" fill="#55595e"/><path d="M0 238h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus + '<rect x="0" y="226" width="400" height="6" fill="#b8b2a4"/>' +
      '<rect x="356" y="96" width="6" height="134" fill="#2f3338"/><rect x="246" y="94" width="150" height="34" rx="3" fill="#111"/>' +
      '<text x="256" y="116" ' + font + ' font-size="13" fill="#fff">Mainstreet</text>' + badge(338, 111, "612", MTBLUE),
      sky("sm1", "#f2a65a", "#f7d9a8"));
  }

  /* 2. The Hopkins Raspberry Festival: the giant raspberry float on Mainstreet, bunting, the Ferris wheel turning behind */
  function smberry() {
    const drupes = []; for (let r = 0; r < 5; r++) for (let c = 0; c < 6 - (r % 2); c++) drupes.push([158 + c * 16 + (r % 2) * 8, 96 + r * 15]);
    return svg(
      '<rect width="400" height="260" fill="url(#sm2)"/>' +
      /* Ferris wheel */
      '<g transform="translate(320 92)"><g class="sm-spin"><circle cx="0" cy="0" r="58" fill="none" stroke="#e8e8f0" stroke-width="3"/>' +
      Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M0 0L' + (58 * Math.cos(a)).toFixed(1) + ' ' + (58 * Math.sin(a)).toFixed(1) + '" stroke="#e8e8f0" stroke-width="1.5"/><circle cx="' + (58 * Math.cos(a)).toFixed(1) + '" cy="' + (58 * Math.sin(a)).toFixed(1) + '" r="6" fill="' + ["#e0475b", GOLD, TEAL, "#8c6bd6"][i % 4] + '"/>'; }).join("") + '</g>' +
      '<path d="M-30 100L0 0L30 100" stroke="#cfcfd8" stroke-width="4" fill="none"/></g>' +
      /* bunting */
      '<path d="M0 30q100 26 200 0t200 0" stroke="#fff" stroke-width="1.5" fill="none"/>' +
      Array.from({ length: 14 }, (_, i) => { const x = 10 + i * 28; const y = 30 + 13 * Math.sin((x / 200) * Math.PI) * (x < 200 ? 1 : -1) * 0; return '<path class="sm-flag" d="M' + x + ' ' + (36 + (i % 7 === 3 ? 6 : 0)) + 'l10 0l-5 12z" fill="' + [RED, "#fff", GOLD][i % 3] + '"/>'; }).join("") +
      /* the float: a flatbed with a giant raspberry and leaves */
      '<rect x="110" y="178" width="200" height="22" rx="4" fill="#2e7d4f"/><rect x="104" y="196" width="212" height="8" fill="#1e5a38"/>' +
      '<circle cx="140" cy="208" r="10" fill="#1a1a1a"/><circle cx="280" cy="208" r="10" fill="#1a1a1a"/>' +
      '<path d="M150 92q50 -40 100 0q16 50 -50 92q-66 -42 -50 -92z" fill="' + BERRY + '"/>' +
      drupes.map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="7.5" fill="' + (i % 3 ? "#d81b60" : "#e8467c") + '" stroke="#8e0f3c" stroke-width="1"/>').join("") +
      '<path d="M200 62q-30 -10 -44 8q24 6 44 -8zM200 62q30 -10 44 8q-24 6 -44 -8zM200 62q-4 -20 6 -26" fill="#3fa34d" stroke="#2a7a36" stroke-width="2"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#6a6e74"/><rect x="0" y="212" width="400" height="4" fill="#d8d2c6"/>' +
      '<g fill="#2a2a34">' + [30, 54, 78, 340, 364].map((x, i) => '<rect x="' + (x - 6) + '" y="' + (226 + (i % 2) * 4) + '" width="12" height="26" rx="4"/><circle cx="' + x + '" cy="' + (220 + (i % 2) * 4) + '" r="7"/>').join("") + '</g>' +
      '<text x="210" y="194" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">RASPBERRY FESTIVAL</text>',
      sky("sm2", "#4aa3df", "#bfe3f5"));
  }

  /* 3. The Bad Time Zoo: an old iron zoo gate at night with the arch sign, eyes blinking in the dark, spotlights sweeping, the city lit behind */
  function smzoo() {
    return svg(
      '<rect width="400" height="260" fill="url(#sm3)"/>' + stars(18) +
      '<path class="sm-sw" d="M60 260L30 40h50z" fill="#fff6c8" opacity=".12"/><path class="sm-sw sm-sw2" d="M340 260L310 40h50z" fill="#fff6c8" opacity=".12"/>' +
      '<g fill="#1a1d2a"><rect x="0" y="100" width="44" height="80"/><rect x="48" y="80" width="30" height="100"/><rect x="300" y="88" width="36" height="92"/><rect x="340" y="110" width="60" height="70"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="sm-glow' + (i % 2 ? " sm-g2" : "") + '" x="' + [6, 22, 54, 64, 306, 318, 348, 364, 380, 30][i] + '" y="' + (110 + (i % 4) * 16) + '" width="5" height="6" fill="#ffd98a"/>').join("") +
      /* the gate: stone posts, iron bars, the arch with the sign */
      '<rect x="92" y="96" width="26" height="130" fill="#6e6a62"/><rect x="282" y="96" width="26" height="130" fill="#6e6a62"/><rect x="88" y="90" width="34" height="10" fill="#5e5a52"/><rect x="278" y="90" width="34" height="10" fill="#5e5a52"/>' +
      '<path d="M118 112q82 -60 164 0" stroke="#22252c" stroke-width="6" fill="none"/>' +
      '<rect x="132" y="70" width="136" height="28" rx="4" fill="#22252c" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="90" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="1">BAD TIME ZOO</text>' +
      Array.from({ length: 15 }, (_, i) => '<rect x="' + (122 + i * 11) + '" y="112" width="3" height="114" fill="#22252c"/>').join("") +
      '<rect x="118" y="150" width="164" height="4" fill="#22252c"/>' +
      /* eyes in the dark behind the bars */
      [[150, 180, "sm-eye"], [214, 166, "sm-eye sm-e2"], [252, 192, "sm-eye sm-e3"]].map(([x, y, c]) => '<g class="' + c + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="#ffe14a"/><ellipse cx="' + (x + 12) + '" cy="' + y + '" rx="4" ry="3" fill="#ffe14a"/></g>').join("") +
      '<rect x="0" y="226" width="400" height="34" fill="#2a2c33"/><rect x="0" y="224" width="400" height="4" fill="#4a4c54"/>',
      sky("sm3", "#05060f", "#2a1838"));
  }

  /* 4. The Shredders basement: the drum machine pads flashing, speakers bumping, the mic on the stand, the crew name taped to the wall */
  function smshred() {
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (i * 16) + 'h400" stroke="#332c27" stroke-width="2"/>').join("") + '<path d="M180 0L100 260h200L220 0z" fill="#fff3c8" opacity=".06"/>' +
      '<rect x="120" y="22" width="160" height="40" fill="#f4efe0" transform="rotate(-2 200 42)"/><text x="200" y="50" text-anchor="middle" transform="rotate(-2 200 42)" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="24" fill="' + RED + '">SHREDDERS</text>' +
      '<rect x="40" y="70" width="12" height="16" fill="#b8b2a4"/><rect x="54" y="70" width="12" height="16" fill="#b8b2a4"/>' +
      /* speakers */
      [[30, 92], [314, 92]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="56" height="100" rx="4" fill="#111"/><circle class="sm-bump" cx="' + (x + 28) + '" cy="' + (y + 64) + '" r="20" fill="#2a2a2a" stroke="#555" stroke-width="3"/><circle cx="' + (x + 28) + '" cy="' + (y + 22) + '" r="10" fill="#2a2a2a" stroke="#555" stroke-width="2"/>').join("") +
      /* table with the drum machine */
      '<rect x="100" y="176" width="200" height="12" fill="#6a4a32"/><rect x="110" y="188" width="8" height="60" fill="#5a3a22"/><rect x="282" y="188" width="8" height="60" fill="#5a3a22"/>' +
      '<rect x="124" y="128" width="112" height="48" rx="4" fill="#3a3d44" stroke="#22252a" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect class="sm-pad sm-p' + (1 + (i * 7) % 4) + '" x="' + (130 + (i % 8) * 13) + '" y="' + (136 + Math.floor(i / 8) * 16) + '" width="10" height="12" rx="2" fill="' + [RED, GOLD, TEAL, "#fff"][(i * 3) % 4] + '"/>').join("") +
      '<rect x="244" y="150" width="46" height="26" rx="3" fill="#1d1f24"/><circle cx="256" cy="163" r="6" fill="#444"/><circle cx="276" cy="163" r="6" fill="#444"/>' +
      /* mic stand */
      '<path d="M200 250V112" stroke="#888" stroke-width="3"/><path d="M186 250h28" stroke="#888" stroke-width="3"/><rect x="194" y="92" width="12" height="22" rx="6" fill="#bbb"/>' +
      '<circle cx="200" cy="6" r="5" fill="#ffe8a8"/>',
      "");
  }

  /* 5. Mainstreet and 11th Ave S in Hopkins: green signs, SIMS tagged on the brick, the Hopkins Center for the Arts lit up behind */
  function smcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sm5)"/>' + stars(10) +
      /* Hopkins Center for the Arts: a low modern building, glass lobby, a tall fin */
      '<rect x="120" y="74" width="190" height="66" fill="#b9a48a"/><rect x="150" y="84" width="100" height="56" fill="#2a3a4a"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect class="sm-glow' + (i % 2 ? " sm-g2" : "") + '" x="' + (154 + i * 20) + '" y="88" width="16" height="48" fill="#ffd98a" opacity=".75"/>').join("") +
      '<rect x="258" y="40" width="22" height="100" fill="#8a3a3a"/><text x="269" y="58" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">A</text><text x="269" y="72" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">R</text><text x="269" y="86" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">T</text><text x="269" y="100" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">S</text>' +
      '<g fill="#1c2236"><rect x="0" y="96" width="110" height="44"/><rect x="320" y="90" width="80" height="50"/></g>' +
      /* brick wall with the tag */
      '<rect x="0" y="136" width="400" height="88" fill="#8a4a34"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#7a3e2c" stroke-width="1"/>').join("") +
      tag("SIMS", 30, 200, 66, RED, -6) + tag("BAD TIME ZOO", 168, 184, 22, GOLD, -4) + tag("GET FREE", 40, 218, 18, "#fff", -3) + tag("CHECK ONE TWO", 186, 214, 16, TEAL, -3) +
      '<g class="sm-sp"><circle cx="170" cy="164" r="3" fill="' + RED + '" opacity=".7"/></g><g class="sm-sp sm-sp2"><circle cx="176" cy="158" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55595e"/><rect x="0" y="222" width="400" height="4" fill="#d8d2c6"/>' +
      '<rect x="354" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(306, 98, 98, "Mainstreet") + sign(300, 124, 104, "11th Ave S"),
      sky("sm5", "#1a1438", "#d0705a"));
  }

  window.SCENES = { smstop: smstop, smberry: smberry, smzoo: smzoo, smshred: smshred, smcorner: smcorner };
})();
