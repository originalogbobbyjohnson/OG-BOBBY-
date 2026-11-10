/* Snoh Aalegra scenes (Regions tab: UK + Europe). Born in Uppsala, Sweden, to Persian parents; grew up in Enköping (moved there with her mother), later moved to Stockholm;
   signed an artist-development deal with Sony Music Sweden at 13 (2001), recorded as Sheri, then London and Los Angeles (since 2012).
   Stockholm's blue line, Polar, Djurgården and City Hall are already ABBA's, so this kit stays in her own towns. CSS classes prefixed sn- (the page's own anim-train is kept).
   0 Enköping station: the regional train on the Mälaren line pulling in, a low station platform, dark-blue Swedish station sign.
   1 Uppsala Cathedral (where she was born): the red-brick Gothic church with its two tall dark spires, clouds drifting, birds.
   2 Drömparken, Enköping (Sweden's "park city"): tall grasses and flower beds swaying, a pond with a fountain.
   3 Temporary highs in the violet skies: Stockholm rooftops at dusk under a violet sky, northern stars twinkling, a plane light crossing.
   4 Kungsgatan and Rådhusgatan in Enköping: green signs, SNOH AALEGRA tagged on a plaster wall, the spire of Vårfrukyrkan (Enköping's medieval church) behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sncloud{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.sn-cloud{animation:sncloud 22s linear infinite}.sn-c2{animation-duration:30s;animation-delay:-12s}' +
    '@keyframes snbird{0%{transform:translate(0,0)}50%{transform:translate(60px,-10px)}100%{transform:translate(120px,0)}}.sn-bird{animation:snbird 8s ease-in-out infinite alternate}' +
    '@keyframes snsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sn-sway{transform-box:fill-box;transform-origin:50% 100%;animation:snsway 3s ease-in-out infinite}.sn-s2{animation-delay:-1.5s}' +
    '@keyframes snfount{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-30px);opacity:0}}.sn-f{animation:snfount 1.6s ease-out infinite}.sn-f2{animation-delay:-.5s}.sn-f3{animation-delay:-1s}' +
    '@keyframes sntw{0%,100%{opacity:.2}50%{opacity:1}}.sn-tw{animation:sntw 2s ease-in-out infinite}.sn-t2{animation-delay:-.7s}.sn-t3{animation-delay:-1.4s}' +
    '@keyframes snplane{0%{transform:translateX(-30px)}100%{transform:translateX(440px)}}.sn-plane{animation:snplane 14s linear infinite}' +
    '@keyframes snspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sn-sp{animation:snspray 1.4s ease-out infinite}.sn-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const VIO = "#c9a7ff", SUN = "#ffd27a", ICE = "#7fd3e8", BRICK = "#a8452f", SPIRE = "#3b3a3f";
  const cloud = (x, y, k) => '<g class="sn-cloud ' + (k || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".85"/></g>';
  /* Uppsala Cathedral: red-brick nave, two west towers with tall dark spires */
  const cathedral = (x, y, s, brick, spire) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="-60" y="-70" width="120" height="70" fill="' + brick + '"/>' +
    '<rect x="-58" y="-150" width="40" height="150" fill="' + brick + '"/><rect x="18" y="-150" width="40" height="150" fill="' + brick + '"/>' +
    '<path d="M-58 -150l20 -80l20 80z" fill="' + spire + '"/><path d="M18 -150l20 -80l20 80z" fill="' + spire + '"/>' +
    '<path d="M-38 -230v-8M38 -230v-8" stroke="' + SUN + '" stroke-width="2"/>' +
    '<path d="M-16 -70v-40a16 18 0 0 1 32 0v40z" fill="#5a2a22"/><circle cx="0" cy="-118" r="10" fill="#e8c86a" stroke="#5a2a22" stroke-width="2"/>' +
    '<path d="M-48 -120v-18a10 10 0 0 1 20 0v18zM28 -120v-18a10 10 0 0 1 20 0v18z" fill="#5a2a22"/>' +
    '<path d="M-10 0v-26a10 12 0 0 1 20 0v26z" fill="#3a1a14"/></g>';

  /* 0. Enköping station */
  function snstop() {
    const train = '<g class="anim-train"><rect x="16" y="124" width="276" height="72" rx="10" fill="#f2f2f0" stroke="#7a7f86" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (32 + i * 42) + '" y="136" width="32" height="24" rx="3" fill="#2a3340"/>').join("") +
      '<path d="M16 172h276" stroke="#2b5fae" stroke-width="8"/><path d="M16 182h276" stroke="' + ICE + '" stroke-width="3"/>' +
      '<rect x="268" y="132" width="20" height="32" rx="4" fill="#2a3340"/><circle cx="284" cy="188" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sn0)"/>' + cloud(60, 40) + cloud(240, 60, "sn-c2") +
      /* pine forest edge */
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' 118l14 -' + (34 + (i % 3) * 8) + 'l14 ' + (34 + (i % 3) * 8) + 'z" fill="#2f5a3a"/>').join("") +
      '<rect x="0" y="116" width="400" height="10" fill="#b9b2a4"/>' +
      /* station house: yellow plaster */
      '<rect x="300" y="78" width="96" height="46" fill="#e8c86a"/><path d="M294 80l54 -22l54 22z" fill="#6a3a2a"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (310 + i * 28) + '" y="92" width="16" height="22" fill="#fff" stroke="#6a3a2a" stroke-width="2"/>').join("") +
      '<rect x="0" y="196" width="400" height="64" fill="#8c8a84"/><rect x="0" y="196" width="400" height="6" fill="#f2f2f0"/><path d="M0 222h400M0 240h400" stroke="#5a5852" stroke-width="3"/>' +
      train +
      '<rect x="18" y="14" width="230" height="38" rx="3" fill="#123a6e"/>' +
      '<circle cx="40" cy="33" r="12" fill="#2b5fae" stroke="#fff" stroke-width="1.5"/><text x="40" y="38.5" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">R</text>' +
      '<text x="60" y="31" ' + font + ' font-size="14" fill="#fff">Enköping</text><text x="60" y="45" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#cfe0f4">Mälarbanan · Stockholm – Västerås</text>',
      sky("sn0", "#7fb4e0", "#e6eef4"));
  }

  /* 1. Uppsala Cathedral */
  function snuppsala() {
    return svg(
      '<rect width="400" height="260" fill="url(#sn1)"/>' + cloud(40, 50) + cloud(260, 34, "sn-c2") +
      '<g class="sn-bird"><path d="M60 80q6 -5 12 0q6 -5 12 0M90 70q5 -4 10 0q5 -4 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      cathedral(200, 222, 0.92, BRICK, SPIRE) +
      '<rect x="0" y="222" width="400" height="38" fill="#6a8a5a"/><path d="M0 230h400" stroke="#5a7a4a" stroke-width="3"/>' +
      '<rect x="20" y="170" width="70" height="52" fill="#e8d4b0"/><path d="M14 172l41 -22l41 22z" fill="#8a3a2a"/>' +
      '<rect x="310" y="176" width="74" height="46" fill="#f0e2c4"/><path d="M304 178l43 -20l43 20z" fill="#8a3a2a"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (28 + i * 20) + '" y="184" width="10" height="14" fill="#5a6a7a"/><rect x="' + (318 + i * 22) + '" y="188" width="10" height="14" fill="#5a6a7a"/>').join(""),
      sky("sn1", "#8fc0ea", "#f2e8d8"));
  }

  /* 2. Drömparken, Enköping */
  function snpark() {
    const grass = (x, c, k) => '<g class="sn-sway ' + k + '"><path d="M' + x + ' 236q-4 -30 -10 -50M' + (x + 4) + ' 236q2 -34 6 -56M' + (x + 8) + ' 236q6 -28 14 -44" stroke="' + c + '" stroke-width="2.5" fill="none"/></g>';
    const flower = (x, y, c, k) => '<g class="sn-sway ' + k + '"><path d="M' + x + ' 236v-' + (236 - y) + '" stroke="#4a7a3a" stroke-width="2"/><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + c + '"/><circle cx="' + x + '" cy="' + y + '" r="2.2" fill="#5a3a1a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sn2)"/>' + cloud(80, 40) +
      '<path d="M0 130q40 -30 80 -10t90 -14t110 6t120 -10v40h-400z" fill="#3f6b45"/>' +
      '<rect x="0" y="136" width="400" height="124" fill="#6a9a5a"/>' +
      '<ellipse cx="200" cy="196" rx="120" ry="26" fill="#4a86b0"/><ellipse cx="200" cy="192" rx="110" ry="20" fill="#5a9ac4"/>' +
      '<rect x="196" y="176" width="8" height="16" fill="#cfcfcf"/>' +
      '<g class="sn-f"><circle cx="200" cy="170" r="3" fill="#e6f4ff"/></g><g class="sn-f sn-f2"><circle cx="196" cy="172" r="2.5" fill="#e6f4ff"/></g><g class="sn-f sn-f3"><circle cx="204" cy="172" r="2.5" fill="#e6f4ff"/></g>' +
      grass(20, "#c8b46a", "") + grass(46, "#b8a45a", "sn-s2") + grass(330, "#c8b46a", "sn-s2") + grass(360, "#b8a45a", "") +
      flower(70, 196, VIO, "") + flower(90, 204, "#e86a8a", "sn-s2") + flower(110, 200, VIO, "sn-s2") + flower(300, 198, "#e86a8a", "") + flower(316, 206, VIO, "sn-s2") + flower(380, 200, SUN, "") +
      '<rect x="0" y="236" width="400" height="24" fill="#b8a888"/>',
      sky("sn2", "#9ccbee", "#f4f0e0"));
  }

  /* 3. Violet skies over Stockholm rooftops */
  function snviolet() {
    const house = (x, w, h, c) => '<rect x="' + x + '" y="' + (226 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><path d="M' + (x - 2) + ' ' + (226 - h) + 'l' + (w / 2 + 2) + ' -14l' + (w / 2 + 2) + ' 14z" fill="#3a2a3a"/>' +
      Array.from({ length: Math.floor(w / 14) }, (_, i) => '<rect x="' + (x + 5 + i * 14) + '" y="' + (236 - h) + '" width="6" height="9" fill="' + (i % 2 ? SUN : "#4a3a5a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sn3)"/>' +
      [[40, 30], [90, 60], [150, 24], [220, 50], [300, 30], [360, 64], [120, 90], [330, 100]].map(([x, y], i) => '<circle class="sn-tw' + (i % 3 ? (i % 3 == 1 ? " sn-t2" : " sn-t3") : "") + '" cx="' + x + '" cy="' + y + '" r="1.8" fill="#fff"/>').join("") +
      '<g class="sn-plane"><circle cx="0" cy="74" r="2" fill="#ff5a5a"/><circle cx="8" cy="74" r="1.5" fill="#fff"/></g>' +
      '<circle cx="320" cy="120" r="16" fill="' + SUN + '" opacity=".35"/>' +
      house(0, 56, 70, "#c86a3a") + house(58, 44, 84, "#e8b84a") + house(104, 60, 64, "#8a3a2a") + house(166, 40, 90, "#d89a5a") +
      '<rect x="210" y="106" width="16" height="120" fill="#6a4a3a"/><path d="M206 106l12 -40l12 40z" fill="#2f3a3a"/>' +
      house(230, 52, 76, "#e8c86a") + house(284, 58, 66, "#b84a3a") + house(344, 56, 80, "#e09a6a") +
      '<rect x="0" y="226" width="400" height="34" fill="#2a3a5a"/><path d="M0 238h400M0 250h400" stroke="#8a7ac8" stroke-width="2" opacity=".6"/>',
      sky("sn3", "#2a1a5a", "#c98ad8"));
  }

  /* 4. Kungsgatan and Rådhusgatan, Enköping */
  function sncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sn4)"/>' +
      '<rect x="318" y="70" width="30" height="72" fill="#e4ddd0"/><path d="M318 70l15 -56l15 56z" fill="#3a3a40"/><path d="M333 14v-8M329 10h8" stroke="#ffd27a" stroke-width="2"/><rect x="328" y="84" width="10" height="16" rx="5" fill="#5a4a4a"/><rect x="262" y="100" width="56" height="42" fill="#d8d0c2"/><path d="M258 102l30 -18l30 18z" fill="#8a3a2a"/>' +
      '<path d="M0 140h260l20 -20h120v20" fill="none"/><rect x="0" y="128" width="290" height="14" fill="#5a4a6a"/>' +
      '<rect x="0" y="140" width="300" height="84" fill="#f0e2c4"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (14 + i * 58) + '" y="148" width="30" height="16" fill="#8aa0b8" opacity=".5"/>').join("") +
      tag("SNOH AALEGRA", 10, 204, 28, VIO, -4) + tag("FEELS", 232, 220, 18, SUN, -5) + tag("SHERI", 168, 220, 13, ICE, -3) +
      '<g class="sn-sp"><circle cx="190" cy="176" r="3" fill="' + VIO + '" opacity=".7"/></g><g class="sn-sp sn-sp2"><circle cx="196" cy="170" r="2" fill="' + VIO + '" opacity=".6"/></g>' +
      '<rect x="300" y="140" width="100" height="84" fill="#9a8a7a"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#6a6660"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 224v36" stroke="#5a5650" stroke-width="1"/>').join("") +
      '<rect x="384" y="112" width="6" height="112" fill="#2f2f2f"/>' + sign(282, 116, 108, "Kungsgatan") + sign(282, 142, 108, "Rådhusgatan"),
      sky("sn4", "#3a2a6a", "#e2a6c8"));
  }

  window.SCENES = { snstop: snstop, snuppsala: snuppsala, snpark: snpark, snviolet: snviolet, sncorner: sncorner };
})();
