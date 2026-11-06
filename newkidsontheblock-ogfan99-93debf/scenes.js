/* newkidsontheblock scenes (Regions tab: Boston + New England; Dorchester). CSS classes and ids prefixed nk- (the page's own anim-train is kept).
   1 Shawmut on the Red Line (Ashmont branch), Dorchester: the underground side platform in the shallow tunnel, cream tile walls, the silver train with its red band sliding in. Melville Ave, where the Knight brothers grew up, is a few blocks away.
   2 The William Monroe Trotter School on Humboldt Ave, Roxbury: the low brick school where the four Dorchester boys were bussed and first met, the yellow bus pulling up, the flag waving.
   3 Melville Ave, Dorchester: the three-story 1880 Victorian where Jordan and Jonathan grew up, and the old carriage house out back where they rehearsed and shot photos and the "Games" video, music notes and a camera flash.
   4 Dorchester Ave pizza counter (Hi-Fi Pizza at 1508 Dorchester Ave, their after-rehearsal spot): brick storefront, red awning, PIZZA neon flickering, steam rising, cars rolling past.
   5 Dorchester Ave and Melville Ave: green signs, NKOTB tagged on the brick, the gray granite Gothic tower of All Saints' Church at Peabody Square behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.nk-flk{animation:nkflick 2.2s infinite}.nk-flk2{animation-delay:.7s}' +
    '@keyframes nkcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.nk-car{animation:nkcar 7s linear infinite}.nk-car2{animation-delay:-3.5s}' +
    '@keyframes nkbus{0%{transform:translateX(-260px)}45%,75%{transform:translateX(0)}100%{transform:translateX(480px)}}.nk-bus{animation:nkbus 9s ease-in-out infinite}' +
    '@keyframes nkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.nk-flag{transform-box:fill-box;transform-origin:0 50%;animation:nkflag 1.6s ease-in-out infinite}' +
    '@keyframes nknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.nk-note{animation:nknote 3s ease-out infinite}.nk-note2{animation-delay:-1s}.nk-note3{animation-delay:-2s}' +
    '@keyframes nkflash{0%,86%,100%{opacity:0}88%{opacity:1}92%{opacity:.2}}.nk-flash{animation:nkflash 3.4s linear infinite}' +
    '@keyframes nksteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-34px);opacity:0}}.nk-steam{animation:nksteam 2.4s ease-out infinite}.nk-steam2{animation-delay:-1.2s}' +
    '@keyframes nkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nk-sp{animation:nkspray 1.4s ease-out infinite}.nk-sp2{animation-delay:.45s}' +
    '@keyframes nkbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.nk-bird{animation:nkbird 12s linear infinite}.nk-bird2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const note = (cls, x, y, c) => '<g class="nk-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.4) + ' ' + y + 'v-18l9 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const RED = "#da291c", PINK = "#ff5fa2", AQUA = "#3ad0ff", GOLD = "#ffd23f";

  /* 1. Shawmut, Red Line, underground */
  function nkstation() {
    let tiles = "";
    for (let r = 0; r < 7; r++) for (let c = 0; c < 20; c++) tiles += '<rect x="' + (c * 20 + (r % 2) * 10 - 10) + '" y="' + (18 + r * 12) + '" width="19" height="11" fill="' + ((r + c) % 5 ? "#e9dfc6" : "#e1d5b8") + '"/>';
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="132" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="122" width="330" height="70" rx="8" fill="#cfd4d8" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="160" width="330" height="9" fill="' + RED + '"/><rect x="24" y="172" width="330" height="3" fill="' + RED + '"/>' +
      '<rect x="334" y="126" width="18" height="60" rx="4" fill="#aeb4ba"/><circle cx="344" cy="180" r="3.5" fill="#fff6c2"/>' +
      '<rect x="282" y="128" width="48" height="12" rx="2" fill="#111"/><text x="306" y="137" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">ASHMONT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="#1b1a1f"/>' +
      '<rect x="0" y="0" width="400" height="18" fill="#2b2a30"/>' + tiles +
      '<rect x="0" y="100" width="400" height="6" fill="#7a2b2b"/><rect x="0" y="106" width="400" height="16" fill="#3a3640"/>' +
      '<g class="nk-flk"><rect x="60" y="6" width="60" height="5" rx="2" fill="#fff6d6"/></g><g class="nk-flk nk-flk2"><rect x="280" y="6" width="60" height="5" rx="2" fill="#fff6d6"/></g>' +
      '<rect x="126" y="34" width="148" height="30" rx="3" fill="#111"/><text x="140" y="55" ' + font + ' font-size="17" fill="#fff">Shawmut</text>' + badge(228, 49, "RL", RED) +
      train +
      '<rect x="0" y="194" width="400" height="8" fill="#f2c200"/><rect x="0" y="202" width="400" height="58" fill="#8e8a84"/><path d="M0 230h400" stroke="#7e7a74" stroke-width="2"/>' +
      '<rect x="36" y="214" width="6" height="34" fill="#444"/><rect x="24" y="210" width="30" height="8" rx="2" fill="#555"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">DORCHESTER · ASHMONT BRANCH</text>');
  }

  /* 2. Trotter School, Humboldt Ave */
  function nktrotter() {
    const wins = Array.from({ length: 9 }, (_, i) => '<rect x="' + (64 + i * 30) + '" y="104" width="22" height="16" fill="#a9cbe0" stroke="#5b4a3a" stroke-width="1.5"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (64 + i * 30) + '" y="134" width="22" height="16" fill="#a9cbe0" stroke="#5b4a3a" stroke-width="1.5"/>').join("");
    const bus = '<g class="nk-bus"><rect x="120" y="176" width="150" height="44" rx="6" fill="#f7b500" stroke="#7a5600" stroke-width="2"/><rect x="250" y="186" width="30" height="34" rx="4" fill="#f7b500" stroke="#7a5600" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 20) + '" y="182" width="15" height="13" fill="#cfe7f5"/>').join("") +
      '<rect x="120" y="202" width="160" height="4" fill="#111"/><rect x="126" y="208" width="120" height="3" fill="#111"/><circle cx="148" cy="222" r="9" fill="#111"/><circle cx="248" cy="222" r="9" fill="#111"/><circle cx="278" cy="196" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nks2)"/>' +
      '<g class="nk-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<circle cx="34" cy="128" r="26" fill="#3f8a4a"/><circle cx="374" cy="130" r="24" fill="#3f8a4a"/><rect x="30" y="140" width="8" height="36" fill="#5a3d24"/><rect x="370" y="140" width="8" height="36" fill="#5a3d24"/>' +
      '<rect x="50" y="88" width="300" height="88" fill="#9a4b33"/><rect x="50" y="82" width="300" height="8" fill="#d8d0c0"/><rect x="50" y="124" width="300" height="4" fill="#d8d0c0"/>' + wins +
      '<rect x="176" y="150" width="48" height="26" fill="#3a2a20"/><rect x="180" y="153" width="19" height="23" fill="#7aa6c0"/><rect x="201" y="153" width="19" height="23" fill="#7aa6c0"/>' +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#2b2b2b">WILLIAM MONROE TROTTER SCHOOL</text>' +
      '<rect x="356" y="40" width="3" height="136" fill="#8a8f96"/><g class="nk-flag"><rect x="359" y="42" width="30" height="18" fill="#c8102e"/><rect x="359" y="42" width="13" height="10" fill="#1f3a93"/><path d="M359 48h30M359 54h30" stroke="#fff" stroke-width="2"/></g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#c7c1b5"/><rect x="0" y="186" width="400" height="74" fill="#4a4a4f"/><path d="M0 240h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus + '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">HUMBOLDT AVE · ROXBURY</text>',
      sky("nks2", "#8cc4ec", "#eaf4fb"));
  }

  /* 3. The Victorian on Melville Ave and its carriage house */
  function nkmelville() {
    const w = (x, y) => '<rect x="' + x + '" y="' + y + '" width="14" height="22" fill="#f6dfa3" stroke="#2f4a3a" stroke-width="2"/><path d="M' + x + ' ' + (y + 11) + 'h14" stroke="#2f4a3a" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nks3)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#fff4c8" opacity=".9"/>' +
      /* main house */
      '<path d="M70 196V92l60 -44 60 44v104z" fill="#c9a66b"/><path d="M60 94l70 -52 70 52" fill="none" stroke="#6b2d2d" stroke-width="8" stroke-linejoin="round"/>' +
      '<path d="M112 70h36v18h-36z" fill="#2f4a3a"/><circle cx="130" cy="66" r="8" fill="#f6dfa3" stroke="#2f4a3a" stroke-width="2"/>' +
      /* turret */
      '<rect x="176" y="70" width="40" height="126" fill="#b8925a"/><path d="M170 72l26 -40 26 40z" fill="#6b2d2d"/><path d="M196 32v-10" stroke="#333" stroke-width="2"/>' +
      w(84, 100) + w(146, 100) + w(84, 136) + w(146, 136) + w(189, 88) + w(189, 124) +
      /* porch */
      '<rect x="64" y="166" width="156" height="6" fill="#2f4a3a"/>' + [70, 100, 130, 160, 190, 214].map(x => '<rect x="' + x + '" y="172" width="4" height="24" fill="#f2ead8"/>').join("") +
      '<rect x="64" y="186" width="156" height="4" fill="#f2ead8"/><rect x="118" y="172" width="22" height="24" fill="#5a2a1e"/>' +
      /* carriage house */
      '<path d="M252 196v-70l50 -28 50 28v70z" fill="#8b5a3c"/><path d="M246 128l56 -32 56 32" fill="none" stroke="#4a2d1e" stroke-width="6" stroke-linejoin="round"/>' +
      '<rect x="276" y="142" width="52" height="54" fill="#3b2418"/><path d="M276 142l52 54M328 142l-52 54" stroke="#6b4530" stroke-width="3"/><rect x="292" y="110" width="20" height="16" fill="#f6dfa3"/>' +
      '<rect class="nk-flash" x="276" y="142" width="52" height="54" fill="#fffbe6"/>' +
      note("", 300, 112, PINK) + note("nk-note2", 316, 118, AQUA) + note("nk-note3", 288, 120, GOLD) +
      '<rect x="0" y="196" width="400" height="64" fill="#5b8a3e"/><path d="M0 214h400" stroke="#c7c1b5" stroke-width="10"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">MELVILLE AVE · DORCHESTER</text>',
      sky("nks3", "#2a2f5c", "#e59a6e"));
  }

  /* 4. Pizza on Dorchester Ave */
  function nkpizza() {
    const bricks = Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (40 + i * 10) + 'h400" stroke="#6e3526" stroke-width="1"/>').join("");
    const slice = (x, y) => '<path d="M' + x + ' ' + y + 'l22 -6 -10 22z" fill="#f2b84b" stroke="#b5651d" stroke-width="2"/><circle cx="' + (x + 9) + '" cy="' + (y + 1) + '" r="2.2" fill="#c0392b"/><circle cx="' + (x + 13) + '" cy="' + (y + 6) + '" r="2" fill="#c0392b"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nks4)"/>' +
      '<rect x="0" y="30" width="400" height="160" fill="#8a4434"/>' + bricks +
      '<rect x="20" y="44" width="40" height="36" fill="#f6dfa3" opacity=".8"/><rect x="340" y="44" width="40" height="36" fill="#f6dfa3" opacity=".8"/>' +
      '<g class="nk-flk"><rect x="122" y="44" width="156" height="40" rx="8" fill="#1a0e0e" stroke="#ff4d6d" stroke-width="3"/><text x="200" y="74" text-anchor="middle" ' + font + ' font-size="26" fill="#ff8fa3" stroke="#ff2d55" stroke-width=".8">PIZZA</text></g>' +
      '<path d="M90 96h220l14 22H76z" fill="#c0392b"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (90 + i * 28) + ' 96l-4 22" stroke="#f4f1e8" stroke-width="7"/>').join("") +
      '<rect x="96" y="118" width="208" height="72" fill="#2a3540"/><rect x="102" y="124" width="120" height="60" fill="#f3d9a4" opacity=".9"/><rect x="232" y="124" width="66" height="66" fill="#5a3a2a"/>' +
      '<rect x="102" y="160" width="120" height="24" fill="#c0c4c8"/>' + slice(116, 156) + slice(150, 154) + slice(184, 156) +
      '<g class="nk-steam"><path d="M140 146q-6 -8 0 -16q6 -8 0 -16" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/></g><g class="nk-steam nk-steam2"><path d="M180 146q-6 -8 0 -16q6 -8 0 -16" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/></g>' +
      '<rect x="248" y="128" width="34" height="14" rx="2" fill="#f4f1e8"/><text x="265" y="139" text-anchor="middle" ' + font + ' font-size="11" fill="#2a3540">1508</text>' +
      '<rect x="0" y="190" width="400" height="16" fill="#c7c1b5"/><rect x="0" y="206" width="400" height="54" fill="#4a4a4f"/><path d="M0 234h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("nk-car", 0, 220, "#2b6cb0") + car("nk-car nk-car2", 0, 240, "#e8e8e8") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="11" fill="#f4f1e8">DORCHESTER AVE</text>',
      sky("nks4", "#1c2347", "#3c3a6b"));
  }

  /* 5. Dorchester Ave and Melville Ave, All Saints' tower behind */
  function nkcorner() {
    const tower = '<g><rect x="150" y="34" width="70" height="104" fill="#8d8f93"/><rect x="150" y="34" width="14" height="104" fill="#7b7d82"/>' +
      [150, 168, 186, 204].map(x => '<rect x="' + x + '" y="26" width="10" height="10" fill="#8d8f93"/>').join("") +
      '<path d="M148 34v-16l4 -8 4 8v16zM214 34v-16l4 -8 4 8v16z" fill="#7b7d82"/>' +
      '<path d="M172 52q13 -16 26 0v34h-26z" fill="#2b2f3a"/><path d="M178 58v26M185 54v32M192 58v26" stroke="#555a66" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M150 ' + (46 + i * 12) + 'h70" stroke="#7a7c80" stroke-width="1"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nks5)"/>' +
      '<g fill="#2b2f45"><rect x="0" y="92" width="64" height="46"/><path d="M0 92l32 -18 32 18z"/><rect x="262" y="84" width="56" height="54"/><path d="M262 84l28 -16 28 16z"/><rect x="326" y="96" width="74" height="42"/></g>' +
      tower +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("NKOTB", 24, 190, 54, PINK, -6) + tag("BLOCKHEADS", 26, 216, 18, AQUA, -3) + tag("HANGIN TOUGH", 196, 202, 17, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 146, "Dorchester Av") + sign(256, 124, 122, "Melville Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="nk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="nk-sp"><circle cx="200" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="nk-sp nk-sp2"><circle cx="206" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("nks5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { nkstation: nkstation, nktrotter: nktrotter, nkmelville: nkmelville, nkpizza: nkpizza, nkcorner: nkcorner };
})();
