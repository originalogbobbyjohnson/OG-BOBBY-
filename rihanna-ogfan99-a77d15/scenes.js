/* rihanna scenes (Regions tab: CARIBBEAN; born in St. Michael, raised on Westbury New Road, Bridgetown, Barbados - the road was renamed Rihanna Drive in 2017). CSS classes prefixed rh- (the page's own anim-train is kept).
   1 Princess Alice Bus Terminal, Bridgetown: a blue Barbados Transport Board bus (yellow trim, white top) pulling in under the terminal canopy.
   2 Easter kites over the open ground by Westbury, where she flew kites as a kid, the sea past Spring Garden behind.
   3 Bridgetown's Parliament Buildings: pale coral-limestone neo-Gothic block and the four-faced clock tower with the Barbados flag, boats bobbing in the Careenage.
   4 Crop Over's Grand Kadooment on Spring Garden Highway (she plays mas every year): feathered costumes, bunting, a music truck.
   5 Rihanna Drive and Westbury Road: green street signs, RIHANNA tagged on the wall, the green-and-yellow childhood house, the Parliament clock tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rhkite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(10px,-8px) rotate(6deg)}}.rh-kite{transform-box:fill-box;transform-origin:50% 100%;animation:rhkite 3s ease-in-out infinite}.rh-kite2{animation-delay:-1.5s}.rh-kite3{animation-delay:-.8s;animation-duration:3.6s}' +
    '@keyframes rhtail{0%,100%{transform:skewX(0)}50%{transform:skewX(14deg)}}.rh-tail{transform-box:fill-box;transform-origin:50% 0%;animation:rhtail 1.4s ease-in-out infinite}' +
    '@keyframes rhbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.rh-bob{animation:rhbob 2s ease-in-out infinite}.rh-bob2{animation-delay:-1s}' +
    '@keyframes rhflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.rh-flag{transform-box:fill-box;transform-origin:0 50%;animation:rhflag 2s ease-in-out infinite}' +
    '@keyframes rhfeather{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.rh-fth{transform-box:fill-box;transform-origin:50% 100%;animation:rhfeather 1s ease-in-out infinite}.rh-fth2{animation-delay:-.5s}' +
    '@keyframes rhmarch{from{transform:translateX(-60px)}to{transform:translateX(60px)}}.rh-march{animation:rhmarch 6s ease-in-out infinite alternate}' +
    '@keyframes rhbunt{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.rh-bunt{animation:rhbunt 1.2s ease-in-out infinite}' +
    '@keyframes rhwave{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.rh-wv{animation:rhwave 3s ease-in-out infinite}.rh-wv2{animation-delay:-1.5s}' +
    '@keyframes rhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rh-sp{animation:rhspray 1.4s ease-out infinite}.rh-sp2{animation-delay:.45s}' +
    '@keyframes rhsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.rh-palm{transform-box:fill-box;transform-origin:50% 100%;animation:rhsway 3.4s ease-in-out infinite}.rh-palm2{animation-delay:-1.7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">' + txt + '</text>';
  const ROSE = "#ff3b6b", GOLD = "#ffc726", ULTRA = "#00267f", SKY = "#2f6bff";
  /* Barbados flag: ultramarine / gold / ultramarine with the black broken trident */
  const flag = (x, y, w, h, cls) => '<g class="' + (cls || "") + '"><rect x="' + x + '" y="' + y + '" width="' + w / 3 + '" height="' + h + '" fill="' + ULTRA + '"/><rect x="' + (x + w / 3) + '" y="' + y + '" width="' + w / 3 + '" height="' + h + '" fill="' + GOLD + '"/><rect x="' + (x + 2 * w / 3) + '" y="' + y + '" width="' + w / 3 + '" height="' + h + '" fill="' + ULTRA + '"/>' +
    '<path d="M' + (x + w / 2) + ' ' + (y + h * .2) + 'v' + (h * .65) + 'M' + (x + w / 2 - w * .1) + ' ' + (y + h * .25) + 'q0 ' + (h * .3) + ' ' + (w * .1) + ' ' + (h * .32) + 'q' + (w * .1) + ' -' + (h * .02) + ' ' + (w * .1) + ' -' + (h * .32) + '" stroke="#111" stroke-width="' + Math.max(1, w / 30) + '" fill="none"/></g>';
  const palm = (x, y, s, cls) => '<g class="rh-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q' + (4 * s) + ' -' + (40 * s) + ' ' + (2 * s) + ' -' + (80 * s) + '" stroke="#7a5a3a" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [[-34, -6], [-26, 12], [30, -8], [24, 12], [0, -26]].map(d => '<path d="M' + (x + 2 * s) + ' ' + (y - 80 * s) + 'q' + (d[0] * s / 2) + ' ' + (d[1] * s - 10 * s) + ' ' + (d[0] * s) + ' ' + (d[1] * s + 8 * s) + '" stroke="#2f7d32" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  /* the Parliament clock tower (pale coral limestone, four-faced clock, flag on top) */
  const tower = (x, y, s, op) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || 1) + '"><rect x="-16" y="0" width="32" height="120" fill="#e9e1cf" stroke="#b9ae96" stroke-width="1.5"/>' +
    '<path d="M-20 0l20 -34l20 34z" fill="#8a8f93" stroke="#6b7073" stroke-width="1"/><rect x="-20" y="-2" width="40" height="6" fill="#d8ceb8"/>' +
    '<circle cx="0" cy="18" r="10" fill="#ffffff" stroke="#3a3a3a" stroke-width="2"/><path d="M0 18v-7M0 18h6" stroke="#3a3a3a" stroke-width="1.6"/>' +
    '<path d="M-7 50v-10q7 -9 14 0v10z" fill="#5b6c7a"/><path d="M-7 84v-10q7 -9 14 0v10z" fill="#5b6c7a"/><path d="M0 -34v-20" stroke="#555" stroke-width="1.5"/>' +
    '<g class="rh-flag">' + flag(0, -54, 24, 14) + '</g></g>';

  /* 1. Princess Alice Bus Terminal, Bridgetown */
  function rhbus() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#18222c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="112" width="300" height="80" rx="10" fill="#1d4f9c" stroke="#0f2c5a" stroke-width="2"/>' +
      '<rect x="40" y="112" width="300" height="12" rx="6" fill="#f4f6f8"/>' + wins +
      '<rect x="40" y="160" width="300" height="6" fill="' + GOLD + '"/><rect x="306" y="128" width="30" height="34" rx="3" fill="#18222c"/>' +
      '<rect x="300" y="114" width="38" height="9" rx="2" fill="#111"/><text x="319" y="121.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">CITY</text>' +
      '<circle cx="90" cy="194" r="12" fill="#222"/><circle cx="90" cy="194" r="5" fill="#888"/><circle cx="286" cy="194" r="12" fill="#222"/><circle cx="286" cy="194" r="5" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rh1)"/>' +
      '<g class="rh-wv"><path d="M0 92h400v8H0z" fill="#3fa9d6" opacity=".7"/></g>' +
      palm(372, 100, 0.7) + palm(18, 100, 0.6, "rh-palm2") +
      '<rect x="0" y="84" width="400" height="10" fill="#d8dde2"/><path d="M0 84l200 -12l200 12z" fill="#eef1f4" stroke="#b7bec5" stroke-width="1"/>' +
      [30, 130, 270, 370].map(x => '<rect x="' + (x - 3) + '" y="94" width="6" height="104" fill="#8f979e"/>').join("") +
      '<rect x="0" y="198" width="400" height="62" fill="#6b6b68"/><rect x="0" y="198" width="400" height="5" fill="' + GOLD + '"/>' +
      bus +
      '<rect x="10" y="16" width="190" height="56" rx="3" fill="#111"/><text x="105" y="36" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">Princess Alice</text>' +
      '<text x="105" y="49" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="7.5" fill="#cfcfcf">BUS TERMINAL · BRIDGETOWN</text>' +
      '<rect x="62" y="56" width="86" height="12" rx="6" fill="#1d4f9c"/><text x="105" y="65" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">TRANSPORT BOARD</text>' +
      flag(330, 22, 48, 30) +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">PRINCESS ALICE HIGHWAY · UP TO WESTBURY</text>',
      sky("rh1", "#5fb2ea", "#e3f3fb"));
  }

  /* 2. Kites over Westbury (Barbados flies kites at Easter; she flew hers here as a kid) */
  function rhkite() {
    const kite = (x, y, c1, c2, cls, s) => '<g class="rh-kite ' + cls + '"><path d="M' + x + ' ' + (y - 22 * s) + 'l' + (16 * s) + ' ' + (20 * s) + 'l-' + (16 * s) + ' ' + (26 * s) + 'l-' + (16 * s) + ' -' + (26 * s) + 'z" fill="' + c1 + '" stroke="#222" stroke-width="1.2"/>' +
      '<path d="M' + x + ' ' + (y - 22 * s) + 'v' + (46 * s) + 'M' + (x - 16 * s) + ' ' + (y - 2 * s) + 'h' + (32 * s) + '" stroke="#5a3a1a" stroke-width="1"/><path d="M' + x + ' ' + (y - 22 * s) + 'l' + (16 * s) + ' ' + (20 * s) + 'h-' + (16 * s) + 'z" fill="' + c2 + '"/>' +
      '<g class="rh-tail"><path d="M' + x + ' ' + (y + 24 * s) + 'q-6 10 0 20q6 10 0 20" stroke="' + c2 + '" stroke-width="2" fill="none"/>' + [10, 22, 34].map(d => '<path d="M' + (x - 4) + ' ' + (y + 24 * s + d) + 'l8 -3" stroke="' + c1 + '" stroke-width="3"/>').join("") + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rh2)"/>' +
      '<rect x="0" y="150" width="400" height="22" fill="#2b8fc4"/><g class="rh-wv"><path d="M0 156q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f7" stroke-width="1.5" fill="none"/></g>' +
      '<g class="rh-wv rh-wv2"><path d="M10 164q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f7" stroke-width="1" fill="none"/></g>' +
      palm(40, 176, 0.75) + palm(360, 176, 0.85, "rh-palm2") +
      '<rect x="0" y="172" width="400" height="88" fill="#5fae4a"/><path d="M0 172q100 -8 200 0t200 0v6H0z" fill="#79c25e"/>' +
      [[120, 240], [200, 238], [290, 242]].map(p => '<path d="M' + p[0] + ' ' + p[1] + 'l-4 -10h8z" fill="#3d2a1a"/>').join("") +
      '<path d="M120 230L100 90M200 228L210 60M290 232L310 104" stroke="#f4f4f4" stroke-width=".8" opacity=".8"/>' +
      kite(100, 90, ROSE, GOLD, "", 1.1) + kite(210, 60, SKY, "#ffffff", "rh-kite2", 1.25) + kite(310, 104, GOLD, ULTRA, "rh-kite3", 0.95) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">WESTBURY · EASTER KITES</text>',
      sky("rh2", "#6fc0ef", "#e8f6fc"));
  }

  /* 3. Parliament Buildings and the Careenage, Bridgetown */
  function rhparl() {
    const arch = (x, y) => '<path d="M' + x + ' ' + (y + 22) + 'v-14q6 -10 12 0v14z" fill="#5b6c7a"/>';
    const boat = (x, c, cls) => '<g class="rh-bob ' + cls + '"><path d="M' + x + ' 214h46l-8 12h-30z" fill="' + c + '" stroke="#333" stroke-width="1"/><path d="M' + (x + 22) + ' 214v-26" stroke="#555" stroke-width="1.5"/><path d="M' + (x + 23) + ' 190l14 20h-14z" fill="#f7f3ea"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rh3)"/>' +
      tower(300, 50, 1, 1) +
      '<rect x="20" y="96" width="270" height="104" fill="#e9e1cf" stroke="#b9ae96" stroke-width="1.5"/>' +
      '<path d="M14 98l12 -22h258l12 22z" fill="#8a8f93" stroke="#6b7073" stroke-width="1"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (34 + i * 30) + ' 76l6 -12l6 12z" fill="#d8ceb8" stroke="#b9ae96" stroke-width=".8"/>').join("") +
      Array.from({ length: 9 }, (_, i) => arch(34 + i * 30, 108) + arch(34 + i * 30, 146)).join("") +
      '<rect x="20" y="176" width="270" height="6" fill="#d8ceb8"/><path d="M20 188h270" stroke="#2f6b3a" stroke-width="3"/>' +
      Array.from({ length: 28 }, (_, i) => '<path d="M' + (22 + i * 10) + ' 182v12" stroke="#2f6b3a" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#2f86b8"/><g class="rh-wv"><path d="M0 206q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f7" stroke-width="1.2" fill="none"/></g>' +
      boat(40, "#ffffff", "") + boat(150, GOLD, "rh-bob2") + boat(270, ROSE, "") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">PARLIAMENT · THE CAREENAGE · BRIDGETOWN</text>',
      sky("rh3", "#5fb2ea", "#f1ede3"));
  }

  /* 4. Crop Over: Grand Kadooment rolling down Spring Garden Highway */
  function rhkadoo() {
    const reveler = (x, c1, c2, cls) => '<g class="' + cls + '"><g class="rh-fth">' + [-30, -15, 0, 15, 30].map(a => '<path d="M' + x + ' 150l' + (Math.sin(a * Math.PI / 180) * 34) + ' -' + (Math.cos(a * Math.PI / 180) * 40) + '" stroke="' + (a % 30 === 0 ? c1 : c2) + '" stroke-width="7" stroke-linecap="round"/>').join("") + '</g>' +
      '<circle cx="' + x + '" cy="156" r="8" fill="#6b4226"/><path d="M' + (x - 9) + ' 166h18l4 26h-26z" fill="' + c1 + '"/><path d="M' + (x - 8) + ' 192l-2 26M' + (x + 8) + ' 192l2 26" stroke="#6b4226" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M' + (x - 14) + ' 172l-10 -16M' + (x + 14) + ' 172l10 -16" stroke="#6b4226" stroke-width="4" stroke-linecap="round"/><path d="M' + (x - 10) + ' 190h20" stroke="' + c2 + '" stroke-width="4"/></g>';
    const bunting = '<g class="rh-bunt"><path d="M0 40q100 20 200 0t200 0" stroke="#444" stroke-width="1" fill="none"/>' + Array.from({ length: 16 }, (_, i) => { const x = 8 + i * 25, y = 40 + Math.sin(i / 16 * Math.PI * 2) * 6 + 4; return '<path d="M' + x + ' ' + y + 'l8 14l8 -14z" fill="' + [ULTRA, GOLD, ROSE][i % 3] + '"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rh4)"/>' + bunting +
      palm(30, 150, 0.8) + palm(370, 150, 0.8, "rh-palm2") +
      '<rect x="0" y="150" width="400" height="12" fill="#2b8fc4"/>' +
      '<rect x="250" y="96" width="130" height="80" rx="4" fill="#3b3b3b"/><rect x="258" y="104" width="34" height="56" fill="#111"/><rect x="298" y="104" width="34" height="56" fill="#111"/><rect x="338" y="104" width="34" height="56" fill="#111"/>' +
      [275, 315, 355].map(x => '<circle cx="' + x + '" cy="120" r="9" fill="#555"/><circle cx="' + x + '" cy="146" r="11" fill="#555"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#7a7a76"/><path d="M0 214h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="rh-march">' + reveler(70, GOLD, ROSE, "") + reveler(130, SKY, GOLD, "rh-fth2") + reveler(190, ROSE, "#ffffff", "") + '</g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">CROP OVER · GRAND KADOOMENT · SPRING GARDEN</text>',
      sky("rh4", "#ff9a5a", "#ffe2b8"));
  }

  /* 5. Rihanna Drive and Westbury Road */
  function rhcorner() {
    const house = '<rect x="168" y="70" width="90" height="56" fill="#5fae4a" stroke="#3a7a2c" stroke-width="1.5"/><path d="M160 72l53 -30l53 30z" fill="#c9b04a" stroke="#8a7a2a" stroke-width="1.5"/>' +
      '<rect x="168" y="70" width="90" height="6" fill="' + GOLD + '"/><rect x="180" y="86" width="20" height="18" fill="' + GOLD + '"/><rect x="226" y="86" width="20" height="18" fill="' + GOLD + '"/><path d="M190 86v18M180 95h20M236 86v18M226 95h20" stroke="#3a7a2c" stroke-width="1.2"/>' +
      '<rect x="204" y="96" width="16" height="30" fill="#2f5a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rh5)"/>' +
      tower(70, 30, 0.75, 0.9) + palm(330, 126, 0.85) + palm(380, 126, 0.7, "rh-palm2") +
      house +
      '<rect x="0" y="126" width="400" height="98" fill="#f1e6cf"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (142 + i * 16) + 'h400" stroke="#dacbab" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 44 + (i % 2) * 22) + ' ' + (126 + i * 16) + 'v16" stroke="#dacbab" stroke-width="1"/>').join("")).join("") +
      '<rect x="0" y="126" width="400" height="5" fill="' + ULTRA + '"/><rect x="0" y="131" width="400" height="3" fill="' + GOLD + '"/>' +
      tag("RIHANNA", 18, 194, 50, ROSE, -6) + tag("BAD GAL RIRI", 30, 218, 17, "#ffffff", -3) + tag("THE NAVY", 238, 208, 22, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(262, 96, 134, "Rihanna Dr") + sign(266, 122, 126, "Westbury Rd") +
      '<g class="rh-sp"><circle cx="186" cy="166" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="rh-sp rh-sp2"><circle cx="192" cy="160" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("rh5", "#74bdea", "#f6ead2"));
  }

  window.SCENES = { rhbus: rhbus, rhkite: rhkite, rhparl: rhparl, rhkadoo: rhkadoo, rhcorner: rhcorner };
})();
