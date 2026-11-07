/* Bun B scenes (Regions tab: Houston + Texas; Port Arthur, "PA", "a Port Arthur state of mind"). CSS classes prefixed bb- (the page's own anim-train is kept).
   1 Beaumont station (Amtrak Sunset Limited, the closest train stop to Port Arthur): the 2012 red-brick depot on the single side platform, a silver bi-level train gliding in.
   2 The Rainbow Bridge over the Neches River (Port Arthur to Bridge City): the tall steel cantilever hump, the white cable-stayed Veterans Memorial Bridge beside it, a tanker sliding under.
   3 Pleasure Island seawall on Sabine Lake at dusk: the Port Arthur refinery towers across the water with flares flickering, pelicans gliding.
   4 Rice University, Houston (Bun B teaches "Religion and Hip Hop Culture" there): Lovett Hall's arched sallyport in tan brick with pink-and-gray stone, red tile roof, live oaks, a grackle hopping.
   5 17th St and Woodworth Blvd in Port Arthur (where the city's UGK tribute mural faces): green signs, BUN B tagged on the wall, a candy-painted slab gliding past, refinery stacks and the Rainbow Bridge hump behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bbflick{0%,100%{opacity:1;transform:scaleY(1)}40%{opacity:.7;transform:scaleY(.8)}60%{opacity:.95;transform:scaleY(1.15)}}.bb-flk{animation:bbflick 1.1s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.bb-flk2{animation-delay:-.5s}' +
    '@keyframes bbship{from{transform:translateX(-200px)}to{transform:translateX(460px)}}.bb-ship{animation:bbship 22s linear infinite}' +
    '@keyframes bbcar{from{transform:translateX(-190px)}to{transform:translateX(560px)}}.bb-car{animation:bbcar 9s linear infinite}' +
    '@keyframes bbglide{0%{transform:translate(-60px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(470px,0)}}.bb-bird{animation:bbglide 14s linear infinite}.bb-bird2{animation-delay:-5s}.bb-bird3{animation-delay:-9s}' +
    '@keyframes bbwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.bb-wave{animation:bbwave 4s ease-in-out infinite}' +
    '@keyframes bbhop{0%,100%{transform:translate(0,0)}25%{transform:translate(6px,-6px)}50%{transform:translate(12px,0)}75%{transform:translate(6px,-4px)}}.bb-hop{animation:bbhop 2.4s ease-in-out infinite}' +
    '@keyframes bbsway{0%,100%{transform:rotate(0)}50%{transform:rotate(1.6deg)}}.bb-sway{animation:bbsway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes bbblink{0%,100%{opacity:.25}50%{opacity:1}}.bb-bl{animation:bbblink 1.6s ease-in-out infinite}.bb-bl2{animation-delay:-.8s}' +
    '@keyframes bbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bb-sp{animation:bbspray 1.4s ease-out infinite}.bb-sp2{animation-delay:.45s}' +
    '@keyframes bbsmk{0%{transform:translate(0,0);opacity:.6}100%{transform:translate(16px,-28px);opacity:0}}.bb-smk{animation:bbsmk 3.2s ease-out infinite}.bb-smk2{animation-delay:-1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "bb-bl" + (i % 2 ? " bb-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 60) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const PURP = "#b07cff", GOLD = "#ffd23f", CANDY = "#ff4f6d", BLUE = "#1d5c9e";
  const oak = (x, base, s) => '<g class="bb-sway"><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3624"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a2e"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (10 * s) + '" fill="#3c6e38"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (base - 42 * s) + '" rx="' + (15 * s) + '" ry="' + (9 * s) + '" fill="#3c6e38"/></g>';
  const pelican = (cls) => '<g class="' + cls + '"><path d="M0 0q8 -7 16 0q8 -7 16 0" stroke="#3a3a3a" stroke-width="2.4" fill="none"/><path d="M16 0l9 2" stroke="#d8a23a" stroke-width="2"/></g>';
  /* refinery skyline used in scenes 3 and 5 */
  const refinery = (y, sc, glow) => {
    let g = '<g transform="translate(0 ' + y + ') scale(1 ' + sc + ')">';
    [[20, 50, 12], [60, 70, 10], [96, 40, 18], [150, 86, 8], [176, 60, 14], [230, 74, 10], [262, 46, 20], [314, 90, 7], [338, 58, 16], [380, 66, 10]].forEach(([x, h, w], i) => {
      g += '<rect x="' + x + '" y="' + (-h) + '" width="' + w + '" height="' + h + '" fill="#2a2d36"/>';
      if (i % 3 === 0) g += '<rect x="' + (x + w / 2 - 1) + '" y="' + (-h - 22) + '" width="2" height="22" fill="#2a2d36"/><path class="bb-flk' + (i % 2 ? " bb-flk2" : "") + '" d="M' + (x + w / 2 - 4) + ' ' + (-h - 22) + 'q4 -14 4 -16q4 6 4 16z" fill="' + glow + '"/>';
      if (i % 2) g += '<circle class="bb-bl' + (i % 4 ? " bb-bl2" : "") + '" cx="' + (x + w / 2) + '" cy="' + (-h + 6) + '" r="1.6" fill="#ffd27a"/>';
    });
    [[120, 22], [206, 18], [296, 24]].forEach(([x, r]) => g += '<rect x="' + (x - r) + '" y="-14" width="' + (2 * r) + '" height="14" fill="#353945"/><ellipse cx="' + x + '" cy="-14" rx="' + r + '" ry="4" fill="#424754"/>');
    return g + '<rect x="0" y="0" width="400" height="3" fill="#2a2d36"/></g>';
  };
  /* Rainbow Bridge truss hump, drawn at a scale */
  const rainbow = (tx, ty, s, col) => {
    let g = '<g transform="translate(' + tx + ' ' + ty + ') scale(' + s + ')" stroke="' + col + '" fill="none">';
    g += '<path d="M0 60L60 50L110 8Q160 -6 210 8L260 50L320 60" stroke-width="4"/><path d="M0 70H320" stroke-width="5"/><path d="M60 70V50M260 70V50" stroke-width="3"/>';
    for (let i = 0; i <= 10; i++) { const x = 60 + i * 20; const top = x < 110 ? 50 - (x - 60) * 0.84 : x > 210 ? 8 + (x - 210) * 0.84 : 8 - Math.sin((x - 110) / 100 * Math.PI) * 7; g += '<path d="M' + x + ' 70V' + top.toFixed(1) + '" stroke-width="1.6"/>'; if (i < 10) { const x2 = x + 20; const t2 = x2 < 110 ? 50 - (x2 - 60) * 0.84 : x2 > 210 ? 8 + (x2 - 210) * 0.84 : 8 - Math.sin((x2 - 110) / 100 * Math.PI) * 7; g += '<path d="M' + x + ' 70L' + x2 + ' ' + t2.toFixed(1) + '" stroke-width="1.2"/>'; } }
    return g + '</g>';
  };

  /* 1. Beaumont station, Amtrak Sunset Limited */
  function bbstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (48 + i * 44) + '" y="114" width="30" height="13" rx="2" fill="#1c2630"/><rect x="' + (48 + i * 44) + '" y="138" width="30" height="13" rx="2" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 180V102q0 -8 10 -8h306q26 0 30 34v52z" fill="#c9ced4" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="157" width="346" height="5" fill="#c8102e"/><rect x="24" y="163" width="346" height="3" fill="#fff"/><rect x="24" y="167" width="346" height="5" fill="' + BLUE + '"/>' +
      '<path d="M344 100q20 6 24 30h-24z" fill="#1c2630"/><circle cx="360" cy="172" r="3.5" fill="#fff6c2"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (30 + i * 28) + ' 96v84" stroke="#b3b9c0" stroke-width=".8"/>').join("") + '</g>';
    const brick = Array.from({ length: 7 }, (_, r) => '<path d="M150 ' + (54 + r * 8) + 'h120" stroke="#7d3326" stroke-width=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbs1)"/>' +
      oak(26, 98, 1) + oak(380, 98, 0.9) +
      '<rect x="146" y="46" width="128" height="52" fill="#a8483a"/>' + brick + '<path d="M138 48l72 -24l72 24z" fill="#5a3a30"/>' +
      '<rect x="166" y="64" width="22" height="28" fill="#2a3440"/><rect x="198" y="60" width="26" height="38" fill="#3a4a58"/><rect x="232" y="64" width="22" height="28" fill="#2a3440"/>' +
      '<rect x="60" y="80" width="70" height="18" fill="#8a8f96"/><rect x="290" y="80" width="70" height="18" fill="#8a8f96"/>' +
      train +
      '<rect x="0" y="184" width="400" height="7" fill="#f2c200"/><rect x="0" y="191" width="400" height="69" fill="#b8b2a6"/><path d="M0 226h400" stroke="#9a948a" stroke-width="2"/>' +
      '<rect x="58" y="202" width="284" height="38" rx="3" fill="#111"/><text x="76" y="227" ' + font + ' font-size="19" fill="#fff">Beaumont</text>' + badge(250, 221, "AMTRAK", BLUE),
      sky("bbs1", "#5f95d6", "#f4cfa2"));
  }

  /* 2. Rainbow Bridge + Veterans Memorial Bridge over the Neches */
  function bbbridge() {
    const vet = '<g><path d="M0 170H400" stroke="#d9dcdf" stroke-width="5"/><rect x="286" y="64" width="9" height="106" fill="#eef0f2"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M290 70L' + (300 + i * 16) + ' 170M290 70L' + (280 - i * 16) + ' 170" stroke="#f4f4f4" stroke-width=".9"/>').join("") + '</g>';
    const ship = '<g class="bb-ship"><path d="M0 196h150l-10 16H8z" fill="#7a1f1f"/><rect x="0" y="186" width="150" height="10" fill="#2b2f36"/><rect x="112" y="166" width="28" height="20" fill="#f1f1f1"/><rect x="116" y="170" width="20" height="4" fill="#2a3440"/><rect x="124" y="156" width="6" height="10" fill="#c9b07a"/>' +
      '<path d="M18 186v-6h80v6" fill="#3b4048"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbs2)"/>' +
      '<circle cx="70" cy="56" r="20" fill="#ffe7a6" opacity=".9"/>' +
      '<path d="M0 150q60 -10 120 -4q80 8 160 -2q60 -6 120 2v40H0z" fill="#557a46"/>' +
      vet + rainbow(16, 100, 1.15, "#aeb6bf") +
      '<path d="M0 132v62M384 132v62" stroke="#9aa2ab" stroke-width="6"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4e6f86"/>' +
      '<g class="bb-wave">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' ' + (220 + (i % 3) * 10) + 'q10 -4 20 0" stroke="#8fb3c8" stroke-width="2" fill="none"/>').join("") + '</g>' +
      ship +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#e7eef3" opacity=".85">NECHES RIVER</text>',
      sky("bbs2", "#7fb2e0", "#f3d9b4"));
  }

  /* 3. Pleasure Island seawall, Sabine Lake, refinery lights across */
  function bbseawall() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbs3)"/>' + stars(10) +
      '<circle cx="320" cy="70" r="16" fill="#ffb067" opacity=".85"/>' +
      refinery(150, 1, "#ffb347") +
      '<rect x="0" y="150" width="400" height="56" fill="#3b4f6b"/>' +
      '<g class="bb-wave">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 36) + ' ' + (162 + (i % 3) * 12) + 'q9 -3 18 0" stroke="#ffb067" stroke-width="1.6" fill="none" opacity=".7"/>').join("") + '</g>' +
      '<path d="M0 206L400 196V260H0z" fill="#9c958a"/><path d="M0 206L400 196" stroke="#c9c2b6" stroke-width="4"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 48) + ' ' + (210 - i * 1.2) + 'l20 50" stroke="#8a8378" stroke-width="2"/>').join("") +
      '<rect x="60" y="176" width="4" height="30" fill="#5a4a3a"/><rect x="250" y="172" width="4" height="30" fill="#5a4a3a"/>' +
      '<g transform="translate(0 60)">' + pelican("bb-bird") + '</g><g transform="translate(0 84)">' + pelican("bb-bird bb-bird2") + '</g><g transform="translate(0 46)">' + pelican("bb-bird bb-bird3") + '</g>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#3a332a">SABINE LAKE · PLEASURE ISLAND</text>',
      sky("bbs3", "#2b2350", "#f08a5d"));
  }

  /* 4. Rice University, Lovett Hall sallyport */
  function bbrice() {
    const col = x => '<rect x="' + x + '" y="98" width="8" height="64" fill="#e6d3b3"/><rect x="' + (x - 2) + '" y="94" width="12" height="5" fill="#cdb48c"/>';
    const arch = x => '<path d="M' + x + ' 162V118q0 -20 20 -20q20 0 20 20v44z" fill="#3a2c22"/>';
    const stripes = Array.from({ length: 6 }, (_, i) => '<rect x="78" y="' + (66 + i * 6) + '" width="244" height="2" fill="#c89a8a" opacity=".55"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbs4)"/>' +
      oak(30, 176, 1.4) + oak(372, 176, 1.3) +
      '<path d="M70 62L200 30L330 62z" fill="#b5523b"/><path d="M70 62h260" stroke="#8a3a28" stroke-width="3"/>' +
      '<rect x="78" y="62" width="244" height="100" fill="#d8b98e"/>' + stripes +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (86 + i * 30) + '" y="70" width="12" height="18" rx="6" fill="#4a3a2e"/>').join("") +
      '<path d="M160 162V112q0 -40 40 -40q40 0 40 40v50z" fill="#2c221b"/><path d="M160 112q0 -40 40 -40q40 0 40 40" stroke="#efe0c4" stroke-width="5" fill="none"/>' +
      '<path d="M176 162V120q0 -24 24 -24q24 0 24 24v42z" fill="#8fb3d8" opacity=".55"/>' +
      arch(92) + arch(268) + col(150) + col(242) + col(84) + col(308) +
      '<rect x="0" y="162" width="400" height="98" fill="#6f9a52"/><path d="M160 162L120 260H280L240 162z" fill="#c8bba0"/>' +
      '<g class="bb-hop" transform="translate(300 214)"><ellipse cx="0" cy="0" rx="9" ry="5" fill="#1a1a22"/><circle cx="8" cy="-4" r="4" fill="#1a1a22"/><path d="M11 -4l5 1" stroke="#222" stroke-width="1.6"/><path d="M-8 -1l-12 -3" stroke="#1a1a22" stroke-width="3"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#20331a">LOVETT HALL · RICE UNIVERSITY</text>',
      sky("bbs4", "#6fa8e4", "#d9ecf8"));
  }

  /* 5. 17th St and Woodworth Blvd, Port Arthur */
  function bbcorner() {
    const slab = '<g class="bb-car"><path d="M0 238v-14q2 -8 14 -10l22 -4l18 -14h64l20 14l20 4q8 2 8 10v14z" fill="' + PURP + '" stroke="#3a1f5a" stroke-width="2"/><path d="M58 210l12 -10h44l12 10z" fill="#25303c"/>' +
      '<path d="M8 222h150" stroke="#e8d6ff" stroke-width="1.5" opacity=".7"/>' +
      [34, 134].map(x => '<circle cx="' + x + '" cy="240" r="11" fill="#d8dde2" stroke="#555" stroke-width="2"/>' + Array.from({ length: 6 }, (_, k) => '<path d="M' + x + ' 240L' + (x + 13 * Math.cos(k * 1.05)).toFixed(1) + ' ' + (240 + 13 * Math.sin(k * 1.05)).toFixed(1) + '" stroke="#b9c0c8" stroke-width="2.4"/>').join("") + '<circle cx="' + x + '" cy="240" r="3" fill="' + GOLD + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbs5)"/>' + stars(12) +
      rainbow(180, 40, 0.62, "#8c94a0") + '<g opacity=".9">' + refinery(126, 0.8, "#ffb347") + '</g>' +
      '<rect x="0" y="122" width="400" height="104" fill="#d9cdb4"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (138 + i * 16) + 'h400" stroke="#c4b79c" stroke-width="1"/>').join("") +
      '<rect x="0" y="122" width="400" height="6" fill="#7a6f5c"/>' +
      tag("BUN B", 22, 196, 60, PURP, -6) + tag("UGK", 214, 176, 30, GOLD, -4) + tag("TRILL", 196, 214, 22, CANDY, -3) +
      '<rect x="0" y="222" width="400" height="38" fill="#4d4a46"/><rect x="0" y="220" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="92" width="6" height="130" fill="#2f2f2f"/>' + sign(262, 94, 132, "17th St") + sign(250, 120, 146, "Woodworth Blvd") +
      '<rect x="8" y="108" width="4" height="114" fill="#222"/><circle class="bb-bl" cx="10" cy="106" r="7" fill="#ffe9a8"/>' +
      '<g class="bb-sp"><circle cx="196" cy="160" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="bb-sp bb-sp2"><circle cx="202" cy="154" r="2" fill="' + PURP + '" opacity=".6"/></g>' +
      slab,
      sky("bbs5", "#1d1438", "#c85a7a"));
  }

  window.SCENES = { bbstation: bbstation, bbbridge: bbbridge, bbseawall: bbseawall, bbrice: bbrice, bbcorner: bbcorner };
})();
