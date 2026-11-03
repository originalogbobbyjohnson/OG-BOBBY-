/* DJ Quik producer scenes */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const PRP = "#b98cff", GLD = "#ffcf3d", TEAL = "#2fb6a8", BLU = "#0072bc";
  const X = '<style>@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sy{transform-box:fill-box;transform-origin:50% 100%;animation:sway 4s ease-in-out infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes wob{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.8)}}.wb{transform-box:fill-box;transform-origin:50% 0;animation:wob .7s ease-in-out infinite}</style>';
  const palm = (x, y, h, c) => '<g class="sy"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#5a4632" stroke-width="5" fill="none"/>' +
    [-60, -25, 10, 45, 80, 120].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 18) + ' ' + (-Math.sin(a * Math.PI / 180) * 10 - 6) + ' ' + (Math.cos(a * Math.PI / 180) * 32) + ' ' + (Math.sin(a * Math.PI / 180) * 6 + 8) + '" stroke="' + c + '" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const tape = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="30" height="19" rx="2" fill="' + c + '" stroke="#222" stroke-width="1"/><rect x="' + (x + 5) + '" y="' + (y + 3) + '" width="20" height="5" fill="#f2efe6"/><circle cx="' + (x + 10) + '" cy="' + (y + 13) + '" r="3" fill="#222"/><circle cx="' + (x + 20) + '" cy="' + (y + 13) + '" r="3" fill="#222"/>';

  /* 1. Artesia station on the A Line: the light rail sliding in on its blue band, the black station sign with the A bullet, palms in the late sun */
  function station() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#q1)"/><circle cx="80" cy="70" r="26" fill="#ffe3a0"/>' +
      palm(40, 150, 96, "#3f6b3a") + palm(360, 150, 110, "#3f6b3a") +
      '<rect x="0" y="150" width="400" height="110" fill="#8a8478"/>' +
      '<rect x="20" y="70" width="360" height="10" fill="#d8d2c4"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="80" width="6" height="70" fill="#9aa0a6"/>').join("") +
      '<rect x="110" y="88" width="180" height="30" rx="3" fill="#111"/><text x="126" y="109" ' + font + ' font-size="16" fill="#fff">Artesia</text>' + bullet(262, 103, "A", BLU) +
      '<g class="anim-train"><rect x="0" y="136" width="300" height="56" rx="8" fill="#d7dade" stroke="#6a6e74" stroke-width="2"/>' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (14 + i * 56) + '" y="144" width="40" height="22" rx="3" fill="#2a3a4a"/>').join("") +
      '<rect x="0" y="172" width="300" height="8" fill="' + BLU + '"/><circle cx="292" cy="186" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="192" width="400" height="8" fill="#f2d21c"/><rect x="0" y="200" width="400" height="60" fill="#bdb6a8"/>',
      sky("q1", "#f0a868", "#f8dcae"));
  }

  /* 2. The Compton swap meet, home of the hand-sold tape (his Red Tape era): the big hall, a stall of red cassettes and a boombox, the sign flickering */
  function swapmeet() {
    let tapes = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) tapes += tape(124 + c * 32, 142 + r * 22, (r + c) % 3 ? "#c8202a" : "#e04040");
    return svg(X +
      '<rect width="400" height="260" fill="url(#q2)"/>' + palm(30, 120, 80, "#3f6b3a") + palm(372, 120, 90, "#3f6b3a") +
      '<rect x="40" y="40" width="320" height="170" fill="#e6dccb"/><path d="M30 44l170-28 170 28z" fill="#9a8a78"/>' +
      '<rect x="110" y="54" width="180" height="30" rx="3" fill="#1a1a22" stroke="' + GLD + '" stroke-width="2"/><text class="flk" x="200" y="75" text-anchor="middle" ' + font + ' font-size="17" fill="' + GLD + '" letter-spacing="3">SWAP MEET</text>' +
      '<rect x="100" y="100" width="200" height="110" fill="#3a2a44"/><path d="M100 100h200l-10 16h-180z" fill="' + PRP + '"/>' + tapes +
      '<rect x="110" y="208" width="180" height="6" fill="#5a4030"/>' +
      '<rect x="40" y="132" width="50" height="78" fill="#7a6a5a"/><rect x="310" y="132" width="50" height="78" fill="#7a6a5a"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#5a5a5e"/><path d="M0 238h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 16"/>' +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">THE RED TAPE</text>',
      sky("q2", "#7cc0ec", "#f2e4c4"));
  }

  /* 3. Compton City Hall and the Martin Luther King Jr. Memorial: the tall white monument, the civic center behind, flags moving in the breeze */
  function cityhall() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#q3)"/>' +
      '<rect x="230" y="70" width="150" height="120" fill="#d8cfbf"/>' + [0, 1, 2, 3, 4].map(r => '<rect x="236" y="' + (78 + r * 22) + '" width="138" height="12" fill="#5a6a7a"/>').join("") +
      '<text x="305" y="66" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a" letter-spacing="2">CITY HALL</text>' +
      '<rect x="40" y="130" width="160" height="60" fill="#c8c2b4"/>' +
      '<g fill="#f6f4ee" stroke="#cfcac0"><path d="M88 190l8-160h10l8 160z"/><path d="M118 190l7-140h8l7 140z"/><path d="M62 190l6-110h8l6 110z"/><path d="M146 190l6-100h8l6 100z"/></g>' +
      '<ellipse cx="114" cy="196" rx="74" ry="10" fill="#7fc8e8"/><g class="sp"><circle cx="100" cy="190" r="2" fill="#dff4ff"/><circle cx="128" cy="190" r="2" fill="#dff4ff"/></g><g class="sp sp2"><circle cx="114" cy="188" r="2" fill="#dff4ff"/></g>' +
      '<rect x="210" y="40" width="3" height="150" fill="#888"/><g class="fg"><rect x="213" y="42" width="34" height="20" fill="' + PRP + '"/><rect x="213" y="50" width="34" height="4" fill="' + GLD + '"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#9cbf6a"/><rect x="0" y="230" width="400" height="30" fill="#5a5a5e"/>' + palm(20, 200, 90, "#3f6b3a") + palm(386, 200, 100, "#3f6b3a"),
      sky("q3", "#6fb6e8", "#eaf4fa"));
  }

  /* 4. Mad Science, his studio: the talkbox tube hanging off the mic stand, a bass, the console meters bouncing */
  function studio() {
    let meters = ""; for (let i = 0; i < 12; i++) meters += '<rect class="mt mt' + (1 + i % 5) + '" x="' + (150 + i * 10) + '" y="150" width="6" height="30" fill="' + (i % 4 ? TEAL : GLD) + '"/>';
    return svg(X +
      '<rect width="400" height="260" fill="#16101e"/><rect x="0" y="0" width="400" height="190" fill="#221832"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 50 + 4) + '" y="10" width="42" height="40" fill="#2e2242" stroke="#3a2e52"/>').join("") +
      '<rect x="150" y="60" width="100" height="18" rx="3" fill="#111" stroke="' + PRP + '" stroke-width="2"/><text x="200" y="73" text-anchor="middle" ' + font + ' font-size="10" fill="' + PRP + '" class="flk" letter-spacing="2">MAD SCIENCE</text>' +
      '<rect x="126" y="140" width="148" height="50" rx="3" fill="#2a2a30" stroke="#555"/>' + meters +
      '<path d="M104 200V90" stroke="#888" stroke-width="3"/><rect x="96" y="80" width="16" height="12" rx="4" fill="#333"/><path class="wb" d="M106 88q-30 30 -10 60t20 50" stroke="' + GLD + '" stroke-width="3" fill="none"/>' +
      '<g class="sy"><path d="M320 200l-20-110" stroke="#5a3a1a" stroke-width="6"/><path d="M300 92l-6-20h12z" fill="#3a2a1a"/><ellipse cx="324" cy="196" rx="22" ry="30" fill="' + PRP + '" stroke="#5a3a8a" stroke-width="2"/><circle cx="324" cy="196" r="6" fill="#111"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a2a22"/><rect x="0" y="190" width="400" height="4" fill="#5a4030"/>' +
      '<rect x="30" y="150" width="50" height="40" fill="#111" stroke="#555"/><circle class="th" cx="55" cy="170" r="12" fill="#222" stroke="#777"/>',
      "");
  }

  /* 5. Rosecrans Av and Wilmington Av in Compton: green street signs, QUIK tagged on the wall, the Watts Towers spiking up on the skyline */
  function corner() {
    const tower = (x, h) => '<path d="M' + (x - 10) + ' 130L' + x + ' ' + (130 - h) + 'L' + (x + 10) + ' 130" stroke="#7a6a5a" stroke-width="2.5" fill="none"/>' + [0.25, 0.5, 0.75].map(f => '<path d="M' + (x - 10 + 10 * f) + ' ' + (130 - h * f) + 'h' + (20 - 20 * f) + '" stroke="#7a6a5a" stroke-width="1.5"/>').join("");
    return svg(X +
      '<rect width="400" height="260" fill="url(#q5)"/>' + tower(150, 110) + tower(176, 90) + tower(126, 70) +
      palm(30, 128, 100, "#3f6b3a") + palm(96, 128, 80, "#4f7a3a") + palm(230, 128, 96, "#3f6b3a") +
      '<rect x="0" y="126" width="400" height="98" fill="#e8d6b8"/><rect x="0" y="126" width="400" height="8" fill="#c8b490"/>' +
      tag("DJ QUIK", 30, 196, 50, PRP, -6) + tag("DA QUIKSTA", 50, 218, 16, GLD, -3) + tag("MAD SCIENCE", 168, 218, 16, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#bdb6a8"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(280, 98, 116, "Rosecrans Av") + sign(280, 124, 116, "Wilmington Av") +
      '<rect x="386" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="388" cy="108" r="7" fill="#ffe9a8"/>',
      sky("q5", "#e8a26a", "#f6dcb0"));
  }

  window.SCENES = { station: station, swapmeet: swapmeet, cityhall: cityhall, studio: studio, corner: corner };
})();
