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

  /* 2. The Big Pun memorial mural at Rogers Pl and Westchester Av in Longwood: his father's giant wall under the 2/5 el, the crown, the flag, the mic, the train rolling overhead */
  function sedgwick() {
    let el = "";
    for (let x = 0; x <= 400; x += 50) el += '<rect x="' + (x - 4) + '" y="30" width="8" height="200" fill="#3a4a3a"/>';
    let wins = "";
    for (let x = 12; x < 250; x += 40) wins += '<rect x="' + x + '" y="10" width="26" height="12" rx="2" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      /* the el over Westchester Av with the 2 rolling by */
      '<g class="car" style="animation-duration:9s"><rect x="0" y="4" width="270" height="24" rx="4" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' + wins +
      '<circle cx="256" cy="16" r="8" fill="#ee352e"/><text x="256" y="20" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">2</text></g>' +
      '<rect x="0" y="28" width="400" height="10" fill="#3a4a3a"/>' + el +
      /* the mural wall */
      '<rect x="40" y="48" width="320" height="170" fill="#7a3a28"/><rect x="48" y="56" width="304" height="154" fill="#0d1b3d"/>' +
      '<g class="rpl"><circle cx="200" cy="120" r="70" fill="' + ORANGE + '" opacity=".25"/></g>' +
      '<path d="M160 84V58l16 12 24-22 24 22 16-12v26z" fill="#ffd23f" stroke="#000" stroke-width="2"/>' +
      '<text x="200" y="140" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="52" fill="#fff" stroke="#000" stroke-width="6" paint-order="stroke">BIG PUN</text>' +
      /* Puerto Rican flag */
      '<rect x="140" y="154" width="120" height="6" fill="' + RED + '"/><rect x="140" y="160" width="120" height="6" fill="#fff"/><rect x="140" y="166" width="120" height="6" fill="' + RED + '"/><rect x="140" y="172" width="120" height="6" fill="#fff"/><rect x="140" y="178" width="120" height="6" fill="' + RED + '"/>' +
      '<path d="M140 154v30l30-15z" fill="#0050f0"/><circle cx="150" cy="169" r="3" fill="#fff"/>' +
      /* the mic on each side */
      [80, 320].map(x => '<rect x="' + (x - 7) + '" y="120" width="14" height="26" rx="7" fill="#9aa3ad" stroke="#000" stroke-width="1.5"/><rect x="' + (x - 2) + '" y="146" width="4" height="40" fill="#555"/>').join("") +
      '<text x="200" y="202" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="' + ORANGE + '">FOREVER · THE BRONX</text>' +
      '<g class="nt"><text x="70" y="110" font-size="16" fill="#ffd23f">&#9834;</text></g><g class="nt nt2"><text x="320" y="112" font-size="14" fill="#7fe0ff">&#9835;</text></g>' +
      '<rect x="0" y="218" width="400" height="42" fill="#1a1c22"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="8" y="230" width="150" height="20" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="83" y="244" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Rogers Pl · Westchester Av</text>' +
      tag("RIVERS", 284, 252, 24, ORANGE, -5),
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

  /* 4. The Hub, 3rd Avenue and 149th: the old Bronx Opera House marquee and the busy storefronts next door */
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
      /* the Hub next door: the busy 3rd Av storefronts under their signs */
      '<rect x="206" y="58" width="180" height="152" fill="#6a5a7a"/><rect x="202" y="54" width="188" height="6" fill="#4a3a5a"/>' +
      (function () { let w = ""; for (let y = 70; y < 140; y += 22) for (let x = 216; x < 380; x += 28) w += '<rect x="' + x + '" y="' + y + '" width="14" height="14" fill="' + ((x + y) % 3 ? "#2a2433" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="206" y="150" width="88" height="20" fill="' + ORANGE + '"/><rect x="298" y="150" width="88" height="20" fill="' + BLUE + '"/>' +
      '<text x="250" y="164" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">SNEAKERS</text><text x="342" y="164" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">RECORDS</text>' +
      '<rect class="flk" x="214" y="174" width="72" height="36" fill="#ffd98a" opacity=".5"/><rect class="flk flk2" x="306" y="174" width="72" height="36" fill="#ffd98a" opacity=".5"/>' +
      '<rect x="214" y="30" width="164" height="22" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="296" y="45" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">THE HUB · 149 ST &amp; 3 AV</text>' +
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

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: three-quarter corner view from the southeast over the Mott Haven rooftops, night game, every arch lit and the light banks pulsing, a plane crossing */
(function () {
  /* Y: little kit for drawing the stadium into the corner's sky. Every piece is plain SVG in the 400 x 260 frame. */
  const Y = (function () {
    const css = '<style>' +
      '@keyframes ysP{0%,100%{opacity:1}50%{opacity:.5}}.ysP{animation:ysP 1.8s ease-in-out infinite}' +
      '@keyframes ysF{0%{transform:scale(.1);opacity:0}12%{opacity:1}100%{transform:scale(1);opacity:0}}.ysF{transform-box:fill-box;transform-origin:50% 50%;animation:ysF 2.6s ease-out infinite}' +
      '@keyframes ysB{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ysB{transform-box:fill-box;transform-origin:50% 100%;animation:ysB 5s ease-in-out infinite}' +
      '@keyframes ysX{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ysX{animation:ysX 16s linear infinite}' +
      '@keyframes ysW{0%,100%{transform:skewY(0)}50%{transform:skewY(-14deg)}}.ysW{transform-box:fill-box;transform-origin:0 50%;animation:ysW 1.1s ease-in-out infinite}' +
      '@keyframes ysD{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.ysD{animation:ysD 9s ease-in-out infinite}' +
      '@keyframes ysS{from{transform:translateY(0)}to{transform:translateY(60px)}}.ysS{animation:ysS 3s linear infinite}.ysR{animation-duration:.7s}' +
      '@keyframes ysK{0%,100%{opacity:1}50%{opacity:.2}}.ysK{animation:ysK 1s steps(1) infinite}' +
      '</style>';
    const g = (x, y, s, inner) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + inner + '</g>';
    /* the white frieze: top rail, posts, and the arched openings hanging under it */
    const frieze = (x0, x1, y, k, c) => {
      let p = 'M' + x0 + ' ' + y + 'H' + x1;
      for (let x = x0; x < x1 - 0.1; x += k) p += 'M' + x + ' ' + y + 'v6M' + x + ' ' + (y + 4.5) + 'q' + (k / 2) + ' -5 ' + k + ' 0';
      return '<path d="' + p + 'M' + x1 + ' ' + y + 'v6" fill="none" stroke="' + (c || "#f4f1e8") + '" stroke-width="1.4"/>';
    };
    /* light banks on poles, with a soft glow */
    const lights = (xs, y, off) => xs.map((p, i) => { const x = p.length ? p[0] : p, yy = p.length ? p[1] : y;
      return '<g' + (off ? ' class="ysK" style="animation-duration:' + (2 + i * .7) + 's"' : '') + '><ellipse class="ysP" cx="' + x + '" cy="' + (yy - 11) + '" rx="11" ry="6" fill="#fff4c8" opacity=".24"/>' +
      '<path d="M' + x + ' ' + yy + 'v-8" stroke="#3a3f48" stroke-width="1.2"/><rect x="' + (x - 6) + '" y="' + (yy - 13) + '" width="12" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>' +
      '<path d="M' + (x - 2) + ' ' + (yy - 13) + 'v5M' + (x + 2) + ' ' + (yy - 13) + 'v5" stroke="#c9c3a8" stroke-width=".5"/></g>'; }).join("");
    /* the limestone face: tall arches either side of the big gate, a gold band over the gate (no lettering) */
    const face = (w, lit) => {
      const n = Math.max(2, Math.round((w - 36) / 2 / 20)), step = (w / 2 - 22) / n, aw = step * 0.6, gx = w / 2;
      let a = '<rect x="0" y="-58" width="' + w + '" height="58" fill="' + (lit ? "#e9dcb8" : "#d8cfba") + '"/>' +
        '<rect x="-2" y="-62" width="' + (w + 4) + '" height="5" fill="#f1ead8"/><rect x="0" y="-8" width="' + w + '" height="8" fill="#a99f8a"/>';
      for (let i = 0; i < n; i++) [6 + i * step, w - 6 - i * step - aw].forEach(x =>
        a += '<path d="M' + x.toFixed(1) + ' -8V-42a' + (aw / 2).toFixed(1) + ' ' + (aw / 2).toFixed(1) + ' 0 0 1 ' + aw.toFixed(1) + ' 0V-8z" fill="' + (lit ? "#ffcf78" : "#4a4652") + '"' + (lit ? ' opacity=".9"' : '') + '/>');
      a += '<path d="M' + (gx - 15) + ' -8V-38a15 15 0 0 1 30 0V-8z" fill="' + (lit ? "#ffe2a0" : "#3a3640") + '" stroke="#b8ad94" stroke-width="2"/>' +
        '<rect x="' + (gx - 20) + '" y="-56" width="40" height="5" fill="#c9a24a"/>';
      return a;
    };
    /* the upper deck behind the face, with the frieze riding on top and light banks above it */
    const deck = (w, lit, banks) => '<path d="M-4 -60L6 -74H' + (w - 6) + 'L' + (w + 4) + ' -60z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, w - 6, -80, 7) +
      '<path d="M6 -80H' + (w - 6) + '" stroke="#f4f1e8" stroke-width="2"/>' + lights(banks || [w * 0.2, w * 0.5, w * 0.8], -80);
    const halo = (c) => '<radialGradient id="ysH"><stop offset="0" stop-color="' + (c || "#ffe9b0") + '" stop-opacity=".55"/><stop offset="1" stop-color="' + (c || "#ffe9b0") + '" stop-opacity="0"/></radialGradient>';
    return {
      css,
      /* straight-on front: face + deck */
      front: (x, y, s, o) => g(x, y, s, deck(o.w || 200, o.lit, o.banks) + face(o.w || 200, o.lit)),
      /* three-quarter view: front face plus the long side running away to the right */
      corner3q: (x, y, s, o) => {
        const lit = o.lit;
        let side = '<path d="M120 -62L200 -50V-4L120 0z" fill="' + (lit ? "#cbbd99" : "#bdb4a0") + '"/><path d="M120 -62L200 -50" stroke="#f1ead8" stroke-width="4"/>';
        for (let i = 0; i < 5; i++) { const x0 = 128 + i * 15, x1 = x0 + 8, t0 = -55 + (x0 - 120) * 0.15, t1 = -55 + (x1 - 120) * 0.15, b0 = -8 + (x0 - 120) * 0.05;
          side += '<path d="M' + x0 + ' ' + b0 + 'V' + (t0 + 10) + 'Q' + ((x0 + x1) / 2) + ' ' + (t0 + 2) + ' ' + x1 + ' ' + (t1 + 10) + 'V' + (b0 - 0.4) + 'z" fill="' + (lit ? "#ffc865" : "#4a4652") + '"' + (lit ? ' opacity=".85"' : '') + '/>'; }
        const top = '<path d="M-4 -60L6 -74H120L200 -62V-50z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, 118, -80, 7) +
          '<path d="M118 -80L198 -68" stroke="#f4f1e8" stroke-width="2"/><path d="M118 -80L198 -68M126 -79v5M138 -77v5M150 -75v5M162 -74v5M174 -72v5M186 -70v5M198 -68v5" fill="none" stroke="#f4f1e8" stroke-width="1.2"/>' +
          '<path d="M6 -80H118" stroke="#f4f1e8" stroke-width="2"/>' + lights([30, 90, 150, 190], -78);
        return g(x, y, s, top + side + face(120, lit));
      },
      /* far off: a low dark mass, the frieze a thin bright lace on top, the lights glowing */
      far: (x, y, s, o) => { let ar = ""; for (let i = 0; i < 15; i++) ar += '<path d="M' + (16 + i * 11.6) + ' -3V-14a3 3 0 0 1 6 0V-3z" fill="' + (o.win ? "#ffcf78" : "#4a4652") + '"/>';
        return halo(o.hc) + g(x, y, s,
        '<ellipse class="ysP" cx="100" cy="-34" rx="' + (o.halo || 120) + '" ry="' + ((o.halo || 120) / 3) + '" fill="url(#ysH)"/>' +
        '<path d="M2 -18V-22Q100 -44 198 -22V-18z" fill="' + (o.c || "#2c3040") + '"/>' +
        '<path d="M6 -27Q100 -48 194 -27" fill="none" stroke="#f4f1e8" stroke-width="1.6"/><path d="M6 -24.5Q100 -45.5 194 -24.5" fill="none" stroke="#f4f1e8" stroke-width="4" stroke-dasharray="1.4 2.2" opacity=".85"/>' +
        lights([[30, -33], [72, -40], [128, -40], [170, -33]], 0, o.off) +
        '<rect x="8" y="-20" width="184" height="20" fill="' + (o.lime || "#c9c0aa") + '"/><rect x="6" y="-22" width="188" height="3" fill="#ece5d2"/>' + ar +
        '<path d="M92 -3V-15a8 8 0 0 1 16 0V-3z" fill="' + (o.win ? "#ffe2a0" : "#3a3640") + '"/><rect x="88" y="-19" width="24" height="3" fill="#c9a24a"/>'); },
      /* the city spread out below a high corner, for the views looking down */
      valley: (y0, c, w) => { let d = '<rect x="0" y="' + y0 + '" width="400" height="' + (226 - y0) + '" fill="' + c + '"/>'; for (let i = 0; i < 70; i++) d += '<rect x="' + ((i * 53) % 400) + '" y="' + (y0 + 4 + (i * 29) % (222 - y0)) + '" width="2" height="2" fill="' + (w || "#ffd98a") + '" opacity=".6"/>'; return d; },
      /* from up on the Highbridge bluff: down into the bowl */
      bowl: (cx, cy, s, o) => {
        let b = '<ellipse rx="100" ry="36" fill="#d8cfba"/><ellipse rx="93" ry="32" fill="#2c4470"/><ellipse rx="80" ry="27" cy="2" fill="#3b5d96"/>' +
          '<ellipse rx="66" ry="21" cy="4" fill="' + (o.day ? "#3fa34a" : "#2f9a3e") + '"/><ellipse rx="54" ry="16" cy="5" fill="none" stroke="#4fb85a" stroke-width="5" opacity=".6"/>' +
          '<path d="M0 22L18 13L0 6L-18 13z" fill="#c08850"/><path d="M0 18L11 13L0 9L-11 13z" fill="#3fa34a"/>' +
          '<rect x="-1.5" y="20.5" width="3" height="3" fill="#fff"/><rect x="16.5" y="11.5" width="3" height="3" fill="#fff"/><rect x="-1.5" y="4.5" width="3" height="3" fill="#fff"/><rect x="-19.5" y="11.5" width="3" height="3" fill="#fff"/>' +
          '<ellipse rx="97" ry="34" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-dasharray="1.4 1.8"/><ellipse rx="98" ry="35" fill="none" stroke="#f4f1e8" stroke-width="1"/>' +
          '<rect x="-20" y="-38" width="40" height="12" fill="#14161c"/><g class="ysK"><path d="M-16 -34h14M2 -34h14M-16 -30h26" stroke="#7fd4ff" stroke-width="1.6"/></g>';
        [[-90, -12], [-50, -32], [50, -32], [90, -12], [-80, 20], [80, 20]].forEach(p => b += '<circle class="ysP" cx="' + p[0] + '" cy="' + (p[1] - 6) + '" r="9" fill="#fff4c8" opacity=".3"/><rect x="' + (p[0] - 5) + '" y="' + (p[1] - 9) + '" width="10" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>');
        return g(cx, cy, s, b);
      },
      /* light in the sky: the horizon tint for dusk, dawn, golden afternoon */
      tint: (top, bottom, y0) => '<linearGradient id="ysT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '" stop-opacity="0"/><stop offset="1" stop-color="' + bottom + '" stop-opacity=".85"/></linearGradient>' +
        '<rect x="0" y="' + (y0 || 0) + '" width="400" height="' + (226 - (y0 || 0)) + '" fill="url(#ysT)"/>',
      halo,
      clouds: (list, c) => list.map((p, i) => '<g class="ysD" style="animation-delay:-' + (i * 3) + 's"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/><ellipse cx="' + (p[0] + p[2] * .3) + '" cy="' + (p[1] - p[2] / 6) + '" rx="' + (p[2] * .5) + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/></g>').join(""),
      plane: (y, dur) => '<g class="ysX" style="animation-duration:' + (dur || 16) + 's"><path d="M0 ' + y + 'h16l4 -2h-6l-5 -5h-3l3 5h-9z" fill="#2a2d36"/><circle class="ysK" cx="2" cy="' + y + '" r="1.6" fill="#ff4a4a"/><circle cx="17" cy="' + y + '" r="1.2" fill="#fff"/></g>',
      blimp: (x, y) => '<g class="ysD"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#d9dde3" stroke="#6b7280" stroke-width="1"/><path d="M' + (x + 22) + ' ' + y + 'l10 -8v16z" fill="#9aa1aa"/><rect x="' + (x - 6) + '" y="' + (y + 8) + '" width="12" height="4" rx="1" fill="#3a3f48"/>' +
        '<rect class="ysK" x="' + (x - 16) + '" y="' + (y - 2) + '" width="28" height="4" rx="2" fill="#ffd66b"/></g>',
      fireworks: (list) => list.map((p, i) => { let r = ""; for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; r += 'M' + p[0] + ' ' + p[1] + 'l' + (Math.cos(a) * p[2]).toFixed(1) + ' ' + (Math.sin(a) * p[2]).toFixed(1); }
        return '<path class="ysF" style="animation-delay:-' + (i * 0.9) + 's" d="' + r + '" stroke="' + p[3] + '" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2"/>'; }).join(""),
      beams: (list) => list.map((p, i) => '<path class="ysB" style="animation-delay:-' + (i * 2.4) + 's" d="M' + p[0] + ' ' + p[1] + 'l-9 -' + p[2] + 'h18z" fill="#fff6d8" opacity=".16"/>').join(""),
      birds: (x, y) => '<g class="ysX" style="animation-duration:22s"><path d="M' + x + ' ' + y + 'q3 -3 6 0q3 -3 6 0M' + (x + 14) + ' ' + (y - 6) + 'q2 -2 4 0q2 -2 4 0M' + (x - 10) + ' ' + (y - 4) + 'q2 -2 4 0q2 -2 4 0" fill="none" stroke="#22252e" stroke-width="1.3"/></g>',
      flags: (list) => list.map((p, i) => '<path d="M' + p[0] + ' ' + p[1] + 'v-' + p[2] + '" stroke="#e6e6e6" stroke-width="1"/><g class="ysW" style="animation-delay:-' + (i * 0.3) + 's"><rect x="' + p[0] + '" y="' + (p[1] - p[2]) + '" width="' + (p[2] * .6) + '" height="' + (p[2] * .38) + '" fill="' + (i % 2 ? "#1f3a8a" : "#e8303a") + '"/><path d="M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .13) + 'h' + (p[2] * .6) + 'M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .26) + 'h' + (p[2] * .6) + '" stroke="#fff" stroke-width=".8"/></g>').join(""),
      /* an el: girder, posts, and a 4 (or 5) train rolling across it */
      el: (x0, x1, y, s, n) => {
        let p = '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + (4 * s) + '" fill="#2f3a33"/>';
        for (let x = x0 + 6; x < x1; x += 26 * s) p += '<rect x="' + x + '" y="' + y + '" width="' + (2 * s) + '" height="' + (40 * s) + '" fill="#2f3a33"/>';
        let cars = ""; for (let c = 0; c < 3; c++) cars += '<rect x="' + (c * 34 * s) + '" y="' + (y - 11 * s) + '" width="' + (32 * s) + '" height="' + (11 * s) + '" rx="' + (2 * s) + '" fill="#c3c8cf" stroke="#6b7280" stroke-width=".8"/><path d="M' + (c * 34 * s + 4 * s) + ' ' + (y - 7 * s) + 'h' + (24 * s) + '" stroke="#ffe9b0" stroke-width="' + (3 * s) + '" stroke-dasharray="' + (4 * s) + ' ' + (2 * s) + '"/>';
        return p + '<g class="ysX" style="animation-duration:11s">' + cars + '<circle cx="' + (96 * s) + '" cy="' + (y - 5.5 * s) + '" r="' + (4.5 * s) + '" fill="#00933c"/><text x="' + (96 * s) + '" y="' + (y - 3.3 * s) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (6 * s) + '" fill="#fff">' + (n || "4") + '</text></g>';
      },
      /* falling weather, looped in a box: rain streaks or snow */
      weather: (x, y, w, h, kind) => { let d = ""; for (let i = 0; i < Math.round(w * 60 / 300); i++) { const px = x + (i * 37) % w, py0 = (i * 23) % 60;
        for (let py = y - 60 + py0; py < y + h; py += 60) d += kind === "snow" ? '<circle cx="' + px + '" cy="' + py + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".85"/>' : '<path d="M' + px + ' ' + py + 'l-2 9" stroke="#b9c8dc" stroke-width="1" opacity=".6"/>'; }
        return '<clipPath id="ysC"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/></clipPath><g clip-path="url(#ysC)"><g class="ysS' + (kind === "snow" ? "" : " ysR") + '">' + d + '</g></g>'; },
      fog: (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" opacity=".38"/><g class="ysD"><ellipse cx="' + (x + w * .3) + '" cy="' + (y + h * .55) + '" rx="' + (w * .4) + '" ry="' + (h * .18) + '" fill="' + c + '" opacity=".45"/><ellipse cx="' + (x + w * .75) + '" cy="' + (y + h * .35) + '" rx="' + (w * .35) + '" ry="' + (h * .14) + '" fill="' + c + '" opacity=".4"/></g>',
      moon: (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 8) + '" fill="#fff1d6" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff1d6"/><circle cx="' + (x - r * .3) + '" cy="' + (y - r * .2) + '" r="' + (r * .2) + '" fill="#e8dcc0"/><circle cx="' + (x + r * .35) + '" cy="' + (y + r * .3) + '" r="' + (r * .14) + '" fill="#e8dcc0"/>',
      river: (x0, x1, y, h) => '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + h + '" fill="#1c2a44"/><g class="ysD"><path d="M' + (x0 + 10) + ' ' + (y + 3) + 'h30M' + (x0 + 70) + ' ' + (y + 6) + 'h22M' + (x0 + 130) + ' ' + (y + 4) + 'h26" stroke="#ffcf78" stroke-width="1.4" opacity=".7"/></g>'
    };
  })();
  const base = window.SCENES.corner;
  window.SCENES.corner = function () {
    const art = '<g>' + Y.css +
      Y.corner3q(258, 218, 1.08, { lit: true }) + Y.plane(40, 18) + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
