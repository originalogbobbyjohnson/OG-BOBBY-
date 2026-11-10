/* tobi lou scenes (Regions tab: CHICAGO; south suburbs - born in Lagos, Nigeria, moved to Chicago at 2 and raised there; Homewood-Flossmoor High School (also Hinsdale Central);
   played college ball, then the Joliet Slammers (independent pro baseball) until an injury in 2012; worked with Cam O'bi at Classick Studios; "life is a cartoon").
   1 Olympia Fields, Metra Electric: the station up on its solid-fill embankment, catenary wires, a silver electric train pulling in (the Metra Electric stop for the H-F area).
   2 Homewood-Flossmoor High School: long low brick school, flag waving, the ball field out front.
   3 Joliet ballpark (his Slammers days): brick grandstand, light towers, outfield wall, a ball flying out.
   4 The studio (Classick Studios days): mixing desk, cartoon TV glowing, window on the snowy Chicago skyline (winter nights down in Chicago), ON AIR blinking.
   5 203rd St and Kedzie Ave, Olympia Fields: green signs, TOBI LOU tagged with LIVE ON ICE / BUFF BABY / LITTLE LOU, the country club's stone clock tower behind.
   CSS classes prefixed "tbl" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tblFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-10deg)}}.tblFlag{transform-box:fill-box;transform-origin:0 50%;animation:tblFlag 1.2s ease-in-out infinite}' +
    '@keyframes tblBall{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(170px,-150px);opacity:0}}.tblBall{animation:tblBall 2.6s ease-out infinite}' +
    '@keyframes tblBlink{0%,100%{opacity:1}50%{opacity:.2}}.tblBl{animation:tblBlink 1.2s steps(1) infinite}' +
    '@keyframes tblSnow{0%{transform:translateY(-10px)}100%{transform:translateY(120px)}}.tblSnow{animation:tblSnow 4s linear infinite}.tblS2{animation-delay:-1.3s}.tblS3{animation-delay:-2.6s}' +
    '@keyframes tblTv{0%,100%{fill:#7ec8e3}33%{fill:#ff9f1c}66%{fill:#ffd23f}}.tblTv{animation:tblTv 2.4s steps(1) infinite}' +
    '@keyframes tblBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tblBob{animation:tblBob .8s ease-in-out infinite}' +
    '@keyframes tblCloud{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.tblCloud{animation:tblCloud 18s linear infinite}.tblC2{animation-delay:-9s}' +
    '@keyframes tblSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.tblSp{animation:tblSp 1.4s ease-out infinite}.tblSp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const ORANGE = "#ff9f1c", ICE = "#7ec8e3", SUN = "#ffd23f", ME = "#eb3a1e";
  const cloud = (x, y, cls) => '<g class="tblCloud ' + cls + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 6) + '" rx="16" ry="9"/></g>';

  /* 1. Olympia Fields, Metra Electric */
  function tblstation() {
    let wins = "", poles = "";
    for (let x = 44; x < 300; x += 30) wins += '<rect x="' + x + '" y="112" width="20" height="16" rx="2" fill="#26333f"/>';
    for (let x = 30; x < 400; x += 120) poles += '<rect x="' + x + '" y="40" width="5" height="86" fill="#5a5f66"/><path d="M' + (x - 10) + ' 50h26" stroke="#5a5f66" stroke-width="4"/>';
    const train = '<g class="anim-train">' +
      '<path d="M120 96l14 -8h40l14 8" stroke="#333" stroke-width="2" fill="none"/>' +
      '<path d="M20 100h280q22 0 26 24v30H20z" fill="#d7dbe0" stroke="#2a2a2a" stroke-width="2"/>' + wins +
      '<path d="M304 108q14 2 18 16h-18z" fill="#26333f"/>' +
      '<rect x="20" y="134" width="306" height="7" fill="' + ME + '"/><rect x="20" y="142" width="306" height="4" fill="#26408f"/>' +
      '<rect x="312" y="146" width="9" height="5" fill="#fff3b0"/>' +
      '<g fill="#1a1a1a"><circle cx="58" cy="157" r="6"/><circle cx="80" cy="157" r="6"/><circle cx="246" cy="157" r="6"/><circle cx="268" cy="157" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tbls1)"/>' + cloud(60, 30, "") + cloud(240, 22, "tblC2") +
      '<path d="M0 54h400" stroke="#333" stroke-width="1.2"/><path d="M0 60h400" stroke="#333" stroke-width="1"/>' + poles +
      /* embankment + island platform */
      '<path d="M0 162h400v98H0z" fill="#6f9a4c"/><path d="M0 162h400l-30 20H30z" fill="#8a7b62"/>' +
      '<rect x="0" y="160" width="400" height="6" fill="#4a4a4a"/>' + train +
      '<rect x="0" y="166" width="400" height="12" fill="#bdbdbd"/><rect x="0" y="166" width="400" height="3" fill="' + SUN + '"/>' +
      '<rect x="248" y="170" width="6" height="40" fill="#3a3a3a"/>' +
      '<rect x="190" y="200" width="122" height="30" rx="3" fill="#1d3f8f" stroke="#fff" stroke-width="2"/>' +
      '<text x="251" y="215" text-anchor="middle" ' + F + ' font-size="11" fill="#fff" letter-spacing="1">OLYMPIA FIELDS</text>' +
      '<rect x="210" y="219" width="82" height="8" rx="2" fill="' + ME + '"/><text x="251" y="226" text-anchor="middle" ' + F + ' font-size="6.5" fill="#fff" letter-spacing="1">METRA ELECTRIC</text>' +
      '<path d="M0 236q200 -10 400 0v24H0z" fill="#5c8a3e"/>',
      sky("tbls1", "#8fc3ea", "#eaf1f4"));
  }

  /* 2. Homewood-Flossmoor High School */
  function tblschool() {
    let wins = "";
    for (let x = 30; x < 380; x += 26) wins += '<rect x="' + x + '" y="102" width="16" height="22" fill="#2d3c4c"/><rect x="' + x + '" y="134" width="16" height="22" fill="#2d3c4c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tbls2)"/>' + cloud(80, 34, "") + cloud(300, 26, "tblC2") +
      '<rect x="14" y="92" width="372" height="76" fill="#b5653f" stroke="#7d3f22" stroke-width="2"/>' + wins +
      '<rect x="14" y="86" width="372" height="8" fill="#e8e1d2"/>' +
      '<rect x="168" y="70" width="64" height="98" fill="#a95a37" stroke="#7d3f22" stroke-width="2"/><rect x="168" y="66" width="64" height="6" fill="#e8e1d2"/>' +
      '<rect x="186" y="136" width="28" height="32" fill="#3a2a22"/>' +
      '<text x="200" y="88" text-anchor="middle" ' + F + ' font-size="9" fill="#fff" letter-spacing="1">H-F HIGH</text>' +
      /* flag */
      '<rect x="98" y="30" width="3" height="62" fill="#ccc"/><g class="tblFlag"><rect x="101" y="32" width="30" height="18" fill="#c8102e"/><rect x="101" y="38" width="30" height="5" fill="#fff"/></g>' +
      /* ball field */
      '<path d="M0 168h400v92H0z" fill="#6aa84f"/>' +
      '<path d="M120 260l80 -70l80 70z" fill="#c9a26b"/><path d="M150 238l50 -40l50 40l-50 22z" fill="#6aa84f"/>' +
      '<g fill="#fff"><rect x="196" y="196" width="8" height="8" transform="rotate(45 200 200)"/><rect x="146" y="236" width="7" height="7"/><rect x="246" y="236" width="7" height="7"/></g>' +
      '<g class="tblBob"><circle cx="200" cy="226" r="5" fill="#fff" stroke="#c8102e"/></g>' +
      '<g stroke="#888" stroke-width="1.5" fill="none"><path d="M20 168v-30h70v30"/><path d="M20 148h70M20 158h70M35 138v30M50 138v30M65 138v30M80 138v30"/></g>',
      sky("tbls2", "#9ccbee", "#eef3f2"));
  }

  /* 3. Joliet ballpark, his Slammers days */
  function tblballpark() {
    let seats = "";
    for (let y = 120; y < 160; y += 8) seats += '<path d="M40 ' + y + 'h320" stroke="#24508f" stroke-width="4"/>';
    const tower = x => '<rect x="' + x + '" y="20" width="4" height="100" fill="#666"/><rect x="' + (x - 14) + '" y="14" width="32" height="16" fill="#444"/><g fill="#fff8d0">' +
      [0, 8, 16, 24].map(d => '<rect x="' + (x - 12 + d) + '" y="16" width="6" height="5"/><rect x="' + (x - 12 + d) + '" y="23" width="6" height="5"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tbls3)"/>' + tower(30) + tower(366) +
      /* brick grandstand */
      '<rect x="30" y="80" width="340" height="40" fill="#a24b2f"/><g fill="#7a3420">' + [50, 90, 130, 170, 210, 250, 290, 330].map(x => '<path d="M' + x + ' 120v-26q10 -10 20 0v26z"/>').join("") + '</g>' +
      '<rect x="30" y="76" width="340" height="6" fill="#e6d8b8"/>' +
      '<text x="200" y="72" text-anchor="middle" ' + F + ' font-size="11" fill="#fff" letter-spacing="3">JOLIET</text>' +
      seats +
      /* field */
      '<rect x="0" y="160" width="400" height="100" fill="#4f9a3c"/>' +
      '<g fill="#5aa845">' + [0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => i % 2 ? '<rect x="' + x + '" y="160" width="40" height="100"/>' : '').join("") + '</g>' +
      '<path d="M120 260q80 -60 160 0z" fill="#c9a26b"/><rect x="196" y="236" width="8" height="8" fill="#fff" transform="rotate(45 200 240)"/>' +
      '<rect x="0" y="156" width="400" height="6" fill="#1f3d6b"/>' +
      '<g class="tblBall"><circle cx="200" cy="230" r="4" fill="#fff" stroke="#c8102e"/></g>',
      sky("tbls3", "#1b2c5a", "#e9a066"));
  }

  /* 4. The studio: mixing desk, cartoon TV, snowy Chicago skyline in the window */
  function tblstudio() {
    let faders = "", snow = "";
    for (let i = 0; i < 16; i++) faders += '<rect x="' + (64 + i * 17) + '" y="196" width="3" height="22" fill="#111"/><rect x="' + (60 + i * 17) + '" y="' + (200 + (i * 7) % 14) + '" width="11" height="5" rx="1" fill="' + (i % 4 ? "#ddd" : ORANGE) + '"/>';
    for (let i = 0; i < 18; i++) snow += '<circle cx="' + (218 + (i * 37) % 150) + '" cy="' + (36 + (i * 13) % 30) + '" r="1.6" fill="#fff" class="tblSnow' + (i % 3 === 1 ? ' tblS2' : i % 3 === 2 ? ' tblS3' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#241a2e"/>' +
      /* window with skyline */
      '<rect x="210" y="26" width="168" height="126" fill="#1a2a4a" stroke="#555" stroke-width="4"/>' +
      '<g fill="#0c1426"><rect x="216" y="100" width="16" height="50"/><rect x="236" y="84" width="14" height="66"/>' +
      '<rect x="256" y="58" width="22" height="92"/><rect x="261" y="40" width="3" height="18"/><rect x="270" y="40" width="3" height="18"/>' +
      '<path d="M286 150v-70l10 -8l10 8v70z"/><rect x="312" y="94" width="18" height="56"/><rect x="334" y="70" width="16" height="80"/><rect x="354" y="104" width="20" height="46"/></g>' +
      '<g fill="#ffd27a" opacity=".8"><rect x="260" y="70" width="3" height="3"/><rect x="268" y="84" width="3" height="3"/><rect x="292" y="100" width="3" height="3"/><rect x="338" y="90" width="3" height="3"/><rect x="316" y="110" width="3" height="3"/></g>' +
      '<g clip-path="url(#tblwin)">' + snow + '</g>' +
      '<path d="M210 140h168v12H210z" fill="#e8eef2"/>' +
      /* cartoon TV */
      '<rect x="30" y="50" width="120" height="86" rx="10" fill="#c98a3a" stroke="#6b4416" stroke-width="3"/>' +
      '<rect x="40" y="60" width="86" height="66" rx="8" class="tblTv"/>' +
      '<circle cx="70" cy="90" r="12" fill="#fff"/><circle cx="96" cy="90" r="12" fill="#fff"/><circle cx="72" cy="92" r="5" fill="#111"/><circle cx="98" cy="92" r="5" fill="#111"/>' +
      '<path d="M72 110q12 8 24 0" stroke="#111" stroke-width="3" fill="none"/>' +
      '<circle cx="138" cy="74" r="4" fill="#6b4416"/><circle cx="138" cy="90" r="4" fill="#6b4416"/>' +
      '<path d="M60 50l-12 -20M112 50l12 -20" stroke="#888" stroke-width="2"/>' +
      /* ON AIR */
      '<rect x="40" y="12" width="70" height="20" rx="3" fill="#3a0a0a"/><text x="75" y="27" text-anchor="middle" ' + F + ' font-size="12" fill="#ff3b3b" class="tblBl">ON AIR</text>' +
      /* desk */
      '<path d="M30 260l20 -78h300l20 78z" fill="#3b3f48"/><rect x="50" y="182" width="300" height="44" fill="#2a2d34"/>' + faders +
      '<rect x="160" y="160" width="80" height="22" rx="3" fill="#1b1b1b"/><path d="M168 176l10 -8l10 6l10 -10l10 8l10 -4l10 6" stroke="' + ICE + '" stroke-width="2" fill="none" class="tblBob"/>',
      '<clipPath id="tblwin"><rect x="210" y="26" width="168" height="114"/></clipPath>');
  }

  /* 5. 203rd St and Kedzie Ave, Olympia Fields */
  function tblcorner() {
    let bricks = "";
    for (let y = 120; y < 216; y += 10) bricks += '<path d="M0 ' + y + 'h400" stroke="#5a2a1c" stroke-width="1"/>';
    for (let y = 120, r = 0; y < 216; y += 10, r++) for (let x = (r % 2) * 14; x < 400; x += 28) bricks += '<path d="M' + x + ' ' + y + 'v10" stroke="#5a2a1c" stroke-width="1"/>';
    const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#tbls5)"/>' + cloud(90, 30, "") +
      /* country club stone clock tower behind */
      '<g fill="#cfc2a6" stroke="#8a7c60" stroke-width="1.5"><rect x="250" y="52" width="40" height="70"/><path d="M246 52l24 -26l24 26z" fill="#6b4a3a"/><rect x="200" y="86" width="140" height="36"/></g>' +
      '<circle cx="270" cy="72" r="9" fill="#f4efe2" stroke="#6b5a40"/><path d="M270 66v6l4 3" stroke="#222" stroke-width="1.5" fill="none"/>' +
      '<g fill="#5a4d3a"><rect x="210" y="96" width="10" height="14"/><rect x="230" y="96" width="10" height="14"/><rect x="300" y="96" width="10" height="14"/><rect x="320" y="96" width="10" height="14"/></g>' +
      '<rect x="0" y="120" width="400" height="96" fill="#8c4a33"/>' + bricks +
      tag("TOBI LOU", 60, 182, 46, ORANGE, -5) +
      tag("LIVE ON ICE", 40, 208, 17, ICE, -3) + tag("BUFF BABY", 250, 144, 17, SUN, 4) + tag("LITTLE LOU", 240, 208, 16, "#fff", -4) +
      '<g class="tblSp"><circle cx="318" cy="168" r="3" fill="' + ORANGE + '"/></g><g class="tblSp tblSp2"><circle cx="326" cy="162" r="2" fill="' + ICE + '"/></g>' +
      '<rect x="332" y="166" width="12" height="28" rx="3" fill="' + ORANGE + '" stroke="#222"/><rect x="334" y="160" width="8" height="7" fill="#ddd" stroke="#222"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#6f6f6f"/><rect x="0" y="216" width="400" height="4" fill="#9a9a9a"/>' +
      /* sign post */
      '<rect x="18" y="40" width="5" height="176" fill="#4a4a4a"/>' + sign(8, 24, 136, "203RD ST") + sign(14, 50, 116, "KEDZIE AVE"),
      sky("tbls5", "#8cc0e8", "#f2e6cf"));
  }

  window.SCENES = { tblstation, tblschool, tblballpark, tblstudio, tblcorner };
})();
