/* Sugar Hill / 155th St (Harlem) opening scenes for the Vinny Chase game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes win{0%,100%{opacity:.15}50%{opacity:1}}' +
    '.win{animation:win 3.2s ease-in-out infinite}.w2{animation-delay:-1s}.w3{animation-delay:-2.1s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(40px,-70px);opacity:0}}' +
    '.note{animation:note 4s ease-out infinite}.n2{animation-delay:1.3s}.n3{animation-delay:2.6s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-60px,240px) rotate(300deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:50% 50%;animation:leaf 7s linear infinite}.l2{animation-delay:-2.3s}.l3{animation-delay:-4.6s}.l4{animation-delay:-5.8s}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes arc{0%{transform:translate(0,0)}50%{transform:translate(150px,-120px)}100%{transform:translate(300px,0)}}' +
    '.ball{animation:arc 4s linear infinite}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{transform-box:fill-box;transform-origin:50% 0;animation:drip 3s ease-out infinite}' +
    '@keyframes spray{0%,100%{opacity:.1}50%{opacity:.9}}' +
    '.spr{animation:spray 1.2s ease-in-out infinite}' +
    '@keyframes twk{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.twk{animation:twk 1.8s ease-in-out infinite}.t2{animation-delay:.6s}.t3{animation-delay:1.2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="twk' + (i % 3 ? " t" + (i % 3 + 1) : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff6319", CYAN = "#38e8ff", GOLD = "#f2c14e", ROSE = "#ff5c8a";

  /* 1. B and D pulling into 155 St on the Concourse line, underground at Eighth Av (Frederick Douglass Blvd): white tile, a violet tile band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d9d9" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d9d9d9" stroke-width=".6"/>';
    let cols = "";
    [24, 200, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#e9f6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#f2f2ee"/>' + tiles +
      '<rect x="0" y="30" width="400" height="9" fill="#6b4a8e"/><rect x="0" y="39" width="400" height="2" fill="#2e1f40"/>' +
      '<rect x="44" y="54" width="146" height="36" rx="4" fill="#111"/><rect x="44" y="54" width="146" height="4" fill="#fff"/>' +
      '<text x="56" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">155 St</text>' +
      bullet(144, 73, "B", ORANGE) + bullet(170, 73, "D", ORANGE) +
      '<rect x="214" y="54" width="146" height="36" rx="4" fill="#111"/><rect x="214" y="54" width="146" height="4" fill="#fff"/>' +
      '<text x="224" y="71" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">8 Av</text>' +
      '<text x="224" y="84" font-family="Helvetica, Arial, sans-serif" font-size="8.5" fill="#ddd">Frederick Douglass Blvd</text>' +
      '<g class="flk"><rect x="80" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="240" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#e9f6ff" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 142, "D", ORANGE) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("CHA$E", 24, 242, 34, CYAN, -5) + tag("CHEERS", 254, 240, 28, GOLD, -7));
  }

  /* 2. 409 Edgecombe Avenue on Sugar Hill: the thirteen-story buff-brick tower with its limestone base and cornice,
        up on the bluff over the Harlem River, windows lighting up, jazz notes drifting out (Ellington and friends lived here) */
  function edgecombe() {
    let wins = "";
    for (let r = 0; r < 11; r++) for (let c = 0; c < 9; c++) {
      const k = (r * 7 + c * 3) % 5;
      wins += '<rect class="win' + (k === 1 ? " w2" : k === 2 ? " w3" : "") + '" x="' + (136 + c * 15) + '" y="' + (44 + r * 13) + '" width="8" height="8" fill="#ffe7a3"' + (k > 2 ? ' style="animation:none;opacity:.9"' : "") + '/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#skyE)"/>' + stars(22) +
      '<circle cx="62" cy="40" r="14" fill="#f4f1e2" opacity=".9"/>' +
      /* the river and the Bronx lights far off on the right */
      '<rect x="300" y="170" width="100" height="22" fill="#14304a"/>' +
      '<path d="M300 170h100" stroke="#3d6a8f" stroke-width="1"/>' +
      '<rect x="318" y="150" width="14" height="20" fill="#1a2433"/><rect x="340" y="140" width="18" height="30" fill="#1a2433"/><rect x="366" y="152" width="22" height="18" fill="#1a2433"/>' +
      /* neighbor rowhouses */
      '<rect x="20" y="130" width="100" height="70" fill="#4a3528"/><rect x="20" y="126" width="100" height="6" fill="#c9b79a"/>' +
      '<rect x="280" y="120" width="34" height="80" fill="#5a3a2a"/>' +
      /* the tower */
      '<rect x="126" y="30" width="148" height="170" fill="#c9a774"/>' +
      '<rect x="122" y="24" width="156" height="10" fill="#e6dcc6"/><rect x="126" y="34" width="148" height="4" fill="#a8885a"/>' +
      wins +
      '<rect x="126" y="170" width="148" height="30" fill="#e3d8c0"/>' +
      '<path d="M186 200v-18q14-12 28 0v18z" fill="#2a2018"/><rect x="190" y="166" width="20" height="4" fill="#a8885a"/>' +
      '<text x="200" y="164" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#5a4630">409</text>' +
      /* the bluff */
      '<path d="M0 200h300q20 0 30 14t70 10v36H0z" fill="#1d2a1d"/>' +
      '<rect x="0" y="200" width="300" height="8" fill="#8a8a86"/>' +
      '<text x="210" y="230" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="3" fill="' + GOLD + '">SUGAR HILL</text>' +
      '<g fill="' + CYAN + '"><text class="note" x="150" y="120" font-size="18">&#9834;</text><text class="note n2" x="230" y="110" font-size="16">&#9835;</text><text class="note n3" x="190" y="130" font-size="14">&#9834;</text></g>',
      sky("skyE", "#0a1530", "#3a3060"));
  }

  /* 3. The Morris-Jumel Mansion on Jumel Terrace: the white Georgian house with its tall two-story portico of four columns
        and the triangle pediment, black shutters, up on the hill in its garden, autumn leaves falling */
  function jumel() {
    let shut = "";
    [[108, 112], [270, 112], [108, 160], [270, 160]].forEach(([x, y]) => shut += '<rect x="' + (x - 6) + '" y="' + y + '" width="5" height="26" fill="#1c1c1c"/><rect x="' + x + '" y="' + y + '" width="22" height="26" fill="#2b3a4a"/><path d="M' + (x + 11) + ' ' + y + 'v26M' + x + ' ' + (y + 13) + 'h22" stroke="#e9e6dc" stroke-width="1.5"/><rect x="' + (x + 23) + '" y="' + y + '" width="5" height="26" fill="#1c1c1c"/>');
    let colm = "";
    [158, 184, 216, 242].forEach(x => colm += '<rect x="' + (x - 5) + '" y="98" width="10" height="96" fill="#fbfaf5"/><rect x="' + (x - 7) + '" y="96" width="14" height="4" fill="#e3e0d4"/><rect x="' + (x - 7) + '" y="192" width="14" height="4" fill="#e3e0d4"/>');
    const leaves = ['<path class="leaf" d="M60 0q6-6 12 0q-6 6-12 0z" fill="#d9822b"/>', '<path class="leaf l2" d="M180 0q6-6 12 0q-6 6-12 0z" fill="#c4452a"/>',
      '<path class="leaf l3" d="M320 0q6-6 12 0q-6 6-12 0z" fill="#e8b84a"/>', '<path class="leaf l4" d="M380 0q6-6 12 0q-6 6-12 0z" fill="#d9822b"/>'].join("");
    return svg(
      '<rect width="400" height="260" fill="url(#skyJ)"/>' +
      /* trees */
      '<circle cx="34" cy="120" r="44" fill="#a8521f"/><circle cx="66" cy="96" r="30" fill="#c96a26"/><rect x="40" y="140" width="8" height="64" fill="#3a2516"/>' +
      '<circle cx="368" cy="116" r="42" fill="#b8862a"/><circle cx="340" cy="92" r="26" fill="#d9a03a"/><rect x="360" y="140" width="8" height="64" fill="#3a2516"/>' +
      /* the house */
      '<rect x="90" y="92" width="220" height="108" fill="#f3f1ea"/>' +
      '<rect x="86" y="86" width="228" height="8" fill="#dcd8cc"/>' +
      '<path d="M142 98L200 56L258 98z" fill="#fbfaf5" stroke="#cfcabd" stroke-width="2"/>' +
      '<circle cx="200" cy="82" r="7" fill="none" stroke="#cfcabd" stroke-width="2"/>' +
      '<rect x="150" y="94" width="100" height="6" fill="#e3e0d4"/>' +
      shut + colm +
      '<rect x="188" y="156" width="24" height="38" fill="#3a2a1a"/><path d="M188 156q12-12 24 0" fill="#e9e6dc"/>' +
      '<rect x="80" y="200" width="240" height="6" fill="#cfcabd"/>' +
      /* lawn, path and fence */
      '<path d="M0 206h400v54H0z" fill="#3f5a2a"/><path d="M188 206h24l26 54h-76z" fill="#b8a98a"/>' +
      (function () { let f = ""; for (let x = 0; x < 400; x += 10) f += '<rect x="' + x + '" y="226" width="2" height="22" fill="#111"/>'; return f + '<rect x="0" y="230" width="400" height="2" fill="#111"/>'; })() +
      leaves,
      sky("skyJ", "#5d8fc4", "#f2d7a8"));
  }

  /* 4. The Polo Grounds Towers on 155th: four tall red-brown brick towers where the old ballpark stood under Coogan's Bluff,
        the John T. Brush Stairway coming down the bluff, a ball sailing over like the old days */
  function polo() {
    const tower = (x, h) => {
      let w = '<rect x="' + x + '" y="' + (210 - h) + '" width="54" height="' + h + '" fill="#8a4630"/><rect x="' + (x + 18) + '" y="' + (204 - h) + '" width="18" height="8" fill="#6e3524"/>';
      for (let y = 216 - h; y < 200; y += 10) for (let c = 0; c < 4; c++) w += '<rect x="' + (x + 6 + c * 12) + '" y="' + y + '" width="6" height="5" fill="' + ((y + c * 7) % 3 ? "#ffe0a0" : "#3a1c12") + '"/>';
      return w;
    };
    let stair = "";
    for (let i = 0; i < 10; i++) stair += '<rect x="' + (14 + i * 9) + '" y="' + (120 + i * 9) + '" width="10" height="3" fill="#2b2f33"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#skyP)"/>' + stars(14) +
      /* the bluff and the stair */
      '<path d="M0 110q60 6 110 100H0z" fill="#26331f"/>' + stair +
      '<path d="M14 118l92 92" stroke="#3d4448" stroke-width="2"/>' +
      tower(124, 170) + tower(190, 184) + tower(256, 176) + tower(322, 164) +
      /* the ball */
      '<g class="ball"><circle cx="60" cy="200" r="5" fill="#fff"/><path d="M57 197q3 3 0 6M63 197q-3 3 0 6" stroke="#d33" stroke-width="1" fill="none"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2f3a28"/><path d="M110 260l90-40 90 40z" fill="#9a6a42" opacity=".7"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="3" fill="#f7f3ea">POLO GROUNDS</text>',
      sky("skyP", "#101a38", "#c96a4a"));
  }

  /* 5. The corner: W 155 St and Frederick Douglass Blvd, by the station — green street signs, a brick wall with his name sprayed on it, roses painted */
  function corner() {
    let brick = "";
    for (let y = 40; y < 200; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a3a28"/>';
    const rose = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + ROSE + '" stroke="#000" stroke-width="2"/><path d="M' + (x - 4) + ' ' + y + 'q4-6 8 0q-4 4-8 0" fill="none" stroke="#7a1030" stroke-width="1.5"/><path d="M' + x + ' ' + (y + 9) + 'v18" stroke="#2f8a3a" stroke-width="3"/><path d="M' + x + ' ' + (y + 18) + 'q6-6 10-2" fill="#2f8a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b0f0c"/>' +
      '<rect x="0" y="40" width="400" height="160" fill="#6a2a1c"/>' + brick +
      '<rect x="0" y="0" width="400" height="40" fill="url(#skyC)"/>' +
      tag("VINNY CHA$E", 118, 124, 36, CYAN, -7) +
      '<g class="drip"><rect x="150" y="122" width="4" height="22" fill="' + CYAN + '"/><rect x="236" y="112" width="4" height="30" fill="' + CYAN + '"/></g>' +
      tag("CHEERS CLUB", 150, 170, 26, GOLD, -3) + tag("LUXURY", 130, 194, 20, ROSE, 4) +
      rose(330, 150) + rose(362, 140) +
      '<circle class="spr" cx="250" cy="186" r="12" fill="' + CYAN + '" opacity=".4"/>' +
      '<rect x="42" y="30" width="6" height="190" fill="#4a5a4a"/>' +
      '<rect x="-4" y="30" width="104" height="24" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="48" y="47" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">W 155 St</text>' +
      '<rect x="-4" y="58" width="104" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="48" y="68" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#fff">Frederick Douglass</text>' +
      '<text x="48" y="77" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#fff">Blvd</text>' +
      '<rect x="0" y="200" width="400" height="14" fill="#9a9a9a"/><rect x="0" y="214" width="400" height="46" fill="#2b2d31"/>',
      sky("skyC", "#0f1a33", "#3a2a5a"));
  }

  window.SCENES = { train, edgecombe, jumel, polo, corner };
})();
