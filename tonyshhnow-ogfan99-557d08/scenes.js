/* Tony Shhnow scenes (Regions tab: Atlanta; Marietta, Cobb County). CSS classes prefixed ts- (the page's own anim-train is kept).
   1 CobbLinc Route 10 pulling into the Marietta Transfer Center on South Marietta Pkwy
   2 Marietta High School: red-brick campus, blue + white Blue Devils banner
   3 The thrift store where he bought his high-school clothes: racks swinging, price tags, no logos
   4 The Love Streak tour stage: pink hearts on the screen, lights sweeping, the crowd bouncing
   5 S Marietta Pkwy and Powder Springs St: green signs, SHHNOW tagged, a gray C-130 from Dobbins rumbling over */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tsbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.ts-bus{animation:tsbus 7s ease-out infinite;animation-delay:-3.2s}' +
    '@keyframes tsflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ts-flag{transform-box:fill-box;transform-origin:0% 50%;animation:tsflag 1.6s ease-in-out infinite}' +
    '@keyframes tsswing{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.ts-sw{transform-box:fill-box;transform-origin:50% 0%;animation:tsswing 2.4s ease-in-out infinite}.ts-sw2{animation-delay:-1.2s}' +
    '@keyframes tsglow{0%,100%{opacity:.45}50%{opacity:1}}.ts-glow{animation:tsglow 2s ease-in-out infinite}.ts-g2{animation-delay:-1s}' +
    '@keyframes tsbeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.ts-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tsbeam 3.2s ease-in-out infinite}.ts-beam2{animation-delay:-1.6s}' +
    '@keyframes tsbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ts-bob{animation:tsbob .7s ease-in-out infinite}.ts-bob2{animation-delay:-.35s}' +
    '@keyframes tsheart{0%{transform:translateY(0) scale(.8);opacity:0}20%{opacity:1}100%{transform:translateY(-60px) scale(1.1);opacity:0}}.ts-ht{transform-box:fill-box;transform-origin:50% 50%;animation:tsheart 3s ease-out infinite}.ts-ht2{animation-delay:-1s}.ts-ht3{animation-delay:-2s}' +
    '@keyframes tsplane{0%{transform:translateX(-160px)}100%{transform:translateX(560px)}}.ts-plane{animation:tsplane 12s linear infinite;animation-delay:-5s}' +
    '@keyframes tsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ts-sp{animation:tsspray 1.4s ease-out infinite}.ts-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const pine = (x, y, s) => '<path d="M' + x + ' ' + y + 'l' + (-9 * s) + ' ' + (22 * s) + 'h' + (18 * s) + 'z M' + x + ' ' + (y + 12 * s) + 'l' + (-12 * s) + ' ' + (26 * s) + 'h' + (24 * s) + 'z" fill="#1e3a2a"/><rect x="' + (x - 1.5 * s) + '" y="' + (y + 38 * s) + '" width="' + (3 * s) + '" height="' + (8 * s) + '" fill="#3a2a1e"/>';
  const ICE = "#8fd8ff", PINK = "#ff6fa8", GOLD = "#ffcf4a", CNAVY = "#003b71", CGREEN = "#7ac143", BLUE = "#1d4fa0";

  /* 1. CobbLinc Route 10 rolling into the Marietta Transfer Center: covered bus bays, the black stop sign with the route bullet, Georgia pines behind */
  function tsstop() {
    const bus = '<g class="anim-train"><rect x="40" y="118" width="300" height="80" rx="10" fill="#f6f7f8" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (90 + i * 40) + '" y="130" width="34" height="30" rx="3" fill="#22303c"/>').join("") +
      '<rect x="48" y="130" width="34" height="56" rx="2" fill="#22303c"/><path d="M40 176q120 -18 300 -6v8h-300z" fill="' + CNAVY + '"/><path d="M110 184q110 -14 230 -8v4h-230z" fill="' + CGREEN + '"/>' +
      '<rect x="46" y="119" width="96" height="11" rx="2" fill="#111"/><text x="94" y="127.8" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">10 ARTS CENTER</text>' +
      '<circle cx="96" cy="198" r="12" fill="#222"/><circle cx="96" cy="198" r="5" fill="#9aa1a8"/><circle cx="290" cy="198" r="12" fill="#222"/><circle cx="290" cy="198" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ts1)"/>' + [20, 60, 330, 372].map((x, i) => pine(x, 40 + (i % 2) * 8, 1.3)).join("") +
      /* canopy over the bays */
      '<rect x="0" y="86" width="400" height="10" fill="#5d6874"/><rect x="0" y="80" width="400" height="8" fill="#7b8794"/>' +
      [16, 140, 264, 388].map(x => '<rect x="' + (x - 4) + '" y="96" width="8" height="112" fill="#5d6874"/>').join("") +
      '<rect x="0" y="198" width="400" height="10" fill="#c9c4b8"/><rect x="0" y="208" width="400" height="52" fill="#4c4c52"/><path d="M0 234h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      bus +
      '<rect x="64" y="22" width="272" height="42" rx="3" fill="#111"/><text x="78" y="40" ' + font + ' font-size="13" fill="#fff">Marietta Transfer Center</text><text x="78" y="56" ' + font + ' font-size="9" fill="#bfc6cc">S MARIETTA PKWY · CobbLinc</text>' +
      '<circle cx="312" cy="43" r="13" fill="' + CNAVY + '" stroke="' + CGREEN + '" stroke-width="2.5"/><text x="312" y="48" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">10</text>' +
      '<rect class="ts-glow" x="150" y="98" width="100" height="4" rx="2" fill="#fff6c2" opacity=".6"/>',
      sky("ts1", "#7fb8e6", "#f3dcc0"));
  }

  /* 2. Marietta High School: red-brick front, white columns, the blue + white Blue Devils banner flapping, a pennant on the pole */
  function tshigh() {
    return svg(
      '<rect width="400" height="260" fill="url(#ts2)"/>' + pine(24, 70, 1.4) + pine(378, 74, 1.3) +
      '<rect x="40" y="86" width="320" height="118" fill="#9b4a36"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M40 ' + (94 + i * 8) + 'h320" stroke="#874030" stroke-width="1"/>').join("") +
      '<path d="M150 86l50 -30l50 30z" fill="#f1ede4"/><rect x="146" y="84" width="108" height="8" fill="#f1ede4"/>' +
      [158, 182, 206, 230].map(x => '<rect x="' + x + '" y="92" width="10" height="84" fill="#f1ede4"/>').join("") +
      '<rect x="186" y="150" width="28" height="54" fill="#3a2a22"/>' +
      [56, 100, 268, 312].map(x => '<rect x="' + x + '" y="102" width="30" height="34" fill="#2a3a4c" stroke="#f1ede4" stroke-width="2"/><rect x="' + x + '" y="150" width="30" height="34" fill="#2a3a4c" stroke="#f1ede4" stroke-width="2"/>').join("") +
      '<rect x="146" y="64" width="108" height="16" fill="' + BLUE + '"/><text x="200" y="76" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MARIETTA HIGH</text>' +
      '<rect x="0" y="204" width="400" height="56" fill="#6c9a4a"/><rect x="186" y="204" width="28" height="56" fill="#c9c4b8"/>' +
      '<g class="ts-flag"><rect x="60" y="212" width="130" height="30" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/><text x="125" y="233" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="#fff">BLUE DEVILS</text></g>' +
      '<rect x="330" y="120" width="4" height="120" fill="#cfd3d8"/><g class="ts-flag"><path d="M334 124l40 10l-40 10z" fill="' + BLUE + '"/><path d="M334 130l22 4l-22 4z" fill="#fff"/></g>',
      sky("ts2", "#9cc8ec", "#eef3f6"));
  }

  /* 3. The thrift store: racks of secondhand fits swinging on hangers, tags, a mirror, a dollar sign on the window (no names, no logos) */
  function tsthrift() {
    const shirt = (x, y, c, cls) => '<g class="ts-sw' + cls + '"><path d="M' + (x + 10) + ' ' + y + 'q2 -6 -2 -8" stroke="#bbb" stroke-width="1.5" fill="none"/><path d="M' + x + ' ' + (y + 2) + 'h20l8 8l-5 5l-3 -3v26h-20v-26l-3 3l-5 -5z" fill="' + c + '" stroke="#0004" stroke-width="1"/></g>';
    const cols = [PINK, ICE, GOLD, "#e8e4dc", "#5a8a5a", "#c0502e", "#3a4a8a", "#f2a0b0"];
    return svg(
      '<rect width="400" height="260" fill="#efe4cf"/><rect x="0" y="0" width="400" height="14" fill="#d8ccb2"/>' +
      [70, 200, 330].map(x => '<rect class="ts-glow" x="' + (x - 30) + '" y="4" width="60" height="5" rx="2" fill="#fffbe6"/>').join("") +
      /* window with a big price sign */
      '<rect x="252" y="28" width="132" height="84" fill="#bfe2f4" stroke="#8a7a5a" stroke-width="4"/><path d="M318 28v84M252 70h132" stroke="#8a7a5a" stroke-width="3"/>' +
      '<rect x="262" y="38" width="48" height="26" rx="3" fill="#fff" stroke="' + PINK + '" stroke-width="2"/><text x="286" y="57" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + PINK + '">$4.99</text>' +
      '<text x="350" y="100" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#3a2a22">THRIFT</text>' +
      /* two racks */
      [[16, 66], [16, 150]].map(([x, y], r) => '<rect x="' + x + '" y="' + y + '" width="220" height="4" rx="2" fill="#8a8f96"/><rect x="' + (x + 2) + '" y="' + y + '" width="4" height="' + (r ? 90 : 76) + '" fill="#8a8f96"/><rect x="' + (x + 214) + '" y="' + y + '" width="4" height="' + (r ? 90 : 76) + '" fill="#8a8f96"/>' +
        Array.from({ length: 8 }, (_, i) => shirt(x + 14 + i * 25, y + 8, cols[(i + r * 3) % 8], i % 2 ? " ts-sw2" : "")).join("")).join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#b89a74"/>' +
      /* mirror */
      '<rect x="270" y="126" width="56" height="104" rx="4" fill="#cfe6f2" stroke="#6a5a3a" stroke-width="4"/><path d="M282 140l26 -6M282 160l30 -8" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      '<rect x="338" y="166" width="46" height="70" fill="#7a5a3a"/><text x="361" y="196" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" fill="' + GOLD + '">ALL</text><text x="361" y="210" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" fill="' + GOLD + '">TAGS</text><text x="361" y="224" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" fill="' + GOLD + '">½ OFF</text>',
      "");
  }

  /* 4. The Love Streak tour: dark club stage, pink hearts on the screen, beams sweeping, the crowd bouncing */
  function tsstreak() {
    const heart = (x, y, s, cls) => '<path class="ts-ht ' + cls + '" d="M' + x + ' ' + (y + 6 * s) + 'c' + (-10 * s) + ' ' + (-12 * s) + ' ' + (-22 * s) + ' ' + (2 * s) + ' 0 ' + (16 * s) + 'c' + (22 * s) + ' ' + (-14 * s) + ' ' + (10 * s) + ' ' + (-28 * s) + ' 0 ' + (-16 * s) + 'z" fill="' + PINK + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#0b0a14"/>' +
      '<rect x="90" y="24" width="220" height="96" rx="4" fill="#1a0f22" stroke="#3a2a48" stroke-width="3"/>' +
      '<text x="200" y="66" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="' + PINK + '" class="ts-glow">LOVE STREAK</text>' +
      '<text x="200" y="92" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + ICE + '">TONY SHHNOW · LIVE</text>' +
      heart(36, 150, 1, "") + heart(364, 146, 0.8, "ts-ht2") + heart(66, 160, 0.7, "ts-ht3") +
      [60, 200, 340].map((x, i) => '<path class="ts-beam' + (i === 1 ? " ts-beam2" : "") + '" d="M' + x + ' 0l-26 150h52z" fill="' + [ICE, PINK, GOLD][i] + '" opacity=".22"/>').join("") +
      '<rect x="0" y="130" width="400" height="26" fill="#2a2430"/><rect x="0" y="128" width="400" height="4" fill="' + PINK + '" opacity=".7"/>' +
      '<rect x="190" y="106" width="4" height="24" fill="#888"/><circle cx="192" cy="104" r="5" fill="#333"/>' +
      [52, 330].map(x => '<rect x="' + x + '" y="92" width="22" height="38" rx="2" fill="#15131c" stroke="#3a3e46" stroke-width="2"/><circle cx="' + (x + 11) + '" cy="118" r="7" fill="#2a2f3a"/>').join("") +
      Array.from({ length: 13 }, (_, i) => '<g class="ts-bob' + (i % 2 ? " ts-bob2" : "") + '"><circle cx="' + (14 + i * 31) + '" cy="' + (186 + (i % 3) * 6) + '" r="13" fill="#05060a"/><rect x="' + (2 + i * 31) + '" y="' + (198 + (i % 3) * 6) + '" width="24" height="70" rx="8" fill="#05060a"/>' +
        (i % 4 === 1 ? '<rect x="' + (18 + i * 31) + '" y="' + (150 + (i % 3) * 6) + '" width="5" height="34" rx="2" fill="#05060a"/><rect x="' + (16 + i * 31) + '" y="' + (144 + (i % 3) * 6) + '" width="9" height="12" rx="2" fill="' + ICE + '" class="ts-glow"/>' : "") + '</g>').join(""),
      "");
  }

  /* 5. S Marietta Pkwy and Powder Springs St: green signs, SHHNOW tagged on the block wall, a gray four-prop C-130 from Dobbins rumbling over */
  function tscorner() {
    const plane = '<g class="ts-plane"><path d="M0 40h96q12 0 16 6l-12 4h-100z" fill="#7d858c"/><path d="M40 40l14 -28h10l-4 28z" fill="#6c747b"/><path d="M8 40l-6 -16h8l8 16z" fill="#6c747b"/>' +
      '<path d="M36 46l30 18h10l-14 -18z" fill="#5d656c"/>' + [44, 54, 64, 74].map(x => '<circle cx="' + x + '" cy="' + (36 - (x - 44) / 6) + '" r="2.2" fill="#3a3e44"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (18 + i * 12) + '" y="42" width="6" height="3" fill="#3a3e44"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ts5)"/>' + plane +
      pine(30, 70, 1.3) + pine(66, 78, 1.1) + pine(250, 74, 1.2) + pine(290, 82, 1.0) +
      '<g fill="#3a3448"><rect x="100" y="96" width="120" height="40"/><rect x="180" y="84" width="60" height="52"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#8a8a8a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#7a7a7a" stroke-width="1"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 25 + (Math.floor(i / 2) % 2) * 12) + ' 132v92" stroke="#7a7a7a" stroke-width="1"/>').join("") +
      tag("SHHNOW", 18, 196, 50, ICE, -6) + tag("PLUGG", 236, 170, 26, PINK, -4) + tag("MARIETTA", 24, 218, 18, "#fff", -3) + tag("LOVE STREAK", 170, 214, 18, GOLD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="94" width="6" height="130" fill="#2f2f2f"/>' + sign(278, 96, 120, "S Marietta Pkwy") + sign(282, 122, 112, "Powder Springs St") +
      '<g class="ts-sp"><circle cx="146" cy="168" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="ts-sp ts-sp2"><circle cx="152" cy="162" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("ts5", "#1a2a4a", "#f0a070"));
  }

  window.SCENES = { tsstop: tsstop, tshigh: tshigh, tsthrift: tsthrift, tsstreak: tsstreak, tscorner: tscorner };
})();
