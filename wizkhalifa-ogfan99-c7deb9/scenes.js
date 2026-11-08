/* wizkhalifa scenes (Regions tab: Philadelphia region; Pittsburgh - Hill District, Taylor Allderdice). CSS classes and ids prefixed wk- (the page's own anim-train is kept).
   1 North Side station on the T (Pittsburgh Regional Transit light rail), underground under the North Shore by the ballparks: black sign with the Red, Blue and Silver line badges, a silver LRV sliding in.
   2 Taylor Allderdice High School on Shady Ave (Squirrel Hill), the school his Taylor Gang is named after: tan-brick Collegiate Gothic front, the stone entrance tower, the flag waving.
   3 "Black and Yellow": the Aztec-gold Three Sisters bridges over the Allegheny, the skyline behind, a black car with a yellow stripe rolling across.
   4 The Duquesne Incline up Mount Washington: the two wooden incline cars on the slope, the Point and its fountain where the rivers meet, the lights of downtown.
   5 Centre Ave and Crawford St in the Hill District (Freedom Corner): green signs, WIZ tagged on the brick, PPG Place's black-glass spires downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.wk-flk{animation:wkflick 2.3s infinite}.wk-flk2{animation-delay:.8s}' +
    '@keyframes wkflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.9)}}.wk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:wkflag 1.6s ease-in-out infinite}' +
    '@keyframes wkcar{from{transform:translateX(-150px)}to{transform:translateX(520px)}}.wk-car{animation:wkcar 6s linear infinite;animation-delay:-2.4s}' +
    '@keyframes wkcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.wk-carL{animation:wkcarL 8s linear infinite;animation-delay:-3s}' +
    '@keyframes wkrip{0%,100%{transform:translateX(0)}50%{transform:translateX(9px)}}.wk-rip{animation:wkrip 3s ease-in-out infinite}.wk-rip2{animation-delay:-1.5s}' +
    '@keyframes wkup{0%,100%{transform:translate(0,0)}50%{transform:translate(-62px,-74px)}}.wk-up{animation:wkup 9s ease-in-out infinite}' +
    '@keyframes wkdown{0%,100%{transform:translate(-62px,-74px)}50%{transform:translate(0,0)}}.wk-down{animation:wkdown 9s ease-in-out infinite}' +
    '@keyframes wkspout{0%,100%{transform:scaleY(.75)}50%{transform:scaleY(1.1)}}.wk-spout{transform-box:fill-box;transform-origin:50% 100%;animation:wkspout 1.8s ease-in-out infinite}' +
    '@keyframes wkglow{0%,100%{opacity:.45}50%{opacity:1}}.wk-glow{animation:wkglow 2.2s ease-in-out infinite}.wk-g2{animation-delay:-1.1s}' +
    '@keyframes wkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wk-sp{animation:wkspray 1.4s ease-out infinite}.wk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, ink) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + (ink || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "wk-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffb612", BLACK = "#101010", RED = "#d7262e", BLUE = "#0a6cb4", SILVER = "#a3a8ae", BRIDGE = "#f2b51b";

  /* 1. North Side station: underground island platform, concrete and gold tile band, black sign with RED / BLUE / SILVER line badges, a silver LRV sliding in */
  function wkstation() {
    const tr = '<g class="anim-train"><rect x="20" y="102" width="320" height="80" rx="10" fill="#d8dce0" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="114" width="32" height="30" rx="3" fill="#1b232b"/>').join("") +
      '<rect x="20" y="152" width="320" height="7" fill="' + RED + '"/><rect x="20" y="161" width="320" height="3" fill="' + BLUE + '"/>' +
      '<rect x="318" y="106" width="22" height="72" rx="6" fill="#b9bec4"/><rect x="322" y="114" width="14" height="22" rx="2" fill="#1b232b"/><circle cx="330" cy="170" r="3.5" fill="#fff6c2"/>' +
      '<rect x="150" y="96" width="60" height="6" fill="#6b7178"/><path d="M160 96l20 -18l20 18" stroke="#3a3e46" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#cfcabd"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="16" width="19" height="52" fill="' + (i % 2 ? "#c4bfb1" : "#d6d1c4") + '"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2b2d31"/>' + [40, 170, 300].map((x, i) => '<rect class="wk-flk' + (i === 1 ? " wk-flk2" : "") + '" x="' + x + '" y="6" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="68" width="400" height="10" fill="' + GOLD + '"/><rect x="0" y="78" width="400" height="4" fill="' + BLACK + '"/><rect x="0" y="82" width="400" height="108" fill="#23252a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8d8a84"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 197l-30 63" stroke="#7d7a74" stroke-width="1"/>').join("") +
      [24, 376].map(x => '<rect x="' + (x - 8) + '" y="16" width="16" height="174" fill="#9a958a"/>').join("") +
      '<rect x="50" y="22" width="300" height="40" rx="3" fill="#111"/><text x="64" y="47" ' + font + ' font-size="17" fill="#fff">North Side</text>' +
      badge(170, 41, "RED", RED) + badge(220, 41, "BLUE", BLUE) + badge(278, 41, "SILVER", SILVER, "#111") +
      '<rect x="140" y="212" width="120" height="6" rx="3" fill="#fff6c2" opacity=".45" class="wk-flk"/>',
      "");
  }

  /* 2. Taylor Allderdice High School: tan brick, limestone trim, the central entrance tower with pointed arches, the flag waving on the pole */
  function wkschool() {
    const brick = "#c49a6c", stone = "#e8dcc4";
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="16" height="24" fill="#2c3a4a" stroke="' + stone + '" stroke-width="2"/><path d="M' + (x + 8) + ' ' + y + 'v24M' + x + ' ' + (y + 12) + 'h16" stroke="' + stone + '" stroke-width="1.2"/>';
    let wins = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 6; c++) { wins += win(20 + c * 24, 104 + r * 38) + win(244 + c * 24, 104 + r * 38); }
    return svg(
      '<rect width="400" height="260" fill="url(#wk2)"/>' +
      '<g fill="#5d8a4a"><circle cx="20" cy="110" r="26"/><circle cx="384" cy="106" r="28"/></g>' +
      '<rect x="10" y="92" width="380" height="102" fill="' + brick + '"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M10 ' + (100 + i * 8) + 'h380" stroke="#b08860" stroke-width=".8"/>').join("") +
      '<rect x="10" y="88" width="380" height="6" fill="' + stone + '"/>' + wins +
      /* central tower */
      '<rect x="160" y="40" width="80" height="154" fill="' + brick + '"/><rect x="156" y="34" width="88" height="8" fill="' + stone + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (156 + i * 16) + '" y="24" width="9" height="11" fill="' + stone + '"/>').join("") +
      '<path d="M182 92v-26q18 -22 36 0v26z" fill="#2c3a4a" stroke="' + stone + '" stroke-width="3"/><path d="M200 66v26" stroke="' + stone + '" stroke-width="2"/>' +
      '<rect x="164" y="104" width="72" height="12" fill="' + stone + '"/><text x="200" y="113.5" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="8" fill="#5a4630" letter-spacing="1">ALLDERDICE</text>' +
      '<path d="M176 194v-50q24 -30 48 0v50z" fill="' + stone + '"/><path d="M184 194v-44q16 -20 32 0v44z" fill="#3a2a22"/><path d="M200 152v42" stroke="#22180f" stroke-width="2"/>' +
      '<rect x="0" y="194" width="400" height="12" fill="#bdb6a8"/><rect x="0" y="206" width="400" height="54" fill="#6f9a52"/><rect x="170" y="206" width="60" height="54" fill="#cfc8b8"/>' +
      '<path d="M300 210v-110" stroke="#c9ced6" stroke-width="3"/><circle cx="300" cy="99" r="3" fill="#e8c860"/>' +
      '<g class="wk-flag"><rect x="301" y="104" width="44" height="26" fill="#fff"/>' + [0, 1, 2, 3].map(i => '<rect x="301" y="' + (104 + i * 6.5) + '" width="44" height="3.2" fill="#b22234"/>').join("") + '<rect x="301" y="104" width="18" height="13" fill="#3c3b6e"/></g>',
      sky("wk2", "#7fb8e6", "#e6f0f6"));
  }

  /* 3. Black and Yellow: the three self-anchored suspension bridges painted Aztec gold over the Allegheny, downtown behind, a black car with a yellow stripe crossing */
  function wkbridges() {
    const bridge = (x, w) => { const t1 = x + w * 0.25, t2 = x + w * 0.75, top = 100, deck = 150;
      const cab = 'M' + x + ' ' + (deck - 4) + 'Q' + (x + w * 0.14) + ' ' + (deck - 14) + ' ' + t1 + ' ' + top + 'Q' + (x + w / 2) + ' ' + (deck + 30) + ' ' + t2 + ' ' + top + 'Q' + (x + w * 0.86) + ' ' + (deck - 14) + ' ' + (x + w) + ' ' + (deck - 4);
      let hang = ""; for (let i = 1; i < 12; i++) { const px = t1 + (t2 - t1) * i / 12, u = i / 12, cy = (1 - u) * (1 - u) * top + 2 * u * (1 - u) * (deck + 30) + u * u * top; hang += '<path d="M' + px + ' ' + cy.toFixed(1) + 'V' + deck + '" stroke="' + BRIDGE + '" stroke-width="1.3"/>'; }
      return '<g><path d="' + cab + '" stroke="' + BRIDGE + '" stroke-width="3.5" fill="none"/>' + hang +
        '<rect x="' + (t1 - 3.5) + '" y="' + (top - 4) + '" width="7" height="' + (deck - top + 14) + '" fill="' + BRIDGE + '"/><rect x="' + (t2 - 3.5) + '" y="' + (top - 4) + '" width="7" height="' + (deck - top + 14) + '" fill="' + BRIDGE + '"/>' +
        '<rect x="' + (x - 4) + '" y="' + deck + '" width="' + (w + 8) + '" height="8" fill="' + BRIDGE + '"/><rect x="' + (x - 4) + '" y="' + (deck + 8) + '" width="' + (w + 8) + '" height="3" fill="#b8860b"/></g>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#wk3)"/>' +
      '<g fill="#3a4250"><rect x="40" y="70" width="26" height="80"/><rect x="70" y="50" width="22" height="100"/><rect x="96" y="80" width="30" height="70"/><rect x="132" y="40" width="20" height="110"/>' +
      '<rect x="156" y="62" width="34" height="88"/><rect x="196" y="30" width="26" height="120"/><rect x="226" y="74" width="30" height="76"/><rect x="262" y="56" width="22" height="94"/><rect x="290" y="84" width="40" height="66"/><rect x="336" y="66" width="24" height="84"/></g>' +
      '<g fill="#5a6474">' + [[44, 80], [74, 62], [136, 52], [200, 44], [266, 66]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="4" height="4"/><rect x="' + (x + 8) + '" y="' + (y + 10) + '" width="4" height="4"/>').join("") + '</g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2f5d7c"/>' +
      '<g class="wk-rip"><path d="M20 190h60M140 210h80M280 194h70" stroke="#8fb8d4" stroke-width="2" opacity=".6"/></g><g class="wk-rip wk-rip2"><path d="M60 236h70M210 228h60M320 244h50" stroke="#8fb8d4" stroke-width="2" opacity=".5"/></g>' +
      bridge(-30, 150) + bridge(130, 140) + bridge(280, 150) +
      '<g class="wk-car"><g transform="translate(0 132)"><rect x="0" y="0" width="56" height="14" rx="5" fill="' + BLACK + '"/><path d="M10 0l8 -9h20l8 9z" fill="' + BLACK + '"/><rect x="0" y="6" width="56" height="3" fill="' + GOLD + '"/>' +
      '<circle cx="13" cy="15" r="4.5" fill="#333" stroke="' + GOLD + '" stroke-width="1.5"/><circle cx="44" cy="15" r="4.5" fill="#333" stroke="' + GOLD + '" stroke-width="1.5"/><circle cx="55" cy="5" r="2" fill="#fff6c2"/></g></g>',
      sky("wk3", "#f7b267", "#fde3b0"));
  }

  /* 4. The Duquesne Incline on Mount Washington at night: green slope, the track, two red-and-cream wooden cars passing, the Point fountain and the lit skyline across the river */
  function wkincline() {
    return svg(
      '<rect width="400" height="260" fill="url(#wk4)"/>' + stars(16) +
      '<g fill="#2a3346"><rect x="150" y="96" width="24" height="70"/><rect x="178" y="80" width="20" height="86"/><rect x="202" y="104" width="30" height="62"/><rect x="236" y="70" width="18" height="96"/><rect x="258" y="92" width="34" height="74"/><rect x="296" y="110" width="28" height="56"/></g>' +
      '<g fill="#ffd98a">' + [[154, 104], [182, 90], [206, 114], [240, 80], [262, 100], [300, 120], [184, 120], [244, 110], [270, 130]].map(([x, y], i) => '<rect class="' + (i % 3 ? "" : "wk-glow") + '" x="' + x + '" y="' + y + '" width="4" height="4"/>').join("") + '</g>' +
      '<rect x="120" y="166" width="280" height="40" fill="#22476a"/><path d="M120 166h280" stroke="#4d7aa0" stroke-width="1"/>' +
      '<path d="M140 166q20 -10 40 0" fill="#3d6a3a"/><rect class="wk-spout" x="176" y="128" width="6" height="38" rx="3" fill="#cfe8ff" opacity=".85"/><ellipse cx="179" cy="166" rx="14" ry="3" fill="#cfe8ff" opacity=".6"/>' +
      '<path d="M0 60L140 260H0z" fill="#2d4a2e"/><path d="M0 80L120 260" stroke="#1d2a20" stroke-width="14"/><path d="M-4 80L116 260M6 78L126 258" stroke="#8a8f96" stroke-width="2"/>' +
      '<rect x="0" y="40" width="64" height="40" fill="#7a3a2a"/><path d="M-2 40l34 -16l34 16z" fill="#4a2a20"/><rect x="10" y="52" width="14" height="14" fill="#ffd98a" class="wk-glow"/><rect x="36" y="52" width="14" height="14" fill="#ffd98a"/>' +
      '<g class="wk-up"><g transform="translate(96 210) rotate(56)"><rect x="-20" y="-14" width="40" height="28" rx="3" fill="#b5332e" stroke="#f2e2c0" stroke-width="2"/><rect x="-14" y="-8" width="10" height="10" fill="#ffd98a"/><rect x="2" y="-8" width="10" height="10" fill="#ffd98a"/></g></g>' +
      '<g class="wk-down"><g transform="translate(108 220) rotate(56)"><rect x="-20" y="-14" width="40" height="28" rx="3" fill="#c9a24a" stroke="#f2e2c0" stroke-width="2"/><rect x="-14" y="-8" width="10" height="10" fill="#ffd98a"/><rect x="2" y="-8" width="10" height="10" fill="#ffd98a"/></g></g>',
      sky("wk4", "#0d1530", "#3a3a6a"));
  }

  /* 5. Centre Ave and Crawford St, the Hill District: green signs, WIZ tagged big on the brick, TAYLOR GANG under it, PPG Place's black-glass Gothic spires downtown behind */
  function wkcorner() {
    const spire = (x, w, h) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="#1b2230"/>' +
      Array.from({ length: Math.floor(w / 6) }, (_, i) => '<path d="M' + (x + 3 + i * 6) + ' ' + (150 - h) + 'l3 -10l3 10" fill="#1b2230"/>').join("") +
      Array.from({ length: Math.floor(w / 6) }, (_, i) => '<path d="M' + (x + 3 + i * 6) + ' ' + (150 - h + 4) + 'v' + (h - 6) + '" stroke="#3a4a66" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wk5)"/>' + stars(12) +
      spire(140, 48, 112) + '<path d="M164 26v-14" stroke="#1b2230" stroke-width="3"/>' + spire(196, 30, 70) + spire(108, 26, 60) + spire(232, 26, 56) +
      '<path class="wk-glow" d="M150 60h28" stroke="#ffd98a" stroke-width="1.5" opacity=".7"/>' +
      '<g fill="#22263a"><rect x="0" y="96" width="90" height="54"/><rect x="268" y="90" width="60" height="60"/><rect x="334" y="104" width="66" height="46"/></g>' +
      '<rect x="0" y="136" width="400" height="88" fill="#7a3f2e"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#6a3426" stroke-width="1"/>').join("") +
      tag("WIZ", 24, 200, 66, GOLD, -6) + tag("TAYLOR GANG", 150, 184, 26, "#fff", -4) + tag("YOU KNOW WHAT IT IS", 26, 219, 12, GOLD, -3) + tag("BLACK &amp; YELLOW", 196, 210, 15, "#f2f2f2", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#57544e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 92, "Centre Ave") + sign(292, 124, 100, "Crawford St") +
      '<g class="wk-sp"><circle cx="134" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="wk-sp wk-sp2"><circle cx="140" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("wk5", "#121a36", "#d07a3a"));
  }

  window.SCENES = { wkstation: wkstation, wkschool: wkschool, wkbridges: wkbridges, wkincline: wkincline, wkcorner: wkcorner };
})();
