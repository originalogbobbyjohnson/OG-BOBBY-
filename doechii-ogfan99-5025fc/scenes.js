/* doechii scenes (Regions tab: South Florida; East Tampa, Tampa - she grew up on E Genesee St by N 29th St). CSS classes and ids prefixed dc- (the page's own anim-train slides the bus in).
   1 HART Route 32 pulling up to the MLK Jr Blvd / 29th St stop in East Tampa: white bus, the stop sign, palms, cinderblock houses, Florida sun.
   2 7th Avenue, Ybor City at night (she played "every single venue in Ybor" coming up): red-brick buildings with black iron balconies, globe street lamps, a stage door glowing, one of Ybor's wild roosters strutting across the brick street.
   3 The swamp (the Swamp Princess, Alligator Bites Never Heal): the cypress boardwalk at Lettuce Lake on the Hillsborough River, Spanish moss, tea-colored water, a gator gliding.
   4 Howard W. Blake High School on North Boulevard (her arts magnet, shouted out on Nosebleeds): the black-and-gold school front, music notes rising from the choir room.
   5 E Genesee St and N 29th St in East Tampa: green signs, DOECHII tagged on the cinderblock wall, the silver minarets of Plant Hall and downtown Tampa behind.
   400 x 260 SVGs. No logos, no faces; every 9 is drawn by hand with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dcsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.dc-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dcsway 3s ease-in-out infinite}.dc-sway2{animation-delay:-1.5s}' +
    '@keyframes dcroost{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.dc-roost{animation:dcroost 9s linear infinite;animation-delay:-3s}' +
    '@keyframes dcbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.dc-bob{animation:dcbob .45s ease-in-out infinite}' +
    '@keyframes dcglow{0%,100%{opacity:.5}50%{opacity:1}}.dc-glow{animation:dcglow 1.8s ease-in-out infinite}.dc-glow2{animation-delay:-.9s}' +
    '@keyframes dcgator{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.dc-gator{animation:dcgator 16s linear infinite;animation-delay:-6s}' +
    '@keyframes dcrip{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}.dc-rip{transform-box:fill-box;transform-origin:50% 50%;animation:dcrip 2.4s ease-out infinite}.dc-rip2{animation-delay:-1.2s}' +
    '@keyframes dcmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(5deg)}}.dc-moss{transform-box:fill-box;transform-origin:50% 0%;animation:dcmoss 3.4s ease-in-out infinite}.dc-moss2{animation-delay:-1.7s}' +
    '@keyframes dcnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}.dc-note{animation:dcnote 3s ease-out infinite}.dc-note2{animation-delay:-1s}.dc-note3{animation-delay:-2s}' +
    '@keyframes dcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dc-sp{animation:dcspray 1.4s ease-out infinite}.dc-sp2{animation-delay:.45s}' +
    '@keyframes dcbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.dc-bird{animation:dcbird 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a hand-drawn 9: round head + straight stem (no hooked tail). x,y = left/baseline like a text glyph, s = font size */
  const nine = (x, y, s, fill) => {
    const r = s * 0.2, cx = x + s * 0.28, cy = y - s * 0.5;
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fill + '" stroke-width="' + (s * 0.13) + '"/>' +
      '<path d="M' + (cx + r) + ' ' + cy + 'V' + y + '" stroke="' + fill + '" stroke-width="' + (s * 0.12) + '"/>';
  };
  const label = (x, w, txt) => '<rect x="' + x + '" y="230" width="' + w + '" height="22" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="245" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* sabal / cabbage palm (Florida's state tree): rough trunk, fan fronds */
  const palm = (x, base, h, s, cls) => {
    const top = base - h;
    return '<g><path d="M' + (x - 4 * s) + ' ' + base + 'Q' + (x + 3 * s) + ' ' + (base - h / 2) + ' ' + (x - 2 * s) + ' ' + top + 'h' + (5 * s) + 'Q' + (x + 7 * s) + ' ' + (base - h / 2) + ' ' + (x + 4 * s) + ' ' + base + 'z" fill="#8a7a60"/>' +
      '<g class="dc-sway ' + (cls || "") + '" fill="#3f7d3a">' + [-80, -50, -20, 10, 40, 70, 200, 160].map(a => '<path transform="rotate(' + a + ' ' + (x + s) + ' ' + top + ')" d="M' + (x + s) + ' ' + top + 'l' + (34 * s) + ' ' + (-8 * s) + 'l' + (-4 * s) + ' ' + (12 * s) + 'z"/>').join("") + '</g></g>';
  };
  const GOLD = "#e8b04a", LIME = "#9fd356";

  /* 1. HART Route 32 at MLK Jr Blvd / 29th St, East Tampa */
  function dcstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="122" width="34" height="26" rx="3" fill="#22303a"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="110" width="320" height="82" rx="10" fill="#f5f6f4" stroke="#6d757c" stroke-width="2"/>' + win +
      '<path d="M34 162q160 -20 320 4v9q-160 -24 -320 -4z" fill="#0b5ea8"/><path d="M34 174q160 -16 320 4v5q-160 -18 -320 -2z" fill="#f08a24"/>' +
      '<rect x="318" y="118" width="32" height="44" rx="4" fill="#22303a"/><rect x="276" y="112" width="74" height="12" rx="2" fill="#111"/><text x="313" y="121" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">32 MLK BLVD</text>' +
      '<circle cx="90" cy="194" r="14" fill="#222"/><circle cx="90" cy="194" r="6" fill="#999"/><circle cx="300" cy="194" r="14" fill="#222"/><circle cx="300" cy="194" r="6" fill="#999"/><circle cx="350" cy="182" r="3.5" fill="#fff6c2"/></g>';
    const house = (x, w, c) => '<rect x="' + x + '" y="124" width="' + w + '" height="30" fill="' + c + '"/><path d="M' + (x - 4) + ' 126l' + (w / 2 + 4) + ' -16l' + (w / 2 + 4) + ' 16z" fill="#7a6e66"/><rect x="' + (x + 8) + '" y="132" width="10" height="10" fill="#3a4a56"/><rect x="' + (x + w - 18) + '" y="132" width="10" height="10" fill="#3a4a56"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dcs1)"/><circle cx="330" cy="40" r="22" fill="#fff3b0" opacity=".9"/>' +
      house(150, 56, "#e9d8b4") + house(222, 50, "#bcd6c2") +
      palm(30, 154, 116, 1) + palm(112, 154, 96, .85, "dc-sway2") + palm(372, 154, 108, 1, "dc-sway2") +
      '<rect x="0" y="152" width="400" height="18" fill="#d9d2c0"/>' + bus +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4a50"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* bus stop sign */
      '<rect x="14" y="92" width="4" height="114" fill="#888"/><rect x="0" y="66" width="60" height="38" rx="3" fill="#0b5ea8" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="30" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text><text x="30" y="98" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">32</text>' +
      /* label with a hand-drawn 9 in 29TH */
      '<rect x="120" y="230" width="270" height="22" rx="3" fill="#000" opacity=".55"/>' +
      '<text x="222" y="245" text-anchor="end" ' + font + ' font-size="11" fill="#fff">MLK JR BLVD / 2</text>' + nine(222.6, 245, 11, "#fff") +
      '<text x="230.6" y="245" ' + font + ' font-size="11" fill="#fff">TH ST, EAST TAMPA</text>',
      sky("dcs1", "#3d9ee0", "#fbe3a6"));
  }

  /* 2. 7th Avenue, Ybor City at night */
  function dcybor() {
    const bldg = (x, w, h, c) => {
      const top = 170 - h;
      let s = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
        '<rect x="' + (x - 2) + '" y="' + (top - 6) + '" width="' + (w + 4) + '" height="8" fill="#5c2a1c"/>';
      const n = Math.floor((w - 10) / 22);
      for (let i = 0; i < n; i++) {
        const wx = x + 8 + i * 22;
        s += '<path d="M' + wx + ' ' + (top + 34) + 'v-14a7 7 0 0 1 14 0v14z" fill="#f4d58a" class="dc-glow' + (i % 2 ? " dc-glow2" : "") + '"/>';
        s += '<rect x="' + wx + '" y="' + (top + 56) + '" width="14" height="30" fill="#2a1a14"/>';
      }
      /* wrought iron balcony */
      s += '<rect x="' + (x + 2) + '" y="' + (top + 42) + '" width="' + (w - 4) + '" height="3" fill="#111"/>' +
        '<g stroke="#111" stroke-width="1.4">' + Array.from({ length: Math.floor(w / 6) }, (_, i) => '<path d="M' + (x + 4 + i * 6) + ' ' + (top + 42) + 'v-10"/>').join("") + '</g>' +
        '<rect x="' + (x + 2) + '" y="' + (top + 31) + '" width="' + (w - 4) + '" height="2" fill="#111"/>';
      return s;
    };
    const lamp = x => '<rect x="' + (x - 2) + '" y="128" width="4" height="56" fill="#1c1c1c"/><path d="M' + (x - 10) + ' 132h20" stroke="#1c1c1c" stroke-width="3"/>' +
      '<circle class="dc-glow" cx="' + (x - 10) + '" cy="124" r="6" fill="#fff4cc"/><circle class="dc-glow dc-glow2" cx="' + (x + 10) + '" cy="124" r="6" fill="#fff4cc"/><circle cx="' + x + '" cy="118" r="6" fill="#fff4cc"/>';
    const rooster = '<g class="dc-roost"><g class="dc-bob">' +
      '<path d="M0 214q-6 -16 6 -22q10 -4 14 4l4 -12q6 -2 6 4l-4 10q4 8 -4 14z" fill="#8a3a1a"/>' +
      '<path d="M-2 200q-14 -14 -8 -26q8 8 10 20z" fill="#1f4a2a"/><path d="M-4 204q-12 -6 -12 -18q8 4 12 14z" fill="#2c6b3a"/>' +
      '<path d="M24 182q2 -6 6 -2q2 -4 4 0q-2 4 -10 4z" fill="#d6262c"/><path d="M30 190l6 2l-6 2z" fill="#f2c200"/><circle cx="27" cy="187" r="1.2" fill="#111"/>' +
      '<path d="M8 214v10M14 214v10" stroke="#d9a520" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dcy1)"/>' +
      bldg(0, 120, 120, "#a2492f") + bldg(124, 96, 104, "#b85a3a") + bldg(224, 84, 126, "#9a3f28") + bldg(312, 88, 110, "#b0502f") +
      /* stage door + glowing marquee board (no names) */
      '<rect x="150" y="120" width="44" height="50" fill="#1b0f0b"/><rect x="140" y="104" width="64" height="14" rx="2" fill="#2a1a12" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="172" y="115" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" class="dc-glow">LIVE TONIGHT</text>' +
      '<rect x="0" y="170" width="400" height="14" fill="#8d8378"/>' +
      lamp(110) + lamp(300) +
      /* red brick street with streetcar rails */
      '<rect x="0" y="184" width="400" height="76" fill="#7a3b2c"/>' +
      '<g stroke="#5a2a20" stroke-width="1" opacity=".7">' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (190 + i * 10) + 'h400"/>').join("") + '</g>' +
      '<path d="M0 222h400M0 230h400" stroke="#b9b2a8" stroke-width="2"/>' +
      rooster + label(12, 210, "7TH AVENUE, YBOR CITY"),
      sky("dcy1", "#0d1030", "#3b2350"));
  }

  /* 3. The swamp: cypress boardwalk at Lettuce Lake on the Hillsborough River */
  function dcswamp() {
    const cypress = (x, w, cls) => '<path d="M' + (x - w) + ' 170q' + (w / 2) + ' -40 ' + (w * 0.6) + ' -140h' + (w * 0.8) + 'q' + (w / 6) + ' 100 ' + (w * 0.6) + ' 140z" fill="#5a4a3a"/>' +
      '<ellipse cx="' + (x + 2) + '" cy="28" rx="' + (w * 3) + '" ry="16" fill="#3e6b34"/>' +
      '<g class="dc-moss ' + (cls || "") + '" fill="#a9b39a" opacity=".9">' + [-14, -4, 8, 18].map(d => '<path d="M' + (x + d) + ' 36q3 18 -2 34q6 -12 6 -34z"/>').join("") + '</g>';
    const knees = [40, 70, 250, 330, 360].map(x => '<path d="M' + x + ' 182q4 -14 8 0z" fill="#5a4a3a"/>').join("");
    const gator = '<g class="dc-gator"><path d="M0 196q20 -8 44 -6q14 -2 22 4q-8 6 -22 4q-24 4 -44 -2z" fill="#3a4a2a"/>' +
      '<g fill="#2a3620">' + [8, 18, 28, 38].map(x => '<path d="M' + x + ' 192l4 -4l4 4z"/>').join("") + '</g>' +
      '<circle cx="54" cy="191" r="2.2" fill="#e8d26a"/><circle cx="54" cy="191" r="1" fill="#111"/>' +
      '<ellipse class="dc-rip" cx="10" cy="198" rx="20" ry="4" fill="none" stroke="#c9b98a" stroke-width="1"/><ellipse class="dc-rip dc-rip2" cx="40" cy="198" rx="22" ry="4" fill="none" stroke="#c9b98a" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dcw1)"/>' +
      '<g class="dc-bird"><path d="M0 60q8 -8 16 0q8 -8 16 0" stroke="#f2f2ea" stroke-width="2.5" fill="none"/></g>' +
      cypress(60, 12) + cypress(150, 9, "dc-moss2") + cypress(250, 14) + cypress(350, 10, "dc-moss2") +
      /* tea-colored blackwater */
      '<rect x="0" y="170" width="400" height="90" fill="#4a3a22"/><rect x="0" y="170" width="400" height="90" fill="url(#dcw2)"/>' + knees + gator +
      /* boardwalk */
      '<path d="M220 260l60 -64h120v64z" fill="#9a7a52"/><g stroke="#6e5434" stroke-width="2">' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (230 + i * 12) + ' ' + (250 - i * 10) + 'h' + (170 - i * 2) + '"/>').join("") + '</g>' +
      '<path d="M280 196v-22M320 196v-22M360 196v-22M400 196v-22" stroke="#6e5434" stroke-width="4"/><path d="M276 176h124" stroke="#6e5434" stroke-width="4"/>' +
      label(12, 200, "THE SWAMP, LETTUCE LAKE"),
      sky("dcw1", "#9fc7a6", "#e8e2b8") + '<linearGradient id="dcw2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a6a3a" stop-opacity=".6"/><stop offset="1" stop-color="#1e1a10" stop-opacity=".8"/></linearGradient>');
  }

  /* 4. Howard W. Blake High School, North Boulevard (black and gold, the Yellow Jackets) */
  function dcblake() {
    const winRow = (y) => Array.from({ length: 9 }, (_, i) => '<rect x="' + (46 + i * 34) + '" y="' + y + '" width="22" height="18" fill="#2c3e4c"/>').join("");
    const notes = [[90, 112, ""], [200, 104, "dc-note2"], [300, 112, "dc-note3"]].map(([x, y, c]) => '<g class="dc-note ' + c + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + GOLD + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.5) + ' ' + y + 'v-18l8 4" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dcb1)"/>' +
      palm(18, 176, 110, .9) + palm(384, 176, 118, 1, "dc-sway2") +
      /* main building: cream stucco, black band, gold trim */
      '<rect x="36" y="70" width="328" height="106" fill="#efe6cf"/><rect x="36" y="64" width="328" height="10" fill="#1a1a1a"/><rect x="36" y="74" width="328" height="4" fill="' + GOLD + '"/>' +
      winRow(88) + winRow(120) +
      /* entry tower */
      '<rect x="160" y="40" width="80" height="136" fill="#1a1a1a"/><rect x="164" y="44" width="72" height="4" fill="' + GOLD + '"/>' +
      '<rect x="176" y="130" width="48" height="46" fill="#2c3e4c"/><path d="M200 130v46" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="66" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">HOWARD W.</text><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">BLAKE</text>' +
      '<text x="200" y="94" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">HIGH SCHOOL</text>' +
      /* yellow jacket (simple bug, no logo) */
      '<g transform="translate(200 112)"><ellipse rx="10" ry="6" fill="' + GOLD + '"/><path d="M-4 -6v12M2 -6v12" stroke="#1a1a1a" stroke-width="2.5"/><circle cx="12" cy="0" r="4" fill="#1a1a1a"/><ellipse cx="-2" cy="-9" rx="6" ry="3" fill="#fff" opacity=".7"/></g>' +
      notes +
      '<rect x="0" y="176" width="400" height="20" fill="#cfc7b2"/><rect x="0" y="196" width="400" height="64" fill="#5a5a5e"/><path d="M0 228h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      label(12, 230, "BLAKE HIGH, NORTH BOULEVARD"),
      sky("dcb1", "#5fb0e8", "#fde7b0"));
  }

  /* 5. E Genesee St and N 29th St, East Tampa; Plant Hall's minarets + downtown behind */
  function dccorner() {
    const minaret = (x, h, w) => '<rect x="' + (x - w / 2) + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="#8a3a2a"/>' +
      '<path d="M' + (x - w / 2 - 3) + ' ' + (150 - h) + 'h' + (w + 6) + 'l-3 -5h-' + w + 'z" fill="#b8bcc4"/>' +
      '<path d="M' + (x - w / 2) + ' ' + (145 - h) + 'q' + (w / 2) + ' -24 ' + w + ' 0z" fill="#c8ccd4"/><path d="M' + x + ' ' + (133 - h) + 'v-10" stroke="#c8ccd4" stroke-width="1.6"/>' +
      '<path d="M' + (x + 3) + ' ' + (121 - h) + 'a4 4 0 1 1 -1 -6a3 3 0 1 0 1 6z" fill="#e2e4ea"/>';
    const sign = (x, y, w, parts) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + parts;
    return svg(
      '<rect width="400" height="260" fill="url(#dcc1)"/>' +
      /* downtown towers */
      '<g fill="#3a3550" opacity=".85"><rect x="230" y="70" width="26" height="80"/><rect x="262" y="52" width="22" height="98"/><rect x="290" y="80" width="30" height="70"/><rect x="326" y="62" width="20" height="88"/><path d="M262 52l11 -12l11 12z"/></g>' +
      /* Plant Hall minarets */
      minaret(70, 50, 12) + minaret(110, 64, 14) + minaret(150, 46, 12) +
      '<rect x="56" y="118" width="110" height="32" fill="#8a3a2a"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (62 + i * 15) + ' 150v-14a4 4 0 0 1 8 0v14z" fill="#f2d79a"/>').join("") +
      /* cinderblock wall */
      '<rect x="0" y="150" width="400" height="80" fill="#c9c3b6"/>' +
      '<g stroke="#a39d90" stroke-width="1">' + Array.from({ length: 5 }, (_, r) => '<path d="M0 ' + (166 + r * 16) + 'h400"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40 + (r % 2) * 20) + ' ' + (150 + r * 16) + 'v16"/>').join("")).join("") + '</g>' +
      tag("DOECHII", 96, 206, 46, LIME, -5) + tag("813", 300, 220, 22, GOLD, -8) +
      '<g fill="' + LIME + '" opacity=".75"><circle class="dc-sp" cx="248" cy="186" r="3"/><circle class="dc-sp dc-sp2" cx="256" cy="180" r="2.5"/><circle class="dc-sp" cx="252" cy="192" r="2"/></g>' +
      palm(380, 230, 120, .9, "dc-sway2") +
      /* sidewalk + street */
      '<rect x="0" y="230" width="400" height="30" fill="#6a6a6e"/>' +
      /* sign pole with the two green signs (29TH drawn with a straight-stem 9) */
      '<rect x="356" y="96" width="5" height="136" fill="#7a7f86"/>' +
      sign(290, 86, 108, '<text x="344" y="102" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">E GENESEE ST</text>') +
      sign(306, 112, 92, '<text x="334" y="128" text-anchor="end" ' + font + ' font-size="11" fill="#fff">N 2</text>' + nine(334.6, 128, 11, "#fff") + '<text x="342.6" y="128" ' + font + ' font-size="11" fill="#fff">TH ST</text>') +
      '<rect x="12" y="236" width="196" height="20" rx="3" fill="#000" opacity=".55"/>' +
      '<text x="140" y="250" text-anchor="end" ' + font + ' font-size="11" fill="#fff">E GENESEE ST &amp; N 2</text>' + nine(140.6, 250, 11, "#fff") +
      '<text x="148.6" y="250" ' + font + ' font-size="11" fill="#fff">TH ST</text>',
      sky("dcc1", "#f08a5d", "#ffd08a"));
  }

  window.SCENES = { dcstop, dcybor, dcswamp, dcblake, dccorner };
})();
