/* Queensbridge opening scenes for the Cormega game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes win{0%,48%{opacity:.15}50%,100%{opacity:1}}' +
    '.wn{animation:win 4s steps(1) infinite}.wn2{animation-delay:1.3s}.wn3{animation-delay:2.6s}' +
    '@keyframes fly{0%{transform:translate(0,0)}50%{transform:translate(120px,-14px)}100%{transform:translate(240px,0)}}' +
    '.fly{animation:fly 8s linear infinite}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.flp{transform-box:fill-box;transform-origin:50% 100%;animation:flap .4s infinite}' +
    '@keyframes tram{0%{transform:translate(0,0)}100%{transform:translate(300px,-62px)}}' +
    '.trm{animation:tram 9s linear infinite}' +
    '@keyframes cars{from{transform:translateX(-40px)}to{transform:translateX(420px)}}' +
    '.car{animation:cars 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}' +
    '.rip{animation:ripple 3s ease-in-out infinite}.rip2{animation-delay:-1.5s}' +
    '@keyframes boat{from{transform:translateX(-90px)}to{transform:translateX(480px)}}' +
    '.bt{animation:boat 16s linear infinite}' +
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
  const BRICK = "#e0533b", GOLD = "#f2c14e", STEEL = "#8fb8d8", ORANGE = "#ff6319";

  /* 1. F train pulling into 21 St-Queensbridge, deep underground under 41st Av */
  function train() {
    let tiles = "";
    for (let y = 0; y < 176; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfc8ba" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v176" stroke="#cfc8ba" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [26, 374].forEach(x => { cols += '<rect x="' + (x - 7) + '" y="0" width="14" height="186" fill="#2b2b30"/>'; });
    return svg(
      '<rect width="400" height="176" fill="#e6e0d2"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#1c1c20"/>' +
      '<rect class="flk" x="50" y="4" width="70" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="250" y="4" width="70" height="4" rx="2" fill="#fffbe6"/>' +
      /* orange accent band */
      '<rect x="0" y="22" width="400" height="10" fill="' + ORANGE + '"/><rect x="0" y="32" width="400" height="3" fill="#7a2a0c"/>' +
      /* station sign */
      '<rect x="60" y="46" width="280" height="36" rx="4" fill="#111"/><rect x="60" y="46" width="280" height="4" fill="#fff"/>' +
      '<text x="74" y="72" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">21 St-Queensbridge</text>' +
      bullet(318, 65, "F", ORANGE) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + ORANGE + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(292, 132, "F", ORANGE) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#1a1716"/>' + cols +
      tag("QB", 34, 242, 34, BRICK, -5) + tag("MEGA", 270, 242, 34, GOLD, -8),
      "");
  }

  /* 2. The Queensbridge Houses: red-brick Y-shaped six-story buildings, windows lighting up, pigeons flying over */
  function houses() {
    /* one Y building: center wing facing us, two angled wings */
    const bldg = (cx, base, s) => {
      const h = 120 * s, w = 70 * s, wing = 50 * s;
      let o = '';
      o += '<path d="M' + (cx - w / 2) + ' ' + base + 'v-' + (h - 8 * s) + 'l-' + wing + ' -' + (14 * s) + 'v' + (h + 6 * s) + 'z" fill="#7d2f20"/>';
      o += '<path d="M' + (cx + w / 2) + ' ' + base + 'v-' + (h - 8 * s) + 'l' + wing + ' -' + (14 * s) + 'v' + (h + 6 * s) + 'z" fill="#8c3626"/>';
      o += '<rect x="' + (cx - w / 2) + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#a8452f"/>';
      o += '<rect x="' + (cx - w / 2 - 2) + '" y="' + (base - h - 4) + '" width="' + (w + 4) + '" height="5" fill="#d9cdb8"/>';
      for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) {
        const x = cx - w / 2 + 8 * s + c * 15 * s, y = base - h + 10 * s + r * 18 * s;
        const k = (r * 4 + c) % 7;
        o += '<rect class="' + (k === 2 ? "wn" : k === 5 ? "wn wn2" : k === 0 ? "wn wn3" : "") + '" x="' + x + '" y="' + y + '" width="' + (8 * s) + '" height="' + (10 * s) + '" fill="' + (k % 3 ? "#ffd98a" : "#3a2420") + '"/>';
      }
      for (let r = 0; r < 6; r++) for (let c = 0; c < 2; c++) {
        o += '<rect x="' + (cx - w / 2 - wing + 12 * s + c * 18 * s) + '" y="' + (base - h + 4 * s + r * 18 * s) + '" width="' + (7 * s) + '" height="' + (9 * s) + '" fill="#4a2018"/>';
        o += '<rect x="' + (cx + w / 2 + 14 * s + c * 18 * s) + '" y="' + (base - h + 4 * s + r * 18 * s) + '" width="' + (7 * s) + '" height="' + (9 * s) + '" fill="' + ((r + c) % 2 ? "#ffd98a" : "#4a2018") + '"/>';
      }
      o += '<rect x="' + (cx - 9 * s) + '" y="' + (base - 18 * s) + '" width="' + (18 * s) + '" height="' + (18 * s) + '" fill="#2a1410"/><rect x="' + (cx - 12 * s) + '" y="' + (base - 21 * s) + '" width="' + (24 * s) + '" height="4" fill="#d9cdb8"/>';
      return o;
    };
    const bird = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><path class="flp" d="M0 0q5-5 10 0q5-5 10 0" stroke="#111" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(14) +
      '<circle cx="342" cy="40" r="14" fill="#ffe8b8" opacity=".9"/>' +
      bldg(90, 212, 0.75) + bldg(300, 212, 0.75) + bldg(196, 226, 0.95) +
      '<rect x="0" y="222" width="400" height="38" fill="#2a2a2a"/>' +
      '<path d="M0 230h400" stroke="#3d3d3d" stroke-width="2"/>' +
      /* benches + trees on the path */
      '<circle cx="30" cy="214" r="16" fill="#1f4a2a"/><rect x="28" y="214" width="4" height="14" fill="#2a1a10"/>' +
      '<circle cx="372" cy="214" r="16" fill="#1f4a2a"/><rect x="370" y="214" width="4" height="14" fill="#2a1a10"/>' +
      '<g class="fly">' + bird(10, 70) + bird(34, 60) + bird(22, 84) + '</g>' +
      tag("THE REALNESS", 120, 252, 22, GOLD, -3),
      sky("g2", "#0f1a33", "#c26a4a"));
  }

  /* 3. The Queensboro Bridge's gray steel cantilever trusses and spired towers, the red Roosevelt Island Tram cabin gliding up beside it */
  function bridge() {
    const top = (a, b, t) => 40 + 70 * 4 * (t - 0.5) * (t - 0.5) * 0 + (1 - Math.pow(2 * t - 1, 2)) * 62;
    /* each span: top chord sags from the tower tops (y 40) to mid-span (y 102), deck chord at y 132, dense X lattice between */
    const span = (a, b) => {
      const n = 10; let pts = [], lat = '';
      for (let i = 0; i <= n; i++) { const t = i / n; pts.push([a + (b - a) * t, top(a, b, t)]); }
      let poly = 'M' + pts.map(p => p[0] + ' ' + p[1]).join(' L') + ' L' + b + ' 132 L' + a + ' 132z';
      for (let i = 0; i < n; i++) {
        const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
        lat += '<path d="M' + x1 + ' ' + y1 + 'V132M' + x1 + ' ' + y1 + 'L' + x2 + ' 132M' + x2 + ' ' + y2 + 'L' + x1 + ' 132" stroke="#7d868b" stroke-width="1.6"/>';
      }
      return '<path d="' + poly + '" fill="#9aa3a8" opacity=".18"/>' + lat +
        '<path d="M' + pts.map(p => p[0] + ' ' + p[1]).join(' L') + '" fill="none" stroke="#a9b1b5" stroke-width="5" stroke-linejoin="round"/>';
    };
    const tower = x => '<path d="M' + (x - 10) + ' 190V44h20v146z" fill="#8a9196"/>' +
      '<path d="M' + (x - 10) + ' 60l20 20M' + (x + 10) + ' 60l-20 20M' + (x - 10) + ' 90l20 20M' + (x + 10) + ' 90l-20 20" stroke="#6d7579" stroke-width="2"/>' +
      '<path d="M' + (x - 13) + ' 44h26l-4-6h-18z" fill="#a9b1b5"/>' +
      '<path d="M' + (x - 8) + ' 38l2-14h4l2 14zM' + (x + 2) + ' 38l2-14h4l2 14z" fill="#a9b1b5"/>' +
      '<path d="M' + (x - 6) + ' 24l2-8 2 8zM' + (x + 4) + ' 24l2-8 2 8z" fill="#a9b1b5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(20) +
      '<path d="M0 190V170h20v-24h14v24h16v-36h12v36h20v-18h16v18h40v-10h20v10h220v20z" fill="#1c2540"/>' +
      span(-50, 115) + span(115, 285) + span(285, 450) + tower(115) + tower(285) +
      '<rect x="0" y="130" width="400" height="10" fill="#6d7579"/><rect x="0" y="140" width="400" height="3" fill="#4d5458"/>' +
      '<g class="car"><rect x="0" y="125" width="16" height="6" rx="2" fill="#ffe7a8"/></g><g class="car car2"><rect x="0" y="125" width="16" height="6" rx="2" fill="#ff7a6b"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#0e2236"/>' +
      '<g class="rip"><path d="M10 206h40M120 216h50M230 204h44M320 222h50" stroke="#2d5a80" stroke-width="2"/></g>' +
      '<g class="rip rip2"><path d="M60 232h44M180 240h40M290 236h50" stroke="#2d5a80" stroke-width="2"/></g>' +
      '<rect x="105" y="186" width="20" height="8" fill="#5a6064"/><rect x="275" y="186" width="20" height="8" fill="#5a6064"/>' +
      '<path d="M30 238L400 156" stroke="#c9ced6" stroke-width="1.2"/><path d="M30 242L400 160" stroke="#c9ced6" stroke-width="1"/>' +
      '<g class="trm"><g transform="translate(40 206)">' +
        '<path d="M14 -2v-10" stroke="#c9ced6" stroke-width="2"/><rect x="6" y="-14" width="16" height="4" fill="#c9ced6"/>' +
        '<rect x="0" y="0" width="30" height="22" rx="3" fill="#d7262e" stroke="#7a0e12" stroke-width="1.5"/>' +
        '<rect x="3" y="4" width="10" height="9" rx="1" fill="#dff1ff"/><rect x="16" y="4" width="10" height="9" rx="1" fill="#dff1ff"/>' +
      '</g></g>' +
      '<rect x="300" y="226" width="92" height="26" rx="3" fill="#111" opacity=".85"/>' +
      '<text x="346" y="237" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" letter-spacing="1.5" fill="' + STEEL + '">59TH STREET</text>' +
      '<text x="346" y="248" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" letter-spacing="1.5" fill="' + STEEL + '">BRIDGE</text>',
      sky("g3", "#070d1c", "#29345a"));
  }

  /* 4. Queensbridge Park waterfront: railing, lampposts, the Manhattan skyline across the East River, a boat going by */
  function park() {
    let sky1 = '';
    [[0, 120, 26], [26, 96, 18], [44, 132, 30], [74, 80, 20], [94, 110, 24], [118, 70, 16], [134, 104, 30], [164, 88, 22], [186, 124, 26], [212, 60, 18], [230, 96, 24], [254, 116, 30], [284, 84, 20], [304, 108, 28], [332, 92, 22], [354, 120, 26], [380, 100, 20]].forEach(([x, y, w], i) => {
      sky1 += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (160 - y) + '" fill="' + (i % 2 ? "#1d2747" : "#232e52") + '"/>';
      for (let r = y + 6; r < 156; r += 9) for (let c = x + 3; c < x + w - 3; c += 6) if ((r + c + i) % 4 === 0) sky1 += '<rect class="' + ((r + c) % 3 ? "" : "wn wn2") + '" x="' + c + '" y="' + r + '" width="3" height="4" fill="#ffd98a"/>';
    });
    sky1 += '<path d="M218 60l3-14 3 14z" fill="#232e52"/>';
    let rail = '';
    for (let x = 0; x <= 400; x += 16) rail += '<rect x="' + x + '" y="196" width="2.5" height="24" fill="#1a1a1a"/>';
    const lamp = x => '<rect x="' + (x - 2) + '" y="150" width="4" height="70" fill="#1a1a1a"/><circle class="flk" cx="' + x + '" cy="148" r="6" fill="#fff0c2"/><circle cx="' + x + '" cy="148" r="14" fill="#fff0c2" opacity=".15"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(16) +
      '<circle cx="64" cy="40" r="18" fill="#f4f0e2"/>' + sky1 +
      '<rect x="0" y="160" width="400" height="36" fill="#0d1f33"/>' +
      '<g class="rip"><path d="M20 170h40M140 178h50M260 172h44" stroke="#ffd98a" stroke-width="1.5" opacity=".5"/></g>' +
      '<g class="rip rip2"><path d="M80 186h36M200 188h40M320 184h50" stroke="#ffd98a" stroke-width="1.5" opacity=".4"/></g>' +
      '<g class="bt"><path d="M0 172h44l-6 8h-32z" fill="#e8e3d6"/><rect x="12" y="164" width="18" height="8" fill="#e8e3d6"/><circle cx="36" cy="168" r="2" fill="#ffe7a8"/></g>' +
      '<rect x="0" y="196" width="400" height="3" fill="#1a1a1a"/><rect x="0" y="206" width="400" height="2" fill="#1a1a1a"/>' + rail +
      '<rect x="0" y="220" width="400" height="40" fill="#2c3a2a"/><rect x="0" y="220" width="400" height="6" fill="#4a5a44"/>' +
      lamp(60) + lamp(340) +
      '<rect x="130" y="230" width="140" height="22" rx="3" fill="#1f5a32" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="200" y="245" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Queensbridge Park</text>',
      sky("g4", "#060b18", "#24305a"));
  }

  /* 5. 21st St and 41st Av: street signs, the F entrance globe, the tag wall */
  function corner() {
    let bricks = '';
    for (let y = 72; y < 218; y += 12) for (let x = ((y - 72) / 12) % 2 ? 22 : 36; x < 222; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#8c3626"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="20" y="70" width="230" height="150" fill="#6e2a1e"/>' + bricks +
      tag("CORMEGA", 34, 140, 36, GOLD, -7) + tag("LEGAL HUSTLE", 40, 196, 24, BRICK, -3) +
      /* subway entrance globes */
      '<rect x="262" y="150" width="4" height="70" fill="#1d2329"/><circle class="flk" cx="264" cy="146" r="7" fill="#3fbf5a"/>' +
      /* streetlight with flicker */
      '<rect x="320" y="56" width="5" height="164" fill="#1d2329"/><path d="M322 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M338 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M338 70l26 0 30 150h-90z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="282" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="322" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">21 St</text>' +
      '<rect x="282" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="322" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">41 Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1630", "#3a2a40"));
  }

  window.SCENES = { train, houses, bridge, park, corner };
})();
