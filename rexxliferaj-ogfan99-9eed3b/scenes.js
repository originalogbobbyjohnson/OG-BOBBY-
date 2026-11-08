/* Rexx Life Raj (Berkeley — THE BAY AREA region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed rx- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes rxtw{0%,100%{opacity:1}50%{opacity:.25}}.rx-tw{animation:rxtw 1.8s ease-in-out infinite}.rx-tw2{animation-delay:.9s}' +
    '@keyframes rxblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.rx-blk{animation:rxblink 1s steps(1) infinite}.rx-blk2{animation-delay:.5s}' +
    '@keyframes rxflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.4}55%{opacity:.95}}.rx-flk{animation:rxflick 2.4s infinite}.rx-flk2{animation-delay:1.1s}' +
    '@keyframes rxbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.rx-beam{transform-box:fill-box;transform-origin:50% 100%;animation:rxbeam 4s ease-in-out infinite}.rx-beam2{animation-delay:-2s}' +
    '@keyframes rxhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.rx-hand{animation:rxhand .7s ease-in-out infinite}.rx-hand2{animation-delay:.23s}.rx-hand3{animation-delay:.46s}' +
    '@keyframes rxkick{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(110px,-120px) rotate(360deg)}100%{transform:translate(220px,-40px) rotate(720deg);opacity:0}}.rx-ball{transform-box:fill-box;transform-origin:50% 50%;animation:rxkick 3.2s ease-out infinite}' +
    '@keyframes rxfog{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rx-fog{animation:rxfog 20s linear infinite}.rx-fog2{animation-delay:-10s}' +
    '@keyframes rxroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rx-car{animation:rxroll 6s linear infinite}.rx-car2{animation-duration:8.5s;animation-delay:-4s}' +
    '@keyframes rxbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-30px)}}.rx-bird{animation:rxbird 9s linear infinite}.rx-bird2{animation-delay:-4.5s}' +
    '@keyframes rxsun{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}.rx-sun{animation:rxsun 5s ease-in-out infinite}' +
    '@keyframes rxsail{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.rx-sail{animation:rxsail 7s ease-in-out infinite}' +
    '@keyframes rxsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.rx-sway{transform-box:fill-box;transform-origin:50% 100%;animation:rxsway 2.6s ease-in-out infinite}.rx-sway2{animation-delay:-1.3s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="rx-tw' + (i % 2 ? " rx-tw2" : "") + '" cx="' + ((i * 97 + 31) % 400) + '" cy="' + (6 + (i * 53) % 70) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff" opacity=".8"/>'; return s; };
  const tree = (x, y, h, c) => '<rect x="' + (x - 2) + '" y="' + (y + h * .45) + '" width="4" height="' + (h * .55) + '" fill="#4a3a2a"/>' +
    '<ellipse cx="' + x + '" cy="' + (y + h * .3) + '" rx="' + (h * .32) + '" ry="' + (h * .36) + '" fill="' + c + '"/><ellipse cx="' + (x - h * .18) + '" cy="' + (y + h * .45) + '" rx="' + (h * .2) + '" ry="' + (h * .22) + '" fill="' + c + '" opacity=".85"/>';
  const BART_RED = "#ed1c24", BART_ORANGE = "#faa61a", POPPY = "#f28c28", BLUE = "#4f8fd6", CREAM = "#f6efe2";

  /* 1. North Berkeley BART: the subway platform under Sacramento St, a white Fleet of the Future train sliding in, Red + Orange line pills on the sign */
  function rxstation() {
    const car = x => '<path d="M' + x + ' 128h160v64H' + x + 'z" fill="#f1f3f5" stroke="#8a929a" stroke-width="1.5"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 38) + '" y="140" width="28" height="22" rx="3" fill="#18222c"/>').join("") +
      '<rect x="' + x + '" y="166" width="160" height="5" fill="#2a8fd0"/><rect x="' + x + '" y="171" width="160" height="3" fill="#7cc3ea"/>' +
      '<rect x="' + (x + 66) + '" y="136" width="22" height="52" fill="#dfe3e7" stroke="#8a929a"/><path d="M' + (x + 77) + ' 136v52" stroke="#8a929a"/>' +
      '<circle cx="' + (x + 26) + '" cy="194" r="5" fill="#222"/><circle cx="' + (x + 134) + '" cy="194" r="5" fill="#222"/>';
    const cab = '<path d="M332 192v-64h30q30 4 34 44v20z" fill="#f1f3f5" stroke="#8a929a" stroke-width="1.5"/><path d="M360 132q26 4 32 32h-32z" fill="#16324e"/>' +
      '<rect x="332" y="166" width="64" height="5" fill="#2a8fd0"/><rect x="332" y="171" width="64" height="3" fill="#7cc3ea"/><circle cx="388" cy="182" r="3" fill="#fff6c2" class="rx-flk"/><circle cx="354" cy="194" r="5" fill="#222"/>';
    let lights = "", edge = "";
    for (let x = 20; x < 400; x += 60) lights += '<rect x="' + x + '" y="50" width="36" height="5" rx="2" fill="#fff3c4" class="rx-flk' + (x % 120 ? " rx-flk2" : "") + '"/>';
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#f2f2f2" class="rx-blk' + (x % 52 ? " rx-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#25282e"/>' +
      '<rect x="0" y="0" width="400" height="56" fill="#3e4148"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v44" stroke="#33363c" stroke-width="6"/>').join("") + lights +
      /* tiled wall in poppy and cream bands */
      '<rect x="0" y="60" width="400" height="68" fill="#c9c2b2"/>' + Array.from({ length: 50 }, (_, i) => '<rect x="' + (i * 8) + '" y="60" width="7" height="68" fill="' + (i % 2 ? "#bfb8a8" : "#d3ccbc") + '"/>').join("") +
      '<rect x="0" y="92" width="400" height="6" fill="' + POPPY + '" opacity=".85"/>' +
      '<rect x="0" y="122" width="400" height="6" fill="#30333a"/>' +
      '<g class="anim-train">' + car(4) + car(168) + cab + '</g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#55585e"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="204" width="32" height="56" fill="' + (i % 2 ? "#5d6066" : "#505359") + '"/>').join("") +
      '<rect x="56" y="212" width="288" height="38" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="140" y="237" text-anchor="middle" ' + F + ' font-weight="700" font-size="19" fill="#fff">North Berkeley</text>' +
      '<rect x="230" y="221" width="40" height="18" rx="9" fill="' + BART_RED + '"/><text x="250" y="234" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">RED</text>' +
      '<rect x="274" y="221" width="62" height="18" rx="9" fill="' + BART_ORANGE + '"/><text x="305" y="234" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#111">ORANGE</text>' +
      '<text x="200" y="78" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#3a3328" opacity=".9">BART · SACRAMENTO ST · NORTH BERKELEY</text>',
      "");
  }

  /* 2. The blue turf in Boise, Idaho, where Raj played offensive line in college: the blue field, white yard lines, stadium lights, a ball spinning through the uprights */
  function rxboise() {
    let yard = "";
    for (let i = 0; i < 9; i++) { const x = 40 + i * 40; yard += '<path d="M' + (200 + (x - 200) * .55) + ' 150L' + x + ' 236" stroke="#fff" stroke-width="2" opacity=".85"/>'; }
    const lights = x => '<rect x="' + (x - 2) + '" y="40" width="4" height="70" fill="#5a5f68"/><rect x="' + (x - 18) + '" y="24" width="36" height="18" fill="#3a3f48"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (x - 14 + (i % 4) * 9.3) + '" cy="' + (29 + Math.floor(i / 4) * 8) + '" r="3" fill="#fffbe0" class="rx-flk' + (i % 2 ? " rx-flk2" : "") + '"/>').join("");
    const crowd = Array.from({ length: 30 }, (_, i) => '<g class="rx-hand' + (i % 3 ? " rx-hand" + (i % 3 + 1) : "") + '"><circle cx="' + (8 + i * 13.4) + '" cy="' + (128 + (i % 2) * 4) + '" r="4" fill="' + (i % 3 ? "#1d2a4a" : "#f28c28") + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rxs2)"/>' + stars(16) +
      '<path d="M0 150V108q200 -20 400 0v42z" fill="#2a2f3a"/><path d="M0 120q200 -18 400 0" stroke="#3a4150" stroke-width="10" fill="none"/>' + crowd +
      lights(46) + lights(354) +
      '<g class="rx-beam"><path d="M46 44l-40 110h80z" fill="#fffbe0" opacity=".08"/></g><g class="rx-beam rx-beam2"><path d="M354 44l-40 110h80z" fill="#fffbe0" opacity=".08"/></g>' +
      /* the blue field */
      '<path d="M90 150h220l90 86H0z" fill="#1b4fd8"/><path d="M90 150h220l90 86H0z" fill="url(#rxs2g)" opacity=".35"/>' + yard +
      '<path d="M160 150h80l2 6h-84z" fill="#f28c28"/>' +
      /* goal posts */
      '<rect x="198" y="112" width="4" height="38" fill="#f2d04a"/><rect x="176" y="110" width="48" height="4" fill="#f2d04a"/><rect x="176" y="70" width="4" height="44" fill="#f2d04a"/><rect x="220" y="70" width="4" height="44" fill="#f2d04a"/>' +
      '<g class="rx-ball"><ellipse cx="84" cy="214" rx="9" ry="6" fill="#7a3d1e"/><path d="M78 214h12" stroke="#fff" stroke-width="1.2"/></g>' +
      '<rect x="110" y="238" width="180" height="18" rx="3" fill="#111" opacity=".9"/><text x="200" y="251" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">THE BLUE TURF · BOISE, IDAHO</text>',
      sky("rxs2", "#070b18", "#1d2440") + '<linearGradient id="rxs2g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#6fa0ff"/></linearGradient>');
  }

  /* 3. Indian Rock Park in North Berkeley at sunset: the big volcanic rock with its carved steps, the bay below, the Golden Gate far off, a sailboat drifting */
  function rxrock() {
    return svg(
      '<rect width="400" height="260" fill="url(#rxs3)"/>' +
      '<g class="rx-sun"><circle cx="270" cy="96" r="22" fill="#ffd27a"/><circle cx="270" cy="96" r="34" fill="#ffb347" opacity=".25"/></g>' +
      '<g class="rx-bird"><path d="M-20 40q5 -5 10 0q5 -5 10 0" stroke="#3a2a3a" stroke-width="2" fill="none"/></g><g class="rx-bird rx-bird2"><path d="M-40 56q4 -4 8 0q4 -4 8 0" stroke="#3a2a3a" stroke-width="2" fill="none"/></g>' +
      /* far hills of Marin + the bridge */
      '<path d="M120 118q40 -22 80 -10t70 -6t130 8v16H120z" fill="#6a4a6a" opacity=".8"/>' +
      '<g fill="#c0362c"><rect x="214" y="96" width="4" height="26"/><rect x="250" y="96" width="4" height="26"/><path d="M200 112q16 -16 16 -16q18 20 36 0q0 0 16 16" stroke="#c0362c" stroke-width="1.5" fill="none"/><rect x="198" y="110" width="74" height="2"/></g>' +
      /* the bay */
      '<rect x="0" y="122" width="400" height="40" fill="#e79a6a"/><rect x="0" y="122" width="400" height="40" fill="#7a5a8a" opacity=".45"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (20 + i * 50) + ' ' + (132 + (i % 3) * 8) + 'h22" stroke="#ffd2a0" stroke-width="1.5" opacity=".7"/>').join("") +
      '<g class="rx-sail"><path d="M300 146h26l-4 5h-18z" fill="#f6efe2"/><path d="M312 145v-18l10 18z" fill="#fff"/></g>' +
      /* North Berkeley hills, rooftops, trees */
      '<path d="M0 162q100 -12 200 -4t200 -2v104H0z" fill="#3a3550"/><path d="M240 200q80 -14 160 -6v66H240z" fill="#2c2840"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34 + 4) + '" y="' + (158 + (i % 3) * 3) + '" width="16" height="9" fill="#2a2640"/><rect x="' + (i * 34 + 8) + '" y="' + (161 + (i % 3) * 3) + '" width="3" height="3" fill="#ffd98a" class="rx-flk' + (i % 2 ? " rx-flk2" : "") + '"/>').join("") +
      tree(340, 140, 40, "#2b3a2e") + tree(370, 146, 34, "#24332a") +
      /* the rock with its carved steps */
      '<path d="M0 260V190q30 -30 70 -40q60 -14 110 6q40 14 70 50v54z" fill="#6e6258"/>' +
      '<path d="M20 196q40 -36 100 -40q50 0 90 30" stroke="#857868" stroke-width="5" fill="none" opacity=".7"/>' +
      '<path d="M210 210h20v6h-20zM200 222h22v6h-22zM190 234h24v6h-24zM180 246h26v6h-26z" fill="#8a7d6c"/>' +
      '<path d="M40 200q20 10 10 30M120 170q-10 20 6 40" stroke="#4e4440" stroke-width="2" fill="none"/>' +
      /* someone sitting on top, watching the sun go down (silhouette, no face) */
      '<g fill="#1a1620"><circle cx="128" cy="134" r="6"/><path d="M120 142h16l4 14h-24z"/><path d="M118 156h26l6 6h-36z"/></g>' +
      '<rect x="252" y="236" width="140" height="18" rx="3" fill="#111" opacity=".85"/><text x="322" y="249" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">INDIAN ROCK · BERKELEY</text>',
      sky("rxs3", "#3a3a6a", "#f2a66a"));
  }

  /* 4. Golden Gate Park's polo field on a summer festival night: the big stage in the fog, cypress trees, beams sweeping, hands up for the hometown set */
  function rxlands() {
    const hands = Array.from({ length: 24 }, (_, i) => '<g class="rx-hand' + (i % 3 ? " rx-hand" + (i % 3 + 1) : "") + '"><circle cx="' + (10 + i * 16.5) + '" cy="' + (220 + (i % 2) * 6) + '" r="7" fill="#0c0e16"/>' +
      (i % 2 ? '<path d="M' + (10 + i * 16.5) + ' ' + (216 + (i % 2) * 6) + 'l4 -18" stroke="#0c0e16" stroke-width="4" stroke-linecap="round"/>' : "") + '</g>').join("");
    const cypress = (x, y, s) => '<path d="M' + x + ' ' + (y + 60 * s) + 'v-' + (20 * s) + '" stroke="#2a2420" stroke-width="' + (5 * s) + '"/>' +
      '<path d="M' + (x - 40 * s) + ' ' + (y + 44 * s) + 'q10 -40 40 -44q34 4 46 40q-20 -10 -40 -6q-24 -4 -46 10z" fill="#1d3a2c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rxs4)"/>' + stars(10) +
      '<g class="rx-fog"><ellipse cx="0" cy="70" rx="110" ry="14" fill="#fff" opacity=".2"/></g><g class="rx-fog rx-fog2"><ellipse cx="0" cy="104" rx="130" ry="16" fill="#fff" opacity=".16"/></g>' +
      cypress(30, 90, 1.2) + cypress(370, 86, 1.3) + cypress(70, 110, .9) +
      /* stage: truss roof, speaker stacks, screen */
      '<path d="M96 70h208l-8 18H104z" fill="#2c2f3a"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (104 + i * 16) + ' 72l8 14M' + (112 + i * 16) + ' 72l-8 14" stroke="#5a5f6e" stroke-width="1"/>').join("") +
      '<rect x="104" y="88" width="10" height="104" fill="#2c2f3a"/><rect x="286" y="88" width="10" height="104" fill="#2c2f3a"/>' +
      '<rect x="124" y="96" width="152" height="70" fill="#141826"/><rect x="128" y="100" width="144" height="62" fill="' + BLUE + '" opacity=".55" class="rx-flk"/>' +
      '<text x="200" y="138" text-anchor="middle" ' + A + ' font-size="22" fill="' + CREAM + '" letter-spacing="2">REXX LIFE</text>' +
      '<rect x="78" y="120" width="24" height="70" fill="#1a1c24"/><rect x="298" y="120" width="24" height="70" fill="#1a1c24"/>' +
      [128, 150, 172].map(y => '<circle cx="90" cy="' + y + '" r="7" fill="#2c2f3a"/><circle cx="310" cy="' + y + '" r="7" fill="#2c2f3a"/>').join("") +
      '<rect x="96" y="190" width="208" height="10" fill="#22252e"/>' +
      '<g class="rx-beam"><path d="M150 92l-50 -92h30z" fill="' + POPPY + '" opacity=".28"/></g><g class="rx-beam rx-beam2"><path d="M250 92l50 -92h-30z" fill="#fff" opacity=".2"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#1a2a1e"/>' + hands +
      '<rect x="110" y="238" width="180" height="18" rx="3" fill="#111" opacity=".9"/><text x="200" y="251" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">GOLDEN GATE PARK · POLO FIELD</text>',
      sky("rxs4", "#0a0c1a", "#3a3c58"));
  }

  /* 5. The corner: Sacramento St and Delaware St by the station, REXX LIFE RAJ tagged on the wall, California poppies by the curb, the Golden Gate Bridge across the bay at dusk behind */
  function rxcorner() {
    const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 9) + '" width="28" height="11" rx="3" fill="' + c + '"/><circle cx="11" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="39" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="49" cy="' + (y + 6) + '" r="2" fill="#fff6c2"/></g>';
    const poppy = (x, y, cls) => '<g class="' + cls + '"><path d="M' + x + ' ' + (y + 14) + 'v-12" stroke="#3a7a3a" stroke-width="1.6"/><path d="M' + (x - 5) + ' ' + y + 'q5 -8 10 0q-5 5 -10 0z" fill="' + POPPY + '"/><circle cx="' + x + '" cy="' + (y - 1) + '" r="1.4" fill="#f7d34a"/></g>';
    const bridge = '<g fill="#c0362c"><rect x="246" y="60" width="6" height="54"/><rect x="330" y="60" width="6" height="54"/><rect x="244" y="74" width="10" height="3"/><rect x="328" y="74" width="10" height="3"/>' +
      '<rect x="200" y="104" width="200" height="4"/></g><path d="M200 104q22 -6 49 -44q40 50 84 0q30 40 67 44" stroke="#c0362c" stroke-width="2" fill="none"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (206 + i * 12) + '" cy="106" r="1.2" fill="#ffe9b0" class="rx-blk' + (i % 2 ? " rx-blk2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rxs5)"/>' + stars(10) +
      '<path d="M160 108q60 -30 120 -26t120 14v12z" fill="#4a3a5a" opacity=".8"/>' + bridge +
      '<rect x="160" y="108" width="240" height="20" fill="#5a4a72"/><path d="M180 116h30M260 120h40M320 114h30" stroke="#f2b58a" stroke-width="1.5" opacity=".6"/>' +
      /* wall with the tag */
      '<rect x="0" y="96" width="176" height="114" fill="#3c3a3e"/><rect x="0" y="92" width="176" height="6" fill="#2c2a2e"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 22) + ' 98v112" stroke="#343236" stroke-width="2"/>').join("") +
      tag("REXX LIFE", 8, 150, 30, CREAM, -7) + tag("RAJ", 70, 184, 30, POPPY, -5) + tag("BERKELEY", 14, 204, 13, BLUE, -3) +
      '<rect x="176" y="146" width="224" height="64" fill="#2c3036"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (188 + i * 35) + '" y="156" width="22" height="16" fill="#ffd98a" opacity="' + (i % 2 ? .3 : .75) + '"/>').join("") +
      '<rect x="0" y="206" width="400" height="5" fill="#a8a294"/>' +
      poppy(290, 198, "rx-sway") + poppy(302, 200, "rx-sway rx-sway2") + poppy(316, 197, "rx-sway") + poppy(386, 199, "rx-sway rx-sway2") + poppy(376, 197, "rx-sway") +
      '<rect x="0" y="210" width="400" height="50" fill="#2e2f33"/><path d="M0 234h400" stroke="#f2c94c" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("rx-car", 214, "#1b2a4a") + car("rx-car rx-car2", 214, "#e8e4da") +
      /* green street signs */
      '<rect x="234" y="66" width="5" height="142" fill="#7a7f86"/>' +
      '<rect x="174" y="70" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="237" y="84.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Sacramento St</text>' +
      '<rect x="184" y="94" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="237" y="108.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Delaware St</text>' +
      '<circle cx="364" cy="186" r="4" fill="#fffbe0" class="rx-flk"/><rect x="362" y="188" width="4" height="20" fill="#7a7f86"/>',
      sky("rxs5", "#1a1838", "#d0806a"));
  }

  window.SCENES = { rxstation, rxboise, rxrock, rxlands, rxcorner };
})();
