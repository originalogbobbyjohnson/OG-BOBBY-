/* Illmind producer game: Bloomfield, NJ (born in Newark). NJ Transit Bloomfield station, the Philly beat battle, the basement lab, Washington Square Arch, the Bloomfield corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const PURP = "#8e5bd8", GOLD = "#f2c14e", TEAL = "#2bc0c8";

  /* 1. Bloomfield station on NJ Transit's Montclair-Boonton Line: the silver train with orange, magenta and blue stripes pulling in at dusk */
  function station() {
    let win = ""; for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="104" width="24" height="18" rx="2" fill="#dfeaf5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#i1)"/>' + stars(8) +
      '<rect x="0" y="70" width="400" height="20" fill="#3a3e4a"/>' +
      [30, 120, 210, 300].map(x => '<rect x="' + x + '" y="40" width="6" height="56" fill="#55596a"/>').join("") + '<rect x="0" y="36" width="400" height="8" fill="#55596a"/>' +
      '<rect x="230" y="50" width="150" height="24" rx="3" fill="#1b2a5a"/><text x="305" y="67" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Bloomfield</text>' +
      '<g class="anim-train">' +
        '<rect x="10" y="92" width="310" height="62" rx="6" fill="#c9ced6" stroke="#7a8088" stroke-width="2"/>' + win +
        '<rect x="10" y="128" width="310" height="5" fill="#f26722"/><rect x="10" y="134" width="310" height="5" fill="#c4007a"/><rect x="10" y="140" width="310" height="5" fill="#1a5aa8"/>' +
        '<circle cx="312" cy="146" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="156" width="400" height="10" fill="#eab308"/><rect x="0" y="166" width="400" height="30" fill="#8a8c90"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a2c32"/>' +
      tag("!LLMIND", 30, 242, 40, PURP, -5) + tag("BLAPS", 240, 238, 26, GOLD, -6),
      sky("i1", "#1a1440", "#d0705a"));
  }

  /* 2. The Philly beat battle, 2008: the stage lights sweeping, the sampler on the table, the crowd's hands up */
  function battle() {
    let crowd = ""; for (let i = 0; i < 12; i++) crowd += '<g class="bob' + (i % 2 ? " bo2" : "") + '" style="animation-delay:-' + (i % 4) * .3 + 's"><circle cx="' + (18 + i * 33) + '" cy="214" r="10" fill="#14121c"/><rect x="' + (8 + i * 33) + '" y="222" width="20" height="40" rx="6" fill="#14121c"/>' + (i % 3 ? '' : '<path d="M' + (24 + i * 33) + ' 222l8-24" stroke="#14121c" stroke-width="5" stroke-linecap="round"/>') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#0c0a14"/>' +
      '<g class="flk"><path d="M60 0l60 170h-90z" fill="' + PURP + '" opacity=".25"/></g><g class="flk flk2"><path d="M340 0l30 170h-90z" fill="' + TEAL + '" opacity=".22"/></g>' +
      '<rect x="40" y="30" width="320" height="34" rx="4" fill="#1a1626" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="53" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" letter-spacing="4" fill="' + GOLD + '">PHILLY BEAT BATTLE</text>' +
      '<rect x="0" y="150" width="400" height="10" fill="#3a2a22"/><rect x="110" y="112" width="180" height="40" fill="#2a2a32"/>' +
      '<rect x="128" y="100" width="70" height="14" rx="2" fill="#8c9096"/>' + pads(208, 96, PURP, TEAL).replace(/width="17" height="13"/g, 'width="12" height="7"').replace(/y="(\d+)"/g, (m, y) => 'y="' + y + '"') +
      '<g class="th"><rect x="20" y="96" width="44" height="56" fill="#222"/><circle cx="42" cy="124" r="14" fill="#444"/><circle cx="42" cy="124" r="6" fill="#111"/></g>' +
      '<g class="th"><rect x="336" y="96" width="44" height="56" fill="#222"/><circle cx="358" cy="124" r="14" fill="#444"/><circle cx="358" cy="124" r="6" fill="#111"/></g>' +
      crowd);
  }

  /* 3. The basement lab: drum kit boxes on the shelf, the keyboard, the sampler, the arrange window scrolling */
  function lab() {
    let arr = ""; for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) if ((r + c) % 3) arr += '<rect x="' + (154 + c * 28) + '" y="' + (46 + r * 14) + '" width="24" height="10" rx="2" fill="' + [PURP, TEAL, GOLD][r % 3] + '"/>';
    let boxes = ""; for (let i = 0; i < 5; i++) boxes += '<rect x="' + (24 + i * 22) + '" y="54" width="18" height="34" fill="' + ["#1a1626", "#2a2236", "#1a1626", "#3a2a4a", "#1a1626"][i] + '" stroke="' + GOLD + '" stroke-width="1"/><text x="' + (33 + i * 22) + '" y="80" text-anchor="middle" transform="rotate(-90 ' + (33 + i * 22) + ' 76)" ' + font + ' font-size="7" fill="' + GOLD + '">KIT</text>';
    return svg(
      '<rect width="400" height="260" fill="#1b1922"/>' + brick(0, 0, 400, 130, "#4a3a3a", "#3a2c2c") +
      '<rect x="18" y="88" width="120" height="6" fill="#6e4c34"/>' + boxes +
      '<rect x="146" y="36" width="190" height="84" rx="4" fill="#0e0d16" stroke="#555" stroke-width="3"/><g class="bob">' + arr + '</g>' +
      '<rect class="bl" x="230" y="38" width="2" height="80" fill="#fff"/>' +
      '<rect x="0" y="130" width="400" height="130" fill="#3a2c24"/><rect x="0" y="130" width="400" height="6" fill="#4a382e"/>' +
      '<rect x="40" y="150" width="230" height="46" rx="4" fill="#2a2a2e" stroke="' + PURP + '" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (48 + i * 11) + '" y="164" width="10" height="28" fill="#f4f4f0"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 18].map(i => '<rect x="' + (55 + i * 11) + '" y="164" width="5" height="17" fill="#111"/>').join("") +
      '<rect x="290" y="150" width="90" height="70" rx="5" fill="#8c9096" stroke="#4a4d52" stroke-width="2"/>' + pads(296, 176, PURP, TEAL).replace(/width="17" height="13"/g, 'width="15" height="12"').replace(/x="(\d+)"/g, (m, x) => 'x="' + (296 + (x - 296) * .95) + '"') +
      '<rect x="298" y="156" width="40" height="12" fill="#1f3a26"/>' +
      '<g class="mt"><rect x="352" y="62" width="8" height="40" fill="' + TEAL + '"/></g><g class="mt mt2"><rect x="364" y="62" width="8" height="40" fill="' + GOLD + '"/></g>');
  }

  /* 4. Washington Square Arch at NYU, where he taught young producers: white marble arch, the fountain spraying, pigeons */
  function arch() {
    let spray = '<style>@keyframes sp{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.sp{transform-box:fill-box;transform-origin:50% 100%;animation:sp 1.4s ease-in-out infinite}</style>';
    return svg(
      '<rect width="400" height="260" fill="url(#i4)"/>' +
      '<rect x="0" y="60" width="60" height="140" fill="#7a5a4a"/><rect x="340" y="50" width="60" height="150" fill="#6a4e44"/>' +
      '<path d="M120 200v-120h160v120h-36v-70a44 44 0 0 0 -88 0v70z" fill="#f2efe6" stroke="#cfc8b8" stroke-width="2"/>' +
      '<rect x="112" y="62" width="176" height="22" fill="#e8e4da" stroke="#cfc8b8" stroke-width="2"/><rect x="118" y="84" width="164" height="6" fill="#d8d2c4"/>' +
      '<path d="M130 100h14v100h-14zM256 100h14v100h-14z" fill="#e2ddd0"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#a8a49a"/>' +
      '<ellipse cx="200" cy="236" rx="90" ry="14" fill="#5f8fa8" stroke="#d8d2c4" stroke-width="4"/>' + spray +
      '<g class="sp"><path d="M200 236q-6-40 0-60q6 20 0 60M180 236q-14-24-6-40M220 236q14-24 6-40" stroke="#e9f4ff" stroke-width="3" fill="none" opacity=".8"/></g>' +
      '<g class="bob"><path d="M60 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="bob bo2"><path d="M300 30q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("i4", "#8cc4e8", "#e8d8c0"));
  }

  /* 5. The corner in Bloomfield: Bloomfield Ave and Broad St, ILLMIND tagged, the white steeple on the Green behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#i5)"/>' + stars(8) +
      '<rect x="150" y="96" width="70" height="54" fill="#f2efe6"/><path d="M146 98l39-26 39 26z" fill="#e6e1d4"/>' +
      '<rect x="173" y="40" width="24" height="40" fill="#f2efe6"/><path d="M170 42l15-36 15 36z" fill="#f2efe6"/><rect class="bl" x="180" y="52" width="10" height="12" rx="5" fill="#ffe7a0"/>' +
      '<rect x="160" y="110" width="12" height="22" rx="6" fill="#ffe7a0"/><rect x="198" y="110" width="12" height="22" rx="6" fill="#ffe7a0"/>' +
      '<circle cx="80" cy="120" r="34" fill="#22402e"/><circle cx="270" cy="124" r="30" fill="#22402e"/>' +
      brick(0, 150, 400, 74, "#8a5a44", "#6e4636") +
      tag("!LLMIND", 22, 204, 46, PURP, -5) + tag("BLAP", 250, 214, 26, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="236" width="36" height="12" rx="3" fill="' + TEAL + '"/></g>' +
      '<rect x="340" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(262, 44, 132, "Bloomfield Av") + sign(290, 70, 96, "Broad St"),
      sky("i5", "#141438", "#a85a6a"));
  }

  window.SCENES = { station: station, battle: battle, lab: lab, arch: arch, corner: corner };
})();
