/* travisscott scenes (Regions tab: Houston + Texas; Missouri City / South Houston). CSS classes and ids prefixed ts-.
   1 Hiram Clarke Transit Center, 3600 W Fuqua St, right on the Missouri City line: a white METRO bus on the 14 Hiram Clarke pulling into the bays.
   2 Six Flags AstroWorld (1968-2005) on the 610 Loop, the park he grew up on and named his album after: the white wooden Texas Cyclone, a red train diving.
   3 Elkins High School, 7007 Knights Ct, Missouri City (class of 2009): tan brick, royal blue and gold, the Knights banner, the marquee.
   4 Toyota Center downtown ("Packin' out Toyota"): the glass front lit up, light beams, the crowd.
   5 Lexington Blvd and Hwy 6 by Elkins in Missouri City: green signs, TRAVIS SCOTT tagged with CACTUS JACK and IT'S LIT, Pennzoil Place's twin dark trapezoids far off downtown.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tsbus{0%{transform:translateX(440px)}45%,100%{transform:translateX(0)}}.ts-bus{animation:tsbus 7s ease-out infinite;animation-delay:-3.2s}' +
    '@keyframes tsdive{0%{offset-distance:0%}100%{offset-distance:100%}}' +
    '.ts-coast{offset-path:path("M0 80 Q60 60 120 76 Q170 92 200 188 Q230 220 280 196 Q340 160 400 120");offset-rotate:auto;offset-distance:22%;animation:tsdive 4.2s ease-in infinite}' +
    '@keyframes tsglow{0%,100%{opacity:.45}50%{opacity:1}}.ts-glow{animation:tsglow 2s ease-in-out infinite}.ts-g2{animation-delay:-1s}' +
    '@keyframes tsflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(6deg) scaleX(.92)}}.ts-flag{transform-box:fill-box;transform-origin:0% 50%;animation:tsflag 1.6s ease-in-out infinite}' +
    '@keyframes tsbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.ts-beam{transform-box:fill-box;transform-origin:50% 100%;animation:tsbeam 3.4s ease-in-out infinite}.ts-b2{animation-delay:-1.7s}' +
    '@keyframes tsbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ts-bob{animation:tsbob .8s ease-in-out infinite}.ts-bob2{animation-delay:-.4s}' +
    '@keyframes tsfl{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.18)}}.ts-fl{transform-box:fill-box;transform-origin:50% 100%;animation:tsfl .6s ease-in-out infinite}' +
    '@keyframes tscar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.ts-car{animation:tscar 6s linear infinite}' +
    '@keyframes tstw{0%,100%{opacity:.2}50%{opacity:1}}.ts-tw{animation:tstw 1.8s ease-in-out infinite}.ts-tw2{animation-delay:-.6s}.ts-tw3{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const METRO = "#1f4e79", RED = "#d8292f", GOLD = "#e8b33a", CACTUS = "#7fb23f", ROYAL = "#1f3fa8", KGOLD = "#f2c230";

  /* 1. Hiram Clarke Transit Center on W Fuqua: METRO 14 bus at the bays */
  function tsstation() {
    const bus = '<g class="ts-bus"><rect x="44" y="124" width="236" height="80" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (84 + i * 38) + '" y="138" width="32" height="28" rx="3" fill="#24323e"/>').join("") +
      '<rect x="50" y="138" width="28" height="56" rx="2" fill="#24323e"/><rect x="44" y="172" width="236" height="8" fill="' + METRO + '"/><rect x="44" y="182" width="236" height="4" fill="' + RED + '"/>' +
      '<rect x="48" y="126" width="104" height="11" rx="2" fill="#111"/><text x="100" y="134.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">14 HIRAM CLARKE</text>' +
      '<circle cx="92" cy="204" r="12" fill="#222"/><circle cx="92" cy="204" r="5" fill="#9aa1a8"/><circle cx="238" cy="204" r="12" fill="#222"/><circle cx="238" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="48" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ts1)"/>' +
      '<circle cx="66" cy="44" r="18" fill="#fff1c4" opacity=".85"/>' +
      '<g fill="#5f8a46"><ellipse cx="40" cy="104" rx="40" ry="20"/><ellipse cx="190" cy="100" rx="46" ry="22"/><ellipse cx="360" cy="104" rx="44" ry="20"/></g>' +
      /* the transit center canopy: long flat roof on round columns */
      '<rect x="0" y="66" width="400" height="10" fill="#c9ccd1"/><rect x="0" y="76" width="400" height="5" fill="' + METRO + '"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (12 + i * 47) + '" y="81" width="6" height="62" fill="#9aa1a8"/>').join("") +
      '<rect x="0" y="142" width="400" height="16" fill="#cfc8b8"/><rect x="0" y="158" width="400" height="102" fill="#4d4d52"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      /* station sign */
      '<rect x="290" y="88" width="104" height="36" rx="3" fill="#111"/><text x="342" y="102" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HIRAM CLARKE</text>' +
      '<text x="342" y="115" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">TRANSIT CENTER</text>' +
      '<rect x="336" y="124" width="4" height="34" fill="#6b7178"/>' +
      '<rect x="300" y="160" width="84" height="40" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="342" y="174" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">METRO</text>' +
      '<text x="342" y="193" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">14 · 11 · 54</text>' +
      '<rect x="292" y="206" width="100" height="14" rx="2" fill="#111"/><text x="342" y="216" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">3600 W FUQUA ST</text>',
      sky("ts1", "#8cc4ea", "#f7e2b8"));
  }

  /* 2. AstroWorld on the 610 Loop: the white wooden Texas Cyclone, a red train diving */
  function tsastro() {
    const lattice = [];
    for (let x = 20; x <= 380; x += 16) {
      const top = 70 + 70 * Math.pow(Math.sin((x - 20) / 360 * Math.PI * 1.5), 2);
      lattice.push('<path d="M' + x + ' ' + top.toFixed(1) + 'V214" stroke="#f3eee2" stroke-width="2"/>');
      lattice.push('<path d="M' + x + ' ' + (top + 14).toFixed(1) + 'L' + (x + 16) + ' 214" stroke="#d9d2c0" stroke-width="1"/>');
    }
    for (let y = 120; y <= 210; y += 18) lattice.push('<path d="M20 ' + y + 'H380" stroke="#e6dfcd" stroke-width="1.2" opacity=".8"/>');
    const track = 'M0 80 Q60 60 120 76 Q170 92 200 188 Q230 220 280 196 Q340 160 400 120';
    return svg(
      '<rect width="400" height="260" fill="url(#ts2)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffd27a" opacity=".85"/>' +
      lattice.join("") +
      '<path d="' + track + '" stroke="#8a4a2a" stroke-width="6" fill="none"/><path d="' + track + '" stroke="#e8dcc0" stroke-width="2" fill="none" stroke-dasharray="4 4"/>' +
      /* the train */
      '<g class="ts-coast"><g transform="translate(-35 -10)"><rect x="0" y="0" width="22" height="12" rx="3" fill="' + RED + '"/><rect x="24" y="0" width="22" height="12" rx="3" fill="' + RED + '"/><rect x="48" y="0" width="22" height="12" rx="3" fill="' + RED + '"/>' +
      '<rect x="2" y="-4" width="18" height="5" rx="2" fill="#2a2a2a"/><rect x="26" y="-4" width="18" height="5" rx="2" fill="#2a2a2a"/><rect x="50" y="-4" width="18" height="5" rx="2" fill="#2a2a2a"/></g></g>' +
      '<rect x="0" y="214" width="400" height="46" fill="#6f9a52"/><path d="M0 232h400" stroke="#55513f" stroke-width="10"/>' +
      /* park sign */
      '<rect x="114" y="222" width="172" height="30" rx="4" fill="#1b2a5e" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">ASTROWORLD</text><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">TEXAS CYCLONE · 610 LOOP</text>' +
      '<g class="ts-tw"><circle cx="40" cy="30" r="2" fill="#fff"/></g><g class="ts-tw ts-tw2"><circle cx="120" cy="22" r="1.6" fill="#fff"/></g><g class="ts-tw ts-tw3"><circle cx="230" cy="34" r="1.8" fill="#fff"/></g>',
      sky("ts2", "#2b2f6b", "#f39a5b"));
  }

  /* 3. Elkins High School, Missouri City: tan brick, royal blue and gold */
  function tselkins() {
    return svg(
      '<rect width="400" height="260" fill="url(#ts3)"/>' +
      '<rect x="30" y="80" width="340" height="104" fill="#c9a77c"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M30 ' + (88 + i * 10) + 'h340" stroke="#b8946a" stroke-width="1"/>').join("") +
      '<rect x="30" y="74" width="340" height="10" fill="' + ROYAL + '"/>' +
      [46, 80, 114, 266, 300, 334].map(x => '<rect x="' + x + '" y="96" width="22" height="26" fill="#2a3442" stroke="#efe8d8" stroke-width="2"/><rect x="' + x + '" y="134" width="22" height="26" fill="#2a3442" stroke="#efe8d8" stroke-width="2"/>').join("") +
      /* entry block */
      '<rect x="150" y="56" width="100" height="128" fill="#d6b88e"/><rect x="150" y="50" width="100" height="10" fill="' + ROYAL + '"/>' +
      '<rect x="160" y="66" width="80" height="18" fill="' + ROYAL + '"/><text x="200" y="79" text-anchor="middle" ' + font + ' font-size="10" fill="' + KGOLD + '">ELKINS</text>' +
      '<rect x="166" y="96" width="68" height="50" fill="#33475e" stroke="#efe8d8" stroke-width="2"/><path d="M200 96v50M166 121h68" stroke="#efe8d8" stroke-width="2"/>' +
      '<rect x="176" y="150" width="48" height="34" fill="#1a2533"/><path d="M200 150v34" stroke="#555" stroke-width="2"/>' +
      /* knight's shield banner on a pole */
      '<rect x="368" y="34" width="3" height="150" fill="#9aa1a8"/><g class="ts-flag"><rect x="371" y="36" width="26" height="18" fill="' + ROYAL + '"/><path d="M380 40h8v6q0 4 -4 6q-4 -2 -4 -6z" fill="' + KGOLD + '"/></g>' +
      '<rect x="0" y="184" width="400" height="76" fill="#78a85a"/><path d="M200 184l-34 76h68z" fill="#cfc8b8"/>' +
      /* marquee */
      '<rect x="46" y="200" width="104" height="40" rx="3" fill="' + ROYAL + '" stroke="' + KGOLD + '" stroke-width="2"/><rect x="94" y="240" width="6" height="12" fill="#6b7178"/>' +
      '<text x="98" y="214" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ELKINS HIGH SCHOOL</text><text x="98" y="226" text-anchor="middle" ' + font + ' font-size="8" fill="' + KGOLD + '">HOME OF THE KNIGHTS</text>' +
      '<text x="98" y="236" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">7007 KNIGHTS CT</text>' +
      /* a gold pair of sneakers on the steps, the class gift */
      '<g class="ts-bob"><path d="M250 236q8 -10 18 -6l10 4q6 2 4 6h-32z" fill="' + KGOLD + '" stroke="#5a4a1a" stroke-width="1.2"/></g>' +
      '<g class="ts-bob ts-bob2"><path d="M290 238q8 -10 18 -6l10 4q6 2 4 6h-32z" fill="' + KGOLD + '" stroke="#5a4a1a" stroke-width="1.2"/></g>',
      sky("ts3", "#86c0ea", "#f4ead2"));
  }

  /* 4. Toyota Center downtown: glass front lit, beams, the crowd */
  function tstoyota() {
    const crowd = Array.from({ length: 24 }, (_, i) => '<g class="ts-bob' + (i % 2 ? ' ts-bob2' : '') + '"><circle cx="' + (10 + i * 16.5) + '" cy="' + (226 + (i % 3) * 3) + '" r="6" fill="#151018"/><rect x="' + (4 + i * 16.5) + '" y="' + (231 + (i % 3) * 3) + '" width="12" height="30" rx="4" fill="#151018"/>' +
      (i % 4 === 1 ? '<path d="M' + (14 + i * 16.5) + ' ' + (232 + (i % 3) * 3) + 'l6 -18" stroke="#151018" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ts4)"/>' +
      '<g class="ts-beam"><path d="M110 210L70 0h30z" fill="' + GOLD + '" opacity=".25"/></g><g class="ts-beam ts-b2"><path d="M290 210L320 0h-30z" fill="' + RED + '" opacity=".25"/></g>' +
      /* the arena: stone base, big glass wall, curved roof edge */
      '<rect x="40" y="70" width="320" height="140" fill="#b9a68a"/><path d="M34 70q166 -30 332 0v8h-332z" fill="#8f9aa6"/>' +
      '<rect x="110" y="84" width="180" height="110" fill="#2c4a6e"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (110 + i * 20) + ' 84v110" stroke="#a9c4dd" stroke-width="1.5"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M110 ' + (84 + i * 22) + 'h180" stroke="#a9c4dd" stroke-width="1.5"/>').join("") +
      '<rect x="112" y="86" width="176" height="106" fill="' + GOLD + '" class="ts-glow" opacity=".35"/>' +
      '<rect x="56" y="90" width="38" height="104" fill="' + RED + '"/><rect x="306" y="90" width="38" height="104" fill="' + RED + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3640"/>' +
      '<rect x="128" y="196" width="144" height="16" rx="2" fill="#111"/><text x="200" y="207.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">TOYOTA CENTER · SOLD OUT</text>' +
      crowd,
      sky("ts4", "#120a24", "#4a1f3a"));
  }

  /* 5. Lexington Blvd and Hwy 6, Missouri City: tag wall, Pennzoil Place far off */
  function tscorner() {
    const pz = (x) => '<path d="M' + x + ' 150v-58l22 -22v80z" fill="#1e2228"/><path d="M' + (x + 26) + ' 150v-80l22 22v58z" fill="#262b33"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ts5)"/>' +
      '<circle cx="190" cy="54" r="22" fill="#ffb15a" opacity=".85"/>' +
      /* downtown far off: Pennzoil Place's twin dark trapezoids */
      '<g opacity=".9"><rect x="210" y="104" width="16" height="46" fill="#2e3440"/><rect x="292" y="96" width="14" height="54" fill="#2e3440"/>' + pz(236) + '<rect x="312" y="112" width="20" height="38" fill="#353b47"/></g>' +
      '<rect x="0" y="148" width="400" height="6" fill="#5c6a4a"/>' +
      /* the wall */
      '<rect x="0" y="120" width="250" height="110" fill="#c98f63"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (128 + i * 10) + 'h250" stroke="#b47b52" stroke-width="1"/>').join("") +
      tag("TRAVIS SCOTT", 16, 182, 30, GOLD, -5) + tag("CACTUS JACK", 30, 214, 16, CACTUS, -3) + tag("IT'S LIT", 20, 146, 16, RED, -4) +
      /* a little cactus sprayed on the wall */
      '<path d="M206 214v-34q0 -6 6 -6t6 6v34z" fill="' + CACTUS + '" stroke="#000" stroke-width="2"/><path d="M206 196h-8v-10" stroke="' + CACTUS + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#55555c"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="ts-car"><rect x="0" y="232" width="56" height="14" rx="4" fill="' + RED + '"/><rect x="10" y="226" width="30" height="9" rx="3" fill="#2a3442"/><circle cx="12" cy="246" r="5" fill="#111"/><circle cx="44" cy="246" r="5" fill="#111"/></g>' +
      /* street signs */
      '<rect x="318" y="70" width="5" height="160" fill="#6e737b"/>' + sign(268, 72, 108, "LEXINGTON BLVD") + sign(286, 98, 72, "HWY 6") +
      '<g class="ts-fl"><path d="M352 136q10 12 0 24q-10 -6 -6 -14q2 6 6 4q-4 -8 0 -14z" fill="#ff7a2a"/></g>',
      sky("ts5", "#3a2a5c", "#f2946a"));
  }

  window.SCENES = { tsstation, tsastro, tselkins, tstoyota, tscorner };
})();
