/* stevenmalcolm scenes (Regions tab: Detroit (Michigan); Grand Rapids - "a Christian hip-hop recording artist from Grand Rapids, Michigan"; Wyoming Park High grad; came to faith at The Edge, the hip-hop church at 2252 S Division; dad from Montego Bay = "The Second City"). CSS classes prefixed sm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes smglow{0%,100%{opacity:.45}50%{opacity:1}}.sm-glow{animation:smglow 2.2s ease-in-out infinite}.sm-g2{animation-delay:-1.1s}' +
    '@keyframes smcar{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.sm-car{animation:smcar 6s linear infinite}' +
    '@keyframes smwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.sm-wv{animation:smwave 3.2s ease-in-out infinite}.sm-wv2{animation-delay:-1.6s}' +
    '@keyframes smsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sm-sw{transform-box:fill-box;transform-origin:50% 100%;animation:smsway 3.6s ease-in-out infinite}.sm-sw2{animation-delay:-1.8s}' +
    '@keyframes smflag{0%,100%{transform:skewY(-4deg)}50%{transform:skewY(4deg)}}.sm-fl{transform-box:fill-box;transform-origin:0% 50%;animation:smflag 1.8s ease-in-out infinite}' +
    '@keyframes smbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sm-bm{transform-box:fill-box;transform-origin:50% 0%;animation:smbeam 4s ease-in-out infinite}.sm-bm2{animation-delay:-2s}' +
    '@keyframes smjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.sm-hj{animation:smjump .8s ease-in-out infinite}.sm-hj2{animation-delay:-.4s}' +
    '@keyframes smspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sm-sp{animation:smspray 1.4s ease-out infinite}.sm-sp2{animation-delay:.45s}' +
    '@keyframes smdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(30px);opacity:0}}.sm-dr{animation:smdrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c230", GREEN = "#2fb36a", SILVER = "#c8ccd4", RBLUE = "#1f4e9a";

  /* 0. Burton & Division, Grand Rapids: a silver Silver Line rapid bus sliding up to the raised platform under the glass canopy, the black station sign, Division Ave lights behind */
  function smstation() {
    const bus = '<g class="anim-train"><rect x="30" y="116" width="262" height="82" rx="12" fill="#d9dde3" stroke="#8a929c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 42) + '" y="128" width="36" height="30" rx="3" fill="#1e2a36"/>').join("") +
      '<rect x="36" y="128" width="30" height="60" rx="3" fill="#1e2a36"/><rect x="51" y="128" width="1.5" height="60" fill="#8a929c"/>' +
      '<path d="M30 168h262v10h-262z" fill="' + RBLUE + '"/><path d="M120 178q80 -22 172 -14v14z" fill="#a7a9ac"/>' +
      '<rect x="36" y="117" width="110" height="11" rx="2" fill="#111"/><text x="91" y="125.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">SILVER LINE · 60TH ST</text>' +
      '<circle cx="82" cy="198" r="12" fill="#222"/><circle cx="82" cy="198" r="5" fill="#a7a9ac"/><circle cx="244" cy="198" r="12" fill="#222"/><circle cx="244" cy="198" r="5" fill="#a7a9ac"/>' +
      '<circle cx="34" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sm0)"/>' +
      '<g fill="#3e4652"><rect x="0" y="70" width="80" height="40"/><rect x="90" y="78" width="60" height="32"/><rect x="300" y="64" width="100" height="46"/></g>' +
      Array.from({ length: 7 }, (_, i) => '<rect class="' + (i % 2 ? "sm-glow" : "sm-glow sm-g2") + '" x="' + (308 + i * 13) + '" y="74" width="7" height="9" fill="#ffd98a" opacity=".7"/>').join("") +
      '<path d="M0 84h400v8h-400z" fill="#b8c4d0" opacity=".85"/><path d="M0 92h400" stroke="#6a7682" stroke-width="2"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="92" width="6" height="46" fill="#8a949e"/>').join("") +
      '<rect x="0" y="138" width="400" height="12" fill="#c4c0b6"/><rect x="0" y="134" width="400" height="4" fill="#f2c200"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#45454c"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="12" y="22" width="232" height="36" rx="3" fill="#111"/><text x="24" y="45" ' + font + ' font-size="14" fill="#fff">Burton &amp; Division</text>' +
      '<rect x="252" y="22" width="56" height="36" rx="3" fill="#a7a9ac"/><text x="280" y="37" text-anchor="middle" ' + font + ' font-size="8" fill="#111">SILVER</text><text x="280" y="50" text-anchor="middle" ' + font + ' font-size="8" fill="#111">LINE</text>' +
      '<rect x="338" y="104" width="5" height="34" fill="#6b7178"/><rect x="318" y="84" width="46" height="22" rx="3" fill="' + RBLUE + '" stroke="#fff" stroke-width="1.5"/><text x="341" y="99" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">THE RAPID</text>',
      sky("sm0", "#1c2848", "#d98a6a"));
  }

  /* 1. The Edge on S Division: the old photo-studio building turned hip-hop church, the graffiti alley hallway, kids breaking under the lights */
  function smedge() {
    return svg(
      '<rect width="400" height="260" fill="url(#sm1)"/>' +
      '<rect x="0" y="40" width="400" height="160" fill="#2b2a33"/>' +
      Array.from({ length: 18 }, (_, i) => '<path d="M0 ' + (48 + i * 9) + 'h400" stroke="#24232b" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="34" width="400" height="10" fill="#15141a"/>' +
      '<path d="M120 44l-30 70h60z" fill="#fff6c2" opacity=".18" class="sm-bm"/><path d="M280 44l-30 70h60z" fill="#fff6c2" opacity=".18" class="sm-bm sm-bm2"/>' +
      '<circle cx="120" cy="44" r="5" fill="#fff6c2"/><circle cx="280" cy="44" r="5" fill="#fff6c2"/>' +
      tag("THE EDGE", 34, 104, 40, GOLD, -4) + tag("LIGHT IT UP", 230, 92, 22, GREEN, -6) +
      '<path d="M200 160V112h38v48" fill="#3a3540" stroke="' + SILVER + '" stroke-width="2"/><path d="M219 118v24M209 128h20" stroke="' + GOLD + '" stroke-width="4"/>' +
      tag("GRACE", 268, 140, 20, "#7ab8ff", -3) + tag("FAMILY", 40, 140, 22, "#ff8a6a", -5) +
      '<rect x="0" y="196" width="400" height="64" fill="#5a4a3a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 196l-14 64" stroke="#4a3a2e" stroke-width="2"/>').join("") +
      '<g class="sm-hj"><circle cx="120" cy="164" r="7" fill="#2a2024"/><path d="M120 171v20M120 178l-12 -8M120 178l12 -10M120 191l-8 12M120 191l8 12" stroke="#2a2024" stroke-width="4" stroke-linecap="round"/></g>' +
      '<g class="sm-hj sm-hj2"><circle cx="300" cy="164" r="7" fill="#2a2024"/><path d="M300 171v20M300 178l-12 -10M300 178l12 -8M300 191l-8 12M300 191l8 12" stroke="#2a2024" stroke-width="4" stroke-linecap="round"/></g>' +
      '<g transform="rotate(-90 200 200)"><g class="sm-sw"><circle cx="200" cy="168" r="7" fill="#2a2024"/><path d="M200 175v18M200 182l-12 6M200 182l12 6M200 193l-10 10M200 193l10 10" stroke="#2a2024" stroke-width="4" stroke-linecap="round"/></g></g>' +
      '<rect x="140" y="12" width="120" height="20" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="26" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">2252 S DIVISION</text>',
      sky("sm1", "#141420", "#2a2440"));
  }

  /* 2. Montego Bay, Jamaica - "The Second City", his father's hometown: turquoise water, white sand, palms bending, the black-green-gold flag on a pole */
  function smmobay() {
    return svg(
      '<rect width="400" height="260" fill="url(#sm2)"/>' +
      '<circle cx="320" cy="58" r="24" fill="#ffe08a"/>' +
      '<path d="M0 120q60 -30 120 -10q40 -24 90 -6v16h-210z" fill="#2f6a3a"/>' +
      '<rect x="0" y="120" width="400" height="70" fill="#1fb5c4"/>' +
      '<g class="sm-wv"><path d="M-20 138q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bff3f6" stroke-width="2.5" fill="none"/></g>' +
      '<g class="sm-wv sm-wv2"><path d="M-10 160q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8fbfc" stroke-width="2.5" fill="none"/></g>' +
      '<path d="M0 182q100 -14 200 -4q100 -12 200 0v82h-400z" fill="#f4e4bc"/>' +
      '<g class="sm-sw"><path d="M70 230q-6 -60 10 -116" stroke="#7a5a3a" stroke-width="7" fill="none"/><g fill="#2f8a3a"><path d="M80 114q-40 -6 -56 14q30 -6 56 -14z"/><path d="M80 114q36 -12 56 6q-30 -4 -56 -6z"/><path d="M80 114q-16 -30 -40 -32q22 12 40 32z"/><path d="M80 114q10 -32 34 -36q-20 14 -34 36z"/></g></g>' +
      '<g class="sm-sw sm-sw2"><path d="M350 236q8 -50 -6 -96" stroke="#7a5a3a" stroke-width="6" fill="none"/><g fill="#2f8a3a"><path d="M344 140q-36 -4 -50 14q26 -6 50 -14z"/><path d="M344 140q32 -10 50 6q-26 -4 -50 -6z"/><path d="M344 140q-12 -26 -34 -28q20 10 34 28z"/></g></g>' +
      '<rect x="196" y="96" width="4" height="120" fill="#ddd"/>' +
      '<g class="sm-fl"><rect x="200" y="98" width="60" height="36" fill="#007a3d"/><path d="M200 98l30 18l-30 18zM260 98l-30 18l30 18z" fill="#111"/><path d="M200 98l60 36M260 98l-60 36" stroke="#fed100" stroke-width="6"/></g>' +
      '<rect x="110" y="20" width="180" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="35.5" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">MONTEGO BAY · THE SECOND CITY</text>',
      sky("sm2", "#3aa0e8", "#bfe8ff"));
  }

  /* 3. Van Andel Arena, downtown Grand Rapids: the brick arena with the big curved glass front, a hometown crowd in the lights out front */
  function smarena() {
    return svg(
      '<rect width="400" height="260" fill="url(#sm3)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (i * 26 % 400 + 8) + '" cy="' + (8 + i * 11 % 40) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<path d="M20 80q180 -40 360 0v100h-360z" fill="#8a4a36"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M20 ' + (90 + i * 8) + 'h360" stroke="#7a3e2c" stroke-width="1"/>').join("") +
      '<path d="M110 74q90 -26 180 0v106h-180z" fill="#2a4a6a" stroke="' + SILVER + '" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (122 + i * 22) + ' ' + (i < 4 ? 70 - i * 3 : 59 + (i - 4) * 3) + 'V180" stroke="' + SILVER + '" stroke-width="1.5" opacity=".7"/>').join("") +
      '<path d="M110 110h180M110 145h180" stroke="' + SILVER + '" stroke-width="1.5" opacity=".7"/>' +
      '<rect class="sm-glow" x="114" y="114" width="172" height="28" fill="#ffd98a" opacity=".35"/>' +
      '<rect x="134" y="84" width="132" height="20" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="98" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">VAN ANDEL ARENA</text>' +
      '<path d="M120 180L60 40h20l52 140z" fill="#fff6c2" opacity=".14" class="sm-bm"/><path d="M280 180l60 -140h-20l-52 140z" fill="#fff6c2" opacity=".14" class="sm-bm sm-bm2"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3a3a42"/>' +
      Array.from({ length: 16 }, (_, i) => '<g class="sm-hj' + (i % 2 ? " sm-hj2" : "") + '"><circle cx="' + (14 + i * 25) + '" cy="' + (206 + (i % 3) * 8) + '" r="10" fill="#1e1a22"/><path d="M' + (8 + i * 25) + ' ' + (202 + (i % 3) * 8) + 'l-6 -24M' + (20 + i * 25) + ' ' + (202 + (i % 3) * 8) + 'l6 -24" stroke="#1e1a22" stroke-width="5" stroke-linecap="round"/></g>').join("") +
      '<rect x="128" y="18" width="144" height="20" rx="3" fill="#111" stroke="' + GREEN + '" stroke-width="1.5"/><text x="200" y="32" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GREEN + '">GRAND RAPIDS TONIGHT</text>',
      sky("sm3", "#0e1430", "#3a2a5a"));
  }

  /* 4. The corner: S Division Ave and Burton St, STEVEN MALCOLM tagged on the brick wall, the Silver Line canopy and the downtown towers behind */
  function smcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sm4)"/>' +
      '<g fill="#3a3a4a"><rect x="40" y="40" width="34" height="100"/><path d="M90 140V30q24 -10 40 0v110z"/><rect x="150" y="56" width="40" height="84"/><rect x="210" y="66" width="30" height="74"/><rect x="300" y="50" width="44" height="90"/></g>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="' + (i % 3 ? "" : "sm-glow") + '" x="' + [46, 58, 98, 112, 98, 112, 156, 172, 216, 226, 306, 322, 306, 322][i] + '" y="' + [54, 70, 46, 46, 70, 94, 70, 92, 80, 100, 64, 64, 90, 112][i] + '" width="7" height="9" fill="#ffd98a" opacity=".75"/>').join("") +
      '<rect x="252" y="96" width="40" height="5" fill="#b8c4d0"/><rect x="256" y="101" width="3" height="40" fill="#8a949e"/><rect x="285" y="101" width="3" height="40" fill="#8a949e"/>' +
      '<rect x="0" y="136" width="400" height="90" fill="#7a4434"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#64372a" stroke-width="1"/>').join("") +
      tag("STEVEN MALCOLM", 12, 200, 30, GOLD, -5) + tag("4 AGAINST 5", 24, 222, 18, GREEN, -3) + tag("LEH GET IT", 22, 164, 18, SILVER, -4) + tag("SECOND CITY", 168, 224, 17, "#fff", -4) +
      '<g class="sm-dr"><path d="M54 204q-4 6 0 10q4 -4 0 -10z" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="sm-car"><rect x="0" y="236" width="44" height="14" rx="4" fill="#c8ccd4"/><circle cx="10" cy="251" r="4" fill="#222"/><circle cx="34" cy="251" r="4" fill="#222"/></g>' +
      '<rect x="356" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(272, 98, 126, "S Division Ave") + sign(298, 124, 100, "Burton St") +
      '<g class="sm-sp"><circle cx="160" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sm-sp sm-sp2"><circle cx="166" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sm4", "#1a1830", "#e8945a"));
  }

  window.SCENES = { smstation: smstation, smedge: smedge, smmobay: smmobay, smarena: smarena, smcorner: smcorner };
})();
