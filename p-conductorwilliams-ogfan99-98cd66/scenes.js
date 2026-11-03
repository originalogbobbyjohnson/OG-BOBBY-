/* Conductor Williams producer game: Kansas City, MO. The streetcar at Union Station, Union Station's big arches, 18th & Vine jazz, the soul loop lab with the toy train, the corner with the Liberty Memorial. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.3}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.nt{animation:note 3s linear infinite}.nt2{animation-delay:-1s}.nt3{animation-delay:-2s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes loop{from{offset-distance:0%}to{offset-distance:100%}}' +
    '@keyframes toy{from{transform:translateX(-70px)}to{transform:translateX(420px)}}.toy{animation:toy 6s linear infinite}' +
    '@keyframes steam{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(14px,-40px) scale(1.8);opacity:0}}.st{transform-box:fill-box;transform-origin:50% 50%;animation:steam 3s linear infinite}.st2{animation-delay:-1s}.st3{animation-delay:-2s}' +
    '@keyframes wave{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}.wv{transform-box:fill-box;transform-origin:50% 100%;animation:wave 1s ease-in-out infinite}.w2{animation-delay:.2s}.w3{animation-delay:.4s}.w4{animation-delay:.6s}.w5{animation-delay:.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const AMBER = "#f0b84a", BLUE = "#4fa3d9", NAVY = "#123a6b", RED = "#e5533d", LIME = "#e8dcc0", LIME2 = "#c9b994";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* Liberty Memorial: tall pale limestone shaft, glowing top with steam */
  const memorial = (x, base, s) =>
    '<rect x="' + (x - 40 * s) + '" y="' + (base - 16 * s) + '" width="' + (80 * s) + '" height="' + (16 * s) + '" fill="' + LIME2 + '"/>' +
    '<path d="M' + (x - 9 * s) + ' ' + (base - 16 * s) + 'L' + (x - 7 * s) + ' ' + (base - 150 * s) + 'h' + (14 * s) + 'L' + (x + 9 * s) + ' ' + (base - 16 * s) + 'z" fill="' + LIME + '"/>' +
    '<rect x="' + (x - 9 * s) + '" y="' + (base - 162 * s) + '" width="' + (18 * s) + '" height="' + (12 * s) + '" fill="' + LIME2 + '"/>' +
    '<circle class="flk" cx="' + x + '" cy="' + (base - 166 * s) + '" r="' + (6 * s) + '" fill="' + AMBER + '"/>' +
    '<circle class="st" cx="' + x + '" cy="' + (base - 172 * s) + '" r="' + (5 * s) + '" fill="' + RED + '" opacity=".6"/><circle class="st st2" cx="' + x + '" cy="' + (base - 172 * s) + '" r="' + (5 * s) + '" fill="' + AMBER + '" opacity=".6"/><circle class="st st3" cx="' + x + '" cy="' + (base - 172 * s) + '" r="' + (5 * s) + '" fill="#fff" opacity=".5"/>';
  const skyline = (y, fill) => '<g fill="' + fill + '"><rect x="0" y="' + (y - 24) + '" width="40" height="60"/><rect x="46" y="' + (y - 50) + '" width="24" height="86"/><rect x="76" y="' + (y - 34) + '" width="30" height="70"/>' +
    '<rect x="250" y="' + (y - 44) + '" width="26" height="80"/><rect x="282" y="' + (y - 70) + '" width="22" height="106"/><path d="M282 ' + (y - 70) + 'l11-14 11 14z"/><rect x="310" y="' + (y - 30) + '" width="34" height="66"/><rect x="350" y="' + (y - 52) + '" width="24" height="88"/><rect x="378" y="' + (y - 20) + '" width="22" height="56"/></g>';

  /* 1. The KC Streetcar pulling into the Union Station stop */
  function streetcar() {
    let windows = "";
    for (let x = 26; x < 280; x += 38) windows += '<rect x="' + x + '" y="134" width="26" height="20" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(12) +
      skyline(130, "#1d2a44") +
      '<path d="M0 104h400" stroke="#6b7280" stroke-width="1.5"/>' +
      '<rect x="40" y="26" width="6" height="96" fill="#3d4450"/><rect x="354" y="26" width="6" height="96" fill="#3d4450"/>' +
      '<rect x="62" y="30" width="276" height="40" rx="4" fill="#111"/><rect x="62" y="30" width="276" height="4" fill="' + BLUE + '"/>' +
      '<text x="200" y="56" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Union Station</text>' +
      '<text x="200" y="66" text-anchor="middle" ' + font + ' font-size="7" fill="' + BLUE + '" letter-spacing="2">STREETCAR · MAIN ST</text>' +
      '<g class="anim-train">' +
        '<path d="M150 104l10 18M170 104l-10 18" stroke="#555" stroke-width="2"/>' +
        '<rect x="8" y="122" width="306" height="58" rx="12" fill="#f4f6f8" stroke="#8a95a3" stroke-width="2"/>' +
        '<rect x="8" y="160" width="306" height="8" fill="' + NAVY + '"/><rect x="8" y="168" width="306" height="3" fill="' + BLUE + '"/>' + windows +
        '<rect x="290" y="130" width="18" height="28" rx="3" fill="#24324a"/><circle cx="306" cy="174" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#8a8d93"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#3a3f48"/><path d="M0 214h400M0 222h400" stroke="#9aa3ad" stroke-width="2"/>' +
      tag("ALL ABOARD", 30, 248, 26, AMBER, -4) + tag("KCMO", 290, 250, 28, "#fff", -7),
      sky("s1", "#0b1226", "#3a4a72"));
  }

  /* 2. Union Station: pale limestone Beaux-Arts front with three giant arched windows glowing at night */
  function unionstation() {
    let cols = "";
    for (let i = 0; i < 8; i++) cols += '<rect x="' + (114 + i * 24) + '" y="78" width="6" height="104" fill="' + LIME2 + '"/>';
    const arch = x => '<path d="M' + x + ' 182v-70a26 26 0 0 1 52 0v70z" fill="#ffd98a"/><path d="M' + (x + 26) + ' 86v96M' + x + ' 140h52M' + x + ' 112h52M' + x + ' 162h52" stroke="#a3824a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(14) +
      memorial(330, 120, 0.6) +
      '<rect x="20" y="96" width="80" height="90" fill="' + LIME + '"/><rect x="300" y="96" width="80" height="90" fill="' + LIME + '"/>' +
      (() => { let w = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) w += '<rect x="' + (28 + c * 18) + '" y="' + (106 + r * 24) + '" width="9" height="14" fill="' + ((r + c) % 2 ? "#ffd98a" : "#6b5a40") + '"/><rect x="' + (308 + c * 18) + '" y="' + (106 + r * 24) + '" width="9" height="14" fill="' + ((r + c) % 2 ? "#6b5a40" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="96" y="60" width="208" height="126" fill="' + LIME + '"/><rect x="92" y="54" width="216" height="10" fill="' + LIME2 + '"/>' +
      '<rect x="96" y="70" width="208" height="6" fill="' + LIME2 + '"/>' +
      arch(110) + arch(174) + arch(238) +
      '<rect class="bl" x="110" y="112" width="52" height="70" fill="#fff" opacity=".12"/><rect class="bl bl3" x="238" y="112" width="52" height="70" fill="#fff" opacity=".12"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#55575c"/><rect x="0" y="186" width="400" height="6" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="212" width="46" height="14" rx="5" fill="' + RED + '"/><rect x="10" y="206" width="24" height="8" rx="3" fill="#2a2a32"/><circle cx="10" cy="226" r="4" fill="#111"/><circle cx="36" cy="226" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="236" width="46" height="14" rx="5" fill="' + BLUE + '"/><rect x="10" y="230" width="24" height="8" rx="3" fill="#2a2a32"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="36" cy="250" r="4" fill="#111"/></g>',
      sky("s2", "#0d1530", "#2d3c66"));
  }

  /* 3. 18th & Vine: old brick jazz district at night, a neon JAZZ sign blinking, notes floating up */
  function jazz() {
    const bld = (x, y, w, col) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="' + col + '"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="6" fill="#3b241a"/>';
      for (let r = y + 12; r < 150; r += 26) for (let c = x + 8; c < x + w - 14; c += 22) s += '<rect x="' + c + '" y="' + r + '" width="12" height="16" fill="' + (((r + c) % 3) ? "#2a1d18" : "#ffd98a") + '"/>';
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(16) +
      bld(0, 70, 120, "#8e4632") + bld(120, 90, 150, "#6e3424") + bld(270, 60, 130, "#7d3d2c") +
      '<rect x="140" y="150" width="110" height="50" fill="#1b1216"/><rect x="136" y="144" width="118" height="8" fill="' + RED + '"/>' +
      '<g class="flk"><rect x="150" y="98" width="90" height="34" rx="6" fill="#1b1216" stroke="' + AMBER + '" stroke-width="3"/>' +
      '<text x="195" y="124" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + AMBER + '" letter-spacing="4">JAZZ</text></g>' +
      '<g class="flk flk2"><rect x="292" y="146" width="80" height="22" rx="4" fill="none" stroke="' + BLUE + '" stroke-width="2.5"/><text x="332" y="162" text-anchor="middle" ' + font + ' font-size="11" fill="' + BLUE + '" letter-spacing="2">LIVE</text></g>' +
      '<g fill="' + AMBER + '"><g class="nt"><circle cx="300" cy="196" r="4"/><rect x="303" y="180" width="2" height="16"/></g><g class="nt nt2"><circle cx="322" cy="194" r="4"/><rect x="325" y="178" width="2" height="16"/></g><g class="nt nt3"><circle cx="344" cy="198" r="4"/><rect x="347" y="182" width="2" height="16"/></g></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3f48"/><rect x="0" y="200" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="60" y="150" width="4" height="52" fill="#2d3340"/><circle class="flk" cx="62" cy="148" r="6" fill="#ffe7a8"/><rect x="340" y="196" width="4" height="6" fill="#2d3340"/>',
      sky("s3", "#120a1e", "#3a2448"));
  }

  /* 4. The soul loop lab: turntable spinning, sampler, the loop on the screen, a toy train running the shelf */
  function lab() {
    let bars = "";
    for (let i = 0; i < 14; i++) bars += '<rect class="wv w' + (i % 5 + 1) + '" x="' + (124 + i * 11) + '" y="64" width="7" height="40" fill="' + AMBER + '"/>';
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="' + ((r * 4 + c) % 5 === 2 ? "bl bl" + (c + 1) : "") + '" x="' + (272 + c * 22) + '" y="' + (182 + r * 15) + '" width="18" height="11" rx="2" fill="' + ((r * 4 + c) % 5 === 2 ? BLUE : "#5b5f68") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#12141b"/>' +
      '<rect x="0" y="34" width="400" height="6" fill="#5a4632"/>' +
      '<path d="M0 32h400" stroke="#888" stroke-width="2"/>' +
      '<g class="toy"><g transform="translate(0 12)"><rect x="0" y="4" width="34" height="16" rx="2" fill="' + RED + '"/><rect x="22" y="0" width="12" height="8" fill="' + RED + '"/><rect x="4" y="-2" width="5" height="8" fill="#333"/><circle cx="8" cy="20" r="3" fill="#111"/><circle cx="26" cy="20" r="3" fill="#111"/><rect x="-30" y="6" width="26" height="14" rx="2" fill="' + BLUE + '"/><circle cx="-24" cy="20" r="3" fill="#111"/><circle cx="-10" cy="20" r="3" fill="#111"/>' +
      '<circle class="st" cx="6" cy="-4" r="3" fill="#ddd"/><circle class="st st2" cx="6" cy="-4" r="3" fill="#ddd"/></g></g>' +
      '<rect x="112" y="46" width="176" height="84" rx="4" fill="#0a0d12" stroke="#3a3f47" stroke-width="3"/>' + bars +
      '<text x="200" y="118" text-anchor="middle" ' + font + ' font-size="9" fill="' + LIME + '" letter-spacing="1">SOUL LOOP · ALL ABOARD</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2a2420"/>' +
      '<rect x="20" y="164" width="130" height="80" rx="4" fill="#2c2c30" stroke="#111" stroke-width="2"/>' +
      '<circle class="vn" cx="78" cy="204" r="32" fill="#0b0b0b"/><circle cx="78" cy="204" r="22" fill="none" stroke="#333"/><circle cx="78" cy="204" r="10" fill="' + AMBER + '"/><circle cx="78" cy="204" r="2" fill="#fff"/>' +
      '<path d="M138 172l-22 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M176 196h56l-6-16h-44z" fill="' + NAVY + '"/><rect x="172" y="196" width="64" height="6" rx="2" fill="#0b1a33"/><rect x="190" y="184" width="28" height="5" fill="' + AMBER + '"/>' +
      '<rect x="262" y="170" width="104" height="76" rx="4" fill="#3a3d44" stroke="#22252b" stroke-width="2"/>' + pads);
  }

  /* 5. The corner: 18th St and Vine St, CONDUCTOR tagged, the Liberty Memorial tower glowing over the skyline */
  function corner() {
    const BRICK = "#7d3d2c", BRICK2 = "#5e2e22";
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(16) +
      skyline(132, "#24304c") + memorial(150, 132, 0.62) +
      '<rect x="0" y="128" width="400" height="96" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 134; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      tag("CONDUCTOR", 16, 198, 40, AMBER, -5) + tag("SOUL LOOPS", 150, 218, 18, BLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="236" width="40" height="14" rx="4" fill="' + NAVY + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="30" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="290" y="44" width="86" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">18th St</text>' +
      '<rect x="296" y="70" width="74" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Vine St</text>' +
      '<circle class="flk" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#070a16", "#2c3554"));
  }

  window.SCENES = { streetcar: streetcar, unionstation: unionstation, jazz: jazz, lab: lab, corner: corner };
})();
