/* mikejones scenes (Regions tab: Houston + Texas; Studewood, Houston's Northside, where his grandmother lived). CSS classes and ids prefixed mj- (the page's own anim-train is kept).
   1 METRO 56 Airline/Montrose bus pulling into the E 11th St @ Studewood stop (also served by the 30 Clinton/Ella): old Heights bungalows, live oaks, the stop sign with the 30 and the 56.
   2 "Who? Mike Jones": a flip phone buzzing on a table with WHO? MIKE JONES on its screen, the white tees he handed out drying on a line.
   3 Ice Age (his own label): a jewelry counter with a diamond grill and an iced-out chain sparkling, frost creeping in the corners.
   4 White Oak Bayou under the Studewood St bridge: the hike-and-bike trail, a candy-paint slab crossing the bridge, a cyclist rolling by, the bayou rippling.
   5 Studewood St and White Oak Dr: green signs, MIKE JONES tagged on the wall, the Heights Theater's art-deco blade sign glowing behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mjflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mj-flk{animation:mjflick 2.2s infinite}.mj-flk2{animation-delay:.8s}' +
    '@keyframes mjbuzz{0%,100%{transform:translate(0,0) rotate(0)}20%{transform:translate(-2px,0) rotate(-2deg)}40%{transform:translate(2px,0) rotate(2deg)}60%{transform:translate(-2px,0) rotate(-1deg)}80%{transform:translate(2px,0) rotate(1deg)}}.mj-buzz{transform-box:fill-box;transform-origin:50% 100%;animation:mjbuzz .6s linear infinite}' +
    '@keyframes mjring{0%{opacity:0;transform:scale(.6)}30%{opacity:1}100%{opacity:0;transform:scale(1.4)}}.mj-ring{transform-box:fill-box;transform-origin:50% 50%;animation:mjring 1.2s ease-out infinite}.mj-ring2{animation-delay:.6s}' +
    '@keyframes mjsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mj-sway{transform-box:fill-box;transform-origin:50% 0%;animation:mjsway 2.8s ease-in-out infinite}.mj-sway2{animation-delay:-1.4s}' +
    '@keyframes mjspark{0%,100%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1)}}.mj-sp{transform-box:fill-box;transform-origin:50% 50%;animation:mjspark 1.6s ease-in-out infinite}.mj-sp2{animation-delay:-.5s}.mj-sp3{animation-delay:-1.1s}' +
    '@keyframes mjslab{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.mj-slab{animation:mjslab 7s linear infinite;animation-delay:-3s}' +
    '@keyframes mjbike{from{transform:translateX(460px)}to{transform:translateX(-80px)}}.mj-bike{animation:mjbike 9s linear infinite;animation-delay:-4s}' +
    '@keyframes mjrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.mj-rip{animation:mjrip 2.4s ease-in-out infinite}.mj-rip2{animation-delay:-1.2s}' +
    '@keyframes mjspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mj-spr{animation:mjspray 1.4s ease-out infinite}.mj-spr2{animation-delay:.45s}' +
    '@keyframes mjleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.mj-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:mjleaf 3s ease-in-out infinite}' +
    '@keyframes mjchase{0%,100%{fill:#ffe9a8}50%{fill:#ff8fd8}}.mj-chase{animation:mjchase 1s steps(1) infinite}.mj-chase2{animation-delay:-.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", ICE = "#7fe3ff", PURPLE = "#b388ff", GOLD = "#ffd23f";
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-5" y="0" width="10" height="44" fill="#5b4632"/><path d="M-5 12l-18 -10M5 10l18 -12" stroke="#5b4632" stroke-width="5"/><g class="mj-leaf"><ellipse cx="0" cy="-8" rx="44" ry="22" fill="#3f6b35"/><ellipse cx="-22" cy="-2" rx="22" ry="14" fill="#4c7d40"/><ellipse cx="24" cy="-4" rx="22" ry="14" fill="#36602e"/></g></g>';
  const bungalow = (x, body, roof, trim) => '<g transform="translate(' + x + ' 0)"><path d="M-6 98l56 -30l56 30z" fill="' + roof + '"/><rect x="0" y="98" width="100" height="40" fill="' + body + '"/>' +
    '<rect x="0" y="96" width="100" height="4" fill="' + trim + '"/><rect x="12" y="106" width="20" height="18" fill="#2c3a48" stroke="' + trim + '" stroke-width="2"/><rect x="68" y="106" width="20" height="18" fill="#2c3a48" stroke="' + trim + '" stroke-width="2"/>' +
    '<rect x="42" y="108" width="16" height="30" fill="' + trim + '"/><path d="M0 120h100" stroke="' + trim + '" stroke-width="1" opacity=".5"/></g>';
  const slabCar = c => '<rect x="0" y="10" width="124" height="22" rx="6" fill="' + c + '"/><path d="M22 10l14 -14h48l16 14z" fill="' + c + '"/><path d="M40 -2h40l10 10h-56z" fill="#cfe9ff" opacity=".7"/>' +
    '<path d="M4 18h116" stroke="#fff" stroke-width="2" opacity=".35"/>' + [26, 98].map(x => '<g><circle cx="' + x + '" cy="34" r="10" fill="#cfd5db" stroke="#222" stroke-width="3"/><path d="M' + x + ' 34l-18 0" stroke="#eef2f5" stroke-width="3"/></g>').join("");

  /* 1. METRO 56 at E 11th St @ Studewood */
  function mjstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="146" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="136" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="146" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="176" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="186" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="138" width="150" height="10" rx="2" fill="#111"/><text x="107" y="146" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">56 AIRLINE/MONTROSE</text>' +
      '<circle cx="80" cy="208" r="12" fill="#222"/><circle cx="80" cy="208" r="5" fill="#9aa1a8"/><circle cx="294" cy="208" r="12" fill="#222"/><circle cx="294" cy="208" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="196" r="3.5" fill="#fff6c2"/></g>';
    const houses = bungalow(10, "#e9e2cf", "#5a6470", "#ffffff") + bungalow(140, "#a9c6c0", "#3e4a56", "#f4efe2") + bungalow(272, "#efcf9a", "#6a4a3a", "#ffffff");
    return svg(
      '<rect width="400" height="260" fill="url(#mjs1)"/>' + houses + oak(124, 78, .8) + oak(262, 74, .85) +
      '<rect x="0" y="128" width="400" height="10" fill="#cfc9bd"/><rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="100" width="5" height="116" fill="#6b7178"/><rect x="352" y="80" width="46" height="44" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="375" y="92" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text>' +
      '<text x="375" y="106" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">30</text><text x="375" y="119" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">56</text>' +
      '<rect x="20" y="220" width="310" height="34" rx="3" fill="#111"/><text x="30" y="242" ' + font + ' font-size="13" fill="#fff">E 11th St @ Studewood</text>' +
      '<rect x="226" y="228" width="40" height="18" rx="9" fill="' + METRO + '"/><text x="246" y="241" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">30</text>' +
      '<rect x="272" y="228" width="40" height="18" rx="9" fill="' + METRO + '"/><text x="292" y="241" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">56</text>',
      sky("mjs1", "#7fb7e6", "#f6e3bf"));
  }

  /* 2. Who? Mike Jones: the phone and the tees */
  function mjphone() {
    const tee = (x, cls) => '<g class="mj-sway ' + cls + '"><path d="M' + x + ' 46h8l2 4h12l2 -4h8l14 12l-8 10l-6 -4v34h-40v-34l-6 4l-8 -10z" fill="#f7f7f2" stroke="#c9c9c0" stroke-width="1.5"/>' +
      '<text x="' + (x + 20) + '" y="78" text-anchor="middle" ' + font + ' font-size="6.5" fill="#222">WHO IS</text><text x="' + (x + 20) + '" y="87" text-anchor="middle" ' + font + ' font-size="6.5" fill="#222">MIKE JONES?</text>' +
      '<rect x="' + (x + 6) + '" y="42" width="3" height="8" fill="#c9a24a"/><rect x="' + (x + 31) + '" y="42" width="3" height="8" fill="#c9a24a"/></g>';
    const line = '<path d="M0 44q200 10 400 0" stroke="#cfcfcf" stroke-width="2" fill="none"/>';
    const phone = '<g class="mj-buzz"><rect x="150" y="128" width="100" height="70" rx="10" fill="#2b2f36" stroke="#5a606a" stroke-width="2"/><rect x="160" y="136" width="80" height="54" rx="4" fill="' + ICE + '"/>' +
      '<text x="200" y="156" text-anchor="middle" ' + font + ' font-size="9" fill="#0a1218">INCOMING CALL</text><text x="200" y="172" text-anchor="middle" ' + font + ' font-size="12" fill="#0a1218">WHO?</text><text x="200" y="185" text-anchor="middle" ' + font + ' font-size="9.5" fill="#0a1218">MIKE JONES</text>' +
      '<rect x="146" y="198" width="108" height="34" rx="10" fill="#3a3f48" stroke="#5a606a" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (158 + (i % 4) * 22) + '" y="' + (204 + Math.floor(i / 4) * 13) + '" width="16" height="9" rx="2" fill="#626a75"/>').join("") + '</g>';
    const rings = '<g class="mj-ring"><path d="M126 150q-12 14 0 28M274 150q12 14 0 28" stroke="' + GOLD + '" stroke-width="3" fill="none"/></g><g class="mj-ring mj-ring2"><path d="M114 142q-18 22 0 44M286 142q18 22 0 44" stroke="' + GOLD + '" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mjs2)"/>' + line + tee(24, "") + tee(104, "mj-sway2") + tee(256, "") + tee(336, "mj-sway2") +
      '<rect x="0" y="216" width="400" height="44" fill="#5b3a24"/><rect x="0" y="212" width="400" height="6" fill="#7a5034"/>' + rings + phone +
      '<rect x="10" y="236" width="118" height="18" rx="3" fill="#111" opacity=".9"/><text x="69" y="249" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">WHO? MIKE JONES</text>',
      sky("mjs2", "#2d2350", "#7a5aa8"));
  }

  /* 3. Ice Age: the jewelry counter */
  function mjice() {
    const sparkle = (x, y, cls) => '<path class="mj-sp ' + cls + '" d="M' + x + ' ' + (y - 8) + 'l2 6l6 2l-6 2l-2 6l-2 -6l-6 -2l6 -2z" fill="#fff"/>';
    const chain = Array.from({ length: 15 }, (_, i) => { const a = Math.PI * (i / 14); return '<circle cx="' + (200 - 70 * Math.cos(a)) + '" cy="' + (88 + 46 * Math.sin(a)) + '" r="5" fill="#e8f7ff" stroke="#9fd8f0" stroke-width="1.5"/>'; }).join("");
    const pendant = '<rect x="168" y="132" width="64" height="40" rx="6" fill="#dff4ff" stroke="' + ICE + '" stroke-width="2"/><text x="200" y="150" text-anchor="middle" ' + font + ' font-size="11" fill="#1a5a78">ICE</text><text x="200" y="164" text-anchor="middle" ' + font + ' font-size="11" fill="#1a5a78">AGE</text>';
    const grill = '<g transform="translate(300 150)"><path d="M0 0q30 -14 60 0v14q-30 12 -60 0z" fill="#e8f7ff" stroke="#9fd8f0" stroke-width="2"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (8 + i * 9) + ' 0v16" stroke="#9fd8f0" stroke-width="1"/>').join("") + '</g>';
    const ring = '<g transform="translate(60 160)"><circle cx="0" cy="0" r="14" fill="none" stroke="#e8f7ff" stroke-width="5"/><path d="M-8 -16l8 -10l8 10z" fill="#dff4ff" stroke="' + ICE + '" stroke-width="1.5"/></g>';
    const frost = '<path d="M0 0h46l-10 8l6 6l-14 4l4 10l-14 -2l-6 12l-12 -6z" fill="#e8f7ff" opacity=".45"/><path d="M400 0h-46l10 8l-6 6l14 4l-4 10l14 -2l6 12l12 -6z" fill="#e8f7ff" opacity=".45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mjs3)"/>' + frost +
      '<rect x="20" y="70" width="360" height="120" rx="6" fill="#0c2533" stroke="' + ICE + '" stroke-width="2" opacity=".95"/>' + chain + pendant + grill + ring +
      sparkle(130, 100, "") + sparkle(260, 96, "mj-sp2") + sparkle(320, 146, "mj-sp3") + sparkle(64, 140, "mj-sp2") + sparkle(214, 140, "") + sparkle(340, 90, "mj-sp3") +
      '<rect x="0" y="190" width="400" height="70" fill="#1d2833"/><rect x="0" y="190" width="400" height="5" fill="' + ICE + '" opacity=".7"/>' +
      '<rect x="130" y="216" width="140" height="22" rx="3" fill="#111"/><text x="200" y="232" text-anchor="middle" ' + font + ' font-size="13" fill="' + ICE + '">ICE AGE</text>',
      sky("mjs3", "#06121a", "#14384a"));
  }

  /* 4. White Oak Bayou under the Studewood St bridge */
  function mjbayou() {
    const bridge = '<rect x="0" y="74" width="400" height="14" fill="#b9b3a6"/><rect x="0" y="70" width="400" height="5" fill="#8a8478"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 10) + '" y="88" width="20" height="62" fill="#a39d90"/>').join("") +
      Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="60" width="3" height="10" fill="#8a8478"/>').join("") + '<rect x="0" y="58" width="400" height="3" fill="#8a8478"/>';
    const slab = '<g class="mj-slab"><g transform="translate(0 38) scale(.7)">' + slabCar(PURPLE) + '</g></g>';
    const bike = '<g class="mj-bike"><g transform="translate(0 168)"><circle cx="0" cy="12" r="8" fill="none" stroke="#222" stroke-width="2"/><circle cx="26" cy="12" r="8" fill="none" stroke="#222" stroke-width="2"/>' +
      '<path d="M0 12l10 -12h12l4 12M10 0l-4 -6M22 0v-6" stroke="#c0392b" stroke-width="2.5" fill="none"/><rect x="10" y="-22" width="10" height="16" rx="3" fill="#2e86c1"/><circle cx="15" cy="-27" r="5" fill="#3a2a20"/></g></g>';
    const water = '<rect x="0" y="196" width="400" height="64" fill="#3d6a6e"/>' + [206, 222, 240].map((y, i) => '<path class="mj-rip' + (i % 2 ? " mj-rip2" : "") + '" d="M' + (20 + i * 30) + ' ' + y + 'h60M' + (160 + i * 20) + ' ' + y + 'h50M' + (290 - i * 10) + ' ' + y + 'h60" stroke="#9fd0d0" stroke-width="2" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mjs4)"/>' + bridge + slab +
      '<path d="M0 150q100 -10 200 0t200 0v46h-400z" fill="#5f8d48"/><rect x="0" y="176" width="400" height="10" fill="#cfc6b2"/>' + bike + water +
      oak(20, 130, .7) + oak(380, 128, .75) +
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="#111" opacity=".9"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">WHITE OAK BAYOU</text>',
      sky("mjs4", "#8cc4ee", "#f3ead2"));
  }

  /* 5. Studewood St and White Oak Dr */
  function mjcorner() {
    const blade = '<g><rect x="286" y="96" width="70" height="56" fill="#f2ede0"/><rect x="286" y="92" width="70" height="6" fill="#d8cfb8"/>' +
      '<rect x="306" y="10" width="30" height="86" rx="3" fill="#1c2a4a" stroke="#f2ede0" stroke-width="2"/>' +
      'HEIGHTS'.split("").map((c, i) => '<text class="mj-chase' + (i % 2 ? " mj-chase2" : "") + '" x="321" y="' + (24 + i * 11.4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe9a8">' + c + '</text>').join("") +
      '<rect x="280" y="118" width="82" height="16" fill="#1c2a4a"/>' + Array.from({ length: 12 }, (_, i) => '<circle class="mj-flk' + (i % 2 ? " mj-flk2" : "") + '" cx="' + (285 + i * 6.6) + '" cy="126" r="1.6" fill="#ffe9a8"/>').join("") + '</g>';
    const wall = '<rect x="0" y="118" width="250" height="112" fill="#8a4b3a"/>' + Array.from({ length: 11 }, (_, r) => '<path d="M0 ' + (126 + r * 10) + 'h250" stroke="#6f3a2c" stroke-width="1"/>').join("") +
      tag("MIKE JONES", 18, 182, 34, ICE, -6) + tag("WHO?", 160, 214, 22, GOLD, -4) + tag("ICE AGE", 20, 216, 18, PURPLE, 3);
    const can = '<g transform="translate(222 196)"><rect x="0" y="0" width="12" height="26" rx="3" fill="#ddd"/><rect x="2" y="-5" width="8" height="6" fill="#999"/><circle class="mj-spr" cx="6" cy="-10" r="3" fill="' + ICE + '" opacity=".8"/><circle class="mj-spr mj-spr2" cx="2" cy="-12" r="2.4" fill="' + ICE + '" opacity=".8"/></g>';
    const pole = '<rect x="270" y="150" width="6" height="80" fill="#6b7178"/>' + sign(214, 160, 116, "STUDEWOOD ST") + sign(222, 184, 108, "WHITE OAK DR");
    return svg(
      '<rect width="400" height="260" fill="url(#mjs5)"/>' + stars(22) + blade + oak(372, 120, .8) + wall + can + pole +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4b50"/><path d="M0 245h400" stroke="#e6e6e6" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("mjs5", "#1a1438", "#d9708a"));
  }

  window.SCENES = { mjstation: mjstation, mjphone: mjphone, mjice: mjice, mjbayou: mjbayou, mjcorner: mjcorner };
})();
