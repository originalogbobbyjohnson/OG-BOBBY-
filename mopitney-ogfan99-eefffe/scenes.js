/* mopitney scenes (Regions: Chicago / Genres: country; Cherry Valley, Illinois, next to Rockford). CSS classes prefixed mpy- (the page's own anim-train is kept).
   Ties: grew up in Cherry Valley next to Rockford (MWAH!, "From Rockford to Nashville"); played his hometown show at the Coronado Performing Arts Center, Rockford (Nov 2021, opening for Josh Turner);
   bluegrass upbringing, brother Blake Pitney plays bass in the Station Inn jams, Nashville (Bluegrass Unlimited); "When I'm With You": lawn chairs in the backyard surrounded by cornfields under the stars. */
(function () {
  const W = 400, H = 260;
  const WHEAT = "#e8c07a", CHERRY = "#b83a3a", DENIM = "#4a7ab8", CREAM = "#f4ead6";
  const css = '<style>' +
    '@keyframes mpyglow{0%,100%{opacity:.45}50%{opacity:1}}.mpy-glow{animation:mpyglow 2.4s ease-in-out infinite}.mpy-g2{animation-delay:-1.2s}' +
    '@keyframes mpynote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.mpy-nt{animation:mpynote 3.2s ease-out infinite}.mpy-nt2{animation-delay:-1.1s}.mpy-nt3{animation-delay:-2.2s}' +
    '@keyframes mpycloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.mpy-cl{animation:mpycloud 14s ease-in-out infinite alternate}' +
    '@keyframes mpychase{0%,49%{opacity:1}50%,100%{opacity:.25}}.mpy-ch{animation:mpychase .8s steps(1) infinite}.mpy-ch2{animation-delay:-.4s}' +
    '@keyframes mpyfly{0%{transform:translate(0,0);opacity:.2}50%{transform:translate(6px,-8px);opacity:1}100%{transform:translate(0,0);opacity:.2}}.mpy-ff{animation:mpyfly 3s ease-in-out infinite}.mpy-f2{animation-delay:-1s}.mpy-f3{animation-delay:-2s}' +
    '@keyframes mpysway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.mpy-sway{transform-box:fill-box;transform-origin:50% 100%;animation:mpysway 2.6s ease-in-out infinite}' +
    '@keyframes mpyflow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.mpy-flow{animation:mpyflow 4s linear infinite}' +
    '@keyframes mpyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mpy-sp{animation:mpyspray 1.4s ease-out infinite}.mpy-sp2{animation-delay:.45s}' +
    '@keyframes mpytwk{0%,100%{opacity:.2}50%{opacity:1}}.mpy-tw{animation:mpytwk 1.8s ease-in-out infinite}.mpy-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="mpy-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; return s; };
  const corn = (x0, y, n, step, c, cls) => Array.from({ length: n }, (_, i) => { const x = x0 + i * step, h = 26 + (i * 5) % 8; return '<g class="' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-' + h + '" stroke="' + c + '" stroke-width="2"/><path d="M' + x + ' ' + (y - h * .4) + 'q-8 -4 -11 -12M' + x + ' ' + (y - h * .6) + 'q8 -4 11 -12M' + x + ' ' + (y - h) + 'l-3 -6M' + x + ' ' + (y - h) + 'l3 -6" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>'; }).join("");

  /* ROOM 0: the RMTD bus pulling into the CherryVale Mall stop, Cherry Valley */
  function mpystop() {
    return svg(
      '<rect width="400" height="260" fill="url(#mpy1)"/>' +
      '<g class="mpy-cl"><ellipse cx="80" cy="30" rx="38" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="42" ry="9" fill="#fff" opacity=".5"/></g>' +
      /* the mall: long low tan facade with an entrance arch */
      '<rect x="0" y="70" width="400" height="92" fill="#d8c4a0"/><rect x="0" y="64" width="400" height="8" fill="#a88a60"/>' +
      '<path d="M150 162V104q50 -36 100 0V162z" fill="#bfd8e4" stroke="#7a6a50" stroke-width="3"/><path d="M200 162V76M150 130h100" stroke="#7a6a50" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (12 + i * 22) + '" y="96" width="14" height="40" fill="#a88a60" opacity=".55"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (264 + i * 22) + '" y="96" width="14" height="40" fill="#a88a60" opacity=".55"/>').join("") +
      '<rect x="0" y="162" width="400" height="98" fill="#5a5a5c"/><rect x="0" y="160" width="400" height="5" fill="#e8e4dc"/>' +
      /* bus-stop sign: black sign like a station sign */
      '<rect x="296" y="96" width="5" height="70" fill="#3a3a3a"/>' +
      '<rect x="236" y="74" width="148" height="30" rx="3" fill="#111"/><circle cx="254" cy="89" r="10" fill="' + DENIM + '"/><text x="254" y="93" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RMTD</text>' +
      '<text x="318" y="93" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CherryVale Mall</text>' +
      /* the bus pulling in */
      '<g class="anim-train"><rect x="30" y="170" width="240" height="62" rx="9" fill="#f4f4f2" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="40" y="180" width="200" height="22" rx="2" fill="#2f3a44"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (44 + i * 33) + '" y="182" width="29" height="18" fill="#a8cde0"/>').join("") +
      '<rect x="244" y="178" width="22" height="34" rx="2" fill="#a8cde0" stroke="#2a2a2a"/><rect x="30" y="208" width="240" height="7" fill="' + DENIM + '"/><rect x="30" y="215" width="240" height="3" fill="' + CHERRY + '"/>' +
      '<rect x="190" y="172" width="70" height="8" rx="1" fill="#111"/><text x="225" y="179" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb84a" class="mpy-ch">CHERRYVALE</text>' +
      '<circle cx="80" cy="234" r="11" fill="#1d1d1d"/><circle cx="230" cy="234" r="11" fill="#1d1d1d"/><circle cx="80" cy="234" r="4" fill="#9aa"/><circle cx="230" cy="234" r="4" fill="#9aa"/>' +
      '<circle cx="266" cy="222" r="3" fill="#ffe28a" class="mpy-glow"/></g>',
      sky("mpy1", "#6ea6d8", "#f6dcb0"));
  }

  /* ROOM 1: the Coronado Performing Arts Center, North Main St, Rockford: 1927 movie palace, tall blade sign, chasing marquee bulbs */
  function mpycoronado() {
    const bulbs = (x, y, n, dx, dy) => Array.from({ length: n }, (_, i) => '<circle cx="' + (x + i * dx) + '" cy="' + (y + i * dy) + '" r="2" fill="#ffe08a" class="mpy-ch' + (i % 2 ? ' mpy-ch2' : '') + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mpy2)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (12 + i * 25) + '" cy="' + (10 + (i * 13) % 40) + '" r="1.2" fill="#fff" class="mpy-tw' + (i % 2 ? ' mpy-tw2' : '') + '"/>').join("") +
      /* terracotta facade with arched windows */
      '<rect x="60" y="40" width="280" height="170" fill="#c99a6a"/><rect x="60" y="36" width="280" height="8" fill="#8a5a34"/>' +
      [90, 150, 250, 310].map(x => '<path d="M' + (x - 14) + ' 116V72q14 -18 28 0V116z" fill="#3a2a40" stroke="#8a5a34" stroke-width="2"/>').join("") +
      '<path d="M60 44l12 -10h256l12 10" fill="#b08050"/>' +
      /* tall vertical blade sign */
      '<rect x="182" y="8" width="36" height="130" rx="3" fill="#7a1e24" stroke="' + WHEAT + '" stroke-width="2"/>' +
      'CORONADO'.split("").map((ch, i) => '<text x="200" y="' + (26 + i * 13.5) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#ffe08a" class="mpy-glow' + (i % 2 ? ' mpy-g2' : '') + '">' + ch + '</text>').join("") +
      /* marquee */
      '<path d="M70 140h260l-14 26h-232z" fill="#2a1e30" stroke="' + WHEAT + '" stroke-width="2"/><rect x="96" y="144" width="208" height="18" fill="' + CREAM + '"/>' +
      '<text x="200" y="157" text-anchor="middle" ' + font + ' font-size="11" fill="#2a1e30">TONIGHT: HOMETOWN SHOW</text>' +
      bulbs(74, 140, 33, 8, 0) +
      '<rect x="120" y="166" width="160" height="44" fill="#4a2a1e"/>' + [128, 168, 208, 248].map(x => '<rect x="' + x + '" y="172" width="28" height="38" fill="#f3c47a" opacity=".85"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5a5c"/><rect x="0" y="208" width="400" height="4" fill="#e8e4dc"/>' +
      Array.from({ length: 9 }, (_, i) => '<g><circle cx="' + (40 + i * 40) + '" cy="228" r="6" fill="#1a1a22"/><path d="M' + (32 + i * 40) + ' 252q8 -22 16 0z" fill="#1a1a22"/></g>').join(""),
      sky("mpy2", "#1a1a40", "#6a4a7a"));
  }

  /* ROOM 2: the Station Inn, Nashville: the little stone bluegrass club where his brother Blake plays bass in the jams */
  function mpystation() {
    let stones = "";
    for (let r = 0; r < 7; r++) for (let c = 0; c < 9; c++) stones += '<rect x="' + (92 + c * 24 + (r % 2 ? 10 : 0)) + '" y="' + (104 + r * 14) + '" width="21" height="12" rx="3" fill="' + ["#c8b490", "#b8a07a", "#d4c4a0"][(r + c) % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mpy3)"/>' +
      /* skyline far behind */
      '<g fill="#2a2a44"><rect x="10" y="60" width="40" height="110"/><rect x="58" y="40" width="30" height="130"/><rect x="300" y="50" width="34" height="120"/><rect x="340" y="70" width="50" height="100"/><path d="M318 50l8 -26l8 26z"/></g>' +
      /* the low stone club */
      '<rect x="88" y="100" width="224" height="110" fill="#8a7a5a"/>' + stones +
      '<rect x="84" y="94" width="232" height="10" fill="#3a2e24"/>' +
      '<rect x="176" y="150" width="40" height="60" fill="#3a2214"/><circle cx="208" cy="182" r="2.5" fill="' + WHEAT + '"/>' +
      '<rect x="230" y="150" width="56" height="34" fill="#f3c47a"/><path d="M258 150v34" stroke="#3a2214" stroke-width="2"/>' +
      '<rect x="140" y="112" width="120" height="26" rx="4" fill="#1a1a22" stroke="' + CHERRY + '" stroke-width="2"/><text x="200" y="130" text-anchor="middle" ' + font + ' font-size="13" fill="#ff8a7a" class="mpy-glow">STATION INN</text>' +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="8" fill="' + CREAM + '">BLUEGRASS JAM TONIGHT</text>' +
      /* upright bass leaning by the door */
      '<g class="mpy-sway"><path d="M122 206q-14 -8 -10 -24q-6 -12 4 -20q10 -8 20 0q10 8 4 20q4 16 -10 24z" fill="#8a4a24" stroke="#3a1a0a" stroke-width="1.5"/><rect x="125" y="128" width="4" height="40" fill="#2a1a10"/><path d="M127 168v30" stroke="#e8d8b0" stroke-width=".8"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4c4a46"/><rect x="0" y="208" width="400" height="4" fill="#d8d4cc"/>' +
      note(240, 146, CREAM) + note(270, 140, WHEAT, "mpy-nt2") + note(190, 120, CREAM, "mpy-nt3"),
      sky("mpy3", "#1a1a3a", "#4a3a6a"));
  }

  /* ROOM 3: lawn chairs in the backyard, surrounded by Northern Illinois cornfields underneath the stars ("When I'm With You") */
  function mpycorn() {
    const chair = (x, c) => '<g><path d="M' + x + ' 220l6 -26h26l6 26" stroke="#ddd" stroke-width="2.5" fill="none"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 6) + '" y="' + (176 + i * 5) + '" width="26" height="3" fill="' + c + '"/>').join("") + '<path d="M' + (x + 4) + ' 174v22M' + (x + 34) + ' 174v22" stroke="#ddd" stroke-width="2.5"/><path d="M' + (x + 2) + ' 198h34" stroke="#ddd" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mpy4)"/>' +
      Array.from({ length: 34 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (8 + (i * 29) % 100) + '" r="' + (i % 4 ? 1 : 1.6) + '" fill="#fff" class="mpy-tw' + (i % 2 ? ' mpy-tw2' : '') + '"/>').join("") +
      '<circle cx="332" cy="40" r="14" fill="#f4ead6"/><circle cx="338" cy="36" r="13" fill="#141a34"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#1e2e1a"/>' +
      corn(4, 160, 40, 10, "#3e5a2a", "mpy-sway") +
      '<rect x="0" y="160" width="400" height="100" fill="#26381e"/>' +
      /* farmhouse porch light at left */
      '<rect x="0" y="108" width="70" height="60" fill="#e8dcc0"/><path d="M-4 110l40 -26l40 26z" fill="#6a2a24"/><rect x="18" y="128" width="16" height="22" fill="#f3c47a" class="mpy-glow"/>' +
      chair(150, CHERRY) + chair(206, DENIM) +
      '<g transform="translate(196 176)"><path d="M0 0l3 -4h6l3 4v14h-12z" fill="#7a4a24"/></g>' +
      [[120, 150], [270, 140], [300, 186], [90, 196], [340, 170], [240, 120]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="2.2" fill="#d8ff6a" class="mpy-ff mpy-f' + (1 + i % 3) + '"/>').join(""),
      sky("mpy4", "#0a0e24", "#2a3460"));
  }

  /* ROOM 4: Cherry St and Elgin St, Cherry Valley: cherry tree, his name on the wall, the Kishwaukee River behind */
  function mpycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mpy5)"/>' +
      '<g class="mpy-cl"><ellipse cx="90" cy="30" rx="40" ry="9" fill="#fff" opacity=".55"/><ellipse cx="300" cy="20" rx="44" ry="9" fill="#fff" opacity=".45"/></g>' +
      '<path d="M0 104q100 -16 200 -6t200 -4v30h-400z" fill="#5a8a4a"/>' +
      '<rect x="0" y="108" width="400" height="16" fill="#4a7a8a"/><g class="mpy-flow">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (113 + (i % 2) * 5) + 'q10 -3 20 0" stroke="#cfe6ea" stroke-width="1.3" fill="none" opacity=".7"/>').join("") + '</g>' +
      '<path d="M0 124h400v18h-400z" fill="#6a9a4a"/>' +
      bricks(0, 140, 400, 80, "#9a4a36", "#5a2418") + '<rect x="0" y="136" width="400" height="5" fill="#d8d0c0"/>' +
      tag("PITNEY", 16, 190, 36, WHEAT, -5) + tag("CHERRY VALLEY", 28, 212, 13, CREAM, -3) + tag("GOOD OL BOY", 180, 210, 13, CHERRY, -4) +
      '<g class="mpy-sp"><circle cx="160" cy="176" r="3" fill="' + WHEAT + '" opacity=".7"/></g><g class="mpy-sp mpy-sp2"><circle cx="166" cy="170" r="2" fill="' + WHEAT + '" opacity=".6"/></g>' +
      /* cherry tree */
      '<rect x="268" y="120" width="10" height="100" fill="#5a3a24"/><circle cx="273" cy="104" r="34" fill="#3e7a3a"/><circle cx="250" cy="112" r="20" fill="#4a8a40"/><circle cx="296" cy="112" r="20" fill="#4a8a40"/>' +
      [[256, 100], [268, 90], [284, 98], [290, 116], [262, 118], [278, 110], [246, 112], [300, 104]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="3" fill="' + CHERRY + '" class="' + (i % 2 ? 'mpy-glow' : '') + '"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4a46"/><rect x="0" y="218" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="56" width="6" height="164" fill="#2f2f2f"/>' + sign(296, 56, 102, "CHERRY ST") + sign(300, 82, 98, "ELGIN ST"),
      sky("mpy5", "#5a8ac4", "#f0d0a0"));
  }

  window.SCENES = { mpystop: mpystop, mpycoronado: mpycoronado, mpystation: mpystation, mpycorn: mpycorn, mpycorner: mpycorner };
})();
