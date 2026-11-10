/* moonchild scenes (REGIONS tab: Los Angeles + SoCal; University Park, by USC). CSS classes prefixed mc- (the page's own anim-train is kept on the train).
   1 LATTC/Ortho Institute on the Metro E Line: street-level platform beside Flower St, gold E bullet, a silver light-rail train gliding in under palms.
   2 The USC Thornton jazz room where the three met as jazz students: piano, sax, flute and trumpet on stands, sheet music lifting off.
   3 The cabin in the woods where they gather to write each album: pines, a full moon, warm windows, smoke curling from the chimney.
   4 Brighton Palace Pier, home of their label Tru Thoughts: the white pier with its domes over the sea, gulls drifting.
   5 W Adams Blvd and S Flower St: green signs, MOONCHILD tagged, the Romanesque tower of St. John's Cathedral behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mcglow{0%,100%{opacity:.45}50%{opacity:1}}.mc-glow{animation:mcglow 2.4s ease-in-out infinite}.mc-g2{animation-delay:-1.2s}' +
    '@keyframes mcsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mc-sway{transform-box:fill-box;transform-origin:50% 100%;animation:mcsway 3.2s ease-in-out infinite}.mc-s2{animation-delay:-1.6s}' +
    '@keyframes mcpage{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(60px,-70px) rotate(40deg);opacity:0}}.mc-page{animation:mcpage 3.6s ease-out infinite}.mc-p2{animation-delay:-1.8s}' +
    '@keyframes mcnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-54px);opacity:0}}.mc-note{animation:mcnote 3s ease-out infinite}.mc-n2{animation-delay:-1s}.mc-n3{animation-delay:-2s}' +
    '@keyframes mcsmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(16px,-46px) scale(1.4);opacity:0}}.mc-smoke{transform-box:fill-box;transform-origin:50% 50%;animation:mcsmoke 3.4s ease-out infinite}.mc-k2{animation-delay:-1.1s}.mc-k3{animation-delay:-2.2s}' +
    '@keyframes mctw{0%,100%{opacity:.2}50%{opacity:1}}.mc-tw{animation:mctw 2s ease-in-out infinite}.mc-t2{animation-delay:-.7s}.mc-t3{animation-delay:-1.4s}' +
    '@keyframes mcgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.mc-gull{animation:mcgull 12s linear infinite}.mc-gl2{animation-delay:-6s}' +
    '@keyframes mcwave{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.mc-wave{animation:mcwave 3s ease-in-out infinite}.mc-w2{animation-delay:-1.5s}' +
    '@keyframes mcspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.mc-sp{animation:mcspray 1.4s ease-out infinite}.mc-sp2{animation-delay:-.5s}.mc-sp3{animation-delay:-.9s}' +
    '@keyframes mccar{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.mc-car{animation:mccar 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const LAV = "#c9b8ff", GOLD = "#ffd27a", TEAL = "#7fd8c8";
  const palm = (x, y, h, cls) => '<g class="mc-sway ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#5a4632" stroke-width="5" fill="none"/>' +
    [-60, -25, 10, 45, 80, 120].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (22 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (-10 + 22 * Math.sin(a * Math.PI / 180) * .3).toFixed(1) + ' ' + (34 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (14 + 6 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" stroke="#2f6a3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';

  /* 1. LATTC/Ortho Institute, E Line, street level */
  function mcstop() {
    const car = (x) => '<rect x="' + x + '" y="118" width="150" height="56" rx="10" fill="#d8dce2" stroke="#5a606a" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 33) + '" y="128" width="24" height="20" rx="3" fill="#26303c"/>').join("") +
      '<rect x="' + x + '" y="154" width="150" height="5" fill="#fdb913"/>';
    const train = '<g class="anim-train"><path d="M60 118v-14M60 104l14 -10" stroke="#333" stroke-width="2"/>' + car(30) + car(184) + '<rect x="326" y="132" width="6" height="8" fill="#fff6c2" class="mc-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mcs1)"/>' +
      /* downtown towers behind */
      '<path d="M120 100v-46h22v46zM150 100v-70h18v70zM176 100v-56h26v56zM210 100v-80l10 -8l10 8v80zM240 100v-50h20v50zM268 100v-36h24v36z" fill="#8a7aa8" opacity=".7"/>' +
      /* overhead catenary */
      '<path d="M0 92h400" stroke="#333" stroke-width="1.5"/>' + [20, 200, 380].map(x => '<rect x="' + x + '" y="88" width="5" height="90" fill="#555"/>').join("") +
      palm(16, 178, 120) + palm(370, 178, 110, "mc-s2") +
      train +
      /* tracks + platform + Flower St */
      '<rect x="0" y="174" width="400" height="8" fill="#6a6a70"/><path d="M0 178h400" stroke="#aaa" stroke-width="2"/>' +
      '<rect x="0" y="182" width="400" height="22" fill="#cfc6b4"/><rect x="0" y="182" width="400" height="5" fill="#f2c94c"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#3e3e46"/><path d="M0 232h400" stroke="#e8e2d0" stroke-width="2" stroke-dasharray="20 16"/>' +
      '<g class="mc-car"><rect x="0" y="236" width="64" height="16" rx="4" fill="' + TEAL + '"/><rect x="12" y="228" width="36" height="12" rx="3" fill="' + TEAL + '"/><circle cx="14" cy="252" r="5" fill="#111"/><circle cx="50" cy="252" r="5" fill="#111"/></g>' +
      /* station sign on a pylon */
      '<rect x="88" y="16" width="226" height="40" rx="4" fill="#111" stroke="#555" stroke-width="2"/>' +
      '<circle cx="110" cy="36" r="12" fill="#fdb913"/><text x="110" y="41" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">E</text>' +
      '<text x="130" y="41" ' + font + ' font-size="14" fill="#fff">LATTC/Ortho Institute</text>' +
      '<rect x="196" y="56" width="10" height="36" fill="#555"/>',
      sky("mcs1", "#f4b48a", "#f8e2c4"));
  }

  /* 2. USC Thornton jazz room */
  function mcjazz() {
    const stand = (x) => '<path d="M' + x + ' 196v-70M' + (x - 14) + ' 196h28" stroke="#222" stroke-width="3"/><rect x="' + (x - 22) + '" y="104" width="44" height="28" fill="#222" transform="rotate(-8 ' + x + ' 118)"/>' +
      '<rect x="' + (x - 18) + '" y="100" width="36" height="26" fill="#f7f3ea" transform="rotate(-8 ' + x + ' 113)"/>' +
      '<path d="M' + (x - 14) + ' 108h28M' + (x - 14) + ' 114h28M' + (x - 14) + ' 120h28" stroke="#888" stroke-width="1" transform="rotate(-8 ' + x + ' 113)"/>';
    return svg(
      '<rect width="400" height="260" fill="#3a2a2a"/>' +
      /* wood-paneled wall with acoustic panels */
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="190" fill="' + (i % 2 ? "#6a4630" : "#7a5238") + '"/>').join("") +
      [30, 150, 270].map(x => '<rect x="' + x + '" y="24" width="100" height="56" rx="4" fill="#8a2a2a" stroke="#5a1a1a" stroke-width="3"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#4a3a2e"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 190l-30 70" stroke="#3a2c22" stroke-width="1.5"/>').join("") +
      /* upright piano */
      '<rect x="20" y="110" width="110" height="86" rx="3" fill="#1a1414"/><rect x="26" y="146" width="98" height="10" fill="#f7f3ea"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (30 + i * 14) + '" y="146" width="6" height="6" fill="#111"/>').join("") +
      /* stands with sheet music */
      stand(176) + stand(250) +
      /* sax on a stand */
      '<path d="M320 120q-6 40 0 56q10 14 22 0q4 -6 2 -12" stroke="' + GOLD + '" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M320 120l-8 -14" stroke="' + GOLD + '" stroke-width="4"/><circle cx="342" cy="164" r="7" fill="' + GOLD + '"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (322 - i * 0.5) + '" cy="' + (132 + i * 10) + '" r="2" fill="#8a6a1a"/>').join("") +
      /* flute lying on the piano + trumpet */
      '<rect x="30" y="104" width="90" height="4" rx="2" fill="#d8dce2"/>' +
      '<path d="M200 180h44M244 174v12l14 6v-24z" stroke="' + GOLD + '" stroke-width="4" fill="' + GOLD + '"/><rect x="210" y="172" width="4" height="8" fill="' + GOLD + '"/><rect x="218" y="172" width="4" height="8" fill="' + GOLD + '"/><rect x="226" y="172" width="4" height="8" fill="' + GOLD + '"/>' +
      /* sheet music lifting off + notes */
      '<g class="mc-page"><rect x="250" y="96" width="20" height="26" fill="#f7f3ea" transform="rotate(10 260 109)"/></g><g class="mc-page mc-p2"><rect x="170" y="96" width="20" height="26" fill="#f7f3ea" transform="rotate(-10 180 109)"/></g>' +
      '<g class="mc-note"><text x="80" y="100" font-size="18" fill="' + LAV + '">♪</text></g><g class="mc-note mc-n2"><text x="330" y="100" font-size="18" fill="' + GOLD + '">♫</text></g><g class="mc-note mc-n3"><text x="120" y="96" font-size="16" fill="' + TEAL + '">♪</text></g>' +
      '<rect x="110" y="226" width="180" height="22" rx="3" fill="#111"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#f7e6c8">JAZZ STUDIES · USC THORNTON</text>');
  }

  /* 3. The cabin in the woods */
  function mccabin() {
    const pine = (x, y, s, c) => '<path d="M' + x + ' ' + (y - 60 * s) + 'l' + (22 * s) + ' ' + (30 * s) + 'h' + (-10 * s) + 'l' + (16 * s) + ' ' + (22 * s) + 'h' + (-12 * s) + 'l' + (18 * s) + ' ' + (24 * s) + 'h' + (-68 * s) + 'l' + (18 * s) + ' ' + (-24 * s) + 'h' + (-12 * s) + 'l' + (16 * s) + ' ' + (-22 * s) + 'h' + (-10 * s) + 'z" fill="' + c + '"/><rect x="' + (x - 3 * s) + '" y="' + (y + 16 * s) + '" width="' + (6 * s) + '" height="' + (10 * s) + '" fill="#3a2a1a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mcs3)"/>' +
      '<circle cx="300" cy="56" r="28" fill="#f4ecd0"/><circle cx="300" cy="56" r="40" fill="#f4ecd0" opacity=".12"/>' +
      [[40, 30], [120, 20], [200, 44], [360, 24], [250, 16], [80, 60]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.4" fill="#fff" class="mc-tw ' + ["", "mc-t2", "mc-t3"][i % 3] + '"/>').join("") +
      pine(30, 150, 1.3, "#1a2e2a") + pine(370, 150, 1.4, "#1a2e2a") + pine(90, 160, 1, "#22383a") + pine(320, 164, 1.1, "#22383a") +
      '<rect x="0" y="196" width="400" height="64" fill="#1e2a22"/>' +
      /* cabin */
      '<rect x="130" y="136" width="150" height="70" fill="#7a4a2a"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M130 ' + (142 + i * 10) + 'h150" stroke="#5a3418" stroke-width="2"/>').join("") +
      '<path d="M118 140l87 -56l87 56z" fill="#3a2a22" stroke="#2a1a14" stroke-width="2"/>' +
      '<rect x="244" y="94" width="16" height="34" fill="#6a5a50"/>' +
      '<circle cx="252" cy="88" r="6" fill="#cfc8c0" class="mc-smoke"/><circle cx="252" cy="88" r="6" fill="#cfc8c0" class="mc-smoke mc-k2"/><circle cx="252" cy="88" r="6" fill="#cfc8c0" class="mc-smoke mc-k3"/>' +
      '<rect x="146" y="150" width="34" height="28" fill="#ffd27a" class="mc-glow"/><path d="M163 150v28M146 164h34" stroke="#5a3418" stroke-width="2"/>' +
      '<rect x="230" y="150" width="34" height="28" fill="#ffd27a" class="mc-glow mc-g2"/><path d="M247 150v28M230 164h34" stroke="#5a3418" stroke-width="2"/>' +
      '<rect x="192" y="160" width="26" height="46" fill="#4a2a14"/><circle cx="212" cy="184" r="2" fill="' + GOLD + '"/>' +
      '<path d="M150 172h26" stroke="#222" stroke-width="3"/>' +
      '<g class="mc-note"><text x="176" y="140" font-size="16" fill="' + LAV + '">♪</text></g><g class="mc-note mc-n2"><text x="212" y="134" font-size="16" fill="' + GOLD + '">♫</text></g>' +
      '<rect x="110" y="226" width="180" height="22" rx="3" fill="#111"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#f7e6c8">WRITING WEEK IN THE WOODS</text>',
      sky("mcs3", "#0f1030", "#3a3a6a"));
  }

  /* 4. Brighton Palace Pier, home of Tru Thoughts */
  function mcpier() {
    const dome = (x, y, r) => '<path d="M' + (x - r) + ' ' + y + 'q0 -' + (r * 1.6) + ' ' + r + ' -' + (r * 1.8) + 'q' + r + ' ' + (r * .2) + ' ' + r + ' ' + (r * 1.8) + 'z" fill="#f7f3ea" stroke="#b8a888" stroke-width="1.5"/><path d="M' + x + ' ' + (y - r * 1.8) + 'v-6" stroke="#b8a888" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mcs4)"/>' +
      '<circle cx="80" cy="60" r="20" fill="#fff3c8" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a7a9a"/>' +
      '<path d="M0 170q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f0" stroke-width="2" fill="none" class="mc-wave"/>' +
      '<path d="M0 200q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f0" stroke-width="2" fill="none" class="mc-wave mc-w2"/>' +
      /* pier deck on legs */
      '<rect x="20" y="132" width="380" height="8" fill="#e8e2d6"/>' + Array.from({ length: 19 }, (_, i) => '<rect x="' + (24 + i * 20) + '" y="140" width="4" height="40" fill="#5a4a3a"/><path d="M' + (26 + i * 20) + ' 150l10 14" stroke="#5a4a3a" stroke-width="1.5"/>').join("") +
      /* pavilion with domes */
      '<rect x="120" y="96" width="170" height="36" fill="#f7f3ea" stroke="#b8a888" stroke-width="1.5"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (128 + i * 20) + '" y="104" width="10" height="20" rx="5" fill="#7fb8d8"/>').join("") +
      dome(140, 96, 12) + dome(205, 96, 18) + dome(270, 96, 12) +
      '<path d="M120 96h170" stroke="#d8a83a" stroke-width="2"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + (30 + i * 20) + '" cy="130" r="2" fill="' + GOLD + '" class="mc-glow ' + (i % 2 ? "mc-g2" : "") + '"/>').join("") +
      /* gulls */
      '<g class="mc-gull"><path d="M0 50q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g><g class="mc-gull mc-gl2"><path d="M0 74q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* pebble beach */
      '<path d="M0 232q100 -12 200 0t200 0v28h-400z" fill="#b8a890"/>' +
      '<rect x="100" y="236" width="200" height="20" rx="3" fill="#111"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f7e6c8">BRIGHTON · THEIR LABEL’S HOME</text>',
      sky("mcs4", "#8ac0e0", "#f6d8c0"));
  }

  /* 5. W Adams Blvd and S Flower St, St. John's tower behind */
  function mccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mcs5)"/>' +
      /* St. John's Cathedral: Romanesque front with rose window and tower */
      '<rect x="190" y="70" width="150" height="140" fill="#d8c8a8" stroke="#a8946e" stroke-width="2"/>' +
      '<path d="M184 74l81 -40l81 40z" fill="#b8664a" stroke="#8a4a32" stroke-width="2"/>' +
      '<circle cx="265" cy="110" r="22" fill="#5a3a6a" stroke="#a8946e" stroke-width="4"/>' + [0, 45, 90, 135].map(a => '<path d="M' + (265 + 20 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (110 + 20 * Math.sin(a * Math.PI / 180)).toFixed(1) + 'L' + (265 - 20 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (110 - 20 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" stroke="#a8946e" stroke-width="2"/>').join("") +
      '<circle cx="265" cy="110" r="6" fill="' + GOLD + '" class="mc-glow"/>' +
      '<path d="M236 210v-40q29 -30 58 0v40z" fill="#6a4a3a" stroke="#a8946e" stroke-width="3"/>' +
      [200, 314].map(x => '<path d="M' + x + ' 190v-30q8 -10 16 0v30z" fill="#4a3a4a"/>').join("") +
      '<rect x="340" y="30" width="44" height="180" fill="#d0bf9c" stroke="#a8946e" stroke-width="2"/><path d="M334 34l28 -26l28 26z" fill="#b8664a"/>' +
      '<path d="M352 60v-14q10 -10 20 0v14zM352 110v-14q10 -10 20 0v14z" fill="#4a3a4a"/>' +
      /* left wall with the tag */
      '<rect x="0" y="100" width="180" height="110" fill="#e8d8c0"/><rect x="0" y="100" width="180" height="8" fill="#c8b898"/>' +
      tag("MOON", 12, 158, 34, LAV, -8) + tag("CHILD", 52, 196, 32, GOLD, -6) +
      '<g transform="translate(166 150)"><circle r="3" fill="' + LAV + '" class="mc-sp"/><circle r="2.5" fill="' + GOLD + '" class="mc-sp mc-sp2"/><circle r="2" fill="#fff" class="mc-sp mc-sp3"/></g>' +
      '<rect x="162" y="150" width="8" height="18" rx="2" fill="#ddd" stroke="#555"/>' +
      palm(186, 210, 130) +
      /* sign post */
      '<rect x="96" y="40" width="6" height="170" fill="#2f5a3a"/>' + sign(28, 42, 144, "W Adams Blvd", 12) + sign(36, 68, 128, "S Flower St", 12) +
      '<rect x="0" y="210" width="400" height="16" fill="#b8b0a4"/><rect x="0" y="226" width="400" height="34" fill="#3e3e46"/>' +
      '<g class="mc-car"><rect x="0" y="232" width="66" height="16" rx="4" fill="#d8dce2"/><rect x="12" y="224" width="38" height="12" rx="3" fill="#d8dce2"/><circle cx="14" cy="250" r="5" fill="#111"/><circle cx="52" cy="250" r="5" fill="#111"/></g>',
      sky("mcs5", "#7ab0e0", "#f6d0a0"));
  }

  window.SCENES = { mcstop: mcstop, mcjazz: mcjazz, mccabin: mccabin, mcpier: mcpier, mccorner: mccorner };
})();
