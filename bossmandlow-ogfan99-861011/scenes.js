/* bossmandlow scenes (Regions tab: South Florida; Port Salerno, Martin County). CSS classes prefixed dl- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dlflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.dl-flk{animation:dlflick 2.6s infinite}.dl-flk2{animation-delay:.9s}' +
    '@keyframes dlglow{0%,100%{opacity:.45}50%{opacity:1}}.dl-glow{animation:dlglow 2.2s ease-in-out infinite}.dl-g2{animation-delay:-1.1s}' +
    '@keyframes dlbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.dl-bob{animation:dlbob 2.4s ease-in-out infinite}.dl-bob2{animation-delay:-1.2s}' +
    '@keyframes dlrock{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.dl-rock{transform-box:fill-box;transform-origin:50% 100%;animation:dlrock 3s ease-in-out infinite}.dl-rock2{animation-delay:-1.5s}' +
    '@keyframes dlbird{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.dl-bird{animation:dlbird 14s linear infinite}.dl-bird2{animation-delay:-6s}' +
    '@keyframes dlmana{0%,60%,100%{transform:translateY(10px);opacity:0}70%,90%{transform:translateY(0);opacity:1}}.dl-mana{animation:dlmana 7s ease-in-out infinite}' +
    '@keyframes dlcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.dl-car{animation:dlcar 4.5s linear infinite}' +
    '@keyframes dlshot{0%{transform:translate(0,0)}50%{transform:translate(70px,-92px)}100%{transform:translate(140px,-40px)}}.dl-shot{animation:dlshot 2.6s cubic-bezier(.3,.2,.6,1) infinite}' +
    '@keyframes dlnet{0%,90%{transform:scaleY(1)}95%{transform:scaleY(1.25)}100%{transform:scaleY(1)}}.dl-net{transform-box:fill-box;transform-origin:50% 0%;animation:dlnet 2.6s infinite}' +
    '@keyframes dlwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.dl-wave{animation:dlwave 3s linear infinite}' +
    '@keyframes dlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dl-sp{animation:dlspray 1.4s ease-out infinite}.dl-sp2{animation-delay:.45s}' +
    '@keyframes dlpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.dl-palm{transform-box:fill-box;transform-origin:50% 100%;animation:dlpalm 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "dl-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q4 -40 -2 -80" stroke="#6b4a2a" stroke-width="6" fill="none"/><g class="dl-palm' + (cls || "") + '">' +
    ['M-2 -80q-30 -6 -46 14', 'M-2 -80q28 -10 46 8', 'M-2 -80q-20 -24 -40 -18', 'M-2 -80q18 -26 40 -16', 'M-2 -80q0 -26 -4 -34'].map(d => '<path d="' + d + '" stroke="#1f6b3a" stroke-width="6" fill="none" stroke-linecap="round"/>').join("") + '</g></g>';
  const bird = (x, y) => '<path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>';
  const ICE = "#5ce1ff", GOLD = "#ffc23d", CORAL = "#ff6b8a", MARTY = "#0a6fb5";

  /* 1. MARTY Route 1 pulling into its Port Salerno end of the line, US 1 & Cove Rd: the bus stop pole with the route-1 bullet, the US 1 shield, palms, hot Florida afternoon */
  function dlbus() {
    const bus = '<g class="anim-train"><rect x="40" y="120" width="250" height="78" rx="10" fill="#f4f6f8" stroke="#7a8590" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (58 + i * 42) + '" y="132" width="34" height="28" rx="3" fill="#1d2a36"/>').join("") +
      '<rect x="262" y="130" width="22" height="48" rx="3" fill="#1d2a36"/><rect x="40" y="166" width="250" height="8" fill="' + MARTY + '"/><rect x="40" y="176" width="250" height="3" fill="#2bb3a3"/>' +
      '<rect x="240" y="123" width="44" height="7" rx="2" fill="#111"/><text x="262" y="129" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb02e">1 COVE RD</text>' +
      '<circle cx="90" cy="198" r="13" fill="#222"/><circle cx="90" cy="198" r="5" fill="#888"/><circle cx="245" cy="198" r="13" fill="#222"/><circle cx="245" cy="198" r="5" fill="#888"/>' +
      '<circle class="dl-flk" cx="285" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dl1)"/>' +
      '<circle cx="330" cy="46" r="22" fill="#fff3c4" opacity=".9"/>' +
      '<g class="dl-bird"><g>' + bird(40, 40) + '</g></g><g class="dl-bird dl-bird2"><g>' + bird(60, 62) + '</g></g>' +
      palm(26, 196, 1.1) + palm(360, 196, 1.2, " dl-bob2") + palm(318, 200, .8) +
      '<rect x="0" y="196" width="400" height="64" fill="#5c5f63"/><rect x="0" y="194" width="400" height="5" fill="#d8d2c2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="230" width="28" height="4" fill="#f2d24a"/>').join("") +
      bus +
      /* bus stop pole + sign */
      '<rect x="326" y="104" width="5" height="92" fill="#8a8f96"/><rect x="306" y="96" width="46" height="34" rx="4" fill="' + MARTY + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="329" y="110" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text><circle cx="329" cy="121" r="7" fill="#fff"/><text x="329" y="125" text-anchor="middle" ' + font + ' font-size="10" fill="' + MARTY + '">1</text>' +
      /* US 1 shield */
      '<rect x="356" y="128" width="4" height="68" fill="#8a8f96"/><path d="M342 112h32v14q0 12 -16 18q-16 -6 -16 -18z" fill="#fff" stroke="#111" stroke-width="2"/><text x="358" y="133" text-anchor="middle" ' + font + ' font-size="14" fill="#111">1</text>' +
      '<rect x="20" y="14" width="200" height="28" rx="4" fill="#111"/><text x="120" y="33" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">US 1 &amp; Cove Rd</text>' +
      '<circle cx="206" cy="28" r="8" fill="' + MARTY + '"/><text x="206" y="32" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">1</text>',
      sky("dl1", "#7cc8f0", "#ffe2a8"));
  }

  /* 2. Manatee Pocket, Port Salerno's working waterfront at sunset: the old tin-roof fish house on pilings, shrimp boats rocking, pelicans gliding, a manatee nose coming up */
  function dldocks() {
    const boat = (x, y, s, hull, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="dl-rock' + (cls || "") + '">' +
      '<path d="M-50 0h100l-12 18h-76z" fill="' + hull + '" stroke="#222" stroke-width="1.5"/><rect x="-24" y="-20" width="30" height="20" fill="#f4f1e8" stroke="#555"/><rect x="-18" y="-15" width="8" height="7" fill="#2a3a4a"/><rect x="-6" y="-15" width="8" height="7" fill="#2a3a4a"/>' +
      '<path d="M18 0v-62M18 -56l-40 30M18 -56l34 34" stroke="#3a3a3a" stroke-width="2" fill="none"/><path d="M-22 -26l-18 28M52 -22l10 22" stroke="#666" stroke-width="1"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dl2)"/>' +
      '<circle cx="250" cy="120" r="34" fill="#ffd27a" opacity=".85"/>' +
      '<g class="dl-bird"><g>' + bird(30, 50) + bird(52, 40) + '</g></g>' +
      '<rect x="0" y="140" width="400" height="120" fill="#2c5f7a"/>' +
      '<g class="dl-wave">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (160 + (i % 3) * 22) + 'q10 -4 20 0t20 0" stroke="#7fb8d0" stroke-width="2" fill="none" opacity=".6"/>').join("") + '</g>' +
      Array.from({ length: 7 }, (_, i) => '<rect class="dl-glow' + (i % 2 ? " dl-g2" : "") + '" x="' + (232 - i * 6) + '" y="' + (146 + i * 16) + '" width="' + (36 + i * 12) + '" height="3" rx="1.5" fill="#ffc070" opacity=".7"/>').join("") +
      /* fish house on pilings */
      '<rect x="10" y="94" width="150" height="54" fill="#d9cdb4" stroke="#6a5a40" stroke-width="2"/><path d="M2 96l83 -34l83 34z" fill="#9aa3a8" stroke="#5a6266" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (14 + i * 20) + ' 96v-' + (2 + i % 2) + '" stroke="#7a8388" stroke-width="1"/>').join("") +
      '<rect x="30" y="108" width="26" height="40" fill="#5a3a24"/><rect x="74" y="108" width="22" height="18" fill="#2a3a4a"/><rect x="112" y="108" width="22" height="18" fill="#2a3a4a"/><rect class="dl-glow" x="76" y="110" width="18" height="14" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="0" y="148" width="180" height="8" fill="#7a5a3a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (6 + i * 18) + '" y="156" width="5" height="40" fill="#5a4028"/>').join("") +
      '<text x="85" y="104" text-anchor="middle" ' + font + ' font-size="9" fill="#5a4a30" letter-spacing="2">FISH HOUSE</text>' +
      boat(260, 146, 1, "#e9eef2") + boat(360, 162, .8, "#c8462e", " dl-rock2") +
      /* pelican on a piling */
      '<rect x="186" y="128" width="7" height="60" fill="#5a4028"/><ellipse cx="190" cy="122" rx="10" ry="6" fill="#8a7a66"/><circle cx="198" cy="114" r="4" fill="#f1e8d0"/><path d="M200 114l14 4l-14 2z" fill="#d9a43a"/>' +
      /* manatee */
      '<g class="dl-mana"><ellipse cx="150" cy="214" rx="26" ry="9" fill="#7d8a8c"/><ellipse cx="128" cy="211" rx="8" ry="6" fill="#8d9a9c"/><circle cx="124" cy="209" r="1.2" fill="#222"/></g>',
      sky("dl2", "#3a2a5a", "#ff9a6a"));
  }

  /* 3. The Roosevelt Bridge over the St. Lucie River in Stuart: the tall concrete span, the FEC railroad bascule leaf raised beside it, a car flying over (Mr. Beat the Road) */
  function dlbridge() {
    return svg(
      '<rect width="400" height="260" fill="url(#dl3)"/>' + stars(10) +
      '<rect x="0" y="170" width="400" height="90" fill="#1f4a62"/>' +
      '<g class="dl-wave">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (186 + (i % 3) * 20) + 'q10 -4 20 0t20 0" stroke="#5fa0bf" stroke-width="2" fill="none" opacity=".5"/>').join("") + '</g>' +
      /* far shore + downtown Stuart lights */
      '<rect x="0" y="160" width="400" height="12" fill="#14303f"/>' + Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 3 ? "" : "dl-glow") + '" x="' + (8 + i * 25) + '" y="' + (150 - (i % 4) * 6) + '" width="12" height="' + (12 + (i % 4) * 6) + '" fill="#1c3a4c"/><rect x="' + (11 + i * 25) + '" y="' + (154 - (i % 4) * 6) + '" width="3" height="3" fill="#ffd98a" opacity=".8"/>').join("") +
      /* main span: concrete deck rising, piers */
      '<path d="M0 132q200 -50 400 0v10q-200 -50 -400 0z" fill="#d8d0bc" stroke="#9a927e" stroke-width="1.5"/>' +
      [40, 100, 160, 240, 300, 360].map(x => { const top = 132 - 25 * (1 - Math.pow((x - 200) / 200, 2)) + 8; return '<rect x="' + (x - 7) + '" y="' + top + '" width="14" height="' + (178 - top) + '" fill="#c8c0aa"/><rect x="' + (x - 12) + '" y="' + top + '" width="24" height="5" fill="#b8b09a"/>'; }).join("") +
      Array.from({ length: 20 }, (_, i) => { const x = 10 + i * 20, y = 132 - 25 * (1 - Math.pow((x - 200) / 200, 2)) - 2; return '<circle class="dl-glow' + (i % 2 ? " dl-g2" : "") + '" cx="' + x + '" cy="' + (y - 4) + '" r="1.8" fill="#ffe7a0"/>'; }).join("") +
      /* car crossing with headlight */
      '<g class="dl-car"><g transform="translate(0 14)"><path d="M0 90h34l6 -8h-28z" fill="' + GOLD + '"/><rect x="0" y="88" width="40" height="6" rx="2" fill="' + GOLD + '"/><circle cx="8" cy="95" r="3" fill="#111"/><circle cx="32" cy="95" r="3" fill="#111"/><path d="M40 90l26 -4v8z" fill="#fff6c2" opacity=".5"/></g></g>' +
      /* FEC railroad bascule bridge, leaf raised */
      '<g transform="translate(0 44)"><rect x="0" y="168" width="190" height="8" fill="#2a2a2a"/>' + [20, 70, 120, 170].map(x => '<rect x="' + x + '" y="176" width="8" height="30" fill="#2a2a2a"/>').join("") +
      '<g transform="rotate(-62 190 172)"><rect x="190" y="166" width="90" height="8" fill="#2a2a2a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (194 + i * 14) + ' 166l7 -10l7 10" stroke="#2a2a2a" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<rect x="182" y="150" width="18" height="30" fill="#333"/><circle class="dl-flk" cx="191" cy="146" r="3" fill="' + CORAL + '"/></g>' +
      '<text x="390" y="250" text-anchor="end" ' + font + ' font-size="10" fill="#cfe6f0" opacity=".7">ST. LUCIE RIVER</text>',
      sky("dl3", "#0e1834", "#3a5a8a"));
  }

  /* 4. Dlow Curry from deep: the outdoor court under the lights, the ball swishing through the chain net, palm shadows, the scoreboard lit for BIG ZA */
  function dlcourt() {
    return svg(
      '<rect width="400" height="260" fill="url(#dl4)"/>' + stars(16) +
      palm(30, 170, 1, " dl-bob2") + palm(372, 168, 1.1) +
      '<path d="M0 170h400v90h-400z" fill="#1f6b5a"/><path d="M30 170h340l30 90h-400z" fill="#2c8a74"/>' +
      '<path d="M200 170v90M60 260q140 -90 280 0" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/><ellipse cx="300" cy="196" rx="44" ry="12" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/>' +
      /* light poles */
      '<rect x="80" y="40" width="4" height="130" fill="#666"/><rect x="66" y="34" width="32" height="10" rx="2" fill="#ddd"/><path class="dl-glow" d="M70 44l-30 126h88z" fill="#fff6c8" opacity=".12"/>' +
      '<rect x="316" y="40" width="4" height="130" fill="#666"/><rect x="302" y="34" width="32" height="10" rx="2" fill="#ddd"/>' +
      /* hoop */
      '<rect x="336" y="96" width="6" height="84" fill="#888"/><rect x="300" y="70" width="46" height="34" fill="#f4f4f4" stroke="#333" stroke-width="2"/><rect x="314" y="82" width="18" height="14" fill="none" stroke="' + CORAL + '" stroke-width="2"/>' +
      '<rect x="302" y="104" width="30" height="3" fill="' + CORAL + '"/><g class="dl-net"><path d="M304 107l4 16h18l4 -16M310 107l2 16M318 107v16M326 107l-2 16" stroke="#cfd3d8" stroke-width="1.5" fill="none"/></g>' +
      /* ball arc */
      '<g class="dl-shot"><circle cx="170" cy="150" r="10" fill="#e8742a" stroke="#4a2a10" stroke-width="1.5"/><path d="M160 150h20M170 140v20M163 143q7 7 0 14M177 143q-7 7 0 14" stroke="#4a2a10" stroke-width="1"/></g>' +
      /* scoreboard */
      '<rect x="130" y="20" width="140" height="52" rx="4" fill="#111" stroke="#444" stroke-width="2"/><text x="200" y="36" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '" letter-spacing="2">BIG ZA</text>' +
      '<text class="dl-flk" x="200" y="64" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="24" fill="' + GOLD + '">30</text>' +
      '<text x="148" y="64" text-anchor="middle" font-family="Courier New, monospace" font-size="10" fill="' + CORAL + '">3PT</text><text x="252" y="64" text-anchor="middle" font-family="Courier New, monospace" font-size="10" fill="' + CORAL + '">SWISH</text>',
      sky("dl4", "#0a1028", "#2a2050"));
  }

  /* 5. SE Salerno Rd and SE Dixie Hwy in Port Salerno: green signs, BIG ZA and DLOW tagged on the block wall, the FEC tracks and crossing gate, the fishing fleet's masts in Manatee Pocket behind */
  function dlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dl5)"/>' + stars(8) +
      /* masts of the fleet behind */
      '<rect x="0" y="118" width="400" height="18" fill="#2a4a62"/>' +
      [60, 90, 140, 170, 230, 250, 300, 340].map((x, i) => '<path class="dl-rock' + (i % 2 ? " dl-rock2" : "") + '" d="M' + x + ' 128v-' + (50 + (i % 3) * 14) + 'M' + x + ' ' + (88 - (i % 3) * 8) + 'l-22 30M' + x + ' ' + (88 - (i % 3) * 8) + 'l18 26" stroke="#e8e0d0" stroke-width="2" fill="none" opacity=".75"/>').join("") +
      [60, 140, 230, 300].map(x => '<path d="M' + (x - 26) + ' 124h52l-8 8h-36z" fill="#e8eef2" opacity=".8"/>').join("") +
      palm(20, 140, .9) + palm(384, 140, .8, " dl-bob2") +
      /* crossing gate */
      ''+
      /* wall */
      '<rect x="0" y="136" width="400" height="88" fill="#e6d7b8"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#d2c29e" stroke-width="1"/>').join("") +
      Array.from({ length: 27 }, (_, i) => '<path d="M' + (i * 15) + ' 136v88" stroke="#d2c29e" stroke-width="1" opacity=".5"/>').join("") +
      tag("DLOW", 22, 196, 60, ICE, -6) + tag("BIG ZA", 192, 186, 28, GOLD, -4) + tag("TOO SLIPPERY", 24, 218, 17, "#fff", -3) + tag("MOTION", 206, 216, 18, CORAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5c5f63"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="372" y="150" width="5" height="74" fill="#ddd"/><path d="M362 152l24 -20M362 132l24 20" stroke="#fff" stroke-width="6"/><path d="M362 152l24 -20M362 132l24 20" stroke="#111" stroke-width="1"/><rect x="360" y="162" width="30" height="10" rx="5" fill="#222"/><circle class="dl-flk" cx="367" cy="167" r="4" fill="' + CORAL + '"/><circle class="dl-flk dl-flk2" cx="383" cy="167" r="4" fill="' + CORAL + '"/>' +
      '<rect x="304" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 110, "SE Salerno Rd") + sign(254, 124, 104, "SE Dixie Hwy") +
      '<g class="dl-sp"><circle cx="160" cy="160" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="dl-sp dl-sp2"><circle cx="166" cy="154" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("dl5", "#14204a", "#ff8a6a"));
  }

  window.SCENES = { dlbus: dlbus, dldocks: dldocks, dlbridge: dlbridge, dlcourt: dlcourt, dlcorner: dlcorner };
})();
