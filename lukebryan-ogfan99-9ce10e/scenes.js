/* lukebryan scenes (Regions tab: More of the South, Leesburg / Lee County GA). CSS classes prefixed lb- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lbglow{0%,100%{opacity:.45}50%{opacity:1}}.lb-glow{animation:lbglow 2.4s ease-in-out infinite}.lb-g2{animation-delay:-1.2s}' +
    '@keyframes lbcloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.lb-cl{animation:lbcloud 14s ease-in-out infinite alternate}' +
    '@keyframes lbsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lb-sw{transform-box:fill-box;transform-origin:50% 100%;animation:lbsway 3.2s ease-in-out infinite}.lb-sw2{animation-delay:-1.6s}' +
    '@keyframes lbdust{0%{opacity:0;transform:translate(0,0)}30%{opacity:.6}100%{opacity:0;transform:translate(-40px,-14px)}}.lb-dust{animation:lbdust 2.4s linear infinite}.lb-d2{animation-delay:-1.2s}' +
    '@keyframes lbjump{0%,60%,100%{transform:translateY(0)}75%{transform:translateY(-26px) rotate(-20deg)}}.lb-fish{transform-box:fill-box;transform-origin:50% 50%;animation:lbjump 3.4s ease-in-out infinite}' +
    '@keyframes lbripple{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.8);opacity:0}}.lb-rip{transform-box:fill-box;transform-origin:50% 50%;animation:lbripple 2.8s ease-out infinite}.lb-rip2{animation-delay:-1.4s}' +
    '@keyframes lbbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.lb-beam{transform-box:fill-box;transform-origin:50% 0;animation:lbbeam 3s ease-in-out infinite}.lb-b2{animation-delay:-1.5s}' +
    '@keyframes lbhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.lb-hand{animation:lbhand .9s ease-in-out infinite}.lb-h2{animation-delay:-.45s}' +
    '@keyframes lbsmoke{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-34px);opacity:0}}.lb-smk{animation:lbsmoke 3s ease-out infinite}.lb-smk2{animation-delay:-1.5s}' +
    '@keyframes lbtick{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.lb-tick{transform-box:view-box;animation:lbtick 12s linear infinite}' +
    '@keyframes lbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lb-sp{animation:lbspray 1.4s ease-out infinite}.lb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* longleaf pine: tall bare trunk, tufted crown */
  const pine = (x, base, h, cls) => '<g class="lb-sw ' + (cls || "") + '"><rect x="' + (x - 2.5) + '" y="' + (base - h) + '" width="5" height="' + h + '" fill="#5a3d28"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - h) + '" rx="16" ry="9" fill="#2f5a2e"/><ellipse cx="' + (x - 9) + '" cy="' + (base - h + 8) + '" rx="10" ry="6" fill="#36673a"/><ellipse cx="' + (x + 9) + '" cy="' + (base - h + 6) + '" rx="10" ry="6" fill="#2a5229"/></g>';
  const GOLD = "#f0c04a", CLAY = "#c0502e", SKY = "#6fb3d9", CREAM = "#f4ead2", PEANUT = "#c99a5b";
  /* US route shield, black on white */
  const usShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h34v6q0 4 -3 8q3 6 3 12q0 14 -17 18q-17 -4 -17 -18q0 -6 3 -12q-3 -4 -3 -8z" fill="#fff" stroke="#111" stroke-width="2"/>' +
    '<text x="' + (x + 17) + '" y="' + (y + 31) + '" text-anchor="middle" ' + font + ' font-size="16" fill="#111">' + n + '</text>';

  /* 1. North on US 19 out of Albany: the green Lee County welcome sign with its hometown-hero line, his pickup rolling in, peanut fields behind */
  function lbhwy() {
    let rows = "";
    for (let i = 0; i < 12; i++) rows += '<path d="M' + (i * 40 - 30) + ' 172L' + (200 + (i - 6) * 8) + ' 136" stroke="#4f6e30" stroke-width="2" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb1)"/>' +
      '<g class="lb-cl"><ellipse cx="80" cy="34" rx="38" ry="9" fill="#fff" opacity=".7"/><ellipse cx="300" cy="24" rx="44" ry="10" fill="#fff" opacity=".6"/></g>' +
      '<circle cx="350" cy="62" r="15" fill="#ffd86b" opacity=".9"/>' +
      '<rect x="0" y="134" width="400" height="40" fill="#6f8f3e"/>' + rows +
      pine(30, 138, 46) + pine(62, 138, 38, "lb-sw2") + pine(372, 138, 50, "lb-sw2") +
      '<rect x="0" y="172" width="400" height="88" fill="#4a4d52"/><rect x="0" y="170" width="400" height="4" fill="#c98a5a"/>' +
      '<path d="M0 214h400" stroke="#f2d24a" stroke-width="3" stroke-dasharray="26 22"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* welcome sign on two posts */
      '<rect x="136" y="110" width="6" height="62" fill="#8b9096"/><rect x="290" y="110" width="6" height="62" fill="#8b9096"/>' +
      '<rect x="112" y="26" width="208" height="90" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="216" y="50" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">WELCOME TO</text>' +
      '<text x="216" y="74" text-anchor="middle" ' + font + ' font-size="22" fill="#fff">LEE COUNTY</text>' +
      '<rect x="128" y="84" width="176" height="22" rx="3" fill="#fff"/><text x="216" y="99" text-anchor="middle" ' + font + ' font-size="10.5" fill="#0f6b3a">HOME OF LUKE BRYAN</text>' +
      usShield(40, 100, "19") + '<rect x="40" y="152" width="34" height="12" fill="#fff" stroke="#111" stroke-width="1"/><text x="57" y="161" text-anchor="middle" ' + font + ' font-size="8" fill="#111">NORTH</text><rect x="55" y="164" width="4" height="8" fill="#8b9096"/>' +
      /* pickup rolling in */
      '<g class="anim-train"><g transform="translate(226 0)"><rect x="0" y="194" width="114" height="24" rx="5" fill="#2f4f8a"/><path d="M8 194v-18h40l14 18z" fill="#24406f"/><path d="M14 192v-13h18v13z" fill="#a8d4ea"/><path d="M36 192v-13h10l10 13z" fill="#a8d4ea"/>' +
      '<rect x="62" y="186" width="50" height="8" fill="#24406f"/><circle cx="24" cy="220" r="9" fill="#1a1a1a"/><circle cx="24" cy="220" r="4" fill="#9a9a9a"/><circle cx="92" cy="220" r="9" fill="#1a1a1a"/><circle cx="92" cy="220" r="4" fill="#9a9a9a"/>' +
      '<rect x="0" y="200" width="6" height="5" rx="1" fill="#fff6c2" class="lb-glow"/></g>' +
      '<g class="lb-dust"><circle cx="350" cy="214" r="6" fill="#d9b08a" opacity=".5"/></g><g class="lb-dust lb-d2"><circle cx="356" cy="208" r="4" fill="#d9b08a" opacity=".5"/></g></g>',
      sky("lb1", "#5fa8d8", "#f6d79a"));
  }

  /* 2. The family peanut farm and mill: green peanut rows, a red tractor, the mill's tin elevator and drying wagons */
  function lbmill() {
    let rows = "";
    for (let i = 0; i < 8; i++) {
      const y = 158 + i * 13;
      rows += '<path d="M0 ' + y + 'h400" stroke="#a5563a" stroke-width="5"/>';
      for (let x = (i % 2) * 10; x < 400; x += 20) rows += '<ellipse cx="' + x + '" cy="' + (y - 4) + '" rx="' + (5 + i * 0.5) + '" ry="' + (3 + i * 0.3) + '" fill="#4f8a3a"/>';
    }
    const wagon = (x) => '<g transform="translate(' + x + ' 0)"><rect x="0" y="118" width="38" height="22" fill="#d9d4c6" stroke="#8b8a80"/><path d="M0 118l6 -6h26l6 6z" fill="' + PEANUT + '"/><circle cx="8" cy="142" r="4" fill="#222"/><circle cx="30" cy="142" r="4" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb2)"/>' +
      '<g class="lb-cl"><ellipse cx="110" cy="40" rx="40" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="138" width="400" height="122" fill="#b8633f"/>' +
      /* mill: tall elevator, tin sheds, bins */
      '<rect x="230" y="36" width="26" height="104" fill="#c9ccd0" stroke="#8b9096"/><rect x="226" y="28" width="34" height="14" fill="#b2b6bb"/><path d="M256 46l50 40" stroke="#8b9096" stroke-width="5"/>' +
      '<rect x="270" y="86" width="96" height="54" fill="#d6d9dc" stroke="#8b9096"/><path d="M264 88l54 -18l54 18z" fill="#b2b6bb"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (276 + i * 12) + ' 90v50" stroke="#a9adb2" stroke-width="1.2"/>').join("") +
      '<ellipse cx="186" cy="86" rx="20" ry="6" fill="#b2b6bb"/><rect x="166" y="86" width="40" height="54" fill="#c9ccd0" stroke="#8b9096"/><path d="M166 100h40M166 114h40M166 128h40" stroke="#a9adb2"/>' +
      '<text x="318" y="122" text-anchor="middle" ' + font + ' font-size="11" fill="#5a3d28">PEANUTS</text>' +
      wagon(20) + wagon(66) + wagon(112) +
      '<g class="lb-smk"><circle cx="243" cy="22" r="5" fill="#eee" opacity=".6"/></g><g class="lb-smk lb-smk2"><circle cx="248" cy="18" r="4" fill="#eee" opacity=".5"/></g>' +
      rows +
      /* red tractor working the rows */
      '<g class="anim-train"><g transform="translate(150 0)"><rect x="10" y="192" width="44" height="18" rx="3" fill="#c8312b"/><rect x="40" y="174" width="18" height="20" fill="#c8312b"/><rect x="43" y="177" width="12" height="11" fill="#a8d4ea"/>' +
      '<rect x="18" y="182" width="4" height="12" fill="#333"/><circle cx="50" cy="214" r="13" fill="#1a1a1a"/><circle cx="50" cy="214" r="5" fill="' + GOLD + '"/><circle cx="16" cy="218" r="8" fill="#1a1a1a"/><circle cx="16" cy="218" r="3" fill="' + GOLD + '"/></g></g>' +
      '<g class="lb-dust"><circle cx="150" cy="222" r="6" fill="#d9a07a" opacity=".5"/></g><g class="lb-dust lb-d2"><circle cx="146" cy="216" r="4" fill="#d9a07a" opacity=".5"/></g>',
      sky("lb2", "#7cc0e6", "#f5e3b0"));
  }

  /* 3. Knee-deep in the Muckalee: the creek through the longleaf pines, a jon boat, a bass jumping, a deer stand up in the trees */
  function lbcreek() {
    return svg(
      '<rect width="400" height="260" fill="url(#lb3)"/>' +
      '<circle cx="300" cy="70" r="22" fill="#ffd36b" opacity=".85"/>' +
      '<path d="M0 132q60 -14 120 -4t140 -8t140 6v20h-400z" fill="#2f5230"/>' +
      pine(24, 140, 96) + pine(70, 136, 80, "lb-sw2") + pine(330, 138, 92, "lb-sw2") + pine(376, 140, 104) +
      /* deer stand */
      '<path d="M344 140l6 -64M366 140l-6 -64M346 120h18M348 100h14" stroke="#6a4a2a" stroke-width="3"/><rect x="342" y="66" width="26" height="12" fill="#6a4a2a"/><rect x="344" y="56" width="22" height="10" fill="#4a6a3a"/>' +
      /* creek */
      '<path d="M0 150q100 -8 200 2t200 -4v112h-400z" fill="url(#lb3w)"/>' +
      '<path d="M220 170h60M232 182h40M240 194h28" stroke="#ffd36b" stroke-width="3" opacity=".5"/>' +
      /* cypress knees and bank */
      '<path d="M0 196q40 -6 70 4v64h-70z" fill="#4a3a26"/><path d="M20 196q3 -10 6 0M40 194q3 -8 6 0" stroke="#6a4a2a" stroke-width="3" fill="none"/>' +
      /* jon boat */
      '<g class="lb-hand" style="animation-duration:2.4s"><path d="M120 206h96l-8 12h-80z" fill="#6e7a5a"/><rect x="190" y="198" width="12" height="9" fill="#333"/><path d="M202 202h10" stroke="#333" stroke-width="3"/>' +
      '<rect x="146" y="190" width="10" height="16" rx="3" fill="#7a5a3a"/><circle cx="151" cy="185" r="5" fill="#7a5a3a"/><path d="M144 182h14l-2 -5h-10z" fill="#5a4030"/>' +
      '<path d="M156 192l46 -40" stroke="#3a2a1a" stroke-width="1.6"/><path d="M202 152q10 24 8 54" stroke="#ddd" stroke-width=".8" fill="none"/></g>' +
      /* jumping bass */
      '<g class="lb-fish"><path d="M290 214q14 -10 28 0q-14 10 -28 0z" fill="#5f7d3a"/><path d="M318 214l8 -6v12z" fill="#4f6a30"/><circle cx="296" cy="212" r="1.5" fill="#111"/></g>' +
      '<ellipse class="lb-rip" cx="304" cy="222" rx="10" ry="3" fill="none" stroke="#fff" stroke-width="1"/><ellipse class="lb-rip lb-rip2" cx="304" cy="222" rx="10" ry="3" fill="none" stroke="#fff" stroke-width="1"/>' +
      '<rect x="250" y="236" width="104" height="18" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="302" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MUCKALEE CREEK</text>',
      sky("lb3", "#e9a35a", "#f6dca0") + '<linearGradient id="lb3w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a6a3a"/><stop offset="1" stop-color="#2f3a22"/></linearGradient>');
  }

  /* 4. The Farm Tour: a stage set up in a picked field, lights sweeping, hands up, a tractor parked by the crowd, sunset */
  function lbfarmtour() {
    let crowd = "";
    for (let i = 0; i < 26; i++) crowd += '<g class="lb-hand ' + (i % 2 ? "lb-h2" : "") + '"><circle cx="' + (8 + i * 15.5) + '" cy="' + (214 + (i % 3) * 5) + '" r="7" fill="#1c1812"/><path d="M' + (4 + i * 15.5) + ' 210l-4 -16" stroke="#1c1812" stroke-width="3" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb4)"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#8a6a3a"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (166 + i * 9) + 'h400" stroke="#a5823f" stroke-width="2"/>').join("") +
      /* stage */
      '<rect x="110" y="60" width="180" height="10" fill="#333"/><rect x="110" y="60" width="8" height="110" fill="#333"/><rect x="282" y="60" width="8" height="110" fill="#333"/>' +
      '<g class="lb-beam"><path d="M150 70l-34 110h34z" fill="#fff6c2" opacity=".28"/></g><g class="lb-beam lb-b2"><path d="M250 70l34 110h-34z" fill="#fff6c2" opacity=".28"/></g>' +
      '<circle cx="150" cy="72" r="5" fill="#fff6c2" class="lb-glow"/><circle cx="200" cy="72" r="5" fill="#fff6c2" class="lb-glow lb-g2"/><circle cx="250" cy="72" r="5" fill="#fff6c2" class="lb-glow"/>' +
      '<rect x="100" y="150" width="200" height="22" fill="#3a2c1c"/><rect x="100" y="150" width="200" height="4" fill="' + GOLD + '"/>' +
      '<text x="200" y="166" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">FARM TOUR</text>' +
      /* performer silhouette with guitar, no face */
      '<g transform="translate(192 104)"><rect x="0" y="12" width="16" height="34" rx="4" fill="#111"/><circle cx="8" cy="5" r="8" fill="#111"/><path d="M-6 0h28l-4 -6h-20z" fill="#111"/><path d="M-2 30q10 -12 26 -4q-4 12 -18 10z" fill="#7a4a22"/></g>' +
      /* speaker stacks + hay */
      '<rect x="80" y="110" width="24" height="40" fill="#222"/><circle cx="92" cy="122" r="6" fill="#444"/><circle cx="92" cy="140" r="6" fill="#444"/><rect x="296" y="110" width="24" height="40" fill="#222"/><circle cx="308" cy="122" r="6" fill="#444"/><circle cx="308" cy="140" r="6" fill="#444"/>' +
      '<ellipse cx="350" cy="172" rx="22" ry="14" fill="#d9b25a"/><path d="M332 172q18 -10 36 0" stroke="#b08a3a" stroke-width="2" fill="none"/><ellipse cx="44" cy="174" rx="20" ry="13" fill="#d9b25a"/>' +
      /* tractor at the side */
      '<g transform="translate(330 120)"><rect x="0" y="22" width="40" height="16" rx="3" fill="#c8312b"/><rect x="26" y="6" width="16" height="18" fill="#c8312b"/><circle cx="34" cy="40" r="11" fill="#1a1a1a"/><circle cx="6" cy="42" r="7" fill="#1a1a1a"/></g>' +
      crowd,
      sky("lb4", "#2a2a5a", "#e88a4a"));
  }

  /* 5. His corner: Leslie Hwy at 4th St E on the courthouse square, the 1918 Lee County Courthouse's clock tower behind, his name on the old brick wall */
  function lbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lb5)"/>' +
      /* courthouse: red brick, white Doric portico, square domed clock tower */
      '<rect x="120" y="70" width="160" height="80" fill="#a8493a"/><path d="M120 70h160" stroke="#f4ead2" stroke-width="4"/>' +
      '<path d="M156 70l44 -20l44 20z" fill="#f4ead2"/><rect x="156" y="70" width="88" height="6" fill="#f4ead2"/>' +
      [164, 186, 208, 230].map(x => '<rect x="' + x + '" y="76" width="7" height="72" fill="#f7f3ea"/>').join("") +
      '<rect x="182" y="18" width="36" height="34" fill="#f4ead2" stroke="#c9bfa8"/><path d="M180 18q20 -20 40 0z" fill="#8a9a9e"/><rect x="198" y="0" width="4" height="6" fill="#8a9a9e"/>' +
      '<circle cx="200" cy="34" r="10" fill="#fff" stroke="#333" stroke-width="1.5"/><path d="M200 34v-7" stroke="#111" stroke-width="1.6"/><g class="lb-tick" style="transform-origin:200px 34px"><path d="M200 34h6" stroke="#111" stroke-width="1.2"/></g>' +
      [128, 140, 252, 264].map(x => '<rect x="' + x + '" y="88" width="8" height="16" fill="#3a4a5a"/><rect x="' + x + '" y="118" width="8" height="16" fill="#3a4a5a"/>').join("") +
      '<rect x="0" y="146" width="400" height="6" fill="#2f5a2e"/>' +
      /* old brick wall with tags */
      '<rect x="0" y="150" width="258" height="76" fill="#9a4a36"/>' +
      Array.from({ length: 7 }, (_, r) => '<path d="M0 ' + (160 + r * 10) + 'h258" stroke="#7a3428" stroke-width="1"/>').join("") +
      tag("LEESBURG", 18, 176, 16, CREAM, -4) + tag("LUKE BRYAN", 10, 208, 30, GOLD, -5) + tag("FARM TOUR", 140, 220, 14, SKY, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="322" y="126" width="6" height="98" fill="#2f2f2f"/>' + sign(262, 128, 126, "Leslie Hwy") + sign(262, 154, 126, "4th St E") +
      '<g class="lb-sp"><circle cx="30" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lb-sp lb-sp2"><circle cx="36" cy="184" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lb5", "#2a3570", "#f0a060"));
  }

  window.SCENES = { lbhwy: lbhwy, lbmill: lbmill, lbcreek: lbcreek, lbfarmtour: lbfarmtour, lbcorner: lbcorner };
})();
