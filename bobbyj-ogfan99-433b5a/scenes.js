/* Rockaway opening scenes for the Bobby J From Rockaway game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes fly{0%{transform:translate(0,0)}50%{transform:translate(140px,-16px)}100%{transform:translate(280px,0)}}' +
    '.fly{animation:fly 9s linear infinite}.fly2{animation-delay:-4s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.flp{transform-box:fill-box;transform-origin:50% 100%;animation:flap .45s infinite}' +
    '@keyframes roll{from{transform:translateX(-420px)}to{transform:translateX(440px)}}' +
    '.rl{animation:roll 10s linear infinite}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}' +
    '.rip{animation:ripple 3s ease-in-out infinite}.rip2{animation-delay:-1.5s}' +
    '@keyframes surf{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(40px,-6px) rotate(4deg)}}' +
    '.sf{transform-box:fill-box;transform-origin:50% 100%;animation:surf 4s ease-in-out infinite}.sf2{animation-delay:-2s}' +
    '@keyframes wave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.wv{animation:wave 2.4s linear infinite}' +
    '@keyframes wavebar{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.flg{transform-box:fill-box;transform-origin:0 50%;animation:sway 1.6s ease-in-out infinite}' +
    '@keyframes sway{0%,100%{transform:skewY(-6deg)}50%{transform:skewY(6deg)}}' +
    '@keyframes lift{0%,30%,100%{transform:translateY(0)}55%,75%{transform:translateY(-34px)}}' +
    '.lft{animation:lift 8s ease-in-out infinite}' +
    '@keyframes boat{from{transform:translateX(-90px)}to{transform:translateX(480px)}}' +
    '.bt{animation:boat 18s linear infinite}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.hand{transform-box:view-box;transform-origin:200px 70px;animation:spin 12s linear infinite}' +
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
  const gull = (x, y, cls) => '<g class="fly ' + (cls || "") + '"><g class="flp"><path d="M' + x + ' ' + y + 'q6-6 12 0q6-6 12 0" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g></g>';
  const CORAL = "#ff8a5b", SEA = "#3fd0c9", SUN = "#ffd34d", ABLUE = "#0039a6";

  /* 1. A train pulling into Far Rockaway-Mott Av, the end of the line, up on the open-air platform under a canopy, golden hour */
  function train() {
    let windows = "";
    for (let x = 18; x < 270; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 90) posts += '<rect x="' + (x - 3) + '" y="34" width="6" height="146" fill="#4a5a6a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<circle cx="70" cy="96" r="26" fill="' + SUN + '" opacity=".9"/>' +
      /* low Far Rockaway rooftops on the horizon */
      '<path d="M0 116h30v-14h24v8h30v-16h20v22h40v-10h36v10h220v60H0z" fill="#3a3550" opacity=".6"/>' +
      /* canopy */
      '<path d="M0 22h400v14H0z" fill="#5c6f80"/><path d="M0 36h400" stroke="#2f3b46" stroke-width="3"/>' + posts +
      /* station sign */
      '<rect x="64" y="48" width="272" height="34" rx="4" fill="#111"/><rect x="64" y="48" width="272" height="4" fill="#fff"/>' +
      '<text x="78" y="73" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Far Rockaway-Mott Av</text>' +
      bullet(314, 66, "A", ABLUE) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + ABLUE + '"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(292, 136, "A", ABLUE) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1f2a33"/>' +
      tag("END OF THE LINE", 22, 236, 24, CORAL, -4) + tag("BOBBY J", 282, 240, 26, SEA, -8),
      sky("g1", "#2a2f5a", "#ff9d6b"));
  }

  /* 2. The A train crossing Jamaica Bay on the long low trestle, sunset, marsh grass, gulls */
  function bay() {
    let piers = "";
    for (let x = 0; x <= 400; x += 26) piers += '<rect x="' + x + '" y="150" width="4" height="34" fill="#3a3f47"/>';
    let windows = "";
    for (let i = 0; i < 8; i++) windows += '<rect x="' + (8 + i * 46) + '" y="124" width="28" height="12" rx="2" fill="#fff2b0"/>';
    let grass = "";
    for (let x = 4; x < 400; x += 7) grass += '<path d="M' + x + ' 236l' + ((x % 3) - 1) * 3 + ' -' + (12 + (x * 7) % 10) + '" stroke="#5a7a3a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="300" cy="118" r="34" fill="#ffcf5a"/>' +
      /* far shore + Manhattan haze */
      '<path d="M0 140h60v-8h16v-14h10v14h40v-6h30v6h244v10H0z" fill="#6b4a6a" opacity=".55"/>' +
      '<rect x="0" y="146" width="400" height="114" fill="#1f4f6a"/>' +
      '<path d="M260 160h80M250 176h100M240 196h120" stroke="#ffcf5a" stroke-width="3" opacity=".55"/>' +
      '<g class="rip"><path d="M10 206h40M90 220h50M200 230h40" stroke="#9fd6ff" stroke-width="2" opacity=".5"/></g>' +
      '<g class="rip rip2"><path d="M40 190h30M150 200h40M320 214h50" stroke="#9fd6ff" stroke-width="2" opacity=".5"/></g>' +
      /* trestle */
      '<rect x="0" y="142" width="400" height="10" fill="#4a5058"/>' + piers +
      /* A train rolling across */
      '<g class="rl"><rect x="0" y="116" width="380" height="26" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' +
      '<rect x="0" y="137" width="380" height="3" fill="' + ABLUE + '"/>' + windows +
      '<path d="M92 116v26M184 116v26M276 116v26" stroke="#6b7280" stroke-width="1.5"/>' +
      '<circle cx="374" cy="132" r="3" fill="#fff6c2"/>' + bullet(356, 127, "A", ABLUE) + '</g>' +
      /* marsh island */
      '<path d="M0 240q60-14 140-6t120 2 140-4v28H0z" fill="#3f5a2a"/>' + grass +
      gull(40, 60) + gull(90, 80, "fly2") +
      tag("JAMAICA BAY", 22, 44, 24, "#fff", -4),
      sky("g2", "#3b2a5a", "#ff8a5b"));
  }

  /* 3. The Rockaway boardwalk and beach: surfers on the break, lifeguard chair, the boardwalk railing */
  function beach() {
    let rail = "";
    for (let x = 0; x <= 400; x += 16) rail += '<rect x="' + x + '" y="196" width="3" height="20" fill="#e6e6e0"/>';
    const surfer = (x, y, cls, shirt) =>
      '<g class="sf ' + cls + '"><path d="M' + (x - 18) + ' ' + (y + 2) + 'q18 6 36 0" stroke="#ffd34d" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M' + (x - 6) + ' ' + y + 'l6-12 6 12" stroke="#111" stroke-width="3" fill="none"/>' +
      '<rect x="' + (x - 4) + '" y="' + (y - 24) + '" width="8" height="13" rx="3" fill="' + shirt + '"/>' +
      '<path d="M' + (x - 4) + ' ' + (y - 20) + 'l-10 4M' + (x + 4) + ' ' + (y - 20) + 'l10 -4" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>' +
      '<circle cx="' + x + '" cy="' + (y - 29) + '" r="4.5" fill="#111"/></g>';
    let waves = "";
    for (let x = -40; x < 460; x += 40) waves += '<path d="M' + x + ' 128q10-10 20 0t20 0" fill="none" stroke="#fff" stroke-width="2.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="320" cy="44" r="22" fill="' + SUN + '"/>' +
      /* ocean */
      '<rect x="0" y="86" width="400" height="80" fill="#1d7fa6"/><rect x="0" y="86" width="400" height="6" fill="#145f80"/>' +
      '<g class="wv">' + waves + '</g>' +
      '<path d="M0 150q100-10 200 0t200 0v16H0z" fill="#e8f6fb" opacity=".8"/>' +
      surfer(110, 124, "", CORAL) + surfer(250, 116, "sf2", SEA) +
      /* sand */
      '<rect x="0" y="160" width="400" height="36" fill="#f0d9a4"/>' +
      /* lifeguard chair */
      '<path d="M330 194l8-34M362 194l-8-34M334 176h24" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="334" y="150" width="24" height="10" rx="2" fill="#fff"/>' +
      '<rect x="360" y="132" width="2" height="22" fill="#5b6168"/><path class="flg" d="M362 132h14l-4 5 4 5h-14z" fill="#ff5a4f"/>' +
      /* concrete boardwalk */
      '<rect x="0" y="214" width="400" height="46" fill="#cfd0cb"/><path d="M0 214h400" stroke="#a9aaa4" stroke-width="3"/>' +
      '<path d="M0 196h400" stroke="#e6e6e0" stroke-width="3"/>' + rail +
      '<path d="M0 236h400" stroke="#b9bab4" stroke-width="1"/>' +
      gull(20, 40) +
      tag("ROCKAWAY BEACH", 18, 252, 24, CORAL, -3),
      sky("g3", "#5ec4e8", "#c8ecf6"));
  }

  /* 4. Jacob Riis Park: the Art Deco brick bathhouse with its clock tower, the green Marine Parkway Bridge lift span rising behind */
  function riis() {
    let arches = "";
    for (let i = 0; i < 10; i++) { const x = 30 + i * 34; if (x > 170 && x < 222) continue; arches += '<path d="M' + x + ' 206v-22a10 10 0 0 1 20 0v22z" fill="#5a3a24"/>'; }
    let wins = "";
    for (let i = 0; i < 6; i++) wins += '<rect x="' + (48 + i * 24 + (i > 2 ? 160 : 0)) + '" y="150" width="10" height="12" fill="#7a5032"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* bridge, behind the bathhouse */
      '<g opacity=".9">' +
        '<rect x="20" y="40" width="12" height="104" fill="#4f8a76"/><rect x="104" y="40" width="12" height="104" fill="#4f8a76"/>' +
        '<rect x="16" y="34" width="20" height="8" fill="#3d6f5f"/><rect x="100" y="34" width="20" height="8" fill="#3d6f5f"/>' +
        '<path d="M20 60l96 30M116 60l-96 30M20 90h96" stroke="#4f8a76" stroke-width="2"/>' +
        '<g class="lft"><rect x="32" y="110" width="72" height="8" fill="#4f8a76"/><path d="M32 118l12-8 12 8 12-8 12 8 12-8 12 8" stroke="#3d6f5f" stroke-width="2" fill="none"/></g>' +
        '<path d="M-10 120h30M116 120h40q40 0 60 4" stroke="#4f8a76" stroke-width="6"/>' +
      '</g>' +
      /* bathhouse */
      '<rect x="20" y="140" width="360" height="66" fill="#d6b17a"/><rect x="18" y="136" width="364" height="6" fill="#b88c55"/>' +
      '<path d="M20 170h360" stroke="#b88c55" stroke-width="2"/>' + wins + arches +
      /* octagonal turrets */
      '<rect x="22" y="112" width="24" height="94" fill="#caa36c"/><rect x="20" y="108" width="28" height="6" fill="#b88c55"/><rect x="30" y="122" width="8" height="14" fill="#7a5032"/>' +
      '<rect x="354" y="112" width="24" height="94" fill="#caa36c"/><rect x="352" y="108" width="28" height="6" fill="#b88c55"/><rect x="362" y="122" width="8" height="14" fill="#7a5032"/>' +
      /* center clock tower */
      '<rect x="176" y="50" width="48" height="156" fill="#dcb987"/><rect x="172" y="46" width="56" height="6" fill="#b88c55"/>' +
      '<rect x="184" y="34" width="32" height="12" fill="#caa36c"/><rect x="192" y="24" width="16" height="10" fill="#b88c55"/><rect x="199" y="10" width="2" height="14" fill="#5a3a24"/>' +
      '<circle cx="200" cy="70" r="14" fill="#f6efdc" stroke="#5a3a24" stroke-width="2.5"/>' +
      '<path class="hand" d="M200 70V60" stroke="#2a1a10" stroke-width="2" stroke-linecap="round"/><path d="M200 70l6 3" stroke="#2a1a10" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M188 96v40M200 96v40M212 96v40" stroke="#b88c55" stroke-width="3"/>' +
      '<path d="M186 206v-30a14 14 0 0 1 28 0v30z" fill="#5a3a24"/>' +
      /* lawn + path */
      '<rect x="0" y="206" width="400" height="54" fill="#5f9a4a"/><path d="M170 260l16-54h28l16 54z" fill="#d9cdb0"/>' +
      gull(240, 40) +
      tag("RIIS PARK", 250, 100, 26, CORAL, -6),
      sky("g4", "#4fb3e0", "#bfe6f4"));
  }

  /* 5. Mott Av and Beach 20th St: green street signs, the A train sign, the tag wall, sunset */
  function corner() {
    let brick = "";
    for (let y = 70; y < 220; y += 12) for (let x = ((y - 70) / 12) % 2 ? 4 : 20; x < 250; x += 32) brick += '<rect x="' + x + '" y="' + y + '" width="30" height="10" fill="#7a4a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<circle cx="372" cy="44" r="18" fill="' + SUN + '" opacity=".9"/>' +
      gull(250, 40) +
      '<rect x="4" y="70" width="250" height="150" fill="#5a3428"/>' + brick +
      tag("BOBBY J", 22, 144, 40, CORAL, -7) + tag("ROCKAWAY", 30, 196, 30, SEA, -3) + tag("NEO CLASSIC", 120, 96, 16, SUN, -5) +
      /* streetlight */
      '<rect x="296" y="56" width="5" height="164" fill="#1d2329"/><path d="M298 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M314 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="262" y="88" width="72" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="298" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Mott Av</text>' +
      '<rect x="256" y="110" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="298" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Beach 20 St</text>' +
      /* subway entrance post with A bullet */
      '<rect x="356" y="150" width="4" height="70" fill="#1d2329"/>' + bullet(358, 146, "A", ABLUE) +
      '<rect x="0" y="220" width="400" height="40" fill="#1e2228"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#2a2f5a", "#ff9d6b"));
  }

  window.SCENES = { train, bay, beach, riis, corner };
})();
