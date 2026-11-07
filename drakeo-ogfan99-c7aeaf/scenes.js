/* Drakeo the Ruler scenes (Regions tab: Los Angeles + SoCal; South Central LA / Westmont, Washington Prep). CSS classes prefixed dk- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.dk-flk{animation:dkflick 2.4s infinite}.dk-flk2{animation-delay:.8s}' +
    '@keyframes dkglow{0%,100%{opacity:.45}50%{opacity:1}}.dk-glow{animation:dkglow 2.2s ease-in-out infinite}.dk-g2{animation-delay:-1.1s}' +
    '@keyframes dkcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.dk-car{animation:dkcar 4.5s linear infinite}.dk-car2{animation-delay:-2.2s}' +
    '@keyframes dkcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.dk-carL{animation:dkcarL 5s linear infinite}.dk-carL2{animation-delay:-2.5s}' +
    '@keyframes dksnow{from{transform:translate(0,-30px)}to{transform:translate(-24px,280px)}}.dk-sn{animation:dksnow 5s linear infinite}' +
    '@keyframes dkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.dk-flag{transform-box:fill-box;transform-origin:0 50%;animation:dkflag 1.6s ease-in-out infinite}' +
    '@keyframes dkwv{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.dk-wv{transform-box:fill-box;transform-origin:50% 50%;animation:dkwv .7s ease-in-out infinite}' +
    '@keyframes dkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.dk-bob{animation:dkbob 2s ease-in-out infinite}' +
    '@keyframes dksp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dk-sp{animation:dksp 1.4s ease-out infinite}.dk-sp2{animation-delay:.45s}' +
    '@keyframes dkheli{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.dk-heli{animation:dkheli 14s linear infinite;animation-delay:-5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "dk-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, h, c) => '<path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#2a201a" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#1f3a2a") + '" stroke-width="4" fill="none"/>').join("");
  const crown = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-20 10l-4 -24l12 10l12 -18l12 18l12 -10l-4 24z" fill="' + c + '" stroke="#7a5a1a" stroke-width="2"/><rect x="-20" y="8" width="40" height="7" rx="2" fill="' + c + '" stroke="#7a5a1a" stroke-width="2"/><circle cx="0" cy="-4" r="3" fill="#9fe3ff"/></g>';
  const ICE = "#9fe3ff", GOLD = "#e8b84a", VIO = "#8a6cff", CLINE = "#58a738", JLINE = "#a3a9b0", RED = "#b3202e", BLUE = "#1f4fa8";

  /* 1. Harbor Freeway station (Metro C Line + J Line) down in the middle of the 105/110 interchange: concrete flyover ramps stacked overhead, cars streaming, the green-striped C Line train sliding in, the black sign with the C and J bullets */
  function dkstation() {
    const car = (cls, c, y) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="40" height="11" rx="4" fill="' + c + '"/><rect x="8" y="' + (y - 7) + '" width="22" height="8" rx="3" fill="' + c + '"/></g>';
    let win = ""; for (let x = 26; x < 290; x += 40) win += '<rect x="' + x + '" y="148" width="26" height="20" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dk1)"/>' +
      /* flyover ramps */
      '<rect x="0" y="47" width="400" height="12" fill="#c9c3b6"/><path d="M0 59h400" stroke="#8d877c" stroke-width="2"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 7) + '" y="' + (58 + (x === 200 ? 18 : 6)) + '" width="14" height="70" fill="#b7b1a4"/>').join("") +
      '<rect x="0" y="93" width="400" height="12" fill="#d6d0c4"/><path d="M0 105h400" stroke="#a49e92" stroke-width="2"/>' +
      car("dk-car", "#f2f2f2", 82) + car("dk-car dk-car2", RED, 82) + car("dk-carL", "#2a2a2e", 36) + car("dk-carL dk-carL2", ICE, 36) +
      /* freeway lanes either side */
      '<rect x="0" y="130" width="400" height="12" fill="#5a5a60"/><rect x="0" y="196" width="400" height="12" fill="#5a5a60"/>' +
      /* platform + train */
      '<rect x="0" y="142" width="400" height="44" fill="#2a2d33"/>' +
      '<g class="anim-train"><rect x="10" y="140" width="300" height="46" rx="12" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' + win +
      '<rect x="10" y="172" width="300" height="6" fill="' + CLINE + '"/><circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(284, 158, "C", CLINE) + '</g>' +
      '<rect x="0" y="186" width="400" height="6" fill="#eab308"/><rect x="0" y="192" width="400" height="4" fill="#9a9a9e"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#8a8c90"/>' +
      '<rect x="40" y="216" width="250" height="34" rx="3" fill="#111"/><text x="54" y="239" ' + font + ' font-size="15" fill="#fff">Harbor Freeway</text>' + bullet(244, 233, "C", CLINE) + bullet(270, 233, "J", JLINE) +
      '<rect x="318" y="214" width="8" height="46" fill="#3d4a56"/><rect class="dk-flk" x="304" y="206" width="36" height="6" rx="2" fill="#fff8dc"/>',
      sky("dk1", "#7fb3e0", "#f1d9b0"));
  }

  /* 2. Washington Prep, his high school in Westmont: the Generals' cardinal red and continental blue, the arched entry, the flag waving, palms */
  function dkschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#dk2)"/>' +
      palm(30, 170, 110) + palm(372, 172, 120) +
      '<rect x="50" y="78" width="300" height="104" fill="#e9e1cf"/><rect x="46" y="70" width="308" height="10" fill="' + RED + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 48) + '" y="92" width="26" height="30" fill="#3c5a7a"/><rect x="' + (66 + i * 48) + '" y="132" width="26" height="30" fill="#3c5a7a"/>').join("") +
      '<rect x="160" y="112" width="80" height="70" fill="#d8ccb2"/><path d="M172 182v-44q28 -26 56 0v44z" fill="#2a3442"/>' +
      '<rect x="110" y="50" width="180" height="22" rx="2" fill="' + BLUE + '"/><text x="200" y="66" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="1">WASHINGTON PREP</text>' +
      '<rect x="0" y="182" width="400" height="22" fill="#c4bfb4"/><rect x="0" y="204" width="400" height="56" fill="#6a9a4a"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (i * 64) + ' 204l20 56" stroke="#5a8a3c" stroke-width="2"/>').join("") +
      '<path d="M330 204V40" stroke="#c8ccd2" stroke-width="3"/><g class="dk-flag"><rect x="332" y="42" width="40" height="24" fill="' + RED + '"/><rect x="332" y="50" width="40" height="8" fill="#fff"/><rect x="332" y="42" width="16" height="12" fill="' + BLUE + '"/></g>' +
      '<text x="200" y="236" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + RED + '" stroke="#fff" stroke-width="1.5" paint-order="stroke" letter-spacing="2">GENERALS</text>',
      sky("dk2", "#8cc6f0", "#eef3f6"));
  }

  /* 3. So Cold I Do Em / Cold Devil: snow falling on a South LA block at night, frost on the palms, icy streetlights, a cold blue glow on the bungalows */
  function dkcold() {
    let snow = ""; for (let i = 0; i < 46; i++) snow += '<circle class="dk-sn" style="animation-delay:-' + ((i * 0.37) % 5).toFixed(2) + 's" cx="' + ((i * 67) % 420) + '" cy="' + ((i * 41) % 60) + '" r="' + (i % 3 ? 1.6 : 2.4) + '" fill="#fff" opacity=".9"/>';
    const house = (x, c) => '<rect x="' + x + '" y="150" width="90" height="56" fill="' + c + '"/><path d="M' + (x - 6) + ' 152l51 -30l51 30z" fill="#3a4660"/><path d="M' + (x - 6) + ' 152l51 -30l51 30" stroke="#f4f8ff" stroke-width="4" fill="none"/>' +
      '<rect x="' + (x + 12) + '" y="164" width="20" height="18" fill="#ffd98a" class="dk-glow"/><rect x="' + (x + 56) + '" y="172" width="18" height="34" fill="#2a2f40"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dk3)"/>' + stars(12) +
      '<circle cx="330" cy="46" r="20" fill="#e8f4ff" opacity=".9"/>' +
      palm(36, 206, 120, "#6f8fa8") + palm(206, 206, 104, "#6f8fa8") + palm(366, 206, 130, "#6f8fa8") +
      house(50, "#5b6f94") + house(240, "#6a5f94") +
      [140, 330].map(x => '<path d="M' + x + ' 220V110q0 -10 12 -10" stroke="#3a4050" stroke-width="4" fill="none"/><circle class="dk-glow dk-g2" cx="' + (x + 14) + '" cy="104" r="7" fill="' + ICE + '"/><path d="M' + (x + 14) + ' 110l-30 110h60z" fill="' + ICE + '" opacity=".12"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#dfe9f5"/><path d="M0 206q100 -6 200 0t200 0v6H0z" fill="#ffffff"/><path d="M0 238h400" stroke="#c4d2e4" stroke-width="2"/>' +
      tag("SO COLD", 140, 248, 26, ICE, -4) + snow,
      sky("dk3", "#0a1430", "#3a4e7a"));
  }

  /* 4. Mr. Mosely in the booth: the gold crown on the mic stand, the Stinc Team chain on the hook, the screen with the nervous-music waveform, meters bouncing */
  function dkbooth() {
    return svg(
      '<rect width="400" height="260" fill="#0c0b14"/>' + Array.from({ length: 10 }, (_, r) => Array.from({ length: 8 }, (_, c) => '<path d="M' + (8 + c * 24) + ' ' + (10 + r * 22) + 'l10 8l-10 8l-10 -8z" fill="#1a1828"/>').join("")).join("") +
      '<rect x="196" y="0" width="8" height="260" fill="#07060c"/>' +
      '<path d="M96 250v-120" stroke="#3a3e46" stroke-width="5"/><path d="M70 250h52" stroke="#3a3e46" stroke-width="5"/>' +
      '<rect x="84" y="92" width="24" height="40" rx="12" fill="#c9ced6" stroke="#555" stroke-width="2"/><path d="M88 104h16M88 112h16M88 120h16" stroke="#7a8088" stroke-width="1.5"/>' +
      '<g class="dk-bob">' + crown(96, 74, 1, GOLD) + '</g>' +
      '<circle cx="140" cy="116" r="20" fill="#222" opacity=".55" stroke="#555" stroke-width="2"/>' +
      '<path d="M20 40q20 40 40 0" stroke="' + GOLD + '" stroke-width="3" fill="none" stroke-dasharray="3 2"/><rect x="28" y="62" width="24" height="18" rx="3" fill="' + GOLD + '"/><text x="40" y="75" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a0a">STINC</text>' +
      '<rect x="210" y="176" width="190" height="84" fill="#231c2a"/><rect x="210" y="170" width="190" height="8" fill="#3a2e44"/>' +
      '<rect x="230" y="60" width="150" height="94" rx="4" fill="#06060a" stroke="#3a3446" stroke-width="3"/><path d="M305 154v16M285 170h40" stroke="#3a3446" stroke-width="5"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect class="dk-wv" style="animation-delay:-' + ((i * 0.13) % 0.7).toFixed(2) + 's" x="' + (240 + i * 5.6) + '" y="' + (84 + (i % 5) * 2) + '" width="3" height="' + (34 - (i % 5) * 4) + '" fill="' + ICE + '"/>').join("") +
      '<text x="305" y="140" text-anchor="middle" ' + font + ' font-size="10" fill="' + VIO + '" letter-spacing="2">NERVOUS MUSIC</text>' +
      '<rect x="240" y="190" width="140" height="16" rx="2" fill="#141218"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (244 + i * 11) + '" y="193" width="7" height="10" fill="' + (i % 4 === 0 ? VIO : "#5a5e66") + '"/>').join("") +
      '<rect x="216" y="16" width="100" height="20" rx="3" fill="' + RED + '" class="dk-glow"/><text x="266" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">RECORDING</text>',
      "");
  }

  /* 5. W Century Blvd and S Normandie Ave in Westmont: green signs, DRAKEO tagged big on the wall, palms, the white City Hall tower downtown far behind, a helicopter crossing */
  function dkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dk5)"/>' + stars(16) +
      /* City Hall: stepped white tower with the pyramid top */
      '<g fill="#e9e6dc"><rect x="168" y="70" width="40" height="70"/><rect x="174" y="52" width="28" height="20"/><rect x="179" y="40" width="18" height="14"/><path d="M181 40l7 -16l7 16z"/><rect x="138" y="104" width="100" height="36"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (174 + (i % 3) * 10) + '" y="' + (78 + Math.floor(i / 3) * 18) + '" width="5" height="10" fill="#9aa4b4"/>').join("") +
      '<g fill="#2a2846"><rect x="60" y="96" width="30" height="44"/><rect x="96" y="84" width="24" height="56"/><rect x="250" y="90" width="28" height="50"/><rect x="284" y="100" width="36" height="40"/></g>' +
      '<g class="dk-heli"><g transform="translate(0 30)"><ellipse cx="0" cy="0" rx="12" ry="5" fill="#1a1a24"/><path d="M10 0h14M-14 -7h28" stroke="#1a1a24" stroke-width="2"/><circle class="dk-glow" cx="-10" cy="2" r="1.6" fill="#ff5050"/></g></g>' +
      palm(26, 144, 70) + palm(384, 146, 82) +
      '<rect x="0" y="140" width="400" height="86" fill="#c9b49a"/><rect x="0" y="140" width="400" height="5" fill="#a8927a"/>' +
      tag("DRAKEO", 18, 194, 50, ICE, -6) + tag("STINC TEAM", 24, 220, 16, GOLD, -3) + tag("THE RULER", 196, 214, 22, VIO, -5) + tag("NERVOUS", 262, 172, 16, "#fff", -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#4e4e54"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="348" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(290, 98, 104, "W Century Blvd", 12) + sign(288, 124, 108, "S Normandie Ave", 12) +
      '<g class="dk-sp"><circle cx="190" cy="168" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="dk-sp dk-sp2"><circle cx="196" cy="162" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("dk5", "#0e1430", "#5a4a8a"));
  }

  window.SCENES = { dkstation: dkstation, dkschool: dkschool, dkcold: dkcold, dkbooth: dkbooth, dkcorner: dkcorner };
})();
