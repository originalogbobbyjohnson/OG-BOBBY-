/* Bed-Stuy opening scenes for the Skyzoo game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes ripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.rip{animation:ripple 3s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 2.4s ease-in-out infinite}' +
    '@keyframes fly{from{transform:translate(-80px,20px)}to{transform:translate(480px,-30px)}}' +
    '.fly{animation:fly 9s linear infinite}.fly2{animation-delay:-3s}.fly3{animation-delay:-6s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}' +
    '.reel{transform-box:fill-box;transform-origin:50% 50%;animation:spin 2.5s linear infinite}' +
    '@keyframes eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}' +
    '.eq{transform-box:fill-box;transform-origin:50% 100%;animation:eq .8s ease-in-out infinite}.eq2{animation-delay:.2s}.eq3{animation-delay:.45s}.eq4{animation-delay:.6s}' +
    '@keyframes wave{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 2s ease-in-out infinite}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const SKY = "#6fb7ff", GOLD = "#e8b84a", WHITE = "#f7f3ea";
  const pigeon = cls => '<g class="fly ' + cls + '"><path d="M0 0q6-6 12 0q6-6 12 0" stroke="#2a2f36" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>';

  /* 1. The G pulling into Classon Av, underground on the Crosstown line: white tile, light green trim with dark green border, hunter green columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 120; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#ecebe4"/>';
    let cols = "";
    [40, 140, 260, 360].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="196" fill="#1f4d2b"/><rect x="' + (x - 9) + '" y="0" width="18" height="5" fill="#173a20"/><rect x="' + (x - 9) + '" y="191" width="18" height="5" fill="#173a20"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#d9d7cf"/>' + tiles +
      /* green trim band with the dark green border */
      '<rect x="0" y="22" width="400" height="16" fill="#1f5e30"/><rect x="0" y="25" width="400" height="10" fill="#8fd18a"/>' +
      '<rect x="0" y="0" width="400" height="8" fill="#2b2b2b"/>' +
      '<rect x="0" y="112" width="400" height="74" fill="#1c1c1c"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#6cbe45"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "G", "#6cbe45") +
      '</g>' + cols +
      /* the name tablet: dark green with a light green border */
      '<rect x="160" y="44" width="80" height="18" fill="#8fd18a"/><rect x="162" y="46" width="76" height="14" fill="#1f5e30"/>' +
      '<text x="200" y="57" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing=".5" fill="#fff">CLASSON AVE.</text>' +
      /* station sign */
      '<rect x="80" y="70" width="240" height="34" rx="4" fill="#111"/><rect x="80" y="70" width="240" height="4" fill="#fff"/>' +
      '<text x="94" y="95" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Classon Av</text>' +
      bullet(296, 88, "G", "#6cbe45") +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5c5a55"/>' +
      '<path d="M0 214h400" stroke="#4a4844" stroke-width="2"/>' +
      tag("FIRST GEN RICH", 24, 240, 24, GOLD, -4) + tag("SKY", 316, 244, 32, SKY, -8));
  }

  /* 2. Kosciuszko Pool on Marcy Av: the long red-brick WPA pool house, the big blue pool, lifeguard chair, summer sun */
  function pool() {
    let brick = "";
    for (let y = 70; y < 150; y += 8) for (let x = (y / 8) % 2 ? 26 : 20; x < 368; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#9b3d26"/>';
    let wins = "";
    for (let x = 44; x < 360; x += 40) wins += '<rect x="' + x + '" y="92" width="22" height="34" rx="11" fill="#1d2b3a"/><rect x="' + (x + 10) + '" y="92" width="2" height="34" fill="#c7b89a"/>';
    let waves = "";
    for (let x = 0; x < 480; x += 40) waves += '<path d="M' + x + ' 0q10-5 20 0t20 0" stroke="#d6f3ff" stroke-width="2" fill="none" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="340" cy="38" r="20" fill="#ffe08a"/><circle cx="340" cy="38" r="30" fill="#ffe08a" opacity=".25"/>' +
      /* pool house */
      '<rect x="16" y="62" width="368" height="92" fill="#b24a2f"/>' + brick + wins +
      '<rect x="12" y="56" width="376" height="10" fill="#e3d6bb"/><rect x="12" y="150" width="376" height="6" fill="#e3d6bb"/>' +
      '<rect x="116" y="30" width="168" height="30" fill="#b24a2f"/><rect x="112" y="26" width="176" height="6" fill="#e3d6bb"/>' +
      '<text x="200" y="50" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="1.5" fill="#f7f3ea">KOSCIUSZKO POOL</text>' +
      '<rect x="174" y="100" width="52" height="54" fill="#2a1a12"/><rect x="178" y="104" width="44" height="50" fill="#3a2a1e"/>' +
      /* deck + pool */
      '<rect x="0" y="156" width="400" height="104" fill="#e8e3d6"/>' +
      '<rect x="20" y="170" width="360" height="76" rx="4" fill="#2f9fd8"/><rect x="20" y="170" width="360" height="76" rx="4" fill="none" stroke="#f7f3ea" stroke-width="4"/>' +
      '<path d="M20 196h360M20 222h360" stroke="#1b7fb8" stroke-width="2" stroke-dasharray="10 6"/>' +
      '<g clip-path="url(#pc)"><g class="rip"><g transform="translate(20 184)">' + waves + '</g><g transform="translate(30 210)">' + waves + '</g><g transform="translate(14 236)">' + waves + '</g></g></g>' +
      '<rect x="0" y="246" width="20" height="14" fill="#e8e3d6"/><rect x="380" y="160" width="20" height="100" fill="#e8e3d6"/>' +
      /* lifeguard chair */
      '<path d="M352 246l12-62M380 246l-12-62M356 226h22M358 206h18" stroke="#f7f3ea" stroke-width="4"/><rect x="354" y="176" width="28" height="10" fill="#d62e3a"/>' +
      /* float bobbing */
      '<g class="bob"><circle cx="130" cy="208" r="11" fill="none" stroke="#ff6b5b" stroke-width="7"/><path d="M121 204a11 11 0 0 1 6-6" stroke="#fff" stroke-width="7" fill="none"/></g>',
      sky("g2", "#4fa3e8", "#bfe3ff") + '<clipPath id="pc"><rect x="22" y="172" width="356" height="72"/></clipPath>');
  }

  /* 3. The old Girls' High School on Nostrand Av: High Victorian red brick, brownstone trim, the slate mansard tower with iron cresting, pigeons */
  function school() {
    let wins = "";
    [[40, 110], [80, 110], [300, 110], [340, 110], [40, 160], [80, 160], [300, 160], [340, 160], [168, 160], [212, 160]].forEach(([x, y]) => {
      wins += '<path d="M' + x + ' ' + (y + 34) + 'v-24a10 10 0 0 1 20 0v24z" fill="#1d2b3a" stroke="#c9a77a" stroke-width="3"/><path d="M' + (x + 10) + ' ' + (y + 2) + 'v32" stroke="#c9a77a" stroke-width="1.4"/>';
    });
    let crest = "";
    for (let x = 170; x <= 230; x += 6) crest += '<path d="M' + x + ' 34v-6" stroke="#222" stroke-width="1.6"/><circle cx="' + x + '" cy="27" r="1.4" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* wings */
      '<rect x="20" y="96" width="120" height="124" fill="#9e3b2a"/><rect x="260" y="96" width="120" height="124" fill="#9e3b2a"/>' +
      '<path d="M14 98l66-26 66 26z" fill="#4a5058"/><path d="M254 98l66-26 66 26z" fill="#4a5058"/>' +
      '<rect x="20" y="148" width="120" height="6" fill="#c9a77a"/><rect x="260" y="148" width="120" height="6" fill="#c9a77a"/>' +
      /* center pavilion + tower */
      '<rect x="146" y="70" width="108" height="150" fill="#a8402d"/>' +
      '<path d="M156 72l10-38h68l10 38z" fill="#4a5058"/><path d="M160 60h80M163 48h74" stroke="#5c636c" stroke-width="2"/>' + crest +
      '<rect x="190" y="38" width="20" height="22" fill="#1d2b3a" stroke="#c9a77a" stroke-width="2"/>' +
      '<rect x="146" y="98" width="108" height="6" fill="#c9a77a"/><rect x="146" y="148" width="108" height="6" fill="#c9a77a"/>' +
      '<path d="M170 144v-26a14 14 0 0 1 28 0v26zM202 144v-26a14 14 0 0 1 28 0v26z" fill="#1d2b3a" stroke="#c9a77a" stroke-width="3"/>' +
      '<g class="flag"><path d="M200 18v-18" stroke="#222" stroke-width="1.5"/><path d="M200 0h18l-4 5 4 5h-18z" fill="#f7f3ea"/></g>' +
      wins +
      /* door + steps */
      '<path d="M182 220v-30a18 18 0 0 1 36 0v30z" fill="#3a2418" stroke="#c9a77a" stroke-width="3"/>' +
      '<rect x="170" y="220" width="60" height="6" fill="#b8a888"/><rect x="164" y="226" width="72" height="6" fill="#a89878"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#2b2f36"/><path d="M0 246h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="60" y="18" width="90" height="20" rx="3" fill="#123a5c" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="105" y="32" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" fill="#fff">NOSTRAND AV</text>' +
      pigeon("") + pigeon("fly2") + pigeon("fly3"),
      sky("g3", "#f4b26b", "#f7dcb2"));
  }

  /* 4. Live from the tape deck: the writing room, cassette reels turning, crates of records, a blue fitted on the hook, the notebook open */
  function tapes() {
    let crates = "";
    [[24, 168], [92, 168]].forEach(([x, y]) => {
      crates += '<rect x="' + x + '" y="' + y + '" width="62" height="60" fill="#6b4a2a" stroke="#3a2614" stroke-width="2"/>';
      for (let i = 0; i < 8; i++) crates += '<rect x="' + (x + 4 + i * 7) + '" y="' + (y - 14) + '" width="6" height="22" fill="' + ["#d62e3a", "#f2c14e", "#1f2937", "#6fb7ff", "#f7f3ea", "#3f8a3a", "#7a3fbf", "#111"][i] + '"/>';
      crates += '<rect x="' + (x + 10) + '" y="' + (y + 20) + '" width="42" height="10" rx="2" fill="#3a2614"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="#151b2a"/>' +
      '<rect x="0" y="0" width="400" height="160" fill="#1d2640"/>' +
      /* window with the night skyline */
      '<rect x="250" y="18" width="128" height="96" fill="#0b1224" stroke="#3a3f4a" stroke-width="6"/>' + '<circle cx="270" cy="30" r="1.2" fill="#fff"/><circle cx="296" cy="44" r="1" fill="#fff"/><circle cx="340" cy="28" r="1.3" fill="#fff"/><circle cx="364" cy="50" r="1" fill="#fff"/>' +
      '<path d="M254 114v-30h14v-12h12v42zM286 114v-48h16v48zM306 114v-22h20v22zM330 114v-38h14v-10h10v48z" fill="#26324d"/>' +
      '<path d="M314 18v96M250 66h128" stroke="#3a3f4a" stroke-width="4"/>' +
      /* fitted on the hook */
      '<circle cx="60" cy="40" r="3" fill="#888"/><path d="M38 70q0-26 22-26t22 26z" fill="#13306b"/><path d="M34 70h52q-4 10-30 8z" fill="#0e2350"/><circle cx="60" cy="44" r="2" fill="#0e2350"/>' +
      '<text x="60" y="66" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#f7f3ea">BK</text>' +
      /* desk */
      '<rect x="0" y="228" width="400" height="32" fill="#2a1d14"/><rect x="170" y="150" width="226" height="10" fill="#7a5233"/><rect x="180" y="160" width="10" height="70" fill="#5a3a22"/><rect x="376" y="160" width="10" height="70" fill="#5a3a22"/>' +
      /* tape deck */
      '<rect x="186" y="100" width="130" height="50" rx="4" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="196" y="108" width="74" height="34" rx="3" fill="#1f2937"/><rect x="204" y="114" width="58" height="22" rx="2" fill="#f2c14e"/>' +
      '<g class="reel"><circle cx="218" cy="125" r="7" fill="#f7f3ea"/><path d="M218 118v14M211 125h14" stroke="#444" stroke-width="2"/></g>' +
      '<g class="reel"><circle cx="248" cy="125" r="7" fill="#f7f3ea"/><path d="M248 118v14M241 125h14" stroke="#444" stroke-width="2"/></g>' +
      '<rect x="278" y="110" width="6" height="28" class="eq" fill="#6cbe45"/><rect x="287" y="110" width="6" height="28" class="eq eq2" fill="#6cbe45"/><rect x="296" y="110" width="6" height="28" class="eq eq3" fill="#f2c14e"/><rect x="305" y="110" width="6" height="28" class="eq eq4" fill="#d62e3a"/>' +
      /* notebook + pen */
      '<path d="M326 148l30-10 30 10v2h-60z" fill="#f7f3ea" stroke="#9aa3ad" stroke-width="1"/><path d="M332 146l24-6M356 140l24 6" stroke="#9aa3ad" stroke-width=".8"/><rect x="340" y="132" width="34" height="3" rx="1.5" fill="' + GOLD + '" transform="rotate(-18 357 133)"/>' +
      crates +
      tag("RETRO", 214, 210, 26, SKY, -5) + tag("POLITAN", 236, 238, 22, GOLD, -3));
  }

  /* 5. Fulton St and St James Pl: green street signs, a streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      /* brownstone cornice line behind */
      '<rect x="0" y="40" width="400" height="30" fill="#2a2420"/><path d="M0 40h400" stroke="#4a3e34" stroke-width="5"/>' +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3f47"/>' +
      '<path d="M20 70h230" stroke="#2a2e34" stroke-width="4"/>' +
      tag("SKYZOO", 34, 140, 40, WHITE, -7) + tag("BED-STUY", 50, 194, 28, SKY, -3) + tag("FGR", 196, 210, 20, GOLD, -10) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Fulton St</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">St James Pl</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1b2e", "#24435f"));
  }

  window.SCENES = { train, pool, school, tapes, corner };
})();
