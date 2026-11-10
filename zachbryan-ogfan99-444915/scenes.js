/* zachbryan scenes (Regions tab: More of the South, Oologah OK). CSS classes prefixed zb- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes zbglow{0%,100%{opacity:.45}50%{opacity:1}}.zb-glow{animation:zbglow 2.4s ease-in-out infinite}.zb-g2{animation-delay:-1.2s}' +
    '@keyframes zbcloud{0%{transform:translateX(0)}100%{transform:translateX(50px)}}.zb-cl{animation:zbcloud 14s ease-in-out infinite alternate}' +
    '@keyframes zbsun{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}.zb-sun{animation:zbsun 6s ease-in-out infinite}' +
    '@keyframes zbshim{0%,100%{opacity:.25}50%{opacity:.85}}.zb-sh{animation:zbshim 2s ease-in-out infinite}.zb-sh2{animation-delay:-1s}' +
    '@keyframes zbsail{0%{transform:translateX(0)}100%{transform:translateX(70px)}}.zb-sail{animation:zbsail 12s ease-in-out infinite alternate}' +
    '@keyframes zbspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.zb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:zbspin 3s linear infinite}' +
    '@keyframes zbgraze{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.zb-graze{animation:zbgraze 7s ease-in-out infinite}' +
    '@keyframes zbball{0%{transform:translate(0,0)}50%{transform:translate(70px,-46px)}100%{transform:translate(140px,0)}}.zb-ball{animation:zbball 2.6s ease-in-out infinite alternate}' +
    '@keyframes zbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.zb-flag{transform-box:fill-box;transform-origin:0% 50%;animation:zbflag 1.8s ease-in-out infinite}' +
    '@keyframes zbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.zb-sp{animation:zbspray 1.4s ease-out infinite}.zb-sp2{animation-delay:.45s}' +
    '@keyframes zbtwk{0%,100%{opacity:.2}50%{opacity:1}}.zb-tw{animation:zbtwk 1.8s ease-in-out infinite}.zb-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const tree = (x, base, r, c) => '<g><rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r - r * 0.4) + '" r="' + r * 0.8 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/></g>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".6"/>'; return s; };
  const ORANGE = "#f28c28", GOLD = "#e8c170", NAVY = "#24395a", CREAM = "#f6ecd6", RED = "#8e3a26";

  /* 1. Rolling north on US-169 out of Tulsa: green guide sign for OK-88 / Oologah, a pickup sliding in, prairie and blackjack oaks */
  function zbhwy() {
    let trees = "";
    for (let i = 0; i < 9; i++) trees += tree(18 + i * 47, 168, 11 + (i * 7) % 8, i % 2 ? "#4b6a30" : "#5a7a38");
    const us = (x, y, n) => '<path d="M' + x + ' ' + y + 'h34v6q0 20 -17 28q-17 -8 -17 -28z" fill="#fff" stroke="#000" stroke-width="2"/><text x="' + (x + 13) + '" y="' + (y + 22) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#000">' + n + '</text>' +
      '<circle cx="' + (x + 26) + '" cy="' + (y + 13.5) + '" r="3.6" fill="none" stroke="#000" stroke-width="2.2"/><path d="M' + (x + 29.6) + ' ' + (y + 13) + 'v9" stroke="#000" stroke-width="2.2"/>';
    const ok = (x, y, n) => '<rect x="' + x + '" y="' + y + '" width="34" height="26" rx="3" fill="#fff" stroke="#000" stroke-width="2"/><path d="M' + (x + 5) + ' ' + (y + 5) + 'h12v6h12v10h-24z" fill="none" stroke="#000" stroke-width="1.6"/><text x="' + (x + 17) + '" y="' + (y + 19) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#000">' + n + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#zb1)"/>' +
      '<g class="zb-cl"><ellipse cx="60" cy="40" rx="34" ry="8" fill="#fff" opacity=".7"/><ellipse cx="250" cy="22" rx="40" ry="9" fill="#fff" opacity=".55"/></g>' +
      '<path d="M0 150q90 -24 180 -8t220 -6v40h-400z" fill="#8a9a52"/>' + trees +
      '<rect x="0" y="168" width="400" height="92" fill="#4a4d52"/><rect x="0" y="166" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 212h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="26 20"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      '<rect x="176" y="98" width="6" height="70" fill="#9aa0a6"/><rect x="334" y="98" width="6" height="70" fill="#9aa0a6"/>' +
      '<rect x="150" y="16" width="214" height="90" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      ok(164, 26, "88") + '<text x="210" y="45" ' + font + ' font-size="13" fill="#fff">NORTH</text>' +
      '<text x="258" y="74" text-anchor="middle" ' + font + ' font-size="30" fill="#fff">Oologah</text>' +
      '<text x="258" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Oologah Lake</text>' +
      '<path d="M344 40v-14l-7 7M344 26l7 7" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      us(78, 92, "16") + '<rect x="70" y="130" width="50" height="14" fill="#fff" stroke="#000"/><text x="95" y="141" text-anchor="middle" ' + font + ' font-size="10" fill="#000">NORTH</text><rect x="92" y="144" width="5" height="24" fill="#9aa0a6"/>' +
      '<g class="anim-train"><g transform="translate(206 176)"><rect x="0" y="12" width="112" height="24" rx="5" fill="' + ORANGE + '"/><path d="M8 12l12 -16h34l10 16z" fill="' + ORANGE + '"/><path d="M22 10l8 -11h12v11z" fill="#bfe6ff"/><path d="M46 10v-11h6l7 11z" fill="#bfe6ff"/><rect x="64" y="6" width="48" height="8" fill="#b8641c"/>' +
      '<circle cx="24" cy="38" r="9" fill="#222"/><circle cx="24" cy="38" r="4" fill="#bbb"/><circle cx="92" cy="38" r="9" fill="#222"/><circle cx="92" cy="38" r="4" fill="#bbb"/><rect x="-2" y="18" width="6" height="5" fill="#fff6c0"/></g></g>',
      sky("zb1", "#5aa8e0", "#d6ecf6"));
  }

  /* 2. Oologah Lake at sundown: the whole sky something in the orange, sailboats, the long dam on the far shore */
  function zblake() {
    let shim = "";
    for (let i = 0; i < 10; i++) shim += '<path d="M' + (150 + (i % 3) * 18 - i * 2) + ' ' + (170 + i * 8) + 'h' + (40 - i * 2) + '" stroke="#ffd08a" stroke-width="2" class="zb-sh' + (i % 2 ? " zb-sh2" : "") + '"/>';
    const sail = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0l22 0l-4 7h-16z" fill="#2a1a14"/><path d="M11 -2v-30l14 28z" fill="#fff4e0"/><path d="M10 -2v-24l-9 22z" fill="#f6dcc0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#zb2)"/>' +
      '<g class="zb-sun"><circle cx="190" cy="132" r="34" fill="#ffcf6b" opacity=".95"/><circle cx="190" cy="132" r="48" fill="#ffcf6b" opacity=".18"/></g>' +
      '<g class="zb-cl"><path d="M20 70q30 -10 70 0" stroke="#ff9a52" stroke-width="5" fill="none" opacity=".7"/><path d="M250 50q40 -12 90 0" stroke="#ff8a4a" stroke-width="6" fill="none" opacity=".6"/></g>' +
      '<path d="M0 150q60 -14 120 -6l40 4h90l40 -6q60 -6 110 6v14h-400z" fill="#3a2a2e"/>' +
      '<rect x="250" y="144" width="110" height="8" fill="#5a4a46"/><path d="M250 144h110" stroke="#8a7a70" stroke-width="1.5"/>' +
      '<rect x="0" y="158" width="400" height="102" fill="url(#zb2w)"/>' + shim +
      '<g class="zb-sail">' + sail(60, 184, 1.1) + '</g><g class="zb-sail" style="animation-delay:-5s">' + sail(270, 198, 0.8) + '</g>' +
      '<path d="M0 236q60 -10 130 -2q50 6 90 -2v28h-220z" fill="#2a1e1a"/>' + tree(30, 236, 14, "#2c241e") + tree(70, 232, 10, "#2c241e") +
      '<text x="380" y="248" text-anchor="end" ' + font + ' font-size="13" fill="#ffe2b0" opacity=".9">OOLOGAH LAKE</text>',
      sky("zb2", "#5a2a5a", "#ff8a3c") + '<linearGradient id="zb2w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0703a"/><stop offset="1" stop-color="#3a2440"/></linearGradient>');
  }

  /* 3. The Will Rogers Birthplace Ranch: the white two-story log house above the Verdigris, windmill turning, longhorns grazing */
  function zbranch() {
    const horn = (x, y) => '<g class="zb-graze"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="18" ry="9" fill="#a0623a"/><ellipse cx="-6" cy="-2" rx="6" ry="5" fill="#f2e6d4"/><rect x="-14" y="6" width="3" height="10" fill="#6a3e22"/><rect x="10" y="6" width="3" height="10" fill="#6a3e22"/><rect x="-6" y="6" width="3" height="10" fill="#6a3e22"/><rect x="4" y="6" width="3" height="10" fill="#6a3e22"/>' +
      '<ellipse cx="20" cy="-2" rx="6" ry="5" fill="#a0623a"/><path d="M18 -6q-12 -6 -18 -2M22 -6q12 -6 18 -2" stroke="#efe2c4" stroke-width="2.5" fill="none" stroke-linecap="round"/></g></g>';
    let fence = "";
    for (let i = 0; i < 14; i++) fence += '<rect x="' + (6 + i * 30) + '" y="196" width="4" height="22" fill="#6a4a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zb3)"/>' +
      '<g class="zb-cl"><ellipse cx="80" cy="34" rx="36" ry="9" fill="#fff" opacity=".8"/><ellipse cx="320" cy="50" rx="30" ry="8" fill="#fff" opacity=".7"/></g>' +
      '<path d="M0 150q100 -30 200 -10t200 -6v126h-400z" fill="#9aae5c"/>' +
      tree(40, 150, 16, "#4b6a30") + tree(352, 146, 18, "#4b6a30") +
      '<rect x="120" y="86" width="150" height="70" fill="#f4f1e8" stroke="#8a8478" stroke-width="2"/>' +
      '<path d="M112 88l83 -40l83 40z" fill="#5a5a5e"/><rect x="186" y="56" width="10" height="20" fill="#8e5a3a"/>' +
      '<rect x="120" y="118" width="150" height="4" fill="#d8d2c4"/><rect x="110" y="122" width="170" height="6" fill="#5a5a5e"/>' +
      [128, 160, 216, 246].map(x => '<rect x="' + x + '" y="94" width="14" height="18" fill="#3a4a5a" stroke="#fff" stroke-width="2"/>').join("") +
      [128, 160, 216, 246].map(x => '<rect x="' + x + '" y="132" width="14" height="18" fill="#3a4a5a" stroke="#fff" stroke-width="2"/>').join("") +
      '<rect x="188" y="130" width="16" height="26" fill="#6a4a2a"/>' +
      [116, 150, 236, 270].map(x => '<rect x="' + x + '" y="128" width="4" height="28" fill="#fff"/>').join("") +
      '<rect x="310" y="96" width="4" height="64" fill="#7a7a80"/><path d="M302 160l10 -64l10 64" stroke="#7a7a80" stroke-width="2" fill="none"/>' +
      '<g class="zb-spin"><g transform="translate(312 92)"><path d="M0 0l-2 -18h4z M0 0l18 -2v4z M0 0l2 18h-4z M0 0l-18 2v-4z M0 0l12 -13l2 3z M0 0l13 12l-3 2z M0 0l-12 13l-2 -3z M0 0l-13 -12l3 -2z" fill="#c9c9cf"/><circle r="3" fill="#555"/></g></g>' +
      '<path d="M0 206h400M0 214h400" stroke="#7a5a3a" stroke-width="2"/>' + fence +
      horn(70, 182) + horn(330, 178) +
      '<rect x="110" y="226" width="180" height="22" rx="3" fill="#5a3a22" stroke="#e8c170" stroke-width="1.5"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">WILL ROGERS BIRTHPLACE</text>',
      sky("zb3", "#6ab0e0", "#e0f0f6"));
  }

  /* 4. Friday night lights in Oologah: the water tower over the town, the home field lit up, a football on the fly */
  function zbfield() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="60" width="4" height="110" fill="#8a8a90"/><rect x="' + (x - 18) + '" y="46" width="36" height="16" rx="2" fill="#333"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (x - 12 + i * 8) + '" cy="54" r="3" fill="#fff8d0" class="zb-glow' + (i % 2 ? " zb-g2" : "") + '"/>').join("") +
      '<path d="M' + (x - 18) + ' 62l-40 110h116l-40 -110z" fill="#fff8d0" opacity=".08"/>';
    let stars = "";
    for (let i = 0; i < 14; i++) stars += '<circle cx="' + (12 + i * 29) + '" cy="' + (10 + (i * 37) % 40) + '" r="1.2" fill="#fff" class="zb-tw' + (i % 2 ? " zb-tw2" : "") + '"/>';
    let yard = "";
    for (let i = 0; i < 9; i++) yard += '<path d="M' + (40 + i * 40) + ' 196l' + (-4 + i) + ' 56" stroke="#fff" stroke-width="2" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#zb4)"/>' + stars +
      '<rect x="176" y="60" width="4" height="70" fill="#9aa0a6"/><rect x="220" y="60" width="4" height="70" fill="#9aa0a6"/><path d="M178 60l44 70M222 60l-44 70" stroke="#9aa0a6" stroke-width="1.5"/>' +
      '<ellipse cx="200" cy="50" rx="40" ry="18" fill="#dfe4ea"/><rect x="160" y="40" width="80" height="12" fill="#dfe4ea"/><path d="M160 40q40 -22 80 0" fill="#cfd5dc"/>' +
      '<text x="200" y="56" text-anchor="middle" ' + font + ' font-size="14" fill="' + NAVY + '">OOLOGAH</text>' +
      light(60) + light(340) +
      '<path d="M0 166h400v20h-400z" fill="#5a5f66"/>' + [0, 1, 2].map(r => '<path d="M0 ' + (170 + r * 6) + 'h400" stroke="#8a9098" stroke-width="2"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#2f7a3a"/>' + yard +
      '<path d="M190 196v-30M230 196v-30M190 172h40" stroke="#f2c14e" stroke-width="3" fill="none"/>' +
      '<g class="zb-ball"><g transform="translate(110 222)"><ellipse rx="10" ry="6" fill="#7a3e1e" transform="rotate(-25)"/><path d="M-4 0h8M-2 -2v4M2 -2v4" stroke="#fff" stroke-width="1" transform="rotate(-25)"/></g></g>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" opacity=".85">FRIDAY NIGHT</text>',
      sky("zb4", "#0c1430", "#2a3a6a"));
  }

  /* 5. His corner: Cooweescoowee Ave and Maple St, the old brick Bank of Oologah behind, his name on the wall */
  function zbcorner() {
    const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#zb5)"/>' +
      bricks(150, 70, 190, 130, "#9a4a30", "#5a2414") +
      '<rect x="146" y="62" width="198" height="12" fill="#c9b48a"/><rect x="150" y="196" width="190" height="6" fill="#c9b48a"/>' +
      '<text x="245" y="88" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '">BANK OF OOLOGAH</text>' +
      [168, 228, 288].map(x => '<rect x="' + x + '" y="98" width="34" height="40" fill="#2a3540" stroke="' + CREAM + '" stroke-width="2.5"/><path d="M' + (x + 17) + ' 98v40" stroke="' + CREAM + '" stroke-width="1.5"/>').join("") +
      '<rect x="226" y="150" width="38" height="46" fill="#3a2418" stroke="' + CREAM + '" stroke-width="2"/>' +
      '<rect x="0" y="120" width="146" height="90" fill="#6a5a4a"/><rect x="0" y="116" width="146" height="6" fill="#8a7a6a"/>' +
      tag("ZACH BRYAN", 12, 168, 26, ORANGE, -8) + tag("OOLOGAH", 26, 196, 16, GOLD, -4) +
      '<g class="zb-sp"><circle cx="128" cy="150" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="zb-sp zb-sp2"><circle cx="134" cy="158" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#55585e"/><rect x="0" y="206" width="400" height="5" fill="#b8b2a6"/>' +
      '<rect x="372" y="120" width="5" height="90" fill="#7a7a80"/>' +
      sign(258, 132, 128, "Cooweescoowee Ave") + sign(304, 154, 70, "Maple St") +
      '<g class="zb-flag"><rect x="377" y="178" width="22" height="14" fill="#7fb5e0"/><circle cx="388" cy="185" r="4" fill="#d8c8a0"/></g>',
      sky("zb5", "#f0a060", "#ffe0b0"));
  }

  window.SCENES = { zbhwy: zbhwy, zblake: zblake, zbranch: zbranch, zbfield: zbfield, zbcorner: zbcorner };
})();
