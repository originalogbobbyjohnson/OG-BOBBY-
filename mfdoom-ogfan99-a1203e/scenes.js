/* MF DOOM game (NYC map, Long Island). The LIRR at the end of the Long Beach Branch, the Nuyorican Poets Cafe open mic (the 1997 comeback),
   a downtown record shop wall of 12-inches, the Long Beach Bridge over Reynolds Channel, and the Long Beach Blvd corner with the boardwalk behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bo{animation:bounce .9s ease-in-out infinite}.bo2{animation-delay:.3s}.bo3{animation-delay:.6s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 2.2s linear infinite}' +
    '@keyframes glide{0%{transform:translate(0,0)}50%{transform:translate(40px,-8px)}100%{transform:translate(80px,0)}}.gull{animation:glide 6s ease-in-out infinite alternate}.gull2{animation-delay:-3s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.wv{animation:wave 3s ease-in-out infinite}.wv2{animation-delay:-1.5s}' +
    '@keyframes boat{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.boat{animation:boat 16s linear infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.nt{animation:note 3s ease-out infinite}.nt2{animation-delay:1s}.nt3{animation-delay:2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const gull = (x, y, cls) => '<g class="gull ' + cls + '"><path d="M' + x + ' ' + y + 'q6-6 12 0q6-6 12 0" stroke="#f4f4f4" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>';
  const GOLD = "#e0b23a", STEEL = "#cfd4da", OCEAN = "#2f86b8", SAND = "#e9d3a4", CREAM = "#f4f1e8", LIRRB = "#1d3f8f";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. LIRR Long Beach: the end of the branch, ground-level platform under the canopy, a silver M7 with blue stripes pulling in at sunset */
  function lirr() {
    let win = "";
    for (let x = 34; x < 290; x += 30) win += '<rect x="' + x + '" y="128" width="20" height="18" rx="2" fill="#bcd6ee" opacity=".9"/>';
    let posts = "";
    [40, 130, 220, 310].forEach(x => posts += '<rect x="' + (x - 3) + '" y="62" width="6" height="128" fill="#5b6470"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' +
      '<circle cx="330" cy="104" r="26" fill="#ffcf7a" opacity=".9"/>' +
      '<rect x="250" y="84" width="150" height="40" fill="#8b4a3a"/><path d="M250 84l75-22 75 22z" fill="#5c2f25"/>' +
      (() => { let w = ""; for (let x = 262; x < 400; x += 22) w += '<rect x="' + x + '" y="94" width="10" height="14" fill="#ffd98a" class="bl bl' + (x % 3 + 1) + '"/>'; return w; })() +
      /* canopy */
      '<path d="M0 58h360l14 10H0z" fill="#3a4250"/><rect x="0" y="66" width="374" height="4" fill="#9aa3ad"/>' + posts +
      /* station sign */
      '<rect x="96" y="76" width="168" height="30" rx="3" fill="#111" stroke="#ddd" stroke-width="1"/>' +
      '<text x="180" y="97" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Long Beach</text>' +
      /* M7 train */
      '<g class="anim-train">' +
        '<rect x="10" y="118" width="300" height="60" rx="6" fill="' + STEEL + '" stroke="#7d8590" stroke-width="2"/>' +
        '<rect x="10" y="150" width="300" height="6" fill="' + LIRRB + '"/><rect x="10" y="158" width="300" height="3" fill="#3f78c8"/>' + win +
        '<rect x="292" y="126" width="14" height="24" rx="2" fill="#bcd6ee"/><circle cx="302" cy="168" r="4" fill="#fff6c2"/>' +
        '<rect x="120" y="112" width="40" height="6" fill="#59616b"/>' +
      '</g>' +
      '<rect x="0" y="178" width="400" height="12" fill="#e7c45a"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#6d6a64"/><path d="M0 206h400M0 226h400" stroke="#5a5752" stroke-width="2"/>' +
      gull(40, 30, "") + gull(150, 22, "gull2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">END OF THE LONG BEACH BRANCH</text>',
      sky("s1", "#2a2d5c", "#f29a5b"));
  }

  /* 2. Nuyorican Poets Cafe on E 3rd St: brick front, red door, open mic inside, the crowd bouncing (DOOM's comeback, 1997) */
  function nuyorican() {
    let brick = "";
    for (let y = 30; y < 200; y += 8) for (let x = (y / 8) % 2 ? -8 : 0; x < 400; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3b2b"/>';
    let crowd = "";
    for (let i = 0; i < 8; i++) { const x = 46 + i * 44; crowd += '<g class="bo bo' + (i % 3 + 1) + '"><circle cx="' + x + '" cy="222" r="11" fill="#141014"/><rect x="' + (x - 14) + '" y="232" width="28" height="34" rx="8" fill="#141014"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="#5e2c20"/>' + brick +
      '<rect x="0" y="0" width="400" height="30" fill="#171320"/>' + stars(6) +
      /* sign */
      '<rect x="70" y="40" width="260" height="34" rx="3" fill="#121212" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="flk" x="200" y="63" text-anchor="middle" ' + font + ' font-size="15" fill="#ffcf5a">NUYORICAN POETS CAFE</text>' +
      /* big window: the stage inside */
      '<rect x="60" y="86" width="220" height="112" fill="#1d1622" stroke="#2a2a2a" stroke-width="4"/>' +
      '<circle cx="170" cy="140" r="38" fill="#ffe08a" opacity=".16"/>' +
      '<rect x="166" y="120" width="4" height="58" fill="#999"/><rect x="160" y="112" width="16" height="12" rx="6" fill="#444" stroke="#bbb"/>' +
      '<rect x="60" y="178" width="220" height="20" fill="#3a2630"/>' +
      '<text x="170" y="192" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">OPEN MIC TONIGHT</text>' +
      /* red door */
      '<rect x="300" y="100" width="56" height="98" fill="#b3261e" stroke="#2a2a2a" stroke-width="3"/><circle cx="346" cy="152" r="3" fill="' + GOLD + '"/>' +
      '<text x="328" y="96" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">236</text>' +
      '<text class="nt" x="200" y="150" font-size="16" fill="#ffe08a">&#9834;</text><text class="nt nt2" x="230" y="160" font-size="14" fill="#ffe08a">&#9835;</text>' +
      '<rect x="0" y="198" width="400" height="62" fill="#3c3b40"/>' + crowd);
  }

  /* 3. The downtown record shop: crates and a wall of 12-inch singles, a turntable spinning (where the Fondle 'Em 12-inches sold) */
  function records() {
    const cols = ["#e0b23a", "#c0392b", "#2f86b8", "#6cbe45", "#8e5bd6", "#f08a24", "#e8e3d8"];
    let wall = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) { const x = 30 + c * 50, y = 44 + r * 42, col = cols[(r * 3 + c) % 7];
      wall += '<rect x="' + x + '" y="' + y + '" width="36" height="36" fill="' + col + '" stroke="#111" stroke-width="2"/><circle cx="' + (x + 18) + '" cy="' + (y + 18) + '" r="11" fill="#111" opacity=".8"/><circle cx="' + (x + 18) + '" cy="' + (y + 18) + '" r="3" fill="' + col + '"/>'; }
    let crates = "";
    for (let i = 0; i < 4; i++) { const x = 20 + i * 64; crates += '<rect x="' + x + '" y="196" width="56" height="44" fill="#a0712f" stroke="#5b3d16" stroke-width="2"/>' +
      [0, 1, 2, 3, 4].map(k => '<rect x="' + (x + 4 + k * 10) + '" y="' + (182 + (k % 2) * 4) + '" width="8" height="20" fill="' + cols[(i + k) % 7] + '"/>').join(""); }
    return svg(
      '<rect width="400" height="260" fill="#241c18"/>' + wall +
      '<rect x="0" y="170" width="400" height="90" fill="#3a2a20"/><rect x="0" y="170" width="400" height="4" fill="#5b4330"/>' + crates +
      /* counter with the turntable */
      '<rect x="282" y="186" width="110" height="60" fill="#151515"/><rect x="288" y="176" width="98" height="14" rx="2" fill="#2b2b2b"/>' +
      '<g class="spin"><circle cx="322" cy="183" r="12" fill="#0b0b0b" stroke="#444"/><circle cx="322" cy="183" r="4" fill="' + GOLD + '"/><path d="M322 173v4" stroke="#777" stroke-width="1.5"/></g>' +
      '<path d="M352 176l-14 8" stroke="#bbb" stroke-width="2"/>' +
      '<text class="flk" x="337" y="222" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">12-INCHES</text>' +
      tag("ALL CAPS", 140, 32, 22, CREAM, -3));
  }

  /* 4. The Long Beach Bridge over Reynolds Channel: the steel lift span, boats sliding under, the island skyline beyond */
  function bridge() {
    let waves = "";
    for (let x = -20; x < 440; x += 40) waves += '<path d="M' + x + ' 0q10-5 20 0t20 0" stroke="#bfe6ff" stroke-width="2" fill="none" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="20" y="104" width="30" height="40" fill="#4a5470"/><rect x="56" y="96" width="22" height="48" fill="#3e4862"/><rect x="300" y="100" width="40" height="44" fill="#4a5470"/><rect x="346" y="110" width="30" height="34" fill="#3e4862"/>' +
      '<rect x="0" y="144" width="400" height="116" fill="' + OCEAN + '"/>' +
      '<g transform="translate(0,170)"><g class="wv">' + waves + '</g></g><g transform="translate(0,206)"><g class="wv wv2">' + waves + '</g></g>' +
      /* lift towers + span */
      '<rect x="120" y="60" width="18" height="96" fill="#8a96a3"/><rect x="262" y="60" width="18" height="96" fill="#8a96a3"/>' +
      '<rect x="114" y="54" width="30" height="10" fill="#6c7782"/><rect x="256" y="54" width="30" height="10" fill="#6c7782"/>' +
      '<rect x="0" y="122" width="400" height="10" fill="#7d8792"/><rect x="0" y="132" width="400" height="4" fill="#5b646e"/>' +
      (() => { let t = ""; for (let x = 138; x < 262; x += 16) t += '<path d="M' + x + ' 122l8-26l8 26" stroke="#8a96a3" stroke-width="2" fill="none"/>'; return t; })() +
      '<path d="M138 96h124" stroke="#8a96a3" stroke-width="3"/>' +
      '<circle class="bl" cx="129" cy="50" r="3" fill="#ff5a4a"/><circle class="bl bl2" cx="271" cy="50" r="3" fill="#ff5a4a"/>' +
      '<g class="car"><rect x="0" y="112" width="34" height="10" rx="3" fill="' + GOLD + '"/></g><g class="car car2"><rect x="0" y="112" width="34" height="10" rx="3" fill="#e8e3d8"/></g>' +
      '<g class="boat"><path d="M0 186h44l-8 12H8z" fill="#f4f1e8"/><rect x="18" y="174" width="12" height="12" fill="#c0392b"/></g>' +
      gull(60, 30, "") + gull(220, 40, "gull2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#e8f4ff" letter-spacing="3">REYNOLDS CHANNEL</text>',
      sky("s4", "#f6b46b", "#7fb6d8"));
  }

  /* 5. W Park Ave & Long Beach Blvd: green street signs, a wall tagged MF DOOM, the boardwalk, lifeguard stand and the ocean behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="0" y="70" width="400" height="40" fill="#215f8f"/>' +
      '<path class="wv" d="M0 84q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6ff" stroke-width="2" fill="none" opacity=".6"/>' +
      '<rect x="0" y="104" width="400" height="16" fill="' + SAND + '"/>' +
      /* boardwalk on pilings */
      '<rect x="0" y="116" width="400" height="8" fill="#9a6b3e"/>' +
      (() => { let p = ""; for (let x = 10; x < 400; x += 30) p += '<rect x="' + x + '" y="124" width="5" height="12" fill="#6b4626"/>'; return p; })() +
      /* lifeguard stand */
      '<path d="M300 104l8-30h20l8 30" stroke="#f4f1e8" stroke-width="3" fill="none"/><rect x="302" y="64" width="32" height="12" fill="#c0392b"/>' +
      gull(40, 30, "") + gull(180, 46, "gull2") +
      /* wall */
      '<rect x="0" y="136" width="400" height="90" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 9) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("MF DOOM", 20, 198, 44, STEEL, -5) + tag("KMD", 222, 214, 22, GOLD, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + OCEAN + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="40" width="5" height="188" fill="#3d4b3f"/>' +
      '<rect x="290" y="44" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">W Park Ave</text>' +
      '<rect x="286" y="70" width="110" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="341" y="86" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Long Beach Blvd</text>' +
      '<circle class="flk" cx="358" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0b1230", "#3a5a8a"));
  }

  window.SCENES = { lirr: lirr, nuyorican: nuyorican, records: records, bridge: bridge, corner: corner };
})();
