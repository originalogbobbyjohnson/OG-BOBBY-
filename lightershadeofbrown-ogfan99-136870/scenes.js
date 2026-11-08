/* lightershadeofbrown scenes (Regions tab: Los Angeles + SoCal; Riverside, the Inland Empire). CSS classes prefixed lsb- (the page's own anim-train is kept).
   1 Metrolink at Riverside-Downtown station on Vine St: the low platform, palms, a Metrolink train sliding in, the black station sign with the Riverside Line, 91/Perris Valley Line and IE-OC Line bullets.
   2 A Sunday afternoon at Lake Evans in Riverside ("Sittin' in the park on a Sunday afternoon"): the lake, palms, a carne asada grill smoking, horseshoes, a lowrider cruising by.
   3 The Mission Inn downtown: cream mission-revival walls, arches, the bell tower and the Raincross, a bell swinging.
   4 Mount Rubidoux: the brown granite hill with the white cross on top and the stone Peace Tower, hikers' switchbacks, a hawk circling.
   5 Victoria Ave and Madison St in Casa Blanca: green street signs, LSOB tagged on the wall, the palms of Victoria Ave and the Box Springs Mountains with the big C behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lsbcloud{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lsb-cloud{animation:lsbcloud 30s linear infinite}' +
    '@keyframes lsbsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lsb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:lsbsway 3.4s ease-in-out infinite}' +
    '@keyframes lsbcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.lsb-car{animation:lsbcar 9s linear infinite}' +
    '@keyframes lsbsmoke{0%{transform:translateY(0) scale(.8);opacity:.75}100%{transform:translateY(-36px) scale(1.5);opacity:0}}.lsb-smoke{transform-box:fill-box;transform-origin:50% 100%;animation:lsbsmoke 2.2s ease-out infinite}.lsb-s2{animation-delay:-1.1s}' +
    '@keyframes lsbripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.lsb-rip{animation:lsbripple 4s ease-in-out infinite}' +
    '@keyframes lsbbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.lsb-bell{transform-box:fill-box;transform-origin:50% 0%;animation:lsbbell 1.8s ease-in-out infinite}' +
    '@keyframes lsbhawk{from{transform:rotate(0)}to{transform:rotate(360deg)}}.lsb-hawk{transform-origin:300px 60px;animation:lsbhawk 9s linear infinite}' +
    '@keyframes lsbsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.lsb-sp{animation:lsbsp 1.4s ease-out infinite}.lsb-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const pill = (x, y, w, txt, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="16" rx="8" fill="' + c + '"/><text x="' + (x + w / 2) + '" y="' + (y + 11.5) + '" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".9"><ellipse cx="0" cy="0" rx="26" ry="10"/><ellipse cx="14" cy="-8" rx="16" ry="10"/><ellipse cx="-12" cy="-6" rx="14" ry="8"/></g>';
  const palm = (x, y, h, c) => '<g class="lsb-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#5a4330" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 62, -62].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const low = (x, y, body) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 18q2 -10 14 -10l14 -10h36l14 10q16 0 18 10v6H0z" fill="' + body + '"/><path d="M30 0h14v8H24zM48 0h14l10 8H48z" fill="#bfe3f2"/>' +
    '<path d="M0 16h96" stroke="#f2c14e" stroke-width="2"/><circle cx="20" cy="26" r="8" fill="#111"/><circle cx="20" cy="26" r="5" fill="#e6e6e6"/><circle cx="76" cy="26" r="8" fill="#111"/><circle cx="76" cy="26" r="5" fill="#e6e6e6"/></g>';
  const RIV = "#682e85", PV = "#0171ce", IEOC = "#bd295b", GOLD = "#f2b134", BROWN = "#8a5a34", CREAM = "#efe2c4";
  /* the Raincross: a cross with a short second bar, hanging bell-loop on the arms */
  const raincross = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" stroke="' + c + '" stroke-width="3" fill="none" stroke-linecap="round"><path d="M0 -16v34M-12 -4h24M-7 4h14"/><path d="M-12 -4q-4 6 0 10M12 -4q4 6 0 10"/></g>';

  /* 1. Metrolink at Riverside-Downtown */
  function lsbstation() {
    const car = (x) => '<rect x="' + x + '" y="120" width="150" height="72" rx="6" fill="#e9ebee" stroke="#7d848c" stroke-width="2"/>' +
      '<rect x="' + x + '" y="124" width="150" height="10" fill="#1f3c6e"/>' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="140" width="20" height="18" rx="2" fill="#20303f"/>').join("") +
      '<path d="M' + x + ' 166h150" stroke="' + RIV + '" stroke-width="5"/><path d="M' + x + ' 174h150" stroke="#2fa3b8" stroke-width="3"/>';
    const train = '<g class="anim-train">' + car(30) + car(184) + '<path d="M334 120h18q16 6 16 36v36h-34z" fill="#e9ebee" stroke="#7d848c" stroke-width="2"/><path d="M338 130h12q10 4 12 22h-24z" fill="#20303f"/>' +
      '<circle cx="356" cy="178" r="4" fill="#fff6c2"/><rect x="30" y="192" width="338" height="8" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lsb1)"/><g class="lsb-cloud">' + cloud(70, 36, .9) + cloud(260, 24, .7) + '</g>' +
      '<path d="M0 116l60 -30 50 18 70 -40 80 34 60 -22 80 30v10H0z" fill="#b39a7c" opacity=".7"/>' + palm(20, 120, 74) + palm(388, 122, 80) +
      '<rect x="0" y="114" width="400" height="90" fill="#d3c8b4"/>' + train +
      '<rect x="0" y="200" width="400" height="20" fill="#bdb3a0"/><path d="M0 202h400" stroke="#f2d23c" stroke-width="3"/>' +
      '<rect x="14" y="222" width="372" height="32" rx="3" fill="#111"/><text x="24" y="243" ' + font + ' font-size="12.5" fill="#fff">Riverside-Downtown</text>' +
      pill(176, 230, 64, "RIVERSIDE", RIV) + pill(244, 230, 58, "91/PV", PV) + pill(306, 230, 72, "IE-OC LINE", IEOC),
      sky("lsb1", "#76b6e8", "#f8e7c4"));
  }

  /* 2. Sunday afternoon at Lake Evans */
  function lsbpark() {
    const grill = '<g transform="translate(80 170)"><path d="M-22 0h44q0 16 -22 16q-22 0 -22 -16z" fill="#222"/><path d="M-14 14l-6 20M14 14l6 20" stroke="#333" stroke-width="3"/>' +
      '<path d="M-18 -2h36" stroke="#888" stroke-width="2"/><rect x="-14" y="-6" width="10" height="5" rx="2" fill="#8a3a20"/><rect x="2" y="-6" width="12" height="5" rx="2" fill="#8a3a20"/>' +
      '<g class="lsb-smoke"><ellipse cx="-6" cy="-16" rx="8" ry="6" fill="#ddd"/></g><g class="lsb-smoke lsb-s2"><ellipse cx="6" cy="-18" rx="9" ry="6" fill="#ddd"/></g></g>';
    const shoe = '<g transform="translate(300 214)"><rect x="-1.5" y="-14" width="3" height="16" fill="#777"/><path d="M-30 6a8 8 0 1 1 10 -6" stroke="#aaa" stroke-width="3" fill="none"/></g>';
    const table = '<rect x="140" y="178" width="70" height="6" fill="#8a5a34"/><path d="M148 184l-6 18M202 184l6 18M140 194h70" stroke="#6b4426" stroke-width="3"/><rect x="152" y="170" width="10" height="8" fill="#d33"/><rect x="186" y="168" width="14" height="10" fill="#3a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lsb2)"/><g class="lsb-cloud">' + cloud(110, 40, .9) + '</g>' +
      '<path d="M0 116q80 -20 160 -6t240 -4v30H0z" fill="#8fae78"/>' +
      '<rect x="0" y="120" width="400" height="34" fill="#4f8fbf"/><g class="lsb-rip"><path d="M30 132h40M120 142h50M240 130h44M320 144h40" stroke="#bfe3f2" stroke-width="2"/></g>' +
      palm(36, 150, 90) + palm(360, 152, 100) + palm(250, 150, 70) +
      '<rect x="0" y="152" width="400" height="34" fill="#6fae4f"/><rect x="0" y="186" width="400" height="74" fill="#5f9e45"/>' + grill + table + shoe +
      '<rect x="0" y="232" width="400" height="28" fill="#5c5d63"/><g class="lsb-car">' + low(0, 220, "#7b2d8e") + '</g>' +
      '<rect x="230" y="160" width="150" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="305" y="174" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LAKE EVANS · RIVERSIDE</text>',
      sky("lsb2", "#5aa8e8", "#fde9c4"));
  }

  /* 3. The Mission Inn, its bells and the Raincross */
  function lsbmission() {
    const arch = (x, y) => '<path d="M' + x + ' ' + (y + 40) + 'v-24a14 14 0 0 1 28 0v24z" fill="#5a3a26"/>';
    const tiles = '<path d="M30 94h340l-14 -14H44z" fill="#b5502f"/>';
    const bell = '<g transform="translate(236 52)"><g class="lsb-bell"><path d="M-8 0h16v4q6 4 6 14h-28q0 -10 6 -14z" fill="#c9a24a" stroke="#6e5414" stroke-width="1.5"/><circle cx="0" cy="20" r="3" fill="#6e5414"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lsb3)"/><g class="lsb-cloud">' + cloud(80, 40, .8) + cloud(320, 28, .7) + '</g>' +
      '<rect x="200" y="30" width="72" height="70" fill="' + CREAM + '" stroke="#b9a882" stroke-width="1.5"/><path d="M196 30l40 -22 40 22z" fill="#b5502f"/>' +
      '<path d="M212 92v-34a12 12 0 0 1 24 0v34M236 92" fill="none"/><rect x="214" y="50" width="44" height="40" fill="#5a3a26"/>' + bell +
      '<rect x="30" y="94" width="340" height="110" fill="' + CREAM + '" stroke="#b9a882" stroke-width="1.5"/>' + tiles +
      [44, 92, 140, 232, 280, 328].map(x => arch(x, 150)).join("") + '<path d="M180 204v-48a20 20 0 0 1 40 0v48z" fill="#4a2e1c"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (50 + i * 54) + '" y="108" width="14" height="22" rx="7" fill="#5a3a26"/>').join("") +
      raincross(200, 136, .9, "#5a3a26") +
      palm(18, 206, 96) + palm(384, 206, 104) +
      '<rect x="0" y="204" width="400" height="56" fill="#a9a395"/><path d="M0 220h400" stroke="#d8d2c4" stroke-width="2"/>' +
      '<rect x="120" y="228" width="160" height="22" rx="3" fill="#5a3a26"/><text x="200" y="243.5" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">THE MISSION INN</text>',
      sky("lsb3", "#6fb2e6", "#fbe6c0"));
  }

  /* 4. Mount Rubidoux: the cross and the Peace Tower */
  function lsbrubidoux() {
    const hill = '<path d="M0 220q60 -40 110 -90q40 -40 90 -64q50 22 90 64q50 50 110 90z" fill="#9c7a58"/>' +
      '<path d="M60 196q60 -10 120 -40q40 -20 70 -6q40 20 90 50" stroke="#c9ab84" stroke-width="3" fill="none" stroke-dasharray="6 5"/>' +
      '<path d="M110 150q50 -20 90 -54" stroke="#c9ab84" stroke-width="3" fill="none" stroke-dasharray="6 5"/>' +
      [[70, 190], [130, 160], [250, 120], [300, 170], [180, 120], [340, 200]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="9" fill="#8c6a48"/><circle cx="' + (p[0] + 8) + '" cy="' + (p[1] + 4) + '" r="6" fill="#7d5d3e"/>').join("");
    const cross = '<rect x="197" y="22" width="6" height="46" fill="#fff"/><rect x="185" y="32" width="30" height="6" fill="#fff"/>';
    const tower = '<g transform="translate(250 92)"><rect x="-8" y="-28" width="16" height="30" fill="#b9a68a" stroke="#7d6a50" stroke-width="1.2"/><path d="M-10 -28h20l-4 -6h-12z" fill="#9e8b70"/><rect x="-3" y="-20" width="6" height="10" rx="3" fill="#4a3a28"/></g>';
    const hawk = '<g class="lsb-hawk"><path d="M330 60q8 -6 14 0q6 -6 14 0" stroke="#3a2a1a" stroke-width="2.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lsb4)"/><g class="lsb-cloud">' + cloud(60, 50, .8) + '</g>' + hawk + hill + cross + tower +
      '<rect x="0" y="216" width="400" height="44" fill="#7aa155"/>' + palm(30, 236, 70) + palm(372, 236, 76) +
      '<rect x="125" y="230" width="150" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">MOUNT RUBIDOUX</text>',
      sky("lsb4", "#f2a65a", "#fde3b8"));
  }

  /* 5. Victoria Ave and Madison St, Box Springs Mountains with the C behind */
  function lsbcorner() {
    const mtn = '<path d="M180 150l50 -56 40 26 50 -44 40 30 40 -10v104H180z" fill="#a5876a"/><path d="M226 104l-4 20h18l-4 -20z" fill="none"/>' +
      '<path d="M306 96q-14 0 -14 14t14 14" stroke="#f2e8d4" stroke-width="7" fill="none"/>';
    const palms = [352, 388].map((x, i) => palm(x, 154, 66 - i * 8, "#2f5a35")).join("") + palm(238, 154, 40, "#2f5a35");
    const wall = '<rect x="0" y="118" width="214" height="100" fill="#c9a77e"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (126 + r * 10) + 'h214" stroke="#ad8b62" stroke-width="1"/>').join("") +
      tag("LSOB", 18, 176, 52, GOLD, -6) + tag("BROWN &amp; PROUD", 20, 206, 18, "#e58a3a", -4) + raincross(186, 150, .8, "#fff") +
      '<circle class="lsb-sp" cx="204" cy="140" r="3" fill="' + GOLD + '"/><circle class="lsb-sp lsb-sp2" cx="208" cy="150" r="2.5" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lsb5)"/><g class="lsb-cloud">' + cloud(100, 36, .8) + '</g>' + mtn + palms +
      '<rect x="0" y="150" width="400" height="68" fill="#6e9a4a"/>' + [0, 1, 2, 3].map(i => '<circle cx="' + (240 + i * 40) + '" cy="196" r="12" fill="#3f7a35"/><circle cx="' + (236 + i * 40) + '" cy="192" r="2.5" fill="#f28c28"/><circle cx="' + (246 + i * 40) + '" cy="198" r="2.5" fill="#f28c28"/>').join("") + wall +
      '<rect x="0" y="218" width="400" height="42" fill="#4e4f55"/><path d="M0 242h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="20 14"/>' +
      '<rect x="280" y="140" width="6" height="82" fill="#6b7178"/>' + sign(226, 142, 116, "VICTORIA AVE") + sign(236, 168, 100, "MADISON ST"),
      sky("lsb5", "#7fb8e8", "#f8d7a8"));
  }

  window.SCENES = { lsbstation: lsbstation, lsbpark: lsbpark, lsbmission: lsbmission, lsbrubidoux: lsbrubidoux, lsbcorner: lsbcorner };
})();
