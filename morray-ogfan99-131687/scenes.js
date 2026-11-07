/* morray scenes (Regions tab: The Carolinas; Fayetteville, NC). CSS classes prefixed mr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mrflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.mr-flk{animation:mrflick 2.6s infinite}.mr-flk2{animation-delay:.9s}' +
    '@keyframes mrglow{0%,100%{opacity:.45}50%{opacity:1}}.mr-glow{animation:mrglow 2.4s ease-in-out infinite}.mr-g2{animation-delay:-1.2s}' +
    '@keyframes mrripple{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.mr-rp{transform-box:fill-box;transform-origin:50% 50%;animation:mrripple 2.6s ease-out infinite}.mr-rp2{animation-delay:-1.3s}' +
    '@keyframes mrflow{0%{transform:translateX(0)}100%{transform:translateX(-60px)}}.mr-flow{animation:mrflow 4s linear infinite}' +
    '@keyframes mrsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mr-sw{transform-box:fill-box;transform-origin:50% 100%;animation:mrsway 1.6s ease-in-out infinite}.mr-sw2{animation-delay:-.8s}' +
    '@keyframes mrbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mr-bm{transform-box:fill-box;transform-origin:50% 0%;animation:mrbeam 4s ease-in-out infinite}.mr-bm2{animation-delay:-2s}' +
    '@keyframes mrball{0%{transform:translate(0,0)}50%{transform:translate(120px,-70px)}100%{transform:translate(240px,0);opacity:0}}.mr-ball{animation:mrball 3.2s ease-out infinite}' +
    '@keyframes mrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mr-sp{animation:mrspray 1.4s ease-out infinite}.mr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mr-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="0" width="4" height="22" fill="#3a2a1e"/><path d="M0 -40l12 18h-6l10 14h-7l9 12h-36l9 -12h-7l10 -14h-6z" fill="#1f4a32"/></g>';
  const BLUE = "#7cc6ff", GOLD = "#f2c14e", RED = "#e8505b", R7 = "#2e7d32", R14 = "#7b3fa0";

  /* 1. FAST Transit Center, 505 Franklin St, downtown Fayetteville: the long bus canopy on steel columns, the black sign with the Route 7 and 14 badges, a FAST bus pulling into the bay */
  function mrstation() {
    const bus = '<g class="anim-train"><rect x="30" y="136" width="250" height="70" rx="9" fill="#f4f4f2" stroke="#8a9198" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="148" width="34" height="28" rx="3" fill="#22303c"/>').join("") +
      '<rect x="36" y="148" width="30" height="52" rx="2" fill="#22303c"/><rect x="30" y="182" width="250" height="6" fill="' + BLUE + '"/><rect x="30" y="190" width="250" height="3" fill="' + RED + '"/>' +
      '<rect x="34" y="138" width="90" height="10" rx="2" fill="#111"/><text x="79" y="146" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">7  RAEFORD RD</text>' +
      '<circle cx="76" cy="206" r="12" fill="#222"/><circle cx="76" cy="206" r="5" fill="#9aa1a8"/><circle cx="236" cy="206" r="12" fill="#222"/><circle cx="236" cy="206" r="5" fill="#9aa1a8"/><circle cx="34" cy="196" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mr1)"/>' +
      '<g fill="#3a4250"><rect x="0" y="70" width="70" height="60"/><rect x="300" y="56" width="50" height="74"/><rect x="350" y="80" width="50" height="50"/></g>' +
      /* canopy */
      '<path d="M0 64L400 52v14L0 80z" fill="#c9ced6"/><path d="M0 80L400 66v6L0 86z" fill="#8a9198"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 4) + '" y="70" width="8" height="140" fill="#5a6470"/>').join("") +
      [80, 200, 320].map((x, i) => '<rect class="mr-flk' + (i === 1 ? " mr-flk2" : "") + '" x="' + x + '" y="78" width="50" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="206" width="400" height="8" fill="#d8d2c4"/><rect x="0" y="214" width="400" height="46" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      bus +
      /* station sign */
      '<rect x="292" y="96" width="5" height="114" fill="#2f2f2f"/><rect x="232" y="92" width="160" height="52" rx="3" fill="#111" stroke="#444" stroke-width="1"/>' +
      '<text x="242" y="110" ' + font + ' font-size="12.5" fill="#fff">FAST Transit Center</text><text x="242" y="124" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#c9ced6">505 Franklin St</text>' +
      badge(354, 128, "7", R7) + badge(378, 128, "14", R14),
      sky("mr1", "#f6a96a", "#ffe2b8"));
  }

  /* 2. The Cape Fear River below downtown: a sandbar going soft at the water's edge (quicksand), a bike on its kickstand on the bank, the river bridge, longleaf pines, the current moving */
  function mrriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#mr2)"/>' +
      '<circle cx="320" cy="56" r="22" fill="#ffe7a8" opacity=".9"/>' +
      pine(20, 92, 1.1) + pine(52, 98, .9) + pine(360, 94, 1.05) + pine(388, 100, .85) +
      /* bridge */
      '<rect x="0" y="92" width="400" height="10" fill="#9aa1a8"/><rect x="0" y="88" width="400" height="4" fill="#c9ced6"/>' +
      [70, 170, 270, 350].map(x => '<rect x="' + (x - 6) + '" y="102" width="12" height="40" fill="#8a9198"/>').join("") +
      /* water */
      '<rect x="0" y="130" width="400" height="60" fill="#5a7a6a"/>' +
      '<g class="mr-flow">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (140 + (i % 3) * 14) + 'q10 -4 20 0" stroke="#a8c4b4" stroke-width="2" fill="none"/>').join("") + '</g>' +
      /* sandbar */
      '<path d="M0 260V176q80 -22 170 -6q90 16 140 0q50 -16 90 -4V260z" fill="#d9c08a"/>' +
      '<ellipse cx="200" cy="214" rx="56" ry="14" fill="#b89a62"/><ellipse class="mr-rp" cx="200" cy="214" rx="30" ry="7" fill="none" stroke="#8a6e3e" stroke-width="2"/><ellipse class="mr-rp mr-rp2" cx="200" cy="214" rx="30" ry="7" fill="none" stroke="#8a6e3e" stroke-width="2"/>' +
      /* bike on its kickstand */
      '<g transform="translate(300 190)"><circle cx="0" cy="22" r="14" fill="none" stroke="#2a2a2e" stroke-width="3"/><circle cx="46" cy="22" r="14" fill="none" stroke="#2a2a2e" stroke-width="3"/>' +
      '<path d="M0 22L16 0h22l8 22M16 0l10 22h20M38 0l-4 -10h8M16 0l-3 -8h-8" stroke="' + RED + '" stroke-width="3" fill="none" stroke-linejoin="round"/><path d="M26 22l-8 16" stroke="#555" stroke-width="2.5"/></g>' +
      '<rect x="16" y="212" width="124" height="24" rx="3" fill="#111" opacity=".75"/><text x="78" y="228.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CAPE FEAR RIVER</text>',
      sky("mr2", "#8fc2e8", "#f6e2c0"));
  }

  /* 3. The church choir loft he sang in as a kid: pews, the choir in robes swaying, stained-glass windows glowing, the hymn board */
  function mrchoir() {
    const robe = (x, c, k) => '<g class="mr-sw' + (k ? " mr-sw2" : "") + '"><circle cx="' + x + '" cy="118" r="9" fill="#5a3e2e"/><path d="M' + (x - 14) + ' 168q0 -38 14 -40q14 2 14 40z" fill="' + c + '"/><path d="M' + (x - 5) + ' 130l5 8l5 -8" fill="' + GOLD + '"/></g>';
    const glass = x => '<g class="mr-glow' + (x > 200 ? " mr-g2" : "") + '"><path d="M' + x + ' 96v-46q20 -26 40 0v46z" fill="#22304a"/>' +
      '<path d="M' + (x + 4) + ' 60q16 -20 32 0v14h-32z" fill="' + BLUE + '" opacity=".8"/><rect x="' + (x + 4) + '" y="74" width="16" height="20" fill="' + GOLD + '" opacity=".85"/><rect x="' + (x + 20) + '" y="74" width="16" height="20" fill="' + RED + '" opacity=".8"/><path d="M' + (x + 20) + ' 52v42M' + (x + 4) + ' 74h32" stroke="#1a1a1a" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#efe4cf"/><rect x="0" y="0" width="400" height="20" fill="#7a5a3a"/>' +
      glass(30) + glass(330) +
      '<rect x="96" y="30" width="208" height="66" rx="4" fill="#8a2a2e"/><path d="M200 38v50M180 54h40" stroke="' + GOLD + '" stroke-width="5"/>' +
      '<rect x="80" y="140" width="240" height="34" fill="#7a5a3a"/>' +
      robe(110, "#5a2a6e", 0) + robe(150, "#5a2a6e", 1) + robe(190, "#5a2a6e", 0) + robe(230, "#5a2a6e", 1) + robe(270, "#5a2a6e", 0) + robe(130, "#6a3a7e", 1) + robe(250, "#6a3a7e", 1) +
      '<rect x="80" y="166" width="240" height="10" fill="#5a3e2a"/>' +
      [190, 222].map(y => '<rect x="20" y="' + y + '" width="160" height="20" rx="3" fill="#6a4a30"/><rect x="220" y="' + y + '" width="160" height="20" rx="3" fill="#6a4a30"/>').join("") +
      '<rect x="0" y="244" width="400" height="16" fill="#8a2a2e"/>' +
      '<rect x="330" y="120" width="56" height="56" rx="3" fill="#2a2a2e"/><text x="358" y="136" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">HYMNS</text>' +
      '<text x="358" y="152" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">STREET</text><text x="358" y="167" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">SERMONS</text>',
      "");
  }

  /* 4. Segra Stadium, the ballpark downtown off Hay St and Ray Ave: red-brick grandstand, green field, light towers sweeping at night, a ball flying out */
  function mrstadium() {
    return svg(
      '<rect width="400" height="260" fill="url(#mr4)"/>' + stars(16) +
      [40, 360].map(x => '<rect x="' + (x - 3) + '" y="20" width="6" height="110" fill="#5a6470"/><rect x="' + (x - 22) + '" y="10" width="44" height="16" rx="2" fill="#3a4250"/>' +
        Array.from({ length: 6 }, (_, i) => '<circle class="mr-glow' + (i % 2 ? " mr-g2" : "") + '" cx="' + (x - 16 + i * 6.4) + '" cy="18" r="2.4" fill="#fffbe0"/>').join("")).join("") +
      '<path class="mr-bm" d="M40 26l-40 150h80z" fill="#fff8d0" opacity=".12"/><path class="mr-bm mr-bm2" d="M360 26l-40 150h80z" fill="#fff8d0" opacity=".12"/>' +
      /* grandstand */
      '<path d="M60 130h280v-40h-280z" fill="#8a3a2a"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (70 + i * 30) + '" y="98" width="20" height="24" rx="10" fill="#1d2430"/>').join("") +
      '<rect x="56" y="84" width="288" height="8" fill="#5a2418"/><rect x="150" y="60" width="100" height="26" rx="3" fill="#1a1a1e"/>' +
      '<text x="200" y="78" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" class="mr-flk">DOWNTOWN</text>' +
      /* field */
      '<path d="M0 260V150q200 -30 400 0V260z" fill="#2f7d3e"/><path d="M200 250l-70 -50l70 -40l70 40z" fill="#b8865a"/><path d="M200 242l-52 -40l52 -30l52 30z" fill="#3a8c48"/>' +
      [[200, 242], [148, 202], [200, 172], [252, 202]].map(p => '<rect x="' + (p[0] - 4) + '" y="' + (p[1] - 4) + '" width="8" height="8" fill="#fff" transform="rotate(45 ' + p[0] + ' ' + p[1] + ')"/>').join("") +
      '<g class="mr-ball"><circle cx="90" cy="200" r="4" fill="#fff"/></g>',
      sky("mr4", "#0c1630", "#3a4a7a"));
  }

  /* 5. Murchison Rd and Rowan St, just north of downtown: green signs, MORRAY tagged big on the cinder-block wall, the old Prince Charles building lit up downtown behind */
  function mrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mr5)"/>' + stars(12) +
      /* Prince Charles building: brick tower, stone trim, rows of lit windows */
      '<rect x="150" y="40" width="90" height="100" fill="#8a4a34"/><rect x="146" y="34" width="98" height="8" fill="#d8ccb4"/><rect x="146" y="70" width="98" height="4" fill="#d8ccb4"/>' +
      Array.from({ length: 5 }, (_, r) => Array.from({ length: 6 }, (_, c) => '<rect class="' + ((r + c) % 3 ? "" : "mr-glow") + '" x="' + (158 + c * 13) + '" y="' + (48 + r * 18) + '" width="7" height="10" fill="' + ((r * 6 + c) % 4 ? "#ffd98a" : "#2a3442") + '"/>').join("")).join("") +
      '<g fill="#1e2638"><rect x="0" y="92" width="80" height="48"/><rect x="88" y="104" width="56" height="36"/><rect x="250" y="88" width="56" height="52"/><rect x="314" y="100" width="86" height="40"/></g>' +
      pine(26, 112, .7) + pine(380, 112, .7) +
      /* wall */
      '<rect x="0" y="136" width="400" height="90" fill="#bfb8aa"/>' + Array.from({ length: 6 }, (_, r) => Array.from({ length: 11 }, (_, c) => '<rect x="' + (c * 40 + (r % 2) * 20 - 20) + '" y="' + (136 + r * 15) + '" width="38" height="13" fill="none" stroke="#a8a294" stroke-width="1.2"/>').join("")).join("") +
      tag("STREET SERMONS", 24, 164, 19, GOLD, -4) + tag("MORRAY", 18, 206, 54, BLUE, -6) + tag("PICK SIX", 236, 184, 20, "#fff", -4) + tag("FAYETTEVILLE", 160, 218, 18, RED, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="94" width="6" height="132" fill="#2f2f2f"/>' + sign(286, 96, 106, "Murchison Rd") + sign(298, 122, 82, "Rowan St") +
      '<g class="mr-sp"><circle cx="150" cy="166" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="mr-sp mr-sp2"><circle cx="156" cy="160" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("mr5", "#14203e", "#d0784a"));
  }

  window.SCENES = { mrstation: mrstation, mrriver: mrriver, mrchoir: mrchoir, mrstadium: mrstadium, mrcorner: mrcorner };
})();
