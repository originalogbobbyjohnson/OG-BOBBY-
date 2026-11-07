/* bigfreedia scenes (Regions tab: New Orleans; Josephine St, 3rd Ward / Central City - where Big Freedia (Freddie Ross Jr.) grew up). CSS classes and ids prefixed bf- (the page's own anim-train is kept).
   1 St. Charles Av at Josephine St on the St. Charles streetcar (line 12): the olive-green car rolls in on the grassy neutral ground under the live oaks; Josephine St runs back into Central City.
   2 Pressing Onward Baptist Church on Danneel St, "right down the street" from her Josephine St house (her godmother led the choir, she assisted; her 2025 gospel album is named after it): robed choir swaying, organ pipes, stained glass glowing.
   3 A bounce show ("Release yo' wiggle"): DJ turntables spinning, speaker stacks thumping, stage lights sweeping, the crowd bouncing (silhouettes).
   4 A historic Central City hotel and lounge on LaSalle St (she plays the Dew Drop Inn): cream two-story front with iron balcony, neon LOUNGE sign flickering, music notes drifting out.
   5 Josephine St and Danneel St: green signs, FREEDIA tagged on the brick, the red-brick bell tower of St. Mary's Assumption (Josephine St at Constance) behind at dusk.
   No digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bfflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.bf-flk{animation:bfflick 2.2s infinite}.bf-flk2{animation-delay:.8s}' +
    '@keyframes bfmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.bf-moss{transform-box:fill-box;transform-origin:50% 0%;animation:bfmoss 3.4s ease-in-out infinite}.bf-moss2{animation-delay:-1.7s}' +
    '@keyframes bfsway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.bf-sway{transform-box:fill-box;transform-origin:50% 100%;animation:bfsway 1.8s ease-in-out infinite}.bf-sway2{animation-delay:-.9s}' +
    '@keyframes bfglow{0%,100%{opacity:.55}50%{opacity:1}}.bf-glow{animation:bfglow 3s ease-in-out infinite}.bf-glow2{animation-delay:-1.5s}' +
    '@keyframes bfspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bf-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bfspin 1.6s linear infinite}' +
    '@keyframes bfthump{0%,100%{transform:scale(1)}50%{transform:scale(1.14)}}.bf-thump{transform-box:fill-box;transform-origin:50% 50%;animation:bfthump .5s ease-in-out infinite}' +
    '@keyframes bfbnc{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.bf-bnc{animation:bfbnc .5s ease-in-out infinite}.bf-bnc2{animation-delay:-.25s}' +
    '@keyframes bfbeamL{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(18deg)}}.bf-beamL{transform-box:view-box;transform-origin:70px 0px;animation:bfbeamL 3s ease-in-out infinite}' +
    '@keyframes bfbeamR{0%,100%{transform:rotate(22deg)}50%{transform:rotate(-18deg)}}.bf-beamR{transform-box:view-box;transform-origin:330px 0px;animation:bfbeamR 3s ease-in-out infinite}' +
    '@keyframes bfnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(34px,-70px);opacity:0}}.bf-note{animation:bfnote 3.2s ease-out infinite}.bf-note2{animation-delay:-1.1s}.bf-note3{animation-delay:-2.2s}' +
    '@keyframes bfbird{from{transform:translate(-40px,0)}to{transform:translate(460px,-24px)}}.bf-bird{animation:bfbird 14s linear infinite;animation-delay:-5s}' +
    '@keyframes bfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bf-sp{animation:bfspray 1.4s ease-out infinite}.bf-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const PURP = "#d16bff", GOLD = "#ffd23f", TEAL = "#3ff2d0", PINK = "#ff5fb0";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.55, -0.15, 0.25, 0.65].map((k, i) => '<path class="bf-moss' + (i % 2 ? " bf-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 12 1 22q-2 7 0 12" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const note = (x, y, c, cls) => '<g class="bf-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.4) + ' ' + (y - 1) + 'v-18l9 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';

  /* 1. St. Charles Av at Josephine St, line 12 */
  function bfstation() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (54 + i * 32) + '" y="126" width="24" height="22" rx="2" fill="#26281f" stroke="#efe2b0" stroke-width="2.5"/>').join("");
    const car = '<g class="anim-train"><rect x="40" y="108" width="292" height="12" rx="6" fill="#5f655c"/><rect x="40" y="118" width="292" height="70" rx="6" fill="#40633a" stroke="#1f3a1c" stroke-width="2"/>' + win +
      '<rect x="40" y="154" width="292" height="5" fill="#efe2b0"/><rect x="40" y="172" width="292" height="16" fill="#8a2a20"/>' +
      '<rect x="300" y="126" width="26" height="44" rx="2" fill="#efe2b0"/><rect x="304" y="130" width="18" height="36" fill="#26281f"/>' +
      '<rect x="226" y="110" width="88" height="10" rx="2" fill="#111"/><text x="270" y="118" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">12 ST. CHARLES</text>' +
      '<path d="M150 108l50 -50" stroke="#222" stroke-width="2.5"/><circle cx="200" cy="58" r="3" fill="#222"/>' +
      '<circle cx="90" cy="190" r="9" fill="#1c1c1c"/><circle cx="130" cy="190" r="9" fill="#1c1c1c"/><circle cx="250" cy="190" r="9" fill="#1c1c1c"/><circle cx="290" cy="190" r="9" fill="#1c1c1c"/>' +
      '<circle class="bf-flk" cx="336" cy="142" r="4" fill="#fff6c2"/></g>';
    /* Lower Garden District house on the corner: lavender with white galleries */
    const house = '<g><rect x="18" y="34" width="150" height="86" fill="#c9b3d8"/><path d="M12 34h162l-10 -14H22z" fill="#4a4a5a"/>' +
      [30, 66, 102, 138].map(x => '<rect x="' + x + '" y="42" width="18" height="28" fill="#3a3448"/><rect x="' + x + '" y="82" width="18" height="32" fill="#3a3448"/>').join("") +
      '<rect x="18" y="72" width="150" height="4" fill="#fff"/>' + Array.from({ length: 19 }, (_, i) => '<path d="M' + (20 + i * 8) + ' 64v8" stroke="#fff" stroke-width="1.5"/>').join("") +
      [22, 60, 96, 132, 164].map(x => '<rect x="' + x + '" y="40" width="3" height="80" fill="#fff"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bfs1)"/>' +
      '<g class="bf-bird"><path d="M40 40q6 -6 12 0q6 -6 12 0" stroke="#3a2a40" stroke-width="2" fill="none"/></g>' +
      house + oak(300, 54, 90, "#2c4a2e") + oak(60, 26, 56, "#2c4a2e") +
      '<rect x="0" y="196" width="400" height="64" fill="#6f8a4a"/><rect x="0" y="194" width="400" height="5" fill="#8a7a62"/>' +
      '<path d="M0 206h400M0 214h400" stroke="#4a4038" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 21) + '" y="203" width="10" height="14" fill="#5a4a3a"/>').join("") +
      car +
      '<rect x="356" y="128" width="5" height="70" fill="#2a2a2a"/><rect x="304" y="96" width="94" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' +
      '<text x="351" y="110" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">JOSEPHINE ST</text>' +
      '<circle cx="328" cy="121" r="7" fill="#c62828"/><text x="328" y="124.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">12</text>' +
      '<text x="364" y="124" text-anchor="middle" ' + font + ' font-size="7" fill="#ffd36a">ST. CHARLES</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">ST. CHARLES AV · JOSEPHINE ST</text>',
      sky("bfs1", "#e7a6c8", "#ffe6c8"));
  }

  /* 2. Pressing Onward Baptist Church, Danneel St: the choir loft */
  function bfchurch() {
    const glass = (x, c1, c2) => '<g class="bf-glow' + (x > 200 ? " bf-glow2" : "") + '"><path d="M' + x + ' 96v-46q0 -20 20 -20q20 0 20 20v46z" fill="' + c1 + '" stroke="#2a1a10" stroke-width="3"/>' +
      '<path d="M' + (x + 20) + ' 32v64M' + x + ' 62h40" stroke="#2a1a10" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="50" r="7" fill="' + c2 + '"/></g>';
    const pipes = Array.from({ length: 13 }, (_, i) => { const h = 40 + Math.abs(6 - i) * -4 + 30; return '<rect x="' + (150 + i * 8) + '" y="' + (100 - h) + '" width="6" height="' + h + '" rx="2" fill="#d8b45a" stroke="#8a6a20" stroke-width="1"/>'; }).join("");
    const singer = (x, y, robe, k) => '<g class="bf-sway' + (k % 2 ? " bf-sway2" : "") + '"><path d="M' + (x - 13) + ' ' + (y + 40) + 'q0 -30 13 -32q13 2 13 32z" fill="' + robe + '"/><path d="M' + (x - 6) + ' ' + (y + 8) + 'l6 8l6 -8" fill="#ffd23f"/><circle cx="' + x + '" cy="' + y + '" r="8" fill="#3a2418"/></g>';
    const row1 = [70, 108, 146, 184, 222, 260, 298, 336].map((x, i) => singer(x, 128, i % 2 ? "#6a2a9a" : "#7d34b5", i)).join("");
    const row2 = [52, 90, 128, 166, 204, 242, 280, 318, 356].map((x, i) => singer(x, 150, i % 2 ? "#7d34b5" : "#6a2a9a", i + 1)).join("");
    return svg(
      '<rect width="400" height="260" fill="#f1e6d0"/><rect x="0" y="0" width="400" height="120" fill="#e8d8b8"/>' +
      glass(30, "#4aa3e0", "#ffd23f") + glass(330, "#e0405a", "#3ff2d0") + glass(90, "#7ad36a", "#ff5fb0") + glass(270, "#ffb030", "#4aa3e0") +
      '<rect x="140" y="20" width="120" height="84" fill="#7a4a2a"/>' + pipes +
      '<rect x="138" y="100" width="124" height="8" fill="#5a3418"/>' +
      '<rect x="0" y="118" width="400" height="10" fill="#7a4a2a"/>' + row1 +
      '<rect x="0" y="166" width="400" height="12" fill="#6a3a1e"/>' + row2 +
      '<rect x="0" y="188" width="400" height="72" fill="#5a2f18"/><rect x="0" y="188" width="400" height="6" fill="#8a5a30"/>' +
      '<rect x="150" y="200" width="100" height="46" rx="4" fill="#3a1e0e" stroke="#c9a24a" stroke-width="2"/>' +
      '<text x="200" y="219" text-anchor="middle" ' + font + ' font-size="10" fill="#ffd23f">PRESSING</text><text x="200" y="234" text-anchor="middle" ' + font + ' font-size="10" fill="#ffd23f">ONWARD</text>' +
      note(80, 214, "#ffd23f") + note(320, 214, "#ffd23f", "bf-note2") + note(110, 230, "#fff", "bf-note3"));
  }

  /* 3. A bounce show: DJ, speakers, lights, the crowd bouncing */
  function bfbounce() {
    const spk = (x) => '<g><rect x="' + x + '" y="96" width="54" height="104" rx="4" fill="#1a1a1e" stroke="#444" stroke-width="2"/>' +
      '<circle class="bf-thump" cx="' + (x + 27) + '" cy="126" r="17" fill="#2c2c32" stroke="#777" stroke-width="3"/><circle cx="' + (x + 27) + '" cy="126" r="6" fill="#555"/>' +
      '<circle class="bf-thump" cx="' + (x + 27) + '" cy="172" r="17" fill="#2c2c32" stroke="#777" stroke-width="3"/><circle cx="' + (x + 27) + '" cy="172" r="6" fill="#555"/></g>';
    const deck = (cx) => '<circle cx="' + cx + '" cy="150" r="20" fill="#222" stroke="#666" stroke-width="2"/><g class="bf-spin"><circle cx="' + cx + '" cy="150" r="17" fill="#111"/><circle cx="' + cx + '" cy="150" r="6" fill="' + PINK + '"/><rect x="' + (cx - 1) + '" y="134" width="2" height="8" fill="#fff"/></g>';
    const fan = (x, k) => '<g class="bf-bnc' + (k % 2 ? " bf-bnc2" : "") + '"><circle cx="' + x + '" cy="214" r="9" fill="#0c0612"/><path d="M' + (x - 12) + ' 260v-28q0 -10 12 -10q12 0 12 10v28z" fill="#0c0612"/>' +
      (k % 3 ? '<path d="M' + (x - 10) + ' 226l-10 -22M' + (x + 10) + ' 226l10 -22" stroke="#0c0612" stroke-width="5" stroke-linecap="round"/>' : '') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bfs3)"/>' +
      '<g class="bf-beamL"><path d="M70 0l-40 200h80z" fill="' + PURP + '" opacity=".28"/></g><g class="bf-beamR"><path d="M330 0l-40 200h80z" fill="' + TEAL + '" opacity=".28"/></g>' +
      '<rect x="40" y="0" width="320" height="10" fill="#222"/>' + [70, 150, 250, 330].map((x, i) => '<rect x="' + (x - 7) + '" y="8" width="14" height="10" rx="2" fill="#333"/><circle class="bf-flk' + (i % 2 ? " bf-flk2" : "") + '" cx="' + x + '" cy="20" r="4" fill="' + [PURP, GOLD, PINK, TEAL][i] + '"/>').join("") +
      '<rect x="56" y="34" width="288" height="34" rx="4" fill="#160a20" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="bf-flk" x="200" y="57" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + GOLD + '" letter-spacing="1.5">RELEASE YO WIGGLE</text>' +
      spk(20) + spk(326) +
      '<rect x="110" y="132" width="180" height="62" rx="4" fill="#26262c" stroke="#555" stroke-width="2"/>' + deck(150) + deck(250) +
      '<rect x="186" y="138" width="28" height="30" rx="2" fill="#333"/>' + [192, 200, 208].map(x => '<rect x="' + x + '" y="144" width="3" height="18" fill="#777"/>').join("") +
      '<rect x="80" y="194" width="240" height="10" fill="#3a2a40"/>' +
      [30, 66, 102, 138, 174, 210, 246, 282, 318, 354, 390].map((x, k) => fan(x, k)).join(""),
      sky("bfs3", "#12061c", "#3a1250"));
  }

  /* 4. Historic hotel and lounge on LaSalle St, Central City */
  function bflounge() {
    const winU = [60, 120, 180, 240].map(x => '<rect x="' + x + '" y="62" width="30" height="40" fill="#3a2a2a"/><rect class="bf-flk' + (x > 150 ? " bf-flk2" : "") + '" x="' + (x + 3) + '" y="65" width="24" height="34" fill="#ffd98a" opacity=".55"/>').join("");
    const rail = '<rect x="40" y="104" width="250" height="5" fill="#222"/>' + Array.from({ length: 31 }, (_, i) => '<path d="M' + (42 + i * 8) + ' 109v14" stroke="#222" stroke-width="1.5"/>').join("") + '<rect x="40" y="122" width="250" height="3" fill="#222"/>' +
      [44, 164, 286].map(x => '<rect x="' + x + '" y="125" width="4" height="75" fill="#222"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bfs4)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (8 + (i * 29) % 40) + '" r="1.2" fill="#fff" opacity=".6"/>').join("") +
      oak(370, 70, 50, "#1f3424") +
      '<rect x="40" y="46" width="250" height="154" fill="#efe6cf"/><rect x="34" y="40" width="262" height="8" fill="#c9bea2"/>' + winU + rail +
      '<rect x="64" y="136" width="44" height="64" fill="#4a2a1a"/><rect x="222" y="136" width="44" height="64" fill="#4a2a1a"/>' +
      '<rect x="138" y="140" width="52" height="60" fill="#2a1a12"/><rect class="bf-flk" x="142" y="144" width="44" height="52" fill="#ffb84a" opacity=".5"/>' +
      /* vertical neon sign */
      '<rect x="296" y="50" width="34" height="120" rx="4" fill="#1a1020" stroke="#444" stroke-width="2"/><rect x="290" y="80" width="8" height="4" fill="#444"/>' +
      ['H', 'O', 'T', 'E', 'L'].map((c, i) => '<text class="bf-flk" x="313" y="' + (72 + i * 21) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + PINK + '">' + c + '</text>').join("") +
      '<rect x="130" y="34" width="4" height="10" fill="#333"/><rect x="196" y="34" width="4" height="10" fill="#333"/><rect x="120" y="14" width="90" height="22" rx="3" fill="#1a1020" stroke="' + TEAL + '" stroke-width="2"/>' +
      '<text class="bf-flk bf-flk2" x="165" y="30" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + TEAL + '" letter-spacing="2">LOUNGE</text>' +
      '<rect x="0" y="200" width="400" height="8" fill="#b8b0a0"/><rect x="0" y="208" width="400" height="52" fill="#3a3a3e"/>' +
      '<rect x="8" y="150" width="4" height="52" fill="#222"/><circle class="bf-flk" cx="10" cy="148" r="7" fill="#ffe9a8"/>' +
      '<rect x="340" y="150" width="5" height="52" fill="#2a2a2a"/>' + sign(316, 128, 80, "LaSalle St") +
      note(170, 150, GOLD) + note(150, 160, PINK, "bf-note2") + note(190, 156, "#fff", "bf-note3"),
      sky("bfs4", "#0e1030", "#5a2a6a"));
  }

  /* 5. Josephine St and Danneel St, St. Mary's Assumption's brick tower behind */
  function bfcorner() {
    const tower = '<g transform="translate(0 14)"><rect x="168" y="44" width="44" height="86" fill="#9a3e2a"/><rect x="164" y="40" width="52" height="6" fill="#e9dcc0"/><rect x="164" y="80" width="52" height="4" fill="#e9dcc0"/>' +
      '<path d="M178 76v-20q0 -8 6 -8q6 0 6 8v20zM194 76v-20q0 -8 6 -8q6 0 6 8v20z" fill="#2a1410"/>' +
      '<rect x="174" y="20" width="32" height="22" fill="#a8462f"/><rect x="172" y="18" width="36" height="4" fill="#e9dcc0"/><path d="M182 40v-12q0 -6 8 -6q8 0 8 6v12z" fill="#2a1410"/>' +
      '<path d="M176 18q14 -22 28 0z" fill="#6a8a78"/><rect x="189" y="-6" width="2" height="14" fill="#e9dcc0"/><rect x="185" y="-1" width="10" height="2" fill="#e9dcc0"/>' +
      '<path d="M120 130v-40l48 -18v58zM212 130v-58l48 18v40z" fill="#8a3624"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bfs5)"/>' + tower +
      oak(40, 104, 64, "#24402a") + oak(366, 108, 54, "#24402a") +
      '<rect x="0" y="122" width="400" height="102" fill="#7a4232"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#653426" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#653426" stroke-width="1"/>').join("")).join("") +
      tag("FREEDIA", 14, 192, 52, PURP, -6) + tag("QUEEN DIVA", 66, 218, 20, GOLD, -4) + tag("YAKA YAKA", 236, 196, 20, TEAL, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="370" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(244, 94, 144, "Josephine St") + sign(268, 120, 120, "Danneel St") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="bf-flk" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="bf-sp"><circle cx="196" cy="168" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="bf-sp bf-sp2"><circle cx="202" cy="162" r="2" fill="' + PURP + '" opacity=".6"/></g>',
      sky("bfs5", "#24164a", "#f0906a"));
  }

  window.SCENES = { bfstation: bfstation, bfchurch: bfchurch, bfbounce: bfbounce, bflounge: bflounge, bfcorner: bfcorner };
})();
