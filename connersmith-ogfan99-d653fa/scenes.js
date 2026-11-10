/* connersmith scenes (Regions: MEMPHIS + TENNESSEE / Genres: country; Brentwood, Williamson County, 20 minutes south of Nashville). CSS classes prefixed csbw- (the page's own anim-train is kept).
   Sources: Sounds Like Nashville "Get To Know: Conner Smith" (grew up in Nashville, Brentwood Academy, standout on the baseball team, left school midday to write on Music Row);
   Country Swag "Who Is Conner Smith?" (Nashville native, Big Machine 2019); his songs "Meanwhile In Carolina" ("20 minutes south of a Nashville town", baseball practice, the girl in a beach town in Carolina),
   "Smoky Mountains", "Why I Can't Leave"; Ravenswood Mansion (1825 brick house with a white columned portico, Smith Park, Brentwood); I-65 / Old Hickory Blvd / Franklin Rd in Brentwood.
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const ORANGE = "#f08a24", CREAM = "#f6efe0", PINE = "#2f5a34", BRICK = "#9a4430", SKY = "#7fb8e0", NAVY = "#24344e";
  const css = '<style>' +
    '@keyframes csbwglow{0%,100%{opacity:.4}50%{opacity:1}}.csbw-glow{animation:csbwglow 2.2s ease-in-out infinite}.csbw-g2{animation-delay:-1.1s}' +
    '@keyframes csbwcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.csbw-cl{animation:csbwcloud 14s ease-in-out infinite alternate}' +
    '@keyframes csbwcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.csbw-car{animation:csbwcar 5s linear infinite}' +
    '@keyframes csbwball{0%{transform:translate(0,0)}50%{transform:translate(-110px,-60px)}100%{transform:translate(-220px,0)}}.csbw-ball{animation:csbwball 2.4s ease-in-out infinite}' +
    '@keyframes csbwfog{0%{transform:translateX(-30px);opacity:.35}50%{opacity:.7}100%{transform:translateX(30px);opacity:.35}}.csbw-fog{animation:csbwfog 8s ease-in-out infinite alternate}.csbw-f2{animation-delay:-4s}' +
    '@keyframes csbwwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.csbw-wv{animation:csbwwave 3s linear infinite}' +
    '@keyframes csbwbird{0%{transform:translate(0,0)}100%{transform:translate(120px,-20px)}}.csbw-bird{animation:csbwbird 6s linear infinite}' +
    '@keyframes csbwflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.csbw-flag{transform-box:fill-box;transform-origin:0 50%;animation:csbwflag 1.4s ease-in-out infinite}' +
    '@keyframes csbwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.csbw-sp{animation:csbwspray 1.4s ease-out infinite}.csbw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-14" width="6" height="16" fill="#4a3424"/><circle cx="0" cy="-26" r="16" fill="' + c + '"/><circle cx="-10" cy="-18" r="10" fill="' + c + '"/><circle cx="10" cy="-18" r="10" fill="' + c + '"/></g>';
  const pine = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-8" width="4" height="10" fill="#4a3424"/><path d="M0 -60L-12 -36h6L-16 -18h8L-20 -6h40L8 -18h8L6 -36h6z" fill="' + c + '"/></g>';
  const pickup = (c) => '<rect x="0" y="6" width="70" height="20" rx="4" fill="' + c + '"/><path d="M40 6v-14h18l12 14z" fill="' + c + '"/><path d="M44 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="56" cy="28" r="7" fill="#222"/><circle cx="56" cy="28" r="3" fill="#aaa"/><rect x="66" y="12" width="5" height="4" fill="#ffe9a0" class="csbw-glow"/>';
  const iShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M-18 -18h36q2 22 -18 34q-20 -12 -18 -34z" fill="#fff"/><path d="M-15 -15h30q1 18 -15 28q-16 -10 -15 -28z" fill="#0b4ea2"/><path d="M-15 -15h30v6h-30z" fill="#c8102e"/><text x="0" y="6" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + n + '</text></g>';

  /* ROOM 0: I-65 south out of Nashville, the green guide sign for Brentwood, rolling Williamson County hills, a pickup rolling in (Brentwood has no train; this is the drive in) */
  function csbwroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#csbw1)"/>' +
      '<g class="csbw-cl"><ellipse cx="70" cy="30" rx="40" ry="8" fill="#fff" opacity=".55"/><ellipse cx="300" cy="22" rx="46" ry="8" fill="#fff" opacity=".45"/></g>' +
      '<path d="M0 170q80 -40 160 -14t140 -18t100 10v40H0z" fill="#6a9a48"/>' +
      [14, 44, 74, 326, 356, 388].map((x, i) => tree(x, 168 - (i % 2) * 4, .9 + (i % 2) * .2, i % 2 ? "#3f6a38" : "#4a7a3e")).join("") +
      '<path d="M0 170h400v90H0z" fill="#5a8a3a"/>' +
      '<path d="M0 182h400v62H0z" fill="#3a3a3e"/><path d="M0 212h400" stroke="#f3d34a" stroke-width="2.5" stroke-dasharray="20 14"/><path d="M0 184h400M0 242h400" stroke="#eee" stroke-width="2"/>' +
      '<rect x="96" y="40" width="5" height="142" fill="#8a8e94"/><rect x="300" y="40" width="5" height="142" fill="#8a8e94"/><rect x="96" y="44" width="209" height="5" fill="#8a8e94"/>' +
      '<rect x="112" y="52" width="178" height="84" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      iShield(150, 92, "65") +
      '<text x="176" y="78" ' + font + ' font-size="12" fill="#fff">SOUTH</text><text x="176" y="104" ' + font + ' font-size="19" fill="#fff">Brentwood</text><text x="176" y="124" ' + font + ' font-size="10" fill="#fff">Old Hickory Blvd</text>' +
      '<text x="20" y="34" ' + font + ' font-size="9" fill="#fff" opacity=".85">20 MINUTES SOUTH OF NASHVILLE</text>' +
      '<g class="anim-train"><g transform="translate(150 186)">' + pickup(NAVY) + '</g></g>' +
      '<g class="csbw-car"><rect x="0" y="220" width="34" height="12" rx="3" fill="' + ORANGE + '"/><circle cx="8" cy="233" r="4" fill="#222"/><circle cx="26" cy="233" r="4" fill="#222"/></g>',
      sky("csbw1", SKY, "#f3d9a8"));
  }

  /* ROOM 1: the high school ball field: he was a standout on the baseball team and wrote songs between classes and practice */
  function csbwball() {
    return svg(
      '<rect width="400" height="260" fill="url(#csbw2)"/>' +
      [10, 50, 350, 390].map((x, i) => tree(x, 120, 1.1, i % 2 ? "#3f6a38" : "#4a7a3e")).join("") +
      /* outfield wall + scoreboard */
      '<rect x="0" y="104" width="400" height="22" fill="#1f4a2a"/><path d="M0 104h400" stroke="#f3d34a" stroke-width="2"/>' +
      '<rect x="150" y="40" width="100" height="56" fill="#111" stroke="#555" stroke-width="2"/><text x="175" y="58" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HOME</text><text x="225" y="58" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GUEST</text>' +
      '<rect x="162" y="64" width="26" height="20" fill="#300"/><rect x="212" y="64" width="26" height="20" fill="#300"/><text x="175" y="80" text-anchor="middle" ' + font + ' font-size="15" fill="#ffb03a" class="csbw-glow">4</text><text x="225" y="80" text-anchor="middle" ' + font + ' font-size="15" fill="#ffb03a">2</text>' +
      '<rect x="196" y="96" width="8" height="10" fill="#555"/>' +
      /* grass and infield diamond */
      '<path d="M0 126h400v134H0z" fill="#5aa04a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 70 - 10) + ' 126l40 134" stroke="#64aa52" stroke-width="22"/>').join("") +
      '<path d="M200 150l110 60 -110 50 -110 -50z" fill="#c8864a"/><path d="M200 172l62 34 -62 30 -62 -30z" fill="#5aa04a"/>' +
      '<ellipse cx="200" cy="204" rx="12" ry="6" fill="#c8864a"/>' +
      [[200, 150], [310, 210], [90, 210]].map(b => '<rect x="' + (b[0] - 4) + '" y="' + (b[1] - 4) + '" width="8" height="8" fill="#fff" transform="rotate(45 ' + b[0] + ' ' + b[1] + ')"/>').join("") +
      '<path d="M200 260l-6 -6h12z" fill="#fff"/>' +
      '<path d="M200 256l200 -120M200 256l-200 -120" stroke="#fff" stroke-width="1.5" opacity=".8"/>' +
      /* the ball flying out */
      '<g class="csbw-ball"><circle cx="300" cy="150" r="4" fill="#fff" stroke="#c8102e" stroke-width="1"/></g>' +
      /* guitar leaning on the dugout fence */
      '<rect x="20" y="180" width="70" height="40" fill="#6a6e74"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (22 + i * 9) + ' 180v40" stroke="#888" stroke-width="1"/>').join("") +
      '<g transform="translate(70 214) rotate(-18)"><ellipse cx="0" cy="0" rx="10" ry="12" fill="#c8864a"/><ellipse cx="0" cy="-16" rx="8" ry="9" fill="#c8864a"/><circle cx="0" cy="-4" r="3" fill="#3a2418"/><rect x="-2" y="-46" width="4" height="30" fill="#5a3418"/></g>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">BETWEEN CLASSES AND BASEBALL PRACTICE</text>',
      sky("csbw2", "#8fc8ea", "#dff0f8"));
  }

  /* ROOM 2: the Great Smoky Mountains: blue-gray ridges stacked to the horizon with the smoke-like fog rolling between them */
  function csbwsmoky() {
    return svg(
      '<rect width="400" height="260" fill="url(#csbw3)"/>' +
      '<circle cx="300" cy="64" r="22" fill="#ffd98a" class="csbw-glow"/>' +
      '<path d="M0 120q60 -50 120 -20t120 -30t160 20v170H0z" fill="#8a9ab8"/>' +
      '<g class="csbw-fog"><ellipse cx="120" cy="128" rx="120" ry="10" fill="#fff"/></g>' +
      '<path d="M0 150q70 -40 150 -10t130 -26t120 16v130H0z" fill="#6a7c9e"/>' +
      '<g class="csbw-fog csbw-f2"><ellipse cx="260" cy="156" rx="140" ry="10" fill="#fff"/></g>' +
      '<path d="M0 182q90 -36 180 -6t120 -20t100 10v94H0z" fill="#4a5e7e"/>' +
      '<g class="csbw-fog"><ellipse cx="160" cy="190" rx="140" ry="8" fill="#fff"/></g>' +
      '<path d="M0 214q100 -20 200 0t200 -6v52H0z" fill="#2e4a3a"/>' +
      [10, 34, 58, 82, 318, 342, 366, 390].map((x, i) => pine(x, 236 + (i % 2) * 6, .8 + (i % 3) * .15, i % 2 ? PINE : "#24482a")).join("") +
      '<g class="csbw-bird"><path d="M60 70q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">SING ME A SONG OF THE SMOKY MOUNTAINS</text>',
      sky("csbw3", "#f0b47a", "#ffe8c4"));
  }

  /* ROOM 3: meanwhile in Carolina: the beach town by the water, a wooden pier into the Atlantic at sunset, a lifeguard stand */
  function csbwbeach() {
    return svg(
      '<rect width="400" height="260" fill="url(#csbw4)"/>' +
      '<circle cx="200" cy="130" r="34" fill="#ffb84a" class="csbw-glow"/>' +
      '<rect x="0" y="130" width="400" height="70" fill="#3a7aa8"/><g class="csbw-wv">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (146 + (i % 3) * 16) + 'q10 -4 20 0" stroke="#bfe0ee" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<rect x="170" y="136" width="60" height="3" fill="#ffd98a" opacity=".6" class="csbw-glow"/><rect x="182" y="146" width="36" height="2" fill="#ffd98a" opacity=".5"/>' +
      /* the pier */
      '<rect x="230" y="150" width="170" height="8" fill="#8a6a4a"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (236 + i * 19) + '" y="158" width="4" height="40" fill="#6a4a2a"/>').join("") +
      '<path d="M230 150h170" stroke="#5a3a1a" stroke-width="2"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (236 + i * 19) + '" y="140" width="2" height="10" fill="#5a3a1a"/>').join("") + '<path d="M230 142h170" stroke="#5a3a1a" stroke-width="1.5"/>' +
      /* sand */
      '<path d="M0 196q100 -10 200 0t200 0v64H0z" fill="#ecd6a8"/>' +
      /* lifeguard stand */
      '<g transform="translate(90 196)"><path d="M-14 0l6 -40M14 0l-6 -40M-10 -14h20M-12 -26h24" stroke="#f6efe0" stroke-width="3"/><rect x="-14" y="-48" width="28" height="8" fill="#f6efe0"/><rect x="-12" y="-66" width="24" height="18" fill="#c8102e"/><g class="csbw-flag"><path d="M14 -66h16l-4 6 4 6h-16z" fill="' + ORANGE + '"/></g></g>' +
      /* a beach umbrella and a pair of flip flops */
      '<path d="M300 236v-40" stroke="#fff" stroke-width="2"/><path d="M270 198q30 -26 60 0z" fill="' + ORANGE + '"/><path d="M290 198q10 -26 20 0z" fill="' + CREAM + '"/>' +
      '<ellipse cx="180" cy="232" rx="6" ry="12" fill="#5aa0c8"/><ellipse cx="196" cy="234" rx="6" ry="12" fill="#5aa0c8"/>' +
      '<g class="csbw-bird"><path d="M30 60q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">MEANWHILE IN CAROLINA</text>',
      sky("csbw4", "#f07a4a", "#ffd0a0"));
  }

  /* ROOM 4: his corner in Brentwood, Franklin Rd and Old Hickory Blvd, brick wall with his name, Ravenswood Mansion (red brick, white columned portico) behind */
  function csbwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#csbw5)"/>' +
      '<g class="csbw-cl"><ellipse cx="300" cy="28" rx="40" ry="7" fill="#fff" opacity=".5"/></g>' +
      '<path d="M170 150q110 -20 230 0v40H170z" fill="#6a9a48"/>' +
      tree(186, 152, 1.1, "#4a7a3e") + tree(392, 152, 1.2, "#3f6a38") +
      /* Ravenswood */
      '<g transform="translate(290 152)">' +
      '<rect x="-80" y="-56" width="160" height="56" fill="' + BRICK + '"/><path d="M-86 -56l86 -26 86 26z" fill="#4a4e56"/><rect x="-50" y="-96" width="8" height="18" fill="' + BRICK + '"/><rect x="42" y="-96" width="8" height="18" fill="' + BRICK + '"/>' +
      [-68, -50, 36, 54].map(x => '<rect x="' + x + '" y="-48" width="12" height="16" fill="#2c2a36" stroke="#fff" stroke-width="1.5"/><rect x="' + x + '" y="-24" width="12" height="16" fill="#2c2a36" stroke="#fff" stroke-width="1.5"/>').join("") +
      '<path d="M-34 -62l34 -20 34 20z" fill="' + CREAM + '"/><rect x="-34" y="-62" width="68" height="5" fill="' + CREAM + '"/>' +
      [-30, -14, 10, 26].map(x => '<rect x="' + x + '" y="-57" width="5" height="57" fill="' + CREAM + '"/>').join("") +
      '<rect x="-7" y="-26" width="14" height="26" fill="#3a2418"/><path d="M-12 -40h24" stroke="' + CREAM + '" stroke-width="2"/><rect x="-40" y="0" width="80" height="4" fill="#ccc"/></g>' +
      '<path d="M0 190h400v70H0z" fill="#5a5e66"/><path d="M0 222h400" stroke="#f3d34a" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* brick wall with the tag */
      '<clipPath id="csbwwall"><rect x="0" y="96" width="156" height="124"/></clipPath><rect x="0" y="96" width="156" height="124" fill="#a8452e"/><g clip-path="url(#csbwwall)">' +
      Array.from({ length: 11 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (c * 20 + (r % 2 ? 0 : -10)) + '" y="' + (96 + r * 12) + '" width="19" height="11" fill="none" stroke="#7a3020" stroke-width="1"/>').join("")).join("") + '</g>' +
      tag("CONNER", 6, 146, 28, ORANGE, -8) + tag("SMITH", 22, 190, 32, "#fff", -6) +
      '<g class="csbw-sp"><circle cx="134" cy="150" r="3" fill="' + ORANGE + '"/></g><g class="csbw-sp csbw-sp2"><circle cx="140" cy="160" r="2.5" fill="#fff"/></g>' +
      '<rect x="174" y="60" width="5" height="160" fill="#556"/>' + sign(124, 66, 104, "Franklin Rd") + sign(146, 92, 124, "Old Hickory Blvd") +
      '<g transform="translate(250 196)">' + pickup(NAVY) + '</g>' +
      '<text x="290" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">BRENTWOOD, TENNESSEE</text>',
      sky("csbw5", SKY, "#f6e2b8"));
  }

  window.SCENES = { csbwroad, csbwball, csbwsmoky, csbwbeach, csbwcorner };
})();
