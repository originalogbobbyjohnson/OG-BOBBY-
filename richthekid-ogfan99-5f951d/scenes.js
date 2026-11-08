/* richthekid scenes (Regions tab: Atlanta; College Park, the town his mom moved him to from Queens at 13 - Wikipedia, Drink Champs).
   CSS classes prefixed rk- (the page's own anim-train is kept on the bus).
   1 MARTA 195 Forest Parkway bus pulling into the College Park station south bus bays (station is an open cut; the trains run below).
   2 His uncle's College Park house: the porch at night, a boombox and a stack of CDs (the OutKast + T.I. CDs his uncle gave him, per Drink Champs). No album art, no logos.
   3 The Plug Walk space coupe: a two-seat coupe lifting off a College Park driveway into the stars, "like E.T.", a big moon behind (no faces).
   4 The New Freezer: a walk-in freezer of ice, chains and diamonds glinting, frost breath drifting, RICH FOREVER on the frosted door.
   5 W Columbia Ave and Main St in College Park: green signs, RICH THE KID tagged on the wall, the historic district's Victorian porches behind.
   No 9 drawn as a font glyph: the 195 headsign draws its 9 as a circle with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rkTw{0%,100%{opacity:.25}50%{opacity:1}}.rk-tw{animation:rkTw 1.8s ease-in-out infinite}.rk-tw2{animation-delay:-.6s}.rk-tw3{animation-delay:-1.2s}' +
    '@keyframes rkNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-44px);opacity:0}}.rk-note{animation:rkNote 2.8s ease-out infinite}.rk-note2{animation-delay:-1.4s}' +
    '@keyframes rkLift{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(18px,-16px) rotate(-9deg)}}.rk-lift{transform-box:fill-box;transform-origin:50% 50%;animation:rkLift 3.2s ease-in-out infinite}' +
    '@keyframes rkFlame{0%,100%{transform:scaleX(1);opacity:.95}50%{transform:scaleX(1.5);opacity:.6}}.rk-flame{transform-box:fill-box;transform-origin:100% 50%;animation:rkFlame .35s ease-in-out infinite}' +
    '@keyframes rkGlint{0%,70%,100%{opacity:0;transform:scale(.4)}80%{opacity:1;transform:scale(1.2)}}.rk-glint{transform-box:fill-box;transform-origin:50% 50%;animation:rkGlint 2.4s ease-in-out infinite}.rk-g2{animation-delay:-.8s}.rk-g3{animation-delay:-1.6s}' +
    '@keyframes rkFog{0%{transform:translateX(0);opacity:.0}30%{opacity:.55}100%{transform:translateX(60px);opacity:0}}.rk-fog{animation:rkFog 4s linear infinite}.rk-fog2{animation-delay:-2s}' +
    '@keyframes rkSpr{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rk-spr{animation:rkSpr 1.4s ease-out infinite}.rk-spr2{animation-delay:.45s}' +
    '@keyframes rkCar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.rk-car{animation:rkCar 7s linear infinite}' +
    '@keyframes rkTrain{from{transform:translateX(420px)}to{transform:translateX(-420px)}}.rk-train{animation:rkTrain 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "rk-tw rk-tw" + (1 + i % 3)) + '" cx="' + ((i * 83 + 17) % 400) + '" cy="' + (6 + (i * 41) % 90) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff" opacity=".8"/>'; return s; };
  const ICE = "#8fe3ff", GOLD = "#ffd24a", PURP = "#c58bff", MARTA = "#0a62b0", ORANGE = "#f47b20";
  /* a straight-stem 9 drawn as shapes (circle + vertical stem on the right), w ~7, h ~11, baseline y */
  const nine = (x, y, c) => '<circle cx="' + (x + 3.4) + '" cy="' + (y - 7.6) + '" r="2.9" fill="none" stroke="' + c + '" stroke-width="1.8"/><path d="M' + (x + 6.3) + ' ' + (y - 8) + 'V' + y + '" stroke="' + c + '" stroke-width="1.8"/>';
  const diamond = (x, y, s, cls) => '<g class="rk-glint ' + (cls || "") + '"><path d="M' + x + ' ' + (y - s) + 'L' + (x + s * .35) + ' ' + y + 'L' + x + ' ' + (y + s) + 'L' + (x - s * .35) + ' ' + y + 'Z M' + (x - s) + ' ' + y + 'L' + x + ' ' + (y - s * .35) + 'L' + (x + s) + ' ' + y + 'L' + x + ' ' + (y + s * .35) + 'Z" fill="#fff"/></g>';
  /* a two-seat coupe, side view, facing right */
  const coupe = (body, trim) => '<path d="M-58 8q2 -14 22 -16l20 -14q8 -5 22 -5h18q12 0 22 10l14 10q18 2 22 10v10h-142z" fill="' + body + '" stroke="#111" stroke-width="1.5"/>' +
    '<path d="M-12 -20q6 -5 18 -5h14q10 0 17 8l8 6h-62z" fill="#1b2433" stroke="' + trim + '" stroke-width="1.2"/><path d="M14 -25v22" stroke="' + body + '" stroke-width="3"/>' +
    '<rect x="-58" y="10" width="142" height="3" fill="' + trim + '"/><circle cx="-30" cy="18" r="11" fill="#151515"/><circle cx="-30" cy="18" r="5" fill="' + trim + '"/><circle cx="56" cy="18" r="11" fill="#151515"/><circle cx="56" cy="18" r="5" fill="' + trim + '"/>' +
    '<rect x="80" y="2" width="6" height="5" rx="1" fill="#fff6c2"/>';

  /* 1. MARTA 195 Forest Parkway at College Park station's south bus bays */
  function rkbus() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (64 + i * 36) + '" y="150" width="30" height="22" rx="3" fill="#18222e"/>').join("");
    const head = '<rect x="34" y="141" width="132" height="11" rx="2" fill="#111"/>' +
      '<text x="40" y="150" ' + font + ' font-size="8.5" fill="#ffb84a">1</text>' + nine(46, 150, "#ffb84a") + '<text x="54" y="150" ' + font + ' font-size="8.5" fill="#ffb84a">5</text>' +
      '<text x="66" y="150" ' + font + ' font-size="8" fill="#ffb84a">FOREST PKWY</text>';
    const bus = '<g class="anim-train"><rect x="28" y="138" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="36" y="156" width="22" height="42" rx="2" fill="#18222e"/><path d="M28 186h318v8h-318z" fill="' + MARTA + '"/><path d="M28 194h318v4h-318z" fill="' + ORANGE + '"/>' + head +
      '<circle cx="80" cy="210" r="12" fill="#222"/><circle cx="80" cy="210" r="5" fill="#9aa1a8"/><circle cx="294" cy="210" r="12" fill="#222"/><circle cx="294" cy="210" r="5" fill="#9aa1a8"/>' +
      '<circle cx="33" cy="200" r="3.5" fill="#fff6c2"/></g>';
    /* the open-cut rail trench with a train sliding through, behind the bus bays */
    const cut = '<rect x="0" y="92" width="400" height="30" fill="#3d4148"/><rect x="0" y="92" width="400" height="5" fill="#8b8f96"/>' +
      '<g class="rk-train"><rect x="20" y="100" width="150" height="18" rx="4" fill="#d7dade"/><rect x="176" y="100" width="150" height="18" rx="4" fill="#d7dade"/>' +
      [30, 60, 90, 120, 186, 216, 246, 276].map(x => '<rect x="' + x + '" y="104" width="20" height="7" rx="1" fill="#26303c"/>').join("") +
      '<rect x="20" y="113" width="306" height="3" fill="' + ORANGE + '"/></g>' +
      '<rect x="0" y="118" width="400" height="6" fill="#7a7e85"/>';
    const canopy = '<path d="M0 126h400v8h-400z" fill="#c8ccd2"/>' + [24, 120, 216, 312].map(x => '<rect x="' + x + '" y="134" width="5" height="4" fill="#7d8792"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#rks1)"/>' + stars(12) +
      '<rect x="18" y="14" width="200" height="40" rx="3" fill="#111" stroke="#ddd" stroke-width="1.2"/><text x="118" y="32" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">COLLEGE PARK</text>' +
      '<text x="118" y="47" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">SOUTH BUS BAYS</text>' +
      '<circle cx="246" cy="34" r="12" fill="#d92b2b"/><text x="246" y="38.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">RED</text>' +
      '<circle cx="276" cy="34" r="12" fill="#e7a600"/><text x="276" y="38.5" text-anchor="middle" ' + font + ' font-size="8" fill="#111">GOLD</text>' +
      '<rect x="0" y="62" width="400" height="30" fill="#2b3340"/><path d="M0 62h400" stroke="#556070" stroke-width="2"/>' +
      [40, 110, 300, 360].map(x => '<rect x="' + x + '" y="70" width="40" height="16" fill="#3a4556"/><rect x="' + (x + 4) + '" y="74" width="10" height="8" fill="#ffd27a" opacity=".7"/>').join("") +
      cut + canopy +
      '<rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 238h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' + bus +
      '<rect x="372" y="150" width="5" height="70" fill="#6b7178"/><rect x="352" y="132" width="44" height="26" rx="3" fill="' + MARTA + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="363" y="150" ' + font + ' font-size="12" fill="#fff">1</text>' + nine(370, 150, "#fff") + '<text x="379" y="150" ' + font + ' font-size="12" fill="#fff">5</text>',
      sky("rks1", "#141a3a", "#e58c5a"));
  }

  /* 2. His uncle's College Park house: porch at night, a boombox and the CD stack */
  function rkuncle() {
    const cds = Array.from({ length: 7 }, (_, i) => '<rect x="' + (236 + (i % 2) * 2) + '" y="' + (188 - i * 6) + '" width="34" height="5" rx="1" fill="' + ["#2a2f3a", "#c9ccd3", "#3a3248", "#b8bcc6", "#2f3a2f", "#cfd2d8", "#4a3626"][i] + '" stroke="#111" stroke-width=".8"/>').join("");
    const disc = '<g transform="translate(300 176)"><circle r="16" fill="#d9dde4"/><circle r="16" fill="url(#rkcd)" opacity=".7"/><circle r="4" fill="#20242c"/></g>';
    const box = '<rect x="120" y="160" width="96" height="42" rx="6" fill="#2a2d33" stroke="#9aa1a8" stroke-width="1.5"/><circle cx="142" cy="182" r="13" fill="#15171b" stroke="#777" stroke-width="2"/><circle cx="142" cy="182" r="5" fill="#444"/>' +
      '<circle cx="194" cy="182" r="13" fill="#15171b" stroke="#777" stroke-width="2"/><circle cx="194" cy="182" r="5" fill="#444"/><rect x="158" y="170" width="20" height="9" rx="1" fill="#7fe0ff"/><path d="M130 160q38 -22 76 0" stroke="#9aa1a8" stroke-width="3" fill="none"/>';
    const notes = '<g class="rk-note"><text x="150" y="150" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="rk-note rk-note2"><text x="186" y="146" font-size="16" fill="' + ICE + '">&#9835;</text></g>';
    return svg('<rect width="400" height="260" fill="url(#rks2)"/>' + stars(16) +
      '<circle cx="342" cy="44" r="18" fill="#f6efd2"/>' +
      /* brick ranch house */
      '<path d="M20 96l120 -46l120 46z" fill="#3b2a24"/><rect x="34" y="96" width="212" height="112" fill="#8a3e2c"/>' +
      Array.from({ length: 9 }, (_, r) => '<path d="M34 ' + (104 + r * 12) + 'h212" stroke="#6e2f22" stroke-width="1"/>').join("") +
      '<rect x="56" y="112" width="40" height="34" fill="#ffd27a" stroke="#f1ece0" stroke-width="3"/><path d="M76 112v34M56 129h40" stroke="#f1ece0" stroke-width="2"/>' +
      '<rect x="190" y="118" width="34" height="56" fill="#2b1c16" stroke="#f1ece0" stroke-width="3"/><circle cx="216" cy="148" r="2" fill="' + GOLD + '"/>' +
      /* porch */
      '<rect x="20" y="150" width="380" height="8" fill="#d8d0c0"/>' + [40, 110, 250, 330, 392].map(x => '<rect x="' + x + '" y="94" width="6" height="58" fill="#e8e2d6"/>').join("") +
      '<path d="M246 96h154v-6h-154z" fill="#3b2a24"/><rect x="0" y="202" width="400" height="58" fill="#3c3328"/><rect x="0" y="202" width="400" height="6" fill="#d8d0c0"/>' +
      box + cds + disc + notes,
      sky("rks2", "#0c1230", "#3a2a5a") + '<radialGradient id="rkcd"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="' + PURP + '"/><stop offset="1" stop-color="' + ICE + '"/></radialGradient>');
  }

  /* 3. The Plug Walk space coupe lifting off into the stars, a big moon behind */
  function rkcoupe() {
    const car = '<g transform="translate(176 150)"><g class="rk-lift">' +
      '<g class="rk-flame"><path d="M-58 6l-34 -6l34 -6z" fill="#ff8a3d"/><path d="M-58 4l-22 -4l22 -4z" fill="#ffe07a"/></g>' +
      coupe("#e9edf3", "#b9c3d1") + '</g></g>';
    return svg('<rect width="400" height="260" fill="url(#rks3)"/>' + stars(40) +
      '<circle cx="290" cy="92" r="62" fill="#f4f1e6"/><circle cx="270" cy="78" r="9" fill="#e2ddcd"/><circle cx="310" cy="112" r="12" fill="#e2ddcd"/><circle cx="318" cy="70" r="6" fill="#e2ddcd"/>' +
      '<path d="M0 214q100 -16 200 -4t200 -6v56h-400z" fill="#141a26"/>' +
      /* small College Park houses and pines on the horizon */
      [20, 64, 330, 372].map(x => '<path d="M' + x + ' 210l14 -12l14 12v14h-28z" fill="#0b0f18"/><rect x="' + (x + 9) + '" y="212" width="6" height="6" fill="#ffd27a" opacity=".8"/>').join("") +
      [110, 128, 290].map(x => '<path d="M' + x + ' 216l8 -30l8 30z" fill="#0b0f18"/>').join("") +
      '<rect x="150" y="224" width="100" height="36" fill="#262c38"/><path d="M200 226v30" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="6 6"/>' +
      car + '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="' + ICE + '" letter-spacing="3">SPACE COUPE</text>',
      sky("rks3", "#05061a", "#2b1d52"));
  }

  /* 4. The New Freezer: a walk-in freezer of ice, chains and diamonds */
  function rkfreezer() {
    const shelves = [80, 128, 176].map(y => '<rect x="40" y="' + y + '" width="140" height="6" fill="#b9d6e6"/><rect x="220" y="' + y + '" width="140" height="6" fill="#b9d6e6"/>').join("");
    const cubes = [[52, 62], [80, 62], [108, 62], [262, 62], [330, 62], [60, 110], [96, 110], [248, 110], [300, 110], [70, 158], [322, 158]].map(([x, y]) =>
      '<rect x="' + x + '" y="' + y + '" width="22" height="18" rx="3" fill="#dff6ff" stroke="#9fd0e6" stroke-width="1.5" opacity=".95"/><path d="M' + (x + 4) + ' ' + (y + 4) + 'l6 0" stroke="#fff" stroke-width="2"/>').join("");
    const chain = (x, y) => '<path d="M' + x + ' ' + y + 'q30 34 60 0" stroke="' + GOLD + '" stroke-width="4" fill="none" stroke-dasharray="4 2"/><circle cx="' + (x + 30) + '" cy="' + (y + 26) + '" r="8" fill="' + GOLD + '" stroke="#a6801c" stroke-width="2"/>';
    return svg('<rect width="400" height="260" fill="url(#rks4)"/>' +
      '<rect x="20" y="30" width="360" height="200" rx="6" fill="#123044" stroke="#6fb7d6" stroke-width="3"/>' + shelves + cubes +
      chain(130, 92) + chain(240, 140) +
      '<rect x="160" y="34" width="80" height="26" rx="4" fill="#e9f8ff" stroke="#9fd0e6" stroke-width="2"/><text x="200" y="45" text-anchor="middle" ' + font + ' font-size="8.5" fill="#0b3a54">RICH</text><text x="200" y="56" text-anchor="middle" ' + font + ' font-size="8.5" fill="#0b3a54">FOREVER</text>' +
      diamond(118, 70, 7) + diamond(286, 118, 8, "rk-g2") + diamond(200, 168, 7, "rk-g3") + diamond(340, 72, 6, "rk-g2") + diamond(70, 150, 6, "rk-g3") +
      '<g class="rk-fog"><ellipse cx="60" cy="214" rx="60" ry="10" fill="#e9f8ff" opacity=".5"/></g><g class="rk-fog rk-fog2"><ellipse cx="220" cy="220" rx="70" ry="10" fill="#e9f8ff" opacity=".5"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#0a1a26"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="12" fill="' + ICE + '" letter-spacing="4">NEW FREEZER</text>',
      sky("rks4", "#07151f", "#0d2a3a"));
  }

  /* 5. W Columbia Ave and Main St in College Park, the historic district's Victorian porches behind */
  function rkcorner() {
    const vic = (x, c) => '<path d="M' + x + ' 98l30 -30l30 30z" fill="#2a2440"/><rect x="' + x + '" y="98" width="60" height="64" fill="' + c + '"/><path d="M' + (x + 36) + ' 72v-12h10v22" fill="#2a2440"/>' +
      '<rect x="' + (x + 8) + '" y="106" width="14" height="18" fill="#ffd27a"/><rect x="' + (x + 38) + '" y="106" width="14" height="18" fill="#ffd27a"/>' +
      '<rect x="' + (x - 4) + '" y="138" width="68" height="4" fill="#efe8da"/>' + [0, 20, 40, 60].map(d => '<rect x="' + (x - 2 + d) + '" y="142" width="3" height="20" fill="#efe8da"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#rks5)"/>' + stars(14) +
      vic(14, "#6d8fa6") + vic(96, "#b9a06a") + vic(286, "#8a6d9e") +
      '<rect x="0" y="160" width="400" height="10" fill="#2b2b33"/>' +
      '<rect x="40" y="150" width="320" height="80" fill="#6b6f78"/>' + Array.from({ length: 7 }, (_, r) => '<path d="M40 ' + (160 + r * 11) + 'h320" stroke="#5b5f68" stroke-width="1"/>').join("") +
      tag("RICH THE KID", 72, 200, 34, ICE, -5) + tag("RICH FOREVER", 210, 222, 18, GOLD, -3) + tag("HUH? WHAT?", 92, 170, 14, PURP, -4) +
      '<g class="rk-spr"><circle cx="330" cy="188" r="3" fill="' + ICE + '"/></g><g class="rk-spr rk-spr2"><circle cx="336" cy="182" r="2.5" fill="' + ICE + '"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3c42"/><g class="rk-car"><rect x="0" y="236" width="70" height="16" rx="6" fill="' + PURP + '"/><circle cx="14" cy="252" r="5" fill="#111"/><circle cx="56" cy="252" r="5" fill="#111"/></g>' +
      '<rect x="368" y="58" width="5" height="172" fill="#5d636b"/>' + sign(270, 60, 126, "W COLUMBIA AVE") + sign(300, 86, 96, "MAIN ST"),
      sky("rks5", "#101433", "#43305e"));
  }

  window.SCENES = { rkbus: rkbus, rkuncle: rkuncle, rkcoupe: rkcoupe, rkfreezer: rkfreezer, rkcorner: rkcorner };
})();
