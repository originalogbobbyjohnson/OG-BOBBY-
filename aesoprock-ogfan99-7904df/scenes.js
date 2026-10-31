/* Northport, Long Island opening scenes for the Aesop Rock game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes plume{0%{transform:translate(0,0) scale(.6);opacity:0}25%{opacity:.85}100%{transform:translate(46px,-60px) scale(1.6);opacity:0}}' +
    '.pl{transform-box:fill-box;transform-origin:50% 100%;animation:plume 4.2s ease-out infinite}.pl2{animation-delay:1.4s}.pl3{animation-delay:2.8s}' +
    '@keyframes bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(3px) rotate(2deg)}}' +
    '.bob{transform-box:fill-box;transform-origin:50% 100%;animation:bob 3s ease-in-out infinite}.bob2{animation-delay:1.1s}.bob3{animation-delay:2s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes roll{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.car{animation:roll 7s linear infinite}' +
    '@keyframes skate{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}' +
    '.sk{animation:skate 6s linear infinite}' +
    '@keyframes shim{0%,100%{opacity:.25}50%{opacity:.7}}' +
    '.shim{animation:shim 2.4s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes drift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '.gull{animation:drift 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const LIRR = "#0039a6", SEA = "#7fd1b9", ORG = "#ff6b35", GOLD = "#f2d16b";
  /* little sailboat */
  const boat = (x, y, s, cls, hull) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="bob ' + cls + '">' +
      '<path d="M-22 0h44l-8 9h-28z" fill="' + hull + '"/><path d="M0 -2v-40" stroke="#ddd" stroke-width="1.6"/>' +
      '<path d="M2 -40l18 36H2z" fill="#f4f1e8"/><path d="M-2 -34l-14 30h14z" fill="#e6e2d6"/></g></g>';

  /* 1. Northport station on the LIRR Port Jefferson Branch: at-grade platform, the train rolling in */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="124" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let trees = "";
    for (let x = -10; x < 420; x += 38) trees += '<circle cx="' + x + '" cy="' + (100 + (x % 3) * 4) + '" r="' + (22 + (x % 4) * 2) + '" fill="#18332a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) +
      '<circle cx="340" cy="34" r="13" fill="#fff4dc" opacity=".9"/>' + trees +
      /* canopy and lights */
      '<path d="M0 26h400v8H0z" fill="#4b5560"/><path d="M0 34h400v3H0z" fill="#262d36"/>' +
      '<rect x="50" y="37" width="5" height="70" fill="#262d36"/><rect x="345" y="37" width="5" height="70" fill="#262d36"/>' +
      '<circle class="flk" cx="130" cy="42" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="270" cy="42" r="3" fill="#ffe7a8"/>' +
      /* station sign */
      '<rect x="96" y="50" width="208" height="44" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="77" text-anchor="middle" ' + F + ' font-weight="700" font-size="22" fill="#fff">Northport</text>' +
      '<text x="104" y="89" ' + F + ' font-size="7" fill="#dbe6f3">PORT JEFFERSON BRANCH</text>' +
      '<rect x="262" y="81" width="36" height="10" rx="2" fill="' + LIRR + '"/><text x="280" y="89" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">LIRR</text>' +
      /* train */
      '<g class="anim-train">' +
        '<rect x="8" y="114" width="304" height="56" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="148" width="304" height="6" fill="' + LIRR + '"/>' + windows +
        '<path d="M300 118h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="162" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="165" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#334">LIRR · PORT JEFFERSON</text>' +
      '</g>' +
      /* low platform, rails and ballast */
      '<rect x="0" y="170" width="400" height="4" fill="#e8c547"/>' +
      '<rect x="0" y="174" width="400" height="22" fill="#8d8b85"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a2621"/>' +
      '<path d="M0 214h400M0 236h400" stroke="#777" stroke-width="3"/>' +
      (function () { let t = ""; for (let x = 0; x < 400; x += 18) t += '<rect x="' + x + '" y="210" width="10" height="30" fill="#4a3a2a" opacity=".7"/>'; return t; })() +
      tag("WEATHERMEN", 22, 254, 22, SEA, -3) + tag("AES", 318, 252, 28, ORG, -8),
      sky("g1", "#0b1622", "#2d4a5e"));
  }

  /* 2. Northport Village Park: white gazebo on the harbor, sailboats bobbing at the docks */
  function harbor() {
    let rails = "";
    for (let x = 152; x <= 248; x += 12) rails += '<rect x="' + x + '" y="128" width="3" height="16" fill="#f4f1e8"/>';
    let ripples = "";
    for (let i = 0; i < 9; i++) ripples += '<path class="shim ' + (i % 2 ? "shim2" : "") + '" d="M' + (20 + i * 44) + ' ' + (200 + (i % 3) * 14) + 'h22" stroke="#cfe6ff" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="76" cy="58" r="22" fill="#ffd27a" opacity=".85"/>' +
      /* far shore + hills of Eatons Neck */
      '<path d="M0 150q60-24 130-8t140-6t130 4v20H0z" fill="#2f5a4a"/>' +
      '<rect x="0" y="158" width="400" height="102" fill="#1f5170"/>' + ripples +
      /* gazebo on the lawn */
      '<path d="M120 160h160v-6H120z" fill="#3e6f3a"/>' +
      '<rect x="146" y="140" width="108" height="8" fill="#e9e5da"/>' +
      '<rect x="150" y="96" width="5" height="46" fill="#f4f1e8"/><rect x="198" y="96" width="5" height="46" fill="#f4f1e8"/><rect x="245" y="96" width="5" height="46" fill="#f4f1e8"/>' + rails +
      '<path d="M140 98l60-30 60 30z" fill="#f4f1e8" stroke="#bdb6a6" stroke-width="1.5"/><path d="M196 70v-10h8v10" fill="#f4f1e8"/><path d="M200 60v-8" stroke="#bdb6a6" stroke-width="2"/>' +
      '<rect x="140" y="98" width="120" height="4" fill="#d9d2c2"/>' +
      /* dock */
      '<rect x="270" y="170" width="130" height="6" fill="#7a5a3a"/>' +
      '<rect x="290" y="170" width="4" height="22" fill="#5a3f28"/><rect x="340" y="170" width="4" height="22" fill="#5a3f28"/><rect x="390" y="170" width="4" height="22" fill="#5a3f28"/>' +
      boat(60, 196, 1, "", "#c64a3a") + boat(318, 214, .9, "bob2", "#2b4c7e") + boat(140, 232, .75, "bob3", "#f4f1e8") +
      '<path class="gull" d="M0 40q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '" opacity=".9">NORTHPORT HARBOR</text>',
      sky("g2", "#f08a5d", "#6a4f8a"));
  }

  /* 3. Main Street, Northport: old brick storefronts, the trolley tracks running down the hill to the harbor */
  function mainst() {
    const fronts = [["#8a3b2a", 0], ["#6e4a3a", 70], ["#9a5a3a", 140], ["#5a3a3a", 210], ["#8a4a2a", 280], ["#704030", 340]];
    let b = "";
    fronts.forEach(([c, x], i) => {
      const h = 64 + (i % 3) * 14, y = 150 - h;
      b += '<rect x="' + x + '" y="' + y + '" width="64" height="' + h + '" fill="' + c + '"/>' +
        '<rect x="' + (x - 2) + '" y="' + (y - 5) + '" width="68" height="6" fill="#3a2418"/>' +
        '<rect x="' + (x + 10) + '" y="' + (y + 10) + '" width="14" height="16" fill="#ffd98a" opacity=".55" class="flk ' + (i % 2 ? "flk2" : "") + '"/><rect x="' + (x + 38) + '" y="' + (y + 10) + '" width="14" height="16" fill="#ffd98a" opacity=".5"/>' +
        '<rect x="' + (x + 6) + '" y="118" width="52" height="28" fill="#2a3540"/><rect x="' + (x + 8) + '" y="120" width="48" height="16" fill="#ffe0a0" opacity=".45"/>' +
        '<path d="M' + (x + 4) + ' 116h56l-4 8H' + (x + 8) + 'z" fill="' + (i % 2 ? "#1f6b5a" : "#7a2a2a") + '"/>';
    });
    let lamps = "";
    [36, 196, 356].forEach(x => lamps += '<rect x="' + x + '" y="120" width="3" height="44" fill="#1b1b1b"/><circle class="flk" cx="' + (x + 1.5) + '" cy="118" r="5" fill="#ffe7a8"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(10) +
      '<path d="M0 86h400" stroke="#0b1622"/>' + b +
      '<rect x="0" y="146" width="400" height="12" fill="#9a958a"/>' + lamps +
      /* street sloping down, trolley tracks in the middle */
      '<path d="M0 158h400v102H0z" fill="#3a3a3e"/>' +
      '<path d="M170 158L120 260M186 158L156 260M214 158L244 260M230 158L280 260" stroke="#b9b4a8" stroke-width="3"/>' +
      '<path d="M178 158L138 260M222 158L262 260" stroke="#55555a" stroke-width="10" opacity=".5"/>' +
      '<g class="car"><rect x="0" y="196" width="54" height="20" rx="6" fill="' + SEA + '"/><rect x="10" y="186" width="32" height="14" rx="4" fill="' + SEA + '"/><rect x="14" y="189" width="11" height="9" fill="#cfe6ff"/><rect x="28" y="189" width="11" height="9" fill="#cfe6ff"/><circle cx="12" cy="217" r="6" fill="#111"/><circle cx="42" cy="217" r="6" fill="#111"/><circle cx="54" cy="204" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="138" y="80" width="124" height="22" rx="3" fill="#123" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '">MAIN STREET</text>',
      sky("g3", "#0b1622", "#2b3b5a"));
  }

  /* 4. The Northport Power Station across the bay: four tall striped stacks, plumes drifting, a skater on the seawall */
  function stacks() {
    let st = "";
    [210, 250, 290, 330].forEach((x, i) => {
      st += '<rect x="' + x + '" y="40" width="18" height="120" fill="#e6e3dc"/>' +
        '<rect x="' + x + '" y="40" width="18" height="8" fill="#d6332a"/><rect x="' + x + '" y="56" width="18" height="8" fill="#d6332a"/><rect x="' + x + '" y="72" width="18" height="8" fill="#d6332a"/>' +
        '<circle class="pl ' + ["", "pl2", "pl3", ""][i] + '" cx="' + (x + 9) + '" cy="32" r="10" fill="#e8eef2" opacity=".8"/>' +
        '<circle class="pl ' + ["pl3", "", "pl2", "pl3"][i] + '" cx="' + (x + 9) + '" cy="30" r="8" fill="#f4f7f9" opacity=".7"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="90" cy="60" r="18" fill="#fff3c4" opacity=".9"/>' + st +
      /* plant building */
      '<rect x="196" y="136" width="164" height="30" fill="#8a8f96"/><rect x="196" y="130" width="164" height="6" fill="#6b7078"/>' +
      '<path d="M0 166q100-12 200-2t200-2v14H0z" fill="#2f5a4a"/>' +
      '<rect x="0" y="172" width="400" height="48" fill="#1f5170"/>' +
      '<path class="shim" d="M20 186h40M120 196h50M250 184h40M330 200h40" stroke="#cfe6ff" stroke-width="1.5"/>' +
      '<path class="shim shim2" d="M70 206h30M200 210h40M300 190h20" stroke="#cfe6ff" stroke-width="1.5"/>' +
      /* seawall */
      '<rect x="0" y="220" width="400" height="40" fill="#6d6a62"/><rect x="0" y="218" width="400" height="5" fill="#9a958a"/>' +
      /* skater */
      '<g class="sk"><rect x="0" y="210" width="26" height="4" rx="2" fill="' + ORG + '"/><circle cx="5" cy="216" r="2.2" fill="#222"/><circle cx="21" cy="216" r="2.2" fill="#222"/>' +
        '<path d="M8 210l5-16M18 210l-5-16" stroke="#1d1d24" stroke-width="3"/><rect x="8" y="178" width="10" height="18" rx="3" fill="' + SEA + '"/><circle cx="13" cy="172" r="5" fill="#2a1d14"/>' +
        '<path d="M8 182l-8 6M18 182l8 6" stroke="' + SEA + '" stroke-width="3"/></g>' +
      '<text x="20" y="250" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + GOLD + '">NORTHPORT BAY</text>',
      sky("g4", "#3a6a8f", "#c7a46a"));
  }

  /* 5. The corner: Main St and Woodbine Av in Northport Village, a wall with the name tagged */
  function corner() {
    let bricks = "";
    for (let y = 40; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#5a2e22"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' + bricks +
      '<rect x="0" y="0" width="400" height="40" fill="url(#g5)"/>' +
      tag("AESOP ROCK", 22, 160, 40, SEA, -5) + tag("NONE SHALL PASS", 60, 198, 20, ORG, -3) + tag("AES", 30, 92, 26, GOLD, -10) +
      /* sidewalk */
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      /* signpost */
      '<rect x="350" y="58" width="5" height="152" fill="#4a5058"/>' +
      '<rect x="300" y="56" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="71" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Main St</text>' +
      '<rect x="300" y="80" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Woodbine Av</text>' +
      '<circle class="flk" cx="40" cy="30" r="6" fill="#ffe7a8"/>',
      sky("g5", "#0b1622", "#24364a"));
  }

  window.SCENES = { train, harbor, mainst, stacks, corner };
})();
