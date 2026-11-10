/* drewparker scenes (Regions: ATLANTA / Genres: country; Covington, Newton County, Georgia). CSS classes prefixed dpcv- (the page's own anim-train is kept).
   Sources: Wikipedia "Drew Parker (musician)" (from Covington GA; grew up singing in church, gospel CDs in high school; Warner Music Nashville);
   Fox 5 Atlanta "Covington native gets first Grammy nomination"; YouTube "At The End Of The Dirt Road (Sold Out at The Georgia Theatre)";
   Wikipedia "Newton County Courthouse (Georgia)" (1884, Second Empire, on Courthouse Square, 33.597N 83.860W); Covington square streets Clark St / Monticello St (Mystic Grill 1116 Clark St, Bread and Butter 1124 Monticello St).
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8b04a", CLAY = "#c0522e", PINE = "#3f6a3a", CREAM = "#f3ead8", BRICK = "#9a3b2a";
  const css = '<style>' +
    '@keyframes dpcvglow{0%,100%{opacity:.4}50%{opacity:1}}.dpcv-glow{animation:dpcvglow 2.2s ease-in-out infinite}.dpcv-g2{animation-delay:-1.1s}' +
    '@keyframes dpcvnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-56px);opacity:0}}.dpcv-nt{animation:dpcvnote 3.2s ease-out infinite}.dpcv-nt2{animation-delay:-1.1s}.dpcv-nt3{animation-delay:-2.2s}' +
    '@keyframes dpcvcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.dpcv-cl{animation:dpcvcloud 14s ease-in-out infinite alternate}' +
    '@keyframes dpcvcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.dpcv-car{animation:dpcvcar 4s linear infinite}.dpcv-c2{animation-delay:-2s}' +
    '@keyframes dpcvsmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(10px,-50px) scale(1.6);opacity:0}}.dpcv-sm{transform-box:fill-box;transform-origin:50% 50%;animation:dpcvsmoke 3s ease-out infinite}.dpcv-sm2{animation-delay:-1.5s}' +
    '@keyframes dpcvswing{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.dpcv-bell{transform-box:fill-box;transform-origin:50% 0;animation:dpcvswing 1.4s ease-in-out infinite}' +
    '@keyframes dpcvtail{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(20deg)}}.dpcv-tail{transform-box:fill-box;transform-origin:0 100%;animation:dpcvtail .5s ease-in-out infinite}' +
    '@keyframes dpcvbulb{0%,49%{opacity:1}50%,100%{opacity:.25}}.dpcv-bl{animation:dpcvbulb .8s steps(1) infinite}.dpcv-bl2{animation-delay:-.4s}' +
    '@keyframes dpcvhand{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.dpcv-hand{transform-box:view-box;animation:dpcvhand 12s linear infinite}' +
    '@keyframes dpcvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dpcv-sp{animation:dpcvspray 1.4s ease-out infinite}.dpcv-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="dpcv-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const pine = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-8" width="4" height="10" fill="#4a3424"/><path d="M0 -60L-12 -36h6L-16 -18h8L-20 -6h40L8 -18h8L6 -36h6z" fill="' + c + '"/></g>';
  /* Newton County Courthouse: red brick Second Empire block, white trim, mansard tower with a clock */
  const courthouse = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="-70" y="-60" width="140" height="60" fill="' + BRICK + '"/><rect x="-74" y="-64" width="148" height="6" fill="' + CREAM + '"/>' +
    [-56, -36, -16, 4, 24, 44].map(wx => '<rect x="' + wx + '" y="-50" width="12" height="18" rx="5" fill="#2c2a36" stroke="' + CREAM + '" stroke-width="1.5"/><rect x="' + wx + '" y="-24" width="12" height="18" rx="5" fill="#2c2a36" stroke="' + CREAM + '" stroke-width="1.5"/>').join("") +
    '<rect x="-20" y="-110" width="40" height="50" fill="' + BRICK + '"/><path d="M-24 -110l6 -22h36l6 22z" fill="#5a5e66"/><rect x="-6" y="-146" width="12" height="14" fill="#5a5e66"/><path d="M-8 -146l8 -10 8 10z" fill="#5a5e66"/>' +
    '<circle cx="0" cy="-90" r="11" fill="' + CREAM + '" stroke="#333" stroke-width="1.5"/><path d="M0 -90v-8" stroke="#222" stroke-width="1.6"><animateTransform attributeName="transform" type="rotate" from="0 0 -90" to="360 0 -90" dur="12s" repeatCount="indefinite"/></path><path d="M0 -90h5" stroke="#222" stroke-width="1.6"/>' +
    '<rect x="-14" y="-18" width="28" height="18" fill="#3a2418" stroke="' + CREAM + '" stroke-width="2"/></g>';

  /* ROOM 0: I-20 east out of Atlanta, the green exit sign for Covington, a pickup rolling in (Covington has no train; this is the drive in) */
  function dpcvroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#dpcv1)"/>' +
      '<g class="dpcv-cl"><ellipse cx="70" cy="30" rx="40" ry="8" fill="#fff" opacity=".55"/><ellipse cx="300" cy="22" rx="46" ry="8" fill="#fff" opacity=".45"/></g>' +
      [10, 40, 70, 330, 360, 390].map((x, i) => pine(x, 168, .9 + (i % 2) * .2, i % 2 ? PINE : "#355c33")).join("") +
      '<path d="M0 168h400v92H0z" fill="#4a7a3a"/>' +
      '<path d="M0 182h400v62H0z" fill="#3a3a3e"/><path d="M0 212h400" stroke="#f3d34a" stroke-width="2.5" stroke-dasharray="20 14"/><path d="M0 184h400M0 242h400" stroke="#eee" stroke-width="2"/>' +
      /* overhead sign gantry */
      '<rect x="96" y="40" width="5" height="142" fill="#8a8e94"/><rect x="300" y="40" width="5" height="142" fill="#8a8e94"/><rect x="96" y="44" width="209" height="5" fill="#8a8e94"/>' +
      '<rect x="112" y="52" width="178" height="84" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      /* interstate shield, blue with red cap */
      '<g transform="translate(150 92)"><path d="M-18 -18h36q2 22 -18 34q-20 -12 -18 -34z" fill="#fff"/><path d="M-15 -15h30q1 18 -15 28q-16 -10 -15 -28z" fill="#0b4ea2"/><path d="M-15 -15h30v6h-30z" fill="#c8102e"/><text x="0" y="6" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">20</text></g>' +
      '<text x="176" y="80" ' + font + ' font-size="13" fill="#fff">EAST</text><text x="176" y="104" ' + font + ' font-size="18" fill="#fff">Covington</text><text x="176" y="124" ' + font + ' font-size="10" fill="#fff">Newton County</text>' +
      '<text x="20" y="34" ' + font + ' font-size="9" fill="#fff" opacity=".8">35 MILES EAST OF ATLANTA</text>' +
      /* the pickup rolling in */
      '<g class="anim-train"><g transform="translate(150 186)"><rect x="0" y="6" width="70" height="20" rx="4" fill="' + CLAY + '"/><path d="M40 6v-14h18l12 14z" fill="' + CLAY + '"/><path d="M44 4v-9h12l8 9z" fill="#bfe0ee"/><rect x="2" y="2" width="36" height="5" fill="#7a2e18"/>' +
      '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="56" cy="28" r="7" fill="#222"/><circle cx="56" cy="28" r="3" fill="#aaa"/><rect x="66" y="12" width="5" height="4" fill="#ffe9a0" class="dpcv-glow"/></g></g>' +
      '<g class="dpcv-car"><rect x="0" y="220" width="34" height="12" rx="3" fill="#e0e0e4"/><circle cx="8" cy="233" r="4" fill="#222"/><circle cx="26" cy="233" r="4" fill="#222"/></g>',
      sky("dpcv1", "#7fb8e0", "#f3d9a8"));
  }

  /* ROOM 1: the little white clapboard church where he grew up singing gospel */
  function dpcvchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#dpcv2)"/>' +
      '<g class="dpcv-cl"><ellipse cx="80" cy="36" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="320" cy="26" rx="44" ry="8" fill="#fff" opacity=".5"/></g>' +
      pine(30, 190, 1.2, PINE) + pine(70, 196, .9, "#355c33") + pine(360, 190, 1.3, PINE) + pine(330, 198, .9, "#355c33") +
      '<path d="M0 190h400v70H0z" fill="#5a8a42"/><path d="M180 260l14 -70h12l14 70z" fill="' + CLAY + '" opacity=".85"/>' +
      /* church body with clapboard lines */
      '<rect x="130" y="110" width="140" height="82" fill="#f7f5ef"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M130 ' + (116 + i * 8) + 'h140" stroke="#d8d4ca" stroke-width="1"/>').join("") +
      '<path d="M122 112l78 -40 78 40z" fill="#5a5e66"/>' +
      /* steeple */
      '<rect x="186" y="44" width="28" height="40" fill="#f7f5ef" stroke="#d8d4ca"/><path d="M182 46l18 -36 18 36z" fill="#f7f5ef" stroke="#d8d4ca"/><path d="M200 2v12M195 7h10" stroke="' + GOLD + '" stroke-width="2.5"/>' +
      '<rect x="192" y="52" width="16" height="18" fill="#2c2a36"/><g class="dpcv-bell"><path d="M195 56q5 -6 10 0v8h-10z" fill="' + GOLD + '"/></g>' +
      '<rect x="184" y="150" width="32" height="42" fill="#7a4a2a"/><path d="M184 150q16 -16 32 0" fill="#7a4a2a"/><path d="M200 140v52" stroke="#5a3418" stroke-width="1.5"/>' +
      [146, 240].map(x => '<rect x="' + x + '" y="128" width="16" height="30" rx="8" fill="#a8d4e8" stroke="#fff" stroke-width="2"/><path d="M' + (x + 8) + ' 128v30M' + x + ' 142h16" stroke="#fff" stroke-width="1.2"/>').join("") +
      '<rect x="176" y="192" width="48" height="5" fill="#ccc"/><rect x="170" y="197" width="60" height="5" fill="#bbb"/>' +
      note(108, 140, GOLD) + note(286, 128, "#fff", "dpcv-nt2") + note(250, 100, GOLD, "dpcv-nt3") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">SUNDAY MORNIN&apos;, CLIP-ON TIE</text>',
      sky("dpcv2", "#9fd0ee", "#f7e8c4"));
  }

  /* ROOM 2: at the end of the dirt road: mailbox, pines, the pond, barn in the back, a green tractor on the hill, burn pile smoke */
  function dpcvdirt() {
    return svg(
      '<rect width="400" height="260" fill="url(#dpcv3)"/>' +
      '<circle cx="330" cy="70" r="26" fill="#ffcf6a" class="dpcv-glow"/>' +
      '<path d="M0 150q100 -40 200 -10t200 -6v126H0z" fill="#6a9a48"/>' +
      [20, 52, 84, 300, 336, 372].map((x, i) => pine(x, 150 - (i % 3) * 4, 1 + (i % 2) * .25, i % 2 ? "#2f5a2e" : PINE)).join("") +
      /* rainbow ending at the farm */
      '<g opacity=".55" fill="none" stroke-width="5"><path d="M110 150q90 -150 190 -10" stroke="#e0503a"/><path d="M118 150q82 -136 174 -10" stroke="#f0a83a"/><path d="M126 150q74 -122 158 -10" stroke="#f3d34a"/><path d="M134 150q66 -108 142 -10" stroke="#5aa04a"/></g>' +
      /* barn */
      '<rect x="238" y="114" width="54" height="40" fill="#a8302a"/><path d="M232 116l33 -24 33 24z" fill="#7a2420"/><rect x="256" y="128" width="18" height="26" fill="#f3ead8"/><path d="M256 128l18 26M274 128l-18 26" stroke="#a8302a" stroke-width="2"/>' +
      /* tractor on the hill */
      '<g transform="translate(160 122)"><rect x="0" y="0" width="26" height="12" fill="#3f8a3a"/><rect x="16" y="-12" width="12" height="12" fill="#3f8a3a"/><rect x="18" y="-10" width="8" height="7" fill="#bfe0ee"/><circle cx="6" cy="14" r="5" fill="#222"/><circle cx="6" cy="14" r="2" fill="#f3d34a"/><circle cx="24" cy="12" r="8" fill="#222"/><circle cx="24" cy="12" r="3" fill="#f3d34a"/><rect x="4" y="-8" width="3" height="8" fill="#555"/></g>' +
      '<ellipse cx="170" cy="104" rx="5" ry="4" fill="#ccc" class="dpcv-sm"/>' +
      /* pond */
      '<ellipse cx="90" cy="196" rx="60" ry="14" fill="#5a9ac0"/><path d="M60 194q10 -4 20 0M100 198q10 -4 20 0" stroke="#bfe0ee" stroke-width="1.5" fill="none"/>' +
      /* the dirt road */
      '<path d="M170 260q20 -60 80 -106h10q-40 50 -20 106z" fill="' + CLAY + '"/>' +
      /* fence and gate */
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (290 + i * 14) + '" y="176" width="3" height="26" fill="#7a5a3a"/>').join("") + '<path d="M290 182h110M290 194h110" stroke="#8a8e94" stroke-width="1" stroke-dasharray="3 2"/>' +
      /* mailbox */
      '<rect x="146" y="200" width="4" height="36" fill="#6a4a2a"/><rect x="132" y="186" width="32" height="16" rx="8" fill="#8a8e94"/><rect x="160" y="182" width="3" height="10" fill="' + CLAY + '"/><text x="146" y="198" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">PARKER</text>' +
      /* burn pile */
      '<path d="M330 236l10 -12 10 12z" fill="#5a3a24"/><path d="M336 226q4 -10 8 0" fill="#f0a83a" class="dpcv-glow"/><circle cx="340" cy="214" r="6" fill="#bbb" class="dpcv-sm"/><circle cx="342" cy="210" r="5" fill="#ccc" class="dpcv-sm dpcv-sm2"/>' +
      /* dog wagging */
      '<g transform="translate(206 222)"><ellipse cx="0" cy="0" rx="12" ry="6" fill="#7a5a3a"/><circle cx="12" cy="-5" r="5" fill="#7a5a3a"/><rect x="-9" y="3" width="3" height="8" fill="#7a5a3a"/><rect x="6" y="3" width="3" height="8" fill="#7a5a3a"/><path class="dpcv-tail" d="M-12 -2l-8 -8" stroke="#7a5a3a" stroke-width="3" stroke-linecap="round"/></g>',
      sky("dpcv3", "#f0a86a", "#ffe8b4"));
  }

  /* ROOM 3: the Georgia Theatre in Athens, sold out: red-brick front, the tall vertical sign, marquee bulbs chasing */
  function dpcvtheatre() {
    return svg(
      '<rect width="400" height="260" fill="url(#dpcv4)"/>' +
      [[12, 70], [40, 50], [330, 60], [362, 80]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="30" height="' + (200 - b[1]) + '" fill="#2a2a3a"/>').join("") +
      '<rect x="110" y="50" width="180" height="160" fill="#8a3428"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M110 ' + (60 + i * 12) + 'h180" stroke="#6a2820" stroke-width="1"/>').join("") +
      '<rect x="104" y="44" width="192" height="8" fill="#e8dcc4"/>' +
      [130, 170, 210, 250].map(x => '<rect x="' + x + '" y="62" width="20" height="30" fill="#ffd98a" opacity=".8" class="dpcv-glow"/>').join("") +
      /* vertical sign */
      '<rect x="186" y="6" width="28" height="104" rx="3" fill="#1a1a22" stroke="' + GOLD + '" stroke-width="2"/>' +
      'THEATRE'.split("").map((c, i) => '<text x="200" y="' + (22 + i * 13) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#ff5a3a" class="dpcv-glow ' + (i % 2 ? "dpcv-g2" : "") + '">' + c + '</text>').join("") +
      /* marquee */
      '<path d="M96 112h208l-10 34H106z" fill="#1a1a22" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (104 + i * 10.3) + '" cy="116" r="2" fill="#ffe9a0" class="dpcv-bl ' + (i % 2 ? "dpcv-bl2" : "") + '"/>').join("") +
      '<rect x="118" y="122" width="164" height="20" fill="#f7f3ea"/><text x="200" y="137" text-anchor="middle" ' + font + ' font-size="10.5" fill="#111">DREW PARKER - SOLD OUT</text>' +
      '<rect x="160" y="160" width="80" height="50" fill="#2a1a14"/>' + [170, 200, 222].map(x => '<rect x="' + x + '" y="166" width="14" height="44" fill="#d8b46a" opacity=".6"/>').join("") +
      '<path d="M0 210h400v50H0z" fill="#4a4a52"/><path d="M0 214h400" stroke="#888" stroke-width="2"/>' +
      /* the line out front */
      Array.from({ length: 14 }, (_, i) => '<g transform="translate(' + (20 + i * 26) + ' 228)"><circle cx="0" cy="-12" r="5" fill="#2a2a2a"/><rect x="-5" y="-7" width="10" height="16" rx="3" fill="' + ['#c0522e', '#3f6a8a', '#e8b04a', '#5a8a42'][i % 4] + '"/></g>').join("") +
      note(70, 160, GOLD) + note(330, 150, "#fff", "dpcv-nt2") +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ATHENS, GA</text>',
      sky("dpcv4", "#14122a", "#4a2a48"));
  }

  /* ROOM 4: his corner on Covington's square, Clark St and Monticello St, brick wall with his name, the courthouse clock tower behind */
  function dpcvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dpcv5)"/>' +
      '<g class="dpcv-cl"><ellipse cx="60" cy="30" rx="36" ry="7" fill="#fff" opacity=".5"/></g>' +
      courthouse(296, 170, .95) +
      pine(200, 172, 1, PINE) + pine(392, 172, 1.1, PINE) +
      '<path d="M0 170h400v90H0z" fill="#8a8e94"/><path d="M0 200h400" stroke="#f3d34a" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* brick wall with the tag */
      '<clipPath id="dpcvwall"><rect x="0" y="100" width="150" height="120"/></clipPath><rect x="0" y="100" width="150" height="120" fill="#a8452e"/><g clip-path="url(#dpcvwall)">' + Array.from({ length: 10 }, (_, r) => Array.from({ length: 8 }, (_, c) => '<rect x="' + (c * 20 + (r % 2 ? 0 : -10)) + '" y="' + (100 + r * 12) + '" width="19" height="11" fill="none" stroke="#7a2e1e" stroke-width="1"/>').join("")).join("") + '</g>' +
      tag("DREW", 14, 150, 30, GOLD, -8) + tag("PARKER", 10, 190, 26, "#fff", -6) +
      '<g class="dpcv-sp"><circle cx="128" cy="150" r="3" fill="' + GOLD + '"/></g><g class="dpcv-sp dpcv-sp2"><circle cx="134" cy="160" r="2.5" fill="#fff"/></g>' +
      /* sign pole */
      '<rect x="174" y="60" width="5" height="160" fill="#556"/>' + sign(146, 66, 92, "Clark St") + sign(160, 92, 112, "Monticello St") +
      /* the gazebo bench and a lamp */
      '<rect x="214" y="150" width="4" height="50" fill="#222"/><circle cx="216" cy="146" r="6" fill="#ffe9a0" class="dpcv-glow"/>' +
      '<text x="290" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">COVINGTON, GEORGIA</text>',
      sky("dpcv5", "#f0b47a", "#7fb8e0"));
  }

  window.SCENES = { dpcvroad, dpcvchurch, dpcvdirt, dpcvtheatre, dpcvcorner };
})();
