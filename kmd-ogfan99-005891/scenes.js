/* KMD game (NYC map, Long Island: North Park, Long Beach, where Zev Love X and DJ Subroc came up and the group formed in 1987).
   The n15 bus pulling up at Long Beach Blvd & E Hudson St, Subroc's barber chair (he cut fades and designs before the record deal),
   a North Park community-center block party (the community events where MC Serch met the crew), the North Park courts with the crew's
   graffiti piece and b-boys (KMD started as a graffiti and breaking crew), and E Hudson St & Riverside Blvd under the KMD-MF DOOM Way sign,
   the power-plant stacks across the channel behind. 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmbuzz{0%,100%{transform:translate(0,0)}25%{transform:translate(1px,-1px)}75%{transform:translate(-1px,1px)}}.km-buzz{animation:kmbuzz .12s linear infinite}' +
    '@keyframes kmstripe{from{transform:translateY(0)}to{transform:translateY(-24px)}}.km-stripe{animation:kmstripe 1.2s linear infinite}' +
    '@keyframes kmspin{to{transform:rotate(360deg)}}.km-spin{transform-box:fill-box;transform-origin:50% 50%;animation:kmspin 1.4s linear infinite}.km-spin2{animation-duration:1s}' +
    '@keyframes kmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.km-bob{animation:kmbob .5s ease-in-out infinite}.km-bob2{animation-delay:.25s}' +
    '@keyframes kmpump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.km-pump{transform-box:fill-box;transform-origin:50% 50%;animation:kmpump .5s ease-in-out infinite}' +
    '@keyframes kmblink{0%,100%{opacity:.2}50%{opacity:1}}.km-bl{animation:kmblink 1.6s ease-in-out infinite}.km-bl2{animation-delay:.6s}.km-bl3{animation-delay:1.1s}' +
    '@keyframes kmwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.km-wave{animation:kmwave 3s linear infinite}' +
    '@keyframes kmcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.km-car{animation:kmcar 7s linear infinite}' +
    '@keyframes kmsmoke{0%{transform:translate(0,0);opacity:.6}100%{transform:translate(18px,-26px);opacity:0}}.km-smk{animation:kmsmoke 3s ease-out infinite}.km-smk2{animation-delay:1.5s}' +
    '@keyframes kmball{0%,100%{transform:translateY(0)}50%{transform:translateY(-30px)}}.km-ball{animation:kmball .9s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* a NICE bus route badge, like a subway bullet but a rounded box */
  const badge = (x, y, t) => '<rect x="' + (x - 16) + '" y="' + (y - 10) + '" width="32" height="20" rx="10" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const PEACH = "#ffb38a", GREEN = "#7bc96f", GOLD = "#f2c14e", CREAM = "#f6ecdc", SIGN = "#0f6b3a";
  /* low North Park houses */
  const house = (x, w, h, col, roof) => '<rect x="' + x + '" y="' + (170 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>' +
    '<path d="M' + (x - 4) + ' ' + (170 - h) + 'L' + (x + w / 2) + ' ' + (150 - h) + 'L' + (x + w + 4) + ' ' + (170 - h) + 'z" fill="' + roof + '"/>' +
    '<rect class="km-bl" x="' + (x + 8) + '" y="' + (180 - h) + '" width="10" height="10" fill="#ffe39a" opacity=".8"/><rect class="km-bl km-bl2" x="' + (x + w - 18) + '" y="' + (180 - h) + '" width="10" height="10" fill="#ffe39a" opacity=".8"/>';

  /* 1. The n15 stop at Long Beach Blvd & E Hudson St: black stop sign board with the n15 badge, the blue-and-white bus pulling in, North Park houses */
  function kmbus() {
    let win = "";
    for (let x = 44; x < 260; x += 30) win += '<rect x="' + x + '" y="128" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kbs)"/>' + stars(14) +
      house(10, 70, 46, "#c9b79a", "#5b3b2a") + house(96, 64, 40, "#9fb3c8", "#3b4a5a") + house(176, 76, 50, "#d8c7a8", "#6a4632") + house(268, 60, 42, "#b8a07a", "#4a3626") + house(342, 60, 48, "#a9c0a0", "#3e5236") +
      /* sidewalk + road */
      '<rect x="0" y="170" width="400" height="14" fill="#8a8c90"/><rect x="0" y="184" width="400" height="76" fill="#3c3d42"/>' +
      '<path d="M0 226h400" stroke="#e9d27a" stroke-width="3" stroke-dasharray="22 16"/>' +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="30" y="116" width="250" height="66" rx="10" fill="#f4f6f8" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="30" y="156" width="250" height="10" fill="#0039a6"/><rect x="30" y="166" width="250" height="4" fill="#ff8c1a"/>' + win +
        '<rect x="258" y="124" width="18" height="34" rx="3" fill="#cfe2f5"/>' +
        '<rect x="186" y="118" width="68" height="9" rx="2" fill="#111"/><text x="220" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">n15 LONG BEACH</text>' +
        '<circle cx="74" cy="184" r="10" fill="#111"/><circle cx="74" cy="184" r="4" fill="#888"/><circle cx="236" cy="184" r="10" fill="#111"/><circle cx="236" cy="184" r="4" fill="#888"/>' +
        '<circle cx="276" cy="172" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* the stop sign board */
      '<rect x="338" y="70" width="5" height="114" fill="#5a5f66"/>' +
      '<rect x="290" y="34" width="104" height="58" rx="3" fill="#111"/><rect x="290" y="34" width="104" height="3" fill="#fff"/>' +
      '<text x="298" y="54" ' + font + ' font-size="11" fill="#fff">Long Beach Blvd</text>' +
      '<text x="298" y="68" ' + font + ' font-size="11" fill="#fff">&amp; E Hudson St</text>' + badge(318, 80, "n15") +
      '<text x="352" y="84" ' + font + ' font-size="7" fill="#c9ced6">NICE BUS</text>' +
      person(310, 150, "#1b1b1b") + person(328, 154, "#2a2a2a", "km-bob") +
      txt("NORTH PARK · LONG BEACH", 150, 248, 11, CREAM, 'letter-spacing="3"'),
      sky("kbs", "#0b1026", "#3a3354"));
  }

  /* 2. Subroc's barber chair: checker floor, red chair, mirror, a fresh fade from behind with lines cut in, the clippers buzzing, a spinning pole */
  function kmchair() {
    let floor = "";
    for (let y = 196; y < 260; y += 16) for (let x = 0; x < 400; x += 16) if (((x + y) / 16) % 2 < 1) floor += '<rect x="' + x + '" y="' + y + '" width="16" height="16" fill="#e9e4da"/>';
    let stripes = "";
    for (let y = -24; y < 96; y += 12) stripes += '<path d="M0 ' + y + 'l20 12v6l-20 -12z" fill="#d62828"/><path d="M0 ' + (y + 6) + 'l20 12v3l-20 -12z" fill="#1d4ed8"/>';
    return svg(
      '<rect width="400" height="196" fill="#2f5d50"/><rect y="196" width="400" height="64" fill="#1c1c1c"/>' + floor +
      '<rect x="0" y="120" width="400" height="6" fill="#c9a24a"/>' +
      /* mirror */
      '<rect x="120" y="20" width="200" height="96" rx="6" fill="#9fc3d6" stroke="#c9ced6" stroke-width="4"/>' +
      '<path d="M140 30l40 60M200 30l40 60" stroke="#fff" stroke-width="3" opacity=".35"/>' +
      txt("FADES · DESIGNS · LINE-UPS", 220, 36, 9, "#123", 'letter-spacing="1"') +
      /* barber pole */
      '<rect x="40" y="22" width="24" height="8" rx="3" fill="#c9ced6"/><rect x="40" y="114" width="24" height="8" rx="3" fill="#c9ced6"/>' +
      '<svg x="42" y="30" width="20" height="84" viewBox="0 0 20 84"><rect width="20" height="84" fill="#fff"/><g class="km-stripe">' + stripes + '</g></svg>' +
      /* the chair */
      '<rect x="196" y="150" width="56" height="12" rx="4" fill="#b91c1c"/><rect x="200" y="118" width="48" height="36" rx="8" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>' +
      '<rect x="218" y="162" width="12" height="30" fill="#c9ced6"/><ellipse cx="224" cy="194" rx="30" ry="6" fill="#9aa1aa"/>' +
      /* cape + head from behind with lines cut in */
      '<path d="M196 150q28 -34 56 0z" fill="#e8e8f0"/>' +
      '<ellipse cx="203" cy="110" rx="4" ry="7" fill="#3a2418"/><ellipse cx="245" cy="110" rx="4" ry="7" fill="#3a2418"/><ellipse cx="224" cy="108" rx="20" ry="22" fill="#2a1a12"/><ellipse cx="224" cy="96" rx="18" ry="10" fill="#120a06"/>' +
      '<path d="M208 100h12M207 106h14M208 112h12" stroke="' + GOLD + '" stroke-width="1.6" fill="none"/>' +
      /* clippers */
      '<g class="km-buzz"><rect x="250" y="96" width="34" height="14" rx="5" fill="#222" stroke="#888" stroke-width="1.5"/><rect x="246" y="98" width="6" height="10" fill="#c9ced6"/><path d="M284 103q20 8 30 30" stroke="#444" stroke-width="2" fill="none"/></g>' +
      '<path d="M244 94l-6 -4M244 112l-6 4" stroke="' + GOLD + '" stroke-width="1.5" class="km-bl"/>' +
      /* price board */
      '<rect x="328" y="30" width="62" height="70" rx="3" fill="#111" stroke="#c9a24a" stroke-width="2"/>' +
      txt("CUTS", 359, 46, 10, GOLD) + txt("FADE", 359, 62, 9, CREAM) + txt("DESIGN", 359, 76, 9, CREAM) + txt("SHAPE-UP", 359, 90, 8, CREAM) +
      tag("SUBROC", 40, 176, 26, PEACH, -6),
      "");
  }

  /* 3. North Park community center block party: low brick center, banner, DJ table with two spinning records, speakers pumping, crowd bobbing */
  function kmcenter() {
    let brick = "";
    for (let y = 70; y < 170; y += 8) for (let x = (y / 8) % 2 ? 30 : 22; x < 378; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#8a4a32"/>';
    const crowd = [40, 70, 100, 290, 320, 350].map((x, i) => person(x, 196, i % 2 ? "#151515" : "#222", i % 2 ? "km-bob" : "km-bob km-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kcs)"/>' +
      '<rect x="20" y="64" width="360" height="106" fill="#9c5a3c"/>' + brick +
      '<rect x="20" y="56" width="360" height="12" fill="#5a3322"/>' +
      [60, 140, 260, 330].map(x => '<rect x="' + x + '" y="100" width="34" height="26" fill="#ffe8a8" class="km-bl" opacity=".85"/>').join("") +
      '<rect x="176" y="110" width="48" height="60" fill="#3a2418"/>' +
      txt("NORTH PARK", 200, 52, 14, CREAM, 'letter-spacing="4"') +
      /* banner */
      '<path d="M70 72h260v20H70z" fill="' + GOLD + '"/>' + txt("BLOCK PARTY TODAY", 200, 87, 12, "#2a1a10", 'letter-spacing="2"') +
      /* ground */
      '<rect x="0" y="170" width="400" height="90" fill="#4a4c50"/>' +
      /* speakers */
      [130, 270].map(x => '<rect x="' + (x - 16) + '" y="150" width="32" height="56" rx="3" fill="#1b1b1b" stroke="#555"/><circle class="km-pump" cx="' + x + '" cy="166" r="9" fill="#333" stroke="#777"/><circle class="km-pump" cx="' + x + '" cy="190" r="12" fill="#333" stroke="#777"/>').join("") +
      /* DJ table */
      '<rect x="156" y="182" width="88" height="10" fill="#2b2b2b"/><rect x="164" y="192" width="6" height="30" fill="#2b2b2b"/><rect x="230" y="192" width="6" height="30" fill="#2b2b2b"/>' +
      '<rect x="158" y="170" width="38" height="14" rx="2" fill="#555"/><rect x="204" y="170" width="38" height="14" rx="2" fill="#555"/>' +
      '<g class="km-spin"><circle cx="177" cy="170" r="13" fill="#111" stroke="#444"/><circle cx="177" cy="170" r="4" fill="' + PEACH + '"/><path d="M177 159v5" stroke="#888" stroke-width="1.5"/></g>' +
      '<g class="km-spin km-spin2"><circle cx="223" cy="170" r="13" fill="#111" stroke="#444"/><circle cx="223" cy="170" r="4" fill="' + GREEN + '"/><path d="M223 159v5" stroke="#888" stroke-width="1.5"/></g>' +
      person(200, 128, "#101010", "km-bob") + crowd,
      sky("kcs", "#f6a96b", "#7cc3e8"));
  }

  /* 4. The North Park courts: chain-link fence, the crew's piece on the wall, a b-boy spinning on cardboard, a ball bouncing under the hoop */
  function kmcourts() {
    let fence = "";
    for (let x = -260; x < 400; x += 12) fence += '<path d="M' + x + ' 40l140 120" stroke="#9aa1aa" stroke-width="1" opacity=".5"/><path d="M' + (x + 140) + ' 40l-140 120" stroke="#9aa1aa" stroke-width="1" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kts)"/>' +
      /* wall with the piece */
      '<rect x="20" y="60" width="250" height="110" fill="#c9c2b4"/>' +
      '<path d="M30 150q40 -70 110 -60q70 10 120 -20v70z" fill="' + GREEN + '" opacity=".35"/>' +
      tag("KAUSE", 40, 138, 54, PEACH, -4) + tag("HUM ALONG", 150, 162, 16, GOLD, -3) +
      '<path d="M44 84l10 -10l6 8l8 -12" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      /* hoop */
      '<rect x="330" y="50" width="6" height="120" fill="#5a5f66"/><rect x="300" y="44" width="56" height="36" fill="#f1f1f1" stroke="#c0392b" stroke-width="2"/>' +
      '<rect x="318" y="58" width="20" height="14" fill="none" stroke="#c0392b" stroke-width="2"/><ellipse cx="328" cy="84" rx="12" ry="3" fill="none" stroke="#e8590c" stroke-width="2.5"/>' +
      '<path d="M318 84l4 12M328 85v12M338 84l-4 12" stroke="#fff" stroke-width="1"/>' +
      '<g class="km-ball"><circle cx="322" cy="190" r="8" fill="#e8590c"/><path d="M314 190h16M322 182v16" stroke="#7a2e06" stroke-width="1"/></g>' +
      /* fence */
      '<svg x="270" y="40" width="130" height="130" viewBox="270 40 130 130">' + fence + '</svg>' +
      /* court */
      '<rect x="0" y="170" width="400" height="90" fill="#3e6b4a"/><path d="M0 214h400M200 170v90" stroke="#e9e4da" stroke-width="2" opacity=".7"/>' +
      /* cardboard + b-boy spinning (silhouette, no face) */
      '<path d="M120 214l90 -6l6 20l-92 6z" fill="#b08a5a"/>' +
      '<g class="km-spin" style="animation-duration:1.6s"><circle cx="166" cy="200" r="6" fill="#151515"/><rect x="150" y="196" width="32" height="8" rx="4" fill="#151515"/><path d="M150 200l-12 -10M182 200l12 -10" stroke="#151515" stroke-width="5" stroke-linecap="round"/></g>' +
      person(240, 188, "#202020", "km-bob") + person(262, 190, "#2a2a2a", "km-bob km-bob2"),
      sky("kts", "#89c4f4", "#e8f4fb"));
  }

  /* 5. E Hudson St & Riverside Blvd: green signs + the KMD-MF DOOM Way co-name sign, the crew's tag on the wall, Reynolds Channel and the power-plant stacks behind */
  function kmcorner() {
    let waves = "";
    for (let x = 0; x < 480; x += 20) waves += '<path d="M' + x + ' 120q5 -3 10 0t10 0" stroke="#9ec9e8" stroke-width="1" fill="none" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks)"/>' + stars(12) +
      /* stacks across the channel */
      '<rect x="60" y="30" width="12" height="80" fill="#9aa1aa"/><rect x="84" y="20" width="12" height="90" fill="#b0b6be"/>' +
      '<rect x="60" y="40" width="12" height="6" fill="#c0392b"/><rect x="84" y="30" width="12" height="6" fill="#c0392b"/>' +
      '<circle class="km-bl" cx="66" cy="28" r="2.5" fill="#ff4d4d"/><circle class="km-bl km-bl2" cx="90" cy="18" r="2.5" fill="#ff4d4d"/>' +
      '<circle class="km-smk" cx="90" cy="16" r="6" fill="#cfd4da"/><circle class="km-smk km-smk2" cx="66" cy="26" r="5" fill="#cfd4da"/>' +
      '<rect x="40" y="86" width="90" height="26" fill="#6b7280"/><rect x="140" y="96" width="70" height="16" fill="#5a606a"/>' +
      /* water */
      '<rect x="0" y="112" width="400" height="22" fill="#2b4f73"/><g class="km-wave">' + waves + '</g>' +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#4a4d55"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h300" stroke="#3f424a" stroke-width="1"/>'; return b; })() +
      tag("KMD", 24, 204, 64, PEACH, -5) + tag("80-DECA", 196, 176, 22, GOLD, -4) + tag("HUM ALONG", 140, 222, 16, GREEN, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="km-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* pole + signs */
      '<rect x="352" y="46" width="5" height="182" fill="#3d4b3f"/>' +
      '<rect x="288" y="50" width="108" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("E Hudson St", 342, 66, 12, "#fff") +
      '<rect x="288" y="76" width="108" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Riverside Blvd", 342, 92, 12, "#fff") +
      '<rect x="282" y="104" width="114" height="26" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("KMD-MF DOOM Way", 339, 122, 11, "#fff") +
      '<circle class="km-bl" cx="354" cy="44" r="4" fill="#fff6c2"/>',
      sky("kks", "#0b0f24", "#3b3156"));
  }

  window.SCENES = { kmbus: kmbus, kmchair: kmchair, kmcenter: kmcenter, kmcourts: kmcourts, kmcorner: kmcorner };
})();
