/* timmcgraw scenes (Regions tab: More of the South, Start / Richland Parish LA). CSS classes prefixed tm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tmglow{0%,100%{opacity:.45}50%{opacity:1}}.tm-glow{animation:tmglow 2.4s ease-in-out infinite}.tm-g2{animation-delay:-1.2s}' +
    '@keyframes tmcloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.tm-cl{animation:tmcloud 14s ease-in-out infinite alternate}' +
    '@keyframes tmsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.tm-sw{transform-box:fill-box;transform-origin:50% 100%;animation:tmsway 3s ease-in-out infinite}.tm-sw2{animation-delay:-1.5s}' +
    '@keyframes tmplane{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.tm-plane{animation:tmplane 9s linear infinite;animation-delay:-4.5s}' +
    '@keyframes tmmist{0%{opacity:0}30%{opacity:.55}100%{opacity:0;transform:translateY(16px)}}.tm-mist{animation:tmmist 9s linear infinite}' +
    '@keyframes tmball{0%{transform:translate(0,0)}50%{transform:translate(90px,-80px)}100%{transform:translate(180px,-30px);opacity:0}}.tm-ball{animation:tmball 2.6s ease-out infinite}' +
    '@keyframes tmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tm-bob{animation:tmbob 2.2s ease-in-out infinite}' +
    '@keyframes tmripple{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.8);opacity:0}}.tm-rip{transform-box:fill-box;transform-origin:50% 50%;animation:tmripple 2.8s ease-out infinite}.tm-rip2{animation-delay:-1.4s}' +
    '@keyframes tmfly{0%{transform:translate(0,0)}100%{transform:translate(-420px,-30px)}}.tm-bird{animation:tmfly 12s linear infinite}' +
    '@keyframes tmflash{0%,49%{opacity:1}50%,100%{opacity:.15}}.tm-fl{animation:tmflash 1s steps(1) infinite}.tm-fl2{animation-delay:-.5s}' +
    '@keyframes tmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tm-sp{animation:tmspray 1.4s ease-out infinite}.tm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const oak = (x, base, r, c) => '<g class="tm-sw"><rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r - r * 0.4) + '" r="' + r * 0.8 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/></g>';
  /* bald cypress: flared trunk, flat layered top, moss */
  const cypress = (x, base, h, cls) => '<g class="tm-sw ' + (cls || "") + '"><path d="M' + (x - 9) + ' ' + base + 'q6 -10 6 -' + (h * 0.6) + 'h6q0 ' + (h * 0.6 - 10) + ' 6 ' + (h * 0.6) + 'z" fill="#5a4030"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - h * 0.62) + '" rx="22" ry="9" fill="#3f6a3a"/><ellipse cx="' + x + '" cy="' + (base - h * 0.8) + '" rx="16" ry="8" fill="#4b7a42"/><ellipse cx="' + x + '" cy="' + (base - h * 0.95) + '" rx="9" ry="6" fill="#55864a"/>' +
    '<path d="M' + (x - 14) + ' ' + (base - h * 0.58) + 'v14M' + (x + 12) + ' ' + (base - h * 0.58) + 'v10" stroke="#9aa58a" stroke-width="2" opacity=".8"/></g>';
  const GOLD = "#f2b134", RED = "#c8423a", SKY = "#7fb7d9", CREAM = "#f4ead2", MAROON = "#7a1f2b";

  /* 1. Coming east on I-20 out of Monroe: the green Exit 132 sign for LA 133 to Start and Columbia, a pickup sliding in, flat Delta fields behind */
  function tmhwy() {
    const ish = (x, y) => '<path d="M' + x + ' ' + (y + 6) + 'q17 -8 34 0v20q0 10 -17 16q-17 -6 -17 -16z" fill="#1d4e9e" stroke="#fff" stroke-width="2"/><path d="M' + x + ' ' + (y + 6) + 'q17 -8 34 0v6h-34z" fill="#c8102e"/>' +
      '<text x="' + (x + 17) + '" y="' + (y + 32) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">20</text>';
    let rows = "";
    for (let i = 0; i < 12; i++) rows += '<path d="M' + (i * 40 - 30) + ' 170L' + (200 + (i - 6) * 8) + ' 132" stroke="#5f7a3e" stroke-width="2" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tm1)"/>' +
      '<g class="tm-cl"><ellipse cx="70" cy="34" rx="36" ry="9" fill="#fff" opacity=".7"/><ellipse cx="300" cy="22" rx="42" ry="10" fill="#fff" opacity=".6"/></g>' +
      '<circle cx="356" cy="64" r="15" fill="#ffd36b" opacity=".9"/>' +
      '<rect x="0" y="132" width="400" height="40" fill="#8aa45a"/>' + rows +
      '<path d="M0 134q40 -10 80 -2t70 -4t90 2t160 -4v6h-400z" fill="#3e6a36"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4d52"/><rect x="0" y="168" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 214h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="26 22"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* overhead-style guide sign on two posts */
      '<rect x="140" y="104" width="6" height="66" fill="#8b9096"/><rect x="300" y="104" width="6" height="66" fill="#8b9096"/>' +
      '<rect x="112" y="20" width="222" height="90" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<rect x="270" y="10" width="64" height="16" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="302" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT 132</text>' +
      '<rect x="126" y="34" width="44" height="30" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/><text x="148" y="48" text-anchor="middle" ' + font + ' font-size="7" fill="#000">LOUISIANA</text><text x="148" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="#000">133</text>' +
      '<text x="250" y="58" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">Start</text>' +
      '<text x="223" y="94" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Columbia</text>' +
      '<path d="M300 88l14 -14M314 74h-10M314 74v10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      ish(36, 104) + '<rect x="34" y="146" width="38" height="12" fill="#fff" stroke="#000" stroke-width="1"/><text x="53" y="155" text-anchor="middle" ' + font + ' font-size="8" fill="#000">EAST</text><rect x="51" y="158" width="4" height="12" fill="#8b9096"/>' +
      /* gold pickup sliding in */
      '<g class="anim-train"><g transform="translate(222 0)"><rect x="0" y="194" width="112" height="24" rx="5" fill="' + GOLD + '"/><path d="M8 194v-18h40l14 18z" fill="#d18f1c"/><path d="M14 192v-13h18v13z" fill="#a8d4ea"/><path d="M36 192v-13h10l10 13z" fill="#a8d4ea"/>' +
      '<rect x="62" y="186" width="48" height="8" fill="#d18f1c"/><circle cx="24" cy="220" r="9" fill="#1a1a1a"/><circle cx="24" cy="220" r="4" fill="#9a9a9a"/><circle cx="90" cy="220" r="9" fill="#1a1a1a"/><circle cx="90" cy="220" r="4" fill="#9a9a9a"/>' +
      '<rect x="0" y="200" width="6" height="5" rx="1" fill="#fff6c2" class="tm-glow"/></g></g>',
      sky("tm1", "#5fa8d8", "#f6cf8e"));
  }

  /* 2. Richland Parish farm country around Start: cotton rows to the horizon, a crop duster sweeping low, a tin-roof barn and a cotton trailer */
  function tmfields() {
    let rows = "";
    for (let i = 0; i < 9; i++) {
      const y = 150 + i * 13;
      rows += '<path d="M0 ' + y + 'h400" stroke="#4d6a32" stroke-width="5"/>';
      for (let x = (i % 2) * 9; x < 400; x += 18) rows += '<circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (2.4 + i * 0.25) + '" fill="#fbf8f0"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#tm2)"/>' +
      '<g class="tm-cl"><ellipse cx="110" cy="40" rx="40" ry="9" fill="#fff" opacity=".6"/><ellipse cx="320" cy="56" rx="30" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="126" width="400" height="134" fill="#6f8a4a"/>' +
      '<path d="M0 128q40 -12 90 -4t110 -6t200 4v4h-400z" fill="#3f6a36"/>' +
      oak(30, 130, 12, "#3b6a32") + oak(380, 128, 14) +
      /* tin-roof barn */
      '<rect x="262" y="96" width="62" height="34" fill="#8a3a2c"/><path d="M256 98l37 -20l37 20z" fill="#b9bec4"/><path d="M262 98h62" stroke="#7b8187" stroke-width="2"/><rect x="284" y="108" width="18" height="22" fill="#4a2a1e"/>' +
      /* module cotton trailer */
      '<rect x="40" y="112" width="70" height="20" fill="#e7e2d6" stroke="#b9b2a0"/><circle cx="52" cy="134" r="4" fill="#222"/><circle cx="98" cy="134" r="4" fill="#222"/>' +
      rows +
      /* crop duster: yellow biplane with a spray trail */
      '<g class="tm-plane"><g transform="translate(0 70)">' +
      '<g class="tm-mist"><path d="M-80 22h70" stroke="#fff" stroke-width="10" opacity=".35" stroke-linecap="round"/></g>' +
      '<path d="M0 14h56q10 0 12 6q-2 6 -12 6h-56l-8 -6z" fill="#f2c230"/><rect x="14" y="4" width="34" height="5" rx="2" fill="#e0a91a"/><rect x="14" y="30" width="34" height="5" rx="2" fill="#e0a91a"/>' +
      '<path d="M22 9v21M40 9v21" stroke="#555" stroke-width="1.4"/><path d="M-8 14l-6 -10h8l8 10z" fill="#e0a91a"/><rect x="34" y="10" width="10" height="6" rx="2" fill="#8fc4e0"/>' +
      '<ellipse cx="70" cy="20" rx="2" ry="9" fill="#555" opacity=".6"/></g></g>',
      sky("tm2", "#7cc0e6", "#f5e3b0"));
  }

  /* 3. Monroe, northeast Louisiana: the university ballpark in maroon and gold, a hitter's ball sailing out, a college pitcher's scholarship days */
  function tmdiamond() {
    let crowd = "";
    for (let i = 0; i < 40; i++) crowd += '<circle cx="' + (6 + i * 10) + '" cy="' + (104 + (i % 3) * 4) + '" r="4" fill="' + ["#7a1f2b", "#f2b134", "#e8e2d4", "#3a2a2a"][i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tm3)"/>' +
      /* light towers */
      '<rect x="40" y="22" width="4" height="80" fill="#8b9096"/><rect x="24" y="14" width="36" height="14" fill="#d9d9d9"/><g class="tm-glow"><rect x="26" y="16" width="32" height="10" fill="#fff8d0"/></g>' +
      '<rect x="356" y="22" width="4" height="80" fill="#8b9096"/><rect x="340" y="14" width="36" height="14" fill="#d9d9d9"/><g class="tm-glow tm-g2"><rect x="342" y="16" width="32" height="10" fill="#fff8d0"/></g>' +
      /* grandstand in maroon */
      '<path d="M0 118v-30h400v30z" fill="' + MAROON + '"/>' + crowd +
      '<rect x="0" y="112" width="400" height="8" fill="#5a1520"/><rect x="0" y="118" width="400" height="12" fill="' + GOLD + '"/>' +
      '<text x="200" y="128" text-anchor="middle" ' + font + ' font-size="9" fill="' + MAROON + '">MONROE  LOUISIANA  BASEBALL</text>' +
      /* field */
      '<rect x="0" y="130" width="400" height="130" fill="#3f8a3c"/>' +
      '<path d="M0 142h400M0 160h400M0 184h400M0 214h400" stroke="#4b9a46" stroke-width="10" opacity=".6"/>' +
      '<path d="M200 250l-120 -70q120 -60 240 0z" fill="#c48a52"/><path d="M200 236l-70 -42l70 -36l70 36z" fill="#3f8a3c"/>' +
      '<rect x="196" y="190" width="8" height="5" fill="#fff"/><circle cx="200" cy="204" r="7" fill="#d9a066"/><rect x="197" y="202" width="6" height="2" fill="#fff"/>' +
      '<rect x="126" y="190" width="8" height="8" fill="#fff" transform="rotate(45 130 194)"/><rect x="266" y="190" width="8" height="8" fill="#fff" transform="rotate(45 270 194)"/><rect x="196" y="154" width="8" height="8" fill="#fff" transform="rotate(45 200 158)"/>' +
      '<path d="M200 248l-180 -104M200 248l180 -104" stroke="#fff" stroke-width="1.5"/><path d="M196 248h8l-4 6z" fill="#fff"/>' +
      /* batter silhouette at the plate, no face */
      '<g transform="translate(172 222)"><rect x="0" y="0" width="10" height="22" rx="3" fill="' + MAROON + '"/><circle cx="5" cy="-5" r="6" fill="' + MAROON + '"/><path d="M8 4l18 -16" stroke="#c9a46a" stroke-width="3" stroke-linecap="round"/></g>' +
      '<g class="tm-ball"><circle cx="204" cy="212" r="3.2" fill="#fff" stroke="#c8423a" stroke-width=".8"/></g>' +
      /* scoreboard */
      '<rect x="292" y="52" width="70" height="34" rx="3" fill="#1e2a1e" stroke="' + GOLD + '" stroke-width="2"/><text x="327" y="66" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">HOME 6  AWAY 3</text>' +
      '<g class="tm-fl"><circle cx="312" cy="77" r="3" fill="#f24"/></g><g class="tm-fl tm-fl2"><circle cx="324" cy="77" r="3" fill="#2f4"/></g><circle cx="336" cy="77" r="3" fill="#444"/>',
      sky("tm3", "#14204a", "#5a6aa0"));
  }

  /* 4. Delhi, where he was born: Poverty Point Reservoir at sunset, bald cypress knees in the water, a fishing boat drifting, a heron crossing */
  function tmreservoir() {
    return svg(
      '<rect width="400" height="260" fill="url(#tm4)"/>' +
      '<circle cx="250" cy="118" r="30" fill="#ffcf6b" opacity=".95"/>' +
      '<g class="tm-bird"><g transform="translate(420 60)"><path d="M0 0q8 -6 16 0q8 -6 16 0" stroke="#2a1f2a" stroke-width="2.4" fill="none"/></g></g>' +
      '<path d="M0 130q60 -10 120 -4t140 -6t140 4v10h-400z" fill="#3b4e3a"/>' +
      '<rect x="0" y="134" width="400" height="126" fill="url(#tm4w)"/>' +
      '<path d="M222 150h56M230 162h40M236 174h28" stroke="#ffcf6b" stroke-width="3" opacity=".6"/>' +
      cypress(40, 170, 110) + cypress(96, 156, 80, "tm-sw2") + cypress(352, 166, 100, "tm-sw2") +
      '<path d="M120 170q4 -10 8 0M136 176q3 -8 6 0M330 178q4 -10 8 0" stroke="#5a4030" stroke-width="3" fill="none"/>' +
      /* dock */
      '<rect x="0" y="196" width="120" height="8" fill="#7a5a3a"/><rect x="12" y="204" width="5" height="20" fill="#5a4030"/><rect x="62" y="204" width="5" height="20" fill="#5a4030"/><rect x="108" y="204" width="5" height="20" fill="#5a4030"/>' +
      /* fishing boat */
      '<g class="tm-bob"><path d="M196 198h86l-10 14h-70z" fill="#5f6b70"/><rect x="214" y="186" width="10" height="12" rx="3" fill="' + RED + '"/><circle cx="219" cy="182" r="5" fill="#7a5a3a"/>' +
      '<path d="M224 188l40 -36" stroke="#3a2a1a" stroke-width="1.6"/><path d="M264 152q8 20 6 46" stroke="#ddd" stroke-width=".8" fill="none"/></g>' +
      '<ellipse class="tm-rip" cx="270" cy="200" rx="8" ry="2.4" fill="none" stroke="#fff" stroke-width="1"/><ellipse class="tm-rip tm-rip2" cx="270" cy="200" rx="8" ry="2.4" fill="none" stroke="#fff" stroke-width="1"/>',
      sky("tm4", "#3b3570", "#f08a5a") + '<linearGradient id="tm4w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9805a"/><stop offset="1" stop-color="#2b2f55"/></linearGradient>');
  }

  /* 5. His corner in Start: US 80 at LA 133, the Kansas City Southern tracks and the crossing gate behind, his name on the old feed store wall */
  function tmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tm5)"/>' +
      oak(26, 150, 20, "#3b6a32") + oak(376, 150, 18) +
      /* railroad on an embankment with a boxcar train idling */
      '<rect x="0" y="126" width="400" height="16" fill="#8a7a62"/><path d="M0 128h400M0 136h400" stroke="#555" stroke-width="2"/>' +
      '<g>' + [0, 1, 2, 3].map(i => '<rect x="' + (70 + i * 66) + '" y="96" width="60" height="30" fill="' + ["#7a3a28", "#3a4a6a", "#7a3a28", "#5a5a5a"][i] + '"/><circle cx="' + (80 + i * 66) + '" cy="128" r="4" fill="#222"/><circle cx="' + (120 + i * 66) + '" cy="128" r="4" fill="#222"/>').join("") + '</g>' +
      /* crossbuck with flashing lights */
      '<rect x="340" y="80" width="4" height="70" fill="#ddd"/><path d="M326 82l32 18M358 82l-32 18" stroke="#fff" stroke-width="5"/><path d="M326 82l32 18M358 82l-32 18" stroke="#111" stroke-width=".8"/>' +
      '<g class="tm-fl"><circle cx="332" cy="110" r="5" fill="#f33"/></g><g class="tm-fl tm-fl2"><circle cx="352" cy="110" r="5" fill="#f33"/></g>' +
      /* feed store wall with tags */
      '<rect x="0" y="146" width="252" height="80" fill="#c9b48a"/><path d="M0 146h252" stroke="#8a7a5a" stroke-width="3"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 25) + ' 148v78" stroke="#a8946a" stroke-width="1.2"/>').join("") +
      tag("START LA", 22, 172, 16, CREAM, -4) + tag("MCGRAW", 14, 206, 36, GOLD, -5) + tag("STAY HUMBLE", 120, 218, 15, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="322" y="130" width="6" height="94" fill="#2f2f2f"/>' + sign(262, 132, 126, "US Hwy 80") + sign(262, 158, 126, "LA Hwy 133") +
      '<g class="tm-sp"><circle cx="30" cy="186" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tm-sp tm-sp2"><circle cx="36" cy="180" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("tm5", "#2a3570", "#f0a060"));
  }

  window.SCENES = { tmhwy: tmhwy, tmfields: tmfields, tmdiamond: tmdiamond, tmreservoir: tmreservoir, tmcorner: tmcorner };
})();
