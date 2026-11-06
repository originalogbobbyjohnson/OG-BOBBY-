/* Ratking game (NYC map, Manhattan: Washington Heights, "it all started on 163rd and Broadway").
   1. 163 St–Amsterdam Av on the C, underground.  2. Canal Street, the hustle and bustle ("Canal"; "brought it to Canal, now they buying it").
   3. The Brooklyn Banks, the red-brick skate banks under the bridge approach downtown (Ratking were a skate crew).
   4. A Heights rooftop at night, water tower, pigeons up ("Hak 'n' his hounds hover the heights").
   5. W 163 St and Broadway, the wall tagged RATKING, the United Palace up Broadway behind. 400 x 260 SVGs. All CSS classes prefixed "rk-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rkcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.rk-car{animation:rkcar 7s linear infinite}.rk-car2{animation-delay:-3.5s}' +
    '@keyframes rkcarb{from{transform:translateX(460px)}to{transform:translateX(-90px)}}.rk-carb{animation:rkcarb 8s linear infinite}' +
    '@keyframes rkblink{0%,100%{opacity:.25}50%{opacity:1}}.rk-bl{animation:rkblink 1.6s ease-in-out infinite}.rk-bl2{animation-delay:.5s}.rk-bl3{animation-delay:1s}' +
    '@keyframes rkflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.rk-flk{animation:rkflick 2.4s infinite}' +
    '@keyframes rkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.rk-bob{animation:rkbob .6s ease-in-out infinite}.rk-bob2{animation-delay:.3s}' +
    '@keyframes rkollie{0%,55%,100%{transform:translate(0,0) rotate(0)}70%{transform:translate(18px,-34px) rotate(-12deg)}85%{transform:translate(34px,-10px) rotate(0)}}.rk-ollie{transform-box:fill-box;animation:rkollie 2.2s ease-in-out infinite}' +
    '@keyframes rkfly{0%{transform:translate(-40px,20px)}100%{transform:translate(440px,-30px)}}.rk-fly{animation:rkfly 6s linear infinite}.rk-fly2{animation-delay:-2s}.rk-fly3{animation-delay:-4s}' +
    '@keyframes rkflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.rk-flap{transform-box:fill-box;transform-origin:50% 100%;animation:rkflap .3s linear infinite}' +
    '@keyframes rkturn{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}' +
    '@keyframes rkwalk{from{transform:translateX(0)}to{transform:translateX(-120px)}}.rk-walk{animation:rkwalk 9s linear infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const LIME = "#c8f169", PINK = "#ff4d6d", ICE = "#7bdff2", CREAM = "#f4ead8", BLUE = "#0039a6";

  /* 1. 163 St–Amsterdam Av (C), underground: IND tile walls with the maroon trim band, the black sign with the blue C, the C train sliding in */
  function rkStation() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#ece6d6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 20) band += '<rect x="' + x + '" y="38" width="10" height="10" fill="#7a2232"/><rect x="' + (x + 10) + '" y="38" width="10" height="10" fill="#5a1624"/>';
    let win = "";
    for (let x = 34; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d6cfbd"/>' + tiles + band + '<rect x="0" y="48" width="400" height="2" fill="#2a0a12"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#2b2b2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="rk-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="44" y="58" width="312" height="32" rx="3" fill="#111"/><rect x="44" y="58" width="312" height="3" fill="#fff"/>' +
      '<text x="58" y="80" ' + font + ' font-size="15" fill="#fff">163 St–Amsterdam Av</text>' + bullet(330, 74, "C", BLUE) +
      [16, 384].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#2c2f36"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "C", BLUE) +
        '<rect x="10" y="140" width="272" height="4" fill="' + BLUE + '"/><circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#57544f"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(326, 196, "#1b1b1b") + person(350, 200, "#262626") + person(70, 198, "#1e1e1e", "rk-bob") +
      txt("WASHINGTON HEIGHTS", 200, 236, 11, CREAM, 'letter-spacing="4"'));
  }

  /* 2. Astor Place, downtown skate hangout: "The Alamo" black steel cube balanced on its corner on the traffic island (it turns),
     the green cast-iron subway kiosk, kids on boards around it, cars going by */
  function rkAstor() {
    return svg(
      '<rect width="400" height="260" fill="url(#ra)"/>' + stars(10) +
      /* buildings behind */
      '<rect x="0" y="60" width="90" height="120" fill="#3a3340"/><rect x="96" y="80" width="70" height="100" fill="#4a3a36"/><rect x="250" y="70" width="70" height="110" fill="#3a3340"/><rect x="326" y="50" width="74" height="130" fill="#4a3a36"/>' +
      [[0, 90], [96, 70], [250, 70], [326, 74]].map(([bx, w]) => { let g = ""; for (let y = 90; y < 170; y += 16) for (let x = bx + 8; x < bx + w - 10; x += 16) g += '<rect class="rk-bl rk-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="8" height="9" fill="#ffd98a" opacity=".65"/>'; return g; }).join("") +
      /* plaza */
      '<rect x="0" y="180" width="400" height="34" fill="#8d8a84"/><rect x="0" y="180" width="400" height="3" fill="#b3b0aa"/>' +
      /* the cube on its corner, slowly turning */
      '<rect x="182" y="174" width="16" height="10" fill="#2a2a2a"/>' +
      '<g style="transform-box:fill-box;transform-origin:50% 100%;animation:rkturn 6s ease-in-out infinite"><path d="M190 176l-34 -40l34 -46l34 46z" fill="#1b1b1e" stroke="#9a9aa4" stroke-width="2"/><path d="M190 176l34 -40l-34 -46z" fill="#34343b" stroke="#9a9aa4" stroke-width="1"/>' +
      '<path d="M174 116l16 -20l16 20l-16 22z" fill="none" stroke="#4a4a50" stroke-width="2"/><circle cx="190" cy="118" r="5" fill="#3a3a40"/></g>' +
      /* cast-iron kiosk */
      '<rect x="292" y="150" width="64" height="32" fill="#2f5a3e"/><path d="M286 152l38 -26l38 26z" fill="#2f5a3e"/><path d="M296 152l28 -18l28 18" fill="none" stroke="#9cc3a6" stroke-width="2"/>' +
      '<rect x="306" y="160" width="36" height="22" fill="#e8d9a0" opacity=".85"/><circle class="rk-flk" cx="324" cy="122" r="4" fill="#9cff9c"/>' +
      /* skaters (silhouettes) */
      '<g class="rk-ollie"><circle cx="84" cy="150" r="6" fill="#0d0d10"/><rect x="79" y="157" width="10" height="17" rx="4" fill="#0d0d10"/><path d="M81 174l-4 8M87 174l4 8" stroke="#0d0d10" stroke-width="4" stroke-linecap="round"/><rect x="68" y="182" width="32" height="4" rx="2" fill="' + LIME + '"/></g>' +
      person(244, 158, "#0d0d10", "rk-bob") + '<rect x="234" y="184" width="26" height="4" rx="2" fill="' + PINK + '"/>' + person(130, 160, "#151515", "rk-bob rk-bob2") +
      /* street */
      '<rect x="0" y="214" width="400" height="46" fill="#3b3d42"/><path d="M0 238h400" stroke="#f4c430" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="rk-car"><rect x="0" y="242" width="48" height="13" rx="4" fill="#f4c430"/><rect x="14" y="236" width="20" height="7" rx="2" fill="#f4c430"/><circle cx="10" cy="255" r="4" fill="#111"/><circle cx="38" cy="255" r="4" fill="#111"/></g>' +
      '<g class="rk-carb"><rect x="0" y="218" width="50" height="13" rx="4" fill="#3a86ff"/><circle cx="12" cy="231" r="4" fill="#111"/><circle cx="40" cy="231" r="4" fill="#111"/></g>' +
      '<rect x="40" y="132" width="4" height="50" fill="#3d4b3f"/><rect x="8" y="120" width="68" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/>' + txt("Astor Pl", 42, 132, 10, "#fff"),
      sky("ra", "#0b0c18", "#3a2a40"));
  }

  /* 3. The Brooklyn Banks: the red-brick banks sloping down under the stone-and-steel bridge approach, a skater popping an ollie off the lip */
  function rkBanks() {
    /* sloped bank: brick rows get taller toward the viewer (perspective), courses offset row by row */
    let brick = "", y = 152, h = 3, r = 0;
    while (y < 236) { const bw = 8 + h * 2.4; for (let x = (r % 2) ? -bw / 2 : 0; x < 400; x += bw + 1) brick += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + h.toFixed(1) + '" fill="' + (r % 3 ? "#a4442e" : "#9a3f2a") + '"/>'; y += h + 1; h = Math.min(h + 0.9, 11); r++; }
    return svg(
      '<rect width="400" height="260" fill="url(#rb)"/>' +
      /* the approach overhead: granite arches + steel deck */
      '<rect x="0" y="0" width="400" height="34" fill="#4a4c52"/><rect x="0" y="34" width="400" height="8" fill="#2c2e33"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 20) g += '<path d="M' + x + ' 42l10 12l10 -12" stroke="#2c2e33" stroke-width="2" fill="none"/>'; return g; })() +
      '<path d="M40 150v-70a50 50 0 0 1 100 0v70z" fill="#141519"/><path d="M260 150v-70a50 50 0 0 1 100 0v70z" fill="#141519"/>' +
      '<rect x="0" y="54" width="40" height="96" fill="#b9b2a4"/><rect x="140" y="54" width="120" height="96" fill="#b9b2a4"/><rect x="360" y="54" width="40" height="96" fill="#b9b2a4"/>' +
      (() => { let g = ""; for (let y = 64; y < 150; y += 14) g += '<path d="M0 ' + y + 'h40M140 ' + y + 'h120M360 ' + y + 'h40" stroke="#9c9586" stroke-width="1"/>'; return g; })() +
      '<circle class="rk-flk" cx="200" cy="70" r="5" fill="#fff6c2"/>' +
      /* the banks */
      '<path d="M0 150h400v86h-400z" fill="#7a2f1e"/>' + brick + '<rect x="0" y="150" width="400" height="30" fill="#000" opacity=".22"/>' +
      '<path d="M0 150h400" stroke="#d9cfc0" stroke-width="4"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#6f6a62"/>' +
      tag("SO IT GOES", 150, 128, 16, LIME, -4) +
      /* the skater (silhouette, no face) and board */
      '<g class="rk-ollie"><circle cx="110" cy="176" r="7" fill="#0d0d10"/><rect x="104" y="184" width="12" height="20" rx="5" fill="#0d0d10"/>' +
      '<path d="M106 204l-6 12M114 204l6 12" stroke="#0d0d10" stroke-width="5" stroke-linecap="round"/><path d="M104 190l-12 8M116 190l12 -6" stroke="#0d0d10" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="90" y="217" width="40" height="5" rx="2.5" fill="' + LIME + '"/><circle cx="96" cy="224" r="2.5" fill="#eee"/><circle cx="124" cy="224" r="2.5" fill="#eee"/></g>' +
      person(330, 206, "#0d0d10", "rk-bob") + '<rect x="318" y="232" width="28" height="4" rx="2" fill="' + PINK + '"/>',
      sky("rb", "#0e0f16", "#3a3a48"));
  }

  /* 4. A Heights rooftop at night: tar roof and parapet, a wooden water tower, the crew (silhouettes) by the boombox, pigeons flying over the Hudson */
  function rkRoof() {
    const bird = (cls, y) => '<g class="rk-fly ' + cls + '"><g class="rk-flap"><path d="M0 ' + y + 'q6-6 12 0q6-6 12 0" stroke="#e8e8e8" stroke-width="2.4" fill="none"/></g></g>';
    let lights = "";
    for (let x = 6; x < 400; x += 14) lights += '<circle class="rk-bl rk-bl' + (x % 3 + 1) + '" cx="' + x + '" cy="' + (112 + (x % 5)) + '" r="1.4" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rr)"/>' + stars(18) + '<circle cx="330" cy="40" r="16" fill="#f4ead8"/><circle cx="336" cy="36" r="14" fill="#1b1f38"/>' +
      /* far shore cliffs + river */
      '<path d="M0 104l40-12l60 6l80-10l70 8l70-10l80 8v20h-400z" fill="#1c2230"/>' + lights +
      '<rect x="0" y="118" width="400" height="22" fill="#20304a"/><path d="M20 128h40M120 132h50M250 126h40M330 133h40" stroke="#7bdff2" stroke-width="1.2" opacity=".5"/>' +
      /* other Heights rooftops */
      '<rect x="0" y="136" width="120" height="40" fill="#3a2a26"/><rect x="290" y="132" width="110" height="44" fill="#3a2a26"/>' +
      /* water tower */
      '<rect x="56" y="104" width="3" height="30" fill="#2a1d14"/><rect x="88" y="104" width="3" height="30" fill="#2a1d14"/>' +
      '<rect x="50" y="74" width="46" height="34" fill="#7a4e2e"/><path d="M50 84h46M50 94h46M50 102h46" stroke="#4a2e18"/><path d="M46 76l27 -18l27 18z" fill="#4a2e18"/>' +
      /* our roof */
      '<rect x="0" y="176" width="400" height="84" fill="#2b2b2e"/><rect x="0" y="170" width="400" height="10" fill="#6a3a2c"/><rect x="0" y="168" width="400" height="3" fill="#9a8a7a"/>' +
      '<rect x="300" y="186" width="44" height="34" fill="#45454a"/><path d="M300 186l22 -10l22 10" fill="#3a3a3e"/>' +
      /* crew + boombox */
      '<rect x="168" y="218" width="40" height="22" rx="3" fill="#1a1a1a"/><circle cx="178" cy="229" r="6" fill="#444"/><circle cx="198" cy="229" r="6" fill="#444"/><rect x="182" y="220" width="12" height="4" fill="' + LIME + '"/>' +
      '<g class="rk-bob"><circle cx="140" cy="190" r="8" fill="#0d0d10"/><rect x="131" y="199" width="18" height="30" rx="6" fill="#0d0d10"/></g>' +
      '<g class="rk-bob rk-bob2"><circle cx="236" cy="188" r="8" fill="#0d0d10"/><rect x="227" y="197" width="18" height="32" rx="6" fill="#0d0d10"/></g>' +
      '<g class="rk-bob"><circle cx="266" cy="194" r="7" fill="#0d0d10"/><rect x="258" y="202" width="16" height="26" rx="6" fill="#0d0d10"/></g>' +
      bird("", 50) + bird("rk-fly2", 66) + bird("rk-fly3", 40),
      sky("rr", "#070a16", "#2a3150"));
  }

  /* 5. W 163 St and Broadway: green signs, the wall tagged RATKING, the United Palace's cream terracotta front and tower up Broadway behind */
  function rkCorner() {
    let orn = "";
    for (let x = 150; x < 250; x += 10) orn += '<rect x="' + x + '" y="46" width="6" height="8" fill="#c9a77a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rx)"/>' + stars(14) +
      /* walk-ups both sides */
      '<rect x="0" y="60" width="110" height="80" fill="#4a3330"/><rect x="290" y="56" width="110" height="84" fill="#3e2e36"/>' +
      [0, 290].map(bx => { let g = ""; for (let y = 70; y < 132; y += 16) for (let x = bx + 10; x < bx + 100; x += 18) g += '<rect class="rk-bl rk-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="9" height="10" fill="#ffd98a" opacity=".7"/>'; return g; }).join("") +
      /* the United Palace: cream terracotta, tall arched center, ornate cornice and the tower */
      '<rect x="120" y="54" width="160" height="86" fill="#efe1c4"/><rect x="116" y="48" width="168" height="8" fill="#d9c49a"/>' + orn +
      '<rect x="182" y="10" width="36" height="40" fill="#efe1c4"/><path d="M178 12l22 -12l22 12z" fill="#b8956a"/><rect x="190" y="18" width="20" height="24" rx="10" fill="#7a5a3a"/>' +
      '<path d="M176 140v-50a24 24 0 0 1 48 0v50z" fill="#b8956a"/><path d="M182 140v-48a18 18 0 0 1 36 0v48z" fill="#3a2a1c"/>' +
      '<rect class="rk-flk" x="186" y="98" width="28" height="10" fill="#ffd98a" opacity=".8"/>' +
      [130, 150, 236, 256].map(x => '<rect x="' + x + '" y="66" width="12" height="60" rx="6" fill="#d9c49a"/>').join("") +
      txt("UNITED PALACE", 200, 64, 7, "#7a5a3a", 'letter-spacing="2"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#38393f"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#2e2f35" stroke-width="1"/>'; return b; })() +
      tag("RATKING", 18, 196, 50, LIME, -5) + tag("WAKE UP", 220, 214, 20, PINK, -4) + tag("HXC", 30, 222, 16, CREAM, -3) + tag("SPORT", 238, 170, 15, ICE, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="rk-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 163 St", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Broadway", 348, 108, 12, "#fff") +
      '<circle class="rk-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("rx", "#090b18", "#2a2a44"));
  }

  window.SCENES = { rkStation: rkStation, rkAstor: rkAstor, rkBanks: rkBanks, rkRoof: rkRoof, rkCorner: rkCorner };
})();
