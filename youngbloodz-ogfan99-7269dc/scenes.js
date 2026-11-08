/* youngbloodz scenes (Regions tab: Atlanta; Decatur / South DeKalb, where J-Bo and Sean P met at Miller Grove Middle). CSS classes prefixed yb- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ybflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.yb-flk{animation:ybflick 2.4s infinite}.yb-flk2{animation-delay:.8s}' +
    '@keyframes ybglow{0%,100%{opacity:.45}50%{opacity:1}}.yb-glow{animation:ybglow 2.2s ease-in-out infinite}.yb-g2{animation-delay:-1.1s}' +
    '@keyframes ybcar{0%{transform:translateX(-260px)}100%{transform:translateX(520px)}}.yb-car{animation:ybcar 6s linear infinite;animation-delay:-2.6s}' +
    '@keyframes ybcar2{0%{transform:translateX(520px)}100%{transform:translateX(-260px)}}.yb-car2{animation:ybcar2 8s linear infinite;animation-delay:-3s}' +
    '@keyframes ybspin{to{transform:rotate(360deg)}}.yb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ybspin .6s linear infinite}' +
    '@keyframes ybbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.yb-bob{animation:ybbob .8s ease-in-out infinite}.yb-bob2{animation-delay:-.4s}' +
    '@keyframes ybspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.yb-sp{animation:ybspray 1.4s ease-out infinite}.yb-sp2{animation-delay:.45s}' +
    '@keyframes ybleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-70px,190px) rotate(260deg)}}.yb-lf{transform-box:fill-box;animation:ybleaf 6s linear infinite}.yb-lf2{animation-delay:-2s}.yb-lf3{animation-delay:-4s}' +
    '@keyframes ybflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.yb-flag{transform-box:fill-box;transform-origin:0 50%;animation:ybflag 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "yb-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const pines = (y, n, c) => Array.from({ length: n }, (_, i) => { const x = i * (400 / (n - 1)) + ((i * 37) % 11); const h = 26 + (i * 13) % 18; return '<path d="M' + x + ' ' + y + 'l-9 0l9 -' + h + 'l9 ' + h + 'z" fill="' + c + '"/>'; }).join("");
  const AQUA = "#3ec6e0", GOLD = "#f2c14e", RED = "#e63946", MBLUE = "#0a5fb4", MORANGE = "#f58025";
  /* '92 aqua-blue Cadillac Fleetwood (two-door, gold wire wheels, whitewalls) */
  const caddy = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')">' +
    '<path d="M0 30 L6 18 L44 16 L60 4 L112 4 L128 16 L170 18 L176 30 Z" fill="' + AQUA + '" stroke="#0b3a44" stroke-width="2"/>' +
    '<path d="M64 8 L108 8 L120 16 L56 16 Z" fill="#cfeef5" stroke="#0b3a44" stroke-width="1.5"/><path d="M88 8v8" stroke="#0b3a44" stroke-width="2"/>' +
    '<rect x="0" y="22" width="176" height="3" fill="#e8f4f7"/><rect x="168" y="18" width="8" height="6" fill="#fff6c2"/><rect x="0" y="19" width="6" height="6" fill="' + RED + '"/>' +
    [36, 140].map(cx => '<circle cx="' + cx + '" cy="32" r="12" fill="#1b1b1b"/><circle cx="' + cx + '" cy="32" r="8.5" fill="#f4f4f4"/><g class="yb-spin"><circle cx="' + cx + '" cy="32" r="6" fill="' + GOLD + '"/><path d="M' + (cx - 6) + ' 32h12M' + cx + ' 26v12M' + (cx - 4.2) + ' 27.8l8.4 8.4M' + (cx + 4.2) + ' 27.8l-8.4 8.4" stroke="#8a6a1a" stroke-width="1.2"/></g>').join("") +
    '</g>';

  /* 1. MARTA's 115 Covington Hwy bus pulling up to the stop at Miller Rd: white bus with the blue and orange band, the stop pole, pines and the DeKalb dusk */
  function ybbus() {
    const bus = '<g class="anim-train"><rect x="40" y="96" width="300" height="88" rx="10" fill="#f4f5f7" stroke="#5b6470" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 42) + '" y="108" width="34" height="34" rx="3" fill="#1d2a38"/>').join("") +
      '<rect x="306" y="104" width="30" height="50" rx="3" fill="#24384c"/><rect x="40" y="150" width="300" height="8" fill="' + MBLUE + '"/><rect x="40" y="158" width="300" height="5" fill="' + MORANGE + '"/>' +
      '<rect x="230" y="100" width="70" height="0" fill="none"/><rect x="58" y="99" width="140" height="8" rx="2" fill="#111"/><text x="128" y="106" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb020">115 COVINGTON HWY</text>' +
      '<circle cx="96" cy="186" r="15" fill="#1b1b1b"/><circle cx="96" cy="186" r="6" fill="#9aa2ad"/><circle cx="282" cy="186" r="15" fill="#1b1b1b"/><circle cx="282" cy="186" r="6" fill="#9aa2ad"/>' +
      '<circle cx="333" cy="170" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yb1)"/>' + stars(16) +
      pines(150, 16, "#14301f") + pines(158, 12, "#0f2618") +
      '<rect x="0" y="150" width="400" height="56" fill="#3a3d44"/><rect x="0" y="176" width="400" height="3" fill="#f2c200" opacity=".8"/>' +
      bus +
      '<rect x="0" y="204" width="400" height="56" fill="#8a8a86"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 204v56" stroke="#76766f"/>').join("") +
      '<rect x="356" y="74" width="5" height="160" fill="#4a4f57"/><rect x="340" y="70" width="40" height="46" rx="3" fill="' + MBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="360" y="86" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text><rect x="346" y="92" width="28" height="16" rx="3" fill="' + MORANGE + '"/><text x="360" y="104" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">115</text>' +
      sign(232, 40, 110, "Covington Hwy") + sign(256, 64, 72, "Miller Rd") + '<rect x="285" y="62" width="4" height="2" fill="#fff"/>',
      sky("yb1", "#1a1f4a", "#e08a5a"));
  }

  /* 2. Miller Grove Middle on Miller Rd: low red-brick school with the white entry canopy, the flagpole, a notebook on the steps with ATTIC CREW written on it */
  function ybschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#yb2)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffe7a8" class="yb-glow"/>' + pines(120, 14, "#2c5a36") +
      '<rect x="20" y="96" width="360" height="96" fill="#a5452f"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M20 ' + (102 + i * 8) + 'h360" stroke="#8e3a27" stroke-width="1"/>').join("") +
      '<rect x="20" y="90" width="360" height="8" fill="#e7e2d6"/>' +
      [40, 92, 252, 304].map(x => '<rect x="' + x + '" y="112" width="44" height="30" fill="#2a4356" stroke="#e7e2d6" stroke-width="2"/><path d="M' + (x + 22) + ' 112v30M' + x + ' 127h44" stroke="#e7e2d6" stroke-width="1.5"/>').join("") +
      '<rect x="150" y="80" width="100" height="16" fill="#f4f1ea" stroke="#9b968a"/><rect x="156" y="96" width="6" height="56" fill="#f4f1ea"/><rect x="238" y="96" width="6" height="56" fill="#f4f1ea"/>' +
      '<text x="200" y="92" text-anchor="middle" ' + font + ' font-size="9" fill="#3a3a3a">MILLER GROVE MIDDLE</text>' +
      '<rect x="172" y="118" width="56" height="74" fill="#2e3d4c"/><path d="M200 118v74" stroke="#9fb3c4" stroke-width="2"/><rect x="176" y="122" width="20" height="30" fill="#7fa3bf" opacity=".6"/><rect x="204" y="122" width="20" height="30" fill="#7fa3bf" opacity=".6"/>' +
      '<rect x="356" y="30" width="3" height="162" fill="#cfd4da"/><g class="yb-flag"><rect x="359" y="32" width="30" height="18" fill="#c8102e"/><rect x="359" y="38" width="30" height="6" fill="#fff"/><rect x="359" y="32" width="12" height="10" fill="#1d3f8a"/></g>' +
      '<rect x="0" y="192" width="400" height="68" fill="#5f9a4a"/><rect x="150" y="192" width="100" height="68" fill="#b9b3a6"/>' + [192, 204, 216].map((y, i) => '<rect x="' + (150 - i * 8) + '" y="' + y + '" width="' + (100 + i * 16) + '" height="12" fill="#cfc9bb" stroke="#a59f92"/>').join("") +
      '<g transform="rotate(-8 108 226)"><rect x="80" y="208" width="58" height="40" rx="3" fill="#f7f4ea" stroke="#333" stroke-width="1.5"/><path d="M84 218h50M84 226h50M84 234h50M84 242h50" stroke="#8fb7e0" stroke-width="1"/><rect x="80" y="208" width="6" height="40" fill="#222"/>' +
      '<text x="111" y="232" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="11" fill="' + RED + '">ATTIC CREW</text></g>' +
      '<g class="yb-bob"><rect x="290" y="214" width="34" height="30" rx="6" fill="' + AQUA + '" stroke="#0b3a44" stroke-width="2"/><rect x="298" y="206" width="18" height="10" rx="4" fill="none" stroke="#0b3a44" stroke-width="3"/><rect x="296" y="224" width="22" height="10" rx="2" fill="#0b3a44" opacity=".35"/></g>',
      sky("yb2", "#6fb6e8", "#f6dba0"));
  }

  /* 3. Rolling I-85 at night: the red-white-blue interstate shield on its green post, the aqua '92 Cadillac gliding by on gold wheels, the highway lights */
  function ybhighway() {
    const shield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 8 Q0 0 8 0 H56 Q64 0 64 8 V30 Q64 58 32 70 Q0 58 0 30 Z" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<path d="M4 18 V30 Q4 54 32 66 Q60 54 60 30 V18 Z" fill="#1d3f8a"/><path d="M4 8 Q4 4 8 4 H56 Q60 4 60 8 V16 H4 Z" fill="#c8102e"/>' +
      '<text x="18" y="14" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">INTER</text><text x="46" y="14" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">STATE</text>' +
      '<text x="32" y="50" text-anchor="middle" ' + font + ' font-size="28" fill="#fff">' + n + '</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yb3)"/>' + stars(22) +
      '<g fill="#101530" opacity=".9"><rect x="20" y="120" width="26" height="40"/><rect x="52" y="104" width="18" height="56"/><rect x="76" y="114" width="30" height="46"/><rect x="300" y="110" width="24" height="50"/><rect x="330" y="96" width="20" height="64"/><rect x="356" y="116" width="34" height="44"/></g>' +
      [60, 160, 260, 360].map((x, i) => '<rect x="' + (x - 1) + '" y="70" width="3" height="96" fill="#3a3f52"/><path d="M' + x + ' 72h14" stroke="#3a3f52" stroke-width="3"/><ellipse class="yb-glow' + (i % 2 ? " yb-g2" : "") + '" cx="' + (x + 14) + '" cy="76" rx="9" ry="4" fill="#ffd27a"/>').join("") +
      '<rect x="0" y="160" width="400" height="100" fill="#2b2d33"/><rect x="0" y="158" width="400" height="5" fill="#9a9a9a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="206" width="24" height="4" fill="#f1f1f1"/>').join("") +
      '<g class="yb-car">' + caddy(0, 164, 0.95) + '</g>' +
      '<g class="yb-car2"><rect x="0" y="222" width="70" height="16" rx="5" fill="#5a2a2a"/><circle cx="14" cy="238" r="6" fill="#111"/><circle cx="56" cy="238" r="6" fill="#111"/><rect x="0" y="226" width="5" height="4" fill="#fff6c2"/></g>' +
      '<rect x="168" y="96" width="6" height="64" fill="#5a6a5a"/><rect x="222" y="96" width="6" height="64" fill="#5a6a5a"/><rect x="146" y="28" width="104" height="72" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      shield(166, 30, "85") + '<text x="240" y="64" text-anchor="end" ' + font + ' font-size="0" fill="#fff"></text>' +
      '<rect x="252" y="40" width="62" height="40" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="283" y="57" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">SOUTH</text><text x="283" y="73" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Atlanta</text>',
      sky("yb3", "#060914", "#2a2350"));
  }

  /* 4. The Gallery at South DeKalb on Candler Rd: the long mall front with its lit bas-relief letters and the star mark, palm-less Georgia pines, the parking lot */
  function ybmall() {
    return svg(
      '<rect width="400" height="260" fill="url(#yb4)"/>' + stars(10) + pines(118, 15, "#1a3524") +
      '<rect x="10" y="96" width="380" height="84" fill="#c9b79a"/><rect x="10" y="90" width="380" height="10" fill="#8c7a5e"/>' + Array.from({ length: 19 }, (_, i) => '<path d="M' + (20 + i * 20) + ' 100v80" stroke="#b6a486" stroke-width="2"/>').join("") +
      '<rect x="120" y="70" width="160" height="34" rx="3" fill="#6b5a44"/>' +
      '<text class="yb-glow" x="200" y="86" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11" letter-spacing="3" fill="#fff2c8">THE GALLERY</text>' +
      '<text class="yb-glow yb-g2" x="200" y="99" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="9" letter-spacing="2" fill="#fff2c8">AT SOUTH DEKALB</text>' +
      '<path d="M134 80l2 4l4 0l-3 3l1 4l-4 -2l-4 2l1 -4l-3 -3l4 0z" fill="' + GOLD + '"/>' +
      '<rect x="150" y="124" width="100" height="56" fill="#24313e"/>' + [160, 186, 212].map(x => '<rect x="' + x + '" y="130" width="22" height="50" fill="#f6d98c" opacity=".75"/>').join("") +
      [30, 80, 290, 340].map(x => '<rect x="' + x + '" y="122" width="34" height="26" fill="#f6d98c" opacity=".55"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#3c3e44"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 46) + ' 196l-10 40" stroke="#e8e8e8" stroke-width="2"/>').join("") +
      '<rect x="56" y="150" width="4" height="40" fill="#5a5f66"/><circle class="yb-glow" cx="58" cy="148" r="6" fill="#ffe3a0"/><rect x="340" y="150" width="4" height="40" fill="#5a5f66"/><circle class="yb-glow yb-g2" cx="342" cy="148" r="6" fill="#ffe3a0"/>' +
      '<g class="yb-car2">' + caddy(0, 204, 0.7) + '</g>' +
      sign(18, 204, 92, "Candler Rd"),
      sky("yb4", "#1b2550", "#d6845a"));
  }

  /* 5. The corner, Covington Hwy and Miller Rd: green signs, a cinderblock wall tagged YOUNGBLOODZ, ATTIC CREW, U-WAY, the aqua Cadillac parked, Panola Mountain's bare granite dome far off */
  function ybcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#yb5)"/>' + stars(12) +
      '<path d="M120 112 Q200 58 290 112 Z" fill="#9a9a94"/><path d="M150 100 Q200 70 250 98" stroke="#b6b6ae" stroke-width="3" fill="none"/><path d="M175 92 q10 -4 18 0" stroke="#7a7a74" stroke-width="2" fill="none"/>' +
      pines(116, 18, "#16301f") +
      '<rect x="0" y="112" width="400" height="10" fill="#22352a"/>' +
      '<rect x="0" y="120" width="400" height="104" fill="#8c8a84"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#77756f" stroke-width="1"/>').join("") +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + ((i % 2 ? 8 : 0) + Math.floor(i / 2) * 32) + ' ' + (120 + (i % 13) * 8) + 'v8" stroke="#77756f"/>').join("") +
      tag("YOUNGBLOODZ", 14, 196, 34, AQUA, -5) + tag("ATTIC CREW", 24, 218, 18, GOLD, -3) + tag("U-WAY", 200, 160, 22, RED, -4) + tag("YBZ", 26, 152, 24, "#fff", -6) +
      '<g class="yb-sp"><circle cx="262" cy="168" r="3" fill="' + AQUA + '" opacity=".7"/></g><g class="yb-sp yb-sp2"><circle cx="268" cy="162" r="2" fill="' + AQUA + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55534e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      caddy(206, 196, 0.7) +
      '<rect x="352" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(296, 94, 104, "Covington Hwy") + sign(306, 120, 84, "Miller Rd") +
      '<g class="yb-lf"><path d="M330 20q6 -6 10 0q-4 8 -10 0z" fill="#c8782a"/></g><g class="yb-lf yb-lf2"><path d="M220 10q6 -6 10 0q-4 8 -10 0z" fill="#d9a441"/></g><g class="yb-lf yb-lf3"><path d="M120 6q6 -6 10 0q-4 8 -10 0z" fill="#b5532a"/></g>',
      sky("yb5", "#141a3c", "#c9744e"));
  }

  window.SCENES = { ybbus: ybbus, ybschool: ybschool, ybhighway: ybhighway, ybmall: ybmall, ybcorner: ybcorner };
})();
