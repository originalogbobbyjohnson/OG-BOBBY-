/* mahaliajackson scenes (Regions tab: NEW ORLEANS; the Black Pearl, Carrollton / Uptown - born 1911 near Constance St and Leake Av by the river levee, raised in Aunt Duke's three-room shotgun house on Pitt St, sang at Plymouth Rock Baptist and joined the junior choir at Mount Moriah Baptist on Millaudon St; left for Chicago at 16). CSS classes and ids prefixed mj- (the page's own anim-train is kept).
   1 St. Charles Av / Lowerline St on the St. Charles streetcar (line 12): the olive-green car rolls in on the neutral ground under the live oaks, on the edge of the Black Pearl.
   2 Aunt Duke's leaky three-room shotgun house on Pitt St ("Didn't It Rain"): rain falling, drops dripping into a washtub on the porch, a song drifting out the window.
   3 Mount Moriah Baptist Church on Millaudon St, where she sang in the junior choir: white wood church, kids in robes on the steps, notes rising.
   4 The Mahalia Jackson Theater for the Performing Arts in Armstrong Park (opened 1973, named for her): white columns and glass lit up at dusk, the fountain in the lagoon.
   5 Pitt St and Lowerline St: green signs, MAHALIA tagged on the wall, the river levee and the Huey P. Long Bridge's steel trusses upriver at sunset.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mjblink{0%,100%{opacity:.3}50%{opacity:1}}.mj-bl{animation:mjblink 1.6s ease-in-out infinite}.mj-bl2{animation-delay:-.8s}' +
    '@keyframes mjmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(7deg)}}.mj-moss{transform-box:fill-box;transform-origin:50% 0%;animation:mjmoss 3.4s ease-in-out infinite}.mj-moss2{animation-delay:-1.7s}' +
    '@keyframes mjrain{0%{transform:translate(0,-30px)}100%{transform:translate(-14px,280px)}}.mj-rain{animation:mjrain 1.1s linear infinite}.mj-r2{animation-delay:-.37s}.mj-r3{animation-delay:-.74s}' +
    '@keyframes mjdrip{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(34px);opacity:.2}}.mj-drip{animation:mjdrip 1.3s ease-in infinite}.mj-dp2{animation-delay:-.65s}' +
    '@keyframes mjnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-60px);opacity:0}}.mj-note{animation:mjnote 3.2s ease-out infinite}.mj-n2{animation-delay:-1.1s}.mj-n3{animation-delay:-2.1s}' +
    '@keyframes mjsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mj-sway{animation:mjsway 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.mj-s2{animation-delay:-.45s}.mj-s3{animation-delay:-.9s}.mj-s4{animation-delay:-1.35s}' +
    '@keyframes mjjet{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.15)}}.mj-jet{animation:mjjet 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.mj-j2{animation-delay:-.6s}' +
    '@keyframes mjrip{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:1}}.mj-rip{animation:mjrip 2.6s ease-in-out infinite}.mj-rip2{animation-delay:-1.3s}' +
    '@keyframes mjboat{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.mj-boat{animation:mjboat 26s linear infinite;animation-delay:-9s}' +
    '@keyframes mjspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mj-sp{animation:mjspray 1.4s ease-out infinite}.mj-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const badge = (cx, cy, t, c) => '<circle cx="' + cx + '" cy="' + cy + '" r="12" fill="' + c + '"/><text x="' + cx + '" y="' + (cy + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + t + '</text>';
  const SCG = "#2e7d32", GOLD = "#ffd27a", TEAL = "#7fd0c8", PINK = "#e88aa8";
  const oak = (x, y, w, c) => '<g><path d="M' + (x - 5) + ' ' + (y + 150) + 'q4 -60 2 -96h8q-2 40 4 96z" fill="#4a3a2c"/>' +
    '<ellipse cx="' + x + '" cy="' + (y + 40) + '" rx="' + w + '" ry="' + (w * 0.42) + '" fill="' + c + '"/><ellipse cx="' + (x - w * 0.45) + '" cy="' + (y + 30) + '" rx="' + (w * 0.5) + '" ry="' + (w * 0.3) + '" fill="#3a6a3c"/>' +
    '<ellipse cx="' + (x + w * 0.4) + '" cy="' + (y + 28) + '" rx="' + (w * 0.45) + '" ry="' + (w * 0.28) + '" fill="#2a5230"/>' +
    [-0.6, -0.2, 0.25, 0.6].map((f, i) => '<path class="mj-moss' + (i % 2 ? " mj-moss2" : "") + '" d="M' + (x + w * f) + ' ' + (y + 52) + 'q-3 12 1 24q-3 6 0 12" stroke="#a7ad92" stroke-width="3" fill="none" opacity=".85"/>').join("") + '</g>';
  const note = (x, y, c, cls) => '<g class="mj-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 17) + '" width="1.8" height="17" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 17) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const robe = (x, base, c, cls) => '<g class="mj-sway ' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 30) + '" r="5.5" fill="#3a2418"/>' +
    '<path d="M' + (x - 9) + ' ' + base + 'l2.5 -22q6.5 -5 13 0l2.5 22z" fill="' + c + '"/><path d="M' + (x - 5) + ' ' + (base - 23) + 'q5 4 10 0" stroke="' + GOLD + '" stroke-width="1.8" fill="none"/></g>';

  /* 1. St. Charles streetcar at Lowerline St */
  function mjstation() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (54 + i * 32) + '" y="122" width="24" height="24" rx="2" fill="#2a2a22" stroke="#e9d38a" stroke-width="2.5"/>').join("");
    const car = '<g class="anim-train"><rect x="40" y="104" width="292" height="12" rx="6" fill="#5e635c"/><rect x="40" y="114" width="292" height="72" rx="6" fill="#40683a" stroke="#203a1e" stroke-width="2"/>' + win +
      '<rect x="40" y="152" width="292" height="5" fill="#e9d38a"/><rect x="40" y="170" width="292" height="16" fill="#7a2a22"/>' +
      '<rect x="300" y="122" width="26" height="46" rx="2" fill="#e9d38a"/><rect x="304" y="126" width="18" height="38" fill="#2a2a22"/>' +
      '<rect x="46" y="106" width="70" height="10" rx="2" fill="#111"/><text x="81" y="114" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">ST. CHARLES</text>' +
      '<path d="M200 104l56 -46" stroke="#222" stroke-width="2.5"/><circle cx="256" cy="58" r="3" fill="#222"/>' +
      '<circle cx="90" cy="188" r="9" fill="#1c1c1c"/><circle cx="130" cy="188" r="9" fill="#1c1c1c"/><circle cx="250" cy="188" r="9" fill="#1c1c1c"/><circle cx="290" cy="188" r="9" fill="#1c1c1c"/>' +
      '<circle class="mj-bl" cx="336" cy="140" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mjs1)"/>' +
      /* Uptown raised cottages behind */
      '<g><rect x="232" y="50" width="78" height="66" fill="#e6d3e8"/><path d="M226 50h90l-45 -24z" fill="#8a6a8a"/>' + [244, 272, 298].map(x => '<rect x="' + x + '" y="62" width="12" height="20" fill="#3a4a5a"/>').join("") + '<rect x="232" y="88" width="78" height="4" fill="#fff"/></g>' +
      '<g><rect x="314" y="58" width="86" height="58" fill="#f2e2b6"/><path d="M308 58h98l-49 -22z" fill="#a88a52"/>' + [326, 354, 382].map(x => '<rect x="' + x + '" y="68" width="12" height="18" fill="#3a4a5a"/>').join("") + '</g>' +
      oak(60, 26, 92, "#2f5a34") + oak(196, 14, 70, "#2a5230") +
      '<path d="M0 58H400" stroke="#333" stroke-width="1.2"/>' +
      '<rect x="0" y="186" width="400" height="10" fill="#7a6a52"/><path d="M0 190h400M0 194h400" stroke="#4a4038" stroke-width="2"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#6f9a52"/>' +
      car +
      '<rect x="40" y="206" width="320" height="44" rx="3" fill="#111"/><text x="54" y="225" ' + font + ' font-size="15" fill="#fff">St. Charles Av /</text><text x="54" y="242" ' + font + ' font-size="15" fill="#fff">Lowerline St</text>' +
      badge(244, 227, "12", SCG) + '<text x="262" y="224" ' + font + ' font-size="8.5" fill="#d8e0d0">STREETCAR</text><text x="262" y="236" ' + font + ' font-size="8.5" fill="' + GOLD + '">BLACK PEARL</text>',
      sky("mjs1", "#86b8dc", "#f6e4c0"));
  }

  /* 2. Aunt Duke's shotgun house on Pitt St, in the rain */
  function mjhouse() {
    let rain = ""; for (let i = 0; i < 46; i++) rain += '<path class="mj-rain ' + ["", "mj-r2", "mj-r3"][i % 3] + '" d="M' + ((i * 47) % 420) + ' ' + ((i * 29) % 140 - 40) + 'l-4 12" stroke="#bcd0e0" stroke-width="1.4" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mjs2)"/>' +
      '<ellipse cx="90" cy="34" rx="90" ry="26" fill="#5a6678"/><ellipse cx="270" cy="26" rx="120" ry="28" fill="#4e5a6c"/><ellipse cx="380" cy="44" rx="70" ry="22" fill="#5a6678"/>' +
      /* neighbor shotguns */
      '<g><rect x="6" y="104" width="70" height="98" fill="#c8b4c8"/><path d="M0 104h82l-41 -34z" fill="#6a5a6a"/><rect x="22" y="128" width="16" height="30" fill="#2f3a48"/><rect x="48" y="128" width="16" height="30" fill="#2f3a48"/></g>' +
      '<g><rect x="322" y="100" width="78" height="102" fill="#e0c890"/><path d="M316 100h90l-45 -36z" fill="#8a7046"/><rect x="340" y="126" width="16" height="30" fill="#2f3a48"/><rect x="368" y="126" width="16" height="30" fill="#2f3a48"/></g>' +
      /* Aunt Duke's house: pale blue, gingerbread brackets, raised on piers */
      '<path d="M110 92l90 -58 90 58z" fill="#5e4a3a"/><path d="M118 92l82 -52 82 52z" fill="#6e5848"/>' +
      '<rect x="120" y="92" width="160" height="104" fill="#a9c6d6"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M120 ' + (100 + i * 10) + 'h160" stroke="#8fb0c2" stroke-width="1.2"/>').join("") +
      '<rect x="110" y="92" width="180" height="8" fill="#f3efe6"/>' + [118, 166, 234, 282].map(x => '<path d="M' + x + ' 100q8 10 0 20" stroke="#f3efe6" stroke-width="3" fill="none"/>').join("") +
      '<rect x="140" y="116" width="28" height="50" fill="#2f3a48" stroke="#f3efe6" stroke-width="3"/><rect x="232" y="116" width="28" height="50" fill="#2f3a48" stroke="#f3efe6" stroke-width="3"/>' +
      '<rect x="186" y="118" width="28" height="78" fill="#7a4a32" stroke="#f3efe6" stroke-width="3"/><circle cx="208" cy="160" r="2" fill="' + GOLD + '"/>' +
      '<rect x="236" y="120" width="20" height="22" fill="#ffd98a" opacity=".85" class="mj-bl"/>' +
      '<rect x="110" y="196" width="180" height="6" fill="#d8d0c0"/>' + [116, 160, 240, 284].map(x => '<rect x="' + (x - 4) + '" y="202" width="8" height="16" fill="#8a7a6a"/>').join("") +
      '<path d="M176 218h48v-8h-48z" fill="#bdb3a0"/><path d="M182 210h36v-8h-36z" fill="#cfc6b4"/>' +
      /* the leak: drops falling from the eave into a washtub */
      '<ellipse cx="150" cy="200" rx="16" ry="4" fill="#8a96a0"/><path d="M134 200l3 -14h26l3 14z" fill="#a8b2ba" stroke="#6a747c" stroke-width="1.5"/>' +
      '<circle class="mj-drip" cx="150" cy="104" r="2.4" fill="#d8e8f2"/><circle class="mj-drip mj-dp2" cx="154" cy="104" r="2" fill="#d8e8f2"/>' +
      note(250, 120, GOLD) + note(262, 112, PINK, "mj-n2") + note(244, 116, TEAL, "mj-n3") +
      '<rect x="0" y="218" width="400" height="42" fill="#4f6a44"/><path d="M0 230h400" stroke="#6a8458" stroke-width="2"/>' +
      '<rect x="300" y="226" width="64" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="332" y="239" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Pitt St</text>' +
      rain,
      sky("mjs2", "#3e4a5e", "#8a9aac"));
  }

  /* 3. Mount Moriah Baptist Church on Millaudon St, junior choir */
  function mjchurch() {
    const kids = [100, 128, 156, 184, 212, 240, 268, 296].map((x, i) => robe(x, 214 - (i % 2) * 4, i % 2 ? "#6a3aa8" : "#2f5aa8", ["", "mj-s2", "mj-s3", "mj-s4"][i % 4])).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mjs3)"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<path d="M200 40L' + (i * 80 - 20) + ' 260" stroke="#fff6d8" stroke-width="10" opacity=".12"/>').join("") +
      oak(40, 60, 60, "#2f5a34") + oak(366, 66, 56, "#2a5230") +
      /* white wood church with a small steeple */
      '<rect x="186" y="18" width="28" height="44" fill="#f6f2ea" stroke="#c8c0b0" stroke-width="1.5"/><path d="M182 20l18 -18 18 18z" fill="#6a6a72"/><rect x="198" y="-2" width="4" height="10" fill="' + GOLD + '"/><rect x="193" y="2" width="14" height="3" fill="' + GOLD + '"/>' +
      '<rect x="194" y="30" width="12" height="16" rx="6" fill="#3a4a5a"/>' +
      '<path d="M104 92l96 -40 96 40z" fill="#7a6a62"/><rect x="112" y="92" width="176" height="104" fill="#f6f2ea"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M112 ' + (100 + i * 10) + 'h176" stroke="#e2dccf" stroke-width="1.2"/>').join("") +
      [128, 248].map(x => '<path d="M' + x + ' 150v-34q12 -14 24 0v34z" fill="#9a6ab8" stroke="#c8c0b0" stroke-width="2"/><path d="M' + (x + 12) + ' 106v44M' + x + ' 130h24" stroke="#c8c0b0" stroke-width="1.5"/>').join("") +
      '<path d="M182 196v-50q18 -18 36 0v50z" fill="#7a4a32" stroke="#c8c0b0" stroke-width="2"/><path d="M200 132v64" stroke="#5a3422" stroke-width="2"/>' +
      '<rect x="146" y="70" width="108" height="16" rx="2" fill="#fff" stroke="#9a8f80"/><text x="200" y="81.5" text-anchor="middle" ' + font + ' font-size="7.6" fill="#3a2a5a">MOUNT MORIAH BAPTIST</text>' +
      '<rect x="96" y="196" width="208" height="8" fill="#d8d0c0"/><rect x="88" y="204" width="224" height="10" fill="#c8bfae"/>' +
      kids +
      note(150, 150, GOLD) + note(250, 146, PINK, "mj-n2") + note(206, 132, TEAL, "mj-n3") + note(116, 160, "#fff", "mj-n2") +
      '<rect x="0" y="214" width="400" height="46" fill="#6f9a52"/><rect x="0" y="236" width="400" height="24" fill="#8a8478"/>' +
      '<rect x="20" y="238" width="96" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="68" y="251" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Millaudon St</text>',
      sky("mjs3", "#9cc8ec", "#fbf0d2"));
  }

  /* 4. Mahalia Jackson Theater for the Performing Arts, Armstrong Park, at dusk */
  function mjtheater() {
    const cols = Array.from({ length: 13 }, (_, i) => '<rect x="' + (86 + i * 19) + '" y="74" width="5" height="96" fill="#f6f4ee"/>').join("");
    const glass = Array.from({ length: 12 }, (_, i) => '<rect x="' + (91 + i * 19) + '" y="80" width="14" height="90" fill="#ffd98a" opacity="' + (i % 3 ? .75 : .95) + '"' + (i % 4 === 0 ? ' class="mj-bl"' : (i % 4 === 2 ? ' class="mj-bl mj-bl2"' : "")) + '/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mjs4)"/>' +
      '<circle cx="330" cy="40" r="2" fill="#fff" class="mj-bl"/><circle cx="60" cy="28" r="1.6" fill="#fff" class="mj-bl mj-bl2"/><circle cx="200" cy="18" r="1.4" fill="#fff"/>' +
      oak(26, 70, 52, "#1f3a26") + oak(380, 70, 52, "#1f3a26") +
      /* the theater: flat white roof slab, slender columns, glass lit gold */
      '<rect x="70" y="58" width="260" height="16" fill="#e8e6de"/><rect x="62" y="54" width="276" height="6" fill="#fbfaf6"/>' +
      '<rect x="86" y="74" width="232" height="96" fill="#3a2e3a"/>' + glass + cols +
      '<text x="200" y="69.5" text-anchor="middle" ' + font + ' font-size="9" letter-spacing="1.5" fill="#6a5a3a">MAHALIA JACKSON THEATER</text>' +
      '<rect x="64" y="170" width="272" height="8" fill="#d8d4c8"/>' +
      /* lagoon and fountain */
      '<rect x="0" y="178" width="400" height="82" fill="#1f3a4a"/>' +
      '<rect x="86" y="182" width="232" height="30" fill="#ffd98a" opacity=".18"/>' +
      '<g class="mj-rip"><path d="M40 200h60M220 214h80M120 226h50" stroke="#7fd0c8" stroke-width="2" stroke-linecap="round" opacity=".7"/></g><g class="mj-rip mj-rip2"><path d="M150 206h50M300 230h60M30 236h40" stroke="#ffd98a" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<ellipse cx="200" cy="232" rx="34" ry="6" fill="#2c5060"/>' +
      '<path class="mj-jet" d="M196 232q4 -46 8 0z" fill="#d8f0f4" opacity=".85"/><path class="mj-jet mj-j2" d="M182 232q6 -26 12 0z" fill="#d8f0f4" opacity=".7"/><path class="mj-jet mj-j2" d="M206 232q6 -26 12 0z" fill="#d8f0f4" opacity=".7"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">ARMSTRONG PARK · OPENED 1973</text>',
      sky("mjs4", "#1c1a3c", "#c86a6a"));
  }

  /* 5. Pitt St and Lowerline St: the levee and the Huey P. Long Bridge upriver */
  function mjcorner() {
    const truss = (x0, x1, top) => { let s = ""; for (let x = x0; x < x1; x += 14) s += '<path d="M' + x + ' 104L' + (x + 7) + ' ' + top + 'L' + (x + 14) + ' 104" stroke="#3a4048" stroke-width="1.6" fill="none"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#mjs5)"/>' +
      '<circle cx="300" cy="70" r="22" fill="#ffcf7a" opacity=".9"/>' +
      /* river + bridge */
      '<rect x="0" y="104" width="400" height="20" fill="#7a6a5a" opacity=".55"/>' +
      '<path d="M40 104h330" stroke="#3a4048" stroke-width="3"/><path d="M40 90h330" stroke="#3a4048" stroke-width="2.4"/>' + truss(40, 370, 90) +
      [70, 170, 270, 350].map(x => '<rect x="' + (x - 3) + '" y="104" width="6" height="20" fill="#3a4048"/>').join("") +
      '<g class="mj-boat"><rect x="0" y="114" width="40" height="6" fill="#f2ece0"/><rect x="6" y="108" width="24" height="6" fill="#f2ece0"/><rect x="14" y="100" width="4" height="8" fill="#2a2a2a"/><circle cx="40" cy="116" r="5" fill="#b8322a"/></g>' +
      /* the levee: green slope */
      '<path d="M0 124q200 -10 400 0v20H0z" fill="#5e8a46"/>' +
      /* wall */
      '<rect x="0" y="140" width="400" height="80" fill="#d8b898"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (150 + r * 10) + 'h400" stroke="#c09a7a" stroke-width="1"/>').join("") +
      tag("MAHALIA", 26, 198, 40, GOLD, -5) + tag("HALIE", 268, 170, 22, PINK, -8) + tag("BLACK PEARL", 214, 210, 15, TEAL, -4) +
      '<g class="mj-sp"><circle cx="232" cy="164" r="2" fill="' + GOLD + '"/><circle cx="238" cy="158" r="1.5" fill="' + GOLD + '"/></g><g class="mj-sp mj-sp2"><circle cx="236" cy="170" r="1.6" fill="' + PINK + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#5a5a5e"/><path d="M0 238h400" stroke="#e8d070" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="356" y="96" width="5" height="124" fill="#6a6a70"/>' + sign(300, 98, 96, "Pitt St") + sign(300, 122, 96, "Lowerline St"),
      sky("mjs5", "#6a5a8a", "#f2a874"));
  }

  window.SCENES = { mjstation: mjstation, mjhouse: mjhouse, mjchurch: mjchurch, mjtheater: mjtheater, mjcorner: mjcorner };
})();
