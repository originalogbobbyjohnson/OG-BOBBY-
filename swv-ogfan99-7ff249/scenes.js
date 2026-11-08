/* swv scenes (NYC map, the Bronx: Coko and Lelee, neighborhood friends from the Bronx, Lelee at Walton High; Taj from Bed-Stuy). 400 x 260 SVGs.
   CSS classes and ids prefixed swv- (the page's own anim-train is kept on the train).
   0 Bedford Park Blvd-Lehman College on the 4: the elevated steel el over Jerome Av, a silver 4 train pulling in.
   1 The choir loft: Coko sang in church choirs as a girl (Hezekiah Walker's Love Fellowship choir) - stained glass, gold organ pipes, purple robes on the risers.
   2 Bed-Stuy brownstones in the rain (Taj grew up in Bed-Stuy; "Rain"), umbrellas, puddle rings.
   3 The Bronx living room TV: Lelee watched a TV talent show and dreamed up a girl group - a 1980s TV on the screen, three mic stands, the el outside the window.
   4 Reservoir Av and W 195 St: green signs, SWV tagged on the wall, Walton High School's red-brick Collegiate Gothic tower behind. */
(function () {
  const W = 400, H = 260;
  const PINK = "#ff6fb5", GOLD = "#ffd36a", TEAL = "#44d1c9", PURP = "#6b3fa0", BRICK = "#9c4b36", LIME = "#e7dcc0";
  const css = '<style>' +
    '@keyframes swvnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(14px,-70px);opacity:0}}.swv-note{animation:swvnote 3.2s ease-out infinite}.swv-n2{animation-delay:-1.1s}.swv-n3{animation-delay:-2.2s}' +
    '@keyframes swvflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.swv-flk{animation:swvflick 2.4s infinite}.swv-flk2{animation-delay:-1.2s}' +
    '@keyframes swvrain{from{transform:translateY(-40px)}to{transform:translateY(260px)}}.swv-rain{animation:swvrain 1.1s linear infinite}.swv-r2{animation-delay:-.37s}.swv-r3{animation-delay:-.74s}' +
    '@keyframes swvring{0%{transform:scale(.2);opacity:.9}100%{transform:scale(1.4);opacity:0}}.swv-ring{transform-box:fill-box;transform-origin:50% 50%;animation:swvring 1.6s ease-out infinite}.swv-g2{animation-delay:-.8s}' +
    '@keyframes swvcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.swv-car{animation:swvcar 7s linear infinite}.swv-car2{animation-delay:-3.5s}' +
    '@keyframes swvspot{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.swv-spot{transform-box:fill-box;transform-origin:50% 0;animation:swvspot 4s ease-in-out infinite}' +
    '@keyframes swvglow{0%,100%{opacity:.5}50%{opacity:1}}.swv-glow{animation:swvglow 2.2s ease-in-out infinite}' +
    '@keyframes swvsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.swv-sway{transform-box:fill-box;transform-origin:50% 100%;animation:swvsway 2.6s ease-in-out infinite}' +
    '@keyframes swvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.swv-sp{animation:swvspray 1.4s ease-out infinite}.swv-spb{animation-delay:.5s}' +
    '@keyframes swvrun{from{transform:translateX(-260px)}to{transform:translateX(420px)}}.swv-run{animation:swvrun 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* text with every 9 drawn by hand (round head + straight stem, never a hooked 9). Widths estimated for bold Helvetica. */
  const CW = { " ": .278, "W": .944, "S": .667, "t": .333, "1": .556, "5": .556, "0": .556, "2": .556, "3": .556, "4": .556, "6": .556, "7": .556, "8": .556, "9": .556, ".": .278, "-": .333, "'": .238 };
  const tw = (s, sz) => [...s].reduce((a, ch) => a + (CW[ch] || .6) * sz, 0);
  const nine = (x, y, sz, c) => { const w = sz * 0.15, r = sz * 0.175, cx = x + sz * 0.08 + r + w / 2, cy = y - sz * 0.7 + r + w / 2; return '<circle cx="' + cx.toFixed(2) + '" cy="' + cy.toFixed(2) + '" r="' + r.toFixed(2) + '" fill="none" stroke="' + c + '" stroke-width="' + w.toFixed(2) + '"/><path d="M' + (cx + r).toFixed(2) + ' ' + (cy - r * .2).toFixed(2) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w.toFixed(2) + '"/>'; };
  const txt9 = (s, x, y, sz, c, anchor, extra) => { if (s.indexOf("9") < 0) return '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "start") + '" ' + font + ' font-size="' + sz + '" fill="' + c + '"' + (extra || "") + '>' + s + '</text>'; const total = tw(s, sz); let cx = anchor === "middle" ? x - total / 2 : anchor === "end" ? x - total : x; let out = ""; s.split("9").forEach((part, i) => { if (i) { out += nine(cx, y, sz, c); cx += .556 * sz; } if (part) { const lead = part.length - part.replace(/^ +/, "").length; cx += lead * .278 * sz; part = part.slice(lead); } if (part) { out += '<text x="' + cx.toFixed(1) + '" y="' + y + '" ' + font + ' font-size="' + sz + '" fill="' + c + '"' + (extra || "") + '>' + part + '</text>'; cx += tw(part, sz); } }); return out; };
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt9(txt, x + w / 2, y + 16, 13, "#fff", "middle");
  const bullet = (x, y, r, txt, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><text x="' + x + '" y="' + (y + r * .42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.25) + '" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const note = (cls, x, y, c) => '<g class="swv-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const rain = (n, seed) => Array.from({ length: n }, (_, i) => { const x = (i * 37 + seed * 11) % 400, y = (i * 53) % 220; return '<path class="swv-rain swv-r' + (1 + i % 3) + '" d="M' + x + ' ' + y + 'l-3 12" stroke="#bfe6ff" stroke-width="1.4" opacity=".7"/>'; }).join("");
  /* Walton High: red brick Collegiate Gothic block with limestone trim and a central tower */
  const walton = (x, y, s) => {
    const g = (v) => (v * s).toFixed(1);
    let win = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) { if (c === 4 || c === 5) continue; win += '<rect x="' + g(8 + c * 18) + '" y="' + g(34 + r * 20) + '" width="' + g(10) + '" height="' + g(13) + '" fill="' + ((r + c) % 4 ? "#2a2440" : "#ffe3a0") + '"/>'; }
    return '<g transform="translate(' + x + ' ' + y + ')">' +
      '<rect x="0" y="' + g(26) + '" width="' + g(190) + '" height="' + g(74) + '" fill="' + BRICK + '"/>' +
      '<rect x="0" y="' + g(24) + '" width="' + g(190) + '" height="' + g(4) + '" fill="' + LIME + '"/>' + win +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + g(i * 16.5) + '" y="' + g(20) + '" width="' + g(8) + '" height="' + g(5) + '" fill="' + LIME + '"/>').join("") +
      '<rect x="' + g(72) + '" y="' + g(-14) + '" width="' + g(46) + '" height="' + g(114) + '" fill="#a9553e"/>' +
      '<rect x="' + g(72) + '" y="' + g(-14) + '" width="' + g(46) + '" height="' + g(4) + '" fill="' + LIME + '"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + g(72 + i * 13) + '" y="' + g(-20) + '" width="' + g(7) + '" height="' + g(7) + '" fill="' + LIME + '"/>').join("") +
      '<path d="M' + g(84) + ' ' + g(40) + 'v' + g(-30) + 'q' + g(11) + ' ' + g(-14) + ' ' + g(22) + ' 0v' + g(30) + 'z" fill="#2a2440" stroke="' + LIME + '" stroke-width="' + g(2) + '"/>' +
      '<path d="M' + g(95) + ' ' + g(10) + 'v' + g(30) + 'M' + g(84) + ' ' + g(24) + 'h' + g(22) + '" stroke="' + LIME + '" stroke-width="' + g(1.5) + '"/>' +
      '<path d="M' + g(82) + ' ' + g(100) + 'v' + g(-26) + 'q' + g(13) + ' ' + g(-14) + ' ' + g(26) + ' 0v' + g(26) + 'z" fill="#3a2a22" stroke="' + LIME + '" stroke-width="' + g(2.5) + '"/>' +
      '<rect x="' + g(76) + '" y="' + g(56) + '" width="' + g(38) + '" height="' + g(7) + '" fill="' + LIME + '"/>' +
      '<text x="' + g(95) + '" y="' + g(61.6) + '" text-anchor="middle" ' + font + ' font-size="' + g(5) + '" fill="#5a3a2a" letter-spacing="' + g(.6) + '">WALTON H.S.</text></g>';
  };
  const brownstone = (x, w, h, base, lit) => {
    let win = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) win += '<rect class="' + (lit && (r + c) % 3 === 0 ? "swv-flk" : "") + '" x="' + (x + 8 + c * (w - 16) / 3) + '" y="' + (base - h + 14 + r * 30) + '" width="' + ((w - 16) / 3 - 8) + '" height="18" rx="1" fill="' + ((r * 3 + c + x) % 4 ? "#2b2233" : "#ffd98a") + '"/>';
    return '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#6e4532"/><rect x="' + (x - 2) + '" y="' + (base - h - 6) + '" width="' + (w + 4) + '" height="8" fill="#4a2e22"/>' + win +
      '<path d="M' + (x + w - 34) + ' ' + base + 'l18 -26h14v26z" fill="#5a3828"/><rect x="' + (x + w - 20) + '" y="' + (base - 46) + '" width="14" height="22" fill="#2a1a12"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (x + w - 34 + i * 3.6) + ' ' + (base - i * 5.2) + 'h' + (16 - i * 0.4) + '" stroke="#7d5240" stroke-width="1.2"/>').join("");
  };

  /* 0. Bedford Park Blvd-Lehman College on the 4, up on the Jerome Av el */
  function swvstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (30 + i * 42) + '" y="80" width="26" height="18" rx="3" fill="#d8ecfa" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="14" y="70" width="326" height="52" rx="8" fill="#c7ccd3" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="14" y="104" width="326" height="4" fill="#8a9098"/>' + bullet(322, 88, 9, "4", "#00933c") +
      '<rect x="150" y="74" width="22" height="46" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/><circle cx="334" cy="114" r="3.5" fill="#fff6c2"/></g>';
    const el = '<rect x="0" y="122" width="400" height="10" fill="#4d6b5a"/><rect x="0" y="132" width="400" height="5" fill="#3a5446"/>' +
      Array.from({ length: 29 }, (_, i) => '<path d="M' + (i * 14) + ' 132l7 5l7 -5" stroke="#2c4034" stroke-width="1.2" fill="none"/>').join("") +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="137" width="8" height="78" fill="#4d6b5a"/><path d="M' + (x - 18) + ' 137l22 24l22 -24" stroke="#4d6b5a" stroke-width="4" fill="none"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#swvs0)"/>' +
      '<g fill="#3a2c48">' + [[0, 130, 60, 90], [70, 146, 50, 70], [290, 126, 50, 90], [344, 140, 56, 76]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '"/>').join("") + '</g>' +
      '<rect x="0" y="44" width="400" height="8" fill="#4d6b5a"/>' + [16, 116, 216, 316].map(x => '<rect x="' + x + '" y="48" width="6" height="74" fill="#4d6b5a"/>').join("") +
      '<path d="M0 44l40 -14h320l40 14z" fill="#3e5a4b"/>' +
      tr + '<rect x="0" y="120" width="400" height="4" fill="#f2c200"/>' + el +
      '<rect x="0" y="214" width="400" height="46" fill="#3d3d42"/><path d="M0 238h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="swv-car"><rect x="0" y="224" width="54" height="13" rx="5" fill="#f2c200"/><rect x="12" y="216" width="30" height="10" rx="3" fill="#f2c200"/><circle cx="12" cy="238" r="4.5" fill="#111"/><circle cx="42" cy="238" r="4.5" fill="#111"/></g>' +
      '<g class="swv-car swv-car2"><rect x="0" y="242" width="60" height="13" rx="5" fill="' + PINK + '"/><circle cx="14" cy="256" r="4.5" fill="#111"/><circle cx="46" cy="256" r="4.5" fill="#111"/></g>' +
      '<rect x="62" y="4" width="276" height="34" rx="3" fill="#111"/><rect x="62" y="4" width="276" height="3" fill="#fff"/>' +
      '<text x="74" y="21" ' + font + ' font-size="14" fill="#fff">Bedford Park Blvd</text><text x="74" y="34" ' + font + ' font-size="10" fill="#fff">Lehman College</text>' + bullet(318, 21, 11, "4", "#00933c") +
      '<text x="200" y="208" text-anchor="middle" ' + font + ' font-size="8" fill="#e8e2d0" letter-spacing="2">JEROME AV</text>',
      sky("swvs0", "#2b1d4e", "#e7839c"));
  }

  /* 1. The choir loft */
  function swvchoir() {
    const glass = (x) => '<g><path d="M' + x + ' 120v-62q24 -30 48 0v62z" fill="#1d1430" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path class="swv-glow" d="M' + (x + 4) + ' 116v-56q20 -24 40 0v56z" fill="url(#swvsg)"/>' +
      '<path d="M' + (x + 24) + ' 36v84M' + (x + 4) + ' 86h40M' + (x + 4) + ' 62h40" stroke="#1d1430" stroke-width="2"/><circle cx="' + (x + 24) + '" cy="50" r="7" fill="' + GOLD + '" opacity=".8"/></g>';
    const pipes = Array.from({ length: 11 }, (_, i) => { const h = 60 - Math.abs(i - 5) * 8; return '<rect x="' + (150 + i * 9) + '" y="' + (100 - h) + '" width="6" height="' + h + '" rx="3" fill="#d9b25a" stroke="#8a6a1e" stroke-width="1"/>'; }).join("");
    const robes = (y, n, x0) => Array.from({ length: n }, (_, i) => '<g class="swv-sway" style="animation-delay:-' + (i * .3) + 's"><path d="M' + (x0 + i * 30) + ' ' + y + 'q12 -34 24 0z" fill="' + PURP + '"/><path d="M' + (x0 + 8 + i * 30) + ' ' + (y - 22) + 'l4 22l4 -22" stroke="' + GOLD + '" stroke-width="3" fill="none"/><circle cx="' + (x0 + 12 + i * 30) + '" cy="' + (y - 30) + '" r="6" fill="#3a2440"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#swvs1)"/>' +
      glass(20) + glass(332) + pipes +
      '<rect x="140" y="100" width="120" height="8" fill="#8a6a1e"/>' +
      '<rect x="0" y="150" width="400" height="12" fill="#5a3422"/><rect x="0" y="186" width="400" height="12" fill="#5a3422"/>' +
      robes(152, 13, 6) + robes(188, 13, 20) +
      '<rect x="0" y="198" width="400" height="62" fill="#3a2016"/><rect x="0" y="198" width="400" height="4" fill="#8a6a1e"/>' +
      '<rect x="150" y="214" width="100" height="30" rx="3" fill="#6a3d26" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="234" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="2">CHOIR</text>' +
      [60, 340].map(x => '<rect x="' + (x - 3) + '" y="214" width="6" height="26" fill="#f3ead2"/><path class="swv-flk" d="M' + x + ' 204q-5 6 0 10q5 -4 0 -10z" fill="#ffcf5a"/>').join("") +
      note("", 120, 140, GOLD) + note("swv-n2", 200, 132, PINK) + note("swv-n3", 280, 140, TEAL),
      sky("swvs1", "#1a1028", "#4a2a3a") + '<linearGradient id="swvsg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff6fb5"/><stop offset=".35" stop-color="#ffd36a"/><stop offset=".7" stop-color="#44d1c9"/><stop offset="1" stop-color="#6b3fa0"/></linearGradient>');
  }

  /* 2. Bed-Stuy brownstones in the rain */
  function swvbedstuy() {
    const umb = (x, y, c, d) => '<g class="swv-run" style="animation-delay:' + d + 's;animation-duration:11s"><path d="M' + x + ' ' + y + 'q18 -20 36 0z" fill="' + c + '"/><path d="M' + (x + 18) + ' ' + y + 'v22q0 4 -4 4" stroke="#222" stroke-width="2" fill="none"/><rect x="' + (x + 12) + '" y="' + (y + 4) + '" width="12" height="20" rx="3" fill="#2a2a34"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#swvs2)"/>' +
      brownstone(0, 100, 150, 200, true) + brownstone(100, 100, 140, 200, true) + brownstone(200, 100, 150, 200, true) + brownstone(300, 100, 144, 200, true) +
      '<rect x="0" y="200" width="400" height="10" fill="#8a8680"/><rect x="0" y="210" width="400" height="50" fill="#2e3340"/>' +
      '<rect x="40" y="226" width="80" height="6" rx="3" fill="#4a6078" opacity=".7"/><rect x="250" y="236" width="100" height="6" rx="3" fill="#4a6078" opacity=".7"/>' +
      '<ellipse class="swv-ring" cx="80" cy="229" rx="16" ry="3" fill="none" stroke="#bfe6ff" stroke-width="1.2"/><ellipse class="swv-ring swv-g2" cx="300" cy="239" rx="18" ry="3" fill="none" stroke="#bfe6ff" stroke-width="1.2"/>' +
      '<rect x="356" y="120" width="5" height="90" fill="#2f2f2f"/><circle class="swv-flk" cx="358" cy="118" r="7" fill="#ffe9a8"/>' +
      umb(0, 198, PINK, -2) + umb(0, 206, TEAL, -7) +
      rain(48, 3) +
      '<rect x="10" y="10" width="124" height="24" rx="3" fill="#111" opacity=".85"/><text x="72" y="27" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="2">BED-STUY</text>',
      sky("swvs2", "#2b3346", "#59607a"));
  }

  /* 3. The Bronx living room TV: a girl group is born */
  function swvtv() {
    const mic = (x) => '<g><rect x="' + (x - 1.5) + '" y="62" width="3" height="40" fill="#cfcfd6"/><ellipse cx="' + x + '" cy="58" rx="4" ry="6" fill="#2a2a34" stroke="#cfcfd6" stroke-width="1.5"/><path d="M' + (x - 10) + ' 104h20" stroke="#cfcfd6" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a2a3e"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="10" height="200" fill="#43304a"/>').join("") +
      '<rect x="270" y="24" width="110" height="90" fill="#1a2440" stroke="#d8cbb0" stroke-width="5"/><path d="M325 24v90M270 69h110" stroke="#d8cbb0" stroke-width="3"/>' +
      '<rect x="270" y="80" width="110" height="5" fill="#4d6b5a"/>' + [282, 322, 362].map(x => '<rect x="' + x + '" y="85" width="4" height="29" fill="#4d6b5a"/>').join("") +
      '<g class="swv-run" style="animation-duration:6s"><rect x="0" y="70" width="90" height="10" rx="2" fill="#c7ccd3"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6a4a3a"/><path d="M0 200h400" stroke="#4a3022" stroke-width="3"/>' +
      '<rect x="40" y="70" width="200" height="140" rx="10" fill="#5a3a26" stroke="#3a2216" stroke-width="3"/>' +
      '<rect x="54" y="82" width="140" height="112" rx="14" fill="#140a1c"/>' +
      '<g><clipPath id="swvtvc"><rect x="54" y="82" width="140" height="112" rx="14"/></clipPath><g clip-path="url(#swvtvc)">' +
      '<rect x="54" y="82" width="140" height="112" fill="#2a0d2a"/><path d="M54 82h140v20q-70 10 -140 0z" fill="#9a1d3a"/>' +
      '<path class="swv-spot" d="M124 82l-30 112h60z" fill="#fff4c2" opacity=".28"/>' +
      '<rect x="54" y="170" width="140" height="24" fill="#4a2a20"/>' +
      '<g transform="translate(44 70)">' + mic(46) + mic(80) + mic(114) + '</g>' +
      '<text class="swv-glow" x="124" y="114" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">TALENT NIGHT</text>' +
      '</g></g>' +
      '<circle cx="216" cy="104" r="8" fill="#b08a5a" stroke="#3a2216" stroke-width="2"/><circle cx="216" cy="130" r="8" fill="#b08a5a" stroke="#3a2216" stroke-width="2"/>' +
      [150, 160, 170, 180].map(y => '<rect x="206" y="' + y + '" width="20" height="3" fill="#3a2216"/>').join("") +
      '<path d="M100 70l-24 -40M160 70l26 -42" stroke="#cfcfd6" stroke-width="2.5"/><circle cx="76" cy="30" r="3" fill="#cfcfd6"/><circle cx="186" cy="28" r="3" fill="#cfcfd6"/>' +
      '<rect x="60" y="210" width="160" height="14" fill="#3a2216"/>' +
      note("", 248, 150, PINK) + note("swv-n2", 262, 140, GOLD) + note("swv-n3", 30, 150, TEAL),
      "");
  }

  /* 4. Reservoir Av and W 195 St, Walton High behind */
  function swvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#swvs4)"/>' +
      walton(100, 28, 1.05) +
      '<rect x="0" y="124" width="400" height="100" fill="#c9b79a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (132 + i * 8) + 'h400" stroke="#b6a284" stroke-width="1"/>').join("") +
      '<path d="M0 124h400" stroke="#6e5f4c" stroke-width="3"/>' +
      tag("SWV", 20, 196, 58, PINK, -6) + tag("RIGHT HERE", 150, 172, 20, GOLD, -4) + tag("COKO TAJ LELEE", 130, 210, 17, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5a60"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<rect x="340" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(270, 94, 124, "Reservoir Av") + sign(282, 120, 100, "W 195 St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="swv-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="swv-sp"><circle cx="128" cy="150" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="swv-sp swv-spb"><circle cx="134" cy="144" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("swvs4", "#241840", "#e98a7a"));
  }

  window.SCENES = { swvstation: swvstation, swvchoir: swvchoir, swvbedstuy: swvbedstuy, swvtv: swvtv, swvcorner: swvcorner };
})();
