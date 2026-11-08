/* nevillebrothers scenes (Regions tab: New Orleans; Uptown, the 13th Ward - the Neville family moved from the Calliope to 1104 Valence St in 1954; the 1000-1100 blocks are now Neville Way). CSS classes and ids prefixed nv- (the page's own anim-train is kept on the bus).
   1 RTA bus 11 (Magazine) pulling up at Magazine St and Cadiz St, one block from Valence St: Uptown storefronts with iron galleries, a live oak.
   2 The Valence St camelback shotgun double where the brothers grew up and Art's Hawketts rehearsed: pastel clapboard, gingerbread brackets, horn, keys and conga on the porch, notes floating out.
   3 The old corner bar at Valence St and Camp St (Benny's Bar, where Cyril jammed): weathered wood, a LIVE MUSIC chalkboard, string bulbs flickering, a conga thumping.
   4 "Yellow Moon": the big yellow moon over a Louisiana bayou, cypress trees with Spanish moss swaying, a pirogue gliding, fireflies.
   5 Valence St and Chestnut St on Neville Way: green signs plus the brown honorary NEVILLE WAY sign, NEVILLE tagged on the wall, the Napoleon Av wharf's container cranes blinking over the river behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nvflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.nv-flk{animation:nvflick 2.2s infinite}.nv-flk2{animation-delay:.8s}' +
    '@keyframes nvnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(36px,-80px);opacity:0}}.nv-note{animation:nvnote 4s linear infinite}.nv-n2{animation-delay:-1.3s}.nv-n3{animation-delay:-2.6s}' +
    '@keyframes nvsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.nv-sway{transform-box:fill-box;transform-origin:50% 0;animation:nvsway 3s ease-in-out infinite}.nv-sw2{animation-delay:-1.5s}' +
    '@keyframes nvglow{0%,100%{opacity:.45}50%{opacity:.9}}.nv-glow{animation:nvglow 3s ease-in-out infinite}' +
    '@keyframes nvboat{0%{transform:translateX(-60px)}100%{transform:translateX(440px)}}.nv-boat{animation:nvboat 16s linear infinite}' +
    '@keyframes nvfly{0%,100%{opacity:0}50%{opacity:1}}.nv-ff{animation:nvfly 1.8s ease-in-out infinite}.nv-f2{animation-delay:-.6s}.nv-f3{animation-delay:-1.2s}' +
    '@keyframes nvthump{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.9)}}.nv-thump{transform-box:fill-box;transform-origin:50% 100%;animation:nvthump .5s ease-in-out infinite}' +
    '@keyframes nvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nv-sp{animation:nvspray 1.4s ease-out infinite}.nv-sp2{animation-delay:.45s}' +
    '@keyframes nvcl{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.nv-cl{animation:nvcl 8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#ffd34d", PURP = "#9b5de5", GRN = "#2ec27e", RTA = "#0a6fb5", SIGN = "#0f6b3a";
  const note = (x, y, c, cls) => '<g class="nv-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="22" fill="' + c + '">&#9834;</text></g>';
  const oak = (x, y, r) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (r * 1.6) + '" fill="#4a3424"/><ellipse cx="' + x + '" cy="' + y + '" rx="' + (r * 1.5) + '" ry="' + r + '" fill="#2f5a2a"/>' +
    '<g class="nv-sway"><path d="M' + (x - r) + ' ' + (y + 4) + 'q3 18 -2 30M' + (x + r * 0.6) + ' ' + (y + 6) + 'q3 16 -1 26" stroke="#9aa58a" stroke-width="3" fill="none" opacity=".8"/></g>';

  /* 1. RTA bus 11 (Magazine) at Magazine St and Cadiz St */
  function nvstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 44) + '" y="98" width="36" height="30" rx="3" fill="#1d2733"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="84" width="320" height="86" rx="10" fill="#f4f5f7" stroke="#9aa3ab" stroke-width="2"/>' + win +
      '<rect x="60" y="136" width="320" height="10" fill="' + RTA + '"/><rect x="60" y="148" width="320" height="3" fill="' + GOLD + '"/>' +
      '<rect x="64" y="96" width="10" height="56" rx="2" fill="#1d2733"/><rect x="66" y="87" width="96" height="10" rx="2" fill="#111"/><text x="114" y="95" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">11 MAGAZINE</text>' +
      '<circle class="nv-flk" cx="66" cy="160" r="3.5" fill="#fff6c2"/><circle cx="120" cy="172" r="12" fill="#222"/><circle cx="120" cy="172" r="5" fill="#777"/><circle cx="320" cy="172" r="12" fill="#222"/><circle cx="320" cy="172" r="5" fill="#777"/></g>';
    const shop = (x, w, body, trim) => '<rect x="' + x + '" y="60" width="' + w + '" height="112" fill="' + body + '"/><rect x="' + x + '" y="92" width="' + w + '" height="5" fill="' + trim + '"/>' +
      '<path d="M' + x + ' 97h' + w + '" stroke="#222" stroke-width="1"/>' + Array.from({ length: Math.floor(w / 12) }, (_, i) => '<path d="M' + (x + 6 + i * 12) + ' 97v14" stroke="#222" stroke-width="1.2"/>').join("") +
      '<rect x="' + (x + 8) + '" y="66" width="14" height="22" fill="#ffd98a" class="nv-flk nv-flk2"/><rect x="' + (x + w - 22) + '" y="66" width="14" height="22" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nvs1)"/>' +
      '<g class="nv-cl"><ellipse cx="80" cy="30" rx="34" ry="8" fill="#fff" opacity=".35"/><ellipse cx="300" cy="22" rx="40" ry="8" fill="#fff" opacity=".3"/></g>' +
      shop(0, 96, "#e9c46a", "#7b3fbf") + shop(100, 104, "#8ecae6", "#1d3557") + shop(208, 92, "#f4a3b4", "#2a9d8f") + shop(304, 96, "#b7e4c7", "#9b2226") +
      oak(372, 66, 26) +
      '<rect x="0" y="176" width="400" height="84" fill="#3b3e44"/><path d="M0 218h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="172" width="400" height="8" fill="#a9a59c"/>' +
      bus +
      '<rect x="388" y="100" width="4" height="78" fill="#555"/><rect x="372" y="78" width="26" height="22" rx="3" fill="' + RTA + '" stroke="#fff" stroke-width="1.5"/><text x="385" y="93" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RTA</text>' +
      '<rect x="70" y="194" width="260" height="50" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="86" y="216" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">MAGAZINE ST &amp;</text>' +
      '<text x="86" y="236" ' + font + ' font-size="15" fill="#f3e3c3" letter-spacing="1">CADIZ ST</text>' +
      '<circle cx="304" cy="219" r="16" fill="' + RTA + '"/><text x="304" y="225" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">11</text>',
      sky("nvs1", "#f6b26b", "#7fb3d5"));
  }

  /* 2. The Valence St camelback shotgun double, instruments on the porch */
  function nvhouse() {
    const boards = Array.from({ length: 11 }, (_, i) => '<path d="M96 ' + (112 + i * 8) + 'h196" stroke="#8fc9b0" stroke-width="1"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<path d="M212 ' + (54 + i * 8) + 'h80" stroke="#8fc9b0" stroke-width="1"/>').join("");
    const col = x => '<rect x="' + x + '" y="114" width="6" height="74" fill="#fbf8f0"/><path d="M' + (x - 8) + ' 114q11 10 22 0" fill="none" stroke="#fbf8f0" stroke-width="3"/>';
    const shutterWin = (x, y) => '<rect x="' + x + '" y="' + y + '" width="22" height="40" fill="#ffd98a" class="nv-flk"/><rect x="' + (x - 9) + '" y="' + y + '" width="8" height="40" fill="#2a6b4f"/><rect x="' + (x + 23) + '" y="' + y + '" width="8" height="40" fill="#2a6b4f"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nvs2)"/>' +
      '<circle cx="340" cy="46" r="20" fill="#ffe7a3" opacity=".9"/>' +
      oak(40, 70, 30) +
      /* camelback: tall rear section */
      '<rect x="210" y="48" width="84" height="66" fill="#a8e0c6" stroke="#4f8f74" stroke-width="2"/><path d="M204 50l48 -24l48 24z" fill="#5b4b6e" stroke="#2f2440" stroke-width="2"/>' +
      '<rect x="240" y="62" width="20" height="30" fill="#ffd98a" class="nv-flk nv-flk2"/>' +
      /* front shotgun double */
      '<rect x="96" y="106" width="196" height="96" fill="#a8e0c6" stroke="#4f8f74" stroke-width="2"/>' + boards +
      '<path d="M88 108l106 -40l106 40z" fill="#5b4b6e" stroke="#2f2440" stroke-width="2"/>' +
      '<path d="M90 114h208" stroke="#fbf8f0" stroke-width="5"/>' + col(98) + col(190) + col(282) +
      shutterWin(118, 132) + shutterWin(250, 132) +
      '<rect x="160" y="128" width="20" height="60" fill="#7a3b2e" stroke="#fbf8f0" stroke-width="2"/><rect x="206" y="128" width="20" height="60" fill="#7a3b2e" stroke="#fbf8f0" stroke-width="2"/>' +
      '<text x="193" y="126" text-anchor="middle" ' + font + ' font-size="7" fill="#2f2440">1104</text>' +
      '<rect x="86" y="188" width="216" height="8" fill="#c8bfae"/><rect x="150" y="196" width="88" height="8" fill="#b5ab98"/><rect x="140" y="204" width="108" height="8" fill="#a89d88"/>' +
      /* instruments on the porch: sax, keyboard, conga */
      '<path d="M152 186v-28q0 -6 5 -6h3v5h-2v26q0 10 -7 10q-8 0 -8 -8v-4h4v4q0 4 4 4q1 0 1 -3z" fill="' + GOLD + '" stroke="#8a6410" stroke-width="1"/>' +
      '<rect x="236" y="170" width="44" height="10" fill="#222"/><rect x="238" y="172" width="40" height="5" fill="#fff"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (241 + i * 6) + '" y="172" width="3" height="3" fill="#111"/>').join("") + '<path d="M242 180v8M274 180v8" stroke="#222" stroke-width="2"/>' +
      '<g class="nv-thump"><path d="M200 188l-4 -22h16l-4 22z" fill="#b5651d" stroke="#5a3010" stroke-width="1.2"/><ellipse cx="204" cy="166" rx="8" ry="2.5" fill="#f3e3c3"/></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#9c978d"/><path d="M0 226h400" stroke="#7d786f" stroke-width="2"/>' +
      note(120, 150, GOLD, "") + note(200, 156, "#ffffff", "nv-n2") + note(250, 160, PURP, "nv-n3"),
      sky("nvs2", "#8ec5ff", "#ffe3b0"));
  }

  /* 3. The old corner bar at Valence and Camp */
  function nvbennys() {
    const planks = Array.from({ length: 16 }, (_, i) => '<path d="M60 ' + (78 + i * 8) + 'h240" stroke="#6b5640" stroke-width="1" opacity=".7"/>').join("");
    const bulbs = Array.from({ length: 11 }, (_, i) => '<circle cx="' + (64 + i * 24) + '" cy="' + (70 + (i % 2) * 4) + '" r="3.5" fill="' + (i % 3 === 0 ? GOLD : i % 3 === 1 ? "#ff8fab" : "#9fffcb") + '" class="nv-flk' + (i % 2 ? " nv-flk2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nvs3)"/>' +
      '<circle cx="330" cy="40" r="14" fill="#fff3c4" opacity=".9"/>' +
      '<rect x="60" y="74" width="240" height="132" fill="#8c7356" stroke="#3d2e1f" stroke-width="2"/>' + planks +
      '<path d="M52 76h256l-10 -18h-236z" fill="#4a3b2c" stroke="#2a2016" stroke-width="2"/>' +
      '<path d="M62 70q120 14 236 0" fill="none" stroke="#222" stroke-width="1"/>' + bulbs +
      /* doors + windows */
      '<rect x="80" y="120" width="40" height="86" fill="#2a1d14" stroke="#e0d3b8" stroke-width="2"/><rect x="86" y="128" width="28" height="32" fill="#ffb347" class="nv-glow"/>' +
      '<rect x="140" y="112" width="60" height="44" fill="#ffb347" class="nv-glow" stroke="#e0d3b8" stroke-width="3"/><path d="M170 112v44" stroke="#e0d3b8" stroke-width="2"/>' +
      '<rect x="220" y="96" width="60" height="22" fill="#1b2a1b" stroke="#e0d3b8" stroke-width="2"/><text x="250" y="111" text-anchor="middle" ' + font + ' font-size="11" fill="#ffd34d">BAR</text>' +
      /* chalkboard */
      '<rect x="216" y="132" width="68" height="50" rx="2" fill="#1f2a24" stroke="#8c7356" stroke-width="3"/>' +
      '<text x="250" y="148" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="9" fill="#fff">LIVE MUSIC</text>' +
      '<text x="250" y="162" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="9" fill="' + GOLD + '">TONIGHT</text>' +
      '<text x="250" y="175" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="7" fill="#9fffcb">NO COVER</text>' +
      /* conga by the door */
      '<g class="nv-thump"><path d="M130 206l-6 -34h22l-6 34z" fill="#b5651d" stroke="#5a3010" stroke-width="1.5"/><ellipse cx="135" cy="172" rx="11" ry="3" fill="#f3e3c3"/></g>' +
      /* street signs + sidewalk */
      '<rect x="0" y="206" width="400" height="54" fill="#9c978d"/><path d="M0 220h400" stroke="#7d786f" stroke-width="2"/>' +
      '<rect x="336" y="96" width="5" height="112" fill="#5a5a5a"/>' +
      '<rect x="300" y="86" width="78" height="17" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="339" y="98" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">VALENCE ST</text>' +
      '<rect x="306" y="106" width="66" height="17" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="339" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CAMP ST</text>' +
      note(170, 104, GOLD, "") + note(110, 110, "#ffffff", "nv-n2") + note(200, 100, "#ff8fab", "nv-n3"),
      sky("nvs3", "#1a1036", "#7b3fbf"));
  }

  /* 4. Yellow Moon over the bayou */
  function nvmoon() {
    const cypress = (x, h, s) => '<path d="M' + (x - 10 * s) + ' 200q' + (6 * s) + ' -10 ' + (8 * s) + ' -' + h + 'h' + (4 * s) + 'q' + (2 * s) + ' ' + (h - 10) + ' ' + (8 * s) + ' ' + h + 'z" fill="#0f1a14"/>' +
      '<ellipse cx="' + x + '" cy="' + (200 - h) + '" rx="' + (26 * s) + '" ry="' + (10 * s) + '" fill="#13241a"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (210 - h) + '" rx="' + (16 * s) + '" ry="' + (7 * s) + '" fill="#13241a"/>' +
      '<g class="nv-sway' + (s < 1 ? " nv-sw2" : "") + '"><path d="M' + (x - 18 * s) + ' ' + (204 - h) + 'q2 20 -2 34M' + (x + 8 * s) + ' ' + (206 - h) + 'q3 16 0 28M' + (x - 2 * s) + ' ' + (208 - h) + 'q-2 12 1 22" stroke="#6f7f6a" stroke-width="2.5" fill="none" opacity=".85"/></g>';
    const ff = (x, y, c) => '<circle cx="' + x + '" cy="' + y + '" r="2" fill="#fff59d" class="nv-ff ' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nvs4)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 70) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<circle cx="200" cy="84" r="62" fill="' + GOLD + '" opacity=".25" class="nv-glow"/><circle cx="200" cy="84" r="46" fill="' + GOLD + '"/>' +
      '<circle cx="184" cy="72" r="7" fill="#e8b830" opacity=".6"/><circle cx="214" cy="96" r="9" fill="#e8b830" opacity=".5"/><circle cx="216" cy="66" r="4" fill="#e8b830" opacity=".6"/>' +
      /* water + moon reflection */
      '<rect x="0" y="196" width="400" height="64" fill="#0b1a2a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (180 - i * 3) + '" y="' + (204 + i * 9) + '" width="' + (40 + i * 6) + '" height="3" rx="1.5" fill="' + GOLD + '" opacity="' + (0.7 - i * 0.1) + '" class="nv-glow"/>').join("") +
      cypress(40, 120, 1.1) + cypress(110, 86, 0.8) + cypress(330, 110, 1) + cypress(384, 80, 0.7) +
      /* pirogue */
      '<g class="nv-boat"><path d="M0 214q30 8 60 0l-6 6q-24 5 -48 0z" fill="#2a1a10"/><path d="M28 212v-16" stroke="#2a1a10" stroke-width="2"/><path d="M28 198l18 18" stroke="#2a1a10" stroke-width="1.5"/></g>' +
      ff(80, 160, "") + ff(150, 176, "nv-f2") + ff(270, 168, "nv-f3") + ff(300, 150, "") + ff(240, 186, "nv-f2") + ff(60, 186, "nv-f3"),
      sky("nvs4", "#070b24", "#2c1a4a"));
  }

  /* 5. Valence St and Chestnut St on Neville Way */
  function nvcorner() {
    const boards = Array.from({ length: 14 }, (_, r) => '<path d="M0 ' + (128 + r * 8) + 'h220" stroke="#3a2a52" stroke-width="1" opacity=".6"/>').join("");
    const crane = (x, c) => '<g><path d="M' + x + ' 150v-70M' + (x + 22) + ' 150v-70M' + x + ' 80h22M' + x + ' 108h22M' + x + ' 150l22 -42M' + (x + 22) + ' 150l-22 -42" stroke="' + c + '" stroke-width="3" fill="none"/>' +
      '<path d="M' + (x - 40) + ' 84h110" stroke="' + c + '" stroke-width="5"/><rect x="' + (x + 2) + '" y="70" width="18" height="12" fill="' + c + '"/>' +
      '<circle cx="' + (x + 70) + '" cy="84" r="3" fill="#ff4a4a" class="nv-flk"/><circle cx="' + (x - 40) + '" cy="84" r="3" fill="#ff4a4a" class="nv-flk nv-flk2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nvs5)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + (8 + (i * 23) % 50) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      /* river + wharf cranes behind */
      '<rect x="150" y="140" width="250" height="14" fill="#1c3a5a"/>' + crane(250, "#3d7ab8") + crane(338, "#c0392b") +
      '<rect x="226" y="134" width="60" height="8" fill="#5a3a2a"/><rect x="232" y="126" width="14" height="8" fill="#2e86ab"/><rect x="248" y="126" width="14" height="8" fill="#e76f51"/><rect x="264" y="126" width="14" height="8" fill="' + GOLD + '"/>' +
      /* clapboard wall + tag */
      '<rect x="0" y="122" width="220" height="138" fill="#4b3a6a"/>' + boards +
      tag("NEVILLE", 10, 196, 40, GOLD, -7) + tag("FIYO", 130, 234, 24, GRN, -4) +
      '<g class="nv-sp"><circle cx="196" cy="182" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="nv-sp nv-sp2"><circle cx="204" cy="186" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      /* street */
      '<rect x="0" y="236" width="400" height="24" fill="#9c978d"/><rect x="220" y="154" width="180" height="82" fill="#3b3e44"/><path d="M220 196h180" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      /* pole + green signs + brown honorary sign */
      '<rect x="306" y="150" width="5" height="86" fill="#5a5a5a"/>' +
      '<rect x="258" y="142" width="100" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="308" y="155" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">VALENCE ST</text>' +
      '<rect x="262" y="164" width="92" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="308" y="177" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CHESTNUT ST</text>' +
      '<rect x="264" y="186" width="88" height="18" rx="2" fill="#6b3f1f" stroke="#fff" stroke-width="1.5"/><text x="308" y="199" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">NEVILLE WAY</text>',
      sky("nvs5", "#120b2a", "#7b3fbf"));
  }

  window.SCENES = { nvstation: nvstation, nvhouse: nvhouse, nvbennys: nvbennys, nvmoon: nvmoon, nvcorner: nvcorner };
})();
