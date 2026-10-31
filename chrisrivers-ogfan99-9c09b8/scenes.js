/* South Bronx opening scenes for the Chris Rivers game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}25%{opacity:1}100%{transform:translateY(-44px);opacity:0}}' +
    '.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.thp{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes party{0%,100%{fill:#ff8c1a}33%{fill:#2f8fff}66%{fill:#e8303a}}' +
    '.pty{animation:party 1.5s steps(1) infinite}.pty2{animation-delay:.5s}.pty3{animation-delay:1s}' +
    '@keyframes sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}' +
    '.swy{transform-box:fill-box;transform-origin:50% 0;animation:sway 2.6s ease-in-out infinite}.swy2{animation-delay:.6s}.swy3{animation-delay:1.2s}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}' +
    '.fsh{animation:swim 2.4s ease-in-out infinite}.fsh2{animation-delay:1.2s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.2}}' +
    '.bulb{animation:chase .9s steps(1) infinite}.bulb2{animation-delay:.45s}' +
    '@keyframes ride{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.car{animation:ride 6s linear infinite}.car2{animation-delay:-3s;animation-direction:reverse}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}' +
    '.rpl{animation:ripple 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff8c1a", BLUE = "#2f8fff", RED = "#e8303a", SIX = "#00933c";

  /* 1. The 6 pulling into 3 Av–138 St, underground on the Pelham line in Mott Haven */
  function train() {
    let tiles = "";
    for (let y = 22; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#cbc3aa" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 22v96" stroke="#cbc3aa" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="104" width="8" height="8" fill="' + (x % 32 ? "#2f6b4f" : "#b8862e") + '"/>';
    let cols = "";
    [38, 362].forEach(x => cols += '<rect x="' + (x - 5) + '" y="16" width="10" height="164" fill="#1f2a24"/><rect x="' + (x - 8) + '" y="16" width="16" height="6" fill="#1f2a24"/>');
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#12110f"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#0b0b0a"/>' +
      '<rect class="flk" x="70" y="10" width="90" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="240" y="10" width="90" height="4" rx="2" fill="#fff6d8"/>' +
      '<rect x="0" y="16" width="400" height="104" fill="#e8dfc4"/>' + tiles + band +
      '<rect x="0" y="16" width="400" height="6" fill="#2f6b4f"/>' +
      /* station sign */
      '<rect x="100" y="40" width="200" height="38" rx="4" fill="#111"/>' +
      '<rect x="100" y="40" width="200" height="4" fill="#fff"/>' +
      '<text x="114" y="68" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">3 Av–138 St</text>' +
      bullet(276, 62, "6", SIX) +
      cols +
      /* the 6 slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(292, 140, "6", SIX) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1813"/>' +
      tag("OCD", 30, 238, 32, ORANGE, -4) + tag("DRAGON", 250, 240, 30, BLUE, -8));
  }

  /* 2. 1520 Sedgwick Avenue: the plain brick tower over the Harlem River where hip hop was born, the party still going */
  function sedgwick() {
    let wins = "";
    for (let y = 40; y < 186; y += 14) for (let x = 132; x < 262; x += 16) {
      const lit = ((x * 7 + y * 3) % 5) < 2;
      wins += '<rect x="' + x + '" y="' + y + '" width="9" height="8" fill="' + (lit ? "#ffd98a" : "#3a2a24") + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(24) +
      /* far shore + the Major Deegan */
      '<path d="M0 176h400v20H0z" fill="#1b2433"/><rect x="0" y="172" width="400" height="4" fill="#4b5668"/>' +
      /* the tower: tan-brown brick, flat roof */
      '<rect x="120" y="26" width="154" height="170" fill="#8b5a3c"/><rect x="120" y="26" width="154" height="6" fill="#6b4029"/>' +
      '<rect x="120" y="26" width="8" height="170" fill="#6b4029"/>' + wins +
      /* ground floor rec room with the party lights */
      '<rect x="140" y="182" width="114" height="14" fill="#1a0f0b"/>' +
      '<rect class="pty" x="146" y="185" width="22" height="8" fill="' + ORANGE + '"/><rect class="pty pty2" x="186" y="185" width="22" height="8" fill="' + BLUE + '"/><rect class="pty pty3" x="226" y="185" width="22" height="8" fill="' + RED + '"/>' +
      /* speaker stacks out front */
      '<rect x="60" y="146" width="40" height="50" rx="2" fill="#151515" stroke="#444" stroke-width="2"/><circle class="thp" cx="80" cy="162" r="10" fill="#2a2a2a" stroke="#666" stroke-width="2"/><circle cx="80" cy="186" r="5" fill="#2a2a2a" stroke="#666" stroke-width="1.5"/>' +
      '<rect x="294" y="146" width="40" height="50" rx="2" fill="#151515" stroke="#444" stroke-width="2"/><circle class="thp" cx="314" cy="162" r="10" fill="#2a2a2a" stroke="#666" stroke-width="2"/><circle cx="314" cy="186" r="5" fill="#2a2a2a" stroke="#666" stroke-width="1.5"/>' +
      '<text class="nt" x="74" y="140" font-family="Arial, sans-serif" font-size="18" fill="' + ORANGE + '">♪</text>' +
      '<text class="nt nt2" x="96" y="134" font-family="Arial, sans-serif" font-size="16" fill="#fff">♫</text>' +
      '<text class="nt nt3" x="306" y="140" font-family="Arial, sans-serif" font-size="18" fill="' + BLUE + '">♪</text>' +
      /* the Harlem River */
      '<rect x="0" y="196" width="400" height="64" fill="#13314f"/>' +
      '<g class="rpl"><path d="M20 212h40M110 222h50M220 214h40M300 230h60M60 242h50M180 238h40" stroke="#5a8fc0" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<path d="M150 200h94" stroke="#ffd98a" stroke-width="2" opacity=".35"/>' +
      /* the sign */
      '<rect x="12" y="20" width="96" height="58" rx="4" fill="#0d1b3d" stroke="' + ORANGE + '" stroke-width="2"/>' +
      '<text x="60" y="42" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="#fff">1520</text>' +
      '<text x="60" y="56" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" fill="#fff">SEDGWICK AV</text>' +
      '<text x="60" y="70" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="' + ORANGE + '">SINCE 1973</text>',
      sky("s2", "#070d1f", "#24365e"));
  }

  /* 3. The Grand Concourse: the Art Deco "Fish Building" with its sea mosaic, Walk of Fame banners on the poles */
  function concourse() {
    let deco = "";
    for (let y = 46; y < 150; y += 18) for (let x = 64; x < 340; x += 22) if (x < 146 || x > 240) deco += '<rect x="' + x + '" y="' + y + '" width="12" height="11" fill="#2b3a52"/>';
    const fish = (x, y, c, cls) => '<g class="fsh ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="10" ry="5" fill="' + c + '"/><path d="M' + (x - 9) + ' ' + y + 'l-7-5v10z" fill="' + c + '"/><circle cx="' + (x + 5) + '" cy="' + (y - 1) + '" r="1.2" fill="#0d1b3d"/></g>';
    const banner = (x, c, cls) => '<rect x="' + (x - 2) + '" y="96" width="4" height="124" fill="#1d2a24"/><circle cx="' + x + '" cy="94" r="5" fill="#1d2a24"/>' +
      '<g class="swy ' + cls + '"><rect x="' + (x + 2) + '" y="106" width="22" height="42" fill="' + c + '"/><path d="M' + (x + 13) + ' 118l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* the building: cream brick with the Deco setback and the gold trim */
      '<path d="M54 210V44h292v166z" fill="#eadfc2"/><path d="M150 44V22h100v22z" fill="#e2d3ad"/><path d="M170 22V10h60v12z" fill="#d8c79c"/>' +
      '<path d="M54 44h292M150 22h100M170 10h60" stroke="#c99a3a" stroke-width="3"/>' +
      '<path d="M54 56h292" stroke="#c99a3a" stroke-width="1.5"/>' + deco +
      /* the mosaic panel by the door: deep sea, fish swimming */
      '<rect x="160" y="96" width="80" height="114" fill="#1d6fa3" stroke="#c99a3a" stroke-width="3"/>' +
      '<path d="M160 190q20-10 40 0t40 0v20h-80z" fill="#1b8a6b"/>' +
      '<path d="M172 210q-4-20 4-40M186 210q4-24-4-46M228 210q4-22-4-40" stroke="#3fbf6a" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      fish(190, 120, ORANGE, "") + fish(212, 142, "#ffd23f", "fsh2") + fish(184, 162, RED, "fsh2") + fish(220, 112, "#7fe0ff", "") +
      '<path d="M176 210v-26a24 24 0 0 1 48 0v26z" fill="#0d1b3d" opacity=".55"/>' +
      /* sidewalk + the boulevard */
      '<rect x="0" y="210" width="400" height="12" fill="#b8b2a4"/><rect x="0" y="222" width="400" height="38" fill="#2a2d33"/>' +
      '<path d="M0 242h400" stroke="#fff" stroke-width="2" stroke-dasharray="18 14"/>' +
      banner(30, ORANGE, "") + banner(370, BLUE, "swy2") +
      '<rect x="40" y="14" width="100" height="20" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="90" y="28" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" textLength="88" lengthAdjust="spacingAndGlyphs" fill="#fff">Grand Concourse</text>',
      sky("g3", "#f29a52", "#ffd9a0"));
  }

  /* 4. The Hub, 3rd Avenue and 149th: the old Bronx Opera House marquee and the PUN tribute wall */
  function hub() {
    let bulbs = "";
    for (let x = 34; x < 176; x += 10) bulbs += '<circle class="bulb' + ((x / 10) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="122" r="2.2" fill="#ffe7a8"/>';
    let arches = "";
    [44, 84, 124].forEach(x => arches += '<path d="M' + x + ' 104V66a14 14 0 0 1 28 0v38z" fill="#2a1a12"/><path d="M' + x + ' 66a14 14 0 0 1 28 0" fill="none" stroke="#e6c79a" stroke-width="2"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#h4)"/>' + stars(18) +
      /* the Opera House: red brick, terracotta trim, arched windows */
      '<rect x="20" y="30" width="170" height="180" fill="#9a4a32"/><rect x="16" y="26" width="178" height="8" fill="#e6c79a"/>' +
      '<rect x="20" y="104" width="170" height="4" fill="#e6c79a"/>' + arches +
      /* marquee */
      '<rect x="26" y="112" width="158" height="30" fill="#14100c" stroke="#e6c79a" stroke-width="2"/>' + bulbs +
      '<text x="105" y="138" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="3" fill="' + ORANGE + '">OPERA HOUSE</text>' +
      '<rect x="80" y="160" width="50" height="50" fill="#2a1a12"/><rect x="82" y="162" width="22" height="48" fill="#ffd98a" opacity=".35"/><rect x="106" y="162" width="22" height="48" fill="#ffd98a" opacity=".35"/>' +
      /* the tribute wall: PUN in Puerto Rican flag colors under a crown */
      '<rect x="206" y="58" width="180" height="152" fill="#2b2f3a"/>' +
      '<rect x="214" y="66" width="164" height="136" fill="#0d1b3d"/>' +
      '<path d="M266 100V80l12 9 18-16 18 16 12-9v20z" fill="#ffd23f" stroke="#000" stroke-width="2"/>' +
      '<text x="296" y="160" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="56" fill="#fff" stroke="#000" stroke-width="6" paint-order="stroke">PUN</text>' +
      '<rect x="234" y="170" width="124" height="5" fill="' + RED + '"/><rect x="234" y="177" width="124" height="5" fill="#fff"/><rect x="234" y="184" width="124" height="5" fill="' + RED + '"/>' +
      '<path d="M234 170v19l22-9.5z" fill="#0050f0"/><circle cx="242" cy="179.5" r="2.4" fill="#fff"/>' +
      '<text x="296" y="198" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="' + ORANGE + '">FOREVER BRONX</text>' +
      /* the street with cars rolling */
      '<rect x="0" y="210" width="400" height="50" fill="#1a1c22"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="216" width="46" height="14" rx="5" fill="' + BLUE + '"/><circle cx="10" cy="231" r="4" fill="#111"/><circle cx="36" cy="231" r="4" fill="#111"/><circle cx="46" cy="222" r="2.5" fill="#fff6c2"/></g>' +
      '<g class="car car2"><rect x="0" y="242" width="46" height="14" rx="5" fill="' + RED + '"/><circle cx="10" cy="257" r="3.5" fill="#111"/><circle cx="36" cy="257" r="3.5" fill="#111"/><circle cx="0" cy="248" r="2.5" fill="#fff6c2"/></g>',
      sky("h4", "#0a1022", "#30254a"));
  }

  /* 5. East 138th Street and 3rd Avenue: street signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? 6 : 16; x < 230; x += 22) bricks += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#4a2a1e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(16) +
      '<rect x="0" y="30" width="260" height="40" fill="#1e1a22"/><rect x="0" y="26" width="260" height="6" fill="#3a3040"/>' +
      '<rect x="20" y="40" width="20" height="24" fill="#ffcf6b" opacity=".6"/><rect x="90" y="40" width="20" height="24" fill="#ffcf6b" opacity=".35"/><rect x="170" y="40" width="20" height="24" fill="#ffcf6b" opacity=".6"/>' +
      /* tag wall */
      '<rect x="6" y="70" width="244" height="150" fill="#3a2018"/>' + bricks +
      tag("RIVERS", 26, 146, 44, ORANGE, -7) + tag("SOUTH BRONX", 34, 196, 26, BLUE, -3) +
      /* subway entrance globe */
      '<rect x="262" y="160" width="4" height="60" fill="#1d2329"/><circle class="flk" cx="264" cy="156" r="7" fill="#3fd17a"/>' +
      '<rect x="262" y="196" width="40" height="24" fill="#1d2329"/><text x="282" y="212" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">SUBWAY</text>' +
      /* streetlight */
      '<rect x="330" y="50" width="5" height="170" fill="#1d2329"/><path d="M332 52h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk flk2" d="M348 56h24l-6 8h-12z" fill="#ffe7a8"/><g opacity=".14"><path class="flk flk2" d="M348 64h24l26 156h-80z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="292" y="86" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="334" y="99" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 138 St</text>' +
      '<rect x="300" y="108" width="68" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="334" y="121" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">3 Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("c5", "#0b1226", "#28304f"));
  }

  window.SCENES = { train, sedgwick, concourse, hub, corner };
})();
