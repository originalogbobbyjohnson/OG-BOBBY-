/* killermike scenes (Regions tab: Atlanta; Adamsville / Collier Heights). CSS classes and ids prefixed km- (the page's own anim-train is kept).
   1 H. E. Holmes on MARTA's Blue line (the west end of the line, between Adamsville and Collier Heights): elevated side platform, concrete canopy, a silver MARTA train sliding in, I-20 traffic under the pines.
   2 The barbershop (he owns the SWAG Shop barbershops on the Westside): the striped pole spinning, the chair, the long mirror, clippers buzzing. No shop logo.
   3 Collier Heights historic district: the mid-century brick ranch houses Black Atlanta built for itself in the 1950s-60s, low roofs, picture windows, a sprinkler ticking on the lawn.
   4 Sunday church ("R.A.P. Music": "This is church: front, pew, amen, pulpit"): wood pews, the pulpit with a microphone, stained glass, organ pipes, a hand fan waving.
   5 Martin Luther King Jr Dr SW and Fairburn Rd SW in Adamsville: green signs, KILLER MIKE tagged on the brick, downtown's skyline far off with the pink-granite stepped Georgia-Pacific tower. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmglow{0%,100%{opacity:.4}50%{opacity:1}}.km-glow{animation:kmglow 2.2s ease-in-out infinite}.km-g2{animation-delay:-1.1s}.km-g3{animation-delay:-.5s}' +
    '@keyframes kmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.km-flk{animation:kmflick 2.4s infinite}.km-flk2{animation-delay:.8s}' +
    '@keyframes kmpole{from{transform:translateY(0)}to{transform:translateY(-24px)}}.km-pole{animation:kmpole 1.2s linear infinite}' +
    '@keyframes kmbuzz{0%,100%{transform:translate(0,0)}25%{transform:translate(.8px,-.6px)}75%{transform:translate(-.8px,.6px)}}.km-buzz{animation:kmbuzz .12s linear infinite}' +
    '@keyframes kmspr{0%,100%{transform:rotate(-38deg)}50%{transform:rotate(38deg)}}.km-spr{transform-box:fill-box;transform-origin:50% 100%;animation:kmspr 3s ease-in-out infinite}' +
    '@keyframes kmdrop{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(14px);opacity:0}}.km-drop{animation:kmdrop 1s ease-in infinite}.km-d2{animation-delay:.35s}.km-d3{animation-delay:.7s}' +
    '@keyframes kmfan{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.km-fan{transform-box:fill-box;transform-origin:50% 100%;animation:kmfan .9s ease-in-out infinite}' +
    '@keyframes kmcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.km-car{animation:kmcar 6s linear infinite}.km-car2{animation-duration:8s;animation-delay:-3s}' +
    '@keyframes kmsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.km-sp{animation:kmsp 1.4s ease-out infinite}.km-sp2{animation-delay:.45s}' +
    '@keyframes kmbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.km-bird{animation:kmbird 10s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="30" height="20" rx="4" fill="' + color + '"/><text x="' + (x + 15) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2b632", RED = "#d6402e", BLUE = "#0075b2", COBALT = "#2b7bd1";

  /* 1. H. E. Holmes: elevated side platform, concrete canopy, black sign with the BL bullet, silver MARTA train, I-20 under the pines */
  function kmstation() {
    const tr = '<g class="anim-train"><rect x="20" y="100" width="340" height="70" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 46) + '" y="112" width="32" height="24" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="20" y="142" width="340" height="9" fill="' + BLUE + '"/><rect x="20" y="153" width="340" height="3" fill="#f39a1e"/>' +
      '<path d="M120 112v54M246 112v54" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="340" y="104" width="20" height="62" rx="4" fill="#a3a9b0"/><circle cx="352" cy="160" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#km1)"/>' +
      '<g class="km-bird"><path d="M0 22q6 -6 12 0q6 -6 12 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      /* Georgia pines behind */
      '<g fill="#2f5b36">' + [20, 60, 100, 300, 340, 380].map((x, i) => '<path d="M' + x + ' ' + (70 + (i % 2) * 8) + 'l-16 34h32z"/><path d="M' + x + ' ' + (58 + (i % 2) * 8) + 'l-12 26h24z"/>').join("") + '</g>' +
      '<g fill="#a7b8c8" opacity=".7"><rect x="150" y="74" width="20" height="30"/><rect x="176" y="66" width="16" height="38"/><rect x="214" y="78" width="24" height="26"/></g>' +
      /* canopy */
      '<rect x="0" y="18" width="400" height="16" fill="#c4bdb1"/><rect x="0" y="32" width="400" height="5" fill="#8e877b"/>' +
      [40, 160, 280].map((x, i) => '<rect class="km-flk' + (i === 1 ? " km-flk2" : "") + '" x="' + x + '" y="37" width="70" height="4" rx="2" fill="#fff8dc"/>').join("") +
      tr +
      /* platform edge, then the elevated deck and the highway underneath */
      '<rect x="0" y="170" width="400" height="7" fill="#f2c200"/><rect x="0" y="177" width="400" height="20" fill="#a9a49a"/>' +
      '<rect x="0" y="197" width="400" height="9" fill="#7d776c"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 9) + '" y="206" width="18" height="54" fill="#8e877b"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a40"/><path d="M0 248h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="km-car"><rect x="0" y="238" width="44" height="12" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="3.5" fill="#111"/><circle cx="34" cy="251" r="3.5" fill="#111"/></g>' +
      '<g class="km-car km-car2"><rect x="0" y="240" width="52" height="12" rx="4" fill="#e6e6e6"/><circle cx="12" cy="253" r="3.5" fill="#111"/><circle cx="40" cy="253" r="3.5" fill="#111"/></g>' +
      [26, 374].map(x => '<rect x="' + (x - 7) + '" y="37" width="14" height="133" fill="#a39c8f"/>').join("") +
      '<rect x="64" y="46" width="272" height="44" rx="3" fill="#111"/><text x="78" y="66" ' + font + ' font-size="15" fill="#fff">H. E. Holmes</text><text x="78" y="83" ' + font + ' font-size="10" fill="#c8c8c8">END OF THE LINE · WEST</text>' +
      bullet(292, 68, "BL", BLUE),
      sky("km1", "#8cc4ec", "#f1e8d6"));
  }

  /* 2. The barbershop: spinning pole, chair, mirror, clippers */
  function kmbarber() {
    const stripes = Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (i * 12) + 'l24 -12v8l-24 12z" fill="' + (i % 2 ? COBALT : RED) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#efe6d6"/>' +
      /* checker floor */
      '<rect x="0" y="196" width="400" height="64" fill="#e9e3d6"/>' + Array.from({ length: 40 }, (_, i) => '<rect x="' + ((i % 20) * 20 + (Math.floor(i / 20) % 2) * 10) + '" y="' + (196 + Math.floor(i / 20) * 16) + '" width="10" height="16" fill="#1d1d22"/>').join("") +
      Array.from({ length: 40 }, (_, i) => '<rect x="' + ((i % 20) * 20 + (Math.floor(i / 20) % 2 ? 0 : 10)) + '" y="' + (228 + Math.floor(i / 20) * 16) + '" width="10" height="16" fill="#1d1d22"/>').join("") +
      /* wall wainscot + mirror */
      '<rect x="0" y="150" width="400" height="46" fill="#5b2f1e"/><rect x="0" y="148" width="400" height="4" fill="#c9a24a"/>' +
      '<rect x="96" y="30" width="290" height="108" rx="4" fill="#b9d4de" stroke="#c9a24a" stroke-width="4"/><path d="M120 40l40 90M180 40l30 70M300 40l50 90" stroke="#fff" stroke-width="3" opacity=".35"/>' +
      '<rect x="96" y="136" width="290" height="10" fill="#d8d0c0"/><g fill="#3b6fa0"><rect x="120" y="124" width="10" height="14" rx="2"/><rect x="136" y="128" width="8" height="10" rx="2" fill="#c84a3a"/><rect x="330" y="122" width="12" height="16" rx="2" fill="#2e8a54"/></g>' +
      /* BARBER SHOP sign */
      '<rect x="160" y="8" width="160" height="22" rx="3" fill="#1d1d22"/><text x="240" y="24" text-anchor="middle" ' + font + ' font-size="13" letter-spacing="3" fill="' + GOLD + '" class="km-glow">BARBER SHOP</text>' +
      /* barber pole */
      '<rect x="22" y="40" width="40" height="10" rx="5" fill="#d8d8d8"/><rect x="22" y="174" width="40" height="10" rx="5" fill="#d8d8d8"/>' +
      '<clipPath id="kmclip"><rect x="30" y="50" width="24" height="124" rx="4"/></clipPath><rect x="30" y="50" width="24" height="124" fill="#fff"/>' +
      '<g clip-path="url(#kmclip)"><g transform="translate(30 50)"><g class="km-pole">' + stripes + '<g transform="translate(0 144)">' + stripes + '</g></g></g></g>' +
      '<rect x="30" y="50" width="24" height="124" rx="4" fill="none" stroke="#999" stroke-width="2"/><circle cx="42" cy="36" r="8" fill="#ddd"/>' +
      /* barber chair */
      '<rect x="196" y="84" width="76" height="66" rx="10" fill="#9b1d1d" stroke="#5a0f0f" stroke-width="2"/><rect x="186" y="140" width="96" height="22" rx="6" fill="#b32424"/>' +
      '<rect x="182" y="126" width="12" height="30" rx="4" fill="#c8c8c8"/><rect x="274" y="126" width="12" height="30" rx="4" fill="#c8c8c8"/>' +
      '<rect x="228" y="162" width="12" height="28" fill="#b9b9b9"/><ellipse cx="234" cy="196" rx="34" ry="7" fill="#a0a0a0"/><rect x="206" y="176" width="56" height="6" rx="3" fill="#c8c8c8"/>' +
      /* clippers buzzing + hair bits */
      '<g class="km-buzz"><rect x="300" y="166" width="16" height="34" rx="5" fill="#2a2a2a" transform="rotate(-30 308 183)"/><rect x="296" y="160" width="18" height="6" rx="1" fill="#c9a24a" transform="rotate(-30 305 163)"/></g>' +
      '<path d="M296 158l-6 -6M300 154l-2 -8M306 154l3 -7" stroke="#2a2a2a" stroke-width="1.5" class="km-glow"/>',
      "");
  }

  /* 3. Collier Heights: mid-century brick ranch homes, picture window, carport, magnolia, sprinkler */
  function kmcollier() {
    const house = (x, y, s, brick, trim) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path d="M-10 40L60 18L210 18L280 40z" fill="#5a5148"/><rect x="0" y="40" width="270" height="62" fill="' + brick + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (48 + i * 8) + 'h270" stroke="#000" stroke-width=".6" opacity=".18"/>').join("") +
      '<rect x="20" y="52" width="80" height="32" fill="#bcd8e6" stroke="' + trim + '" stroke-width="3"/><path d="M47 52v32M73 52v32" stroke="' + trim + '" stroke-width="2"/>' +
      '<rect x="118" y="54" width="22" height="48" fill="' + trim + '"/><circle cx="135" cy="80" r="1.6" fill="#c9a24a"/>' +
      '<rect x="156" y="56" width="34" height="24" fill="#bcd8e6" stroke="' + trim + '" stroke-width="3"/>' +
      '<rect x="200" y="40" width="70" height="62" fill="#3a332d" opacity=".55"/><rect x="204" y="40" width="4" height="62" fill="' + trim + '"/><rect x="262" y="40" width="4" height="62" fill="' + trim + '"/>' +
      '<rect x="214" y="78" width="40" height="18" rx="4" fill="#3d6fb0"/><circle cx="222" cy="98" r="4" fill="#111"/><circle cx="246" cy="98" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#km3)"/>' +
      '<g fill="#2f5b36" opacity=".8"><circle cx="30" cy="96" r="30"/><circle cx="80" cy="88" r="24"/><circle cx="350" cy="90" r="28"/><circle cx="392" cy="100" r="22"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#6e9a48"/>' +
      house(30, 54, 1.05, "#a0523a", "#f4efe2") +
      /* magnolia with white blooms */
      '<rect x="356" y="110" width="10" height="70" fill="#4e3a2a"/><g fill="#24502c"><circle cx="350" cy="100" r="26"/><circle cx="378" cy="112" r="22"/><circle cx="340" cy="126" r="18"/></g>' +
      [[342, 92], [362, 104], [384, 112], [336, 122], [356, 120]].map((p, i) => '<circle class="km-glow' + (i % 2 ? " km-g2" : "") + '" cx="' + p[0] + '" cy="' + p[1] + '" r="3.4" fill="#fffaf0"/>').join("") +
      /* driveway + walk */
      '<path d="M240 162L300 260H360L262 162z" fill="#b5ada0"/><path d="M152 162l-12 98h18l10 -98z" fill="#c9c2b6"/>' +
      /* sprinkler */
      '<rect x="78" y="214" width="4" height="10" fill="#555"/><g class="km-spr"><path d="M80 214l0 -12" stroke="#777" stroke-width="2"/>' +
      [-14, -6, 2, 10].map((d, i) => '<circle class="km-drop' + (i % 3 === 1 ? " km-d2" : i % 3 === 2 ? " km-d3" : "") + '" cx="' + (80 + d) + '" cy="' + (196 - Math.abs(d) / 2) + '" r="1.8" fill="#bfe6ff"/>').join("") + '</g>' +
      /* historic marker */
      '<rect x="36" y="196" width="4" height="40" fill="#333"/><rect x="6" y="166" width="94" height="34" rx="3" fill="#1d2d4a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="53" y="180" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">COLLIER HEIGHTS</text><text x="53" y="193" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">HISTORIC DISTRICT</text>' +
      '<path d="M0 236h400" stroke="#5b8a3f" stroke-width="3"/>',
      sky("km3", "#7fbfe9", "#f6ead0"));
  }

  /* 4. Sunday church: front pew, pulpit with a mic, stained glass, organ pipes, a hand fan waving */
  function kmchurch() {
    const glass = (x) => '<path d="M' + x + ' 110v-58q22 -26 44 0v58z" fill="#1d1d24"/>' +
      '<path d="M' + (x + 4) + ' 106v-52q18 -22 36 0v52z" fill="#2a5aa8"/>' +
      '<path class="km-glow" d="M' + (x + 4) + ' 70h36M' + (x + 22) + ' 40v66" stroke="#1d1d24" stroke-width="2"/>' +
      '<path class="km-glow km-g2" d="M' + (x + 6) + ' 72h14v32h-14z" fill="' + RED + '" opacity=".85"/><path class="km-glow km-g3" d="M' + (x + 24) + ' 72h14v32h-14z" fill="' + GOLD + '" opacity=".85"/>' +
      '<circle class="km-glow" cx="' + (x + 22) + '" cy="58" r="7" fill="#7fd0c0" opacity=".9"/>';
    const pew = (y, s) => '<rect x="' + (20 - s) + '" y="' + y + '" width="' + (360 + 2 * s) + '" height="' + (14 + s / 3) + '" rx="3" fill="#6b3a1f"/><rect x="' + (20 - s) + '" y="' + (y + 14 + s / 3) + '" width="' + (360 + 2 * s) + '" height="' + (10 + s / 4) + '" fill="#4e2914"/>';
    return svg(
      '<rect width="400" height="260" fill="#3b2a24"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#e8dcc6"/><rect x="0" y="146" width="400" height="6" fill="#8a5a3a"/>' +
      glass(14) + glass(342) +
      /* organ pipes */
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (140 + i * 11) + '" y="' + (20 + Math.abs(5 - i) * 6) + '" width="8" height="' + (80 - Math.abs(5 - i) * 6) + '" rx="3" fill="#c9a24a" stroke="#8a6a20" stroke-width="1"/>').join("") +
      /* choir loft rail + robes */
      '<rect x="70" y="100" width="260" height="10" fill="#6b3a1f"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (88 + i * 28) + ' 100v-16q8 -8 16 0v16z" fill="' + (i % 2 ? "#5a2a7a" : "#7a3a9a") + '"/>').join("") +
      /* pulpit with mic */
      '<path d="M160 150l10 -38h60l10 38z" fill="#7a4424" stroke="#4e2914" stroke-width="2"/><rect x="164" y="106" width="72" height="8" rx="2" fill="#8a5434"/>' +
      '<path d="M200 128v-8" stroke="' + GOLD + '" stroke-width="3"/><path d="M198 120l-6 -16" stroke="#333" stroke-width="2"/><rect x="186" y="96" width="9" height="12" rx="4" fill="#2a2a2a" transform="rotate(-20 190 102)"/>' +
      '<text x="200" y="142" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="700" fill="' + GOLD + '">AMEN</text>' +
      /* pews */
      pew(166, 0) + pew(196, 10) + pew(230, 22) +
      /* a hand fan waving from the front pew */
      '<g class="km-fan"><path d="M300 166l-16 -30a20 20 0 0 1 32 0z" fill="#f2e8d0" stroke="#8a7a60" stroke-width="1.5"/><rect x="299" y="164" width="3" height="16" fill="#6b4a2a"/></g>',
      "");
  }

  /* 5. MLK Jr Dr SW and Fairburn Rd SW in Adamsville: green signs, KILLER MIKE tagged, downtown far off with the stepped Georgia-Pacific tower */
  function kmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#km5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 4 ? "" : "km-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 40) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      /* distant skyline */
      '<g fill="#2b2a44"><rect x="176" y="78" width="16" height="52"/><rect x="232" y="70" width="14" height="60"/><rect x="250" y="84" width="20" height="46"/><rect x="290" y="80" width="18" height="50"/></g>' +
      /* Georgia-Pacific tower: pink granite slab, its side stepping down in big notches */
      '<path d="M196 130V40h44v14h-8v14h-8v14h-8v14h-8v34z" fill="#c98a80"/><path d="M196 40h44" stroke="#e8b0a4" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M199 ' + (46 + i * 9) + 'h' + (i < 2 ? 38 : Math.max(10, 38 - (i - 1) * 4)) + '" stroke="#8a5a54" stroke-width="1" opacity=".55"/>').join("") +
      '<rect class="km-glow" x="214" y="34" width="4" height="6" fill="#ff5a4a"/>' +
      /* pines left and right */
      '<g fill="#1d3a26">' + [20, 54, 88, 330, 366].map(x => '<path d="M' + x + ' 76l-18 56h36z"/>').join("") + '</g>' +
      /* brick wall */
      '<rect x="0" y="130" width="400" height="94" fill="#7a3e2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#64301f" stroke-width="1"/>').join("") +
      tag("GRIND TIME", 18, 152, 15, GOLD, -3) + tag("KILLER MIKE", 20, 200, 40, RED, -6) + tag("WOOO", 280, 164, 18, "#fff", -4) + tag("KILLA KILL", 120, 218, 15, "#7fc8ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="km-car"><rect x="0" y="232" width="70" height="18" rx="5" fill="' + GOLD + '"/><rect x="12" y="225" width="42" height="11" rx="3" fill="#2a3442"/><circle cx="14" cy="250" r="6" fill="#111"/><circle cx="56" cy="250" r="6" fill="#111"/></g>' +
      '<rect x="356" y="86" width="6" height="138" fill="#2f2f2f"/>' + sign(234, 88, 152, "M L King Jr Dr SW") + sign(254, 114, 132, "Fairburn Rd SW") +
      '<g class="km-sp"><circle cx="228" cy="164" r="3" fill="' + RED + '" opacity=".7"/></g><g class="km-sp km-sp2"><circle cx="234" cy="158" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("km5", "#15183a", "#d0703a"));
  }

  window.SCENES = { kmstation: kmstation, kmbarber: kmbarber, kmcollier: kmcollier, kmchurch: kmchurch, kmcorner: kmcorner };
})();
