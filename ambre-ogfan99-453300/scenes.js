/* ambre scenes (Regions tab: New Orleans; the 17th Ward - Ambré spent much of her childhood in New Orleans' 17th Ward, moving through foster homes; her grandfather danced second lines, her family are Mardi Gras Indians, she sang soprano in a church choir). CSS classes and ids prefixed amb- (the page's own anim-train is kept).
   1 S Carrollton Av / Earhart Blvd: the RTA 90 Carrollton bus pulling up to the stop under the live oaks at dusk.
   2 A Sunday second line (her grandfather danced them): brass horns, a tuba bell, decorated umbrellas bobbing past colorful shotgun houses.
   3 Mardi Gras Indian suit (her family are Mardi Gras Indians): the big feathered crown and beaded apron on a stand, plumes swaying, a tambourine shaking.
   4 The church choir loft where she sang soprano: stained glass, robed choir from behind, notes rising.
   5 Fig St and S Carrollton Av in the 17th Ward: green signs, AMBRÉ tagged on the wall, the stepped top of the Energy Centre on the skyline behind.
   No logos, no faces. The 9 in "90" is drawn as a path with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ambflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.amb-flk{animation:ambflick 2.2s infinite}.amb-flk2{animation-delay:.7s}' +
    '@keyframes ambsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.amb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ambsway 3.2s ease-in-out infinite}.amb-sway2{animation-delay:-1.6s}' +
    '@keyframes ambbob{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-8px) rotate(6deg)}}.amb-bob{transform-box:fill-box;transform-origin:50% 100%;animation:ambbob 1.3s ease-in-out infinite}.amb-bob2{animation-delay:-.45s}.amb-bob3{animation-delay:-.9s}' +
    '@keyframes ambmarch{from{transform:translateX(-30px)}to{transform:translateX(30px)}}.amb-march{animation:ambmarch 6s ease-in-out infinite alternate}' +
    '@keyframes ambnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(14px,-70px);opacity:0}}.amb-note{animation:ambnote 3.6s ease-out infinite}.amb-note2{animation-delay:-1.2s}.amb-note3{animation-delay:-2.4s}' +
    '@keyframes ambshake{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.amb-shake{transform-box:fill-box;transform-origin:50% 50%;animation:ambshake .5s ease-in-out infinite}' +
    '@keyframes ambglow{0%,100%{opacity:.55}50%{opacity:1}}.amb-glow{animation:ambglow 3s ease-in-out infinite}' +
    '@keyframes ambspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.amb-sp{animation:ambspray 1.4s ease-out infinite}.amb-sp2{animation-delay:.45s}' +
    '@keyframes ambcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.amb-car{animation:ambcar 8s linear infinite}' +
    '@keyframes ambblink{0%,100%{opacity:.25}50%{opacity:1}}.amb-bl{animation:ambblink 1.6s ease-in-out infinite}.amb-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  /* "90" drawn as paths: the 9 is a ring with a straight stem down the right side */
  const ninety = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="none" stroke="' + c + '" stroke-width="2.6" stroke-linecap="round">' +
    '<circle cx="4.5" cy="4.6" r="3.6"/><path d="M8.1 4.6V15"/><ellipse cx="16" cy="9.5" rx="3.8" ry="5.6"/></g>';
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-4 0q2-30-2-46h12q-4 16-2 46z" fill="#3a2a1e"/>' +
    '<g class="amb-sway"><ellipse cx="0" cy="-52" rx="46" ry="22" fill="#24412c"/><ellipse cx="-30" cy="-40" rx="26" ry="14" fill="#2c4d34"/><ellipse cx="30" cy="-42" rx="28" ry="15" fill="#2a4a32"/>' +
    '<path d="M-36 -38q-2 16 2 26M-20 -36q-1 12 1 20M24 -38q2 14-1 24M38 -36q0 10 2 16" stroke="#7f8f78" stroke-width="2" fill="none" opacity=".7"/></g></g>';
  const shotgun = (x, w, h, body, trim, door) => '<rect x="' + x + '" y="' + (196 - h) + '" width="' + w + '" height="' + h + '" fill="' + body + '"/>' +
    '<path d="M' + (x - 4) + ' ' + (196 - h) + 'l' + (w / 2 + 4) + ' -22l' + (w / 2 + 4) + ' 22z" fill="' + trim + '"/>' +
    '<rect x="' + (x - 3) + '" y="' + (196 - h + 10) + '" width="' + (w + 6) + '" height="5" fill="' + trim + '"/>' +
    '<rect x="' + (x + 8) + '" y="' + (196 - h + 22) + '" width="14" height="30" fill="' + door + '"/><rect x="' + (x + w - 22) + '" y="' + (196 - h + 22) + '" width="14" height="30" fill="' + door + '"/>' +
    '<path d="M' + (x + 8) + ' ' + (196 - h + 22) + 'v30M' + (x + w - 22) + ' ' + (196 - h + 22) + 'v30" stroke="' + trim + '" stroke-width="1"/>' +
    '<rect x="' + (x + 2) + '" y="' + (196 - h + 18) + '" width="3" height="' + (h - 18) + '" fill="' + trim + '"/><rect x="' + (x + w - 5) + '" y="' + (196 - h + 18) + '" width="3" height="' + (h - 18) + '" fill="' + trim + '"/>';

  window.SCENES = {
    /* 1 - RTA 90 Carrollton bus at S Carrollton Av & Earhart Blvd */
    ambstop: () => svg(
      '<rect width="400" height="260" fill="url(#amb-s1)"/>' +
      '<circle cx="320" cy="62" r="20" fill="#ffd28a" opacity=".85"/>' +
      '<g fill="#3b2d4a"><rect x="0" y="120" width="70" height="40"/><rect x="70" y="128" width="60" height="32"/><rect x="250" y="122" width="80" height="38"/><rect x="330" y="130" width="70" height="30"/></g>' +
      oak(40, 170, 1.1) + oak(360, 168, 1.05) +
      '<rect x="0" y="168" width="400" height="10" fill="#8f8a84"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#3d3b40"/>' +
      '<path d="M0 220h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* shelter */
      '<g><rect x="250" y="112" width="96" height="6" fill="#2d3a4f"/><rect x="254" y="118" width="3" height="52" fill="#2d3a4f"/><rect x="339" y="118" width="3" height="52" fill="#2d3a4f"/>' +
      '<rect x="258" y="120" width="80" height="40" fill="#9fc4e0" opacity=".35"/><rect x="266" y="150" width="62" height="5" fill="#5a4636"/></g>' +
      /* stop pole */
      '<rect x="360" y="98" width="4" height="74" fill="#c7c9cc"/>' +
      '<rect x="346" y="96" width="32" height="40" rx="3" fill="#1f5aa6" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="362" y="108" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RTA</text>' +
      '<rect x="350" y="112" width="24" height="18" rx="2" fill="#fff"/>' + ninety(354, 114, 1, "#1f5aa6") +
      /* bus */
      '<g class="anim-train"><rect x="40" y="132" width="196" height="58" rx="8" fill="#f4f4f2"/>' +
      '<rect x="40" y="168" width="196" height="8" fill="#1f5aa6"/><rect x="40" y="176" width="196" height="3" fill="#2fa36b"/>' +
      '<rect x="50" y="140" width="150" height="22" rx="2" fill="#24384f"/><path d="M86 140v22M122 140v22M158 140v22" stroke="#f4f4f2" stroke-width="3"/>' +
      '<rect x="206" y="138" width="26" height="44" rx="2" fill="#24384f"/>' +
      '<rect x="206" y="134" width="28" height="4" fill="#111"/>' +
      '<rect x="120" y="125" width="112" height="9" rx="2" fill="#111"/>' +
      '<text x="210" y="133" text-anchor="end" ' + font + ' font-size="8" fill="#ffb347">CARROLLTON</text>' + ninety(214, 126, .52, "#ffb347") +
      '<circle cx="78" cy="190" r="11" fill="#1a1a1a"/><circle cx="78" cy="190" r="4" fill="#888"/><circle cx="200" cy="190" r="11" fill="#1a1a1a"/><circle cx="200" cy="190" r="4" fill="#888"/>' +
      '<rect x="230" y="176" width="8" height="6" fill="#ffe28a" class="amb-flk"/></g>' +
      sign(18, 22, 128, "S CARROLLTON AV") + sign(150, 22, 108, "EARHART BLVD") +
      '<rect x="0" y="232" width="400" height="28" fill="#000" opacity=".25"/>',
      sky("amb-s1", "#3a1f4f", "#f08a5d")),

    /* 2 - Sunday second line */
    ambsecond: () => svg(
      '<rect width="400" height="260" fill="url(#amb-s2)"/>' +
      shotgun(0, 86, 92, "#7fd6c2", "#fff6e6", "#2f5d55") + shotgun(96, 86, 96, "#ffb347", "#fff6e6", "#8a4b1a") +
      shotgun(192, 86, 92, "#ff7a9c", "#fff6e6", "#7a2440") + shotgun(288, 112, 98, "#b59cff", "#fff6e6", "#4a3a8a") +
      '<rect x="0" y="196" width="400" height="64" fill="#5d5a57"/><rect x="0" y="196" width="400" height="6" fill="#9a958d"/>' +
      '<g class="amb-march">' +
      /* marchers as silhouettes (no faces) */
      [60, 130, 200, 270, 340].map((x, i) => '<g><circle cx="' + x + '" cy="176" r="8" fill="#2a1b2e"/><rect x="' + (x - 9) + '" y="184" width="18" height="34" rx="6" fill="' + ["#fff", "#ffe08a", "#fff", "#ffe08a", "#fff"][i] + '"/>' +
        '<rect x="' + (x - 8) + '" y="218" width="7" height="22" fill="#2a1b2e"/><rect x="' + (x + 1) + '" y="218" width="7" height="22" fill="#2a1b2e"/></g>').join("") +
      /* sousaphone bell */
      '<g><path d="M118 150q20-24 34-10l-8 40q-14 4-22-8z" fill="#e8c35a" stroke="#8a6a1a" stroke-width="2"/><ellipse cx="140" cy="146" rx="18" ry="9" fill="#f5d77a" stroke="#8a6a1a" stroke-width="2" transform="rotate(-20 140 146)"/></g>' +
      /* trombone */
      '<path d="M212 190h48M212 196h40M260 190v6" stroke="#e8c35a" stroke-width="3" fill="none"/><path d="M256 186l14-6v26l-14-6z" fill="#e8c35a"/>' +
      /* trumpet */
      '<path d="M282 188h26" stroke="#e8c35a" stroke-width="3"/><path d="M306 183l10-4v18l-10-4z" fill="#e8c35a"/>' +
      '</g>' +
      /* umbrellas bobbing */
      [[40, 150, "#ff5e7e", "amb-bob"], [196, 146, "#ffb347", "amb-bob amb-bob2"], [336, 148, "#7fd6c2", "amb-bob amb-bob3"]].map(u =>
        '<g class="' + u[3] + '"><path d="M' + u[0] + ' ' + u[1] + 'v34" stroke="#3a2a1e" stroke-width="2"/>' +
        '<path d="M' + (u[0] - 22) + ' ' + u[1] + 'q22-26 44 0z" fill="' + u[2] + '" stroke="#fff" stroke-width="1.5"/>' +
        '<path d="M' + (u[0] - 22) + ' ' + u[1] + 'q5 6 11 0q5 6 11 0q5 6 11 0q5 6 11 0" fill="none" stroke="#fff" stroke-width="2"/></g>').join("") +
      '<g fill="#fff" opacity=".85"><circle class="amb-note" cx="150" cy="130" r="3"/><circle class="amb-note amb-note2" cx="260" cy="150" r="3"/><circle class="amb-note amb-note3" cx="300" cy="140" r="3"/></g>',
      sky("amb-s2", "#7ec8ff", "#ffe2b8")),

    /* 3 - Mardi Gras Indian suit */
    ambindian: () => svg(
      '<rect width="400" height="260" fill="url(#amb-s3)"/>' +
      '<g fill="#fff" opacity=".7"><circle cx="40" cy="30" r="1.5"/><circle cx="90" cy="60" r="1"/><circle cx="350" cy="40" r="1.5"/><circle cx="300" cy="80" r="1"/><circle cx="60" cy="100" r="1"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a1a24"/>' +
      /* plume crown fan */
      '<g transform="translate(200 120)"><g class="amb-sway">' +
      Array.from({ length: 15 }, (_, i) => { const a = -84 + i * 12, cs = ["#ff5e7e", "#ffb347", "#ffe066", "#7fd6c2", "#6fb5ff", "#b59cff"]; return '<g transform="rotate(' + a + ')"><ellipse cx="0" cy="-70" rx="13" ry="44" fill="' + cs[i % 6] + '"/><ellipse cx="0" cy="-74" rx="5" ry="30" fill="#fff" opacity=".45"/></g>'; }).join("") +
      '</g></g>' +
      /* crown band */
      '<path d="M150 112q50-26 100 0v16q-50-22-100 0z" fill="#ffe066" stroke="#a87a10" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (158 + i * 10.5) + '" cy="' + (114 - Math.sin(i / 8 * Math.PI) * 10) + '" r="2.4" fill="' + ["#ff5e7e", "#6fb5ff", "#7fd6c2"][i % 3] + '"/>').join("") +
      /* beaded apron on a stand */
      '<rect x="196" y="128" width="8" height="88" fill="#3a2a1e"/>' +
      '<path d="M156 140h88l-8 70h-72z" fill="#fff6e6" stroke="#a87a10" stroke-width="2"/>' +
      '<path d="M200 150l20 22-20 22-20-22z" fill="#ff5e7e"/><path d="M200 160l10 12-10 12-10-12z" fill="#ffe066"/>' +
      '<path d="M168 150l10 10-10 10-10-10zM232 150l10 10-10 10-10-10zM168 184l10 10-10 10-10-10zM232 184l10 10-10 10-10-10z" fill="#6fb5ff"/>' +
      '<path d="M164 206q36 12 72 0" stroke="#ffb347" stroke-width="4" fill="none"/>' +
      /* fringe */
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (166 + i * 5) + ' 210v10" stroke="#ffe066" stroke-width="2"/>').join("") +
      /* tambourine */
      '<g transform="translate(320 170)"><g class="amb-shake"><circle r="18" fill="#d9a066" stroke="#7a4a1a" stroke-width="3"/><circle r="13" fill="#f2d3a6"/>' +
      '<g fill="#e0e0e0"><circle cx="0" cy="-16" r="3"/><circle cx="16" cy="0" r="3"/><circle cx="0" cy="16" r="3"/><circle cx="-16" cy="0" r="3"/></g></g></g>' +
      '<g transform="translate(76 176)"><g class="amb-shake"><path d="M0 -20l8 28-8 12-8-12z" fill="#ffb347" stroke="#7a4a1a" stroke-width="2"/></g></g>',
      sky("amb-s3", "#140a2a", "#5a1f4f")),

    /* 4 - church choir loft */
    ambchoir: () => svg(
      '<rect width="400" height="260" fill="#2a1a14"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#3b2418"/>' +
      /* stained glass arches */
      [70, 200, 330].map((x, k) => '<g class="amb-glow' + '"' + (k == 1 ? ' style="animation-delay:-1s"' : '') + '><path d="M' + (x - 34) + ' 130v-70q34-50 68 0v70z" fill="#1a0f0a"/>' +
        '<path d="M' + (x - 28) + ' 126v-64q28-42 56 0v64z" fill="#6fb5ff"/>' +
        '<path d="M' + (x - 28) + ' 96h56M' + x + ' 26v100M' + (x - 28) + ' 70l56 40M' + (x + 28) + ' 70l-56 40" stroke="#1a0f0a" stroke-width="3"/>' +
        '<circle cx="' + x + '" cy="60" r="10" fill="#ffe066"/><path d="M' + (x - 26) + ' 100h24v24h-24z" fill="#ff5e7e" opacity=".85"/><path d="M' + (x + 2) + ' 100h24v24h-24z" fill="#7fd6c2" opacity=".85"/></g>').join("") +
      /* choir rail */
      '<rect x="0" y="196" width="400" height="64" fill="#5a3420"/><rect x="0" y="192" width="400" height="8" fill="#8a5a32"/>' +
      /* robed choir from behind: two rows */
      Array.from({ length: 9 }, (_, i) => { const x = 28 + i * 43; return '<g><path d="M' + (x - 16) + ' 200q0-30 16-34q16 4 16 34z" fill="#7b3fbf"/><path d="M' + (x - 10) + ' 172l10 8 10-8" stroke="#ffe066" stroke-width="3" fill="none"/><circle cx="' + x + '" cy="160" r="9" fill="#2a1b14"/></g>'; }).join("") +
      Array.from({ length: 8 }, (_, i) => { const x = 50 + i * 43; return '<g><path d="M' + (x - 18) + ' 240q0-32 18-36q18 4 18 36z" fill="#8f4fd6"/><path d="M' + (x - 11) + ' 210l11 9 11-9" stroke="#ffe066" stroke-width="3" fill="none"/><circle cx="' + x + '" cy="196" r="10" fill="#2a1b14"/></g>'; }).join("") +
      '<g fill="#ffe066"><g class="amb-note"><circle cx="120" cy="140" r="4"/><path d="M124 140v-16" stroke="#ffe066" stroke-width="2"/></g>' +
      '<g class="amb-note amb-note2"><circle cx="230" cy="136" r="4"/><path d="M234 136v-16" stroke="#ffe066" stroke-width="2"/></g>' +
      '<g class="amb-note amb-note3"><circle cx="310" cy="142" r="4"/><path d="M314 142v-16h8" stroke="#ffe066" stroke-width="2" fill="none"/></g></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#ffe8c2" letter-spacing="3">SOPRANO SECTION</text>'),

    /* 5 - Fig St & S Carrollton Av */
    ambcorner: () => svg(
      '<rect width="400" height="260" fill="url(#amb-s5)"/>' +
      /* skyline with the Energy Centre's stepped top */
      '<g fill="#2b1838"><rect x="20" y="96" width="30" height="80"/><rect x="56" y="80" width="26" height="96"/><rect x="250" y="88" width="34" height="88"/><rect x="292" y="104" width="26" height="72"/><rect x="330" y="92" width="30" height="84"/></g>' +
      '<g fill="#3a2350"><path d="M150 176V70h10V58h10V46h10V36h20v10h10v12h10v12h10v106z"/></g>' +
      '<g fill="#ffd28a" class="amb-bl"><rect x="166" y="80" width="4" height="4"/><rect x="186" y="96" width="4" height="4"/><rect x="206" y="88" width="4" height="4"/><rect x="176" y="120" width="4" height="4"/><rect x="196" y="140" width="4" height="4"/></g>' +
      '<g fill="#ffd28a" class="amb-bl amb-bl2"><rect x="260" y="110" width="4" height="4"/><rect x="66" y="100" width="4" height="4"/><rect x="340" y="120" width="4" height="4"/></g>' +
      /* brick wall */
      '<rect x="0" y="150" width="400" height="80" fill="#8a4a3a"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (158 + r * 10) + 'h400" stroke="#6a3428" stroke-width="1"/>').join("") +
      tag("AMBRÉ", 110, 202, 46, "#ffb347", -5) + tag("3000°", 270, 196, 26, "#7fd6c2", 4) +
      '<g fill="#ffb347"><circle class="amb-sp" cx="232" cy="176" r="2"/><circle class="amb-sp amb-sp2" cx="238" cy="182" r="1.6"/></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#4a4646"/><rect x="0" y="226" width="400" height="4" fill="#9a958d"/>' +
      '<g class="amb-car"><rect x="0" y="236" width="62" height="14" rx="5" fill="#ff5e7e"/><rect x="12" y="228" width="34" height="10" rx="3" fill="#ff5e7e"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="48" cy="251" r="5" fill="#111"/></g>' +
      /* sign post */
      '<rect x="356" y="40" width="5" height="190" fill="#5c6166"/>' +
      sign(264, 40, 132, "S CARROLLTON AV") + sign(312, 64, 82, "FIG ST"),
      sky("amb-s5", "#1c0f2e", "#d9704f"))
  };
})();
