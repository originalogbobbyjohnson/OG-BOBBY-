/* onryozzborn scenes (Regions tab: The Northwest; downtown Seattle). CSS classes and ids prefixed oz- (the page's own anim-train is kept).
   1 Westlake Station on the 1 Line: the underground downtown platform under the arches, a Link train sliding in, the green 1 bullet.
   2 A live radio session at Seattle Center (Grayskul's live KEXP set): ON AIR light, two mics, turntable spinning, rain on the big window.
   3 Farmington, New Mexico, where he grew up playing ball: red mesas, Shiprock on the horizon, a baseball arcing over the diamond.
   4 King Street Station ("All Aboard"): the red-brick clock tower, the clock running, a passenger train rolling through in the rain.
   5 3rd Ave and Pine St by Westlake: green signs, ONRY tagged on the wall, the dark Columbia Center tower in the rain behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ozflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.oz-flk{animation:ozflick 2.4s infinite}.oz-flk2{animation-delay:.8s}' +
    '@keyframes ozrain{0%{transform:translate(0,-40px)}100%{transform:translate(-14px,280px)}}.oz-rn{animation:ozrain 1.1s linear infinite}.oz-rn2{animation-delay:-.37s}.oz-rn3{animation-delay:-.74s}' +
    '@keyframes ozglow{0%,100%{opacity:.45}50%{opacity:1}}.oz-glow{animation:ozglow 1.6s ease-in-out infinite}' +
    '@keyframes ozspin{to{transform:rotate(360deg)}}.oz-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ozspin 1.8s linear infinite}' +
    '@keyframes ozbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.oz-bob{animation:ozbob .8s ease-in-out infinite}.oz-bob2{animation-delay:-.4s}' +
    '@keyframes ozball{0%{transform:translate(0,0)}50%{transform:translate(120px,-90px)}100%{transform:translate(240px,0)}}.oz-ball{animation:ozball 3.2s ease-in-out infinite}' +
    '@keyframes ozhand{to{transform:rotate(360deg)}}.oz-min{transform-box:view-box;transform-origin:200px 74px;animation:ozhand 6s linear infinite}.oz-hr{transform-box:view-box;transform-origin:200px 74px;animation:ozhand 72s linear infinite}' +
    '@keyframes oztrain{from{transform:translateX(420px)}to{transform:translateX(-560px)}}.oz-tr{animation:oztrain 9s linear infinite}' +
    '@keyframes ozspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.oz-sp{animation:ozspray 1.4s ease-out infinite}.oz-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.2"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const rain = (n, col) => { let s = ""; for (let i = 0; i < n; i++) s += '<path class="oz-rn' + ["", " oz-rn2", " oz-rn3"][i % 3] + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 29) % 60) + 'l-3 12" stroke="' + (col || "#cfe3f2") + '" stroke-width="1.2" opacity=".55"/>'; return s; };
  const LINK = "#28813f", GOLD = "#f2c94c", PURP = "#7b5ea7", TEAL = "#5fb3b3";

  /* 1. Westlake Station: underground arches downtown, the Link train sliding in */
  function ozstation() {
    let wins = "";
    for (let x = 40; x < 310; x += 34) wins += '<rect x="' + x + '" y="132" width="24" height="24" rx="4" fill="#1f2a33"/>';
    const tr = '<g class="anim-train"><rect x="24" y="120" width="316" height="66" rx="12" fill="#eef1f3" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<path d="M24 166h316" stroke="#1b4f8a" stroke-width="7"/><path d="M24 174h316" stroke="' + LINK + '" stroke-width="3"/>' +
      '<rect x="322" y="126" width="18" height="54" rx="6" fill="#d7dce0"/><rect x="326" y="132" width="12" height="18" rx="2" fill="#1f2a33"/><circle cx="332" cy="176" r="3" fill="#fff6c2"/></g>';
    let arches = "";
    for (let x = -20; x < 420; x += 80) arches += '<path d="M' + x + ' 116v-60q40-40 80 0v60" fill="none" stroke="#6d6658" stroke-width="6"/>';
    let lights = "";
    for (let x = 30; x < 400; x += 80) lights += '<rect class="oz-flk' + (x % 160 ? " oz-flk2" : "") + '" x="' + x + '" y="20" width="22" height="5" rx="2" fill="#fff8d8"/>';
    return svg(
      '<rect width="400" height="260" fill="#3b3833"/>' + '<rect x="0" y="0" width="400" height="116" fill="#4d4840"/>' + arches + lights +
      '<rect x="0" y="116" width="400" height="76" fill="#1c1b19"/>' + tr +
      '<rect x="0" y="192" width="400" height="8" fill="#f2c200"/><rect x="0" y="200" width="400" height="60" fill="#8f877a"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 56) + ' 200l-20 60" stroke="#7d7568" stroke-width="1"/>').join("") +
      '<rect x="112" y="60" width="176" height="36" rx="3" fill="#111"/><text x="128" y="84" ' + font + ' font-size="18" fill="#fff">Westlake</text>' + bullet(262, 78, "1", LINK),
      "");
  }

  /* 2. The live radio session: ON AIR, two mics, turntable spinning, rain on the window */
  function ozkexp() {
    return svg(
      '<rect width="400" height="260" fill="#2a2633"/>' +
      '<rect x="40" y="26" width="320" height="110" fill="url(#oz-s2)" stroke="#111" stroke-width="6"/><path d="M146 26v110M253 26v110" stroke="#111" stroke-width="4"/>' +
      '<g clip-path="url(#oz-c2)">' + rain(30) + '</g>' +
      '<rect class="oz-glow" x="160" y="6" width="80" height="18" rx="3" fill="#d23a3a"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">ON AIR</text>' +
      '<rect x="0" y="136" width="400" height="124" fill="#3a3344"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (6 + i * 9) + '" y="150" width="7" height="44" fill="' + [PURP, GOLD, TEAL, "#c45a3c"][i % 4] + '"/>').join("") +
      '<rect x="210" y="190" width="180" height="70" fill="#1d1a22"/><circle class="oz-spin" cx="270" cy="206" r="16" fill="#111" stroke="#444" stroke-width="2"/><circle cx="270" cy="206" r="5" fill="' + GOLD + '"/><path d="M262 198l14 14" stroke="#555" stroke-width="1"/>' +
      '<circle class="oz-spin" cx="340" cy="206" r="16" fill="#111" stroke="#444" stroke-width="2"/><circle cx="340" cy="206" r="5" fill="' + TEAL + '"/><path d="M332 198l14 14" stroke="#555" stroke-width="1"/>' +
      '<g class="oz-bob"><rect x="118" y="168" width="34" height="70" rx="12" fill="#14121a"/><circle cx="135" cy="156" r="14" fill="#14121a"/></g>' +
      '<g class="oz-bob oz-bob2"><rect x="168" y="172" width="34" height="66" rx="12" fill="#14121a"/><circle cx="185" cy="160" r="14" fill="#14121a"/></g>' +
      '<path d="M112 238v-60M210 238v-60" stroke="#888" stroke-width="2"/><rect x="106" y="168" width="12" height="16" rx="5" fill="#9aa0a6"/><rect x="204" y="168" width="12" height="16" rx="5" fill="#9aa0a6"/>',
      sky("oz-s2", "#5c6f86", "#9aa9ba") + '<clipPath id="oz-c2"><rect x="40" y="26" width="320" height="110"/></clipPath>');
  }

  /* 3. Farmington, New Mexico: red mesas, Shiprock on the horizon, a ball over the diamond */
  function ozfarmington() {
    return svg(
      '<rect width="400" height="260" fill="url(#oz-s3)"/>' +
      '<path d="M300 132l8-40l6 10l6-34l8 30l6-6l8 40z" fill="#3b2f3a"/>' +
      '<path d="M0 132v-30h70l14 10h60l10 20zM230 132l10-22h90l16-12h54v34z" fill="#b5553a"/><path d="M0 102h70M240 110h90" stroke="#d98a5c" stroke-width="3"/>' +
      '<rect x="0" y="132" width="400" height="128" fill="#c69a6a"/>' +
      '<path d="M200 250l-90-56l90-50l90 50z" fill="#d9b07c" stroke="#f5f0e6" stroke-width="2"/><path d="M200 250l-74-46l74-41l74 41z" fill="#5e9a48"/>' +
      '<rect x="196" y="244" width="8" height="8" fill="#fff"/><rect x="106" y="190" width="8" height="8" fill="#fff"/><rect x="286" y="190" width="8" height="8" fill="#fff"/><rect x="196" y="140" width="8" height="8" fill="#fff"/>' +
      '<circle cx="200" cy="200" r="8" fill="#d9b07c"/>' +
      '<path d="M0 132q100 4 400 0" stroke="#7a3f2c" stroke-width="2" fill="none"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => '<path d="M' + (i * 30) + ' 160v20" stroke="#8a6a4a" stroke-width="2"/>').join("") + '<path d="M0 166h400" stroke="#8a6a4a" stroke-width="2"/>' +
      '<g class="oz-ball"><circle cx="80" cy="150" r="5" fill="#fff" stroke="#c0392b" stroke-width="1"/></g>',
      sky("oz-s3", "#f2a65a", "#f6dca0"));
  }

  /* 4. King Street Station: red-brick clock tower, the clock running, a train rolling through in the rain */
  function ozkingst() {
    let wins = "";
    for (let i = 0; i < 4; i++) wins += '<rect x="' + (186 + (i % 2) * 18) + '" y="' + (110 + Math.floor(i / 2) * 26) + '" width="10" height="18" rx="5" fill="#3a2a22"/>';
    let cars = "";
    for (let c = 0; c < 3; c++) {
      cars += '<rect x="' + (c * 150) + '" y="186" width="144" height="46" rx="6" fill="#d9dde0" stroke="#5e6b78" stroke-width="2"/><path d="M' + (c * 150) + ' 220h144" stroke="#1d4e7a" stroke-width="5"/>';
      for (let w = 0; w < 6; w++) cars += '<rect x="' + (c * 150 + 10 + w * 22) + '" y="194" width="16" height="14" rx="2" fill="#2a3440"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#oz-s4)"/>' +
      '<rect x="40" y="130" width="320" height="56" fill="#9c4a33"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (52 + i * 38) + '" y="144" width="20" height="28" rx="10" fill="#3a2a22"/>').join("") +
      '<rect x="176" y="40" width="48" height="146" fill="#a9523a"/><path d="M170 40h60l-30-28z" fill="#5b4a46"/><rect x="172" y="38" width="56" height="6" fill="#e7d9c4"/>' +
      '<circle cx="200" cy="74" r="17" fill="#f3ead6" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path class="oz-hr" d="M200 74v-9" stroke="#222" stroke-width="2.5" stroke-linecap="round"/><path class="oz-min" d="M200 74v-14" stroke="#222" stroke-width="1.6" stroke-linecap="round"/><circle cx="200" cy="74" r="1.8" fill="#222"/>' + wins +
      '<rect x="0" y="232" width="400" height="28" fill="#4a4a50"/><path d="M0 236h400M0 244h400" stroke="#777" stroke-width="2"/>' +
      '<g class="oz-tr">' + cars + '</g>' + rain(28),
      sky("oz-s4", "#5e6c80", "#a8b4c2"));
  }

  /* 5. 3rd Ave and Pine St: green signs, ONRY on the wall, the dark Columbia Center tower behind in the rain */
  function ozcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#oz-s5)"/>' +
      '<path d="M98 140v-104l10-10h26l10 10v104z" fill="#1f2228"/><path d="M110 40v100M122 34v106M132 40v100" stroke="#2c323a" stroke-width="2"/>' +
      '<rect x="30" y="80" width="44" height="60" fill="#3d4450"/><rect x="160" y="66" width="40" height="74" fill="#4a5260"/><rect x="214" y="90" width="50" height="50" fill="#3d4450"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (166 + (i % 2) * 18) + '" y="' + (74 + Math.floor(i / 2) * 20) + '" width="10" height="10" fill="#f2d28a" opacity=".7"/>').join("") +
      '<rect x="0" y="140" width="290" height="90" fill="#7a6a5e"/>' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M0 ' + (150 + i * 14) + 'h290" stroke="#6a5b50" stroke-width="1"/>').join("") +
      tag("ONRY", 30, 206, 44, GOLD, -6) + tag("OLDOMINION", 150, 222, 16, TEAL, -4) + tag("DTS", 216, 182, 22, PURP, -10) +
      '<g class="oz-sp"><circle cx="146" cy="170" r="3" fill="' + GOLD + '" opacity=".6"/></g><g class="oz-sp oz-sp2"><circle cx="152" cy="162" r="2" fill="' + GOLD + '" opacity=".5"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3d3f45"/><path d="M0 244h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/><rect x="290" y="210" width="110" height="20" fill="#8a8680"/>' +
      '<rect x="326" y="96" width="5" height="134" fill="#5c6a70"/>' + sign(278, 92, 100, "3rd Ave") + sign(284, 118, 90, "Pine St") + rain(34),
      sky("oz-s5", "#4e5a6a", "#9aa6b4"));
  }

  window.SCENES = { ozstation, ozkexp, ozfarmington, ozkingst, ozcorner };
})();
