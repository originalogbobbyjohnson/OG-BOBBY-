/* maclethal scenes (Regions tab: Kansas City; Raytown, KC). CSS classes and ids prefixed ml- (the page's own anim-train is kept).
   1 The Westport stop on the KC Streetcar (Main St line): the shelter, the black sign with the streetcar bullet, the white-and-blue streetcar sliding in under the wires.
   2 The Nelson-Atkins lawn: the limestone museum and its columns, two of the giant white Shuttlecocks on the grass, birds crossing.
   3 Kauffman Stadium ("Royals Cap"): the crown scoreboard, the outfield fountains spraying, the blue seats.
   4 The kitchen where he flipped pancakes on camera: the griddle, a pancake flipping off the spatula, steam, the mic on its stand.
   5 Raytown Rd and E 63rd St in Raytown: green signs, MAC LETHAL tagged on the wall, the KC skyline far off with the silver shells of the Kauffman Center. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mlflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ml-flk{animation:mlflick 2.4s infinite}.ml-flk2{animation-delay:.8s}' +
    '@keyframes mlglow{0%,100%{opacity:.45}50%{opacity:1}}.ml-glow{animation:mlglow 2.2s ease-in-out infinite}.ml-g2{animation-delay:-1.1s}' +
    '@keyframes mlbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.ml-bird{animation:mlbird 10s linear infinite}.ml-bird2{animation-delay:-5s}' +
    '@keyframes mlcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.ml-cloud{animation:mlcloud 26s linear infinite}.ml-cloud2{animation-delay:-13s}' +
    '@keyframes mljet{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}.ml-jet{transform-box:fill-box;transform-origin:50% 100%;animation:mljet 1.4s ease-in-out infinite}.ml-jet2{animation-delay:-.7s}' +
    '@keyframes mlflip{0%{transform:translate(0,0) rotate(0)}45%{transform:translate(0,-64px) rotate(180deg)}90%,100%{transform:translate(0,0) rotate(360deg)}}.ml-flip{transform-box:fill-box;transform-origin:50% 50%;animation:mlflip 1.8s ease-in-out infinite}' +
    '@keyframes mlsteam{0%{transform:translateY(0);opacity:.6}100%{transform:translateY(-40px);opacity:0}}.ml-st{animation:mlsteam 2s ease-out infinite}.ml-st2{animation-delay:-.7s}.ml-st3{animation-delay:-1.4s}' +
    '@keyframes mlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ml-sp{animation:mlspray 1.4s ease-out infinite}.ml-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ml-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const SKY = "#3fb8f0", CLOVER = "#3ccf6e", CAKE = "#f2b632", STRC = "#1b75bb", ROYAL = "#174885";

  /* 1. The Westport stop on the KC Streetcar's Main St line: overhead wire, the glass shelter, the black sign with the STRC bullet, the white streetcar with its blue band sliding in, brick storefronts behind */
  function mlstation() {
    const tr = '<g class="anim-train"><path d="M24 128h300q24 0 24 24v40h-324z" fill="#f2f4f6" stroke="#8a929c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (40 + i * 54) + '" y="138" width="40" height="26" rx="3" fill="#1d2833"/>').join("") +
      '<path d="M326 140q16 2 18 18v6h-18z" fill="#1d2833"/>' +
      '<rect x="24" y="170" width="324" height="8" fill="' + STRC + '"/><rect x="24" y="178" width="324" height="3" fill="#9ed2f2"/>' +
      '<circle cx="340" cy="186" r="3.5" fill="#fff6c2"/><path d="M170 128l-12 -20h40" stroke="#2a2f36" stroke-width="2.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ml1)"/>' +
      [[0, 40, "#9a4a32"], [70, 54, "#b0623e"], [140, 30, "#8a3e2c"], [230, 48, "#a8583a"], [310, 36, "#93492f"]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + (b[0] === 140 ? 90 : 80) + '" height="' + (130 - b[1]) + '" fill="' + b[2] + '"/>' +
        Array.from({ length: 3 }, (_, i) => '<rect x="' + (b[0] + 10 + i * 24) + '" y="' + (b[1] + 12) + '" width="14" height="18" fill="#2a3442"/>').join("")).join("") +
      '<path d="M0 104h400" stroke="#222" stroke-width="1.5"/>' +
      '<rect x="0" y="120" width="400" height="76" fill="#5e6168"/><path d="M0 194h400" stroke="#8a8e95" stroke-width="2"/>' +
      tr +
      '<rect x="0" y="196" width="400" height="6" fill="#e8e4dc"/><rect x="0" y="202" width="400" height="58" fill="#b8b2a8"/>' +
      /* shelter */
      '<rect x="250" y="76" width="130" height="8" fill="#3d4a56"/><rect x="254" y="84" width="4" height="118" fill="#3d4a56"/><rect x="372" y="84" width="4" height="118" fill="#3d4a56"/><rect x="262" y="88" width="104" height="104" fill="#bfe3f5" opacity=".25"/>' +
      '<rect x="24" y="22" width="210" height="36" rx="3" fill="#111"/><text x="38" y="46" ' + font + ' font-size="17" fill="#fff">Westport</text>' + badge(154, 40, "STRC", STRC) +
      '<path d="M128 58v18" stroke="#3d4a56" stroke-width="4"/>' +
      '<rect class="ml-flk" x="270" y="86" width="90" height="3" fill="#fff8dc"/>',
      sky("ml1", "#86c2ec", "#f2e2c8"));
  }

  /* 2. The Nelson-Atkins lawn: the long pale limestone museum with its column porch, two giant white Shuttlecocks on the grass, clouds and birds moving */
  function mlshuttle() {
    const cock = (x, y, s, rot) => '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ') scale(' + s + ')">' +
      '<path d="M-34 -70l34 64l34 -64q-34 -14 -68 0z" fill="#fbfbf6" stroke="#b9b6a8" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M0 -6L' + (-30 + i * 10) + ' -68" stroke="#cfccbe" stroke-width="1.5"/>').join("") +
      '<path d="M-30 -40q30 8 60 0" stroke="#e2dfd2" stroke-width="3" fill="none"/>' +
      '<ellipse cx="0" cy="2" rx="16" ry="12" fill="#e9b27a" stroke="#a4703a" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ml2)"/>' +
      '<g class="ml-cloud" fill="#fff" opacity=".85"><ellipse cx="60" cy="40" rx="34" ry="12"/><ellipse cx="84" cy="34" rx="22" ry="12"/></g><g class="ml-cloud ml-cloud2" fill="#fff" opacity=".8"><ellipse cx="60" cy="24" rx="28" ry="10"/></g>' +
      /* the museum */
      '<rect x="60" y="70" width="280" height="60" fill="#e6dfcc"/><rect x="54" y="64" width="292" height="8" fill="#d8d0ba"/><rect x="150" y="50" width="100" height="16" fill="#e6dfcc"/><path d="M146 52l54 -18l54 18z" fill="#d8d0ba"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (158 + i * 12) + '" y="72" width="6" height="52" fill="#f3eee0"/>').join("") +
      [80, 110, 270, 300].map(x => '<rect x="' + x + '" y="84" width="16" height="26" fill="#b8b09a"/>').join("") +
      '<rect x="150" y="124" width="100" height="8" fill="#cfc7b0"/>' +
      '<path d="M0 132h400v128h-400z" fill="#5fa04a"/><path d="M0 132q200 -10 400 0" fill="#6cae54"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' ' + (150 + (i % 3) * 30) + 'l4 -6l4 6" stroke="#4e8a3c" stroke-width="1.5" fill="none"/>').join("") +
      cock(96, 232, 1.05, -8) + cock(318, 196, .7, 150) +
      '<g class="ml-bird"><path d="M0 54q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="ml-bird ml-bird2"><path d="M0 30q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("ml2", "#7ec0ee", "#e6f2fa"));
  }

  /* 3. Kauffman Stadium: the tall crown scoreboard with the gold crown on top, the outfield fountains spraying, royal blue seats, the green field */
  function mlkauffman() {
    return svg(
      '<rect width="400" height="260" fill="url(#ml3)"/>' + stars(10) +
      /* crown scoreboard */
      '<rect x="166" y="44" width="68" height="100" fill="#1a1d24" stroke="#c9ced6" stroke-width="3"/><rect x="176" y="56" width="48" height="36" fill="#0e3a6a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect class="ml-glow' + (i % 2 ? " ml-g2" : "") + '" x="' + (180 + i * 7) + '" y="100" width="4" height="10" fill="' + CAKE + '"/>').join("") +
      '<path d="M162 44l10 -24l12 14l16 -22l16 22l12 -14l10 24z" fill="' + CAKE + '" stroke="#8a6a10" stroke-width="2"/><circle cx="200" cy="12" r="4" fill="' + CAKE + '"/>' +
      '<rect x="196" y="144" width="8" height="20" fill="#5a5e66"/>' +
      /* outfield fountains */
      '<rect x="0" y="150" width="400" height="18" fill="#2c6aa0"/>' +
      [30, 70, 110, 290, 330, 370].map((x, i) => '<rect class="ml-jet' + (i % 2 ? " ml-jet2" : "") + '" x="' + (x - 3) + '" y="118" width="6" height="34" rx="3" fill="#cfefff" opacity=".85"/>').join("") +
      '<path d="M0 168h400" stroke="#fff" stroke-width="1" opacity=".5"/>' +
      /* seats and field */
      '<path d="M0 100l120 40h-120z" fill="' + ROYAL + '"/><path d="M400 100l-120 40h120z" fill="' + ROYAL + '"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#3e8a3a"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="168" width="25" height="92" fill="#469a42"/>').join("") +
      '<path d="M120 260l80 -60l80 60" fill="#b8865a"/><rect x="194" y="214" width="12" height="4" fill="#fff"/>',
      sky("ml3", "#0c1c3e", "#4a6ea8"));
  }

  /* 4. The kitchen where he rapped while flipping pancakes: tile backsplash, the griddle on the stove, a pancake flipping off the spatula, steam rising, a stack on the plate, the mic on its stand */
  function mlkitchen() {
    return svg(
      '<rect width="400" height="260" fill="#f1ead8"/>' +
      Array.from({ length: 9 }, (_, r) => Array.from({ length: 17 }, (_, c) => '<rect x="' + (c * 24) + '" y="' + (40 + r * 14) + '" width="23" height="13" fill="' + ((r + c) % 2 ? "#e2ecf2" : "#d6e4ee") + '"/>').join("")).join("") +
      '<rect x="0" y="0" width="400" height="40" fill="#c9b48a"/>' + [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="4" width="76" height="32" rx="2" fill="#b39c70" stroke="#8a7650" stroke-width="2"/><circle cx="' + (x + 66) + '" cy="20" r="2.5" fill="#6a5a3a"/>').join("") +
      /* window */
      '<rect x="290" y="56" width="90" height="70" fill="#9fd0f2" stroke="#fff" stroke-width="5"/><path d="M335 56v70M290 91h90" stroke="#fff" stroke-width="4"/>' +
      /* counter, stove and griddle */
      '<rect x="0" y="168" width="400" height="92" fill="#7a5a3e"/><rect x="0" y="162" width="400" height="10" fill="#d8d2c6"/>' +
      '<rect x="80" y="150" width="190" height="16" rx="3" fill="#2a2a2e"/><rect x="90" y="146" width="170" height="8" rx="2" fill="#3a3a40"/>' +
      [120, 180, 230].map(x => '<ellipse cx="' + x + '" cy="146" rx="18" ry="4" fill="' + CAKE + '" stroke="#a8701a" stroke-width="1.5"/>').join("") +
      '<g class="ml-flip"><ellipse cx="180" cy="110" rx="20" ry="6" fill="' + CAKE + '" stroke="#a8701a" stroke-width="2"/></g>' +
      '<path d="M206 146l40 -26" stroke="#555" stroke-width="4"/><rect x="190" y="140" width="24" height="6" rx="2" fill="#777"/>' +
      [110, 170, 230].map((x, i) => '<path class="ml-st' + (i ? " ml-st" + (i + 1) : "") + '" d="M' + x + ' 138q-6 -10 0 -18t0 -18" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>').join("") +
      /* stack on a plate */
      '<ellipse cx="44" cy="160" rx="30" ry="6" fill="#fff" stroke="#bbb" stroke-width="1.5"/>' + Array.from({ length: 5 }, (_, i) => '<ellipse cx="44" cy="' + (154 - i * 6) + '" rx="22" ry="5" fill="' + CAKE + '" stroke="#a8701a" stroke-width="1.2"/>').join("") +
      '<path d="M36 124q8 8 16 0v6q-8 6 -16 0z" fill="#e8c27a"/>' +
      /* mic on a stand */
      '<path d="M330 260v-110M314 260h32" stroke="#2a2a2e" stroke-width="4"/><path d="M330 150l-10 -14" stroke="#2a2a2e" stroke-width="3"/><rect x="310" y="114" width="12" height="24" rx="6" fill="#bfc4cc" stroke="#555" stroke-width="1.5" transform="rotate(-30 316 126)"/>',
      "");
  }

  /* 5. Raytown Rd and E 63rd St in Raytown: green signs, MAC LETHAL tagged on the brick wall, the downtown KC skyline far off with the silver shells of the Kauffman Center */
  function mlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ml5)"/>' + stars(12) +
      '<g fill="#232a44">' + [[30, 70, 20], [54, 50, 16], [74, 80, 22], [250, 66, 20], [274, 42, 18], [296, 76, 22], [322, 58, 16]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (128 - b[1]) + '"/>').join("") + '</g>' +
      /* Kauffman Center: the stacked silver shells */
      '<path d="M120 128q20 -70 52 -76q-10 40 -10 76z" fill="#b9c2cc"/><path d="M150 128q22 -62 50 -64q-8 36 -8 64z" fill="#cfd6de"/><path d="M182 128q22 -56 48 -54q-8 32 -8 54z" fill="#a9b3be"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (132 + i * 22) + ' 128q8 -40 26 -56" stroke="#8d97a3" stroke-width="1" fill="none"/>').join("") +
      Array.from({ length: 24 }, (_, i) => '<rect class="' + (i % 5 ? "" : "ml-glow") + '" x="' + [34, 58, 78, 254, 278, 300, 326, 40, 84, 260][i % 10] + '" y="' + (60 + (i * 13) % 60) + '" width="3" height="3" fill="#ffd98a" opacity=".7"/>').join("") +
      '<path d="M0 128h400v12h-400z" fill="#1d3a26"/>' + [40, 90, 330, 370].map(x => '<circle cx="' + x + '" cy="128" r="12" fill="#1d3a26"/>').join("") +
      '<rect x="0" y="140" width="400" height="84" fill="#7a4232"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("MAC LETHAL", 14, 192, 42, SKY, -5) + tag("BLACK CLOVER", 24, 218, 18, CLOVER, -3) + tag("RAYTOWN", 186, 216, 20, CAKE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(296, 106, 100, "Raytown Rd") + sign(296, 132, 100, "E 63rd St") +
      '<g class="ml-sp"><circle cx="270" cy="160" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="ml-sp ml-sp2"><circle cx="276" cy="154" r="2" fill="' + SKY + '" opacity=".6"/></g>',
      sky("ml5", "#10163a", "#d0704a"));
  }

  window.SCENES = { mlstation: mlstation, mlshuttle: mlshuttle, mlkauffman: mlkauffman, mlkitchen: mlkitchen, mlcorner: mlcorner };
})();
