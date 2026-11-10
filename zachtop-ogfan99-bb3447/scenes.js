/* zachtop scenes (Regions: The Northwest / Genres: country; Sunnyside, Washington - born and raised on a farm there, then Pasco). CSS classes prefixed ztx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e9b949", DENIM = "#3f6ea8", RUST = "#c45a32", CREAM = "#f6efe0";
  const css = '<style>' +
    '@keyframes ztxcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.ztx-cl{animation:ztxcloud 14s ease-in-out infinite alternate}' +
    '@keyframes ztxdrive{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.ztx-dr{animation:ztxdrive 10s linear infinite}.ztx-dr2{animation-delay:-5s}' +
    '@keyframes ztxripple{0%{transform:translateX(0);opacity:.7}100%{transform:translateX(30px);opacity:0}}.ztx-rp{animation:ztxripple 2.6s linear infinite}.ztx-rp2{animation-delay:-1.3s}' +
    '@keyframes ztxbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ztx-bm{transform-box:fill-box;transform-origin:50% 0%;animation:ztxbeam 3s ease-in-out infinite}.ztx-bm2{animation-delay:-1.5s}' +
    '@keyframes ztxblink{0%,100%{opacity:.35}50%{opacity:1}}.ztx-bl{animation:ztxblink 1.3s ease-in-out infinite}.ztx-bl2{animation-delay:-.65s}' +
    '@keyframes ztxsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ztx-sw{transform-box:fill-box;transform-origin:50% 100%;animation:ztxsway 1.8s ease-in-out infinite}.ztx-sw2{animation-delay:-.9s}' +
    '@keyframes ztxnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.ztx-nt{animation:ztxnote 2.4s ease-out infinite}.ztx-nt2{animation-delay:-.8s}.ztx-nt3{animation-delay:-1.6s}' +
    '@keyframes ztxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ztx-sp{animation:ztxspray 1.4s ease-out infinite}.ztx-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const clouds = () => '<g class="ztx-cl"><ellipse cx="70" cy="30" rx="38" ry="9" fill="#fff" opacity=".7"/><ellipse cx="100" cy="24" rx="20" ry="7" fill="#fff" opacity=".65"/><ellipse cx="290" cy="22" rx="32" ry="8" fill="#fff" opacity=".6"/></g>';
  /* Mount Adams: broad snowy volcano on the valley's western skyline */
  const adams = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-110 0l70 -54q20 -14 40 -12q22 2 40 14l70 52z" fill="#8a9ab0"/><path d="M-52 -45q30 -26 52 -21q22 2 40 14l-10 10l-14 -6l-12 10l-16 -8l-14 10l-12 -6z" fill="#f7f9fb"/></g>';
  const pickup = (c) => '<rect x="0" y="10" width="70" height="18" rx="4" fill="' + c + '"/><path d="M8 10l8 -12h22l6 12z" fill="' + c + '"/><rect x="18" y="0" width="16" height="9" fill="#9fc3d8"/><circle cx="14" cy="30" r="7" fill="#111"/><circle cx="56" cy="30" r="7" fill="#111"/>';

  /* 1. I-82 Exit 69 into Sunnyside, a pickup pulling off the interstate */
  function ztxexit() {
    return svg(
      '<rect width="400" height="260" fill="url(#ztx1)"/>' + clouds() + adams(90, 140, 0.9) +
      '<path d="M0 140q100 -14 200 -4t200 4v120h-400z" fill="#a8b46a"/>' +
      /* the big green exit sign on two posts */
      '<rect x="226" y="96" width="5" height="90" fill="#777"/><rect x="356" y="96" width="5" height="90" fill="#777"/>' +
      '<rect x="210" y="40" width="168" height="70" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<rect x="318" y="30" width="56" height="14" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="356" y="41" text-anchor="end" ' + font + ' font-size="9" fill="#fff">EXIT 6</text><circle cx="360.6" cy="36.3" r="2.4" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M363 36.3v4.7" stroke="#fff" stroke-width="1.6"/>' +
      '<rect x="222" y="50" width="26" height="20" rx="3" fill="#fff"/><text x="235" y="65" text-anchor="middle" ' + font + ' font-size="11" fill="#111">241</text>' +
      '<text x="300" y="80" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Sunnyside</text><text x="300" y="100" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Mabton</text>' +
      /* interstate */
      '<rect x="0" y="186" width="400" height="74" fill="#4a4744"/><path d="M0 222h400" stroke="#fff" stroke-width="3" stroke-dasharray="20 14"/><rect x="0" y="186" width="400" height="4" fill="#f2d04a"/>' +
      /* the pickup (anim-train slides it in) */
      '<g class="anim-train"><g transform="translate(60 196)">' + pickup(RUST) + '</g></g>' +
      '<g class="ztx-dr"><g transform="translate(0 228) scale(.8)">' + pickup(DENIM) + '</g></g>',
      sky("ztx1", "#7fb4e0", "#e4f0f8"));
  }

  /* 2. The family farm in the Lower Yakima Valley: hop yard trellises, red barn, Mount Adams behind, a tractor rolling */
  function ztxfarm() {
    return svg(
      '<rect width="400" height="260" fill="url(#ztx2)"/>' + clouds() + adams(300, 128, 1.1) +
      '<path d="M0 128q120 -10 240 0t160 0v132h-400z" fill="#7fa65a"/>' +
      /* hop yard: tall poles with wires and green bines */
      [20, 50, 80, 110, 140].map(x => '<rect x="' + x + '" y="76" width="3" height="96" fill="#7a5a3a"/>').join("") + '<path d="M20 78h123" stroke="#555" stroke-width="1"/>' +
      [26, 36, 56, 66, 86, 96, 116, 126].map((x, i) => '<path d="M' + x + ' 170q-4 -46 0 -92" stroke="#3f7a2f" stroke-width="5" fill="none" class="ztx-sw' + (i % 2 ? ' ztx-sw2' : '') + '"/>').join("") +
      /* red barn */
      '<rect x="200" y="120" width="96" height="60" fill="#a8322a" stroke="#5a1814" stroke-width="1.5"/><path d="M194 120l54 -36l54 36z" fill="#7a2420" stroke="#5a1814" stroke-width="1.5"/>' +
      '<rect x="232" y="140" width="32" height="40" fill="' + CREAM + '"/><path d="M232 140l32 40M264 140l-32 40" stroke="#a8322a" stroke-width="3"/><rect x="240" y="98" width="16" height="12" fill="' + CREAM + '"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#8a6a42"/>' + [192, 208, 224, 240].map(y => '<path d="M0 ' + y + 'h400" stroke="#6f5434" stroke-width="2"/>').join("") +
      '<g class="ztx-dr"><rect x="0" y="210" width="40" height="18" fill="#2f7a3a"/><rect x="24" y="196" width="16" height="16" fill="#2f7a3a"/><rect x="27" y="199" width="10" height="9" fill="#9fc3d8"/><circle cx="10" cy="230" r="10" fill="#111"/><circle cx="36" cy="232" r="6" fill="#111"/><rect x="2" y="200" width="3" height="10" fill="#555"/></g>',
      sky("ztx2", "#8cc4ec", "#eaf5fb"));
  }

  /* 3. His two sold-out homecoming nights at the arena in Kennewick (Nov 2025): the arena at night, marquee lit, searchlights */
  function ztxhome() {
    return svg(
      '<rect width="400" height="260" fill="url(#ztx3)"/>' +
      [[30, 20], [90, 40], [150, 14], [260, 30], [350, 18], [210, 50]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="1.4" fill="#fff" class="ztx-bl' + (i % 2 ? ' ztx-bl2' : '') + '"/>').join("") +
      '<g class="ztx-bm"><path d="M110 120l-40 -110h24z" fill="#fff6c8" opacity=".18"/></g><g class="ztx-bm ztx-bm2"><path d="M290 120l40 -110h-24z" fill="#fff6c8" opacity=".18"/></g>' +
      /* low wide arena: tan block walls, a glass entry atrium, a curved roof */
      '<path d="M40 110q160 -40 320 0v90h-320z" fill="#cdbb98" stroke="#6b5a40" stroke-width="1.5"/>' +
      '<path d="M40 110q160 -40 320 0" fill="none" stroke="#8a8a8a" stroke-width="5"/>' +
      [70, 110, 290, 330].map(x => '<rect x="' + (x - 3) + '" y="112" width="6" height="88" fill="#b8a580"/>').join("") +
      '<path d="M140 200v-70h120v70z" fill="#5a86b0" stroke="' + CREAM + '" stroke-width="2"/>' + [160, 180, 200, 220, 240].map(x => '<rect x="' + x + '" y="130" width="2" height="70" fill="' + CREAM + '"/>').join("") +
      '<rect x="128" y="104" width="144" height="24" fill="#1b1b1b" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (134 + i * 10) + '" cy="107" r="1.5" fill="' + GOLD + '" class="ztx-bl' + (i % 2 ? ' ztx-bl2' : '') + '"/>').join("") +
      '<text x="200" y="123" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HOMECOMING  ·  Z. TOP</text>' +
      '<rect x="0" y="200" width="400" height="12" fill="#b9b2a4"/><rect x="0" y="212" width="400" height="48" fill="#3a3836"/>' +
      '<g class="ztx-dr"><g transform="translate(0 220) scale(.7)">' + pickup(RUST) + '</g></g>' +
      ['&#9834;', '&#9835;', '&#9834;'].map((n, i) => '<text x="' + (60 + i * 130) + '" y="96" font-size="18" fill="' + GOLD + '" class="ztx-nt ztx-nt' + (i + 1) + '">' + n + '</text>').join(""),
      sky("ztx3", "#0f1630", "#3a3060"));
  }

  /* 4. The Cable Bridge over the Columbia River, Pasco to Kennewick, where his family moved when he was ten */
  function ztxbridge() {
    return svg(
      '<rect width="400" height="260" fill="url(#ztx4)"/>' + clouds() +
      '<path d="M0 150q60 -18 140 -10t140 -6t120 8v20h-400z" fill="#b8a77a"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3b6f9a"/>' +
      [[40, 186], [150, 210], [260, 194], [330, 230], [90, 240]].map(([x, y], i) => '<path d="M' + x + ' ' + y + 'h26" stroke="#cfe6f4" stroke-width="2" class="ztx-rp' + (i % 2 ? ' ztx-rp2' : '') + '"/>').join("") +
      /* deck */
      '<rect x="0" y="146" width="400" height="10" fill="#d9d6cf" stroke="#8a8780" stroke-width="1"/>' +
      [70, 330].map(x => '<rect x="' + (x - 3) + '" y="156" width="6" height="40" fill="#cfcac0"/>').join("") +
      /* two white pylons with fanned cables */
      [130, 270].map(px => '<rect x="' + (px - 4) + '" y="54" width="8" height="140" fill="#f4f2ec" stroke="#9a978e" stroke-width="1"/>' +
        [-110, -80, -50, -24, 24, 50, 80, 110].map((d, i) => '<path d="M' + px + ' ' + (60 + Math.abs(i - 3.5) * 4) + 'L' + (px + d) + ' 146" stroke="#e8e6df" stroke-width="1.4"/>').join("")).join("") +
      '<g class="ztx-dr"><g transform="translate(0 134) scale(.5)">' + pickup(RUST) + '</g></g><g class="ztx-dr ztx-dr2"><g transform="translate(0 134) scale(.5)">' + pickup(DENIM) + '</g></g>',
      sky("ztx4", "#f2b06a", "#fbe0b8"));
  }

  /* 5. E Edison Ave & S 6th St in downtown Sunnyside, his name on the wall, Snipes Mountain behind */
  function ztxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ztx5)"/>' + clouds() +
      '<path d="M0 124q90 -56 200 -40q90 12 200 26v14h-400z" fill="#9a8a6a"/>' +
      [[60, 112], [100, 100], [140, 94], [180, 90], [220, 92], [260, 98], [300, 104], [340, 110]].map(([x, y]) => '<path d="M' + (x - 16) + ' ' + (y + 6) + 'h32" stroke="#6f8a3a" stroke-width="3"/>').join("") +
      '<rect x="0" y="120" width="400" height="80" fill="#c9b48a" stroke="#8a7458" stroke-width="1.5"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (130 + r * 9) + 'h400" stroke="#b49e74" stroke-width="1"/>').join("") +
      tag("ZACH TOP", 70, 178, 40, GOLD, -5) + tag("TOP STRING", 236, 194, 15, CREAM, -3) +
      '<g class="ztx-sp"><circle cx="232" cy="160" r="2" fill="' + GOLD + '"/><circle cx="238" cy="156" r="1.5" fill="' + GOLD + '"/></g><g class="ztx-sp ztx-sp2"><circle cx="228" cy="154" r="1.6" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="200" width="400" height="12" fill="#b9b2a4"/><rect x="0" y="212" width="400" height="48" fill="#4a4744"/>' +
      '<rect x="352" y="96" width="4" height="116" fill="#555"/>' + sign(304, 96, 92, "E EDISON AVE") + sign(318, 120, 64, "S 6TH ST"),
      sky("ztx5", "#7fb4e0", "#e4f0f8"));
  }

  window.SCENES = { ztxexit, ztxfarm, ztxhome, ztxbridge, ztxcorner };
})();
