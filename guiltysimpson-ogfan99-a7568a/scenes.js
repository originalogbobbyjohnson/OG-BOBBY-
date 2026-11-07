/* guiltysimpson scenes (Regions tab: Detroit; west side, W 7 Mile & Lahser). CSS classes and ids prefixed gs- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 7 (Seven Mile) pulling up to the Lahser & 7 Mile stop on the west side, the neighborhood he came up in.
   2 The Redford Theatre on Lahser Rd (down the street, Old Redford): the brick front, the red blade sign, the marquee bulbs chasing.
   3 The Spirit of Detroit on Woodward ("Detroit's Son"): the green bronze seated figure, gold sphere in one hand, the family in the other, the white marble wall. No faces.
   4 The Ambassador Bridge over the Detroit River at night ("I traveled the world... still come back"): the towers, lit cables, a truck rolling across.
   5 Lahser Rd and Pickford St: green signs, GUILTY SIMPSON tagged on the brick, the Penobscot Building downtown with its red beacon. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.gs-flk{animation:gsflick 2.2s infinite}.gs-flk2{animation-delay:.7s}' +
    '@keyframes gschase{0%,100%{opacity:.25}50%{opacity:1}}.gs-ch{animation:gschase .8s steps(1) infinite}.gs-ch2{animation-delay:.4s}' +
    '@keyframes gsglow{0%,100%{opacity:.35}50%{opacity:1}}.gs-gl{animation:gsglow 2s ease-in-out infinite}.gs-gl2{animation-delay:.6s}.gs-gl3{animation-delay:1.2s}' +
    '@keyframes gstruck{from{transform:translateX(-90px)}to{transform:translateX(500px)}}.gs-truck{animation:gstruck 9s linear infinite}' +
    '@keyframes gscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.gs-car{animation:gscar 7s linear infinite}' +
    '@keyframes gsrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.gs-rip{animation:gsrip 3s ease-in-out infinite}.gs-rip2{animation-delay:-1.5s}' +
    '@keyframes gsbird{0%{transform:translate(-30px,0)}100%{transform:translate(440px,-40px)}}.gs-bird{animation:gsbird 9s linear infinite}.gs-bird2{animation-delay:-4.5s}' +
    '@keyframes gsray{0%,100%{opacity:.4}50%{opacity:1}}.gs-ray{animation:gsray 1.6s ease-in-out infinite}' +
    '@keyframes gsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gs-sp{animation:gsspray 1.4s ease-out infinite}.gs-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#e8b04a", RED = "#d63a2f", PATINA = "#6fb3a0", DDOT = "#0b6e4f";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 47 + 9) % 400) + '" cy="' + ((i * 31) % 80 + 6) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");

  /* 1. DDOT Route 7 at Lahser & 7 Mile */
  function gsstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (80 + i * 40) + '" y="122" width="32" height="26" rx="3" fill="#1e2a26"/>').join("");
    const bus = '<g class="anim-train"><rect x="48" y="110" width="326" height="86" rx="10" fill="#f2f4f1" stroke="#98a0a6" stroke-width="2"/>' + win +
      '<rect x="48" y="156" width="326" height="13" fill="' + DDOT + '"/><rect x="48" y="171" width="326" height="3" fill="' + GOLD + '"/>' +
      '<rect x="52" y="120" width="22" height="54" rx="2" fill="#1e2a26"/>' +
      '<rect x="78" y="113" width="200" height="7" rx="2" fill="#111"/><text x="178" y="118.6" text-anchor="middle" ' + font + ' font-size="5.4" fill="#ffb347">7 SEVEN MILE · WEST</text>' +
      '<text x="330" y="188" text-anchor="middle" ' + font + ' font-size="11" fill="' + DDOT + '">DDOT</text>' +
      '<circle cx="112" cy="198" r="15" fill="#1b1b1b"/><circle cx="112" cy="198" r="6" fill="#9aa1a6"/><circle cx="318" cy="198" r="15" fill="#1b1b1b"/><circle cx="318" cy="198" r="6" fill="#9aa1a6"/>' +
      '<circle class="gs-flk" cx="368" cy="184" r="4" fill="#fff6c2"/></g>';
    const pole = '<rect x="22" y="70" width="4" height="146" fill="#666"/><rect x="4" y="62" width="40" height="40" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="24" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text><circle cx="24" cy="91" r="7" fill="#fff"/><text x="24" y="94.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + DDOT + '">7</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#gss1)"/>' + stars(14) +
      '<g fill="#3a2a24"><rect x="0" y="84" width="96" height="46"/><rect x="100" y="76" width="70" height="54"/><rect x="176" y="90" width="90" height="40"/><rect x="272" y="80" width="128" height="50"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="gs-gl' + (i % 3 ? " gs-gl2" : "") + '" x="' + (14 + i * 38) + '" y="' + (96 + (i % 2) * 12) + '" width="10" height="7" fill="' + GOLD + '" opacity=".6"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#3d4148"/><rect x="0" y="208" width="400" height="4" fill="#cfd3d8"/>' +
      bus + pole +
      '<rect x="92" y="20" width="216" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="35" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">LAHSER &amp; 7 MILE</text>' +
      '<rect x="130" y="40" width="22" height="11" rx="5.5" fill="' + DDOT + '"/><text x="141" y="48.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">7</text>' +
      '<text x="160" y="48.5" ' + font + ' font-size="8" fill="#cfd3d8">WEST SIDE · DETROIT</text>',
      sky("gss1", "#14100f", "#4a3328"));
  }

  /* 2. The Redford Theatre on Lahser Rd */
  function gsredford() {
    const blade = '<g><rect x="186" y="16" width="30" height="110" rx="3" fill="#2a1414" stroke="' + GOLD + '" stroke-width="2.5"/>' +
      "REDFORD".split("").map((ch, i) => '<text class="gs-ch' + (i % 2 ? " gs-ch2" : "") + '" x="201" y="' + (32 + i * 14.5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="' + RED + '">' + ch + '</text>').join("") + '</g>';
    const bulbs = Array.from({ length: 30 }, (_, i) => '<circle class="gs-ch' + (i % 2 ? " gs-ch2" : "") + '" cx="' + (96 + i * 7) + '" cy="132" r="2" fill="#fff3c4"/>').join("") +
      Array.from({ length: 30 }, (_, i) => '<circle class="gs-ch' + (i % 2 ? "" : " gs-ch2") + '" cx="' + (96 + i * 7) + '" cy="168" r="2" fill="#fff3c4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#gss2)"/>' + stars(18) +
      '<rect x="60" y="60" width="280" height="150" fill="#8a4a32"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M60 ' + (66 + i * 8) + 'h280" stroke="#743d28" stroke-width="1"/>').join("") +
      '<rect x="56" y="56" width="288" height="8" fill="#c9b79a"/>' +
      [80, 120, 270, 310].map(x => '<rect x="' + x + '" y="76" width="22" height="34" fill="#f2d79a" opacity=".55"/>').join("") +
      blade +
      '<rect x="92" y="128" width="216" height="44" fill="#f4efe2" stroke="#2a1414" stroke-width="2"/>' + bulbs +
      '<text x="200" y="149" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '">TONIGHT</text><text x="200" y="164" text-anchor="middle" ' + font + ' font-size="11" fill="#1b1b1b">DETROIT\'S SON</text>' +
      '<rect x="150" y="176" width="100" height="34" fill="#2a1a12"/><rect x="154" y="180" width="44" height="30" fill="#e8c27a" opacity=".55"/><rect x="202" y="180" width="44" height="30" fill="#e8c27a" opacity=".55"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#33363c"/><rect x="0" y="208" width="400" height="3" fill="#cfd3d8"/>' +
      '<g class="gs-car"><rect x="0" y="226" width="56" height="16" rx="5" fill="' + PATINA + '"/><rect x="10" y="217" width="32" height="11" rx="4" fill="' + PATINA + '"/><circle cx="12" cy="242" r="5" fill="#111"/><circle cx="44" cy="242" r="5" fill="#111"/><circle cx="54" cy="232" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="262" y="230" width="128" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="326" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">LAHSER RD</text>',
      sky("gss2", "#0d0f1e", "#3a2440"));
  }

  /* 3. The Spirit of Detroit */
  function gsspirit() {
    const rays = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path class="gs-ray" d="M' + (118 + Math.cos(a) * 14).toFixed(1) + ' ' + (92 + Math.sin(a) * 14).toFixed(1) + 'L' + (118 + Math.cos(a) * 24).toFixed(1) + ' ' + (92 + Math.sin(a) * 24).toFixed(1) + '" stroke="' + GOLD + '" stroke-width="2"/>'; }).join("");
    const figure = '<g fill="' + PATINA + '" stroke="#2e5a4e" stroke-width="2">' +
      '<path d="M170 196q-4-56 30-72q34 16 30 72z"/>' +                  /* seated body, robe */
      '<rect x="186" y="98" width="28" height="30" rx="12"/>' +            /* head, no face */
      '<path d="M174 140q-30-16-50-40" fill="none" stroke-width="12" stroke-linecap="round"/>' +   /* left arm up to sphere */
      '<path d="M226 140q30-10 48-28" fill="none" stroke-width="12" stroke-linecap="round"/>' +    /* right arm to family */
      '<path d="M150 196h100v16H150z"/></g>' +
      '<circle cx="118" cy="92" r="11" fill="' + GOLD + '" stroke="#8a6a1e" stroke-width="2"/>' + rays +
      '<g fill="' + PATINA + '" stroke="#2e5a4e" stroke-width="1.5"><circle cx="272" cy="76" r="5"/><path d="M266 104q0-20 6-22q6 2 6 22z"/><circle cx="285" cy="72" r="5.5"/><path d="M278 104q0-24 7-26q7 2 7 26z"/><circle cx="297" cy="86" r="4"/><path d="M292 104q0-12 5-14q5 2 5 14z"/><path d="M262 104h44v6h-44z"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gss3)"/>' +
      '<path d="M40 212V110q160-90 320 0v102z" fill="#ece8e0" stroke="#c9c2b4" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (70 + i * 44) + ' 212V' + (100 - Math.sin((i + 0.5) / 7 * Math.PI) * 30).toFixed(0) + '" stroke="#d8d2c4" stroke-width="1.5"/>').join("") +
      figure +
      '<rect x="0" y="212" width="400" height="48" fill="#8f8a80"/><rect x="0" y="210" width="400" height="4" fill="#d8d2c4"/>' +
      '<rect x="120" y="222" width="160" height="20" rx="3" fill="#1b1b1b"/><text x="200" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">SPIRIT OF DETROIT</text>' +
      '<g class="gs-bird"><path d="M0 40q6-6 12 0q6-6 12 0" fill="none" stroke="#333" stroke-width="2"/></g><g class="gs-bird gs-bird2"><path d="M0 60q5-5 10 0q5-5 10 0" fill="none" stroke="#333" stroke-width="2"/></g>',
      sky("gss3", "#7fb2d9", "#d8e6ef"));
  }

  /* 4. The Ambassador Bridge at night */
  function gsbridge() {
    const tower = x => '<rect x="' + (x - 7) + '" y="40" width="5" height="140" fill="#3f5a5a"/><rect x="' + (x + 2) + '" y="40" width="5" height="140" fill="#3f5a5a"/>' +
      [56, 90, 124].map(y => '<rect x="' + (x - 7) + '" y="' + y + '" width="14" height="4" fill="#3f5a5a"/>').join("") + '<circle class="gs-flk" cx="' + x + '" cy="36" r="2.5" fill="#ff4a4a"/>';
    const cable = 'M0 120Q60 140 120 42Q200 150 280 42Q340 140 400 120';
    const lights = Array.from({ length: 21 }, (_, i) => { const t = i / 20; const x = 120 + 160 * t; const y = 42 + (1 - Math.pow(2 * t - 1, 2)) * 54; return '<circle class="gs-gl gs-gl' + (1 + i % 3) + '" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="1.8" fill="#bff3e0"/>'; }).join("");
    const truck = '<g class="gs-truck"><rect x="0" y="160" width="40" height="18" fill="#eee"/><rect x="40" y="164" width="14" height="14" rx="2" fill="' + RED + '"/><circle cx="8" cy="180" r="3.5" fill="#111"/><circle cx="34" cy="180" r="3.5" fill="#111"/><circle cx="48" cy="180" r="3.5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gss4)"/>' + stars(26) +
      '<rect x="0" y="190" width="400" height="70" fill="#0d2233"/>' +
      '<g class="gs-rip"><path d="M10 206h60M120 220h80M260 210h70" stroke="#2f5a7a" stroke-width="2"/></g><g class="gs-rip gs-rip2"><path d="M40 236h70M190 244h60M300 232h80" stroke="#2f5a7a" stroke-width="2"/></g>' +
      '<path d="' + cable + '" fill="none" stroke="#5f8c86" stroke-width="2.5"/>' + Array.from({ length: 15 }, (_, i) => { const x = 130 + i * 10; const t = (x - 120) / 160; const y = 42 + (1 - Math.pow(2 * t - 1, 2)) * 54; return '<path d="M' + x + ' ' + y.toFixed(1) + 'V176" stroke="#5f8c86" stroke-width=".8"/>'; }).join("") +
      tower(120) + tower(280) + lights +
      '<rect x="0" y="176" width="400" height="8" fill="#2f4545"/><rect x="0" y="184" width="400" height="3" fill="#1d2b2b"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (20 + i * 46) + '" y="184" width="6" height="30" fill="#2f4545"/>').join("") +
      truck +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#bfe0ea" letter-spacing="2">AMBASSADOR BRIDGE · DETROIT RIVER</text>',
      sky("gss4", "#071022", "#1f3550"));
  }

  /* 5. Lahser Rd and Pickford St, the Penobscot Building downtown */
  function gscorner() {
    const peno = '<g fill="#cfc4ae"><rect x="176" y="70" width="58" height="64"/><rect x="184" y="50" width="42" height="22"/><rect x="192" y="34" width="26" height="18"/><rect x="198" y="22" width="14" height="14"/><rect x="203" y="14" width="4" height="10"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (182 + i * 9) + ' 74v58" stroke="#b3a68c" stroke-width="1.2"/>').join("") +
      '<circle class="gs-flk" cx="205" cy="11" r="5" fill="#ff3b3b"/><circle cx="205" cy="11" r="9" fill="#ff3b3b" opacity=".25"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gss5)"/>' + stars(16) +
      '<g fill="#2a2d3a"><rect x="96" y="96" width="42" height="38"/><rect x="142" y="82" width="30" height="52"/><rect x="240" y="78" width="34" height="56"/><rect x="278" y="98" width="46" height="36"/></g>' + peno +
      '<rect x="0" y="126" width="400" height="98" fill="#7a4030"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653425" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653425" stroke-width="1"/>').join("")).join("") +
      tag("GUILTY", 14, 178, 44, GOLD, -6) + tag("SIMPSON", 60, 212, 30, RED, -4) + tag("DREADNAUGHTZ", 196, 214, 14, PATINA, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 120, "Lahser Rd") + sign(270, 124, 120, "Pickford St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="gs-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="gs-sp"><circle cx="240" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="gs-sp gs-sp2"><circle cx="246" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("gss5", "#0e0f1c", "#b5583a"));
  }

  window.SCENES = { gsstation: gsstation, gsredford: gsredford, gsspirit: gsspirit, gsbridge: gsbridge, gscorner: gscorner };
})();
