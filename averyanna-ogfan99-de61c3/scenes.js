/* averyanna scenes (Regions: LOS ANGELES + SOCAL [Southwest]; Genres: country; Flagstaff, Arizona). CSS classes prefixed avan- (the page's own anim-train is kept).
   Sources: ABC15 Arizona "AZ native goes from singing in bathtub to making splash in the world of country music" (from the mountains of Flagstaff; viral bathtub
   cover recorded in her mom's porcelain tub during lockdown; drove out to watch Arizona sunsets to write); bio (born Mar 3 2004, Flagstaff; moved to Nashville Aug 2021;
   Warner Music Nashville June 2022; Opry debut Sept 2022). Flagstaff: Amtrak Southwest Chief stops at the 1926 brick depot downtown; Lowell Observatory on Mars Hill,
   the first International Dark Sky City; snowcapped San Francisco Peaks over the ponderosa pines; Heritage Square at Aspen Ave and Leroux St.
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f4d58d", BLUE = "#5aa9e6", PINE = "#2f5a3c", PINE2 = "#244a30", CREAM = "#f6efe2", BRICK = "#8a3a2a", ROSE = "#e88a9a";
  const css = '<style>' +
    '@keyframes avanglow{0%,100%{opacity:.35}50%{opacity:1}}.avan-glow{animation:avanglow 2.2s ease-in-out infinite}.avan-g2{animation-delay:-1.1s}.avan-g3{animation-delay:-.6s}' +
    '@keyframes avancloud{0%{transform:translateX(0)}100%{transform:translateX(36px)}}.avan-cl{animation:avancloud 14s ease-in-out infinite alternate}' +
    '@keyframes avanstar{0%{transform:translate(0,0);opacity:0}10%{opacity:1}60%{transform:translate(-150px,70px);opacity:0}100%{opacity:0}}.avan-shoot{animation:avanstar 4.5s ease-in infinite}' +
    '@keyframes avandome{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.avan-scope{transform-box:fill-box;transform-origin:50% 100%;animation:avandome 6s ease-in-out infinite}' +
    '@keyframes avanbub{0%{transform:translate(0,0) scale(.6);opacity:.9}100%{transform:translate(6px,-60px) scale(1.3);opacity:0}}.avan-bub{transform-box:fill-box;transform-origin:50% 50%;animation:avanbub 3s ease-out infinite}.avan-b2{animation-delay:-1s}.avan-b3{animation-delay:-2s}' +
    '@keyframes avannote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(20px,-70px);opacity:0}}.avan-note{animation:avannote 3.2s ease-out infinite}.avan-n2{animation-delay:-1.6s}' +
    '@keyframes avanbeam{0%,100%{opacity:.08}50%{opacity:.22}}.avan-beam{animation:avanbeam 2.6s ease-in-out infinite}.avan-be2{animation-delay:-1.3s}' +
    '@keyframes avanspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.avan-sp{animation:avanspray 1.4s ease-out infinite}.avan-sp2{animation-delay:.45s}' +
    '@keyframes avansway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.avan-sway{transform-box:fill-box;transform-origin:50% 100%;animation:avansway 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const pine = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-8" width="4" height="10" fill="#5a3a24"/><path d="M0 -60L-12 -36h6L-16 -18h8L-20 -6h40L8 -18h8L6 -36h6z" fill="' + c + '"/></g>';
  /* the San Francisco Peaks: blue-gray volcano ridge with snow caps */
  const peaks = (y, s, op) => '<g transform="translate(0 ' + y + ') scale(1 ' + s + ')" opacity="' + (op || 1) + '"><path d="M0 60L70 30L120 -4L150 -18L178 -6L200 -24L228 -8L270 10L330 36L400 50V90H0z" fill="#6a7a9a"/>' +
    '<path d="M108 4L120 -4L150 -18L178 -6L200 -24L228 -8L248 2L232 4L216 -2L200 6L184 -2L168 4L150 -6L132 4z" fill="#f4f6fa"/></g>';

  /* ROOM 0: the Flagstaff depot: the 1926 brick station on the BNSF main line downtown, Amtrak's Southwest Chief pulling in, the snowy Peaks behind */
  function avanstop() {
    const car = (x) => '<g transform="translate(' + x + ' 0)"><rect x="0" y="150" width="150" height="54" rx="6" fill="#c8ccd2"/><rect x="0" y="176" width="150" height="4" fill="#c8202a"/><rect x="0" y="181" width="150" height="3" fill="#fff"/><rect x="0" y="185" width="150" height="4" fill="#1f4a8a"/>' +
      [10, 40, 70, 100, 126].map(w => '<rect x="' + w + '" y="158" width="20" height="12" rx="2" fill="#2a3a4a"/>').join("") +
      '<circle cx="24" cy="208" r="7" fill="#222"/><circle cx="126" cy="208" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#avan1)"/>' +
      '<g class="avan-cl"><ellipse cx="80" cy="30" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="46" ry="8" fill="#fff" opacity=".5"/></g>' +
      peaks(72, 1, .95) +
      [0, 26, 52, 348, 374, 400].map((x, i) => pine(x, 134 - (i % 2) * 4, 1 + (i % 2) * .2, i % 2 ? PINE : PINE2)).join("") +
      /* the brick depot */
      '<rect x="110" y="88" width="190" height="52" fill="' + BRICK + '"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M110 ' + (94 + i * 8) + 'h190" stroke="#6a2a1e" stroke-width="1"/>').join("") +
      '<path d="M100 90l40 -26h130l40 26z" fill="#4a4a52"/><path d="M178 64l27 -18 27 18z" fill="#4a4a52"/><rect x="190" y="56" width="30" height="20" fill="' + CREAM + '"/><path d="M190 56v20M205 56v20M220 56v20" stroke="#6a4a2a" stroke-width="2"/>' +
      [124, 156, 236, 268].map((x, i) => '<rect x="' + x + '" y="100" width="18" height="24" fill="#ffd98a" class="avan-glow ' + (i % 2 ? "avan-g2" : "") + '"/><path d="M' + (x + 9) + ' 100v24M' + x + ' 112h18" stroke="' + CREAM + '" stroke-width="2"/>').join("") +
      '<rect x="192" y="104" width="26" height="36" fill="#3a2418"/>' +
      /* platform */
      '<rect x="0" y="140" width="400" height="10" fill="#b8b0a4"/><path d="M0 141h400" stroke="#f0d040" stroke-width="2"/>' +
      /* station sign */
      '<rect x="22" y="90" width="80" height="34" rx="3" fill="#111" stroke="#666" stroke-width="1.5"/><text x="62" y="106" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Flagstaff</text>' +
      '<rect x="33" y="111" width="58" height="10" rx="5" fill="' + BLUE + '"/><text x="62" y="119" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">SW CHIEF</text>' +
      '<rect x="60" y="124" width="4" height="16" fill="#666"/>' +
      /* tracks */
      '<rect x="0" y="204" width="400" height="56" fill="#5a5048"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="212" width="10" height="34" fill="#4a3a2a"/>').join("") +
      '<rect x="0" y="216" width="400" height="4" fill="#9a9a9a"/><rect x="0" y="238" width="400" height="4" fill="#9a9a9a"/>' +
      /* the train sliding in */
      '<g class="anim-train">' +
      '<g><path d="M30 150h70q22 0 30 20v34H30z" fill="#c8ccd2"/><rect x="30" y="176" width="100" height="4" fill="#c8202a"/><rect x="30" y="181" width="100" height="3" fill="#fff"/><rect x="30" y="185" width="100" height="4" fill="#1f4a8a"/>' +
      '<path d="M104 156h14q8 4 10 14h-24z" fill="#2a3a4a"/><circle cx="124" cy="196" r="4" fill="#fff8d0" class="avan-glow"/><circle cx="50" cy="208" r="7" fill="#222"/><circle cx="110" cy="208" r="7" fill="#222"/></g>' +
      car(-124) + car(-278) + '</g>' +
      cap("FLAGSTAFF  ·  AMTRAK SOUTHWEST CHIEF", 256),
      sky("avan1", "#7fb4e4", "#f6dcb4"));
  }

  /* ROOM 1: Lowell Observatory on Mars Hill over the pines, the Milky Way over the first Dark Sky City, a shooting star */
  function avanobs() {
    const stars = Array.from({ length: 46 }, (_, i) => '<circle cx="' + ((i * 83) % 400) + '" cy="' + ((i * 37) % 120 + 4) + '" r="' + (i % 5 ? 1 : 1.8) + '" fill="#fff" class="avan-glow ' + ["", "avan-g2", "avan-g3"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#avan2)"/>' +
      '<path d="M-20 130Q120 20 420 40" stroke="#b8c4ff" stroke-width="40" fill="none" opacity=".12"/><path d="M-20 130Q120 20 420 40" stroke="#e8ecff" stroke-width="12" fill="none" opacity=".12"/>' +
      stars +
      '<g class="avan-shoot"><path d="M330 20l26 -10" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g>' +
      /* Mars Hill */
      '<path d="M0 190Q120 130 240 150T400 170V260H0z" fill="#1c2a24"/>' +
      [10, 40, 70, 300, 332, 364, 396].map((x, i) => pine(x, 186 - (i % 3) * 6, 1.1 + (i % 2) * .2, "#142018")).join("") +
      /* the white telescope dome */
      '<rect x="150" y="128" width="100" height="40" fill="#d8d4cc"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (156 + i * 20) + ' 128v40" stroke="#b8b4ac" stroke-width="1.5"/>').join("") +
      '<path d="M144 130a56 50 0 0 1 112 0z" fill="#e8e6e0"/>' +
      '<g class="avan-scope"><rect x="193" y="82" width="14" height="48" fill="#141c2a"/><rect x="196" y="58" width="8" height="34" fill="#8a8e94" transform="rotate(14 200 92)"/></g>' +
      '<rect x="190" y="148" width="20" height="20" fill="#5a3a24"/><rect x="164" y="138" width="10" height="10" fill="#ffd98a" class="avan-glow"/>' +
      cap("MARS HILL  ·  THE DARK SKY CITY"),
      sky("avan2", "#0a1030", "#2a3a6a"));
  }

  /* ROOM 2: the bathtub take: her mom's white clawfoot porcelain tub, a phone on a little stand recording, bubbles and notes floating up — the cover that went viral */
  function avantub() {
    return svg(
      '<rect width="400" height="260" fill="#cfe6ec"/>' +
      /* subway-tile wall */
      Array.from({ length: 12 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 - (r % 2) * 15) + '" y="' + (r * 14) + '" width="29" height="13" rx="1" fill="#e8f3f6"/>').join("")).join("") +
      '<rect x="0" y="168" width="400" height="92" fill="#e9dccb"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 168v92" stroke="#d4c4ae" stroke-width="2"/>').join("") +
      /* window with sunset light */
      '<rect x="40" y="26" width="70" height="60" fill="#ffcf8a"/><path d="M75 26v60M40 56h70" stroke="#fff" stroke-width="4"/><rect x="40" y="26" width="70" height="60" fill="none" stroke="#fff" stroke-width="5"/>' +
      /* the tub */
      '<path d="M120 120h200q8 0 8 10q0 46 -40 56h-136q-40 -10 -40 -56q0 -10 8 -10z" fill="#fbfbfa" stroke="#c8c8c8" stroke-width="2"/>' +
      '<rect x="114" y="114" width="216" height="10" rx="5" fill="#fff" stroke="#c8c8c8" stroke-width="2"/>' +
      [[142, 186], [298, 186]].map(p => '<path d="M' + p[0] + ' ' + p[1] + 'q-6 10 -12 14h16q2 -6 4 -14z" fill="#d8b04a"/>').join("") +
      '<path d="M300 114v-30q0 -10 10 -10h10" stroke="#c8a040" stroke-width="5" fill="none"/>' +
      /* bubbles */
      [[160, 116], [190, 112], [230, 114], [262, 112], [290, 116]].map((b, i) => '<g class="avan-bub ' + ["", "avan-b2", "avan-b3"][i % 3] + '"><circle cx="' + b[0] + '" cy="' + b[1] + '" r="' + (5 + i % 3) + '" fill="#fff" stroke="#a8d8e8" stroke-width="1.5" opacity=".9"/></g>').join("") +
      /* phone on a stand, recording */
      '<rect x="352" y="170" width="6" height="50" fill="#555"/><rect x="340" y="216" width="30" height="5" fill="#555"/>' +
      '<rect x="338" y="120" width="34" height="56" rx="5" fill="#1a1a1e"/><rect x="341" y="125" width="28" height="44" rx="2" fill="#2a4a5a"/>' +
      '<circle cx="349" cy="132" r="3" fill="#ff3a3a" class="avan-glow"/><text x="356" y="135" ' + font + ' font-size="6" fill="#fff">REC</text>' +
      /* notes */
      '<g class="avan-note"><text x="210" y="100" ' + font + ' font-size="22" fill="' + BLUE + '">&#9834;</text></g><g class="avan-note avan-n2"><text x="250" y="96" ' + font + ' font-size="18" fill="' + ROSE + '">&#9835;</text></g>' +
      cap("THE BATHTUB TAKE  ·  MOM'S PLACE, FLAGSTAFF"),
      "");
  }

  /* ROOM 3: Nashville: the wooden circle in the stage floor, one mic, a guitar on a stand, spotlights sweeping — her Opry debut, Sept 2022 */
  function avanopry() {
    return svg(
      '<rect width="400" height="260" fill="url(#avan4)"/>' +
      /* curtain folds */
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (i * 26) + '" y="0" width="14" height="150" fill="#3a1218" opacity=".6"/>').join("") +
      '<path d="M0 0h400v18q-20 12 -40 0t-40 0t-40 0t-40 0t-40 0t-40 0t-40 0t-40 0t-40 0t-40 0z" fill="#7a1a24"/>' +
      /* spotlights */
      '<path d="M60 0L150 200h60z" fill="#fff8d0" class="avan-beam"/><path d="M340 0L250 200h-60z" fill="#fff8d0" class="avan-beam avan-be2"/>' +
      /* stage floor */
      '<path d="M0 150h400v110H0z" fill="#7a4a24"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' 150l' + ((i - 7) * 12) + ' 110" stroke="#5a3418" stroke-width="2"/>').join("") +
      /* the inlaid circle */
      '<ellipse cx="200" cy="200" rx="84" ry="28" fill="#a8703a" stroke="#4a2a12" stroke-width="3"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (130 + i * 28) + ' ' + (180 + (i % 2) * 2) + 'v40" stroke="#8a5a2a" stroke-width="2"/>').join("") +
      /* mic stand */
      '<rect x="198" y="120" width="4" height="80" fill="#2a2a2e"/><ellipse cx="200" cy="200" rx="14" ry="4" fill="#2a2a2e"/><rect x="194" y="108" width="12" height="18" rx="6" fill="#555"/>' +
      /* guitar on a stand */
      '<g class="avan-sway"><g transform="translate(300 214)"><path d="M0 0l-10 -10M0 0l10 -10" stroke="#333" stroke-width="2"/><ellipse cx="0" cy="-22" rx="16" ry="18" fill="#c8843a"/><ellipse cx="0" cy="-44" rx="12" ry="12" fill="#c8843a"/>' +
      '<circle cx="0" cy="-30" r="5" fill="#2a1a0a"/><rect x="-2" y="-96" width="4" height="56" fill="#4a2a12"/><rect x="-5" y="-104" width="10" height="10" fill="#2a1a0a"/></g></g>' +
      '<g class="avan-note"><text x="140" y="120" ' + font + ' font-size="20" fill="' + GOLD + '">&#9834;</text></g>' +
      cap("THE CIRCLE  ·  NASHVILLE  ·  SEPT 2022"),
      sky("avan4", "#1a0a10", "#3a1a20"));
  }

  /* ROOM 4: her corner downtown, Aspen Ave and Leroux St at Heritage Square, a brick wall with her name, the snowy San Francisco Peaks over the pines at sunset */
  function avancorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#avan5)"/>' +
      '<circle cx="320" cy="96" r="26" fill="#ffcf7a" class="avan-glow"/>' +
      peaks(60, 1.2) +
      [10, 40, 74, 330, 362, 396].map((x, i) => pine(x, 150 - (i % 2) * 6, 1.1 + (i % 2) * .3, i % 2 ? PINE : PINE2)).join("") +
      /* brick wall */
      '<rect x="0" y="150" width="270" height="110" fill="#9a4a32"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (156 + r * 11) + 'h270" stroke="#7a3422" stroke-width="1.5"/>').join("") +
      Array.from({ length: 10 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<path d="M' + (c * 30 + (r % 2) * 15) + ' ' + (167 + r * 11) + 'v-11" stroke="#7a3422" stroke-width="1.5"/>').join("")).join("") +
      tag("AVERY ANNA", 22, 208, 34, GOLD, -6) + tag("FLAGSTAFF", 60, 240, 18, BLUE, -4) +
      '<g class="avan-sp"><circle cx="232" cy="194" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="avan-sp avan-sp2"><circle cx="240" cy="188" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      /* sidewalk + sign post */
      '<rect x="270" y="226" width="130" height="34" fill="#a8a8a8"/>' +
      '<rect x="326" y="132" width="5" height="96" fill="#5a5a5a"/>' + sign(286, 132, 86, "Aspen Av") + sign(300, 158, 92, "Leroux St") +
      /* street lamp */
      '<rect x="384" y="150" width="4" height="78" fill="#2a2a2e"/><circle cx="386" cy="148" r="6" fill="#ffe8a0" class="avan-glow"/>',
      sky("avan5", "#f08a6a", "#ffd9a0"));
  }

  window.SCENES = { avanstop, avanobs, avantub, avanopry, avancorner };
})();
