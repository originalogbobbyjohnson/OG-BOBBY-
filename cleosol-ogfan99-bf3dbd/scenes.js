/* Cleo Sol scenes (Regions tab: UK + EUROPE; Cleopatra Nikolic, grew up in Ladbroke Grove / Notting Hill, West London W11; independent on Forever Living Originals with producer Inflo).
   1 Westbourne Park station (Hammersmith & City + Circle lines): open-air platform, a silver train with red doors pulling in.
   2 The Grand Union Canal towpath by Westbourne Park / Kensal: green water, a painted narrowboat gliding, the brick bridge.
   3 The studio: warm lamp, a vocal mic, tape reels turning and level meters dancing (her records are made in-house with Inflo).
   4 Rose in the Dark: a night garden behind the terraces, one red rose glowing under the street lamp, petals drifting.
   5 Westbourne Park Road and All Saints Road, W11: London street plates, CLEO tagged on the wall, the pastel terraces behind.
   CSS classes prefixed "cls-" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes clsCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.cls-cloud{animation:clsCloud 28s linear infinite}.cls-c2{animation-delay:-14s}' +
    '@keyframes clsBlink{0%,100%{opacity:1}50%{opacity:.2}}.cls-blink{animation:clsBlink 1.2s steps(1) infinite}' +
    '@keyframes clsBoat{0%{transform:translateX(-170px)}100%{transform:translateX(420px)}}.cls-boat{animation:clsBoat 16s linear infinite;animation-delay:-7s}' +
    '@keyframes clsRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.cls-rip{animation:clsRip 3s ease-in-out infinite}.cls-r2{animation-delay:-1.5s}' +
    '@keyframes clsSpin{to{transform:rotate(360deg)}}.cls-spin{transform-box:fill-box;transform-origin:50% 50%;animation:clsSpin 3s linear infinite}' +
    '@keyframes clsMeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.cls-meter{transform-box:fill-box;transform-origin:50% 100%;animation:clsMeter 1.1s ease-in-out infinite}.cls-m2{animation-delay:-.3s}.cls-m3{animation-delay:-.6s}.cls-m4{animation-delay:-.8s}' +
    '@keyframes clsPetal{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-40px,90px) rotate(200deg);opacity:0}}.cls-petal{animation:clsPetal 4s linear infinite}.cls-p2{animation-delay:-1.3s}.cls-p3{animation-delay:-2.6s}' +
    '@keyframes clsGlow{0%,100%{opacity:.35}50%{opacity:.7}}.cls-glow{animation:clsGlow 3s ease-in-out infinite}' +
    '@keyframes clsTwk{0%,100%{opacity:.9}50%{opacity:.2}}.cls-twk{animation:clsTwk 2.2s ease-in-out infinite}.cls-t2{animation-delay:-1.1s}' +
    '@keyframes clsBus{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.cls-bus{animation:clsBus 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const HC = "#f3a9bb", CIRC = "#ffd300", ROSE = "#e0476b", GOLD = "#f2c14e", BLUE = "#7fb8e6", BRICK = "#8e4a36";
  const clouds = '<g fill="#fff" opacity=".7"><g class="cls-cloud"><ellipse cx="40" cy="36" rx="34" ry="10"/><ellipse cx="60" cy="30" rx="20" ry="9"/></g>' +
    '<g class="cls-cloud cls-c2"><ellipse cx="40" cy="64" rx="28" ry="8"/><ellipse cx="56" cy="58" rx="16" ry="8"/></g></g>';
  const bricks = (x0, y0, w, h, c) => { let s = ""; for (let y = y0; y < y0 + h; y += 9) for (let x = x0 + (((y - y0) / 9) % 2 ? -12 : 0); x < x0 + w; x += 24) s += '<rect x="' + Math.max(x0, x) + '" y="' + y + '" width="' + Math.min(22, x0 + w - Math.max(x0, x)) + '" height="7" fill="' + c + '"/>'; return s; };
  const plate = (x, y, w, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="' + w + '" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
    '<text x="' + (w / 2) + '" y="17" ' + F + ' font-size="11" fill="#111" text-anchor="middle" textLength="' + (w - 12) + '" lengthAdjust="spacingAndGlyphs">' + name + '</text>' +
    '<text x="' + (w / 2) + '" y="29" ' + F + ' font-size="6.5" fill="#c8102e" text-anchor="middle" textLength="' + (w - 16) + '" lengthAdjust="spacingAndGlyphs">' + dist + '</text></g>';
  const rose = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<path d="M0 0q-3 30 2 60" stroke="#2f6b34" stroke-width="3" fill="none"/>' +
    '<path d="M1 30q-16 -6 -20 4q12 6 20 -4z" fill="#3d8a43"/><path d="M2 42q16 -8 20 2q-12 8 -20 -2z" fill="#3d8a43"/>' +
    '<path d="M-14 -4q-2 -16 14 -18q16 2 14 18q-6 12 -14 12q-8 0 -14 -12z" fill="#b8243f"/>' +
    '<path d="M-9 -6q0 -10 9 -11q9 1 9 11q-4 7 -9 7q-5 0 -9 -7z" fill="' + ROSE + '"/>' +
    '<path d="M-4 -8q4 -6 8 0q-4 4 -8 0z" fill="#8e1a30"/></g>';

  /* 1. Westbourne Park station: open-air platform under the sky, line colour bars, a silver train with red doors pulling in */
  function clsstation() {
    let wins = "";
    for (const x of [30, 66, 150, 186, 270]) wins += '<rect x="' + x + '" y="150" width="26" height="20" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 142h300q26 0 30 24v34H10z" fill="#d9dde0" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="10" y="142" width="330" height="6" fill="#c8102e"/>' + wins +
      '<g fill="#c8102e"><rect x="112" y="152" width="20" height="46"/><rect x="232" y="152" width="20" height="46"/></g>' +
      '<g fill="#9fb3c4"><rect x="115" y="156" width="6" height="20"/><rect x="123" y="156" width="6" height="20"/><rect x="235" y="156" width="6" height="20"/><rect x="243" y="156" width="6" height="20"/></g>' +
      '<rect x="10" y="190" width="330" height="5" fill="#1f3f9a"/><path d="M314 152q20 2 22 22h-22z" fill="#1d2a33"/><rect x="326" y="184" width="10" height="5" fill="#fff3b0" class="cls-blink"/>' +
      '<g fill="#161616"><circle cx="50" cy="203" r="6"/><circle cx="74" cy="203" r="6"/><circle cx="270" cy="203" r="6"/><circle cx="294" cy="203" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#clsS1)"/>' + clouds +
      /* terraces and the railway wall behind the tracks */
      '<g fill="#e9dcc6"><rect x="0" y="70" width="70" height="60"/><rect x="74" y="62" width="64" height="68"/><rect x="300" y="66" width="100" height="64"/></g>' +
      '<g fill="#5a6b7a"><rect x="10" y="82" width="12" height="16"/><rect x="40" y="82" width="12" height="16"/><rect x="88" y="76" width="12" height="16"/><rect x="114" y="76" width="12" height="16"/><rect x="316" y="80" width="12" height="16"/><rect x="346" y="80" width="12" height="16"/><rect x="376" y="80" width="12" height="16"/></g>' +
      '<rect x="0" y="112" width="400" height="30" fill="' + BRICK + '"/>' + bricks(0, 112, 400, 30, "#a0583f") +
      /* station name board on posts */
      '<rect x="150" y="56" width="6" height="56" fill="#3b3f46"/><rect x="290" y="56" width="6" height="56" fill="#3b3f46"/>' +
      '<rect x="132" y="30" width="182" height="38" rx="3" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="223" y="54" text-anchor="middle" ' + F + ' font-size="17" fill="#fff" textLength="166" lengthAdjust="spacingAndGlyphs">WESTBOURNE PARK</text>' +
      '<rect x="132" y="70" width="91" height="9" fill="' + HC + '"/><rect x="223" y="70" width="91" height="9" fill="' + CIRC + '"/>' +
      '<text x="177" y="77.5" text-anchor="middle" ' + F + ' font-size="6.5" fill="#111">HAMMERSMITH &amp; CITY</text><text x="268" y="77.5" text-anchor="middle" ' + F + ' font-size="6.5" fill="#111">CIRCLE</text>' +
      /* tracks + train */
      '<rect x="0" y="200" width="400" height="14" fill="#4a4a4a"/><rect x="0" y="206" width="400" height="3" fill="#9a9a9a"/>' + train +
      /* platform */
      '<rect x="0" y="214" width="400" height="46" fill="#9a958c"/><rect x="0" y="214" width="400" height="6" fill="' + CIRC + '"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + A + ' font-size="13" fill="#2a2a2a" letter-spacing="2">MIND THE GAP</text>',
      sky('clsS1', '#8fb8e0', '#f3e1cf'));
  }

  /* 2. Grand Union Canal: green water, towpath, brick bridge, a painted narrowboat gliding by */
  function clscanal() {
    const boat = '<g class="cls-boat"><rect x="0" y="150" width="150" height="22" rx="4" fill="#1f5c3a" stroke="#0d2a1a" stroke-width="2"/>' +
      '<rect x="12" y="136" width="120" height="16" fill="#8a1f2e"/><g fill="' + GOLD + '"><rect x="20" y="140" width="12" height="8"/><rect x="40" y="140" width="12" height="8"/><rect x="60" y="140" width="12" height="8"/><rect x="80" y="140" width="12" height="8"/><rect x="100" y="140" width="12" height="8"/></g>' +
      '<path d="M0 158h150" stroke="' + GOLD + '" stroke-width="2"/><circle cx="128" cy="130" r="6" fill="' + ROSE + '"/><circle cx="120" cy="131" r="5" fill="#f28aa0"/><rect x="118" y="132" width="16" height="4" fill="#5a3a1a"/>' +
      '<rect x="138" y="128" width="4" height="10" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#clsS2)"/>' + clouds +
      '<g fill="#3f6e3a"><circle cx="30" cy="96" r="30"/><circle cx="70" cy="90" r="26"/><circle cx="350" cy="94" r="32"/><circle cx="390" cy="100" r="22"/></g>' +
      /* brick bridge */
      '<path d="M120 60h170v120h-20v-40q0 -46 -65 -46t-65 46v40h-20z" fill="' + BRICK + '"/><path d="M140 140q0 -46 65 -46t65 46v40H140z" fill="#1c2f28"/>' + '<path d="M120 60h170v8H120z" fill="#6e3424"/>' +
      '<path d="M140 140q0 -46 65 -46t65 46" fill="none" stroke="#5e2c1e" stroke-width="3"/>' +
      /* towpath */
      '<rect x="0" y="128" width="400" height="12" fill="#b9a98a"/>' +
      /* water */
      '<rect x="0" y="140" width="400" height="80" fill="#3d6b5a"/>' +
      '<g stroke="#9cc7b4" stroke-width="2" opacity=".6"><path class="cls-rip" d="M20 190h40M120 200h50M260 186h40M330 204h44"/><path class="cls-rip cls-r2" d="M60 210h30M200 214h40M300 222h30"/></g>' +
      boat +
      '<rect x="0" y="220" width="400" height="40" fill="#7d8b5a"/><rect x="0" y="218" width="400" height="4" fill="#5c6a40"/>' +
      '<rect x="110" y="232" width="180" height="16" rx="3" fill="#0f1a14" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + A + ' font-size="10.5" fill="' + GOLD + '">GRAND UNION CANAL · W10</text>',
      sky('clsS2', '#a9cbe8', '#f6e6d2'));
  }

  /* 3. The studio: lamp glow, vocal mic with pop filter, tape reels turning, level meters dancing */
  function clsstudio() {
    let meters = "";
    const cls = ["", "cls-m2", "cls-m3", "cls-m4"];
    for (let i = 0; i < 8; i++) meters += '<rect class="cls-meter ' + cls[i % 4] + '" x="' + (232 + i * 16) + '" y="150" width="10" height="34" fill="' + (i % 3 === 2 ? ROSE : "#7be0a0") + '"/>';
    const reel = (cx) => '<g class="cls-spin"><circle cx="' + cx + '" cy="104" r="26" fill="#2a2a2a" stroke="#888" stroke-width="2"/>' +
      '<circle cx="' + cx + '" cy="104" r="6" fill="#ccc"/><path d="M' + cx + ' 82v12M' + (cx - 19) + ' 115l10 -6M' + (cx + 19) + ' 115l-10 -6" stroke="#ccc" stroke-width="4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#24140f"/>' +
      '<rect x="0" y="0" width="400" height="200" fill="url(#clsS3)"/>' +
      /* wall panels */
      '<g fill="#3a2219">' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (6 + i * 50) + '" y="10" width="44" height="60" rx="3"/>').join("") + '</g>' +
      /* lamp */
      '<circle cx="66" cy="56" r="60" fill="' + GOLD + '" class="cls-glow"/><path d="M50 40h32l-8 -22h-16z" fill="#d9a441"/><rect x="64" y="40" width="4" height="100" fill="#5a3a1a"/><rect x="50" y="138" width="32" height="6" fill="#5a3a1a"/>' +
      /* tape machine */
      '<rect x="210" y="70" width="170" height="70" rx="4" fill="#3b3b3b" stroke="#111" stroke-width="2"/>' + reel(250) + reel(340) +
      '<path d="M250 130h90" stroke="#5a3a1a" stroke-width="3"/>' +
      /* desk with meters */
      '<path d="M200 144h196v48H200z" fill="#1a1a1a" stroke="#000" stroke-width="2"/>' + meters +
      /* mic stand + mic + pop filter */
      '<rect x="138" y="96" width="4" height="110" fill="#777"/><path d="M118 206h44" stroke="#777" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="128" y="62" width="24" height="40" rx="12" fill="#cfcfcf" stroke="#555" stroke-width="2"/><g stroke="#888" stroke-width="1"><path d="M130 72h20M130 78h20M130 84h20"/></g>' +
      '<circle cx="104" cy="82" r="18" fill="#111" opacity=".55" stroke="#444" stroke-width="2"/><path d="M118 88l12 4" stroke="#444" stroke-width="2"/>' +
      /* rug */
      '<ellipse cx="200" cy="232" rx="170" ry="20" fill="#6a2a32"/><ellipse cx="200" cy="232" rx="140" ry="13" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="20" y="210" width="130" height="16" rx="3" fill="#150b08" stroke="' + ROSE + '" stroke-width="1"/>' +
      '<text x="85" y="222" text-anchor="middle" ' + A + ' font-size="10" fill="' + ROSE + '">MADE IN THE FAMILY</text>',
      sky('clsS3', '#4a2a1e', '#24140f'));
  }

  /* 4. Rose in the Dark: night garden behind the terraces, a red rose glowing under the street lamp, petals drifting */
  function clsrose() {
    let stars = "";
    for (let i = 0; i < 26; i++) stars += '<circle class="cls-twk' + (i % 2 ? " cls-t2" : "") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 47) % 70) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#clsS4)"/>' + stars +
      '<circle cx="330" cy="44" r="16" fill="#f4ecd0"/><circle cx="336" cy="40" r="14" fill="#141a33"/>' +
      /* terrace silhouettes with a few lit windows */
      '<path d="M0 120h60v-20h40v20h60v-26h50v26h70v-18h50v18h70v140H0z" fill="#0f1224"/>' +
      '<g fill="' + GOLD + '" opacity=".8"><rect x="20" y="132" width="10" height="12"/><rect x="118" y="128" width="10" height="12"/><rect x="230" y="134" width="10" height="12"/><rect x="350" y="130" width="10" height="12"/></g>' +
      /* garden wall */
      '<rect x="0" y="170" width="400" height="20" fill="#2a1c22"/>' +
      /* lamp post + glow */
      '<rect x="262" y="70" width="5" height="150" fill="#2b2b2b"/><path d="M252 70h25l-5 -14h-15z" fill="#3a3a3a"/><circle cx="264" cy="76" r="5" fill="#ffe6a0"/>' +
      '<path d="M264 78L200 220h128z" fill="#ffe6a0" class="cls-glow"/>' +
      /* ground and roses */
      '<rect x="0" y="210" width="400" height="50" fill="#14201a"/>' +
      rose(268, 160, 1.15) + '<g opacity=".55">' + rose(70, 190, .7) + rose(120, 196, .6) + rose(370, 194, .65) + '</g>' +
      '<g fill="' + ROSE + '"><ellipse class="cls-petal" cx="282" cy="150" rx="3" ry="2"/><ellipse class="cls-petal cls-p2" cx="258" cy="146" rx="3" ry="2"/><ellipse class="cls-petal cls-p3" cx="274" cy="154" rx="3" ry="2"/></g>' +
      '<rect x="16" y="232" width="190" height="16" rx="3" fill="#0a0a12" stroke="' + ROSE + '" stroke-width="1"/>' +
      '<text x="111" y="244" text-anchor="middle" ' + A + ' font-size="10.5" fill="' + ROSE + '">GROW THE ROSE IN THE DARK</text>',
      sky('clsS4', '#141a33', '#3a2442'));
  }

  /* 5. The corner: Westbourne Park Road and All Saints Road, W11 — London street plates, CLEO tagged, pastel terraces behind */
  function clscorner() {
    const pastel = ["#f6c6d0", "#bfe0d6", "#f7e3a6", "#c9d6f2", "#f2c9a8", "#d9c6ee"];
    let terr = "";
    for (let i = 0; i < 6; i++) {
      const x = i * 67;
      terr += '<rect x="' + x + '" y="26" width="66" height="86" fill="' + pastel[i] + '"/><rect x="' + x + '" y="22" width="66" height="6" fill="#f4f1ea"/>' +
        '<g fill="#5a6b7a"><rect x="' + (x + 10) + '" y="38" width="16" height="22"/><rect x="' + (x + 40) + '" y="38" width="16" height="22"/><rect x="' + (x + 10) + '" y="72" width="16" height="22"/><rect x="' + (x + 40) + '" y="72" width="16" height="22"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#clsS5)"/>' + terr +
      '<rect x="0" y="108" width="400" height="8" fill="#3a3a3a"/>' +
      /* wall */
      '<rect x="0" y="116" width="400" height="100" fill="#e8e1d4"/>' +
      '<g stroke="#cfc6b6" stroke-width="1"><path d="M0 150h400M0 184h400"/></g>' +
      tag("CLEO", 22, 178, 56, ROSE, -5) + tag("SOL", 60, 208, 26, GOLD, -3) + tag("W11", 160, 206, 22, BLUE, -4) +
      rose(214, 150, .55) +
      plate(250, 122, 144, "WESTBOURNE PARK ROAD", "ROYAL BOROUGH OF KENSINGTON AND CHELSEA · W11") +
      plate(250, 162, 144, "ALL SAINTS ROAD", "ROYAL BOROUGH OF KENSINGTON AND CHELSEA · W11") +
      '<rect x="0" y="216" width="400" height="44" fill="#8d8b85"/><rect x="0" y="214" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="cls-bus"><rect x="0" y="222" width="80" height="30" rx="4" fill="#c8102e"/><rect x="6" y="226" width="68" height="9" fill="#2b3e55"/><circle cx="16" cy="253" r="5" fill="#111"/><circle cx="64" cy="253" r="5" fill="#111"/></g>',
      sky('clsS5', '#9cc3e6', '#f3e4d0'));
  }

  window.SCENES = { clsstation, clscanal, clsstudio, clsrose, clscorner };
})();
