/* Wyandanch / Long Island opening scenes for the Rakim game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.gull{animation:glide 12s linear infinite}.gull2{animation-delay:-5s}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 5s linear infinite}.car2{animation-delay:-2.4s}' +
    '@keyframes back{from{transform:translateX(460px)}to{transform:translateX(-120px)}}' +
    '.carb{animation:back 6s linear infinite}.carb2{animation-delay:-3.1s}' +
    '@keyframes bob{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(3px) rotate(1.5deg)}}' +
    '.bob{transform-box:fill-box;transform-origin:50% 100%;animation:bob 3.2s ease-in-out infinite}.bob2{animation-delay:1.3s}' +
    '@keyframes sweep{0%,100%{opacity:0}40%,60%{opacity:.3}}' +
    '.beamL{animation:sweep 4s ease-in-out infinite}.beamR{animation:sweep 4s ease-in-out infinite;animation-delay:2s}' +
    '@keyframes surf{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.surf{animation:surf 4s ease-in-out infinite}.surf2{animation-delay:2s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const gull = (x, y, cls) => '<path class="gull ' + (cls || "") + '" d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" stroke="#f4f4f4" stroke-width="2" fill="none"/>';
  const GOLD = "#e8b84a", WHITE = "#ffffff", BLUE = "#3fa7d6", LIRR = "#0039a6";

  /* 1. LIRR Ronkonkoma Branch pulling into Wyandanch: at grade, new canopies, the overpass with its elevator towers */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let truss = "";
    for (let x = 96; x < 304; x += 16) truss += '<path d="M' + x + ' 30l8 14l8-14" stroke="#5a6b7c" stroke-width="2" fill="none"/>';
    let trees = "";
    for (let x = -10; x < 410; x += 26) trees += '<circle cx="' + x + '" cy="' + (104 + (x * 7) % 8) + '" r="' + (16 + (x * 3) % 7) + '" fill="#1f3326"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) +
      '<circle cx="350" cy="30" r="13" fill="#fff1d6" opacity=".9"/>' + trees +
      /* the pedestrian overpass with elevator towers at each end */
      '<rect x="64" y="22" width="30" height="104" fill="#4a5a6b"/><rect x="306" y="22" width="30" height="104" fill="#4a5a6b"/>' +
      '<rect x="70" y="30" width="18" height="30" fill="#9fc6e8" opacity=".35"/><rect x="312" y="30" width="18" height="30" fill="#9fc6e8" opacity=".35"/>' +
      '<rect x="94" y="28" width="212" height="18" fill="#3b4856"/>' + truss +
      '<rect x="94" y="26" width="212" height="4" fill="#6b7d8f"/>' +
      /* platform canopy */
      '<path d="M0 58h400v6H0z" fill="#2b3440"/><path d="M0 52l400 0 0 6H0z" fill="#56606c"/>' +
      '<rect x="30" y="64" width="5" height="64" fill="#2b3440"/><rect x="198" y="64" width="5" height="64" fill="#2b3440"/><rect x="366" y="64" width="5" height="64" fill="#2b3440"/>' +
      '<circle class="flk" cx="110" cy="68" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="290" cy="68" r="3" fill="#ffe7a8"/>' +
      /* LIRR station sign */
      '<rect x="96" y="70" width="208" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="95" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="19" fill="#fff">Wyandanch</text>' +
      '<text x="104" y="106" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#dbe6f3">RONKONKOMA BRANCH</text>' +
      '<rect x="262" y="98" width="36" height="10" rx="2" fill="' + LIRR + '"/><text x="280" y="106" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">LIRR</text>' +
      /* train slides in and stops: stainless electric car with a blue band */
      '<g class="anim-train">' +
        '<rect x="8" y="126" width="304" height="56" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="304" height="6" fill="' + LIRR + '"/>' + windows +
        '<path d="M300 130h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="174" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="177" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#334">LIRR · RONKONKOMA</text>' +
      '</g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1a1d22"/>' +
      tag("WYANDANCH", 22, 238, 28, GOLD, -4) + tag("THE R", 296, 242, 30, WHITE, -7),
      sky("g1", "#0d1430", "#5a4a7a"));
  }

  /* 2. Jones Beach: the water tower ("the Pencil"), tan brick shaft, arched belfry, green copper point; the surf rolling in */
  function jones() {
    let bricks = "";
    for (let y = 104; y < 196; y += 8) bricks += '<path d="M181 ' + y + 'h38" stroke="#a9744a" stroke-width="1" opacity=".55"/>';
    let arches = "";
    for (let i = 0; i < 3; i++) arches += '<path d="M' + (185 + i * 11) + ' 96v-12q4-6 8 0v12z" fill="#2b1d12"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="80" cy="48" r="20" fill="#fff4c8"/><circle cx="80" cy="48" r="34" fill="#fff4c8" opacity=".2"/>' +
      gull(20, 60) + gull(60, 40, "gull2") +
      /* the tower */
      '<path d="M200 6l-14 58h28z" fill="#5fa58a" stroke="#3b7a62" stroke-width="1.5"/><path d="M200 6l-4 58" stroke="#8fd1b6" stroke-width="1.5" opacity=".7"/>' +
      '<rect x="182" y="64" width="36" height="6" fill="#d9b48a"/>' +
      '<rect x="182" y="70" width="36" height="30" fill="#c9905e"/>' + arches +
      '<rect x="180" y="100" width="40" height="5" fill="#e6cfa8"/>' +
      '<path d="M181 105h38l3 92h-44z" fill="#c08458"/>' + bricks +
      '<path d="M191 110v84M209 110v84" stroke="#a9744a" stroke-width="2"/>' +
      '<rect x="174" y="192" width="52" height="12" fill="#e6cfa8"/>' +
      /* low wing buildings */
      '<rect x="120" y="186" width="54" height="18" fill="#c99a6c"/><rect x="226" y="186" width="54" height="18" fill="#c99a6c"/>' +
      /* ocean + surf */
      '<rect x="0" y="206" width="400" height="22" fill="#2f78a8"/>' +
      '<path class="surf" d="M-20 214q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8f6ff" stroke-width="3" fill="none"/>' +
      '<path class="surf surf2" d="M-10 222q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe4f7" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#e9d3a6"/>' +
      /* beach umbrella + towel */
      '<path d="M300 236v-30" stroke="#5a3a1a" stroke-width="2"/><path d="M276 210q24-20 48 0z" fill="#e8b84a"/><path d="M288 210q12-18 24 0z" fill="#ffffff" opacity=".7"/>' +
      '<rect x="60" y="240" width="40" height="12" rx="2" fill="#3fa7d6"/><rect x="60" y="244" width="40" height="3" fill="#fff"/>',
      sky("g2", "#7cc3ea", "#d8eef8"));
  }

  /* 3. The Long Island Expressway at night: green overhead sign, the 495 shield, headlights one way, taillights the other */
  function lie() {
    let lamps = "";
    for (let x = 30; x < 400; x += 90) lamps += '<rect x="' + x + '" y="96" width="3" height="80" fill="#2a2f36"/><path d="M' + (x + 1) + ' 98q10-8 20-4" stroke="#2a2f36" stroke-width="3" fill="none"/><circle class="flk" cx="' + (x + 21) + '" cy="96" r="3.5" fill="#ffc46b"/>';
    let trees = "";
    for (let x = -10; x < 410; x += 22) trees += '<circle cx="' + x + '" cy="' + (162 + (x * 5) % 8) + '" r="' + (14 + (x * 3) % 6) + '" fill="#132219"/>';
    const car = (cls, y, body, lights, front) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="14" rx="4" fill="' + body + '"/><rect x="8" y="' + (y - 7) + '" width="28" height="9" rx="3" fill="' + body + '"/>' +
      '<rect x="12" y="' + (y - 5) + '" width="9" height="6" fill="#9fc6e8" opacity=".6"/><rect x="24" y="' + (y - 5) + '" width="9" height="6" fill="#9fc6e8" opacity=".6"/>' +
      '<circle cx="' + (front ? 44 : 2) + '" cy="' + (y + 6) + '" r="3" fill="' + lights + '"/><circle cx="8" cy="' + (y + 15) + '" r="4" fill="#111"/><circle cx="38" cy="' + (y + 15) + '" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(20) + trees +
      /* overhead gantry */
      '<rect x="60" y="22" width="6" height="160" fill="#4a525c"/><rect x="334" y="22" width="6" height="160" fill="#4a525c"/>' +
      '<rect x="60" y="24" width="280" height="6" fill="#4a525c"/>' +
      '<rect x="92" y="30" width="216" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      /* interstate shield */
      '<path d="M110 44h34v14q0 14-17 20q-17-6-17-20z" fill="#1d3f9e" stroke="#fff" stroke-width="1.5"/><path d="M110 44h34v7h-34z" fill="#c8102e"/>' +
      '<text x="127" y="70" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">495</text>' +
      '<text x="156" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">EAST</text>' +
      '<text x="156" y="68" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Long Island Expwy</text>' +
      '<text x="156" y="84" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#fff">Riverhead</text>' +
      lamps +
      /* the road */
      '<rect x="0" y="176" width="400" height="84" fill="#25282d"/>' +
      '<rect x="0" y="214" width="400" height="5" fill="#8a8f96"/>' +
      '<path d="M0 196h400M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("car", 184, "#e8b84a", "#fff6c2", true) + car("car car2", 184, "#c9ced6", "#fff6c2", true) +
      car("carb", 228, "#3fa7d6", "#ff3b30", false) + car("carb carb2", 228, "#e6e1d6", "#ff3b30", false),
      sky("g3", "#070b18", "#24304f"));
  }

  /* 4. Long Island Sound at dusk: a white lighthouse on the North Shore bluff, sailboats, Connecticut across the water */
  function sound() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(8) +
      '<circle cx="300" cy="96" r="22" fill="#ffb347" opacity=".9"/>' +
      /* Connecticut shore far off */
      '<path d="M0 118l40-4 60 3 70-5 80 4 70-3 80 3v6H0z" fill="#3b3550" opacity=".8"/>' +
      '<rect x="0" y="122" width="400" height="138" fill="#1f4a6e"/>' +
      '<path class="shim" d="M270 132h60M260 146h80M280 160h44" stroke="#ffb347" stroke-width="3" opacity=".7"/>' +
      '<path class="shim shim2" d="M30 150h50M120 196h70M40 226h90M220 236h80" stroke="#8fb6dc" stroke-width="2" opacity=".5"/>' +
      /* bluff with the lighthouse */
      '<path d="M0 150q40-24 110-20l20 130H0z" fill="#3d5a2e"/><path d="M0 170q50-16 120-8l10 98H0z" fill="#6b5a3e"/>' +
      '<path class="beamL" d="M66 52L-40 28v46z" fill="#fff6c2"/><path class="beamR" d="M66 52L180 26v50z" fill="#fff6c2"/>' +
      '<path d="M56 134l4-74h12l4 74z" fill="#f4f1ea" stroke="#c9c2b4" stroke-width="1"/>' +
      '<rect x="56" y="58" width="20" height="4" fill="#222"/><rect x="59" y="46" width="14" height="12" fill="#fff6c2" class="flk"/>' +
      '<path d="M57 46h18l-9-9z" fill="#222"/><rect x="50" y="130" width="34" height="8" fill="#e6e1d6"/>' +
      '<rect x="84" y="122" width="22" height="16" fill="#e6e1d6"/><path d="M82 122h26l-13-8z" fill="#8b2c2c"/>' +
      /* sailboats */
      '<g class="bob"><path d="M200 196h50l-8 10h-34z" fill="#f4f1ea"/><path d="M224 194v-48l20 46z" fill="#ffffff"/><path d="M222 194v-40l-16 38z" fill="#e8b84a"/></g>' +
      '<g class="bob bob2"><path d="M320 214h36l-6 8h-24z" fill="#f4f1ea"/><path d="M338 212v-34l14 32z" fill="#ffffff"/><path d="M336 212v-28l-12 26z" fill="#3fa7d6"/></g>' +
      gull(150, 70) + gull(180, 90, "gull2"),
      sky("g4", "#141235", "#e07a5f"));
  }

  /* 5. The corner: Straight Path and Long Island Av, by the station, the crossing signal, a wall with the name on it */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="360" cy="34" r="14" fill="#fff1d6"/>' +
      /* brick wall with the tags */
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2a24"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a352c"/>'; return b; })() +
      tag("RAKIM", 30, 134, 46, WHITE, -7) + tag("ERIC B &amp; RA", 40, 180, 26, GOLD, -3) + tag("NO JOKE", 60, 210, 20, BLUE, -2) +
      /* railroad crossing signal */
      '<rect x="222" y="120" width="4" height="100" fill="#d9d9d9"/>' +
      '<path d="M206 112l36 20M242 112l-36 20" stroke="#fff" stroke-width="7"/><path d="M206 112l36 20M242 112l-36 20" stroke="#111" stroke-width="1" opacity=".4"/>' +
      '<rect x="210" y="140" width="28" height="12" rx="6" fill="#111"/><circle class="flk" cx="216" cy="146" r="4" fill="#ff3b30"/><circle class="flk flk2" cx="232" cy="146" r="4" fill="#ff3b30"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="258" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Straight Path</text>' +
      '<rect x="252" y="110" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Long Island Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a3a5a"));
  }

  window.SCENES = { train, jones, lie, sound, corner };
})();
