/* dollyparton scenes (Regions tab: Memphis + Tennessee; Locust Ridge, Sevier County, in the Great Smoky Mountains). CSS classes prefixed dp- (the page's own anim-train is kept).
   1 US 411 into Sevierville: a car rolling past the green highway sign and the US 411 shield, the blue Smokies behind with mist drifting.
   2 The Tennessee mountain home: the little two-room log cabin on Locust Ridge, tin roof, stone chimney smoking, a straight-back chair leaned on the porch wall, fireflies blinking.
   3 The steam train: a black-and-red mountain steam engine crossing a wooden trestle through the hills, smoke puffing.
   4 Sevierville: the red-brick Sevier County Courthouse with its white clock tower and silver dome, the flag waving, clock hands turning.
   5 Dolly Parton Pkwy and Parkway: green signs, DOLLY tagged on old barn boards with a patchwork of colors, the Smokies behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dpmist{0%{transform:translateX(-40px)}100%{transform:translateX(60px)}}.dp-mist{animation:dpmist 10s ease-in-out infinite alternate}' +
    '@keyframes dpglow{0%,100%{opacity:.1}50%{opacity:1}}.dp-gl{animation:dpglow 1.9s ease-in-out infinite}.dp-gl2{animation-delay:-.7s}.dp-gl3{animation-delay:-1.3s}' +
    '@keyframes dpsmoke{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(14px,-46px) scale(1.6);opacity:0}}.dp-sm{transform-box:fill-box;transform-origin:50% 50%;animation:dpsmoke 2.6s ease-out infinite}.dp-sm2{animation-delay:-.9s}.dp-sm3{animation-delay:-1.7s}' +
    '@keyframes dpchug{0%{transform:translateX(-30px)}100%{transform:translateX(40px)}}.dp-chug{animation:dpchug 7s ease-in-out infinite alternate}' +
    '@keyframes dpwave{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.dp-wave{transform-box:fill-box;transform-origin:0 50%;animation:dpwave 1.6s ease-in-out infinite}' +
    '@keyframes dpspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dp-min{transform-box:view-box;animation:dpspin 6s linear infinite}.dp-hr{transform-box:view-box;animation:dpspin 72s linear infinite}' +
    '@keyframes dpfly{0%{transform:translate(0,0)}100%{transform:translate(420px,-24px)}}.dp-fly{animation:dpfly 13s linear infinite}' +
    '@keyframes dpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dp-sp{animation:dpspray 1.4s ease-out infinite}.dp-sp2{animation-delay:.45s}' +
    '@keyframes dpflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.35)}}.dp-flap{transform-box:fill-box;transform-origin:50% 50%;animation:dpflap .7s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const PINK = "#f06ba8", GOLD = "#f2c94c", SKY = "#7ec8e3";
  /* the Smokies: layered blue ridges fading into haze */
  const ridge = (y, a, b, c, fill) => '<path d="M0 ' + (y - a) + 'C50 ' + (y - a - 14) + ' 90 ' + (y - b) + ' 140 ' + (y - b + 8) + 'S230 ' + (y - c) + ' 280 ' + (y - c + 10) + 'S360 ' + (y - a) + ' 400 ' + (y - b + 4) + 'V260H0z" fill="' + fill + '"/>';
  const smokies = (y) => ridge(y, 26, 40, 34, "#9db4cf") + ridge(y + 18, 14, 28, 22, "#7393ba") + ridge(y + 36, 6, 18, 12, "#4f7099");
  const mist = (y) => '<g class="dp-mist" opacity=".55"><ellipse cx="80" cy="' + y + '" rx="90" ry="7" fill="#eef3f8"/><ellipse cx="270" cy="' + (y + 12) + '" rx="110" ry="8" fill="#eef3f8"/></g>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-4" width="6" height="14" fill="#4e3d2c"/><path d="M0 -60l-15 24h7l-13 18h8l-13 18h52l-13 -18h8l-13 -18h7z" fill="' + (c || "#2a5634") + '"/></g>';
  const car = '<g><path d="M0 22v-10q0 -4 4 -5l14 -3l12 -10h34q5 0 8 4l8 9l12 2q4 1 4 5v8z" fill="' + PINK + '" stroke="#222" stroke-width="1.5"/><path d="M32 6l9 -8h20l7 8z" fill="#bfe3f2"/>' +
    '<circle cx="22" cy="24" r="8" fill="#222"/><circle cx="22" cy="24" r="3.5" fill="#ccc"/><circle cx="76" cy="24" r="8" fill="#222"/><circle cx="76" cy="24" r="3.5" fill="#ccc"/></g>';

  /* 1. US 411 into Sevierville */
  function dpsign() {
    const shield = '<g transform="translate(62 50)"><path d="M0 0h44v28q0 14 -22 22q-22 -8 -22 -22z" fill="#fff" stroke="#111" stroke-width="2"/><text x="22" y="13" text-anchor="middle" ' + font + ' font-size="7" fill="#111">US</text><text x="22" y="32" text-anchor="middle" ' + font + ' font-size="16" fill="#111">411</text></g>';
    const big = '<rect x="122" y="34" width="204" height="82" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/><text x="224" y="66" text-anchor="middle" ' + font + ' font-size="23" fill="#fff">SEVIERVILLE</text>' +
      '<text x="224" y="86" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">PIGEON FORGE   GATLINBURG</text><text x="224" y="104" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">DOLLY PARTON PKWY</text>' +
      '<rect x="176" y="116" width="6" height="42" fill="#8a9098"/><rect x="266" y="116" width="6" height="42" fill="#8a9098"/>';
    return svg('<rect width="400" height="260" fill="url(#dps1)"/><circle cx="346" cy="38" r="16" fill="#fff4c8" opacity=".9"/>' + smokies(96) + mist(120) +
      tree(28, 160, 0.9) + tree(372, 158, 1) + tree(344, 162, 0.7, "#356b40") + '<rect x="82" y="78" width="4" height="82" fill="#8a9098"/>' + shield + big +
      '<rect x="0" y="160" width="400" height="100" fill="#55565c"/><path d="M0 162h400M0 252h400" stroke="#f2f2f2" stroke-width="3"/><path d="M0 207h400" stroke="' + GOLD + '" stroke-width="3" stroke-dasharray="26 18"/>' +
      '<g class="anim-train"><g transform="translate(150 182) scale(1.45)">' + car + '</g></g>', sky("dps1", "#8fbfe6", "#f3e6d6"));
  }

  /* 2. The Tennessee mountain home on Locust Ridge */
  function dpcabin() {
    const logs = Array.from({ length: 8 }, (_, i) => '<rect x="104" y="' + (104 + i * 9) + '" width="180" height="9" rx="4" fill="' + (i % 2 ? "#7a5232" : "#8a6040") + '"/><path d="M106 ' + (112.5 + i * 9) + 'h176" stroke="#d8c8a8" stroke-width="1.2"/>').join("");
    const chimney = '<rect x="268" y="66" width="22" height="110" fill="#8e8a82"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M268 ' + (78 + i * 13) + 'h22M' + (i % 2 ? 279 : 274) + ' ' + (66 + i * 13) + 'v13" stroke="#6e6a62" stroke-width="1.5"/>').join("") +
      '<g fill="#d8d8dc"><circle class="dp-sm" cx="279" cy="60" r="7"/><circle class="dp-sm dp-sm2" cx="279" cy="60" r="6"/><circle class="dp-sm dp-sm3" cx="279" cy="60" r="5"/></g>';
    const roof = '<path d="M92 106l102 -40l102 40z" fill="#9aa3ad"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (100 + i * 15) + ' 104l' + (94 - i * 15 > 0 ? 6 : -6) + ' -6" stroke="#7d858f" stroke-width="1"/>').join("") + '<path d="M92 106h204" stroke="#6d757f" stroke-width="3"/>';
    const porch = '<rect x="96" y="176" width="196" height="8" fill="#6a4a2a"/><path d="M100 140h188" stroke="#5a3a1a" stroke-width="4"/><rect x="104" y="140" width="5" height="36" fill="#5a3a1a"/><rect x="280" y="140" width="5" height="36" fill="#5a3a1a"/>' +
      '<rect x="150" y="126" width="26" height="50" fill="#4a3018"/><rect x="204" y="128" width="26" height="22" fill="#ffd27a" opacity=".85"/><path d="M217 128v22M204 139h26" stroke="#4a3018" stroke-width="2"/>' +
      /* the straight-back chair leaned back on two legs against the wall */
      '<g transform="rotate(-14 252 176)" stroke="#c09060" stroke-width="3" stroke-linecap="round" fill="none"><path d="M244 176v-40M262 176v-20M244 156h20M244 142h0"/><path d="M246 140h-2M244 146h0" /></g>' +
      '<g transform="rotate(-14 252 176)"><rect x="242" y="134" width="5" height="22" fill="#c09060"/><path d="M243 140h-0M243 146h4" stroke="#7a5232" stroke-width="1.5"/></g>';
    const flies = [[60, 150], [80, 196], [320, 176], [350, 140], [130, 206], [300, 210], [40, 120], [370, 196]].map((p, i) => '<circle class="dp-gl ' + (i % 3 === 1 ? "dp-gl2" : i % 3 === 2 ? "dp-gl3" : "") + '" cx="' + p[0] + '" cy="' + p[1] + '" r="2.6" fill="#f8f088"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#dps2)"/>' + smokies(80) + '<path d="M0 150q100 -24 200 -10t200 -4v124h-400z" fill="#3e6b3a"/>' + tree(40, 160, 1.1, "#244a2c") + tree(362, 158, 1.2, "#244a2c") +
      chimney + roof + logs + porch + '<rect x="0" y="184" width="400" height="76" fill="#4a7a3c"/><path d="M180 184q-10 40 -40 76h60q10 -40 10 -76z" fill="#8a7050"/>' + flies,
      sky("dps2", "#3a4a78", "#e8a070"));
  }

  /* 3. The steam train on the trestle */
  function dptrain() {
    const trestle = '<rect x="0" y="168" width="400" height="6" fill="#5a3a1a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40) + ' 174l20 60l20 -60M' + (i * 40) + ' 204h40" stroke="#6a4a2a" stroke-width="3" fill="none"/>').join("");
    const engine = '<g class="dp-chug"><g transform="translate(110 112)">' +
      '<rect x="0" y="22" width="120" height="30" rx="4" fill="#1e1e22"/><rect x="0" y="30" width="120" height="4" fill="' + GOLD + '"/><rect x="88" y="4" width="40" height="48" fill="#1e1e22"/><rect x="92" y="10" width="14" height="12" fill="#ffd27a"/><rect x="110" y="10" width="14" height="12" fill="#ffd27a"/>' +
      '<rect x="84" y="0" width="48" height="6" fill="#b8332a"/><rect x="18" y="4" width="12" height="18" fill="#1e1e22"/><path d="M14 4h20l-3 -8h-14z" fill="#1e1e22"/><rect x="48" y="12" width="12" height="10" rx="5" fill="' + GOLD + '"/>' +
      '<circle cx="-2" cy="34" r="7" fill="#f8f0b8"/><path d="M-10 52l14 -12v12z" fill="#b8332a"/><rect x="4" y="52" width="124" height="6" fill="#b8332a"/>' +
      [20, 48, 76, 106].map(x => '<circle cx="' + x + '" cy="62" r="' + (x < 30 ? 7 : 11) + '" fill="#b8332a" stroke="#1e1e22" stroke-width="3"/><circle cx="' + x + '" cy="62" r="2.5" fill="#1e1e22"/>').join("") + '<path d="M20 62h86" stroke="#c9c9cf" stroke-width="3"/>' +
      '<rect x="138" y="26" width="70" height="28" rx="3" fill="#2a5634"/><rect x="138" y="30" width="70" height="3" fill="' + GOLD + '"/>' + [154, 192].map(x => '<circle cx="' + x + '" cy="60" r="7" fill="#1e1e22"/>').join("") +
      '<g fill="#e8e8ec"><circle class="dp-sm" cx="24" cy="-6" r="9"/><circle class="dp-sm dp-sm2" cx="24" cy="-6" r="8"/><circle class="dp-sm dp-sm3" cx="24" cy="-6" r="7"/></g>' +
      '</g></g>';
    return svg('<rect width="400" height="260" fill="url(#dps3)"/>' + smokies(70) + mist(110) + '<path d="M0 150q90 -30 200 -12t200 -6v128h-400z" fill="#2f5a34"/>' +
      tree(30, 168, 1.1) + tree(70, 172, 0.9, "#356b40") + tree(340, 166, 1.2) + tree(380, 170, 0.9, "#356b40") +
      '<rect x="0" y="210" width="400" height="50" fill="#3a6a8a"/><path d="M20 226q10 -4 20 0M120 240q10 -4 20 0M260 230q10 -4 20 0M340 246q10 -4 20 0" stroke="#bfe0f0" stroke-width="2" fill="none"/>' +
      trestle + engine + '<path class="dp-fly" d="M-20 46l6 -4l6 4l6 -4l6 4" stroke="#333" stroke-width="2" fill="none"/>', sky("dps3", "#8fc4e8", "#eaf4f8"));
  }

  /* 4. The Sevier County Courthouse in Sevierville */
  function dpcourt() {
    const bricks = '#a8432e';
    const wing = (x) => '<rect x="' + x + '" y="120" width="90" height="70" fill="' + bricks + '"/><path d="M' + (x - 4) + ' 122l49 -22l49 22z" fill="#8a3424"/>' +
      [0, 1, 2].map(i => '<rect x="' + (x + 12 + i * 26) + '" y="134" width="14" height="24" rx="7" fill="#2a3a52" stroke="#f4efe4" stroke-width="2"/>').join("") +
      '<rect x="' + x + '" y="166" width="90" height="4" fill="#f4efe4"/>';
    const tower = '<rect x="168" y="70" width="64" height="120" fill="' + bricks + '"/><rect x="164" y="66" width="72" height="8" fill="#f4efe4"/><rect x="174" y="30" width="52" height="40" fill="#f4efe4"/>' +
      '<path d="M170 32q30 -44 60 0z" fill="#c8ccd4" stroke="#8a9098" stroke-width="2"/><rect x="198" y="-2" width="4" height="12" fill="#c8ccd4"/>' +
      '<circle cx="200" cy="50" r="15" fill="#fff" stroke="#3a3a3a" stroke-width="2.5"/><g transform="translate(200 50)"><path class="dp-hr" d="M0 0v-8" stroke="#222" stroke-width="2.5" stroke-linecap="round"/><path class="dp-min" d="M0 0v-12" stroke="#222" stroke-width="1.6" stroke-linecap="round"/></g>' +
      '<rect x="186" y="150" width="28" height="40" rx="14" fill="#2a3a52" stroke="#f4efe4" stroke-width="2"/><rect x="180" y="90" width="40" height="30" rx="4" fill="#2a3a52" stroke="#f4efe4" stroke-width="2"/>';
    const flag = '<rect x="330" y="80" width="3" height="110" fill="#c9c9cf"/><g class="dp-wave"><rect x="333" y="82" width="40" height="24" fill="#fff"/>' + [0, 2, 4, 6].map(i => '<rect x="333" y="' + (82 + i * 3.4) + '" width="40" height="3.4" fill="#b22234"/>').join("") + '<rect x="333" y="82" width="16" height="13" fill="#3c3b6e"/></g>';
    return svg('<rect width="400" height="260" fill="url(#dps4)"/>' + smokies(110) + wing(78) + wing(232) + tower + flag +
      '<rect x="0" y="190" width="400" height="70" fill="#5a8a46"/><rect x="150" y="190" width="100" height="70" fill="#c8c2b4"/><path d="M150 190l-30 70M250 190l30 70" stroke="#b0aa9c" stroke-width="2"/>' +
      tree(44, 196, 0.9) + tree(358, 196, 0.95) + '<path class="dp-fly" d="M-20 40l6 -4l6 4l6 -4l6 4" stroke="#333" stroke-width="2" fill="none"/>', sky("dps4", "#7fb8e6", "#eef6fb"));
  }

  /* 5. Dolly Parton Pkwy and Parkway, the Smokies behind */
  function dpcorner() {
    const boards = Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="118" width="19" height="92" fill="' + (i % 3 ? "#6e5236" : "#7a5c3e") + '"/>').join("");
    const quilt = ["#e85a5a", GOLD, "#5aa0e8", PINK, "#6cc06c", "#a070d8", "#f08a3a", SKY].map((c, i) => '<rect x="' + (300 + (i % 4) * 18) + '" y="' + (130 + Math.floor(i / 4) * 18) + '" width="18" height="18" fill="' + c + '" stroke="#3a2a1a" stroke-width="1"/>').join("");
    const fly = '<g transform="translate(30 150)"><g class="dp-flap"><path d="M0 0q-16 -18 -22 -4q-2 10 22 4zM0 0q16 -18 22 -4q2 10 -22 4zM0 2q-12 14 -16 4zM0 2q12 14 16 4z" fill="' + PINK + '" stroke="#000" stroke-width="1.2"/></g><rect x="-1.5" y="-6" width="3" height="12" rx="1.5" fill="#000"/></g>';
    return svg('<rect width="400" height="260" fill="url(#dps5)"/>' + smokies(70) + mist(96) + tree(206, 116, 1) + tree(372, 116, 1.1) +
      boards + '<path d="M0 118h400" stroke="#4a3622" stroke-width="3"/>' + quilt +
      tag("DOLLY", 104, 178, 50, PINK, -6) + tag("IRON BUTTERFLY", 96, 202, 16, GOLD, -4) + tag("DOLLYWOOD", 290, 194, 16, SKY, -3) + fly +
      '<g fill="' + PINK + '"><circle class="dp-sp" cx="20" cy="138" r="2.5"/><circle class="dp-sp dp-sp2" cx="40" cy="134" r="2"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5b60"/><path d="M40 226l14 8M200 240l18 -6M300 222l-10 10" stroke="#2f3034" stroke-width="2"/>' +
      '<rect x="56" y="36" width="5" height="176" fill="#6b7178"/>' + sign(2, 40, 150, "DOLLY PARTON PKWY") + sign(14, 66, 96, "PARKWAY"),
      sky("dps5", "#24305a", "#e89a7a"));
  }

  window.SCENES = { dpsign: dpsign, dpcabin: dpcabin, dptrain: dptrain, dpcourt: dpcourt, dpcorner: dpcorner };
})();
