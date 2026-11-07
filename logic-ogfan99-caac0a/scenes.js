/* Logic (West Deer Park, Gaithersburg, Montgomery County MD — THE DMV region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed lg- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes lgtw{0%,100%{opacity:1}50%{opacity:.2}}.lg-tw{animation:lgtw 1.6s ease-in-out infinite}.lg-tw2{animation-delay:.8s}.lg-tw3{animation-delay:.4s}' +
    '@keyframes lgblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.lg-blk{animation:lgblink 1s steps(1) infinite}.lg-blk2{animation-delay:.5s}' +
    '@keyframes lgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.4}55%{opacity:.95}}.lg-flk{animation:lgflick 2.4s infinite}.lg-flk2{animation-delay:1.1s}' +
    '@keyframes lgspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.lg-wheel{transform-box:view-box;transform-origin:120px 110px;animation:lgspin 14s linear infinite}' +
    '@keyframes lgspinr{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}' +
    '@keyframes lgshoot{0%{transform:translate(0,0);opacity:0}10%{opacity:1}60%{transform:translate(-220px,90px);opacity:0}100%{transform:translate(-220px,90px);opacity:0}}.lg-shoot{animation:lgshoot 4.5s ease-in infinite}' +
    '@keyframes lgscope{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(8deg)}}.lg-scope{transform-box:fill-box;transform-origin:50% 100%;animation:lgscope 5s ease-in-out infinite}' +
    '@keyframes lgball{0%{transform:translate(0,0)}50%{transform:translate(130px,-70px)}100%{transform:translate(260px,0)}}.lg-ball{animation:lgball 3s ease-in-out infinite}' +
    '@keyframes lgsmoke{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(-30px,-50px) scale(1.6);opacity:0}}.lg-smoke{transform-box:fill-box;transform-origin:50% 50%;animation:lgsmoke 3s ease-out infinite}.lg-smoke2{animation-delay:1.5s}' +
    '@keyframes lgroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.lg-car{animation:lgroll 6s linear infinite}.lg-car2{animation-duration:8s;animation-delay:-4s}' +
    '@keyframes lgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.lg-flag{transform-box:fill-box;transform-origin:0 50%;animation:lgflag 1.6s ease-in-out infinite}' +
    '@keyframes lgchase{0%,49%{fill:#ffe9a0}50%,100%{fill:#ff8a5b}}.lg-ch{animation:lgchase .8s steps(1) infinite}.lg-ch2{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = (n, cls) => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (cls ? "lg-tw" + (i % 3 ? " lg-tw" + (i % 3 + 1) : "") : "") + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (6 + (i * 53) % 90) + '" r="' + (i % 4 ? 0.9 : 1.6) + '" fill="#fff" opacity=".8"/>'; return s; };
  const bricks = (x0, y0, w, h, c, c2) => { let b = '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let y = y0 + 6; y < y0 + h; y += 6) b += '<path d="M' + x0 + ' ' + y + 'h' + w + '" stroke="' + c2 + '" stroke-width=".6"/>'; return b; };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 12) + '" fill="#3a2a1e"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (c || "#2f5a32") + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + (c || "#2f5a32") + '" opacity=".85"/>';
  const GOLD = "#f2c14e", MARCGOLD = "#f2b31b", BRICK = "#9c3f2e", NAVY = "#1d2c5a";

  /* 1. Gaithersburg MARC station (Brunswick Line), Olde Towne: the 1884 red-brick B&O depot, the freight house with the old steam loco #14 and caboose on display, a silver MARC train sliding in */
  function lgstation() {
    const coach = x => '<rect x="' + x + '" y="134" width="150" height="58" rx="4" fill="#d3d7db" stroke="#7a8188" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="134" width="150" height="6" rx="3" fill="#b9bec4"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 28) + '" y="146" width="20" height="12" rx="2" fill="#1d2630"/><rect x="' + (x + 10 + i * 28) + '" y="164" width="20" height="10" rx="2" fill="#1d2630"/>').join("") +
      '<rect x="' + x + '" y="178" width="150" height="4" fill="' + NAVY + '"/><rect x="' + x + '" y="182" width="150" height="2.5" fill="#c8102e"/>' +
      '<circle cx="' + (x + 24) + '" cy="194" r="5" fill="#222"/><circle cx="' + (x + 126) + '" cy="194" r="5" fill="#222"/>';
    const cab = '<path d="M310 192v-56q0-2 3-2h50q14 2 24 22v36z" fill="#d3d7db" stroke="#7a8188" stroke-width="1.5"/><path d="M352 138h10q12 4 20 18h-30z" fill="#11161c"/>' +
      '<rect x="310" y="178" width="78" height="4" fill="' + NAVY + '"/><rect x="310" y="182" width="78" height="2.5" fill="#c8102e"/>' +
      '<circle cx="380" cy="168" r="3.5" fill="#fff6c2" class="lg-flk"/><circle cx="336" cy="194" r="5" fill="#222"/><circle cx="370" cy="194" r="5" fill="#222"/>';
    const depot =
      /* freight house (brick, six panels) with the steam loco + caboose in front, behind the platform */
      bricks(250, 70, 130, 40, "#8e3a2a", "#6e2a1e") + '<path d="M246 70l68 -18l70 18z" fill="#3b3a3f"/>' +
      [262, 282, 302, 322, 342, 362].map(x => '<rect x="' + x + '" y="78" width="12" height="26" fill="none" stroke="#e8dcc4" stroke-width="1.2"/>').join("") +
      /* loco #14: black boiler, stack puffing */
      '<rect x="262" y="96" width="56" height="18" rx="6" fill="#1a1a1c"/><rect x="306" y="86" width="22" height="28" fill="#1a1a1c"/><rect x="268" y="86" width="6" height="12" fill="#1a1a1c"/>' +
      '<circle class="lg-smoke" cx="271" cy="82" r="5" fill="#d8d8dc"/><circle class="lg-smoke lg-smoke2" cx="271" cy="82" r="4" fill="#d8d8dc"/>' +
      '<text x="317" y="99" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" fill="' + GOLD + '">14</text>' +
      '<rect x="332" y="92" width="42" height="22" rx="2" fill="#b3261e"/><rect x="346" y="84" width="14" height="9" fill="#b3261e"/><rect x="336" y="97" width="8" height="6" fill="#f3e3b0"/><rect x="362" y="97" width="8" height="6" fill="#f3e3b0"/>' +
      /* the 1884 depot: one-story common-bond brick, steep gable roof, white trim, bay window */
      bricks(40, 64, 170, 50, BRICK, "#7a2e20") + '<path d="M30 66l95 -34l95 34z" fill="#3b3a3f"/><path d="M30 66l95 -34l95 34" fill="none" stroke="#e8dcc4" stroke-width="2"/>' +
      '<rect x="110" y="40" width="10" height="14" fill="#7a2e20"/>' +
      [56, 82, 160, 186].map(x => '<rect x="' + x + '" y="76" width="14" height="26" fill="#2a2420" stroke="#f1e8d6" stroke-width="2"/><rect x="' + x + '" y="76" width="14" height="13" fill="#ffd98a" opacity=".55" class="lg-flk lg-flk2"/>').join("") +
      '<path d="M112 114v-34l13 -6l13 6v34z" fill="#8a3527" stroke="#f1e8d6" stroke-width="2"/><rect x="118" y="82" width="14" height="20" fill="#ffd98a" opacity=".7" class="lg-flk"/>' +
      '<rect x="28" y="112" width="190" height="4" fill="#5a4a3a"/>';
    let edge = "";
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#ffd34d" class="lg-blk' + (x % 52 ? " lg-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lgs1)"/>' + stars(10) +
      tree(18, 92, 20, "#24402a") + tree(232, 96, 16, "#2a4a30") +
      depot +
      '<rect x="0" y="116" width="400" height="10" fill="#6e6a64"/><path d="M0 128h400" stroke="#4a4642" stroke-width="3"/>' +
      '<g class="anim-train">' + coach(4) + coach(158) + cab + '</g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#e2dccd"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#9a958c"/>' +
      /* station sign: Gaithersburg + Brunswick Line gold bullet */
      '<rect x="88" y="212" width="224" height="38" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="214" y="237" text-anchor="middle" ' + F + ' font-weight="700" font-size="19" fill="#fff">Gaithersburg</text>' +
      '<rect x="96" y="222" width="34" height="18" rx="9" fill="' + MARCGOLD + '"/><text x="113" y="235" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#111">MARC</text>' +
      '<text x="200" y="18" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff3e0" opacity=".9">BRUNSWICK LINE · OLDE TOWNE GAITHERSBURG</text>',
      sky("lgs1", "#1b2350", "#e98a5a"));
  }

  /* 2. The Gaithersburg Latitude Observatory: the little white clapboard house with the roof slot, zenith telescope peeking out, stars and a shooting star (Incredible True Story space vibes) */
  function lgobserv() {
    return svg(
      '<rect width="400" height="260" fill="url(#lgs2)"/>' + stars(46, true) +
      '<g class="lg-shoot"><path d="M360 22l26 -10" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="360" cy="22" r="2.4" fill="#fff"/></g>' +
      /* planet ring for the space-age feel */
      '<circle cx="66" cy="54" r="16" fill="#4fb3ff" opacity=".85"/><ellipse cx="66" cy="54" rx="28" ry="6" fill="none" stroke="' + GOLD + '" stroke-width="2.5" transform="rotate(-18 66 54)"/>' +
      /* lawn + hills */
      '<path d="M0 190q100 -26 200 -10t200 -6v86H0z" fill="#1f3a26"/><path d="M0 214q120 -18 240 -4t160 0v50H0z" fill="#2a4c30"/>' +
      tree(40, 166, 18, "#1c3322") + tree(360, 162, 20, "#1c3322") + tree(330, 176, 12, "#24402a") +
      /* the observatory: small white clapboard box, gable roof split by the opening slot */
      '<rect x="150" y="128" width="100" height="74" fill="#f2efe6"/>' +
      [136, 144, 152, 160, 168, 176, 184, 192].map(y => '<path d="M150 ' + y + 'h100" stroke="#cfc9bb" stroke-width="1"/>').join("") +
      '<path d="M142 130l52 -32h12l52 32z" fill="#e8e3d6" stroke="#bdb6a6" stroke-width="1.5"/>' +
      '<rect x="194" y="98" width="12" height="32" fill="#0d1428"/>' +
      '<g class="lg-scope"><rect x="196" y="72" width="8" height="40" rx="2" fill="#9aa4b2"/><rect x="194" y="70" width="12" height="6" rx="1" fill="#c8d0da"/></g>' +
      '<rect x="160" y="150" width="18" height="52" fill="#3a3a3a"/><rect x="214" y="150" width="24" height="20" fill="#2a3550" stroke="#fff" stroke-width="2"/><rect x="214" y="150" width="24" height="20" fill="#ffd98a" opacity=".35" class="lg-flk"/>' +
      '<rect x="148" y="200" width="104" height="5" fill="#bdb6a6"/>' +
      /* granite meridian marker + low iron fence */
      '<rect x="276" y="186" width="10" height="18" fill="#9a958c"/><path d="M110 206h180" stroke="#2a2a2a" stroke-width="2"/>' +
      [110, 126, 142, 258, 274, 290].map(x => '<path d="M' + x + ' 206v-12" stroke="#2a2a2a" stroke-width="2"/>').join("") +
      '<rect x="120" y="222" width="160" height="24" rx="3" fill="#111" opacity=".85"/><text x="200" y="239" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">LATITUDE OBSERVATORY</text>',
      sky("lgs2", "#050a1e", "#1f2f5a"));
  }

  /* 3. The Montgomery County Agricultural Fair at the Gaithersburg fairgrounds: Ferris wheel turning, string lights chasing, the red show barn */
  function lgfair() {
    const spokes = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6, x = 120 + 70 * Math.cos(a), y = 110 + 70 * Math.sin(a);
      return '<path d="M120 110L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#f2efe6" stroke-width="2"/>' +
        '<rect x="' + (x - 7).toFixed(1) + '" y="' + (y - 5).toFixed(1) + '" width="14" height="10" rx="2" fill="' + ["#e2574c", GOLD, "#4fb3ff"][i % 3] + '"/>'; }).join("");
    const bulbs = Array.from({ length: 26 }, (_, i) => '<circle class="lg-ch' + (i % 2 ? " lg-ch2" : "") + '" cx="' + (196 + i * 8) + '" cy="' + (60 + Math.sin(i / 2.6) * 6).toFixed(1) + '" r="2.4" fill="#ffe9a0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lgs3)"/>' + stars(14) +
      /* the wheel */
      '<path d="M88 220l32 -110l32 110" stroke="#c9c3b6" stroke-width="5" fill="none"/>' +
      '<g class="lg-wheel"><circle cx="120" cy="110" r="70" fill="none" stroke="#f2efe6" stroke-width="3"/><circle cx="120" cy="110" r="56" fill="none" stroke="#f2efe6" stroke-width="1.5"/>' + spokes + '</g>' +
      '<circle cx="120" cy="110" r="6" fill="' + GOLD + '"/>' +
      /* string of lights + red show barn with white X doors */
      '<path d="M196 60q104 18 204 0" stroke="#3a3a3a" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="236" y="120" width="140" height="80" fill="#b3261e"/><path d="M228 122l78 -46l78 46z" fill="#7a1a14"/><path d="M228 122l78 -46l78 46" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<rect x="286" y="150" width="40" height="50" fill="#8e1e17" stroke="#fff" stroke-width="3"/><path d="M286 150l40 50M326 150l-40 50" stroke="#fff" stroke-width="3"/>' +
      '<rect x="294" y="98" width="24" height="16" fill="#fff"/><rect x="298" y="102" width="16" height="8" fill="#ffd98a" class="lg-flk"/>' +
      /* white tents */
      '<path d="M190 200l20 -36l20 36z" fill="#f2efe6"/><path d="M200 200l10 -36l10 36" fill="#e2574c" opacity=".7"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4a3a2a"/><path d="M0 214h400" stroke="#5c4a36" stroke-width="3"/>' +
      '<rect x="40" y="222" width="320" height="26" rx="3" fill="#111" opacity=".9"/><text x="200" y="239.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="' + GOLD + '">MONTGOMERY COUNTY FAIR · GAITHERSBURG</text>',
      sky("lgs3", "#16123a", "#d0623e"));
  }

  /* 4. Gaithersburg High School (Logic's school): Friday night under the stadium lights, blue and gold, the ball spiraling */
  function lghigh() {
    const light = x => '<rect x="' + (x - 2) + '" y="34" width="4" height="120" fill="#8a8f96"/><rect x="' + (x - 18) + '" y="22" width="36" height="16" fill="#3a3e46"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (x - 13 + i * 9) + '" cy="30" r="3.4" fill="#fffbe0" class="lg-flk' + (i % 2 ? " lg-flk2" : "") + '"/>').join("");
    let yard = "";
    for (let x = 20; x <= 380; x += 40) yard += '<path d="M' + x + ' 178v62" stroke="#fff" stroke-width="2" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lgs4)"/>' + stars(8) +
      '<path d="M0 34l200 120l200 -120v60l-200 80l-200 -80z" fill="#fffbe0" opacity=".06"/>' +
      light(40) + light(360) +
      /* bleachers + crowd silhouettes */
      '<path d="M70 150h260v28H70z" fill="#2a3550"/>' + [154, 162, 170].map(y => '<path d="M70 ' + y + 'h260" stroke="#4a5a80" stroke-width="2"/>').join("") +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + (76 + i * 8.6) + '" cy="' + (146 + (i % 3) * 8) + '" r="3.2" fill="#0f1528"/>').join("") +
      /* scoreboard */
      '<rect x="138" y="62" width="124" height="62" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="80" text-anchor="middle" ' + A + ' font-size="13" fill="' + GOLD + '">GAITHERSBURG</text>' +
      '<text x="168" y="94" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" fill="#fff">HOME</text><text x="232" y="94" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" fill="#fff">GUEST</text>' +
      '<text x="168" y="116" text-anchor="middle" ' + F + ' font-weight="700" font-size="18" fill="#ff5a3c" class="lg-blk">21</text><text x="232" y="116" text-anchor="middle" ' + F + ' font-weight="700" font-size="18" fill="#ff5a3c">14</text>' +
      '<rect x="196" y="124" width="8" height="26" fill="#3a3e46"/>' +
      /* field */
      '<rect x="0" y="178" width="400" height="82" fill="#2f7a3a"/>' + yard +
      '<rect x="0" y="178" width="400" height="4" fill="#fff" opacity=".85"/>' +
      '<g class="lg-ball"><ellipse cx="70" cy="196" rx="8" ry="5" fill="#7a3e1e" transform="rotate(-20 70 196)"/><path d="M66 196h8" stroke="#fff" stroke-width="1"/></g>' +
      '<g class="lg-flag"><rect x="350" y="120" width="2" height="40" fill="#ccc"/><rect x="352" y="120" width="26" height="16" fill="#1d3f8a"/><rect x="352" y="128" width="26" height="4" fill="' + GOLD + '"/></g>' +
      '<rect x="110" y="222" width="180" height="26" rx="3" fill="#1d3f8a" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="240" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">FRIDAY NIGHT IN THE 301</text>',
      sky("lgs4", "#070c1f", "#1d2c5a"));
  }

  /* 5. The corner: Frederick Ave (MD 355) and W Deer Park Rd in West Deer Park, LOGIC tagged on the wall, the I-270 tech-corridor towers lit up behind */
  function lgcorner() {
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 10) }, (_, r) => Array.from({ length: Math.floor(w / 8) }, (_, k) => '<rect x="' + (x + 3 + k * 8) + '" y="' + (154 - h + r * 10) + '" width="4" height="5" fill="#ffd98a" opacity="' + ((r + k) % 3 ? .2 : .75) + '"/>').join("")).join("");
    const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="14" rx="4" fill="' + c + '"/><rect x="8" y="' + (y - 8) + '" width="28" height="10" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="45" cy="' + (y + 6) + '" r="2" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lgs5)"/>' + stars(10) +
      /* I-270 corridor glass towers in the distance */
      tower(150, 34, 70, "#2a3550") + tower(190, 26, 88, "#22304a") + tower(222, 40, 60, "#2f3d5e") + tower(268, 30, 78, "#24324e") + tower(304, 44, 54, "#2a3550") +
      '<rect x="0" y="150" width="400" height="58" fill="#1f2a22"/><path d="M0 150h400" stroke="#3a4560" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (150 + i * 30) + '" cy="' + (176 + (i % 2) * 6) + '" r="' + (12 + (i % 3) * 3) + '" fill="#24402a"/>').join("") +
      '<rect x="150" y="196" width="250" height="10" fill="#3a3e46"/>' +
      /* brick garden-apartment wall with the tag */
      bricks(0, 112, 140, 98, "#8e4a34", "#6e3424") + '<rect x="0" y="108" width="140" height="6" fill="#5a3022"/>' +
      [20, 70].map(x => '<rect x="' + x + '" y="122" width="30" height="22" fill="#1d2630" stroke="#e8dcc4" stroke-width="2"/>').join("") +
      tag("LOGIC", 14, 186, 38, GOLD, -8) + tag("RATTPACK", 30, 204, 14, "#4fb3ff", -4) +
      /* road: Frederick Ave */
      '<rect x="0" y="210" width="400" height="50" fill="#2e2f33"/><path d="M0 234h400" stroke="#f2c94c" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("lg-car", 214, "#e2574c") + car("lg-car lg-car2", 214, "#d8dde2") +
      '<rect x="0" y="206" width="400" height="5" fill="#a8a294"/>' +
      /* green street signs on a pole */
      '<rect x="224" y="70" width="5" height="138" fill="#7a7f86"/>' +
      '<rect x="160" y="70" width="132" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="226" y="84.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Frederick Ave</text>' +
      '<rect x="176" y="94" width="100" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="226" y="108.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">W Deer Park Rd</text>' +
      '<rect x="254" y="118" width="30" height="18" rx="2" fill="#fff" stroke="#111"/><text x="269" y="131" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#111">355</text>' +
      '<circle cx="356" cy="188" r="4" fill="#fffbe0" class="lg-flk"/><rect x="354" y="190" width="4" height="18" fill="#7a7f86"/>',
      sky("lgs5", "#0b1028", "#3b2e5a"));
  }

  window.SCENES = { lgstation, lgobserv, lgfair, lghigh, lgcorner };
})();
