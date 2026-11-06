/* The LOX game (OG FAN 99 GROUP, Westchester: west Yonkers, where Jadakiss, Styles P and Sheek Louch came up).
   1. The Bee-Line 1 pulling up at Warburton Av & Ashburton Av.  2. The Hulu Theater at Madison Square Garden, Verzuz night (Aug 2021, LOX vs Dipset).
   3. UBS Arena at Belmont Park, Summer Jam 2023 (the LOX closed the night with Rakim).  4. Stefanik Park on Nepperhan Av, where Yonkers gave them the key to the city (Aug 2021).
   5. Warburton Av & Ashburton Av: green signs, the tag wall, the Hudson and the Palisades behind.  400 x 260 SVGs, classes prefixed lx-. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lxcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lx-car{animation:lxcar 7s linear infinite}.lx-car2{animation-delay:-3.6s}' +
    '@keyframes lxblink{0%,100%{opacity:.25}50%{opacity:1}}.lx-bl{animation:lxblink 1.7s ease-in-out infinite}.lx-bl2{animation-delay:.55s}.lx-bl3{animation-delay:1.1s}' +
    '@keyframes lxsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.lx-beam{transform-box:fill-box;transform-origin:50% 100%;animation:lxsweep 3.2s ease-in-out infinite}.lx-beam2{animation-delay:-1.6s}' +
    '@keyframes lxbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lx-bob{animation:lxbob .55s ease-in-out infinite}.lx-bob2{animation-delay:.27s}' +
    '@keyframes lxpop{0%{opacity:0;transform:scale(.2)}40%{opacity:1}100%{opacity:0;transform:scale(1.3)}}.lx-pop{transform-box:fill-box;transform-origin:50% 50%;animation:lxpop 2.2s ease-out infinite}.lx-pop2{animation-delay:.7s}.lx-pop3{animation-delay:1.4s}' +
    '@keyframes lxglow{0%,100%{opacity:.35}50%{opacity:.95}}.lx-glow{animation:lxglow 2s ease-in-out infinite}' +
    '@keyframes lxfloat{0%,100%{transform:translateY(0) rotate(-8deg)}50%{transform:translateY(-8px) rotate(-3deg)}}.lx-key{transform-box:fill-box;transform-origin:50% 50%;animation:lxfloat 2.6s ease-in-out infinite}' +
    '@keyframes lxpull{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.lx-pull{animation:lxpull 1.3s ease-in-out infinite}' +
    '@keyframes lxwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.lx-wave{animation:lxwave 3s linear infinite}' +
    '@keyframes lxboat{from{transform:translateX(420px)}to{transform:translateX(-80px)}}.lx-boat{animation:lxboat 16s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (6 + (i * 53) % 54) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const crowd = (y, n, cols) => { let g = ""; for (let i = 0; i < n; i++) { const x = 8 + i * (384 / (n - 1)); g += '<g class="lx-bob' + (i % 2 ? " lx-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y + (i % 3) * 3) + '" r="7" fill="' + cols[i % cols.length] + '"/><rect x="' + (x - 8) + '" y="' + (y + 8 + (i % 3) * 3) + '" width="16" height="30" rx="6" fill="' + cols[i % cols.length] + '"/>' + (i % 4 === 1 ? '<rect x="' + (x + 5) + '" y="' + (y - 16) + '" width="4" height="18" rx="2" fill="' + cols[i % cols.length] + '"/>' : "") + '</g>'; } return g; };
  const GOLD = "#f2c14e", GREEN = "#2fd27a", CREAM = "#f4ead8", SIGN = "#0f6b3a", BEE = "#1d4f9c";
  const busBullet = (x, y, t) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + BEE + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="' + (t.length > 1 ? 11 : 14) + '" fill="#fff">' + t + '</text>';

  /* 1. Warburton Av & Ashburton Av, evening: brick walk-ups, the bus-stop sign with the Bee-Line routes, the 1 bus rolling in */
  function lxbus() {
    const bldg = (x, w, h, c) => { let g = '<rect x="' + x + '" y="' + (168 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (168 - h) + '" width="' + w + '" height="5" fill="#2a1a14"/>';
      for (let yy = 176 - h; yy < 150; yy += 16) for (let xx = x + 6; xx < x + w - 10; xx += 15) g += '<rect class="lx-bl lx-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="8" height="10" fill="#ffd98a" opacity=".7"/>'; return g; };
    let win = ""; for (let x = 34; x < 238; x += 30) win += '<rect x="' + x + '" y="134" width="22" height="22" rx="2" fill="#bcd8f0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lxs1)"/>' + stars(14) +
      '<path d="M0 120 L60 104 L140 112 L230 98 L320 108 L400 100 V170 H0z" fill="#3b4a3a" opacity=".65"/>' +
      bldg(0, 74, 92, "#7c3b2a") + bldg(78, 60, 70, "#8a4b33") + bldg(142, 86, 104, "#6d3426") + bldg(232, 70, 80, "#83442f") + bldg(306, 94, 96, "#74392a") +
      '<rect x="0" y="168" width="400" height="16" fill="#7d7f84"/><rect x="0" y="168" width="400" height="3" fill="#a3a5aa"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#3a3c40"/>' +
      '<path d="M0 222h400" stroke="#e8c84a" stroke-width="3" stroke-dasharray="22 16"/>' +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="14" y="120" width="250" height="68" rx="8" fill="#f3f3f0" stroke="#8a8f99" stroke-width="2"/>' + win +
        '<rect x="14" y="164" width="250" height="7" fill="' + BEE + '"/><rect x="14" y="171" width="250" height="4" fill="#f2c14e"/>' +
        '<rect x="244" y="126" width="18" height="44" rx="3" fill="#1d232b"/>' +
        '<rect x="196" y="124" width="62" height="10" rx="2" fill="#101418"/><text x="227" y="132" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#ffb02e">1 RIVERDALE</text>' +
        '<circle cx="60" cy="190" r="11" fill="#151515"/><circle cx="60" cy="190" r="4" fill="#888"/><circle cx="214" cy="190" r="11" fill="#151515"/><circle cx="214" cy="190" r="4" fill="#888"/>' +
        '<circle cx="262" cy="178" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      /* the stop sign */
      '<rect x="318" y="70" width="5" height="118" fill="#5a5f66"/>' +
      '<rect x="282" y="40" width="112" height="56" rx="4" fill="#111"/><rect x="282" y="40" width="112" height="3" fill="#fff"/>' +
      '<text x="290" y="58" ' + font + ' font-size="10.5" fill="#fff">Warburton Av &amp;</text><text x="290" y="71" ' + font + ' font-size="10.5" fill="#fff">Ashburton Av</text>' +
      busBullet(299, 84, "1") + busBullet(323, 84, "1C") + busBullet(347, 84, "1T") + busBullet(371, 84, "1W") +
      person(352, 156, "#1b1b1b") + person(374, 160, "#2a2a2a") +
      txt("WEST YONKERS · BEE-LINE BUS", 140, 246, 11, CREAM, 'letter-spacing="2"'),
      sky("lxs1", "#0c1430", "#4a3a5a"));
  }

  /* 2. The Hulu Theater at Madison Square Garden: the big round drum with its white ribs, the glass base, the marquee, spotlights over the crowd (Verzuz, LOX vs Dipset) */
  function lxverzuz() {
    let ribs = ""; for (let i = 0; i < 17; i++) { const x = 52 + i * 18.5; ribs += '<rect x="' + (x - 3) + '" y="40" width="6" height="104" fill="#e9e6df"/>'; }
    let glass = ""; for (let x = 54; x < 350; x += 16) glass += '<rect x="' + x + '" y="148" width="12" height="26" fill="#9fd0ff" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lxs2)"/>' + stars(18) +
      '<polygon class="lx-beam" points="90,140 70,0 110,0" fill="#fff" opacity=".1"/><polygon class="lx-beam lx-beam2" points="310,140 290,0 330,0" fill="' + GOLD + '" opacity=".12"/>' +
      '<ellipse cx="200" cy="40" rx="156" ry="14" fill="#cfcac0"/>' +
      '<rect x="44" y="40" width="312" height="108" fill="#8f8a84"/>' + ribs +
      '<ellipse cx="200" cy="40" rx="156" ry="14" fill="none" stroke="#f4f1ea" stroke-width="3"/>' +
      '<rect x="40" y="144" width="320" height="32" fill="#1e2630"/>' + glass +
      '<rect x="96" y="100" width="208" height="38" rx="4" fill="#0d0d10" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="lx-glow" x="200" y="117" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '" letter-spacing="3">LOX vs DIPSET</text>' +
      txt("HULU THEATER AT MSG", 200, 132, 9.5, "#fff", 'letter-spacing="2"') +
      '<rect x="0" y="176" width="400" height="84" fill="#141418"/>' +
      crowd(196, 18, ["#26262c", "#30303a", "#1c1c22"]) +
      txt("MADISON SQUARE GARDEN · AUG 2021", 200, 252, 10, CREAM, 'letter-spacing="2"'),
      sky("lxs2", "#05060f", "#2a1838"));
  }

  /* 3. UBS Arena at Belmont Park: red brick and big arched glass, white trim, Summer Jam banner, fireworks over the roof */
  function lxjam() {
    let arches = ""; for (let i = 0; i < 6; i++) { const x = 62 + i * 48; arches += '<path d="M' + x + ' 162 V108 a17 17 0 0 1 34 0 V162z" fill="#ffd27a" opacity=".85"/><path d="M' + (x + 17) + ' 92 V162 M' + x + ' 128 H' + (x + 34) + '" stroke="#5a2f22" stroke-width="2"/>'; }
    let brick = ""; for (let y = 76; y < 172; y += 8) brick += '<path d="M40 ' + y + 'h320" stroke="#7a3226" stroke-width="1" opacity=".6"/>';
    const fw = (x, y, c, cls) => { let r = ""; for (let a = 0; a < 12; a++) { const t = a * Math.PI / 6; r += '<line x1="' + x + '" y1="' + y + '" x2="' + (x + Math.cos(t) * 20).toFixed(1) + '" y2="' + (y + Math.sin(t) * 20).toFixed(1) + '" stroke="' + c + '" stroke-width="2" stroke-linecap="round"/>'; } return '<g class="lx-pop ' + cls + '">' + r + '</g>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#lxs3)"/>' + stars(16) +
      fw(70, 34, GOLD, "") + fw(200, 22, "#ff5a7a", "lx-pop2") + fw(330, 36, GREEN, "lx-pop3") +
      '<rect x="40" y="70" width="320" height="104" fill="#9c4434"/>' + brick +
      '<rect x="34" y="62" width="332" height="10" fill="#f1ede4"/><rect x="40" y="172" width="320" height="6" fill="#f1ede4"/>' + arches +
      '<rect x="120" y="76" width="160" height="16" rx="2" fill="#111"/>' + txt("SUMMER JAM 2023", 200, 88, 11, GOLD, 'letter-spacing="3"') +
      '<rect x="0" y="178" width="400" height="82" fill="#2c2e33"/>' +
      crowd(196, 16, ["#1d1f24", "#2a2c34", "#16171b"]) +
      txt("UBS ARENA · BELMONT PARK", 200, 252, 10, CREAM, 'letter-spacing="2"'),
      sky("lxs3", "#070a1a", "#3a2040"));
  }

  /* 4. Stefanik Park on Nepperhan Av: trees, the new outdoor gym, and the gold key to the city hanging over it all */
  function lxkey() {
    const tree = (x, y, s) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (40 * s) + '" fill="#5a3b24"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (20 * s) + '" fill="#2f7d3c"/><circle cx="' + (x - 12 * s) + '" cy="' + (y + 6) + '" r="' + (14 * s) + '" fill="#3a8f46"/><circle cx="' + (x + 12 * s) + '" cy="' + (y + 4) + '" r="' + (14 * s) + '" fill="#2a6f35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lxs4)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffe08a" opacity=".9"/>' +
      tree(30, 120, 1.2) + tree(88, 128, 0.9) + tree(312, 124, 1.1) + tree(372, 118, 1.25) +
      '<rect x="0" y="160" width="400" height="100" fill="#4f9a4a"/><rect x="60" y="172" width="280" height="70" rx="6" fill="#d36b3a"/>' +
      /* pull-up rig */
      '<rect x="92" y="122" width="6" height="96" fill="#2b6fb3"/><rect x="190" y="122" width="6" height="96" fill="#2b6fb3"/><rect x="92" y="122" width="104" height="6" fill="#2b6fb3"/>' +
      '<g class="lx-pull"><rect x="128" y="128" width="3" height="10" fill="#222"/><rect x="152" y="128" width="3" height="10" fill="#222"/><circle cx="141" cy="146" r="7" fill="#1b1b1b"/><rect x="133" y="153" width="16" height="26" rx="6" fill="#1b1b1b"/><path d="M130 138 L136 154 M153 138 L147 154" stroke="#1b1b1b" stroke-width="4" stroke-linecap="round"/><rect x="134" y="179" width="5" height="18" fill="#1b1b1b"/><rect x="143" y="179" width="5" height="18" fill="#1b1b1b"/></g>' +
      /* parallel bars */
      '<rect x="232" y="182" width="80" height="5" fill="#2b6fb3"/><rect x="232" y="196" width="80" height="5" fill="#2b6fb3"/><rect x="236" y="182" width="4" height="40" fill="#2b6fb3"/><rect x="304" y="182" width="4" height="40" fill="#2b6fb3"/>' +
      /* the key */
      '<g class="lx-key"><circle cx="200" cy="58" r="20" fill="none" stroke="' + GOLD + '" stroke-width="8"/><circle cx="200" cy="58" r="7" fill="#7a5a10"/>' +
      '<rect x="216" y="54" width="70" height="9" rx="2" fill="' + GOLD + '"/><rect x="262" y="63" width="8" height="12" fill="' + GOLD + '"/><rect x="276" y="63" width="8" height="16" fill="' + GOLD + '"/>' +
      '<path d="M190 48 l6 -4" stroke="#fff6c2" stroke-width="3" stroke-linecap="round"/></g>' +
      '<rect x="128" y="226" width="144" height="22" rx="3" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("STEFANIK PARK", 200, 241, 11, "#fff", 'letter-spacing="2"') +
      txt("KEY TO THE CITY · NEPPERHAN AV", 200, 22, 10, "#14321c", 'letter-spacing="2"'),
      sky("lxs4", "#8fd0f0", "#e3f3ff"));
  }

  /* 5. Warburton Av & Ashburton Av at dusk: the Hudson and the Palisades cliffs behind, the tag wall, green street signs */
  function lxcorner() {
    let cliff = '<path d="M0 70 L30 62 L70 66 L120 58 L170 64 L230 56 L290 62 L340 55 L400 60 V108 H0z" fill="#5d5450"/>';
    for (let x = 6; x < 400; x += 14) cliff += '<path d="M' + x + ' ' + (64 + (x % 5)) + ' V106" stroke="#463e3b" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lxs5)"/>' + stars(10) +
      cliff + '<rect x="0" y="104" width="400" height="34" fill="#2d4f73"/>' +
      '<g class="lx-wave"><path d="M0 116 q10 -4 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#9cc3e6" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      '<g class="lx-boat"><path d="M0 112 h34 l-6 8 h-24z" fill="#ddd"/><rect x="10" y="104" width="12" height="8" fill="#eee"/></g>' +
      txt("THE HUDSON · THE PALISADES", 200, 52, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#4a3f3a"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#3b322e" stroke-width="1"/>'; for (let y = 134; y < 226; y += 20) for (let x = (y % 40 ? 0 : 18); x < 400; x += 36) b += '<path d="M' + x + ' ' + y + 'v10" stroke="#3b322e" stroke-width="1"/>'; return b; })() +
      tag("THE LOX", 16, 198, 52, GOLD, -5) + tag("WARLOX", 214, 220, 20, GREEN, -4) + tag("LET THE LOX GO", 22, 222, 15, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="lx-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<g class="lx-car lx-car2"><rect x="0" y="240" width="40" height="11" rx="4" fill="#d8d8d8"/><circle cx="9" cy="251" r="3.5" fill="#111"/><circle cx="31" cy="251" r="3.5" fill="#111"/></g>' +
      '<rect x="356" y="66" width="5" height="162" fill="#3d4b3f"/>' +
      '<rect x="292" y="70" width="104" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Warburton Av", 344, 86, 12, "#fff") +
      '<rect x="292" y="96" width="104" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Ashburton Av", 344, 112, 12, "#fff") +
      '<circle class="lx-glow" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("lxs5", "#141a3a", "#d0785a"));
  }

  window.SCENES = { lxbus: lxbus, lxverzuz: lxverzuz, lxjam: lxjam, lxkey: lxkey, lxcorner: lxcorner };
})();
