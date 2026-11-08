/* speakerknockerz scenes (Regions tab: The Carolinas; Columbia, SC). CSS classes prefixed sk- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes skflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.sk-flk{animation:skflick 2.4s infinite}.sk-flk2{animation-delay:.8s}' +
    '@keyframes skglow{0%,100%{opacity:.45}50%{opacity:1}}.sk-glow{animation:skglow 2.2s ease-in-out infinite}.sk-g2{animation-delay:-1.1s}' +
    '@keyframes skpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.sk-pl{transform-box:fill-box;transform-origin:50% 50%;animation:skpulse .46s ease-in-out infinite}.sk-pl2{animation-delay:-.23s}' +
    '@keyframes skwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.sk-wv{transform-box:fill-box;transform-origin:50% 100%;animation:skwave .7s ease-in-out infinite}' +
    '@keyframes skcar{0%{transform:translateX(-160px)}100%{transform:translateX(440px)}}.sk-car{animation:skcar 6s linear infinite}' +
    '@keyframes skrip{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.sk-rip{animation:skrip 3s linear infinite}' +
    '@keyframes sksway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sk-sw{transform-box:fill-box;transform-origin:50% 100%;animation:sksway 3.2s ease-in-out infinite}.sk-sw2{animation-delay:-1.6s}' +
    '@keyframes skbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sk-bob{animation:skbob 1s ease-in-out infinite}.sk-bob2{animation-delay:-.5s}' +
    '@keyframes skspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sk-sp{animation:skspray 1.4s ease-out infinite}.sk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sk-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* a palmetto: curved trunk and a fan of fronds (the state tree) */
  const palm = (x, y, h, cls) => '<path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b5434" stroke-width="5" fill="none"/>' +
    '<g class="sk-sw' + (cls ? " " + cls : "") + '"><g transform="translate(' + (x + 2) + ' ' + (y - h) + ')">' +
    [-150, -120, -90, -60, -30, -170, -10].map((a, i) => '<path d="M0 0l' + (Math.cos(a * Math.PI / 180) * 26).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 18 + 6).toFixed(1) + '" stroke="' + (i % 2 ? "#2f7d3a" : "#3d9a48") + '" stroke-width="5" stroke-linecap="round"/>').join("") + '</g></g>';
  const GREEN = "#7ee081", GOLD = "#f5c542", RED = "#e04b4b", NAVY = "#1b4f9c";

  /* 1. COMET Central on Sumter St, downtown Columbia: the covered bus bays, the black station sign, a white COMET bus with the navy and gold band pulling in */
  function skstation() {
    const bus = '<g class="anim-train"><rect x="30" y="118" width="300" height="80" rx="10" fill="#f4f5f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 42) + '" y="130" width="34" height="30" rx="3" fill="#22303c"/>').join("") +
      '<rect x="306" y="128" width="20" height="58" rx="3" fill="#22303c"/>' +
      '<rect x="30" y="166" width="300" height="7" fill="' + NAVY + '"/><rect x="30" y="175" width="300" height="4" fill="' + GOLD + '"/>' +
      '<rect x="230" y="120" width="96" height="10" rx="2" fill="#111"/><text x="278" y="128" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">COMET CENTRAL</text>' +
      '<circle cx="90" cy="200" r="13" fill="#222"/><circle cx="90" cy="200" r="5" fill="#9aa1a8"/><circle cx="276" cy="200" r="13" fill="#222"/><circle cx="276" cy="200" r="5" fill="#9aa1a8"/>' +
      '<circle cx="326" cy="188" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sk1)"/>' +
      '<g fill="#3e4652"><rect x="0" y="62" width="60" height="70"/><rect x="66" y="40" width="44" height="92"/><rect x="300" y="50" width="54" height="82"/><rect x="358" y="70" width="42" height="62"/></g>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="' + (i % 3 ? "" : "sk-glow") + '" x="' + [8, 22, 36, 74, 88, 74, 306, 320, 334, 306, 364, 378][i] + '" y="' + [74, 74, 90, 52, 52, 70, 62, 62, 80, 98, 82, 82][i] + '" width="8" height="8" fill="#ffd98a" opacity=".8"/>').join("") +
      palm(140, 128, 36) + palm(262, 128, 32, "sk-sw2") +
      /* canopy */
      '<rect x="0" y="22" width="400" height="10" fill="#c9ccd0"/><path d="M0 32h400" stroke="#8e949b" stroke-width="2"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 4) + '" y="32" width="8" height="166" fill="#8e949b"/>').join("") +
      '<rect x="0" y="198" width="400" height="8" fill="#d8d4c8"/><rect x="0" y="206" width="400" height="54" fill="#55565c"/><path d="M0 236h400" stroke="' + GOLD + '" stroke-width="3" stroke-dasharray="22 14"/>' +
      bus +
      '<rect x="92" y="40" width="216" height="30" rx="3" fill="#111"/><text x="104" y="60" ' + font + ' font-size="14" fill="#fff">COMET Central</text>' + badge(226, 55, "COMET", NAVY) +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" opacity=".85">SUMTER ST</text>',
      sky("sk1", "#2b3a66", "#e9a066"));
  }

  /* 2. The Gervais Street Bridge over the Congaree at sunset: pale concrete arches, the old lamp posts glowing, the river running, a black-on-black Camaro rolling across */
  function skbridge() {
    const car = '<g class="sk-car"><path d="M0 106l10 -10h34l12 10h14v10h-76z" fill="#0b0b0d" stroke="#2a2a30" stroke-width="1.5"/><rect x="14" y="98" width="14" height="7" fill="#2a3644"/><rect x="31" y="98" width="13" height="7" fill="#2a3644"/>' +
      '<circle cx="14" cy="116" r="6" fill="#111"/><circle cx="14" cy="116" r="2.5" fill="#555"/><circle cx="58" cy="116" r="6" fill="#111"/><circle cx="58" cy="116" r="2.5" fill="#555"/><rect x="66" y="107" width="5" height="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sk2)"/>' +
      '<circle class="sk-glow" cx="300" cy="66" r="26" fill="#ffcf6b" opacity=".9"/>' +
      '<path d="M0 108l40 -10l40 6l50 -12l60 8l70 -10l60 8l80 -6v20h-400z" fill="#2f4a3a"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5a6b5a"/>' +
      '<g class="sk-rip">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 36) + ' ' + (170 + (i % 4) * 18) + 'h20" stroke="#c8d8b8" stroke-width="2" opacity=".5"/>').join("") + '</g>' +
      '<rect x="0" y="116" width="400" height="12" fill="#cfc8b6"/><rect x="0" y="112" width="400" height="5" fill="#e3ddcc"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (i * 90 - 10) + ' 128h90v34q-45 -28 -90 0z" fill="#cfc8b6"/><rect x="' + (i * 90 + 70) + '" y="128" width="20" height="60" fill="#bdb6a4"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<rect x="' + (i * 19) + '" y="104" width="4" height="9" fill="#e3ddcc"/>').join("") +
      [30, 120, 210, 300, 390].map((x, i) => '<rect x="' + (x - 2) + '" y="76" width="4" height="36" fill="#2a2a2a"/><path d="M' + (x - 8) + ' 78h16" stroke="#2a2a2a" stroke-width="2"/><circle class="sk-glow' + (i % 2 ? " sk-g2" : "") + '" cx="' + (x - 8) + '" cy="82" r="4" fill="#ffe7a0"/><circle class="sk-glow' + (i % 2 ? "" : " sk-g2") + '" cx="' + (x + 8) + '" cy="82" r="4" fill="#ffe7a0"/>').join("") +
      car +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">GERVAIS ST BRIDGE  ·  CONGAREE RIVER</text>',
      sky("sk2", "#40306a", "#f2a35c"));
  }

  /* 3. The bedroom beat lab: he made his own beats. Laptop with the beat grid, pad controller lighting up, two big speakers with the woofers knocking, the meters jumping */
  function skstudio() {
    const spk = (x) => '<rect x="' + x + '" y="92" width="74" height="132" rx="6" fill="#16181d" stroke="#3a3e46" stroke-width="2"/>' +
      '<circle class="sk-pl" cx="' + (x + 37) + '" cy="182" r="26" fill="#2a2d34" stroke="#555a63" stroke-width="3"/><circle cx="' + (x + 37) + '" cy="182" r="9" fill="#0d0e11"/>' +
      '<circle class="sk-pl sk-pl2" cx="' + (x + 37) + '" cy="122" r="14" fill="#2a2d34" stroke="#555a63" stroke-width="2"/><circle cx="' + (x + 37) + '" cy="122" r="5" fill="#0d0e11"/>';
    return svg(
      '<rect width="400" height="260" fill="#14161f"/>' +
      '<rect x="0" y="0" width="400" height="200" fill="#1d2130"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (i * 22) + 'h400" stroke="#232838" stroke-width="1"/>').join("") +
      '<rect x="146" y="20" width="108" height="56" rx="3" fill="#2b2f3c" stroke="#3d4252" stroke-width="2"/><text x="200" y="44" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '">MTTM2</text><text x="200" y="62" text-anchor="middle" ' + font + ' font-size="8" fill="#fff" opacity=".8">MIXTAPE ON THE WALL</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a2a20"/><rect x="0" y="196" width="400" height="6" fill="#4a3628"/>' +
      spk(18) + spk(308) +
      /* desk + laptop + pads */
      '<rect x="102" y="188" width="196" height="10" rx="2" fill="#6b4a32"/><rect x="112" y="198" width="8" height="58" fill="#4a3628"/><rect x="280" y="198" width="8" height="58" fill="#4a3628"/>' +
      '<path d="M130 188l10 -64h104l10 64z" fill="#2c2f36"/><rect x="146" y="130" width="92" height="52" fill="#0f1a12"/>' +
      Array.from({ length: 4 }, (_, r) => Array.from({ length: 8 }, (_, c) => '<rect x="' + (150 + c * 11) + '" y="' + (136 + r * 11) + '" width="8" height="7" fill="' + ((r * 3 + c) % 5 === 0 ? GREEN : "#25402c") + '"/>').join("")).join("") +
      '<rect x="252" y="170" width="40" height="18" rx="2" fill="#1b1d22"/>' + Array.from({ length: 8 }, (_, i) => '<rect class="' + (i % 3 === 0 ? "sk-glow" : (i % 3 === 1 ? "sk-glow sk-g2" : "")) + '" x="' + (255 + (i % 4) * 9) + '" y="' + (173 + Math.floor(i / 4) * 7) + '" width="7" height="5" rx="1" fill="' + [RED, GOLD, GREEN, "#5aa9ff"][i % 4] + '"/>').join("") +
      '<g transform="translate(108 166)">' + Array.from({ length: 6 }, (_, i) => '<rect class="sk-wv" style="animation-delay:-' + (i * 0.12).toFixed(2) + 's" x="' + (i * 5) + '" y="0" width="3" height="20" fill="' + GREEN + '"/>').join("") + '</g>' +
      '<path d="M120 140q-20 -40 10 -60" stroke="#555" stroke-width="3" fill="none"/>',
      "");
  }

  /* 4. Soda City Market on Main St on a Saturday: white tents down the street, string lights, a palmetto, people walking, the old storefronts */
  function skmarket() {
    const tent = (x, c) => '<path d="M' + x + ' 150l30 -26l30 26z" fill="#f6f4ee"/><rect x="' + x + '" y="150" width="60" height="10" fill="' + c + '"/><rect x="' + (x + 2) + '" y="160" width="3" height="40" fill="#9aa1a8"/><rect x="' + (x + 55) + '" y="160" width="3" height="40" fill="#9aa1a8"/>' +
      '<rect x="' + (x + 6) + '" y="180" width="48" height="16" fill="#8a5a3a"/>';
    const walker = (x, c, cls) => '<g class="sk-bob' + (cls ? " sk-bob2" : "") + '"><circle cx="' + x + '" cy="186" r="5" fill="#2a2a2a"/><rect x="' + (x - 5) + '" y="192" width="10" height="20" rx="3" fill="' + c + '"/><rect x="' + (x - 4) + '" y="212" width="3" height="12" fill="#2a2a2a"/><rect x="' + (x + 1) + '" y="212" width="3" height="12" fill="#2a2a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sk4)"/>' +
      [[0, 60, "#9a5a3a"], [70, 44, "#c9b48a"], [124, 70, "#7a4a34"], [204, 50, "#b8a07a"], [264, 64, "#8a5240"], [338, 62, "#c2a982"]].map(b => '<rect x="' + b[0] + '" y="' + (150 - b[1] - 40) + '" width="' + (b[0] === 338 ? 62 : 58) + '" height="' + (b[1] + 40) + '" fill="' + b[2] + '"/>' +
        Array.from({ length: 3 }, (_, i) => '<rect x="' + (b[0] + 8 + i * 17) + '" y="' + (150 - b[1] - 30) + '" width="10" height="14" fill="#2a3442"/>').join("")).join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#5a5a60"/><rect x="0" y="196" width="400" height="6" fill="#bdb8ae"/>' +
      tent(10, RED) + tent(84, GREEN) + tent(250, GOLD) + tent(324, NAVY) +
      '<path d="M0 100q50 18 100 0t100 0t100 0t100 0" stroke="#333" stroke-width="1" fill="none"/>' + Array.from({ length: 16 }, (_, i) => '<circle class="sk-glow' + (i % 2 ? " sk-g2" : "") + '" cx="' + (i * 26 + 8) + '" cy="' + (104 + Math.sin(i * 0.8) * 4).toFixed(1) + '" r="3" fill="#ffe7a0"/>').join("") +
      palm(200, 200, 84) +
      walker(160, RED) + walker(232, NAVY, 1) + walker(300, GREEN) + walker(70, GOLD, 1) +
      '<rect x="150" y="26" width="100" height="22" rx="3" fill="#111"/><text x="200" y="42" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">MAIN ST</text>',
      sky("sk4", "#7fc3ea", "#f4e6c4"));
  }

  /* 5. Main St and Gervais St: green signs, SPEAKER KNOCKERZ tagged on the brick, the State House and its green copper dome right behind at the head of Main St */
  function skcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sk5)"/>' + stars(14) +
      /* State House: granite body, columned portico, copper dome */
      '<rect x="110" y="84" width="180" height="52" fill="#b9b3a6"/><rect x="106" y="80" width="188" height="6" fill="#a8a294"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (166 + i * 9) + '" y="92" width="4" height="40" fill="#e0dbcf"/>').join("") + '<path d="M160 92l40 -14l40 14z" fill="#cfc9bb"/>' +
      [118, 136, 254, 272].map(x => '<rect x="' + x + '" y="96" width="10" height="16" fill="#2a3442"/>').join("") +
      '<rect x="174" y="58" width="52" height="22" fill="#cfc9bb"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (178 + i * 8) + '" y="62" width="3" height="16" fill="#a8a294"/>').join("") +
      '<path d="M170 58q30 -44 60 0z" fill="#4f9a86"/><path d="M180 50q20 -20 40 0" stroke="#6fbaa4" stroke-width="2" fill="none"/>' +
      '<rect x="196" y="16" width="8" height="12" fill="#4f9a86"/><path d="M200 8v8" stroke="#4f9a86" stroke-width="2"/>' +
      '<g class="sk-sw"><path d="M200 8l14 4l-14 4z" fill="#1d3e8a"/></g>' +
      '<g fill="#22263a"><rect x="0" y="86" width="96" height="50"/><rect x="300" y="78" width="54" height="58"/><rect x="356" y="96" width="44" height="40"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#8a4a36"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#743c2c" stroke-width="1"/>').join("") +
      tag("FINESSE FATHER", 222, 214, 13, RED, -3) + tag("SPEAKER", 16, 182, 36, GREEN, -6) + tag("KNOCKERZ", 26, 214, 36, GOLD, -5) + tag("MTTM", 246, 184, 26, "#fff", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(300, 100, 96, "Main St") + sign(296, 126, 104, "Gervais St") +
      '<g class="sk-sp"><circle cx="196" cy="168" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="sk-sp sk-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sk5", "#121a36", "#b8664a"));
  }

  window.SCENES = { skstation: skstation, skbridge: skbridge, skstudio: skstudio, skmarket: skmarket, skcorner: skcorner };
})();
