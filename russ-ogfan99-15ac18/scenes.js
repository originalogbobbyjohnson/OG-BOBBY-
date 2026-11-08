/* russ scenes (Regions tab: Atlanta; Kennesaw, Cobb County). CSS classes and ids prefixed rs- (the page's own anim-train is kept on the bus).
   1 CobbLinc Route 40 at its Kennesaw State University end, Chastain Rd: the white CobbLinc bus with navy/teal bands pulling in, pines behind.
   2 The basement studio where he made a song a week for years before Columbia: MPC pads, keyboard, monitors, a SONG A WEEK calendar flipping.
   3 SHAKE THE SNOW GLOBE (his 2020 album): a giant snow globe holding the Atlanta skyline, snow swirling.
   4 THERE'S REALLY A WOLF (his platinum debut): a wolf on a ridge howling at a full moon over Georgia pines.
   5 Chastain Rd NW and Frey Rd NW in Kennesaw: green signs, RUSS tagged on the block wall, Kennesaw Mountain's ridge behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rsblink{0%,100%{opacity:.25}50%{opacity:1}}.rs-bl{animation:rsblink 1.4s ease-in-out infinite}.rs-bl2{animation-delay:-.7s}' +
    '@keyframes rsmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.rs-m{transform-box:fill-box;transform-origin:50% 100%;animation:rsmeter .9s ease-in-out infinite}.rs-m2{animation-delay:-.3s}.rs-m3{animation-delay:-.6s}' +
    '@keyframes rsflip{0%,40%{transform:scaleY(1)}50%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}.rs-flip{transform-box:fill-box;transform-origin:50% 0%;animation:rsflip 3s ease-in-out infinite}' +
    '@keyframes rssnow{0%{transform:translateY(-10px);opacity:0}15%{opacity:1}100%{transform:translateY(120px);opacity:0}}.rs-sn{animation:rssnow 4s linear infinite}.rs-s2{animation-delay:-1s}.rs-s3{animation-delay:-2s}.rs-s4{animation-delay:-3s}' +
    '@keyframes rsshake{0%,70%,100%{transform:rotate(0)}75%{transform:rotate(-4deg)}82%{transform:rotate(4deg)}90%{transform:rotate(-2deg)}}.rs-shake{transform-box:fill-box;transform-origin:50% 100%;animation:rsshake 4s ease-in-out infinite}' +
    '@keyframes rshowl{0%,100%{transform:rotate(0)}40%,60%{transform:rotate(-14deg)}}.rs-howl{transform-box:fill-box;transform-origin:20% 90%;animation:rshowl 3.4s ease-in-out infinite}' +
    '@keyframes rsring{0%{transform:scale(.6);opacity:.8}100%{transform:scale(1.6);opacity:0}}.rs-ring{transform-box:fill-box;transform-origin:50% 50%;animation:rsring 3.4s ease-out infinite}' +
    '@keyframes rscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rs-car{animation:rscar 7s linear infinite}' +
    '@keyframes rsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rs-sp{animation:rsspray 1.4s ease-out infinite}.rs-sp2{animation-delay:.45s}' +
    '@keyframes rscloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.rs-cl{animation:rscloud 26s linear infinite}.rs-cl2{animation-delay:-13s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const NAVY = "#1b3f7a", TEAL = "#2bb0a6", ICE = "#7fd1ff", GOLD = "#f2c14e", RED = "#e05a47";
  const pines = (y, xs, c1, c2) => xs.map((x, i) => '<path d="M' + x + ' ' + y + 'l' + (12 + (i % 3) * 3) + ' -' + (40 + (i % 4) * 8) + 'l' + (12 + (i % 3) * 3) + ' ' + (40 + (i % 4) * 8) + 'z" fill="' + (i % 2 ? c1 : c2) + '"/>').join("");
  /* Atlanta skyline pieces (generic towers: a spire tower, a stepped tower, a round-top tower) */
  const skyline = (ox, oy, s, fill) => '<g transform="translate(' + ox + ' ' + oy + ') scale(' + s + ')" fill="' + fill + '">' +
    '<rect x="0" y="40" width="22" height="60"/><rect x="26" y="20" width="18" height="80"/><path d="M26 20l9 -14l9 14z"/><rect x="34" y="0" width="2" height="8"/>' +
    '<rect x="48" y="30" width="24" height="70"/><rect x="52" y="22" width="16" height="10"/><rect x="56" y="14" width="8" height="10"/>' +
    '<rect x="76" y="10" width="20" height="90"/><path d="M76 10q10 -14 20 0z"/><rect x="100" y="46" width="20" height="54"/><rect x="124" y="34" width="16" height="66"/></g>';

  /* 1. CobbLinc 40 at Kennesaw State */
  function rsstop() {
    const bus = '<g class="anim-train"><rect x="40" y="120" width="240" height="84" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (82 + i * 38) + '" y="134" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="134" width="30" height="60" rx="2" fill="#24323e"/><rect x="40" y="172" width="240" height="7" fill="' + NAVY + '"/><rect x="40" y="181" width="240" height="4" fill="' + TEAL + '"/>' +
      '<rect x="44" y="122" width="116" height="11" rx="2" fill="#111"/><text x="102" y="130.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">40 KENNESAW STATE</text>' +
      '<circle cx="90" cy="204" r="12" fill="#222"/><circle cx="90" cy="204" r="5" fill="#9aa1a8"/><circle cx="236" cy="204" r="12" fill="#222"/><circle cx="236" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rs1)"/>' +
      '<g class="rs-cl"><ellipse cx="60" cy="40" rx="30" ry="9" fill="#fff" opacity=".7"/></g><g class="rs-cl rs-cl2"><ellipse cx="60" cy="60" rx="22" ry="7" fill="#fff" opacity=".6"/></g>' +
      '<path d="M0 118q80 -40 160 -20t140 -30t100 20v30h-400z" fill="#4c7a52"/>' +
      pines(124, [0, 24, 50, 76, 102, 128, 154, 180, 206, 232, 258, 284, 310, 336, 362, 384], "#2d5a34", "#24492b") +
      '<rect x="0" y="120" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="140" width="400" height="120" fill="#4e4e54"/><path d="M0 238h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="80" width="5" height="84" fill="#6b7178"/><rect x="314" y="58" width="50" height="40" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="72" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">CobbLinc</text><text x="339" y="92" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">40</text>' +
      '<rect x="286" y="104" width="110" height="14" rx="2" fill="#111"/><text x="341" y="114" text-anchor="middle" ' + font + ' font-size="6.8" fill="#fff">KSU @ CHASTAIN RD</text>',
      sky("rs1", "#86c6f0", "#fbe8c8"));
  }

  /* 2. The basement: a song a week */
  function rsbasement() {
    const pads = Array.from({ length: 16 }, (_, i) => '<rect x="' + (60 + (i % 4) * 15) + '" y="' + (150 + Math.floor(i / 4) * 12) + '" width="12" height="9" rx="2" fill="' + ([1, 6, 11].includes(i) ? GOLD : "#3a3f48") + '"' + ([1, 6, 11].includes(i) ? ' class="rs-bl' + (i === 6 ? " rs-bl2" : "") + '"' : "") + '/>').join("");
    const keys = Array.from({ length: 20 }, (_, i) => '<rect x="' + (160 + i * 8) + '" y="166" width="7" height="26" fill="#f4f1e8"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 18].map(i => '<rect x="' + (165 + i * 8) + '" y="166" width="5" height="16" fill="#111"/>').join("");
    const meters = [0, 1, 2, 3, 4, 5].map(i => '<rect class="rs-m' + (i % 3 === 1 ? " rs-m2" : i % 3 === 2 ? " rs-m3" : "") + '" x="' + (176 + i * 9) + '" y="96" width="6" height="34" fill="' + (i < 4 ? TEAL : GOLD) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2f38"/>' +
      Array.from({ length: 7 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (c * 46 - (r % 2) * 23) + '" y="' + (r * 20) + '" width="44" height="18" fill="#3a404b"/>').join("")).join("") +
      '<rect x="0" y="140" width="400" height="10" fill="#1d2027"/>' +
      '<rect x="292" y="22" width="80" height="94" rx="3" fill="#f4f1e8" stroke="#111" stroke-width="2"/><rect x="292" y="22" width="80" height="18" fill="' + RED + '"/><text x="332" y="35" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SONG A WEEK</text>' +
      '<g class="rs-flip"><rect x="296" y="44" width="72" height="68" fill="#fff"/><text x="332" y="98" text-anchor="middle" ' + font + ' font-size="44" fill="#111">52</text></g>' +
      '<rect x="160" y="88" width="80" height="50" rx="4" fill="#111"/><rect x="166" y="92" width="68" height="40" fill="#0d1a22"/>' + meters +
      '<rect x="110" y="96" width="40" height="44" rx="4" fill="#1a1a1a"/><circle cx="130" cy="112" r="8" fill="#333"/><circle cx="130" cy="130" r="5" fill="#333"/>' +
      '<rect x="250" y="96" width="40" height="44" rx="4" fill="#1a1a1a"/><circle cx="270" cy="112" r="8" fill="#333"/><circle cx="270" cy="130" r="5" fill="#333"/>' +
      '<rect x="20" y="192" width="360" height="12" fill="#6b4a2f"/><rect x="30" y="204" width="10" height="56" fill="#4a3220"/><rect x="360" y="204" width="10" height="56" fill="#4a3220"/>' +
      '<rect x="52" y="142" width="76" height="50" rx="4" fill="#1b1d22" stroke="#555" stroke-width="1.5"/>' + pads +
      '<rect x="152" y="160" width="176" height="34" rx="3" fill="#1b1d22"/>' + keys +
      '<path d="M44 30v40" stroke="#333" stroke-width="2"/><circle cx="44" cy="78" r="9" fill="#fff6c2" class="rs-bl"/>' +
      tag("DIEMON", 22, 128, 20, ICE, -8),
      "");
  }

  /* 3. Shake the Snow Globe */
  function rsglobe() {
    const flakes = Array.from({ length: 22 }, (_, i) => '<circle class="rs-sn rs-s' + (1 + (i % 4)) + '" cx="' + (138 + (i * 37) % 124) + '" cy="' + (52 + (i * 13) % 30) + '" r="' + (1.6 + (i % 3) * 0.7) + '" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rs3)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + ((i * 29) % 120) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<rect x="0" y="214" width="400" height="46" fill="#3b2a24"/>' +
      '<g class="rs-shake">' +
      '<path d="M120 196h160l-14 30h-132z" fill="#7a4a2a" stroke="#4a2a16" stroke-width="2"/><rect x="134" y="204" width="132" height="12" rx="2" fill="#c8a24a"/><text x="200" y="213.5" text-anchor="middle" ' + font + ' font-size="8" fill="#4a2a16">SHAKE THE SNOW GLOBE</text>' +
      '<clipPath id="rsg"><circle cx="200" cy="120" r="84"/></clipPath>' +
      '<g clip-path="url(#rsg)"><rect x="110" y="30" width="180" height="180" fill="#bfe6ff"/>' + skyline(128, 96, 1, "#41607a") +
      '<rect x="110" y="190" width="180" height="20" fill="#fff"/>' + flakes + '</g>' +
      '<circle cx="200" cy="120" r="84" fill="none" stroke="#e8f6ff" stroke-width="4" opacity=".9"/><path d="M146 76q20 -26 54 -30" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none" opacity=".55"/>' +
      '</g>',
      sky("rs3", "#0e1a2c", "#2b3b5a"));
  }

  /* 4. There's Really a Wolf */
  function rswolf() {
    const wolf = '<g fill="#1a1d24"><ellipse cx="258" cy="186" rx="26" ry="18"/>' +
      '<path d="M226 202l-4 -40q2 -24 16 -34l20 10q16 22 20 56z"/>' +
      '<rect x="226" y="176" width="8" height="28" rx="2"/><rect x="240" y="178" width="8" height="26" rx="2"/>' +
      '<path d="M278 196q30 6 40 -6q-6 18 -40 16z"/>' +
      '<g class="rs-howl"><path d="M236 134l-12 -20l-14 -22l10 2l10 10l4 -14l6 12l6 -8l2 14l6 6l2 24z"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rs4)"/>' +
      '<circle class="rs-ring" cx="120" cy="80" r="44" fill="none" stroke="#f4ecd0" stroke-width="2"/>' +
      '<circle cx="120" cy="80" r="44" fill="#f4ecd0"/><circle cx="104" cy="70" r="7" fill="#e2d8b8"/><circle cx="132" cy="94" r="5" fill="#e2d8b8"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle class="' + (i % 5 ? "" : "rs-bl") + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 23) % 110) + '" r="1.1" fill="#fff"/>').join("") +
      '<path d="M0 200q90 -40 180 -10t220 -30v100h-400z" fill="#1f2a3a"/>' +
      pines(214, [0, 30, 60, 330, 360, 384], "#142028", "#0f1a20") +
      '<path d="M150 210q40 -50 100 -40t110 40z" fill="#2a3548"/>' + wolf +
      '<rect x="0" y="226" width="400" height="34" fill="#121822"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="14" letter-spacing="3" fill="' + ICE + '">THERE’S REALLY A WOLF</text>',
      sky("rs4", "#0b1020", "#3a3060"));
  }

  /* 5. Chastain Rd & Frey Rd, Kennesaw */
  function rscorner() {
    const blocks = Array.from({ length: 6 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (c * 46 - (r % 2) * 23) + '" y="' + (128 + r * 16) + '" width="44" height="14" fill="' + ((r + c) % 3 ? "#b9b4aa" : "#aca69b") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rs5)"/>' +
      '<path d="M0 120q60 -50 120 -56q30 -4 50 10q30 -40 70 -36q50 6 90 50q40 20 70 32v20h-400z" fill="#3f6b48"/>' +
      '<path d="M120 64q30 -4 50 10q30 -40 70 -36" stroke="#5c8a5e" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="126" width="400" height="98" fill="#a39d92"/>' + blocks +
      tag("RUSS", 70, 190, 46, ICE, -7) + tag("DIEMON", 230, 176, 26, GOLD, -5) +
      '<g class="rs-sp"><circle cx="318" cy="150" r="3" fill="' + RED + '"/></g><g class="rs-sp rs-sp2"><circle cx="326" cy="146" r="2.4" fill="' + ICE + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#4e4e54"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="rs-car"><rect x="0" y="230" width="60" height="14" rx="5" fill="' + RED + '"/><rect x="12" y="222" width="34" height="10" rx="3" fill="' + RED + '"/><circle cx="14" cy="245" r="5" fill="#111"/><circle cx="46" cy="245" r="5" fill="#111"/></g>' +
      '<rect x="336" y="40" width="5" height="186" fill="#6b7178"/>' + sign(282, 44, 112, "CHASTAIN RD NW") + sign(292, 70, 92, "FREY RD NW"),
      sky("rs5", "#7cc0ea", "#f6e2c2"));
  }

  window.SCENES = { rsstop, rsbasement, rsglobe, rswolf, rscorner };
})();
