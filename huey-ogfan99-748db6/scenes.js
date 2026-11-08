/* huey scenes (Regions tab: St. Louis + Ohio; Kinloch, St. Louis County - Missouri's first Black city, right on the edge of Lambert airport). CSS classes prefixed hu- (the page's own anim-train is kept).
   1 MetroLink Red Line pulling into Lambert Airport Terminal 2, the elevated platform over Lambert International Blvd, a jet climbing out behind.
   2 Notebook Paper (his debut album): a sheet of lined notebook paper on a desk, the pencil writing, a lamp glowing.
   3 Kinloch Park, the old town square: the park sign, a hoop, trees, and a jet low overhead on its way into Lambert.
   4 The "Pop, Lock & Drop It" dance floor: ROLL TO THE LEFT / ROLL TO THE RIGHT arrows flashing, a mirror ball, lights.
   5 Monroe Ave and Martin Luther King Blvd in Kinloch: green signs, HUEY tagged on the brick, Lambert's domed Terminal 1 and the control tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes huglow{0%,100%{opacity:.35}50%{opacity:1}}.hu-glow{animation:huglow 1.6s ease-in-out infinite}.hu-g2{animation-delay:-.8s}' +
    '@keyframes hujet{0%{transform:translate(-120px,70px)}100%{transform:translate(520px,0px)}}.hu-jet{animation:hujet 9s linear infinite}' +
    '@keyframes hujet2{0%{transform:translate(480px,-20px)}100%{transform:translate(-160px,30px)}}.hu-jet2{animation:hujet2 10s linear infinite}' +
    '@keyframes hupen{0%,100%{transform:translate(0,0)}25%{transform:translate(10px,-2px)}50%{transform:translate(20px,1px)}75%{transform:translate(30px,-1px)}}.hu-pen{animation:hupen 1.6s ease-in-out infinite}' +
    '@keyframes huwrite{0%{stroke-dashoffset:120}70%,100%{stroke-dashoffset:0}}.hu-write{stroke-dasharray:120;animation:huwrite 3s linear infinite}' +
    '@keyframes huleft{0%,100%{transform:translateX(0);opacity:.4}50%{transform:translateX(-12px);opacity:1}}.hu-left{animation:huleft 1s ease-in-out infinite}' +
    '@keyframes huright{0%,100%{transform:translateX(0);opacity:.4}50%{transform:translateX(12px);opacity:1}}.hu-right{animation:huright 1s ease-in-out infinite;animation-delay:-.5s}' +
    '@keyframes huspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.hu-spin{transform-box:fill-box;transform-origin:50% 50%;animation:huspin 6s linear infinite}' +
    '@keyframes hucone{0%,100%{opacity:.12}50%{opacity:.4}}.hu-cone{animation:hucone 2s ease-in-out infinite}.hu-c2{animation-delay:-1s}' +
    '@keyframes husp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hu-sp{animation:husp 1.4s ease-out infinite}.hu-sp2{animation-delay:.45s}' +
    '@keyframes hublink{0%,49%{opacity:1}50%,100%{opacity:.15}}.hu-blink{animation:hublink 1.2s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const badge = (x, y, txt, c) => '<rect x="' + (x - 17) + '" y="' + (y - 10) + '" width="34" height="14" rx="7" fill="' + c + '"/><text x="' + x + '" y="' + (y + 1) + '" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">' + txt + '</text>';
  const SKY = "#4cc9f0", ORANGE = "#ff9f1c", PINK = "#f15bb5", ML = "#1f4e79", MLRED = "#d9262e";
  /* a plain twin-engine jet, no airline marks; drawn pointing right at the origin */
  const jet = (s, c) => '<g transform="scale(' + s + ')"><path d="M0 0q4 -6 14 -6h70q12 0 18 6q-6 6 -18 6H14q-10 0 -14 -6z" fill="' + c + '" stroke="#5a6470" stroke-width="1.5"/>' +
    '<path d="M40 -2l-16 -22h8l26 22zM40 4l-16 22h8l26 -22z" fill="#c9d1da" stroke="#5a6470" stroke-width="1.2"/><path d="M6 -2l-6 -14h6l12 14z" fill="#c9d1da" stroke="#5a6470" stroke-width="1.2"/>' +
    Array.from({ length: 7 }, (_, i) => '<circle cx="' + (26 + i * 9) + '" cy="-1" r="1.6" fill="#2b3640"/>').join("") + '</g>';

  /* 1. MetroLink Red Line at Lambert Airport Terminal 2 (elevated over Lambert International Blvd) */
  function hustation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="104" width="32" height="22" rx="3" fill="#1d2833"/>').join("");
    const train = '<g class="anim-train"><rect x="22" y="94" width="336" height="72" rx="9" fill="#f2f3f1" stroke="#9aa1a6" stroke-width="2"/>' + win +
      '<rect x="22" y="134" width="336" height="7" fill="' + MLRED + '"/><rect x="22" y="143" width="336" height="5" fill="' + ML + '"/>' +
      '<rect x="336" y="98" width="20" height="62" rx="5" fill="#dfe2e0"/><circle cx="347" cy="154" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="100" width="62" height="12" rx="2" fill="#111"/><text x="301" y="109" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">SHILOH-SCOTT</text>' +
      '<path d="M120 94l20 -18M260 94l-20 -18M140 76h100" stroke="#3a3f44" stroke-width="2.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hu1)"/>' +
      '<g class="hu-jet">' + '<g transform="rotate(-12)">' + jet(.7, "#f4f6f8") + '</g></g>' +
      /* the parking garage behind */
      '<rect x="0" y="40" width="400" height="30" fill="#b9b4aa"/>' + [0, 1].map(r => '<rect x="0" y="' + (46 + r * 12) + '" width="400" height="5" fill="#6e6a62"/>').join("") +
      '<path d="M0 70h400v6H0z" fill="#8f8a80"/><path d="M0 76h400" stroke="#3a3f44" stroke-width="2"/>' +
      train +
      /* platform edge and the deck over the boulevard */
      '<rect x="0" y="166" width="400" height="8" fill="#f2c200"/><rect x="0" y="174" width="400" height="20" fill="#a39d92"/>' +
      '<rect x="0" y="194" width="400" height="10" fill="#6b665e"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 8) + '" y="204" width="16" height="56" fill="#8f8a80"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a40"/><path d="M0 248h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      '<rect x="64" y="200" width="272" height="32" rx="3" fill="#111"/><text x="76" y="221" ' + font + ' font-size="13" fill="#fff">Lambert Airport Terminal 2</text>' + badge(312, 217, "RED", MLRED),
      sky("hu1", "#7fc3ec", "#f3e6cf"));
  }

  /* 2. Notebook Paper: the lined sheet, the pencil writing */
  function hunotebook() {
    const lines = Array.from({ length: 9 }, (_, i) => '<path d="M96 ' + (64 + i * 18) + 'h220" stroke="#8ab6e0" stroke-width="1.2"/>').join("");
    const holes = [76, 130, 184].map(y => '<circle cx="104" cy="' + y + '" r="5" fill="#2a2420"/>').join("");
    const written = ['M128 78q10 -8 20 0t20 0t20 0t20 0', 'M128 96q8 -6 16 0t16 0t16 0t16 0t16 0t16 0', 'M128 114q10 -8 20 0t20 0t20 0'].map((d, i) => '<path d="' + d + '" stroke="#1d2a5a" stroke-width="2" fill="none"' + (i === 2 ? ' class="hu-write"' : '') + '/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      '<rect x="0" y="0" width="400" height="260" fill="url(#hu2)"/>' +
      /* lamp glow */
      '<circle class="hu-glow" cx="350" cy="30" r="70" fill="#ffd27a" opacity=".25"/><path d="M330 0l-20 40h80l-20 -40z" fill="#3a3f44"/>' +
      '<g transform="rotate(-4 206 140)"><rect x="90" y="40" width="232" height="190" fill="#fbf8ef" stroke="#d9d2c0" stroke-width="2"/>' + lines +
      '<path d="M120 40v190" stroke="#e8737a" stroke-width="1.5"/>' + holes +
      '<text x="128" y="58" font-family="Permanent Marker, cursive" font-size="13" fill="#1d2a5a">NOTEBOOK PAPER</text>' + written + '</g>' +
      '<g class="hu-pen"><g transform="translate(196 110) rotate(35)"><rect x="0" y="-5" width="80" height="10" fill="' + ORANGE + '" stroke="#7a4a00" stroke-width="1.5"/><path d="M0 -5l-14 5l14 5z" fill="#f1d6a8" stroke="#7a4a00" stroke-width="1"/><path d="M-14 0l5 -2v4z" fill="#333"/><rect x="80" y="-5" width="12" height="10" fill="' + PINK + '"/></g></g>',
      sky("hu2", "#3b2f27", "#1f1a16"));
  }

  /* 3. Kinloch Park, the town square, a jet low overhead into Lambert */
  function hukinloch() {
    return svg(
      '<rect width="400" height="260" fill="url(#hu3)"/>' +
      '<g fill="#fff" opacity=".8"><ellipse cx="80" cy="40" rx="34" ry="10"/><ellipse cx="104" cy="34" rx="20" ry="9"/><ellipse cx="300" cy="56" rx="40" ry="10"/><ellipse cx="326" cy="50" rx="22" ry="9"/></g>' +
      '<g class="hu-jet2"><g transform="translate(0 70) scale(-1 1)">' + jet(1, "#f4f6f8") + '</g></g>' +
      '<g fill="#2f5b2c"><circle cx="30" cy="140" r="40"/><circle cx="84" cy="124" r="32"/><circle cx="310" cy="128" r="34"/><circle cx="370" cy="140" r="40"/></g>' +
      '<rect x="0" y="170" width="400" height="90" fill="#5d8a3c"/><path d="M0 200q200 -14 400 0v60H0z" fill="#4c7a30"/>' +
      /* small one-story houses */
      '<path d="M120 170v-34l26 -18l26 18v34z" fill="#d7c9a8" stroke="#6b5a3e" stroke-width="2"/><rect x="138" y="148" width="14" height="22" fill="#5a3e2a"/>' +
      '<path d="M226 170v-30l22 -16l22 16v30z" fill="#b7c8d6" stroke="#4a5a68" stroke-width="2"/><rect x="242" y="150" width="12" height="20" fill="#3a4a58"/>' +
      /* the hoop */
      '<rect x="330" y="150" width="5" height="70" fill="#555"/><rect x="314" y="138" width="36" height="22" fill="#fff" stroke="#333" stroke-width="2"/><path d="M324 162h16l-3 12h-10z" fill="none" stroke="' + ORANGE + '" stroke-width="2"/>' +
      /* park sign */
      '<rect x="40" y="196" width="6" height="40" fill="#5a3e2a"/><rect x="134" y="196" width="6" height="40" fill="#5a3e2a"/>' +
      '<rect x="24" y="176" width="134" height="40" rx="4" fill="#6b3f1f" stroke="#e8c35a" stroke-width="2"/>' +
      '<text x="91" y="194" text-anchor="middle" ' + font + ' font-size="14" fill="#f4e7c4">KINLOCH PARK</text><text x="91" y="208" text-anchor="middle" ' + font + ' font-size="7" fill="#e8c35a">MISSOURI\'S FIRST BLACK CITY · 1948</text>',
      sky("hu3", "#8fd0f2", "#f7e3c0"));
  }

  /* 4. The Pop, Lock & Drop It floor: roll to the left, roll to the right */
  function huclub() {
    const floor = Array.from({ length: 5 }, (_, r) => Array.from({ length: 10 }, (_, c) =>
      '<rect class="' + ((r + c) % 3 === 0 ? "hu-glow" : "") + ((r + c) % 2 ? " hu-g2" : "") + '" x="' + (c * 40) + '" y="' + (170 + r * 18) + '" width="40" height="18" fill="' + [SKY, PINK, ORANGE][(r + c) % 3] + '" opacity=".55"/>').join("")).join("");
    const ball = '<path d="M200 0v26" stroke="#888" stroke-width="2"/><g class="hu-spin"><circle cx="200" cy="44" r="18" fill="#c9d1da"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (184 + i * 8) + ' 30v28" stroke="#7a8490" stroke-width="1"/>').join("") + '<path d="M182 44h36M184 36h32M184 52h32" stroke="#7a8490" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0a0f1f"/>' +
      '<path class="hu-cone" d="M200 44L60 170h120z" fill="' + SKY + '"/><path class="hu-cone hu-c2" d="M200 44L220 170h120z" fill="' + PINK + '"/>' + ball +
      '<g class="hu-left"><path d="M20 110l40 -26v14h70v24H60v14z" fill="' + SKY + '" stroke="#000" stroke-width="2"/></g>' +
      '<g class="hu-right"><path d="M380 110l-40 -26v14h-70v24h70v14z" fill="' + ORANGE + '" stroke="#000" stroke-width="2"/></g>' +
      '<text x="80" y="150" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + SKY + '">ROLL TO THE LEFT</text>' +
      '<text x="320" y="150" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + ORANGE + '">ROLL TO THE RIGHT</text>' +
      '<text x="200" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="2" fill="#fff">POP</text>' +
      '<text x="200" y="118" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="2" fill="' + PINK + '">LOCK</text>' +
      '<text x="200" y="140" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="2" fill="' + SKY + '" class="hu-blink">DROP IT</text>' +
      '<rect x="0" y="168" width="400" height="92" fill="#000"/>' + floor);
  }

  /* 5. Monroe Ave and Martin Luther King Blvd, Lambert's domed terminal and tower behind */
  function hucorner() {
    /* Terminal 1: four concrete shell vaults with glass ends, the control tower beside it */
    const vaults = [0, 1, 2, 3].map(i => '<path d="M' + (100 + i * 50) + ' 120q25 -44 50 0z" fill="#d8d4cc" stroke="#8a867e" stroke-width="2"/><path d="M' + (108 + i * 50) + ' 120q17 -30 34 0z" fill="#6aa8c8" opacity=".55"/>').join("");
    const tower = '<rect x="318" y="44" width="12" height="80" fill="#cfcac0"/><path d="M308 44h32l-6 -16h-20z" fill="#2b3640" stroke="#8a867e" stroke-width="2"/><rect x="314" y="22" width="20" height="6" fill="#8a867e"/><circle class="hu-blink" cx="324" cy="18" r="3" fill="#ff3b3b"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hu5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 4 ? "" : "hu-glow") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 47) % 40) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<g class="hu-jet"><g transform="rotate(-10)">' + jet(.5, "#e8edf2") + '<circle class="hu-blink" cx="0" cy="0" r="2" fill="#ff3b3b"/></g></g>' +
      '<rect x="90" y="118" width="230" height="8" fill="#8a867e"/>' + vaults + tower +
      '<g fill="#1d3426"><circle cx="30" cy="124" r="30"/><circle cx="76" cy="132" r="20"/><circle cx="360" cy="122" r="30"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#8a4430"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#72351f" stroke-width="1"/>').join("") +
      tag("HITZ COMMITTEE", 16, 160, 14, ORANGE, -3) + tag("HUEY", 30, 210, 56, SKY, -6) + tag("POP LOCK", 196, 180, 18, "#fff", -4) + tag("BABY HUEY", 150, 218, 15, PINK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="86" width="6" height="138" fill="#2f2f2f"/>' + sign(250, 88, 136, "Monroe Ave") + sign(206, 114, 180, "Martin Luther King Blvd") +
      '<g class="hu-sp"><circle cx="150" cy="172" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="hu-sp hu-sp2"><circle cx="156" cy="166" r="2" fill="' + SKY + '" opacity=".6"/></g>',
      sky("hu5", "#14183a", "#c86a3a"));
  }

  window.SCENES = { hustation: hustation, hunotebook: hunotebook, hukinloch: hukinloch, huclub: huclub, hucorner: hucorner };
})();
