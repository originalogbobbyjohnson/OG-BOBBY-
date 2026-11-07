/* lilwyte scenes (Regions tab: Memphis + Tennessee; Frayser, North Memphis). CSS classes and ids prefixed lw- (the page's own anim-train is kept).
   1 MATA Route 11 Frayser bus pulling up at Frayser Plaza (Frayser Blvd & Overton Crossing St).
   2 Meeman-Shelby Forest, just north of Frayser: tall hardwoods on the bluff over the Mississippi (his first group was the Shelby Forest Click).
   3 The 80 acres in Tipton County from "Come Ride": bonfire, an old Cadillac in the field, sun coming up.
   4 I-40 at night, the tour van heading out (he says he spends his winters on the road, doing shows every weekend).
   5 Frayser Blvd & Watkins St in Frayser: green signs, LIL WYTE tagged on the wall, the Memphis-Arkansas Bridge's steel truss behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lwflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lw-flk{animation:lwflick 2.2s infinite}.lw-flk2{animation-delay:.7s}' +
    '@keyframes lwfire{0%,100%{transform:scaleY(1) scaleX(1)}50%{transform:scaleY(1.25) scaleX(.9)}}.lw-fire{transform-box:fill-box;transform-origin:bottom center;animation:lwfire .5s ease-in-out infinite}.lw-f2{animation-delay:-.25s}' +
    '@keyframes lwember{0%{transform:translate(0,0);opacity:1}100%{transform:translate(10px,-60px);opacity:0}}.lw-emb{animation:lwember 2s ease-out infinite}.lw-e2{animation-delay:-.7s}.lw-e3{animation-delay:-1.4s}' +
    '@keyframes lwsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lw-sway{transform-box:fill-box;transform-origin:bottom center;animation:lwsway 3s ease-in-out infinite}.lw-sw2{animation-delay:-1.5s}' +
    '@keyframes lwtw{0%,100%{opacity:.3}50%{opacity:1}}.lw-tw{animation:lwtw 1.8s ease-in-out infinite}.lw-tw2{animation-delay:-.9s}' +
    '@keyframes lwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lw-sp{animation:lwspray 1.4s ease-out infinite}.lw-sp2{animation-delay:.45s}' +
    '@keyframes lwcar{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.lw-car{animation:lwcar 7s linear infinite;animation-delay:-2.5s}' +
    '@keyframes lwdash{from{stroke-dashoffset:0}to{stroke-dashoffset:-56}}.lw-dash{animation:lwdash .6s linear infinite}' +
    '@keyframes lwbird{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.lw-bird{animation:lwbird 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="lw-tw' + (i % 2 ? ' lw-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 80) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const MATA = "#1f4e79", RED = "#c8102e", LIME = "#a3e635", ROSE = "#fb7185", WHITE = "#f1f5f9", FIRE = "#ff9f1c";

  /* 1. MATA Route 11 Frayser at Frayser Plaza */
  function lwstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">11 FRAYSER</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    /* a long low strip-mall plaza with a tall pylon sign (no store names) */
    return svg(
      '<rect width="400" height="260" fill="url(#lws1)"/>' +
      '<rect x="20" y="70" width="300" height="46" fill="#d9cbb0"/><rect x="20" y="64" width="300" height="10" fill="#8a3b2a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (30 + i * 48) + '" y="82" width="38" height="28" fill="#2a3a4c" opacity=".85"/><rect x="' + (30 + i * 48) + '" y="76" width="38" height="5" fill="' + [LIME, ROSE, "#ffd166", "#7ad1ff", LIME, ROSE][i] + '"/>').join("") +
      '<rect x="346" y="40" width="8" height="76" fill="#555"/><rect x="326" y="30" width="48" height="40" rx="3" fill="#1d2330" stroke="#888" stroke-width="2"/>' +
      '<text x="350" y="46" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">FRAYSER</text><text class="lw-flk" x="350" y="60" text-anchor="middle" ' + font + ' font-size="9" fill="' + LIME + '">PLAZA</text>' +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="22" y="204" width="330" height="44" rx="3" fill="#111"/><text x="34" y="222" ' + font + ' font-size="13" fill="#fff">Frayser Plaza</text><text x="34" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Frayser Blvd &amp; Overton Crossing</text>' +
      badge(240, 222, "MATA", MATA) + badge(296, 222, "11", RED),
      sky("lws1", "#3a5f9a", "#ffc48a"));
  }

  /* 2. Meeman-Shelby Forest: hardwoods on the bluff over the river */
  function lwforest() {
    const tree = (x, h, c, cls) => '<g class="lw-sway ' + (cls || "") + '"><rect x="' + (x - 3) + '" y="' + (200 - h) + '" width="6" height="' + h + '" fill="#4a3324"/><ellipse cx="' + x + '" cy="' + (200 - h) + '" rx="' + (h * .32) + '" ry="' + (h * .42) + '" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lws2)"/>' +
      '<circle cx="318" cy="56" r="20" fill="#fff3c4" opacity=".85"/>' +
      '<g class="lw-bird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      /* the river far below the bluff on the right */
      '<path d="M240 150q60 -10 160 -6v40H240z" fill="#4f7f9a"/><path d="M250 160h140M262 170h120" stroke="#8fb8cc" stroke-width="1.5" stroke-dasharray="16 10"/>' +
      '<path d="M0 140q120 -20 250 6l10 54H0z" fill="#5f7a3a"/>' +
      tree(30, 110, "#2f5d2a") + tree(80, 130, "#3b6e31", "lw-sw2") + tree(130, 100, "#4a7d36") + tree(180, 120, "#2f5d2a", "lw-sw2") + tree(226, 96, "#c8782a") + tree(270, 70, "#3b6e31") +
      '<rect x="0" y="200" width="400" height="60" fill="#3d5228"/><path d="M0 200h400" stroke="#2c3d1c" stroke-width="3"/>' +
      /* a wooden park sign */
      '<rect x="40" y="206" width="6" height="40" fill="#5a3a22"/><rect x="154" y="206" width="6" height="40" fill="#5a3a22"/><rect x="30" y="200" width="140" height="34" rx="3" fill="#7a4e2a" stroke="#4a2e16" stroke-width="2"/>' +
      '<text x="100" y="215" text-anchor="middle" ' + font + ' font-size="9" fill="#f4e6c8">MEEMAN</text><text x="100" y="228" text-anchor="middle" ' + font + ' font-size="11" fill="#f4e6c8">SHELBY FOREST</text>' +
      '<rect x="230" y="222" width="150" height="24" rx="4" fill="#111" opacity=".85"/><text x="305" y="238" text-anchor="middle" ' + font + ' font-size="10" fill="' + LIME + '">SHELBY FOREST CLICK</text>',
      sky("lws2", "#5aa0d8", "#e8f2d0"));
  }

  /* 3. The 80 acres in Tipton County: bonfire, Cadillac, sun coming up */
  function lwfield() {
    const flame = '<g transform="translate(200 206)"><path class="lw-fire" d="M-20 0q-6 -30 8 -42q2 16 10 10q-4 -20 10 -34q4 26 14 30q6 -10 4 -20q14 16 4 56z" fill="' + FIRE + '"/><path class="lw-fire lw-f2" d="M-10 0q-2 -18 8 -24q2 10 8 6q0 -12 6 -18q6 18 2 36z" fill="#ffe066"/></g>' +
      [0, 1, 2].map(i => '<circle class="lw-emb' + (i ? ' lw-e' + (i + 1) : '') + '" cx="' + (194 + i * 8) + '" cy="168" r="2" fill="#ffd166"/>').join("");
    const logs = '<path d="M172 210l56 -10M172 200l56 10" stroke="#5a3a22" stroke-width="8" stroke-linecap="round"/>';
    const caddy = '<g><path d="M262 200v-14q0 -6 8 -8l18 -12h44l18 12q16 2 18 10v12z" fill="#e8e2d2" stroke="#7a7466" stroke-width="2"/><path d="M294 180l8 -10h28l10 10z" fill="#5a7a9a"/><rect x="262" y="194" width="106" height="4" fill="#bbb"/><circle cx="286" cy="202" r="9" fill="#222"/><circle cx="286" cy="202" r="4" fill="#ccc"/><circle cx="346" cy="202" r="9" fill="#222"/><circle cx="346" cy="202" r="4" fill="#ccc"/><path d="M366 186l6 -12" stroke="#e8e2d2" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lws3)"/>' +
      '<circle cx="80" cy="150" r="30" fill="#ffd166" opacity=".9"/>' +
      '<path d="M0 150q100 -18 200 -6t200 -4v60H0z" fill="#6b8a3a"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 158l20 50" stroke="#5a7a2e" stroke-width="2"/>').join("") +
      /* tree line and a fence */
      '<g fill="#2f4a26">' + Array.from({ length: 9 }, (_, i) => '<circle cx="' + (150 + i * 30) + '" cy="' + (140 - (i % 3) * 4) + '" r="16"/>').join("") + '</g>' +
      '<path d="M0 176h400M0 186h400" stroke="#8a6a4a" stroke-width="2"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40) + '" y="170" width="4" height="22" fill="#6a4a2a"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#4f6a2a"/>' +
      logs + flame + caddy +
      /* folding lawn chairs */
      '<path d="M120 214l10 -22h16l-6 22M126 204h18" stroke="' + ROSE + '" stroke-width="3" fill="none"/>' +
      '<rect x="24" y="226" width="140" height="24" rx="4" fill="#111" opacity=".85"/><text x="94" y="242" text-anchor="middle" ' + font + ' font-size="10" fill="' + FIRE + '">80 ACRES · TIPTON CO.</text>',
      sky("lws3", "#3a3a6a", "#ff9a6a"));
  }

  /* 4. I-40 at night, the tour van heading out */
  function lwroad() {
    const van = '<g class="lw-car"><rect x="0" y="196" width="96" height="34" rx="6" fill="' + WHITE + '"/><rect x="70" y="200" width="24" height="14" rx="3" fill="#2a3a4c"/><rect x="10" y="200" width="54" height="14" rx="2" fill="#2a3a4c"/><rect x="0" y="216" width="96" height="5" fill="' + LIME + '"/>' +
      '<circle cx="20" cy="232" r="8" fill="#111"/><circle cx="76" cy="232" r="8" fill="#111"/><path d="M96 220l60 -8v18z" fill="#fff6c2" opacity=".35"/><circle cx="94" cy="222" r="3" fill="#fff6c2"/></g>';
    /* a generic interstate shield: blue body, red top, white number */
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h40v10q0 26 -20 34q-20 -8 -20 -34z" fill="#1f4e9a" stroke="#fff" stroke-width="2"/><path d="M' + x + ' ' + y + 'h40v10h-40z" fill="#c8102e"/><text x="' + (x + 20) + '" y="' + (y + 32) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">40</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#lws4)"/>' + stars(22) +
      '<circle cx="330" cy="40" r="14" fill="#f4f1e8"/><circle cx="336" cy="36" r="13" fill="#141a30"/>' +
      '<path d="M0 150q100 -20 200 -8t200 -6v50H0z" fill="#1a2418"/>' +
      /* the big green overhead sign on its gantry */
      '<rect x="60" y="40" width="6" height="140" fill="#666"/><rect x="334" y="40" width="6" height="140" fill="#666"/><rect x="60" y="40" width="280" height="6" fill="#777"/>' +
      '<rect x="96" y="50" width="208" height="70" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(110, 60) +
      '<text x="234" y="80" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">EAST</text><text x="234" y="104" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Nashville</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#2e2e33"/>' +
      '<path class="lw-dash" d="M0 214h400" stroke="#e8d36b" stroke-width="3" stroke-dasharray="28 28"/><path d="M0 182h400M0 256h400" stroke="#ddd" stroke-width="2"/>' +
      van +
      '<rect x="240" y="232" width="150" height="22" rx="4" fill="#111" opacity=".85"/><text x="315" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="' + LIME + '">ON THE ROAD · SHOWS</text>',
      sky("lws4", "#0b1024", "#2a2a5a"));
  }

  /* 5. Frayser Blvd & Watkins St */
  function lwcorner() {
    /* the Memphis-Arkansas Bridge: a long steel cantilever truss */
    const truss = '<g stroke="#5a6478" stroke-width="2" fill="none"><path d="M10 108h380"/><path d="M40 108l40 -34h80l40 34l40 -34h80l40 34"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (80 + i * 20) + ' 74v34"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (80 + i * 20) + ' 74l20 34"/>').join("") + '</g>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="lw-flk' + (i % 2 ? ' lw-flk2' : '') + '" cx="' + (20 + i * 40) + '" cy="106" r="2" fill="#ffe9a8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lws5)"/>' + stars(18) + truss +
      '<rect x="0" y="124" width="400" height="100" fill="#3a3a40"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (132 + i * 8) + 'h400" stroke="#2c2c32" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (124 + i * 8) + 'v8" stroke="#2c2c32" stroke-width="1"/>').join("")).join("") +
      tag("LIL WYTE", 20, 196, 46, LIME, -6) + tag("FRAYSER", 36, 150, 18, ROSE, -4) + tag("DOUBT ME NOW", 150, 216, 17, WHITE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="lw-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="' + WHITE + '"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#c8ccd2"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(272, 94, 120, "Frayser Blvd") + sign(284, 124, 96, "Watkins St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="lw-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="lw-sp"><circle cx="252" cy="172" r="3" fill="' + LIME + '" opacity=".7"/></g><g class="lw-sp lw-sp2"><circle cx="258" cy="166" r="2" fill="' + LIME + '" opacity=".6"/></g>',
      sky("lws5", "#101828", "#4a6a8a"));
  }

  window.SCENES = { lwstop: lwstop, lwforest: lwforest, lwfield: lwfield, lwroad: lwroad, lwcorner: lwcorner };
})();
