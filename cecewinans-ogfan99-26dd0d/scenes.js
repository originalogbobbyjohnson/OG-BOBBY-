/* cecewinans scenes (Regions tab: DETROIT; West Side, Woodingham Dr). CSS classes prefixed cw- (the page's own anim-train is kept).
   1 DDOT's 54 Wyoming bus pulling up to the Wyoming & Curtis stop on the west side, a few blocks from Woodingham Dr.
   2 The Winans' three-bedroom brick house on Woodingham Dr: twelve people, Christmas lights, songs pouring out the windows, snow falling.
   3 The PTL Club TV studio at Heritage USA in South Carolina, where she and BeBe first sang on national TV: two mics, cameras, ON AIR light.
   4 Nashville Life Church on Nolensville Rd in Nashville, the church she and her husband founded: white steeple, choir in purple robes, the doors open, notes rising.
   5 Woodingham Dr and Curtis St: green signs, CECE tagged on the wall, the twin stone spires of the Cathedral of the Most Blessed Sacrament far off.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cwblink{0%,100%{opacity:.25}50%{opacity:1}}.cw-bl{animation:cwblink 1.4s ease-in-out infinite}.cw-bl2{animation-delay:-.7s}' +
    '@keyframes cwsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.cw-sway{animation:cwsway 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.cw-s2{animation-delay:-.4s}.cw-s3{animation-delay:-.8s}.cw-s4{animation-delay:-1.2s}' +
    '@keyframes cwnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.cw-note{animation:cwnote 3s ease-out infinite}.cw-n2{animation-delay:-1s}.cw-n3{animation-delay:-2s}' +
    '@keyframes cwsnow{0%{transform:translateY(-10px)}100%{transform:translateY(270px)}}.cw-snow{animation:cwsnow 6s linear infinite}.cw-sn2{animation-delay:-2s}.cw-sn3{animation-delay:-4s}' +
    '@keyframes cwonair{0%,100%{opacity:1}50%{opacity:.4}}.cw-onair{animation:cwonair 1.2s ease-in-out infinite}' +
    '@keyframes cwbeam{0%,100%{opacity:.18}50%{opacity:.4}}.cw-beam{animation:cwbeam 2.4s ease-in-out infinite}.cw-bm2{animation-delay:-1.2s}' +
    '@keyframes cwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cw-sp{animation:cwspray 1.4s ease-out infinite}.cw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "cw-bl" + (i % 2 ? " cw-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const brick = (x, y, w, h, base, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>').join("");
  const tree = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#3a2a20"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (24 * s) + '" ry="' + (15 * s) + '" fill="#24402c"/><ellipse cx="' + (x - 10 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (13 * s) + '" ry="' + (10 * s) + '" fill="#2e5236"/></g>';
  const PURP = "#c9a0ff", GOLD = "#f2c14e", CORAL = "#ff9e7a", DGRN = "#0f7a4a";
  const robe = (x, base, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 38) + '" r="6.5" fill="#2a1a12"/>' +
    '<path d="M' + (x - 11) + ' ' + base + 'l3 -28q8 -6 16 0l3 28z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (base - 30) + 'q6 5 12 0" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>';
  const note = (x, y, c, cls) => '<g class="cw-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 17) + '" width="1.8" height="17" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 17) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const snow = () => { let s = ""; for (let i = 0; i < 26; i++) s += '<circle class="cw-snow ' + ["", "cw-sn2", "cw-sn3"][i % 3] + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 120 - 20) + '" r="' + (i % 2 ? 1.4 : 2) + '" fill="#fff" opacity=".85"/>'; return s; };

  /* 1. DDOT 54 Wyoming bus at Wyoming & Curtis */
  function cwstation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (78 + i * 44) + '" y="118" width="36" height="28" rx="3" fill="#2d3e4e"/><rect x="' + (80 + i * 44) + '" y="120" width="10" height="24" fill="#5a7590" opacity=".5"/>';
    const bus = '<g class="anim-train"><rect x="40" y="104" width="320" height="80" rx="10" fill="#f3f5f2" stroke="#7b848c" stroke-width="2"/>' +
      '<rect x="40" y="150" width="320" height="10" fill="' + DGRN + '"/><rect x="40" y="162" width="320" height="4" fill="#f2c14e"/>' + win +
      '<rect x="44" y="114" width="28" height="44" rx="3" fill="#2d3e4e"/><rect x="40" y="104" width="320" height="10" rx="5" fill="#d9ded9"/>' +
      '<rect x="280" y="107" width="76" height="9" rx="2" fill="#111"/><text x="318" y="114.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb020">54 WYOMING</text>' +
      '<circle cx="96" cy="186" r="15" fill="#1b1b1b"/><circle cx="96" cy="186" r="6" fill="#888"/><circle cx="304" cy="186" r="15" fill="#1b1b1b"/><circle cx="304" cy="186" r="6" fill="#888"/>' +
      '<circle class="cw-bl" cx="355" cy="172" r="3" fill="#ffdc7a"/></g>';
    const stop = '<rect x="22" y="70" width="4" height="130" fill="#6a6a70"/><rect x="2" y="54" width="70" height="44" rx="4" fill="#111" stroke="#ddd" stroke-width="1.5"/>' +
      '<text x="37" y="68" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">DDOT</text><rect x="10" y="72" width="54" height="13" rx="6.5" fill="' + DGRN + '"/>' +
      '<text x="37" y="82" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">54</text><text x="37" y="94" text-anchor="middle" ' + font + ' font-size="6" fill="#ddd">WYOMING &amp; CURTIS</text>';
    const houses = '<path d="M0 150v-26l26 -18 26 18v26zM70 150v-30l30 -20 30 20v30zM300 150v-28l28 -18 28 18v28zM350 150v-24l25 -16 25 16v24z" fill="#2a2040"/>';
    return svg('<rect width="400" height="260" fill="url(#cws1)"/>' + stars(26) + houses + tree(150, 104, .9) + tree(260, 104, 1) +
      '<rect y="196" width="400" height="64" fill="#2a2a2e"/><path d="M0 226h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="20 14"/><rect y="192" width="400" height="6" fill="#55555c"/>' +
      bus + stop + '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="' + PURP + '" letter-spacing="2">WEST SIDE · DETROIT</text>',
      sky("cws1", "#120a26", "#4a2e6a"));
  }

  /* 2. The Winans' house on Woodingham Dr at Christmas */
  function cwhouse() {
    let lights = ""; const cols = ["#ff5a5a", "#5ad17a", "#ffd25a", "#6ab8ff", PURP];
    for (let i = 0; i < 22; i++) lights += '<circle class="' + (i % 2 ? "cw-bl" : "cw-bl cw-bl2") + '" cx="' + (92 + i * 10.2) + '" cy="' + (96 + Math.abs(11 - i) * 2.2) + '" r="2.6" fill="' + cols[i % 5] + '"/>';
    const house = brick(100, 112, 200, 92, "#8a4a36", "#6e3828") +
      '<path d="M86 114l114 -62 114 62z" fill="#3a2a30" stroke="#2a1c22" stroke-width="2"/><rect x="250" y="62" width="18" height="34" fill="#6e3828"/>' +
      '<rect x="124" y="132" width="44" height="36" fill="#ffd98a"/><path d="M146 132v36M124 150h44" stroke="#6e3828" stroke-width="3"/>' +
      '<rect x="232" y="132" width="44" height="36" fill="#ffd98a"/><path d="M254 132v36M232 150h44" stroke="#6e3828" stroke-width="3"/>' +
      '<rect x="184" y="140" width="32" height="64" fill="#3a2418"/><circle cx="210" cy="174" r="2" fill="' + GOLD + '"/><circle cx="200" cy="154" r="9" fill="none" stroke="#2e6b3a" stroke-width="4"/><circle cx="200" cy="146" r="2" fill="#e5484d"/>' +
      '<rect x="176" y="204" width="48" height="8" fill="#9a9aa0"/>';
    const fam = '<g opacity=".9"><circle cx="138" cy="148" r="4" fill="#2a1a12"/><circle cx="154" cy="146" r="4" fill="#2a1a12"/><circle cx="246" cy="148" r="4" fill="#2a1a12"/><circle cx="262" cy="146" r="4" fill="#2a1a12"/></g>';
    const notes = note(150, 128, GOLD) + note(258, 126, PURP, "cw-n2") + note(206, 110, CORAL, "cw-n3");
    return svg('<rect width="400" height="260" fill="url(#cws2)"/>' + stars(30) + tree(40, 214, 1.3) + tree(362, 214, 1.2) +
      '<rect y="204" width="400" height="56" fill="#e8eef6"/><path d="M0 204q200 -10 400 0" fill="#f4f8fc"/>' + house + lights + fam + notes + snow() +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#2a1c3a" letter-spacing="2">WOODINGHAM DR · TWELVE UNDER ONE ROOF</text>',
      sky("cws2", "#0b1030", "#3a3a7a"));
  }

  /* 3. The PTL Club TV studio, Heritage USA */
  function cwptl() {
    const beams = '<path class="cw-beam" d="M80 0l-50 200h120z" fill="#fff6d0"/><path class="cw-beam cw-bm2" d="M320 0l-70 200h120z" fill="#fff6d0"/>';
    const rig = '<rect x="0" y="8" width="400" height="8" fill="#333"/>' + [60, 140, 260, 340].map(x => '<rect x="' + (x - 9) + '" y="16" width="18" height="16" rx="3" fill="#222"/><circle cx="' + x + '" cy="32" r="5" fill="#fff2b0"/>').join("");
    const stage = '<rect x="40" y="168" width="320" height="34" fill="#4a2a5a"/><rect x="40" y="164" width="320" height="6" fill="' + GOLD + '"/>' +
      '<path d="M60 40h280v124H60z" fill="#6a3a82"/><path d="M60 40q20 60 0 124M340 40q-20 60 0 124" stroke="#4a2a5a" stroke-width="10" fill="none"/>' +
      '<rect x="120" y="60" width="160" height="70" rx="6" fill="#2a1840" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="88" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">LIVE TV</text><text x="200" y="108" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SISTER &amp; BROTHER</text>';
    const mic = x => '<rect x="' + (x - 1.5) + '" y="122" width="3" height="44" fill="#bbb"/><rect x="' + (x - 4) + '" y="114" width="8" height="12" rx="4" fill="#444"/><path d="M' + (x - 10) + ' 166h20" stroke="#bbb" stroke-width="3"/>';
    const cam = x => '<g><rect x="' + x + '" y="186" width="44" height="28" rx="3" fill="#2b2b30"/><rect x="' + (x + 44) + '" y="192" width="16" height="16" fill="#1a1a1e"/><circle cx="' + (x + 62) + '" cy="200" r="6" fill="#4a6a9a"/>' +
      '<path d="M' + (x + 22) + ' 214l-14 36M' + (x + 22) + ' 214l14 36M' + (x + 22) + ' 214v36" stroke="#555" stroke-width="3"/><circle class="cw-bl" cx="' + (x + 8) + '" cy="192" r="2.5" fill="#e5484d"/></g>';
    const onair = '<rect x="164" y="20" width="72" height="18" rx="3" fill="#2a0a0a"/><rect class="cw-onair" x="166" y="22" width="68" height="14" rx="2" fill="#e5484d"/><text x="200" y="33" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ON AIR</text>';
    return svg('<rect width="400" height="260" fill="url(#cws3)"/>' + rig + stage + beams + mic(170) + mic(230) + note(180, 150, GOLD) + note(224, 146, PURP, "cw-n2") + cam(30) + cam(300) + onair +
      '<rect y="214" width="400" height="46" fill="#151018" opacity=".7"/><text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="' + PURP + '" letter-spacing="2">HERITAGE USA · THE PTL CLUB</text>',
      sky("cws3", "#0a0612", "#2a1638"));
  }

  /* 4. Nashville Life Church */
  function cwchurch() {
    const bldg = '<rect x="90" y="110" width="220" height="96" fill="#f3efe6" stroke="#c8c0b0" stroke-width="2"/><path d="M80 112l120 -46 120 46z" fill="#5a4a6a"/>' +
      '<rect x="182" y="30" width="36" height="40" fill="#f3efe6" stroke="#c8c0b0" stroke-width="2"/><path d="M178 32l22 -16 22 16z" fill="#5a4a6a"/>' +
      '<path d="M200 17v-14M195 8h10" stroke="' + GOLD + '" stroke-width="2.5"/><path d="M196 44h8v18h-8z" fill="#2a2040"/>' +
      [108, 136, 248, 276].map(x => '<path d="M' + x + ' 170v-34q8 -10 16 0v34z" fill="#8a6ac8" opacity=".85"/>').join("") +
      '<path d="M170 206v-50q30 -26 60 0v50z" fill="#ffd98a"/>' + '<rect x="96" y="96" width="208" height="12" fill="#3a2a4a"/><text x="200" y="105.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff" letter-spacing="1">NASHVILLE LIFE CHURCH</text>';
    const choir = robe(182, 204, "#6a3aa8", "cw-sway") + robe(200, 204, "#6a3aa8", "cw-sway cw-s2") + robe(218, 204, "#6a3aa8", "cw-sway cw-s3");
    return svg('<rect width="400" height="260" fill="url(#cws4)"/>' + '<circle cx="330" cy="50" r="22" fill="#ffd98a" opacity=".85"/>' +
      '<path d="M0 170q80 -30 160 -10t240 -16v66H0z" fill="#3e6a3a"/>' + tree(40, 206, 1.2) + tree(360, 206, 1.1) + bldg + choir +
      note(172, 150, GOLD) + note(228, 148, PURP, "cw-n2") + note(200, 132, CORAL, "cw-n3") +
      '<rect y="206" width="400" height="54" fill="#5a8a4a"/><path d="M170 206l-30 54h120l-30 -54z" fill="#d8d0c0"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">NOLENSVILLE RD · NASHVILLE</text>',
      sky("cws4", "#ffb08a", "#ffe6b8"));
  }

  /* 5. Woodingham Dr and Curtis St */
  function cwcorner() {
    const cathedral = '<g transform="translate(-110 0)"><g fill="#3a3050" opacity=".95"><rect x="250" y="70" width="90" height="70"/><rect x="250" y="40" width="20" height="40"/><rect x="320" y="40" width="20" height="40"/>' +
      '<path d="M248 42l12 -36 12 36zM318 42l12 -36 12 36z"/><path d="M272 70l23 -22 23 22z"/></g><circle cx="295" cy="96" r="9" fill="' + PURP + '" opacity=".6"/></g>';
    const wall = brick(0, 120, 400, 90, "#5a3a2e", "#432a20") +
      tag("CECE", 34, 182, 46, PURP, -8) + tag("WINANS", 168, 196, 30, GOLD, -4) + tag("BELIEVE", 214, 152, 22, CORAL, -8) +
      '<circle class="cw-sp" cx="150" cy="150" r="3" fill="' + PURP + '"/><circle class="cw-sp cw-sp2" cx="156" cy="158" r="2" fill="' + GOLD + '"/>';
    const pole = '<rect x="334" y="40" width="6" height="170" fill="#6a6a70"/>' + sign(262, 42, 134, "WOODINGHAM DR") + sign(290, 68, 92, "CURTIS ST");
    return svg('<rect width="400" height="260" fill="url(#cws5)"/>' + stars(32) + cathedral + wall + pole +
      '<rect y="210" width="400" height="50" fill="#2a2a2e"/><rect y="206" width="400" height="6" fill="#77777e"/>' +
      '<text x="200" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="2">WEST SIDE · DETROIT</text>',
      sky("cws5", "#0e0820", "#5a2e6e"));
  }

  window.SCENES = { cwstation, cwhouse, cwptl, cwchurch, cwcorner };
})();
