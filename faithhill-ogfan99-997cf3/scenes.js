/* faithhill scenes (Regions tab: More of the South, Star / Rankin County MS). CSS classes prefixed fh- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fhglow{0%,100%{opacity:.45}50%{opacity:1}}.fh-glow{animation:fhglow 2.4s ease-in-out infinite}.fh-g2{animation-delay:-1.2s}' +
    '@keyframes fhcloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.fh-cl{animation:fhcloud 14s ease-in-out infinite alternate}' +
    '@keyframes fhsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.fh-sw{transform-box:fill-box;transform-origin:50% 100%;animation:fhsway 3s ease-in-out infinite}.fh-sw2{animation-delay:-1.5s}' +
    '@keyframes fhbell{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.fh-bell{transform-box:fill-box;transform-origin:50% 0%;animation:fhbell 1.6s ease-in-out infinite}' +
    '@keyframes fhnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-62px);opacity:0}}.fh-nt{animation:fhnote 3.2s ease-out infinite}.fh-nt2{animation-delay:-1.1s}.fh-nt3{animation-delay:-2.2s}' +
    '@keyframes fhspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fh-spin{transform-box:fill-box;transform-origin:50% 50%;animation:fhspin 18s linear infinite}' +
    '@keyframes fhunspin{0%{transform:rotate(0)}100%{transform:rotate(-360deg)}}.fh-unspin{transform-box:fill-box;transform-origin:50% 0%;animation:fhunspin 18s linear infinite}' +
    '@keyframes fhflash{0%,49%{opacity:1}50%,100%{opacity:.2}}.fh-fl{animation:fhflash 1s steps(1) infinite}.fh-fl2{animation-delay:-.5s}' +
    '@keyframes fhfly{0%{transform:translate(0,0)}100%{transform:translate(-440px,-20px)}}.fh-bird{animation:fhfly 11s linear infinite}' +
    '@keyframes fhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fh-sp{animation:fhspray 1.4s ease-out infinite}.fh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="fh-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const pine = (x, base, h, cls) => '<g class="fh-sw ' + (cls || "") + '"><rect x="' + (x - 2) + '" y="' + (base - h * 0.3) + '" width="4" height="' + h * 0.3 + '" fill="#5a4030"/><path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.22) + ' ' + (h * 0.4) + 'h-' + (h * 0.1) + 'l' + (h * 0.16) + ' ' + (h * 0.32) + 'h-' + (h * 0.56) + 'l' + (h * 0.16) + ' -' + (h * 0.32) + 'h-' + (h * 0.1) + 'z" fill="#2f5a3a"/></g>';
  const magnolia = (x, base, r) => '<g class="fh-sw fh-sw2"><rect x="' + (x - 4) + '" y="' + (base - r) + '" width="8" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r * 1.4) + '" r="' + r * 0.85 + '" fill="#2c5a34"/><circle cx="' + (x - r * 0.7) + '" cy="' + (base - r * 1.05) + '" r="' + r * 0.55 + '" fill="#2c5a34"/><circle cx="' + (x + r * 0.7) + '" cy="' + (base - r * 1.05) + '" r="' + r * 0.55 + '" fill="#2c5a34"/>' +
    [[-0.4, -1.6], [0.35, -1.3], [-0.8, -1.0], [0.8, -1.1], [0, -1.05]].map(p => '<circle cx="' + (x + p[0] * r) + '" cy="' + (base + p[1] * r) + '" r="3.2" fill="#fbf6ea"/>').join("") + '</g>';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.04) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.04) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const ROSE = "#f28aa8", GOLD = "#f2d06b", TEAL = "#8fd0c8", CREAM = "#fbf6ea";

  /* 1. Coming south on US 49 out of Richland: the green Star sign pointing down Main Street, a pickup sliding in, pines on both sides */
  function fhhwy() {
    const us = (x, y) => '<path d="M' + x + ' ' + y + 'h34v30q0 6 -17 10q-17 -4 -17 -10z" fill="#fff" stroke="#000" stroke-width="2"/><text x="' + (x + 11) + '" y="' + (y + 27) + '" text-anchor="middle" ' + font + ' font-size="19" fill="#000">4</text>' + nine(x + 17, y + 27, 19, "#000");
    let trees = "";
    for (let i = 0; i < 11; i++) trees += pine(10 + i * 38, 170, 40 + (i * 13) % 22, i % 2 ? "fh-sw2" : "");
    return svg(
      '<rect width="400" height="260" fill="url(#fh1)"/>' +
      '<g class="fh-cl"><ellipse cx="60" cy="38" rx="34" ry="9" fill="#fff" opacity=".7"/><ellipse cx="290" cy="24" rx="40" ry="10" fill="#fff" opacity=".6"/></g>' +
      '<circle cx="356" cy="60" r="15" fill="#ffd36b" opacity=".9"/>' +
      '<path d="M0 150q80 -14 200 -6t200 -4v30h-400z" fill="#4a6a3a"/>' + trees +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4d52"/><rect x="0" y="168" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 214h400" stroke="#f2c14e" stroke-width="3"/><path d="M0 220h400" stroke="#f2c14e" stroke-width="3"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      '<rect x="146" y="100" width="6" height="70" fill="#8b9096"/><rect x="290" y="100" width="6" height="70" fill="#8b9096"/>' +
      '<rect x="118" y="26" width="206" height="80" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="221" y="62" text-anchor="middle" ' + font + ' font-size="28" fill="#fff">Star</text>' +
      '<path d="M134 74h174" stroke="#fff" stroke-width="1.2" opacity=".5"/>' +
      '<text x="206" y="96" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Main Street</text>' +
      '<path d="M282 92l14 -14M296 78h-10M296 78v10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      us(40, 102) + '<rect x="38" y="146" width="38" height="12" fill="#fff" stroke="#000" stroke-width="1"/><text x="57" y="155" text-anchor="middle" ' + font + ' font-size="8" fill="#000">SOUTH</text><rect x="55" y="158" width="4" height="12" fill="#8b9096"/>' +
      '<g class="anim-train"><g transform="translate(220 0)"><rect x="0" y="194" width="110" height="24" rx="5" fill="' + ROSE + '"/><path d="M8 194v-18h40l14 18z" fill="#d06a88"/><path d="M14 192v-13h18v13z" fill="#a8d4ea"/><path d="M36 192v-13h10l10 13z" fill="#a8d4ea"/>' +
      '<rect x="62" y="186" width="46" height="8" fill="#d06a88"/><circle cx="24" cy="220" r="9" fill="#1a1a1a"/><circle cx="24" cy="220" r="4" fill="#9a9a9a"/><circle cx="88" cy="220" r="9" fill="#1a1a1a"/><circle cx="88" cy="220" r="4" fill="#9a9a9a"/>' +
      '<rect x="0" y="200" width="6" height="5" rx="1" fill="#fff6c2" class="fh-glow"/></g></g>',
      sky("fh1", "#6ab0de", "#f6d6a0"));
  }

  /* 2. Star Baptist Church, where she started singing at three: white steeple with the bell swinging, notes floating out the open doors, magnolias in bloom */
  function fhchurch() {
    let bricks = "";
    for (let y = 120; y < 210; y += 7) bricks += '<path d="M120 ' + y + 'h160" stroke="#7a3428" stroke-width=".8" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fh2)"/>' +
      '<g class="fh-cl"><ellipse cx="80" cy="40" rx="36" ry="9" fill="#fff" opacity=".6"/><ellipse cx="320" cy="56" rx="30" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6f9a52"/>' +
      magnolia(52, 206, 30) + magnolia(352, 206, 26) +
      /* brick sanctuary */
      '<rect x="120" y="116" width="160" height="94" fill="#a8483a"/>' + bricks +
      '<path d="M110 120l90 -46l90 46z" fill="#f4f0e6" stroke="#cfc8b8" stroke-width="2"/>' +
      /* steeple */
      '<rect x="182" y="40" width="36" height="40" fill="#f4f0e6" stroke="#cfc8b8" stroke-width="2"/><rect x="190" y="50" width="20" height="24" fill="#2a2a34"/>' +
      '<g class="fh-bell"><path d="M194 54q6 -4 12 0l2 12h-16z" fill="#d9b04a"/><circle cx="200" cy="68" r="2" fill="#d9b04a"/></g>' +
      '<path d="M178 42l22 -30l22 30z" fill="#f4f0e6" stroke="#cfc8b8" stroke-width="2"/><path d="M200 2v14M195 7h10" stroke="#f4f0e6" stroke-width="2.4"/>' +
      /* columns + doors */
      '<rect x="164" y="128" width="72" height="8" fill="#f4f0e6"/>' + [168, 186, 206, 224].map(x => '<rect x="' + x + '" y="136" width="8" height="74" fill="#f4f0e6"/>').join("") +
      '<rect x="190" y="160" width="20" height="50" fill="#3a2016"/><path d="M190 160q10 -12 20 0" fill="#f2d06b" class="fh-glow"/>' +
      '<rect x="132" y="140" width="22" height="40" rx="10" fill="#8fd0c8" stroke="#f4f0e6" stroke-width="2.5" class="fh-glow fh-g2"/><rect x="246" y="140" width="22" height="40" rx="10" fill="#8fd0c8" stroke="#f4f0e6" stroke-width="2.5" class="fh-glow fh-g2"/>' +
      '<rect x="176" y="210" width="48" height="6" fill="#d8d2c4"/><rect x="170" y="216" width="60" height="6" fill="#cfc8b8"/>' +
      note(200, 150, GOLD) + note(214, 160, ROSE, "fh-nt2") + note(188, 156, CREAM, "fh-nt3"),
      sky("fh2", "#7cc0e6", "#f8e2b8"));
  }

  /* 3. Jackson: the State Fair at the Mississippi Coliseum, where she saw her first big concert at eight; the dome lit up, the Ferris wheel turning */
  function fhfair() {
    let spokes = "", cars = "";
    for (let i = 0; i < 10; i++) {
      const a = i * Math.PI / 5, x = Math.cos(a) * 62, y = Math.sin(a) * 62;
      spokes += '<path d="M0 0L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#e8e2d4" stroke-width="1.6"/>';
      cars += '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')"><g class="fh-unspin"><rect x="-7" y="0" width="14" height="10" rx="3" fill="' + [ROSE, GOLD, TEAL][i % 3] + '"/></g></g>';
    }
    let bulbs = "";
    for (let i = 0; i < 14; i++) bulbs += '<circle cx="' + (40 + i * 12) + '" cy="' + (130 - Math.sin(i / 13 * Math.PI) * 26) + '" r="2" fill="#fff3b0" class="fh-glow' + (i % 2 ? " fh-g2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fh3)"/>' +
      '<circle cx="60" cy="30" r="1.2" fill="#fff"/><circle cx="160" cy="18" r="1" fill="#fff"/><circle cx="380" cy="34" r="1.3" fill="#fff"/>' +
      /* coliseum: round drum with a shallow dome */
      '<path d="M24 150q96 -62 192 0z" fill="#b9c2cc"/>' + bulbs +
      '<rect x="24" y="150" width="192" height="50" fill="#d6d2c8"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (32 + i * 23) + '" y="158" width="12" height="34" fill="#5a6a80"/>').join("") +
      '<rect x="24" y="146" width="192" height="6" fill="#8b9096"/>' +
      '<rect x="78" y="166" width="84" height="16" rx="2" fill="#2a1f3a" stroke="' + GOLD + '" stroke-width="1.5"/><text x="120" y="178" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">STATE FAIR</text>' +
      /* ferris wheel */
      '<path d="M300 120l-34 96M300 120l34 96" stroke="#c9c2b0" stroke-width="4"/>' +
      '<g transform="translate(300 120)"><g class="fh-spin"><circle cx="0" cy="0" r="62" fill="none" stroke="' + ROSE + '" stroke-width="3"/><circle cx="0" cy="0" r="48" fill="none" stroke="' + GOLD + '" stroke-width="1.6" stroke-dasharray="4 4"/>' + spokes + cars + '</g><circle cx="0" cy="0" r="6" fill="' + GOLD + '"/></g>' +
      /* midway ground, crowd */
      '<rect x="0" y="210" width="400" height="50" fill="#3a2a3a"/>' +
      Array.from({ length: 34 }, (_, i) => '<circle cx="' + (6 + i * 12) + '" cy="' + (222 + (i % 3) * 4) + '" r="5" fill="' + (i % 4 ? "#1a1420" : "#2a2030") + '"/>').join("") +
      /* string lights */
      '<path d="M0 196q100 20 200 0t200 0" stroke="#555" stroke-width="1" fill="none"/>' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + (12 + i * 25) + '" cy="' + (200 + Math.sin(i / 15 * Math.PI * 2) * -4) + '" r="2.4" fill="' + [ROSE, GOLD, TEAL][i % 3] + '" class="fh-fl' + (i % 2 ? " fh-fl2" : "") + '"/>').join(""),
      sky("fh3", "#1a1640", "#7a4a7a"));
  }

  /* 4. Nashville: the little strip-mall listening room where she sang backup in the round and got discovered; warm windows, a guitar case by the door */
  function fhbluebird() {
    return svg(
      '<rect width="400" height="260" fill="url(#fh4)"/>' +
      '<g class="fh-bird"><g transform="translate(420 50)"><path d="M0 0q7 -6 14 0q7 -6 14 0" stroke="#1a2440" stroke-width="2.2" fill="none"/></g></g>' +
      pine(20, 150, 60) + pine(380, 150, 56, "fh-sw2") +
      /* strip mall */
      '<rect x="40" y="80" width="320" height="120" fill="#e7e0d2"/><rect x="34" y="72" width="332" height="12" fill="#8a8478"/>' +
      '<rect x="60" y="100" width="80" height="80" fill="#c7c0b2"/><rect x="260" y="100" width="80" height="80" fill="#c7c0b2"/>' +
      /* the cafe: blue awning, glowing windows */
      '<rect x="146" y="90" width="108" height="20" fill="#4a7ab8"/><text x="200" y="104" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">BLUEBIRD CAFE</text>' +
      '<path d="M146 110h108l-6 12h-96z" fill="#3a6aa8"/>' +
      '<rect x="152" y="126" width="34" height="40" fill="#f2c46a" class="fh-glow"/><rect x="214" y="126" width="34" height="40" fill="#f2c46a" class="fh-glow fh-g2"/>' +
      '<rect x="190" y="130" width="20" height="50" fill="#3a2a22"/><circle cx="206" cy="156" r="1.6" fill="' + GOLD + '"/>' +
      /* silhouettes in the round inside */
      '<circle cx="162" cy="146" r="4" fill="#5a3a2a"/><rect x="158" y="150" width="8" height="12" fill="#5a3a2a"/><circle cx="176" cy="148" r="4" fill="#5a3a2a"/><rect x="172" y="152" width="8" height="10" fill="#5a3a2a"/>' +
      '<circle cx="230" cy="146" r="4" fill="#5a3a2a"/><rect x="226" y="150" width="8" height="12" fill="#5a3a2a"/>' +
      note(96, 176, ROSE) + note(296, 176, CREAM, "fh-nt2") +
      /* guitar case by the door */
      '<path d="M214 176q-4 -6 2 -10q6 -2 8 4l14 -2q4 6 0 10l-14 -2q-2 6 -8 4q-6 -2 -2 -4z" fill="#2a1a12"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55525a"/><path d="M0 230h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      '<rect x="40" y="198" width="320" height="4" fill="#cfc8b8"/>',
      sky("fh4", "#20284a", "#c87a6a"));
  }

  /* 5. Her corner in Star: Main St and Mangum St, the blue Country Music Trail marker on its post, the old rail line behind, her name on the feed store wall */
  function fhcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fh5)"/>' +
      magnolia(30, 150, 22) + pine(380, 150, 60) +
      /* rail line with a freight passing behind */
      '<rect x="0" y="128" width="400" height="14" fill="#8a7a62"/><path d="M0 130h400M0 137h400" stroke="#555" stroke-width="2"/>' +
      [0, 1, 2].map(i => '<rect x="' + (110 + i * 70) + '" y="100" width="64" height="28" fill="' + ["#3a4a6a", "#7a3a28", "#5a5a5a"][i] + '"/><circle cx="' + (120 + i * 70) + '" cy="130" r="4" fill="#222"/><circle cx="' + (164 + i * 70) + '" cy="130" r="4" fill="#222"/>').join("") +
      /* water tower */
      '<path d="M330 60v40M352 60v40M330 100l22 -40M352 100l-22 -40" stroke="#9aa2aa" stroke-width="2"/><ellipse cx="341" cy="52" rx="24" ry="14" fill="#c9d0d6"/><text x="341" y="57" text-anchor="middle" ' + font + ' font-size="11" fill="#2a3a5a">STAR</text>' +
      /* feed store wall */
      '<rect x="0" y="146" width="240" height="80" fill="#d8c8a8"/><path d="M0 146h240" stroke="#9a8a6a" stroke-width="3"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 25) + ' 148v78" stroke="#b8a888" stroke-width="1.2"/>').join("") +
      tag("STAR MS", 20, 172, 16, CREAM, -4) + tag("FAITH", 16, 210, 42, ROSE, -5) + tag("MISSISSIPPI GIRL", 112, 220, 13, GOLD, -3) +
      /* trail marker: blue sign on a post */
      '<rect x="262" y="150" width="4" height="74" fill="#555"/><path d="M244 120h40v32q-20 8 -40 0z" fill="#1f4f9a" stroke="#f2d06b" stroke-width="2"/>' +
      '<text x="264" y="132" text-anchor="middle" ' + font + ' font-size="5.5" fill="#fff">COUNTRY MUSIC</text><text x="264" y="140" text-anchor="middle" ' + font + ' font-size="5.5" fill="#fff">TRAIL</text><text x="264" y="148" text-anchor="middle" ' + font + ' font-size="6" fill="' + GOLD + '">FAITH HILL</text>' +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="140" width="6" height="84" fill="#2f2f2f"/>' + sign(290, 142, 104, "Main St") + sign(290, 168, 104, "Mangum St") +
      '<g class="fh-sp"><circle cx="30" cy="190" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="fh-sp fh-sp2"><circle cx="36" cy="184" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("fh5", "#2a2a62", "#f09a78"));
  }

  window.SCENES = { fhhwy: fhhwy, fhchurch: fhchurch, fhfair: fhfair, fhbluebird: fhbluebird, fhcorner: fhcorner };
})();
