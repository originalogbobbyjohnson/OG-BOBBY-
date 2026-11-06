/* chillmoody scenes (Regions tab: Philadelphia; West Philly). CSS classes prefixed cm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cmsteam{0%{transform:translateY(0) scale(1);opacity:.75}100%{transform:translateY(-40px) scale(1.6);opacity:0}}.cm-steam{transform-box:fill-box;transform-origin:50% 100%;animation:cmsteam 2.6s ease-out infinite}.cm-steam2{animation-delay:-1.3s}' +
    '@keyframes cmglow{0%,100%{opacity:.45}50%{opacity:1}}.cm-glow{animation:cmglow 2.4s ease-in-out infinite}.cm-glow2{animation-delay:-1.2s}' +
    '@keyframes cmroll{0%{transform:translateX(0)}70%{transform:translateX(118px)}100%{transform:translateX(118px);opacity:0}}.cm-ball{animation:cmroll 3.4s ease-out infinite}' +
    '@keyframes cmflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-9deg)}}.cm-flag{transform-box:fill-box;transform-origin:0 50%;animation:cmflag 1.3s ease-in-out infinite}' +
    '@keyframes cmswing{0%,100%{transform:rotate(-26deg)}50%{transform:rotate(8deg)}}.cm-swing{transform-box:fill-box;transform-origin:50% 0%;animation:cmswing 3.4s ease-in-out infinite}' +
    '@keyframes cmnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-66px);opacity:0}}.cm-note{animation:cmnote 3.2s ease-out infinite}.cm-n2{animation-delay:-1.1s}.cm-n3{animation-delay:-2.2s}' +
    '@keyframes cmcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.cm-car{animation:cmcar 7s linear infinite}.cm-car2{animation-duration:9.5s;animation-delay:-4s}' +
    '@keyframes cmsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.cm-sp{animation:cmsp 1.4s ease-out infinite}.cm-sp2{animation-delay:.5s}' +
    '@keyframes cmbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-26px)}}.cm-bird{animation:cmbird 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "cm-glow") + '" cx="' + ((i * 83) % 400) + '" cy="' + (8 + (i * 41) % 62) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="cm-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="5" ry="3.6" fill="' + c + '"/><rect x="3.6" y="-18" width="2" height="18" fill="' + c + '"/><path d="M5.6 -18q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const GOLD = "#f4c95d", TEAL = "#3fb6a8", PINK = "#e86f8a", MFL = "#0f75bc";

  /* 1. 56th St on the Market-Frankford Line, seen from Market St below: the El's steel girders over the street, the station house up top with the black sign and the blue MFL tile, the silver car with the blue stripe sliding in, West Philly storefronts and traffic underneath */
  function chstation() {
    const tr = '<g class="anim-train"><rect x="40" y="58" width="300" height="46" rx="6" fill="#cfd4da" stroke="#717880" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="66" width="28" height="18" rx="2" fill="#1d2833"/>').join("") +
      '<rect x="40" y="88" width="300" height="5" fill="' + MFL + '"/><rect x="322" y="62" width="18" height="40" rx="4" fill="#a8afb7"/><circle cx="333" cy="96" r="3" fill="#fff6c2"/></g>';
    const shops = [["#7a3d2e", 0], ["#3f5a6e", 70], ["#8a5a2a", 140], ["#5a3a5e", 210], ["#7a3d2e", 280], ["#2f5a46", 340]].map(s => '<rect x="' + s[1] + '" y="132" width="62" height="78" fill="' + s[0] + '"/><rect x="' + (s[1] + 6) + '" y="176" width="50" height="34" fill="#f6dfa0" opacity=".55"/><rect x="' + (s[1] + 4) + '" y="166" width="54" height="8" fill="' + (s[1] % 140 ? TEAL : PINK) + '"/>' +
      '<rect x="' + (s[1] + 10) + '" y="140" width="14" height="18" fill="#1d2833"/><rect x="' + (s[1] + 36) + '" y="140" width="14" height="18" fill="#1d2833"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cm1)"/>' +
      shops +
      '<rect x="0" y="104" width="400" height="16" fill="#4d5560"/><rect x="0" y="118" width="400" height="5" fill="#363c44"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 104l10 14l10 -14" stroke="#363c44" stroke-width="2" fill="none"/>').join("") +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 5) + '" y="120" width="10" height="100" fill="#4d5560"/><rect x="' + (x - 9) + '" y="214" width="18" height="6" fill="#363c44"/>').join("") +
      '<rect x="0" y="52" width="400" height="6" fill="#363c44"/>' + tr +
      '<rect x="0" y="24" width="400" height="8" fill="#2c3138"/>' + [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="30" width="6" height="24" fill="#2c3138"/>').join("") +
      '<rect x="120" y="4" width="150" height="26" rx="3" fill="#111"/><text x="134" y="23" ' + font + ' font-size="15" fill="#fff">56th St</text>' + badge(212, 17, "MFL", MFL) +
      '<rect x="0" y="220" width="400" height="40" fill="#5b5953"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="cm-car"><rect x="0" y="226" width="58" height="13" rx="5" fill="' + PINK + '"/><rect x="12" y="219" width="32" height="9" rx="3" fill="' + PINK + '"/><circle cx="12" cy="239" r="4" fill="#111"/><circle cx="46" cy="239" r="4" fill="#111"/></g>' +
      '<g class="cm-car cm-car2"><rect x="0" y="244" width="62" height="12" rx="5" fill="' + TEAL + '"/><rect x="14" y="238" width="32" height="8" rx="3" fill="' + TEAL + '"/><circle cx="12" cy="256" r="3.5" fill="#111"/><circle cx="50" cy="256" r="3.5" fill="#111"/></g>',
      sky("cm1", "#ff9e6a", "#ffe2b8"));
  }

  /* 2. The old firehouse brewpub on Baltimore Ave in Cedar Park, where his nicethings cream ale was brewed: red brick, two arched engine bays rolled open, copper brew kettles steaming inside, string lights, a cooler of nicethings cans, the trolley wire overhead */
  function chbrew() {
    const bay = x => '<path d="M' + x + ' 208v-48a36 36 0 0 1 72 0v48z" fill="#2a1a12"/><path d="M' + x + ' 160a36 36 0 0 1 72 0" fill="none" stroke="#e9dcc2" stroke-width="5"/>' +
      '<ellipse cx="' + (x + 24) + '" cy="196" rx="16" ry="5" fill="#8a4a1e"/><rect x="' + (x + 8) + '" y="166" width="32" height="30" fill="#c8793a"/><ellipse cx="' + (x + 24) + '" cy="166" rx="16" ry="6" fill="#e3a05e"/>' +
      '<rect x="' + (x + 44) + '" y="176" width="22" height="22" fill="#b56a30"/><ellipse cx="' + (x + 55) + '" cy="176" rx="11" ry="4" fill="#dc9a5a"/>' +
      '<g class="cm-steam"><ellipse cx="' + (x + 24) + '" cy="156" rx="8" ry="6" fill="#fff" opacity=".6"/></g><g class="cm-steam cm-steam2"><ellipse cx="' + (x + 30) + '" cy="152" rx="6" ry="5" fill="#fff" opacity=".5"/></g>';
    const bulbs = Array.from({ length: 15 }, (_, i) => { const x = 20 + i * 26, y = 16 + Math.sin(i / 14 * Math.PI) * 8; return '<circle class="cm-glow' + (i % 2 ? " cm-glow2" : "") + '" cx="' + x + '" cy="' + y + '" r="3" fill="#ffe08a"/>'; }).join("");
    const brick = Array.from({ length: 14 }, (_, i) => '<path d="M70 ' + (40 + i * 12) + 'h260" stroke="#7d2f22" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cm2)"/>' + stars(18) +
      '<path d="M0 30h400" stroke="#222" stroke-width="1.5"/>' +
      '<rect x="0" y="120" width="70" height="90" fill="#5a4a3e"/><rect x="330" y="110" width="70" height="100" fill="#4e4a52"/>' +
      '<rect x="70" y="36" width="260" height="174" fill="#a8432f"/>' + brick +
      '<rect x="66" y="30" width="268" height="10" fill="#e9dcc2"/><rect x="66" y="98" width="268" height="6" fill="#e9dcc2"/>' +
      [96, 156, 216, 276].map(x => '<rect x="' + x + '" y="50" width="28" height="40" fill="#ffd98a" opacity=".75"/><path d="M' + (x + 14) + ' 50v40M' + x + ' 70h28" stroke="#5a2a1e" stroke-width="2"/>').join("") +
      '<rect x="150" y="104" width="100" height="16" fill="#1e1e1e"/><text x="200" y="116" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">ENGINE HOUSE</text>' +
      bay(104) + bay(224) + '<path d="M0 13Q200 34 400 13" stroke="#222" stroke-width="1.2" fill="none"/>' + bulbs +
      '<rect x="0" y="208" width="400" height="52" fill="#8e8a84"/><rect x="0" y="206" width="400" height="4" fill="#d8d2c4"/>' +
      '<g transform="translate(176 214)"><rect x="0" y="0" width="48" height="26" rx="3" fill="' + TEAL + '" stroke="#1d5a52" stroke-width="2"/>' +
      [6, 18, 30].map(x => '<rect x="' + x + '" y="-12" width="10" height="16" rx="2" fill="' + GOLD + '"/><rect x="' + x + '" y="-6" width="10" height="5" fill="' + PINK + '"/>').join("") +
      '<text x="24" y="17" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">nicethings</text></g>' +
      '<g class="cm-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#222" stroke-width="1.6" fill="none"/></g>',
      sky("cm2", "#1b2a4a", "#6a4a7a"));
  }

  /* 3. We Golf Now, his youth golf program: a putting green on a sunny West Philly afternoon, the WE GOLF NOW banner on the fence, a kid's putter swinging and the ball rolling toward the cup, the flag flapping, the skyline far off */
  function chgolf() {
    return svg(
      '<rect width="400" height="260" fill="url(#cm3)"/>' +
      '<circle cx="340" cy="44" r="20" fill="#fff3b0"/>' +
      '<g fill="#8fa9c4"><rect x="20" y="80" width="18" height="44"/><rect x="42" y="66" width="14" height="58"/><path d="M42 66l7 -10 7 10z"/><rect x="60" y="88" width="20" height="36"/><rect x="300" y="74" width="16" height="50"/><rect x="320" y="86" width="22" height="38"/></g>' +
      '<path d="M0 124q100 -14 200 -6t200 4v20H0z" fill="#3d7a3a"/>' +
      '<rect x="0" y="128" width="400" height="132" fill="#4f9a45"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="128" width="17" height="132" fill="#56a34b" opacity=".6"/>').join("") +
      '<rect x="40" y="108" width="320" height="26" fill="#2b2b2b" opacity=".0"/>' +
      Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 112v28" stroke="#9aa0a6" stroke-width="2"/>').join("") + '<path d="M0 114h400M0 126h400M0 138h400" stroke="#9aa0a6" stroke-width="1.5"/>' +
      '<rect x="110" y="108" width="180" height="26" rx="3" fill="' + TEAL + '" stroke="#fff" stroke-width="2"/><text x="200" y="127" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="2">WE GOLF NOW</text>' +
      '<ellipse cx="220" cy="206" rx="170" ry="42" fill="#6cc25a"/><ellipse cx="220" cy="206" rx="170" ry="42" fill="none" stroke="#3d8a34" stroke-width="2"/>' +
      '<ellipse cx="312" cy="206" rx="9" ry="4" fill="#1a1a1a"/>' +
      '<rect x="310" y="132" width="3" height="74" fill="#f2f2f2"/><g class="cm-flag"><path d="M313 134h34l-6 10 6 10h-34z" fill="' + PINK + '"/></g>' +
      '<g class="cm-ball"><circle cx="190" cy="206" r="4" fill="#fff" stroke="#bbb" stroke-width="1"/></g>' +
      '<g transform="translate(150 150)"><circle cx="0" cy="0" r="8" fill="#3a2a22"/><rect x="-8" y="8" width="16" height="26" rx="5" fill="' + GOLD + '"/><rect x="-7" y="34" width="6" height="20" fill="#2a3a5a"/><rect x="1" y="34" width="6" height="20" fill="#2a3a5a"/>' +
      '<g class="cm-swing"><path d="M0 14l10 40" stroke="#c9ced4" stroke-width="2.5"/><rect x="6" y="52" width="14" height="5" rx="1" fill="#c9ced4"/></g></g>' +
      '<g transform="translate(56 166)"><rect x="0" y="0" width="22" height="42" rx="6" fill="' + PINK + '"/><path d="M4 0l-4 -18M10 0l2 -20M16 0l6 -16" stroke="#c9ced4" stroke-width="2.5"/><rect x="2" y="10" width="18" height="4" fill="#fff" opacity=".6"/></g>' +
      '<g class="cm-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#2a3a4a" stroke-width="1.6" fill="none"/></g>',
      sky("cm3", "#7ec4ef", "#e6f4fb"));
  }

  /* 4. The Tiny Desk in Washington, where he played with Donn T as &More: the cluttered office desk, crammed bookshelves, the upright bass leaning, the lamp glowing, two mics up, notes floating */
  function chdesk() {
    const books = (x, y, w) => { let s = "", cx = x; const cs = ["#c0392b", "#2c7fb8", "#e8b43a", "#3a8a5a", "#7a4a9a", "#d86a3a", "#4a5a6a", "#b85a7a"]; let i = 0; while (cx < x + w - 6) { const bw = 6 + (i * 7) % 7, bh = 22 + (i * 5) % 12; s += '<rect x="' + cx + '" y="' + (y - bh) + '" width="' + bw + '" height="' + bh + '" fill="' + cs[i % cs.length] + '"/>'; cx += bw + 1; i++; } return s; };
    return svg(
      '<rect width="400" height="260" fill="#efe4cf"/>' +
      '<rect x="0" y="0" width="400" height="168" fill="#e7dac0"/>' +
      [[20, 30, 150], [20, 76, 150], [20, 122, 150], [240, 30, 150], [240, 76, 150], [240, 122, 150]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="4" fill="#8a6a44"/>' + books(b[0] + 2, b[1], b[2] - 4)).join("") +
      '<rect x="18" y="0" width="4" height="168" fill="#8a6a44"/><rect x="168" y="0" width="4" height="168" fill="#8a6a44"/><rect x="238" y="0" width="4" height="168" fill="#8a6a44"/><rect x="388" y="0" width="4" height="168" fill="#8a6a44"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#9a7a56"/>' +
      '<rect x="40" y="176" width="320" height="14" fill="#6a4a2e"/><rect x="50" y="190" width="10" height="70" fill="#5a3e26"/><rect x="340" y="190" width="10" height="70" fill="#5a3e26"/>' +
      '<g transform="translate(300 96)"><path d="M0 0q-14 20 -10 44q-12 14 -6 34q10 18 32 10q16 -10 6 -30q6 -24 -10 -44q-6 -10 -12 -14z" fill="#9a5a2a" stroke="#5a3418" stroke-width="2"/><rect x="2" y="-56" width="5" height="60" fill="#3a2414"/><path d="M4 -50v120" stroke="#e8e0c8" stroke-width=".8"/></g>' +
      '<g transform="translate(76 128)"><rect x="-2" y="0" width="4" height="48" fill="#3a3a3a"/><path d="M0 0l20 -16" stroke="#3a3a3a" stroke-width="3"/><path d="M14 -22l14 -6 4 12 -14 6z" fill="#4a4a4a"/><path class="cm-glow" d="M30 -18l50 60h-60z" fill="#fff2b0" opacity=".35"/></g>' +
      [[170, 120], [226, 120]].map(m => '<rect x="' + (m[0] - 1.5) + '" y="' + m[1] + '" width="3" height="56" fill="#2a2a2a"/><rect x="' + (m[0] - 5) + '" y="' + (m[1] - 16) + '" width="10" height="18" rx="5" fill="#3a3a3a"/><path d="M' + (m[0] - 5) + ' ' + (m[1] - 8) + 'h10" stroke="#8a8a8a" stroke-width="1"/>').join("") +
      '<rect x="120" y="164" width="40" height="12" rx="2" fill="#2a2a2a"/><rect x="250" y="160" width="26" height="16" rx="2" fill="' + TEAL + '"/><rect x="254" y="148" width="4" height="12" fill="#5a8a3a"/><circle cx="256" cy="146" r="7" fill="#6aa84a"/>' +
      note(186, 110, PINK, "") + note(214, 106, GOLD, "cm-n2") + note(200, 100, TEAL, "cm-n3"),
      "");
  }

  /* 5. N 56th St and Lansdowne Ave, West Philly, the block he grew up on: green signs, CHILL MOODY tagged on the wall, the dome of Memorial Hall in Fairmount Park glowing at dusk behind */
  function chcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cm5)"/>' + stars(12) +
      '<g fill="#3a3550"><rect x="0" y="92" width="80" height="46"/><rect x="320" y="84" width="80" height="54"/></g>' +
      '<g transform="translate(200 0)"><rect x="-96" y="96" width="192" height="42" fill="#6a6474"/>' +
      [-80, -48, -16, 16, 48].map(x => '<rect x="' + x + '" y="104" width="22" height="26" rx="11" fill="#ffd98a" opacity=".55"/>').join("") +
      '<rect x="-44" y="70" width="88" height="28" fill="#7a7484"/><path d="M-40 70q40 -66 80 0z" fill="#8a849a"/><path d="M-40 70q40 -66 80 0" fill="none" stroke="#c9c0d8" stroke-width="2"/>' +
      '<rect x="-6" y="16" width="12" height="20" fill="#8a849a"/><circle cx="0" cy="14" r="4" fill="' + GOLD + '"/>' +
      '<rect x="-104" y="80" width="18" height="58" fill="#7a7484"/><rect x="86" y="80" width="18" height="58" fill="#7a7484"/><path d="M-104 80l9 -12 9 12zM86 80l9 -12 9 12z" fill="#8a849a"/>' +
      '<path class="cm-glow" d="M-36 70q36 -58 72 0z" fill="#ffe6a8" opacity=".25"/></g>' +
      '<rect x="0" y="136" width="400" height="88" fill="#a8823a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#8e6c2e" stroke-width="1"/>').join("") +
      tag("CHILL MOODY", 18, 190, 40, GOLD, -5) + tag("nicethings", 22, 218, 20, TEAL, -3) + tag("WEST CHILLY", 170, 216, 18, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="cm-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + TEAL + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + TEAL + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(306, 100, 102, "N 56th St") + sign(290, 126, 118, "Lansdowne Ave") +
      '<g class="cm-sp"><circle cx="190" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="cm-sp cm-sp2"><circle cx="196" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("cm5", "#1a2a4a", "#e0806a"));
  }

  window.SCENES = { chstation: chstation, chbrew: chbrew, chgolf: chgolf, chdesk: chdesk, chcorner: chcorner };
})();
