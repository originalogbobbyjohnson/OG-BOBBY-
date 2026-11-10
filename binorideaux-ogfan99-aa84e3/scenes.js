/* Bino Rideaux scenes (Regions tab: Los Angeles + SoCal; South Central LA). CSS classes prefixed br- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes brflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.br-flk{animation:brflick 2.6s infinite}.br-flk2{animation-delay:.9s}' +
    '@keyframes brglow{0%,100%{opacity:.4}50%{opacity:1}}.br-glow{animation:brglow 2.2s ease-in-out infinite}.br-g2{animation-delay:-1.1s}' +
    '@keyframes brcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.br-car{animation:brcar 5s linear infinite}.br-car2{animation-delay:-2.5s}' +
    '@keyframes brcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.br-carL{animation:brcarL 6s linear infinite}.br-carL2{animation-delay:-3s}' +
    '@keyframes brsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-24px);opacity:0}}.br-st{animation:brsteam 1.8s ease-out infinite}.br-st2{animation-delay:.6s}.br-st3{animation-delay:1.2s}' +
    '@keyframes brpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.br-pulse{transform-box:fill-box;transform-origin:50% 50%;animation:brpulse .5s ease-in-out infinite}' +
    '@keyframes brsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.br-sway{transform-box:fill-box;transform-origin:50% 100%;animation:brsway 3.2s ease-in-out infinite}' +
    '@keyframes brsun{0%{transform:translateY(10px)}100%{transform:translateY(-6px)}}.br-sun{animation:brsun 6s ease-in-out infinite alternate}' +
    '@keyframes brsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.br-sp{animation:brsp 1.4s ease-out infinite}.br-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, ink) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (ink || "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "br-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, h, c) => '<g class="br-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#2a201a" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#1f3a2a") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><path d="M0 14q2 -10 14 -12l12 -8h26l14 8q14 2 14 12z" fill="' + body + '"/><rect x="0" y="12" width="80" height="6" rx="2" fill="' + body + '"/>' +
    '<path d="M28 -4h22l10 8h-38z" fill="#9fc3e0" opacity=".8"/><circle cx="18" cy="19" r="6" fill="#111"/><circle cx="62" cy="19" r="6" fill="#111"/><circle cx="18" cy="19" r="2.5" fill="#bbb"/><circle cx="62" cy="19" r="2.5" fill="#bbb"/><rect x="76" y="10" width="4" height="3" fill="#fff6c2"/></g></g>';
  const BLUE = "#4da3ff", GOLD = "#f2c14e", JSIL = "#adb8bf", INK = "#070b16";

  /* 1. Slauson station on the Metro J Line, a platform in the middle of the 110 Harbor Freeway at Slauson Ave: the silver J Line bus pulls in (anim-train), black sign with the silver J bullet, freeway traffic both sides */
  function brstation() {
    let win = ""; for (let x = 60; x < 300; x += 34) win += '<rect x="' + x + '" y="114" width="26" height="22" rx="3" fill="#cfe7f7" opacity=".9"/>';
    const bus = '<g class="anim-train"><rect x="40" y="104" width="290" height="62" rx="10" fill="#c9cfd4" stroke="#6f777e" stroke-width="2"/>' + win +
      '<rect x="40" y="142" width="290" height="6" fill="' + JSIL + '"/><rect x="40" y="148" width="290" height="3" fill="#5a6168"/>' +
      '<rect x="308" y="110" width="18" height="36" rx="3" fill="#9fc3e0"/><rect x="44" y="114" width="10" height="30" rx="2" fill="#7a8a96"/>' +
      '<circle cx="90" cy="166" r="10" fill="#111"/><circle cx="90" cy="166" r="4" fill="#999"/><circle cx="280" cy="166" r="10" fill="#111"/><circle cx="280" cy="166" r="4" fill="#999"/>' +
      '<circle cx="322" cy="154" r="4" fill="#fff6c2"/>' + bullet(70, 92, "J", JSIL, "#111") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#br1)"/>' + stars(18) +
      /* downtown towers far off up the 110 */
      '<g fill="#1a2238">' + [[150, 30, 40], [190, 22, 58], [218, 18, 44], [242, 26, 36], [270, 16, 30]].map(b => '<rect x="' + b[0] + '" y="' + (78 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '"/>').join("") + '</g>' +
      '<rect x="0" y="76" width="400" height="6" fill="#3b4256"/>' +
      /* the station canopy over the median platform */
      '<rect x="20" y="40" width="360" height="10" fill="#d8dde2"/>' + [40, 140, 260, 360].map(x => '<rect x="' + x + '" y="50" width="6" height="120" fill="#8d959c"/>').join("") +
      '<rect x="120" y="54" width="170" height="28" rx="3" fill="#111"/><text x="205" y="73" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">SLAUSON</text>' + bullet(274, 68, "J", JSIL, "#111") +
      '<rect x="0" y="170" width="400" height="10" fill="#eab308"/><rect x="0" y="180" width="400" height="12" fill="#9a9ca0"/>' +
      /* freeway lanes below the platform */
      '<rect x="0" y="192" width="400" height="68" fill="#3b3d42"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="224" width="24" height="3" fill="#e8e4dc"/>').join("") +
      car(0, 200, "#b8322a", "br-car") + car(0, 232, "#e8e4dc", "br-carL") + car(0, 200, "#2a5aa8", "br-car br-car2") +
      bus,
      sky("br1", "#0a1030", "#3c3a62"));
  }

  /* 2. Granny's porch in South Central: the little stucco bungalow, porch steps, the porch light flickering, a palm and the street out front ("jumped up off the porch") */
  function brporch() {
    return svg(
      '<rect width="400" height="260" fill="url(#br2)"/>' + stars(22) +
      '<circle cx="330" cy="40" r="16" fill="#f4efd8" opacity=".9"/>' +
      palm(52, 190, 120) + palm(366, 196, 96) +
      /* bungalow */
      '<path d="M90 110l110 -46l110 46z" fill="#6b3a2a"/><rect x="100" y="108" width="200" height="88" fill="#e2c9a0"/>' +
      '<rect x="120" y="126" width="40" height="34" fill="#ffd77a" class="br-glow"/><path d="M120 143h40M140 126v34" stroke="#6b4a2a" stroke-width="2"/>' +
      '<rect x="240" y="126" width="40" height="34" fill="#ffd77a" class="br-glow br-g2"/><path d="M240 143h40M260 126v34" stroke="#6b4a2a" stroke-width="2"/>' +
      '<rect x="182" y="132" width="36" height="64" fill="#5a3a24"/><circle cx="210" cy="166" r="2" fill="' + GOLD + '"/>' +
      /* porch roof, posts, light, steps */
      '<rect x="160" y="112" width="80" height="8" fill="#6b3a2a"/><rect x="164" y="120" width="5" height="76" fill="#f2efe8"/><rect x="231" y="120" width="5" height="76" fill="#f2efe8"/>' +
      '<rect x="196" y="122" width="8" height="6" rx="2" fill="#fff3b0" class="br-flk"/><circle cx="200" cy="125" r="8" fill="#fff3b0" opacity=".15" class="br-flk"/>' +
      '<rect x="160" y="196" width="80" height="8" fill="#b9b2a6"/><rect x="168" y="204" width="64" height="8" fill="#a7a095"/><rect x="176" y="212" width="48" height="8" fill="#958e84"/>' +
      '<rect x="0" y="196" width="160" height="24" fill="#2f4a2a"/><rect x="240" y="196" width="160" height="24" fill="#2f4a2a"/>' +
      '<rect x="0" y="220" width="400" height="10" fill="#c9c4ba"/><rect x="0" y="230" width="400" height="30" fill="#34353a"/>' +
      car(0, 232, "#1f3f8a", "br-car") +
      tag("OFF THE PORCH", 250, 250, 15, GOLD, -3),
      sky("br2", "#0b1030", "#2c3a6a"));
  }

  /* 3. Breakfast in the hood on Crenshaw Blvd: a little corner breakfast stand at sunrise, steam off the griddle, a coupe parked with the roof down ("take her to breakfast in my hood") */
  function brbreakfast() {
    return svg(
      '<rect width="400" height="260" fill="url(#br3)"/>' +
      '<g class="br-sun"><circle cx="300" cy="118" r="34" fill="#ffcf6a"/><circle cx="300" cy="118" r="48" fill="#ffcf6a" opacity=".25"/></g>' +
      '<path d="M0 140q100 -18 200 -6q100 12 200 -4v20h-400z" fill="#6a4a6a" opacity=".6"/>' +
      palm(24, 170, 110, "#2a3a2a") + palm(380, 172, 100, "#2a3a2a") +
      /* the stand */
      '<rect x="70" y="96" width="200" height="84" fill="#f2e6d0"/><rect x="62" y="84" width="216" height="16" fill="' + BLUE + '"/>' +
      '<path d="M62 100h216l-10 14h-196z" fill="#fff" opacity=".9"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (66 + i * 24) + ' 100h12l-3 14h-12z" fill="' + BLUE + '"/>').join("") +
      '<text x="170" y="97" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="2">BREAKFAST</text>' +
      '<rect x="86" y="122" width="168" height="34" fill="#2a2a30"/><rect x="92" y="128" width="72" height="22" fill="#ffd77a" opacity=".85"/>' +
      '<rect x="176" y="136" width="70" height="8" fill="#555"/>' +
      '<g class="br-st"><circle cx="196" cy="130" r="4" fill="#fff" opacity=".7"/></g><g class="br-st br-st2"><circle cx="210" cy="128" r="3" fill="#fff" opacity=".7"/></g><g class="br-st br-st3"><circle cx="226" cy="131" r="4" fill="#fff" opacity=".7"/></g>' +
      /* waffle + plate on the counter */
      '<rect x="70" y="156" width="200" height="10" fill="#8a6a4a"/><ellipse cx="120" cy="156" rx="18" ry="4" fill="#fff"/><rect x="108" y="148" width="24" height="8" rx="2" fill="#d9a441"/><path d="M114 148v8M120 148v8M126 148v8M108 152h24" stroke="#a87a2a" stroke-width="1"/>' +
      '<rect x="0" y="180" width="400" height="8" fill="#c9c4ba"/><rect x="0" y="188" width="400" height="72" fill="#3a3b40"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="226" width="24" height="3" fill="#e8e4dc"/>').join("") +
      /* convertible coupe, roof down */
      '<g transform="translate(250 190)"><path d="M0 20q4 -12 24 -14h70q20 2 24 14z" fill="#e8e4dc"/><rect x="0" y="18" width="118" height="10" rx="3" fill="#e8e4dc"/><path d="M40 6l8 -10h4l-6 10z" fill="#9fc3e0"/>' +
      '<rect x="56" y="2" width="30" height="5" rx="2" fill="#6a3a2a"/><circle cx="26" cy="30" r="8" fill="#111"/><circle cx="92" cy="30" r="8" fill="#111"/><circle cx="26" cy="30" r="3" fill="#ccc"/><circle cx="92" cy="30" r="3" fill="#ccc"/></g>' +
      car(0, 230, "#1f3f8a", "br-carL") + '<rect x="300" y="60" width="5" height="120" fill="#555"/>' + sign(250, 40, 110, "Crenshaw Blvd", 12),
      sky("br3", "#2a3a7a", "#f0a060"));
  }

  /* 4. Outside: summer night on the block, string lights over the street, the big speaker pumping, a SIXTAPE cassette on the speaker ("Outside", "Sixtape" with Blxst) */
  function broutside() {
    let bulbs = ""; for (let i = 0; i < 14; i++) { const x = 10 + i * 28, y = 58 + Math.sin(i / 13 * Math.PI) * 22; bulbs += '<circle class="br-glow' + (i % 2 ? " br-g2" : "") + '" cx="' + x + '" cy="' + y + '" r="4" fill="' + (i % 3 ? GOLD : BLUE) + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#br4)"/>' + stars(26) +
      '<path d="M0 56q200 50 400 0" stroke="#222" stroke-width="1.5" fill="none"/>' + bulbs +
      palm(30, 170, 120) + palm(370, 170, 110) +
      '<rect x="0" y="150" width="400" height="20" fill="#2a3a2a"/><rect x="0" y="170" width="400" height="10" fill="#c9c4ba"/><rect x="0" y="180" width="400" height="80" fill="#34353a"/>' +
      /* houses in the back */
      '<rect x="70" y="112" width="80" height="40" fill="#cfae86"/><path d="M64 114l46 -22l46 22z" fill="#5a3a2a"/><rect x="96" y="124" width="22" height="16" fill="#ffd77a" class="br-glow"/>' +
      '<rect x="250" y="116" width="84" height="36" fill="#a9c2c9"/><path d="M244 118l48 -22l48 22z" fill="#3a3a4a"/><rect x="280" y="126" width="22" height="16" fill="#ffd77a" class="br-glow br-g2"/>' +
      /* speaker stack */
      '<rect x="160" y="120" width="80" height="104" rx="6" fill="#151515" stroke="#3a3a3a" stroke-width="2"/>' +
      '<g class="br-pulse"><circle cx="200" cy="150" r="18" fill="#2a2a2a" stroke="#555" stroke-width="2"/><circle cx="200" cy="150" r="6" fill="#111"/></g>' +
      '<g class="br-pulse"><circle cx="200" cy="196" r="20" fill="#2a2a2a" stroke="#555" stroke-width="2"/><circle cx="200" cy="196" r="7" fill="#111"/></g>' +
      /* cassette on top */
      '<rect x="170" y="100" width="60" height="22" rx="3" fill="#e8e4dc" stroke="#333" stroke-width="1.5"/><rect x="176" y="104" width="48" height="8" fill="' + BLUE + '"/><text x="200" y="111" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">SIXTAPE</text>' +
      '<circle cx="188" cy="117" r="3" fill="#333"/><circle cx="212" cy="117" r="3" fill="#333"/>' +
      '<g class="br-sp"><path d="M248 150q8 -6 0 -14" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g><g class="br-sp br-sp2"><path d="M152 150q-8 -6 0 -14" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>' +
      car(0, 228, "#7a2a9a", "br-car") +
      tag("OUTSIDE", 236, 252, 34, BLUE, -4),
      sky("br4", "#0a0c26", "#3a2a5a"));
  }

  /* 5. His corner: Crenshaw Blvd and W 60th St, green street signs, BINO tagged on the wall, the white FaithDome far off behind */
  function brcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#br5)"/>' + stars(16) +
      /* FaithDome: wide low white dome */
      '<path d="M120 124q90 -70 180 0z" fill="#eef1f4"/><path d="M120 124q90 -70 180 0" stroke="#fff" stroke-width="2" fill="none" class="br-glow"/>' +
      '<g clip-path="url(#brdome)">' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (150 + i * 20) + ' 124L210 60" stroke="#c9d2dc" stroke-width="1"/>').join("") + '<path d="M130 112q80 -24 160 0M146 98q64 -18 128 0" stroke="#c9d2dc" stroke-width="1" fill="none"/></g>' +
      '<rect x="116" y="122" width="188" height="8" fill="#c9d2dc"/>' +
      palm(28, 140, 74) + palm(372, 142, 84) +
      '<rect x="0" y="134" width="400" height="92" fill="#cdb08a"/><rect x="0" y="134" width="400" height="6" fill="#b08f66"/>' +
      tag("BINO", 26, 204, 70, BLUE, -6) + tag("RIDEAUX", 196, 178, 30, GOLD, -4) + tag("NAH FOR REAL", 196, 214, 20, "#fff", -5) +
      '<rect x="0" y="226" width="400" height="34" fill="#4e4e54"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(292, 98, 104, "Crenshaw Blvd", 12) + sign(300, 124, 88, "W 60th St", 12) +
      '<g class="br-sp"><circle cx="150" cy="176" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="br-sp br-sp2"><circle cx="156" cy="170" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("br5", "#101a3e", "#c86a4e") + '<clipPath id="brdome"><path d="M120 124q90 -70 180 0z"/></clipPath>');
  }

  window.SCENES = { brstation: brstation, brporch: brporch, brbreakfast: brbreakfast, broutside: broutside, brcorner: brcorner };
})();
