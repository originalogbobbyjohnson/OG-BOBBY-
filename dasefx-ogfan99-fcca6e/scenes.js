/* Das EFX game (NYC map, Brooklyn: Crown Heights, Skoob's side: "bringin funk from Crown Heights"). 400 x 260 SVGs.
   0. The 2 pulling into President St-Medgar Evers College, underground on the Nostrand Av line.
   1. Vawter Hall at Virginia State University (Ettrick, VA), where Dray and Skoob met in 1988.
   2. I-95 South, Exit 70 for Teaneck, Krazy Drayz's hometown ("Brooklyn to T-Neck").
   3. The Imperial Apartments, Bedford Av and Pacific St, Crown Heights, with a sewer cover steaming ("Straight Out the Sewer").
   4. Brooklyn Av and St Johns Pl, St. Gregory the Great's bell tower behind, DAS EFX tagged on the wall.
   All scene CSS classes are prefixed dx- so they never clash with the game page. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dxcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.dx-car{animation:dxcar 6s linear infinite}.dx-car2{animation-delay:-3s}' +
    '@keyframes dxcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.dx-carl{animation:dxcarL 7s linear infinite}' +
    '@keyframes dxblink{0%,100%{opacity:.3}50%{opacity:1}}.dx-bl{animation:dxblink 1.8s ease-in-out infinite}.dx-bl2{animation-delay:.6s}.dx-bl3{animation-delay:1.2s}' +
    '@keyframes dxsteam{0%{transform:translate(0,0) scale(.6);opacity:0}20%{opacity:.75}100%{transform:translate(8px,-70px) scale(1.6);opacity:0}}.dx-st{transform-box:fill-box;transform-origin:50% 100%;animation:dxsteam 3s ease-out infinite}.dx-st2{animation-delay:-1s}.dx-st3{animation-delay:-2s}' +
    '@keyframes dxwave{0%,100%{transform:skewX(0deg)}50%{transform:skewX(-8deg)}}.dx-flag{transform-box:fill-box;transform-origin:0% 50%;animation:dxwave 1.6s ease-in-out infinite}' +
    '@keyframes dxhand{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.dx-hand{transform-box:view-box;animation:dxhand 6s linear infinite}' +
    '@keyframes dxbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.dx-bell{transform-box:fill-box;transform-origin:50% 0%;animation:dxbell 1.4s ease-in-out infinite}' +
    '@keyframes dxleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,120px) rotate(300deg)}}.dx-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:dxleaf 5s linear infinite}.dx-leaf2{animation-delay:-2.5s}' +
    '@keyframes dxflick{0%,100%{opacity:1}46%{opacity:.8}50%{opacity:.3}54%{opacity:.9}}.dx-flk{animation:dxflick 2.6s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#ee352e", GREEN = "#00933c", LIME = "#b6e34a", ORANGE = "#f47b20", NAVY = "#1d2f6b", CREAM = "#f3ead6", BRICK = "#9b3b2a", BUFF = "#d9b77e";

  /* 0. President St-Medgar Evers College: cream tile, a maroon/blue mosaic band, the black sign with the 2 and the 5, the 2 sliding in */
  function station() {
    let tile = "";
    for (let y = 30; y < 150; y += 10) for (let x = 0; x < 400; x += 20) tile += '<rect x="' + (x + (y % 20 ? 10 : 0)) + '" y="' + y + '" width="19" height="9" fill="#efe6d0"/>';
    let mosaic = "";
    for (let x = 0; x < 400; x += 12) mosaic += '<rect x="' + x + '" y="40" width="10" height="10" fill="' + (x % 24 ? "#7a2e2a" : "#2f5d8a") + '"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="134" width="24" height="20" rx="2" fill="#cfe2f5" opacity=".95"/>';
    return svg(
      '<rect width="400" height="260" fill="#d8cdb4"/>' + tile + mosaic +
      '<rect x="0" y="26" width="400" height="4" fill="#5a5146"/>' +
      /* station sign */
      '<rect x="40" y="64" width="320" height="40" rx="3" fill="#111"/><rect x="40" y="64" width="320" height="3" fill="#fff"/>' +
      '<text x="56" y="82" ' + font + ' font-size="15" fill="#fff">President St</text>' +
      '<text x="56" y="98" ' + font + ' font-size="10" fill="#d6d6d6">Medgar Evers College</text>' +
      bullet(310, 84, "2", RED) + bullet(338, 84, "5", GREEN) +
      /* columns */
      [20, 200, 380].map(x => '<rect x="' + (x - 5) + '" y="110" width="10" height="70" fill="#2e4d3a"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="124" width="320" height="56" rx="6" fill="#c3c9d1" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="310" y="132" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(318, 166, "2", RED) +
        '<rect x="10" y="160" width="300" height="3" fill="#8b929c"/><circle cx="20" cy="170" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/><rect x="0" y="190" width="400" height="70" fill="#6b6660"/>' +
      (() => { let d = ""; for (let x = 0; x < 400; x += 40) d += '<rect x="' + x + '" y="206" width="20" height="3" fill="#5a5550"/>'; return d; })() +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#efe6d0" letter-spacing="3">NOSTRAND AV LINE</text>' +
      '<circle class="dx-flk" cx="100" cy="16" r="5" fill="#fff6c2"/><circle class="dx-flk" cx="300" cy="16" r="5" fill="#fff6c2"/>');
  }

  /* 1. Vawter Hall, Virginia State University: Queen Anne red brick, corner tower, white trim, orange and blue banners on the lawn */
  function vawter() {
    let wins = "";
    [[96, 112], [130, 112], [222, 112], [256, 112], [96, 152], [130, 152], [222, 152], [256, 152], [290, 112], [290, 152]].forEach(([x, y]) => {
      wins += '<rect x="' + x + '" y="' + y + '" width="20" height="26" fill="#f6efe0"/><rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="14" height="20" fill="#2f4058"/><path d="M' + (x + 10) + ' ' + (y + 3) + 'v20M' + (x + 3) + ' ' + (y + 13) + 'h14" stroke="#f6efe0" stroke-width="1.5"/>'; });
    let bricks = "";
    for (let y = 96; y < 196; y += 8) bricks += '<path d="M80 ' + y + 'h250" stroke="#7f2f22" stroke-width=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dxs1)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffe6a6" opacity=".9"/>' +
      /* trees */
      '<circle cx="34" cy="150" r="34" fill="#2f6b3a"/><circle cx="58" cy="128" r="26" fill="#3a7d45"/><rect x="38" y="160" width="8" height="40" fill="#4a3424"/>' +
      '<circle cx="372" cy="146" r="30" fill="#2f6b3a"/><rect x="368" y="160" width="8" height="40" fill="#4a3424"/>' +
      /* main block with hip roof */
      '<path d="M76 96l20-26h218l20 26z" fill="#4b4f57"/>' +
      '<rect x="80" y="96" width="250" height="100" fill="' + BRICK + '"/>' + bricks + wins +
      '<rect x="80" y="96" width="250" height="5" fill="#f6efe0"/><rect x="80" y="144" width="250" height="3" fill="#f6efe0"/>' +
      /* central porch with white columns */
      '<rect x="160" y="150" width="52" height="46" fill="#5a2418"/><rect x="172" y="160" width="28" height="36" fill="#2b1a12"/>' +
      '<rect x="152" y="140" width="68" height="8" fill="#f6efe0"/>' + [156, 174, 192, 210].map(x => '<rect x="' + x + '" y="148" width="5" height="48" fill="#f6efe0"/>').join("") +
      '<path d="M150 140l36-18l36 18z" fill="#f6efe0"/>' +
      /* corner tower with cupola + clock */
      '<rect x="40" y="0" width="0" height="0"/>' +
      '<rect x="306" y="56" width="40" height="140" fill="#8f3526"/><path d="M300 58l26-36l26 36z" fill="#4b4f57"/><rect x="324" y="10" width="4" height="14" fill="#c9a24a"/>' +
      '<circle cx="326" cy="80" r="11" fill="#f6efe0" stroke="#4b4f57" stroke-width="2"/><path d="M326 80v-8" stroke="#222" stroke-width="2"/><g class="dx-hand" style="transform-origin:326px 80px"><path d="M326 80v-6" stroke="' + RED + '" stroke-width="1.5"/></g>' +
      '<rect x="316" y="104" width="20" height="26" fill="#2f4058" stroke="#f6efe0" stroke-width="3"/><rect x="316" y="146" width="20" height="26" fill="#2f4058" stroke="#f6efe0" stroke-width="3"/>' +
      /* lawn, walk, banners */
      '<rect x="0" y="196" width="400" height="64" fill="#4e8a3e"/><path d="M168 196l-30 64h96l-30-64z" fill="#d8cdb4"/>' +
      '<rect x="60" y="176" width="3" height="56" fill="#ddd"/><g class="dx-flag"><rect x="63" y="178" width="34" height="20" fill="' + ORANGE + '"/><rect x="63" y="198" width="34" height="6" fill="' + NAVY + '"/></g>' +
      '<rect x="300" y="176" width="3" height="56" fill="#ddd"/><g class="dx-flag"><rect x="303" y="178" width="34" height="20" fill="' + NAVY + '"/><rect x="303" y="198" width="34" height="6" fill="' + ORANGE + '"/></g>' +
      '<rect x="110" y="214" width="180" height="26" rx="3" fill="' + NAVY + '" stroke="' + ORANGE + '" stroke-width="2"/>' +
      '<text x="200" y="226" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="1.5">VAWTER HALL</text>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="7" fill="' + ORANGE + '" letter-spacing="1">VIRGINIA STATE · 1988</text>',
      sky("dxs1", "#5f8fcf", "#f5d7a1"));
  }

  /* 2. I-95 South at dusk, the green overhead sign for Exit 70: Teaneck, Degraw Av. Cars stream under it. */
  function exit70() {
    return svg(
      '<rect width="400" height="260" fill="url(#dxs2)"/>' + stars(10) +
      /* far trees + sound wall */
      '<path d="M0 150q20-18 40 0q20-22 44 0q20-18 40 0q22-20 46 0q20-18 40 0q22-22 46 0q20-18 40 0q24-22 50 0q20-18 54 0v20H0z" fill="#1e3a2a"/>' +
      '<rect x="0" y="160" width="400" height="14" fill="#7d7a72"/>' +
      /* road */
      '<path d="M0 174h400v86H0z" fill="#3a3c40"/>' +
      '<path d="M0 196h400M0 220h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/><path d="M0 244h400" stroke="#f4c430" stroke-width="3"/>' +
      '<g class="dx-car"><rect x="0" y="178" width="46" height="14" rx="4" fill="' + LIME + '"/><circle cx="10" cy="192" r="4" fill="#111"/><circle cx="36" cy="192" r="4" fill="#111"/><rect x="40" y="181" width="5" height="4" fill="#fff6c2"/></g>' +
      '<g class="dx-car dx-car2"><rect x="0" y="202" width="50" height="15" rx="4" fill="#c9ced6"/><circle cx="12" cy="217" r="4" fill="#111"/><circle cx="38" cy="217" r="4" fill="#111"/><rect x="44" y="205" width="5" height="4" fill="#fff6c2"/></g>' +
      '<g class="dx-carl"><rect x="0" y="226" width="48" height="14" rx="4" fill="' + RED + '"/><circle cx="12" cy="240" r="4" fill="#111"/><circle cx="36" cy="240" r="4" fill="#111"/><rect x="1" y="229" width="5" height="4" fill="#ff8a80"/></g>' +
      /* gantry */
      '<rect x="22" y="40" width="8" height="134" fill="#8d9096"/><rect x="370" y="40" width="8" height="134" fill="#8d9096"/>' +
      '<rect x="22" y="40" width="356" height="6" fill="#8d9096"/><rect x="22" y="112" width="356" height="5" fill="#8d9096"/>' +
      /* left sign: I-95 South */
      '<rect x="44" y="50" width="130" height="58" rx="4" fill="#0b6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M66 58h28v14q0 14-14 18q-14-4-14-18z" fill="#1e4fa8" stroke="#fff" stroke-width="1.5"/><rect x="66" y="58" width="28" height="7" fill="' + RED + '"/>' +
      '<text x="80" y="83" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">95</text>' +
      '<text x="104" y="70" ' + font + ' font-size="12" fill="#fff">SOUTH</text><text x="104" y="86" ' + font + ' font-size="9" fill="#fff">Turnpike</text>' +
      '<text x="80" y="102" ' + font + ' font-size="9" fill="#fff">NEW JERSEY</text>' +
      /* right sign: exit 70 */
      '<rect x="190" y="50" width="170" height="58" rx="4" fill="#0b6b3a" stroke="#fff" stroke-width="2"/>' +
      '<rect x="294" y="40" width="66" height="14" rx="2" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="327" y="51" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">EXIT 70</text>' +
      '<text x="204" y="74" ' + font + ' font-size="17" fill="#fff">Teaneck</text>' +
      '<text x="204" y="92" ' + font + ' font-size="11" fill="#fff">Degraw Av</text>' +
      '<path d="M338 76v18M332 88l6 8l6-8" stroke="#fff" stroke-width="3" fill="none" stroke-linejoin="round"/>' +
      /* caption plate */
      '<rect x="130" y="128" width="140" height="20" rx="3" fill="#0f1210" stroke="' + LIME + '" stroke-width="1.5"/>' +
      '<text x="200" y="142" text-anchor="middle" ' + font + ' font-size="9" fill="' + LIME + '" letter-spacing="1.5">BROOKLYN TO T-NECK</text>',
      sky("dxs2", "#151a38", "#c76a4a"));
  }

  /* 3. The Imperial Apartments (Bedford Av at Pacific St): buff brick, terracotta arches; in the street, a sewer cover steaming */
  function imperial() {
    let arches = "";
    for (let x = 40; x < 360; x += 40) {
      arches += '<path d="M' + (x + 6) + ' 166v-26q14-18 28 0v26z" fill="#2c3550" stroke="#b5562c" stroke-width="3"/>';
      arches += '<rect x="' + (x + 8) + '" y="84" width="24" height="30" fill="#2c3550" stroke="#f1e2c0" stroke-width="2"/><rect class="dx-bl dx-bl' + (x % 3 + 1) + '" x="' + (x + 11) + '" y="88" width="18" height="10" fill="#ffd98a" opacity=".7"/>';
      arches += '<rect x="' + (x + 8) + '" y="40" width="24" height="30" fill="#2c3550" stroke="#f1e2c0" stroke-width="2"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#dxs3)"/>' + stars(16) +
      '<rect x="20" y="24" width="360" height="152" fill="' + BUFF + '"/>' +
      '<rect x="20" y="18" width="360" height="10" fill="#b5562c"/><rect x="16" y="14" width="368" height="6" fill="#8a3f1f"/>' +
      '<rect x="20" y="74" width="360" height="5" fill="#b5562c"/><rect x="20" y="122" width="360" height="5" fill="#b5562c"/>' +
      arches +
      '<rect x="168" y="12" width="64" height="12" rx="2" fill="#8a3f1f"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="8" fill="' + CREAM + '" letter-spacing="2">THE IMPERIAL</text>' +
      /* sidewalk + street */
      '<rect x="0" y="176" width="400" height="14" fill="#9c9a94"/><rect x="0" y="190" width="400" height="70" fill="#2f3135"/>' +
      '<g class="dx-car"><rect x="0" y="232" width="52" height="15" rx="4" fill="' + LIME + '"/><circle cx="12" cy="247" r="4" fill="#111"/><circle cx="40" cy="247" r="4" fill="#111"/></g>' +
      /* street lamp */
      '<rect x="356" y="96" width="4" height="82" fill="#2d3a33"/><path d="M358 96q0-10 12-10" stroke="#2d3a33" stroke-width="3" fill="none"/><circle class="dx-flk" cx="372" cy="90" r="5" fill="#fff3b0"/>' +
      /* sewer cover + steam */
      '<ellipse cx="190" cy="214" rx="40" ry="11" fill="#1b1c1e" stroke="#55585e" stroke-width="2"/>' +
      '<path d="M156 214h68M190 205v18M166 209l48 10M166 219l48-10" stroke="#3d4045" stroke-width="1.5"/>' +
      '<text x="190" y="217" text-anchor="middle" ' + font + ' font-size="7" fill="#7b7f86" letter-spacing="2">SEWER</text>' +
      '<g fill="#e9eef2"><ellipse class="dx-st" cx="180" cy="204" rx="12" ry="9"/><ellipse class="dx-st dx-st2" cx="198" cy="204" rx="14" ry="10"/><ellipse class="dx-st dx-st3" cx="190" cy="202" rx="11" ry="8"/></g>' +
      /* street signs */
      '<rect x="20" y="130" width="4" height="60" fill="#2d3a33"/>' +
      '<rect x="0" y="130" width="62" height="14" rx="2" fill="#0f6b3a" stroke="#fff"/><text x="31" y="141" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">Bedford Av</text>' +
      '<rect x="0" y="146" width="62" height="14" rx="2" fill="#0f6b3a" stroke="#fff"/><text x="31" y="157" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">Pacific St</text>',
      sky("dxs3", "#0d1024", "#3b2c5a"));
  }

  /* 4. Brooklyn Av & St Johns Pl: the corner, St. Gregory the Great's bell tower behind, DAS EFX on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dxs4)"/>' + stars(14) +
      /* St. Gregory the Great: buff brick church + campanile */
      '<rect x="40" y="96" width="150" height="50" fill="#cdb48a"/><path d="M34 98l81-30l81 30z" fill="#9a5a3a"/>' +
      '<circle cx="115" cy="118" r="14" fill="#3a2f5a" stroke="#e8d8b4" stroke-width="3"/>' +
      '<rect x="206" y="20" width="44" height="126" fill="#c9ad80"/><path d="M200 22l28-18l28 18z" fill="#9a5a3a"/>' +
      '<rect x="214" y="34" width="28" height="30" rx="12" fill="#2a2440"/><g class="dx-bell"><path d="M222 42q6-6 12 0l2 14h-16z" fill="#c9a24a"/></g>' +
      '<rect x="218" y="78" width="8" height="20" fill="#2a2440"/><rect x="230" y="78" width="8" height="20" fill="#2a2440"/>' +
      /* brownstones right */
      '<rect x="270" y="70" width="130" height="80" fill="#6a3e2c"/>' + [282, 318, 354].map(x => '<rect x="' + x + '" y="84" width="20" height="24" fill="#2c3550"/><rect class="dx-bl dx-bl' + (x % 3 + 1) + '" x="' + (x + 3) + '" y="88" width="14" height="9" fill="#ffd98a" opacity=".8"/>').join("") +
      /* falling leaves from a London plane */
      '<circle cx="380" cy="44" r="30" fill="#2f5a34" opacity=".9"/><path class="dx-leaf" d="M360 60l6 3-6 3z" fill="#c9a24a"/><path class="dx-leaf dx-leaf2" d="M380 50l6 3-6 3z" fill="#b6e34a"/>' +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#3d3a3f"/>' +
      (() => { let b = ""; for (let y = 152; y < 226; y += 9) b += '<path d="M0 ' + y + 'h400" stroke="#2f2c31" stroke-width="1"/>'; return b; })() +
      tag("DAS EFX", 14, 204, 44, LIME, -5) + tag("HIT SQUAD", 196, 220, 19, CREAM, -4) + tag("IGGEDY", 222, 176, 22, ORANGE, -7) +
      /* sidewalk + cars */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="dx-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="352" y="96" width="5" height="132" fill="#2d3a33"/>' +
      '<rect x="296" y="98" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="114" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Brooklyn Av</text>' +
      '<rect x="290" y="124" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">St Johns Pl</text>' +
      '<circle class="dx-flk" cx="354" cy="92" r="4" fill="#fff6c2"/>',
      sky("dxs4", "#0a0c1a", "#2d3356"));
  }

  window.SCENES = { station: station, vawter: vawter, exit70: exit70, imperial: imperial, corner: corner };
})();
