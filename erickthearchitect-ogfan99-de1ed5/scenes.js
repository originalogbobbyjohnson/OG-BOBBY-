/* erickthearchitect scenes (NYC map, Brooklyn: Flatbush). CSS classes prefixed et- (the page's own anim-train is kept).
   1 The B44 pulling up on Nostrand Av at Beverly Rd, the green globes of the Beverly Rd 2/5 entrance on the corner.
   2 The comic shop on Nostrand Av where he went with his dad and big brothers (Bulletproof Comics): window full of covers, OPEN sign flickering.
   3 The Caribbean takeout on Church Av where he picks up his mother's jerk chicken: menu board, steam off the pans, beef patties in the warmer.
   4 Paris at night ("mobbin' out in Paris, France" - Denise's Last Son): the Eiffel Tower lit gold and sparkling over the Seine.
   5 East 31st St & Beverly Rd, his block: green street signs, ERICK tagged on the wall, the 1932 art-deco Sears tower on Beverly Rd behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes etflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.95}}.et-flk{animation:etflick 2.6s infinite}' +
    '@keyframes etglow{0%,100%{opacity:.4}50%{opacity:1}}.et-glow{animation:etglow 2.2s ease-in-out infinite}.et-g2{animation-delay:-1.1s}.et-g3{animation-delay:-.5s}' +
    '@keyframes etsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-12px);opacity:0}}.et-st{animation:etsteam 2.2s ease-out infinite}.et-st2{animation-delay:-.7s}.et-st3{animation-delay:-1.4s}' +
    '@keyframes etspark{0%,100%{opacity:0}50%{opacity:1}}.et-sp{animation:etspark .9s ease-in-out infinite}.et-sp2{animation-delay:-.3s}.et-sp3{animation-delay:-.6s}' +
    '@keyframes etbeam{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}.et-beam{transform-origin:200px 62px;animation:etbeam 6s ease-in-out infinite}' +
    '@keyframes etwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.et-wv{animation:etwave 3s linear infinite}' +
    '@keyframes etspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.et-spr{animation:etspray 1.4s ease-out infinite}.et-spr2{animation-delay:.5s}' +
    '@keyframes etcloud{0%{transform:translateX(-90px)}100%{transform:translateX(470px)}}.et-cl{animation:etcloud 34s linear infinite}.et-cl2{animation-delay:-17s}' +
    '@keyframes etpage{0%,100%{transform:rotate(0)}50%{transform:rotate(-4deg)}}.et-pg{transform-box:fill-box;transform-origin:50% 0;animation:etpage 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "et-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#0039a6", GOLD = "#f2c14e", RED = "#e2574c", SKYB = "#7fc8ff";
  const bullet = (x, y, t, c) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + c + '"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + t + '</text>';

  /* 1. The B44 at Nostrand Av & Beverly Rd */
  function etstation() {
    const bus = '<g class="anim-train"><rect x="40" y="120" width="246" height="80" rx="10" fill="#f2f2ef" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (82 + i * 40) + '" y="132" width="34" height="30" rx="3" fill="#22303c"/>').join("") +
      '<rect x="46" y="132" width="28" height="56" rx="2" fill="#22303c"/><rect x="40" y="166" width="246" height="7" fill="' + BLUE + '"/><rect x="40" y="175" width="246" height="3" fill="#f2c200"/>' +
      '<rect x="44" y="121" width="100" height="11" rx="2" fill="#111"/><text x="94" y="129.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">B44 NOSTRAND AV</text>' +
      '<circle cx="90" cy="200" r="12" fill="#222"/><circle cx="90" cy="200" r="5" fill="#9aa1a8"/><circle cx="240" cy="200" r="12" fill="#222"/><circle cx="240" cy="200" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="186" r="3.5" fill="#fff6c2"/></g>';
    const shops = [["#7a4a2a", "#ffd98a"], ["#2f5f8a", "#fff1c2"], ["#6a3a6a", "#ffd98a"], ["#2f6a45", "#fff1c2"], ["#8a5a2a", "#ffd98a"]];
    return svg(
      '<rect width="400" height="260" fill="url(#et1)"/>' + stars(18) +
      shops.map((c, i) => '<rect x="' + (i * 80) + '" y="36" width="80" height="84" fill="' + c[0] + '" stroke="#1a1a1a"/>' +
        '<rect x="' + (i * 80 + 8) + '" y="44" width="28" height="18" fill="' + c[1] + '" class="et-glow ' + (i % 2 ? "et-g2" : "") + '"/><rect x="' + (i * 80 + 44) + '" y="44" width="28" height="18" fill="' + c[1] + '" opacity=".8"/>' +
        '<rect x="' + (i * 80 + 4) + '" y="92" width="72" height="28" fill="#1d1d22"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a40"/><rect x="0" y="200" width="400" height="5" fill="#9a9aa2"/>' +
      '<path d="M0 232h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* subway entrance with the green globes */
      '<rect x="304" y="150" width="70" height="50" fill="#2a2a2e"/><path d="M304 150h70" stroke="#666" stroke-width="3"/><rect x="306" y="168" width="66" height="14" fill="#111"/>' +
      '<text x="339" y="178" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">BEVERLY RD</text>' + bullet(326, 192, "2", "#ee352e") + bullet(352, 192, "5", "#00933c") +
      '<rect x="300" y="120" width="4" height="80" fill="#3c4a3c"/><rect x="374" y="120" width="4" height="80" fill="#3c4a3c"/>' +
      '<circle class="et-glow" cx="302" cy="116" r="7" fill="#4fd36b"/><circle class="et-glow et-g2" cx="376" cy="116" r="7" fill="#4fd36b"/>' +
      /* bus stop sign */
      '<rect x="18" y="128" width="4" height="74" fill="#888"/><rect x="4" y="92" width="34" height="40" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="21" y="106" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">B44</text><text x="21" y="117" text-anchor="middle" ' + font + ' font-size="5" fill="#fff">NOSTRAND AV</text><text x="21" y="125" text-anchor="middle" ' + font + ' font-size="5" fill="#fff">BEVERLY RD</text>' +
      bus,
      sky("et1", "#0b1626", "#2a3450"));
  }

  /* 2. The comic shop on Nostrand Av */
  function etcomics() {
    const covers = [["#e2574c", "POW"], ["#f2c14e", "ZAP"], ["#3fa7e0", "SAGA"], ["#6cbe45", "WOW"], ["#b56be0", "BAM"], ["#ff8a3d", "VOL 1"]];
    return svg(
      '<rect width="400" height="260" fill="#6e2e24"/>' +
      Array.from({ length: 10 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2) * 15 - 15) + '" y="' + (r * 12) + '" width="29" height="11" fill="#7c3a2c" stroke="#5a241a" stroke-width=".8"/>').join("")).join("") +
      '<rect x="40" y="18" width="320" height="40" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="200" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="28" fill="' + GOLD + '" letter-spacing="4">COMICS</text>' +
      '<rect x="30" y="68" width="340" height="140" fill="#1c2430" stroke="#333" stroke-width="4"/>' +
      '<rect x="34" y="72" width="332" height="132" fill="#2c3a4c" opacity=".7"/>' +
      covers.map((c, i) => { const x = 46 + (i % 3) * 56, y = 80 + Math.floor(i / 3) * 62; return '<g class="' + (i === 2 ? "et-pg" : "") + '"><rect x="' + x + '" y="' + y + '" width="46" height="56" fill="' + c[0] + '" stroke="#fff" stroke-width="2"/>' +
        '<path d="M' + (x + 4) + ' ' + (y + 30) + 'l' + 10 + ' -10l6 8l8 -12l14 18v16h-38z" fill="#000" opacity=".25"/>' +
        '<text x="' + (x + 23) + '" y="' + (y + 18) + '" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="13" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">' + c[1] + '</text></g>'; }).join("") +
      /* spinner rack + OPEN sign */
      '<rect x="230" y="82" width="120" height="76" rx="4" fill="#141414" stroke="#444"/>' +
      '<text class="et-flk" x="290" y="132" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="34" fill="#ff4d6d" stroke="#ff9db0" stroke-width="1">OPEN</text>' +
      '<rect x="240" y="166" width="100" height="32" fill="#222"/><text x="290" y="180" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">NEW ISSUES</text><text x="290" y="192" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">EVERY WEDNESDAY</text>' +
      '<rect x="0" y="208" width="400" height="52" fill="#4a4a50"/><rect x="0" y="208" width="400" height="5" fill="#9a9aa2"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#cfd6e0" letter-spacing="3">NOSTRAND AV · FLATBUSH</text>');
  }

  /* 3. The Caribbean takeout on Church Av */
  function etpatty() {
    const menu = [["JERK CHICKEN", "#ffd23f"], ["BEEF PATTY", "#fff"], ["OXTAIL", "#fff"], ["RICE & PEAS", "#fff"], ["FRIED BAKE", "#fff"]];
    return svg(
      '<rect width="400" height="260" fill="#f3e6c8"/><rect y="0" width="400" height="14" fill="#009b3a"/><rect y="14" width="400" height="6" fill="#fed100"/><rect y="20" width="400" height="6" fill="#111"/>' +
      '<rect x="24" y="36" width="200" height="110" rx="4" fill="#1e1e1e" stroke="#6b4a2a" stroke-width="5"/>' +
      '<text x="124" y="56" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="15" fill="#6cbe45" letter-spacing="2">CHURCH AV MENU</text>' +
      menu.map((m, i) => '<text x="38" y="' + (76 + i * 15) + '" ' + font + ' font-size="11" fill="' + m[1] + '">' + m[0] + '</text><path d="M150 ' + (73 + i * 15) + 'h40" stroke="#555" stroke-dasharray="2 3"/>').join("") +
      /* window with the Brooklyn street */
      '<rect x="244" y="36" width="134" height="110" fill="#8fc6e8" stroke="#6b4a2a" stroke-width="5"/><rect x="244" y="104" width="134" height="42" fill="#5a5a60"/><rect x="256" y="72" width="30" height="34" fill="#a85a3a"/><rect x="292" y="62" width="36" height="44" fill="#c08a5a"/><rect x="334" y="78" width="36" height="28" fill="#7a5a8a"/>' +
      '<path d="M311 40v104M244 90h134" stroke="#6b4a2a" stroke-width="3"/>' +
      /* counter and steam pans */
      '<rect x="0" y="160" width="400" height="100" fill="#7a4a2a"/><rect x="0" y="156" width="400" height="10" fill="#c9a26a"/>' +
      '<rect x="30" y="166" width="150" height="22" rx="3" fill="#b8bec6" stroke="#666"/>' +
      [48, 98, 148].map((x, i) => '<rect x="' + (x - 18) + '" y="168" width="36" height="16" fill="' + ["#7a2e10", "#c78a2a", "#5a2a1a"][i] + '"/>' +
        '<path class="et-st ' + ["", "et-st2", "et-st3"][i] + '" d="M' + (x - 6) + ' 164q-5 -6 0 -11q5 -5 0 -9M' + (x + 6) + ' 164q-5 -6 0 -11q5 -5 0 -9" stroke="#fff" stroke-width="2.5" fill="none" opacity=".75"/>').join("") +
      /* patty warmer */
      '<rect x="220" y="110" width="150" height="52" rx="4" fill="#2a2a2a" stroke="#888" stroke-width="2"/><rect x="226" y="116" width="138" height="40" fill="#ffb347" opacity=".35" class="et-glow"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (232 + (i % 3) * 44) + ' ' + (134 + Math.floor(i / 3) * 16) + 'h34q0 -12 -17 -12q-17 0 -17 12z" fill="#f2b33d" stroke="#b5741a" stroke-width="1.5"/>').join("") +
      '<rect x="250" y="164" width="90" height="16" rx="3" fill="#7a2e10"/><text x="295" y="176" text-anchor="middle" ' + font + ' font-size="10" fill="#fed100">HOT PATTIES</text>' +
      '<text x="200" y="226" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="22" fill="#fed100" stroke="#111" stroke-width="2" paint-order="stroke">ONE BEEF PATTY, COCO BREAD</text>');
  }

  /* 4. Paris at night, the Eiffel Tower */
  function etparis() {
    const T = "#8a5a2e", L = "#ffcf6a";
    const tower = '<g>' +
      '<path d="M200 30l-6 40h12z" fill="' + T + '"/><path d="M194 70l-14 60h40l-14 -60z" fill="' + T + '"/>' +
      '<path d="M180 130l-40 92h22q20 -40 38 -40q18 0 38 40h22l-40 -92z" fill="' + T + '"/>' +
      '<rect x="176" y="126" width="48" height="8" fill="#6a421e"/><rect x="186" y="66" width="28" height="6" fill="#6a421e"/>' +
      '<path d="M184 136l-30 80M216 136l30 80M196 76l-12 50M204 76l12 50" stroke="' + L + '" stroke-width="1.2" opacity=".9"/>' +
      '<path d="M162 180h76M172 156h56M186 100h28" stroke="' + L + '" stroke-width="1.2" opacity=".9"/>' +
      '<circle cx="200" cy="28" r="3" fill="#fff"/></g>';
    const sparks = Array.from({ length: 22 }, (_, i) => { const y = 40 + (i * 37) % 180, half = (y - 30) * 0.42 + 4; const x = 200 + ((i * 53) % 100 - 50) / 50 * half; return '<circle class="et-sp ' + ["", "et-sp2", "et-sp3"][i % 3] + '" cx="' + x.toFixed(1) + '" cy="' + y + '" r="1.8" fill="#fff"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#et4)"/>' + stars(24) +
      '<g class="et-beam"><path d="M200 62l-200 -70v30z" fill="#fff6c2" opacity=".14"/><path d="M200 62l200 -70v30z" fill="#fff6c2" opacity=".14"/></g>' +
      '<g class="et-cl"><ellipse cx="60" cy="40" rx="40" ry="8" fill="#2a3456" opacity=".7"/></g>' +
      '<path d="M0 210h400v50H0z" fill="#0d1a33"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52 + 4) + '" y="' + (176 + (i % 3) * 6) + '" width="44" height="' + (40 - (i % 3) * 6) + '" fill="#1a1f33"/>' +
        '<rect x="' + (i * 52 + 10) + '" y="' + (184 + (i % 3) * 6) + '" width="6" height="6" fill="#ffcf6a" opacity=".7"/>').join("") +
      tower + sparks +
      '<rect x="0" y="222" width="400" height="38" fill="#10284a"/>' +
      '<g class="et-wv">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 236q10 -4 20 0t20 0" stroke="#ffcf6a" stroke-width="1.5" fill="none" opacity=".6"/>').join("") + '</g>' +
      '<path d="M120 222q80 -20 160 0" stroke="#c9b48a" stroke-width="5" fill="none"/>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="13" fill="' + GOLD + '" letter-spacing="3">MOBBIN’ OUT IN PARIS, FRANCE</text>',
      sky("et4", "#0a1030", "#2a2c5a"));
  }

  /* 5. East 31st St & Beverly Rd */
  function etcorner() {
    const sears = '<g fill="#d9cfb4" stroke="#a89a78" stroke-width="1">' +
      '<rect x="250" y="70" width="120" height="110"/><rect x="286" y="40" width="48" height="40"/><rect x="296" y="22" width="28" height="22"/><rect x="304" y="10" width="12" height="14"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (258 + i * 16) + '" y="82" width="6" height="90" fill="#bfb395" stroke="none"/>').join("") +
      '<rect x="292" y="48" width="6" height="30" fill="#bfb395" stroke="none"/><rect x="306" y="48" width="6" height="30" fill="#bfb395" stroke="none"/><rect x="320" y="48" width="6" height="30" fill="#bfb395" stroke="none"/></g>' +
      '<circle class="et-glow" cx="310" cy="16" r="3" fill="#ffcf6a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#et5)"/>' +
      '<g class="et-cl"><ellipse cx="80" cy="30" rx="44" ry="9" fill="#fff" opacity=".5"/></g><g class="et-cl et-cl2"><ellipse cx="60" cy="54" rx="34" ry="7" fill="#fff" opacity=".4"/></g>' +
      sears +
      /* frame houses of East 31st */
      '<path d="M190 120l30 -24l30 24v70h-60z" fill="#8a9fb8"/><rect x="200" y="132" width="12" height="16" fill="#ffe7a8"/><rect x="226" y="132" width="12" height="16" fill="#ffe7a8"/>' +
      '<path d="M360 130l20 -18l20 18v60h-40z" fill="#c9a07a"/>' +
      /* the wall with the tag */
      '<rect x="0" y="92" width="196" height="108" fill="#8c4a34"/>' +
      Array.from({ length: 9 }, (_, r) => Array.from({ length: 8 }, (_, c) => '<rect x="' + (c * 24 + (r % 2) * 12 - 12) + '" y="' + (92 + r * 12) + '" width="23" height="11" fill="#9a5640" stroke="#6e3424" stroke-width=".8"/>').join("")).join("") +
      '<rect x="190" y="88" width="16" height="112" fill="#6e3424"/><rect x="186" y="86" width="24" height="6" fill="#5a2a1c"/>' +
      tag("ERICK", 22, 148, 40, SKYB, -8) + tag("THE ARCHITECT", 20, 182, 22, GOLD, -5) +
      '<g class="et-spr"><circle cx="172" cy="150" r="2" fill="' + SKYB + '"/></g><g class="et-spr et-spr2"><circle cx="178" cy="142" r="1.6" fill="' + GOLD + '"/></g>' +
      /* sidewalk + sign pole */
      '<rect x="0" y="200" width="400" height="60" fill="#5a5a60"/><rect x="0" y="200" width="400" height="6" fill="#a0a0a8"/>' +
      '<rect x="226" y="60" width="5" height="142" fill="#2f3a2f"/>' +
      sign(178, 56, 96, "E 31 ST") + sign(204, 82, 116, "BEVERLY RD") +
      '<text x="300" y="238" text-anchor="middle" ' + font + ' font-size="10" fill="#e8e8e8" letter-spacing="2">FLATBUSH · BROOKLYN</text>',
      sky("et5", "#4f7fb8", "#f2c79a"));
  }

  window.SCENES = { etstation, etcomics, etpatty, etparis, etcorner };
})();
