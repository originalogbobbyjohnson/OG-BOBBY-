/* snowthaproduct scenes (Regions tab: Los Angeles + SoCal; Mira Mesa, San Diego). CSS classes and ids prefixed stp- (the page's own anim-train is kept).
   1 Miramar College Transit Station, Mira Mesa: the open bus bays under a shade canopy, a red-and-white MTS Rapid bus pulling in, black station sign with the 235 and 237 bullets.
   2 Mira Mesa High School, where she went to school and first got into hip-hop: stucco classroom wing, navy-and-gold school sign, the flag waving, a ball arcing toward the hoop.
   3 MCAS Miramar ("Fightertown") right next to Mira Mesa: the hangars and tower, gray jets streaking past in formation with smoke trails.
   4 Chicano Park, Barrio Logan (her Mexican pride, "Bilingue"): the painted freeway pillars and the stepped kiosko, a candy-red lowrider hopping past.
   5 Mira Mesa Blvd and Camino Ruiz: green signs, SNOW tagged on the stucco wall, palms, Black Mountain and its antenna towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes stpflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.stp-flk{animation:stpflick 2.4s infinite}.stp-flk2{animation-delay:.8s}' +
    '@keyframes stpjet{from{transform:translate(-160px,40px)}to{transform:translate(520px,-30px)}}.stp-jet{animation:stpjet 5s linear infinite}.stp-jet2{animation-delay:-2.5s}' +
    '@keyframes stpflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(5deg) scaleX(.92)}}.stp-flag{transform-box:fill-box;transform-origin:0% 50%;animation:stpflag 1.6s ease-in-out infinite}' +
    '@keyframes stpball{0%{transform:translate(0,0)}50%{transform:translate(40px,-46px)}100%{transform:translate(78px,-8px);opacity:0}}.stp-ball{animation:stpball 2.4s ease-in infinite}' +
    '@keyframes stphop{0%,100%{transform:translateY(0)}20%{transform:translateY(-14px)}40%{transform:translateY(0)}}.stp-hop{animation:stphop 1.3s ease-in-out infinite}' +
    '@keyframes stpcar{from{transform:translateX(-160px)}to{transform:translateX(520px)}}.stp-car{animation:stpcar 9s linear infinite}.stp-car2{animation-delay:-4.5s}' +
    '@keyframes stpsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.stp-palm{transform-box:fill-box;transform-origin:50% 100%;animation:stpsway 3.6s ease-in-out infinite}.stp-palm2{animation-delay:-1.8s}' +
    '@keyframes stpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.stp-sp{animation:stpspray 1.4s ease-out infinite}.stp-sp2{animation-delay:.45s}' +
    '@keyframes stpblink{0%,60%,100%{opacity:1}70%,90%{opacity:.15}}.stp-blink{animation:stpblink 1.8s infinite}.stp-blink2{animation-delay:.9s}' +
    '@keyframes stppap{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.stp-pap{animation:stppap 1.2s ease-in-out infinite}.stp-pap2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, txt, color) => '<rect x="' + (x - 17) + '" y="' + (y - 10) + '" width="34" height="20" rx="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#e31837", ICE = "#bfe8ff", GREEN = "#2fbf71", GOLD = "#f2c94c", NAVY = "#1d2f6b";

  const palm = (x, base, h, c, cls) => {
    const tx = x + h * 0.08, ty = base - h;
    const fr = [[-34, 10], [-26, -6], [-10, -16], [10, -16], [26, -6], [34, 10], [-18, 16], [18, 16]].map(f =>
      '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * 0.5) + ' ' + (f[1] * 0.5 - 10) + ' ' + f[0] + ' ' + f[1] + '" stroke="' + c + '" stroke-width="5" fill="none" stroke-linecap="round"/>').join("");
    return '<g class="stp-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'Q' + (x + h * 0.02) + ' ' + (base - h * 0.5) + ' ' + tx + ' ' + ty + '" stroke="' + c + '" stroke-width="5" fill="none"/>' + fr + '</g>';
  };
  /* a gray fighter jet seen from the side, nose to the right, at (x,y) */
  const jet = (x, y, s) => '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')">' +
    '<path d="M-46 0h-70" stroke="#fff" stroke-width="4" opacity=".55" stroke-linecap="round"/>' +
    '<path d="M-40 0L30 -4L48 0L30 4z" fill="#8e98a4"/><path d="M-6 -2L-24 -20H-14L10 -3z" fill="#77818d"/><path d="M-6 2L-24 16H-14L10 3z" fill="#6b7580"/>' +
    '<path d="M-40 0L-50 -14H-42L-28 -2z" fill="#77818d"/><path d="M18 -3q8 -5 14 -1z" fill="#2d3e57"/><rect x="-44" y="-1.5" width="6" height="3" fill="#ff9d3b"/></g>';

  /* 1. Miramar College Transit Station, MTS Rapid */
  function stpstation() {
    const win = [56, 140, 176, 212, 248].map(x => '<rect x="' + x + '" y="122" width="30" height="24" rx="3" fill="#1b2630"/>').join("");
    const bus = '<g class="anim-train">' +
      '<rect x="40" y="112" width="300" height="70" rx="10" fill="#f4f5f7" stroke="#9aa3ad" stroke-width="2"/>' + win +
      '<path d="M40 152h300v10H40z" fill="' + RED + '"/><path d="M40 162h300" stroke="#9aa3ad" stroke-width="1"/>' +
      '<rect x="306" y="118" width="30" height="34" rx="4" fill="#1b2630"/><rect x="250" y="114" width="56" height="7" rx="2" fill="#111"/><text x="278" y="120" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb03a">237 UCSD</text>' +
      '<rect x="110" y="128" width="20" height="44" fill="#2a3440"/><circle cx="332" cy="168" r="3.5" fill="#fff6c2"/>' +
      '<circle cx="92" cy="184" r="10" fill="#222"/><circle cx="92" cy="184" r="4" fill="#888"/><circle cx="290" cy="184" r="10" fill="#222"/><circle cx="290" cy="184" r="4" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#stps1)"/><circle cx="330" cy="56" r="20" fill="#fff3b8" opacity=".9"/>' +
      '<path d="M0 100q70 -26 150 -10t140 -8t110 6v16H0z" fill="#b9a27c"/><path d="M0 106q90 -14 200 -4t200 -2v10H0z" fill="#9a8460"/>' +
      palm(20, 112, 74, "#3d5a2e") + palm(382, 112, 84, "#3d5a2e", "stp-palm2") +
      '<path d="M30 70h340l-10 10H40z" fill="#d8dde3"/><path d="M30 70h340" stroke="#9aa3ad" stroke-width="2"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="78" width="6" height="34" fill="#9aa3ad"/>').join("") +
      bus +
      '<rect x="0" y="194" width="400" height="66" fill="#c9c2b4"/><rect x="0" y="194" width="400" height="5" fill="#f2c200"/><path d="M0 226h400" stroke="#b4ad9f" stroke-width="2"/>' +
      '<rect x="48" y="206" width="304" height="40" rx="3" fill="#111"/><text x="62" y="224" ' + font + ' font-size="13" fill="#fff">Miramar College</text><text x="62" y="239" ' + font + ' font-size="10" fill="#ccc">Transit Station</text>' +
      bullet(270, 226, "235", RED) + bullet(314, 226, "237", RED),
      sky("stps1", "#5fa8e6", "#f6dcae"));
  }

  /* 2. Mira Mesa High School */
  function stphigh() {
    const winRow = y => [50, 86, 122, 158, 242, 278, 314, 350].map(x => '<rect x="' + x + '" y="' + y + '" width="22" height="16" fill="#3b4f6b"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#stps2)"/>' +
      '<path d="M0 120q100 -20 200 -6t200 -2v20H0z" fill="#a89470"/>' +
      '<rect x="36" y="104" width="328" height="86" fill="#efe3cc" stroke="#cbb894" stroke-width="2"/><rect x="36" y="98" width="328" height="8" fill="' + NAVY + '"/>' + winRow(118) + winRow(146) +
      '<rect x="184" y="120" width="32" height="70" fill="' + NAVY + '"/><rect x="190" y="148" width="20" height="42" fill="#2c3e58"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#7aa35a"/><path d="M0 190h400" stroke="#5c8442" stroke-width="3"/>' +
      '<rect x="18" y="58" width="3" height="132" fill="#c8ccd2"/><g class="stp-flag"><rect x="21" y="60" width="44" height="26" fill="#f4f4f4"/><g fill="#c8102e"><rect x="21" y="60" width="44" height="3.7"/><rect x="21" y="67.4" width="44" height="3.7"/><rect x="21" y="74.8" width="44" height="3.7"/><rect x="21" y="82.2" width="44" height="3.8"/></g><rect x="21" y="60" width="18" height="14" fill="#2b3a7a"/></g>' +
      '<rect x="336" y="150" width="4" height="54" fill="#888"/><rect x="326" y="140" width="24" height="16" fill="#fff" stroke="#888" stroke-width="2"/><rect x="332" y="156" width="12" height="3" fill="#e8742a"/>' +
      '<g class="stp-ball"><circle cx="262" cy="196" r="6" fill="#e8742a" stroke="#6a2f0e" stroke-width="1"/></g>' +
      '<rect x="84" y="206" width="160" height="40" rx="4" fill="' + NAVY + '" stroke="' + GOLD + '" stroke-width="3"/><text x="164" y="224" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '">MIRA MESA HIGH</text><text x="164" y="239" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HOME OF THE MARAUDERS</text>' +
      '<rect x="110" y="246" width="6" height="14" fill="#555"/><rect x="212" y="246" width="6" height="14" fill="#555"/>',
      sky("stps2", "#6db3ee", "#f4e6c4"));
  }

  /* 3. MCAS Miramar, Fightertown */
  function stpjets() {
    const hangar = x => '<path d="M' + x + ' 196v-34q40 -26 80 0v34z" fill="#c7c2b6" stroke="#9c978b" stroke-width="2"/><rect x="' + (x + 18) + '" y="170" width="44" height="26" fill="#6b6a64"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (x + 18 + i * 11) + ' 170v26" stroke="#55544f" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#stps3)"/>' +
      '<g class="stp-jet">' + jet(60, 70, 1.1) + jet(10, 92, 0.9) + '</g>' +
      '<g class="stp-jet stp-jet2">' + jet(40, 44, 0.8) + '</g>' +
      '<path d="M0 168q80 -24 160 -8t140 -12t100 8v40H0z" fill="#b8a07a"/>' +
      hangar(30) + hangar(130) +
      '<rect x="270" y="112" width="20" height="84" fill="#d9d4c8" stroke="#9c978b" stroke-width="2"/><path d="M258 112h44l-6 -22h-32z" fill="#3c5a74" stroke="#9c978b" stroke-width="2"/><circle class="stp-blink" cx="280" cy="86" r="3" fill="#ff4d4d"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#6e6e6a"/><path d="M0 228h400" stroke="#f4f4f4" stroke-width="3" stroke-dasharray="26 18"/>' +
      '<rect x="304" y="204" width="86" height="34" rx="3" fill="#1d2a3a" stroke="' + GOLD + '" stroke-width="2"/><text x="347" y="219" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">MCAS MIRAMAR</text><text x="347" y="232" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">FIGHTERTOWN</text>',
      sky("stps3", "#3f86d6", "#cfe6f7"));
  }

  /* 4. Chicano Park, Barrio Logan */
  function stpchicano() {
    const pillar = (x, c1, c2, c3) => '<rect x="' + x + '" y="40" width="34" height="164" fill="' + c1 + '"/>' +
      '<path d="M' + x + ' 90l17 -20 17 20v30l-17 20 -17 -20z" fill="' + c2 + '"/><circle cx="' + (x + 17) + '" cy="105" r="8" fill="' + c3 + '"/>' +
      '<path d="M' + x + ' 160h34M' + x + ' 172h34" stroke="' + c3 + '" stroke-width="4"/><path d="M' + (x + 4) + ' 190l13 -12 13 12" stroke="' + c2 + '" stroke-width="3" fill="none"/>';
    const papel = ['#e8505b', '#2fbf71', '#f2c94c', '#4fb3ff', '#ff7ac8', '#f28c28'].map((c, i) =>
      '<path class="stp-pap' + (i % 2 ? " stp-pap2" : "") + '" d="M' + (150 + i * 18) + ' 62h16v14l-8 -4 -8 4z" fill="' + c + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#stps4)"/>' +
      '<rect x="0" y="28" width="400" height="14" fill="#a9a59c"/><rect x="0" y="40" width="400" height="5" fill="#8a867e"/>' +
      pillar(12, "#2a7bbf", "#f2c94c", "#e8505b") + pillar(96, "#e8505b", "#2fbf71", "#f2c94c") + pillar(290, "#2fbf71", "#e8505b", "#4fb3ff") + pillar(360, "#f28c28", "#2a7bbf", "#fff3d6") +
      '<path d="M146 62h116" stroke="#333" stroke-width="1.2"/>' + papel +
      /* the kiosko: stepped pyramid roof */
      '<rect x="160" y="150" width="88" height="10" fill="#d9c7a3"/><g fill="#c2523a"><path d="M164 150h80l-8 -12h-64z"/><path d="M174 138h60l-8 -12h-44z"/><path d="M184 126h40l-8 -12h-24z"/></g>' +
      '<path d="M196 114h16l-4 -8h-8z" fill="#2fbf71"/>' + [166, 186, 222, 242].map(x => '<rect x="' + x + '" y="160" width="6" height="40" fill="#d9c7a3"/>').join("") +
      '<rect x="156" y="198" width="96" height="6" fill="#bfae8a"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#585652"/><path d="M0 232h400" stroke="#f2c94c" stroke-width="2" stroke-dasharray="20 16"/>' +
      '<g class="stp-car"><g class="stp-hop"><path d="M10 222h92l-6 -10h-22l-8 -10h-30l-12 10H12z" fill="#c8102e"/><rect x="40" y="204" width="12" height="8" fill="#bfe3ff"/><rect x="56" y="204" width="12" height="8" fill="#bfe3ff"/><path d="M10 216h92" stroke="#f2c94c" stroke-width="1.5"/>' +
      '<circle cx="30" cy="224" r="7" fill="#111"/><circle cx="30" cy="224" r="4" fill="#d8d8d8"/><circle cx="84" cy="224" r="7" fill="#111"/><circle cx="84" cy="224" r="4" fill="#d8d8d8"/></g></g>' +
      '<rect x="140" y="236" width="120" height="20" rx="3" fill="#1a1a1a"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6c8">CHICANO PARK</text>',
      sky("stps4", "#7cc0ea", "#f7d9a8"));
  }

  /* 5. Mira Mesa Blvd and Camino Ruiz */
  function stpcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#stps5)"/>' +
      '<path d="M0 120q60 -30 120 -40q50 -8 90 10q60 26 120 14q40 -8 70 0v40H0z" fill="#4a4a5e"/>' +
      [128, 150, 172].map((x, i) => '<path d="M' + x + ' ' + (82 - i * 2) + 'v-30" stroke="#2a2a38" stroke-width="2"/><path d="M' + (x - 4) + ' ' + (60 - i * 2) + 'l4 -8 4 8" stroke="#2a2a38" stroke-width="1.5" fill="none"/><circle class="stp-blink' + (i === 1 ? " stp-blink2" : "") + '" cx="' + x + '" cy="' + (50 - i * 2) + '" r="2.5" fill="#ff4d4d"/>').join("") +
      palm(250, 130, 72, "#2a2a3a") + palm(300, 130, 60, "#2a2a3a", "stp-palm2") +
      '<rect x="0" y="126" width="400" height="98" fill="#ead7b4"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (132 + (i * 37) % 88) + '" r="1.4" fill="#cdb48c"/>').join("") +
      '<rect x="0" y="126" width="400" height="5" fill="#b98f62"/>' +
      tag("SNOW", 22, 194, 62, ICE, -6) + tag("WOKE", 244, 212, 20, GREEN, -4) + tag("THA PRODUCT", 26, 216, 15, "#ff8a8a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 136, "Mira Mesa Blvd") + sign(254, 124, 136, "Camino Ruiz") +
      '<rect x="228" y="110" width="4" height="114" fill="#222"/><circle class="stp-flk" cx="230" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="stp-sp"><circle cx="200" cy="170" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="stp-sp stp-sp2"><circle cx="206" cy="164" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("stps5", "#26305e", "#f2a46a"));
  }

  window.SCENES = { stpstation: stpstation, stphigh: stphigh, stpjets: stpjets, stpchicano: stpchicano, stpcorner: stpcorner };
})();
