/* avrillavigne scenes (Regions tab: CANADA; Napanee, Ontario). CSS classes and ids prefixed al- (the page's own anim-train is kept).
   1 Napanee station, 301 John St: the 1856 limestone station with its slate roof, a corridor train sliding in.
   2 The Napanee fairgrounds: as a kid she sang country songs at local fairs; a little stage with a mic, the Ferris wheel turning behind.
   3 The rink: she grew up playing hockey in Napanee; boards, red line, a puck sliding into the net.
   4 The skate ramp (Sk8er Boi): a half-pipe at dusk, a board rolling back and forth.
   5 Dundas St E and John St downtown: green signs, AVRIL tagged on the brick, the domed Town Hall on Market Square behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes alflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.al-flk{animation:alflick 2.2s infinite}.al-flk2{animation-delay:.8s}' +
    '@keyframes alspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.al-spin{transform-box:fill-box;transform-origin:50% 50%;animation:alspin 14s linear infinite}' +
    '@keyframes alstar{0%,100%{opacity:.2}50%{opacity:1}}.al-star{animation:alstar 1.6s ease-in-out infinite}.al-star2{animation-delay:-.8s}' +
    '@keyframes alpuck{0%{transform:translate(0,0)}80%{transform:translate(200px,-14px)}100%{transform:translate(200px,-14px);opacity:0}}.al-puck{animation:alpuck 2.4s ease-in infinite}' +
    '@keyframes alnet{0%,75%,100%{transform:scaleX(1)}85%{transform:scaleX(1.2)}}.al-net{transform-box:fill-box;transform-origin:0% 50%;animation:alnet 2.4s ease-in infinite}' +
    '@keyframes alboard{0%,100%{transform:translate(-110px,-60px) rotate(-40deg)}50%{transform:translate(110px,-60px) rotate(40deg)}}.al-board{animation:alboard 2.6s ease-in-out infinite}' +
    '@keyframes alban{0%,100%{transform:skewX(0)}50%{transform:skewX(5deg)}}.al-ban{transform-box:fill-box;transform-origin:50% 0%;animation:alban 2.6s ease-in-out infinite}' +
    '@keyframes alnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-60px);opacity:0}}.al-note{animation:alnote 2.8s linear infinite}.al-note2{animation-delay:-1.4s}' +
    '@keyframes alspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.al-sp{animation:alspray 1.4s ease-out infinite}.al-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const star = (x, y, r, c, cls) => '<path class="' + (cls || "") + '" d="M' + x + ' ' + (y - r) + 'l' + (r * .29) + ' ' + (r * .6) + 'l' + (r * .66) + ' ' + (r * .1) + 'l' + (-r * .48) + ' ' + (r * .46) + 'l' + (r * .12) + ' ' + (r * .66) + 'l' + (-r * .59) + ' ' + (-r * .31) + 'l' + (-r * .59) + ' ' + (r * .31) + 'l' + (r * .12) + ' ' + (-r * .66) + 'l' + (-r * .48) + ' ' + (-r * .46) + 'l' + (r * .66) + ' ' + (-r * .1) + 'z" fill="' + c + '"/>';
  const PINK = "#ff4f9a", LIME = "#c7c7d1", STONE = "#cfc6b0", STONE2 = "#b8ae96", VIAY = "#ffc72c";

  /* 1. Napanee station */
  function alstation() {
    const blocks = Array.from({ length: 6 }, (_, r) => Array.from({ length: 12 }, (_, c) => '<rect x="' + (40 + c * 26 + (r % 2) * 13) + '" y="' + (48 + r * 11) + '" width="25" height="10" fill="' + ((r + c) % 3 ? STONE : STONE2) + '"/>').join("")).join("");
    const arches = Array.from({ length: 5 }, (_, i) => '<path d="M' + (66 + i * 58) + ' 112v-34q0 -12 12 -12t12 12v34z" fill="#3a3f45" stroke="#efe8d6" stroke-width="2"/>').join("");
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (52 + i * 36) + '" y="146" width="24" height="16" rx="2" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="136" width="340" height="56" rx="8" fill="#9aa2aa" stroke="#5a6068" stroke-width="2"/>' + wins +
      '<rect x="24" y="168" width="340" height="7" fill="' + VIAY + '"/><rect x="24" y="176" width="340" height="3" fill="#1c2b4a"/>' +
      '<path d="M364 140q22 6 24 40v12h-24z" fill="#7d858d" stroke="#5a6068" stroke-width="2"/><circle cx="380" cy="184" r="3.5" fill="#fff6c2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#als0)"/>' +
      '<path d="M26 48l174 -30 174 30z" fill="#3e4a55"/><path d="M26 48h348" stroke="#2a333b" stroke-width="3"/><g clip-path="url(#alclip)">' + blocks + '</g>' +
      '<rect x="40" y="48" width="320" height="66" fill="none" stroke="#a49a82" stroke-width="1"/>' + arches +
      '<rect x="0" y="114" width="400" height="22" fill="#8b8579"/><rect x="0" y="130" width="400" height="6" fill="#f2c200"/>' + train +
      '<rect x="0" y="192" width="400" height="68" fill="#6f6a62"/><path d="M0 206h400M0 222h400" stroke="#4a4640" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="202" width="8" height="24" fill="#5a4a3a"/>').join("") +
      '<rect x="110" y="230" width="180" height="24" rx="3" fill="#111"/><text x="122" y="247" ' + font + ' font-size="15" fill="#fff">Napanee</text>' + badge(214, 242, "VIA", VIAY, true),
      sky("als0", "#9cc8ea", "#f4ead8") + '<clipPath id="alclip"><rect x="40" y="48" width="320" height="66"/></clipPath>');
  }

  /* 2. The fairgrounds stage */
  function alfair() {
    const spokes = Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M300 92L' + (300 + Math.cos(a) * 62).toFixed(1) + ' ' + (92 + Math.sin(a) * 62).toFixed(1) + '" stroke="#e8e8ee" stroke-width="2"/><rect x="' + (300 + Math.cos(a) * 62 - 7).toFixed(1) + '" y="' + (92 + Math.sin(a) * 62 - 5).toFixed(1) + '" width="14" height="10" rx="2" fill="' + ["#e8505b", "#ffc72c", "#3aa6ff", "#7bd389"][i % 4] + '"/>'; }).join("");
    const bunting = Array.from({ length: 12 }, (_, i) => '<path d="M' + (10 + i * 22) + ' 64l11 14 11 -14z" fill="' + ["#e8505b", "#ffc72c", "#3aa6ff"][i % 3] + '"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#als1)"/>' +
      '<g class="al-spin"><circle cx="300" cy="92" r="62" fill="none" stroke="#e8e8ee" stroke-width="3"/>' + spokes + '</g><path d="M300 92l-30 100M300 92l30 100" stroke="#c9ccd6" stroke-width="5"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5f8a3e"/>' +
      '<rect x="20" y="86" width="230" height="10" fill="#7a4a2a"/><path d="M20 64h264" stroke="#333" stroke-width="1"/>' + bunting +
      '<rect x="20" y="96" width="8" height="94" fill="#6b3f22"/><rect x="242" y="96" width="8" height="94" fill="#6b3f22"/>' +
      '<rect x="14" y="170" width="242" height="22" fill="#8a5a32"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (14 + i * 22) + ' 170v22" stroke="#6b4426" stroke-width="2"/>').join("") +
      '<path d="M135 170v-44" stroke="#333" stroke-width="3"/><path d="M128 170l7 -6 7 6" stroke="#333" stroke-width="3" fill="none"/><rect x="131" y="116" width="8" height="12" rx="4" fill="#555"/>' +
      '<g class="al-note"><text x="150" y="120" ' + font + ' font-size="20" fill="' + PINK + '">&#9834;</text></g><g class="al-note al-note2"><text x="110" y="126" ' + font + ' font-size="16" fill="#ffc72c">&#9835;</text></g>' +
      '<rect x="60" y="216" width="200" height="22" rx="2" fill="#111"/><text x="160" y="231" text-anchor="middle" ' + font + ' font-size="10" fill="#ffc72c">NAPANEE FAIRGROUNDS · YORK ST</text>',
      sky("als1", "#4a6fb0", "#f8c58a"));
  }

  /* 3. The rink */
  function alrink() {
    const crowd = Array.from({ length: 80 }, (_, i) => '<circle cx="' + ((i * 37) % 400) + '" cy="' + (36 + (i * 11) % 48) + '" r="3" fill="' + ["#c8102e", "#ffffff", "#2a2a2a", PINK][i % 4] + '" opacity=".5"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#als2)"/>' + crowd +
      '<rect x="0" y="92" width="400" height="10" fill="#d0d4da" opacity=".5"/><rect x="0" y="102" width="400" height="22" fill="#f4f6f8"/><rect x="0" y="120" width="400" height="4" fill="#ffc72c"/>' +
      '<rect x="0" y="124" width="400" height="136" fill="#eaf3fa"/>' +
      '<rect x="196" y="124" width="8" height="136" fill="#c8102e" opacity=".85"/><path d="M80 124v136M320 124v136" stroke="#1f5fa8" stroke-width="6" opacity=".8"/>' +
      '<circle cx="200" cy="196" r="34" fill="none" stroke="#1f5fa8" stroke-width="2"/><circle cx="200" cy="196" r="3" fill="#1f5fa8"/>' +
      '<g class="al-net"><path d="M352 150h30v40h-30" fill="#ffffff" stroke="#c8102e" stroke-width="4"/><path d="M358 154l20 32M370 154l-12 32" stroke="#bbb" stroke-width="1"/></g>' +
      '<path d="M352 150v40" stroke="#c8102e" stroke-width="4"/><path d="M340 170a14 22 0 0 1 14 -22v44a14 22 0 0 1 -14 -22z" fill="#9cd0f0" opacity=".6"/>' +
      '<g class="al-puck"><ellipse cx="150" cy="184" rx="7" ry="3" fill="#111"/></g>' +
      '<path d="M120 210l26 -26M120 210h10" stroke="#5a3a1a" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="120" y="234" width="160" height="18" rx="2" fill="#111"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HOCKEY IN NAPANEE</text>',
      sky("als2", "#1c2230", "#3a4558"));
  }

  /* 4. The half-pipe */
  function alramp() {
    return svg('<rect width="400" height="260" fill="url(#als3)"/>' +
      star(40, 30, 6, "#fff", "al-star") + star(120, 50, 4, "#fff", "al-star al-star2") + star(350, 34, 7, PINK, "al-star") + star(270, 60, 4, "#fff", "al-star al-star2") +
      '<g fill="#2a2440"><rect x="0" y="120" width="60" height="60"/><rect x="70" y="100" width="40" height="80"/><rect x="300" y="110" width="50" height="70"/><rect x="350" y="96" width="50" height="84"/></g>' +
      '<path d="M40 120h40q0 90 120 90t120 -90h40v110H40z" fill="#9a9aa6"/><path d="M80 120q0 90 120 90t120 -90" stroke="#5a5a66" stroke-width="4" fill="none"/>' +
      '<rect x="36" y="114" width="48" height="8" fill="#5a5a66"/><rect x="316" y="114" width="48" height="8" fill="#5a5a66"/><path d="M40 122h40M320 122h40" stroke="#c9c9d1" stroke-width="2"/>' +
      tag("SK8ER", 140, 196, 26, PINK, -4) +
      '<g transform="translate(200 206)"><g class="al-board"><rect x="-22" y="-5" width="44" height="7" rx="3" fill="#1c1c1c"/><path d="M-16 -2h32" stroke="' + PINK + '" stroke-width="2"/><circle cx="-13" cy="5" r="3.5" fill="#f4f4f4"/><circle cx="13" cy="5" r="3.5" fill="#f4f4f4"/></g></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4a52"/>' +
      '<rect x="120" y="236" width="160" height="18" rx="2" fill="#111"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="' + PINK + '">SEE YOU LATER, BOI</text>',
      sky("als3", "#241a3a", "#8a4a7a"));
  }

  /* 5. Dundas St E and John St, Town Hall behind */
  function alcorner() {
    const hall = '<g><rect x="250" y="64" width="110" height="66" fill="#e8e0cc"/><path d="M244 64l61 -22 61 22z" fill="#e8e0cc" stroke="#b8ae96" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (262 + i * 26) + '" y="70" width="8" height="60" fill="#fffaf0" stroke="#b8ae96" stroke-width="1"/>').join("") +
      '<rect x="293" y="16" width="24" height="24" fill="#e8e0cc" stroke="#b8ae96" stroke-width="1.5"/><path d="M290 16q15 -18 30 0z" fill="#6f8f8a"/><circle cx="305" cy="28" r="6" fill="#fffaf0" stroke="#5a5a5a" stroke-width="1"/></g>';
    return svg('<rect width="400" height="260" fill="url(#als4)"/>' + hall +
      '<g fill="#2a2440"><rect x="0" y="80" width="70" height="50"/><rect x="80" y="94" width="60" height="36"/><rect x="150" y="86" width="80" height="44"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("AVRIL", 20, 192, 56, PINK, -6) + star(196, 160, 14, PINK, "") + tag("ABBEY DAWN", 40, 216, 17, "#c7c7d1", -4) + tag("SK8ER BOI", 170, 214, 17, "#7b5cff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "Dundas St E") + sign(270, 124, 100, "John St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="al-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="al-sp"><circle cx="210" cy="172" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="al-sp al-sp2"><circle cx="216" cy="166" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("als4", "#1e1a3a", "#e07a8a"));
  }

  window.SCENES = { alstation: alstation, alfair: alfair, alrink: alrink, alramp: alramp, alcorner: alcorner };
})();
