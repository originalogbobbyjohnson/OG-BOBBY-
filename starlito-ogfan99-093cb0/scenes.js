/* starlito scenes (Regions tab: Memphis + Tennessee; East Nashville). CSS classes and ids prefixed sl- (the page's own anim-train is kept).
   1 WeGo Route 23 (Dickerson Pike) pulling up at the Dickerson Pike & Cleveland St stop, East Nashville.
   2 The John Seigenthaler Pedestrian Bridge over the Cumberland at dusk: dark steel camelback trusses on pale concrete piers, lights running.
   3 An East Side hot chicken shack ("Hot Chicken" is his album): cinderblock, hand-painted red sign, the fryer steam rising, the line out the door.
   4 "Gentrifried" East Nashville: an old porch shotgun house squeezed between new tall-skinny boxes, a tower crane swinging overhead.
   5 Lischey Ave and Cleveland St, East Nashville: green signs, STARLITO tagged on the wall, the Tennessee State Capitol on its hill behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes slflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sl-flk{animation:slflick 2.2s infinite}.sl-flk2{animation-delay:.7s}' +
    '@keyframes slrun{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-40}}.sl-run{animation:slrun 2s linear infinite}' +
    '@keyframes slrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.sl-rip{animation:slrip 3.2s ease-in-out infinite}.sl-rip2{animation-delay:-1.6s}' +
    '@keyframes slsteam{0%{transform:translateY(0) scale(1);opacity:0}20%{opacity:.7}100%{transform:translateY(-50px) scale(1.6);opacity:0}}.sl-st{transform-box:fill-box;transform-origin:50% 100%;animation:slsteam 2.8s ease-out infinite}.sl-st2{animation-delay:-.9s}.sl-st3{animation-delay:-1.8s}' +
    '@keyframes slcrane{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sl-crane{transform-box:view-box;transform-origin:300px 40px;animation:slcrane 6s ease-in-out infinite}' +
    '@keyframes slhook{0%,100%{transform:translateY(0)}50%{transform:translateY(14px)}}.sl-hook{animation:slhook 3s ease-in-out infinite}' +
    '@keyframes slspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sl-sp{animation:slspray 1.4s ease-out infinite}.sl-sp2{animation-delay:.45s}' +
    '@keyframes slcar{from{transform:translateX(440px)}to{transform:translateX(-120px)}}.sl-car{animation:slcar 7s linear infinite}' +
    '@keyframes slbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.sl-bob{animation:slbob 1.2s ease-in-out infinite}.sl-bob2{animation-delay:-.6s}' +
    '@keyframes sltwink{0%,100%{opacity:.3}50%{opacity:1}}.sl-tw{animation:sltwink 1.8s ease-in-out infinite}.sl-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 5 ? "" : "sl-tw") + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const NAVY = "#1f4e79", LIME = "#8cc63f", GOLD = "#f5c542", RED = "#d7263d";

  /* 1. WeGo 23 at Dickerson Pike & Cleveland St */
  function slstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 158h316v12H36z" fill="' + NAVY + '"/><path d="M140 170q90 -26 212 -14v14H140z" fill="' + LIME + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb347">23 DICKERSON</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sls1)"/>' +
      /* the pike: low brick storefronts, a pole sign, power lines */
      '<g><rect x="0" y="62" width="110" height="56" fill="#8a4a34"/><rect x="110" y="74" width="90" height="44" fill="#c9b79a"/><rect x="200" y="58" width="80" height="60" fill="#6d5a7a"/><rect x="280" y="70" width="120" height="48" fill="#94603f"/></g>' +
      [14, 60, 124, 160, 214, 246, 296, 340].map(x => '<rect x="' + x + '" y="84" width="22" height="16" fill="#ffe7a8" opacity=".55"/>').join("") +
      '<path d="M0 36q100 10 200 0t200 0M0 44q100 10 200 0t200 0" stroke="#222" stroke-width="1" fill="none"/>' +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="372" y="146" width="5" height="74" fill="#4a4f55"/><rect x="358" y="128" width="34" height="22" rx="2" fill="' + NAVY + '"/><text x="375" y="139" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">WeGo</text><text x="375" y="147" text-anchor="middle" ' + font + ' font-size="6" fill="' + LIME + '">BUS STOP</text>' +
      '<rect x="30" y="204" width="312" height="44" rx="3" fill="#111"/><text x="42" y="222" ' + font + ' font-size="13" fill="#fff">Dickerson Pike &amp; Cleveland St</text><text x="42" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">East Nashville · Route 23</text>' +
      badge(294, 234, "23", NAVY),
      sky("sls1", "#2c3e6b", "#f1b07a"));
  }

  /* 2. John Seigenthaler Pedestrian Bridge at dusk */
  function slbridge() {
    const truss = (x0, x1) => {
      const hgt = 26, top = 'M' + x0 + ' 128Q' + ((x0 + x1) / 2) + ' ' + (128 - 2 * hgt) + ' ' + x1 + ' 128';
      const yy = t => 128 - hgt * 4 * t * (1 - t);
      let web = "";
      for (let i = 0; i <= 8; i++) { const x = x0 + (x1 - x0) * i / 8, t = i / 8; web += '<path d="M' + x + ' 128V' + yy(t) + '" stroke="#2b2f36" stroke-width="2.5"/>'; if (i < 8) web += '<path d="M' + x + ' 128L' + (x + (x1 - x0) / 8) + ' ' + yy((i + 1) / 8) + '" stroke="#2b2f36" stroke-width="2"/>'; }
      return '<path d="' + top + '" stroke="#2b2f36" stroke-width="5" fill="none"/>' + web + '<path class="sl-run" d="' + top + '" stroke="#ffd98a" stroke-width="1.6" fill="none" stroke-dasharray="2 8"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#sls2)"/>' + stars(18) +
      /* downtown towers far behind (generic) */
      '<g fill="#2a2f52" opacity=".9"><rect x="40" y="50" width="26" height="80"/><rect x="72" y="70" width="30" height="60"/><rect x="110" y="40" width="22" height="90"/><path d="M110 40l11 -14l11 14z"/><rect x="250" y="60" width="34" height="70"/><rect x="292" y="46" width="24" height="84"/><rect x="324" y="72" width="40" height="58"/></g>' +
      Array.from({ length: 24 }, (_, i) => '<rect class="' + (i % 3 ? "" : "sl-tw") + '" x="' + [44, 52, 76, 88, 114, 122, 256, 270, 296, 304, 330, 346][i % 12] + '" y="' + (60 + (i * 13) % 60) + '" width="4" height="4" fill="#ffe7a8" opacity=".7"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#1c2c46"/>' +
      '<g class="sl-rip"><path d="M20 182h70M150 196h90M290 178h80M60 226h100M240 238h110" stroke="#ffcf66" stroke-width="2" stroke-linecap="round" opacity=".35"/></g>' +
      '<g class="sl-rip sl-rip2"><path d="M100 210h50M310 208h60M170 250h60" stroke="#8fd3ff" stroke-width="2" stroke-linecap="round" opacity=".35"/></g>' +
      /* concrete piers and arches under the deck */
      [0, 130, 270, 400].map(x => '<rect x="' + (x - 9) + '" y="132" width="18" height="40" fill="#c9ccd1"/>').join("") +
      '<path d="M9 134Q65 160 121 134M139 134Q200 160 261 134M279 134Q335 160 391 134" stroke="#c9ccd1" stroke-width="5" fill="none"/>' +
      '<rect x="0" y="126" width="400" height="8" fill="#9aa0a8"/>' +
      truss(0, 130) + truss(130, 270) + truss(270, 400) +
      label(96, 208, "PEDESTRIAN BRIDGE · CUMBERLAND RIVER"),
      sky("sls2", "#151a3a", "#d9805a"));
  }

  /* 3. East Side hot chicken shack */
  function slchicken() {
    const steam = (x, cls) => '<g class="sl-st ' + cls + '"><ellipse cx="' + x + '" cy="58" rx="8" ry="6" fill="#fff" opacity=".6"/></g>';
    const person = (x, c, cls) => '<g class="sl-bob ' + cls + '"><circle cx="' + x + '" cy="170" r="7" fill="#3a2a22"/><rect x="' + (x - 8) + '" y="178" width="16" height="26" rx="5" fill="' + c + '"/><rect x="' + (x - 7) + '" y="204" width="5" height="14" fill="#222"/><rect x="' + (x + 2) + '" y="204" width="5" height="14" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sls3)"/>' +
      /* cinderblock building */
      '<rect x="40" y="80" width="320" height="140" fill="#e9e3d6"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M40 ' + (90 + i * 10) + 'h320" stroke="#cfc6b4" stroke-width="1"/>').join("") +
      '<rect x="40" y="72" width="320" height="10" fill="#b9b0a0"/><rect x="300" y="40" width="16" height="34" fill="#7a7a7a"/>' + steam(308, "") + steam(304, "sl-st2") + steam(312, "sl-st3") +
      /* hand-painted sign */
      '<rect x="70" y="92" width="200" height="40" rx="4" fill="' + RED + '" stroke="#7a1020" stroke-width="2"/><text x="170" y="120" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#fff6e0" letter-spacing="1">HOT CHICKEN</text>' +
      /* flame */
      '<path class="sl-flk" d="M300 128q-16 -20 0 -40q2 14 10 16q6 -8 4 -16q14 18 0 40z" fill="#ff8a2a"/><path class="sl-flk sl-flk2" d="M304 126q-6 -10 0 -18q4 8 8 6q2 6 -2 12z" fill="#ffe066"/>' +
      /* window + door */
      '<rect x="70" y="146" width="90" height="40" fill="#2a3440"/><rect x="72" y="148" width="86" height="36" fill="#ffd98a" opacity=".55"/><text x="115" y="170" text-anchor="middle" ' + font + ' font-size="9" fill="#7a1020">ORDER HERE</text>' +
      '<rect x="190" y="146" width="40" height="74" fill="#5a3f2a"/><circle cx="224" cy="184" r="2.5" fill="#d8c08a"/>' +
      '<rect x="250" y="134" width="90" height="26" fill="#fff6e0" stroke="#7a1020" stroke-width="1.5"/><text x="295" y="145" text-anchor="middle" ' + font + ' font-size="7.5" fill="#7a1020">PLAIN · MILD · MEDIUM</text><text x="295" y="155" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + RED + '">HOT · XXX HOT</text>' +
      '<rect x="0" y="218" width="400" height="42" fill="#6e6a64"/><path d="M0 218h400" stroke="#aaa59c" stroke-width="3"/>' +
      person(250, "#4fc3f7", "") + person(274, GOLD, "sl-bob2") + person(298, "#7bb661", "") + person(322, "#e8574a", "sl-bob2") +
      label(8, 160, "HOT CHICKEN · EAST SIDE"),
      sky("sls3", "#6aa8d8", "#f4dcb0"));
  }

  /* 4. Gentrifried: old shotgun house between new tall-skinnies, crane swinging */
  function slgentri() {
    return svg(
      '<rect width="400" height="260" fill="url(#sls4)"/>' +
      /* tower crane */
      '<rect x="296" y="40" width="8" height="160" fill="#f2c14e"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M296 ' + (44 + i * 16) + 'l8 16" stroke="#b8902a" stroke-width="1.5"/>').join("") +
      '<g class="sl-crane"><rect x="200" y="36" width="190" height="7" fill="#f2c14e"/><path d="M300 36l0 -16l-90 16M300 20l80 16" stroke="#b8902a" stroke-width="1.5" fill="none"/><rect x="372" y="43" width="16" height="10" fill="#666"/>' +
      '<g class="sl-hook"><path d="M226 43v40" stroke="#333" stroke-width="1.2"/><rect x="214" y="83" width="24" height="12" fill="#8a95a3"/></g></g>' +
      /* left tall-skinny: dark modern box */
      '<rect x="20" y="88" width="88" height="132" fill="#2f3439"/><rect x="20" y="88" width="88" height="8" fill="#1d2125"/>' +
      [[32, 108], [70, 108], [32, 150], [70, 150]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="26" height="30" fill="#9fc6e0" opacity=".8"/>').join("") +
      /* old shotgun house with porch */
      '<path d="M128 140l56 -36l56 36z" fill="#7a4a3a"/><rect x="134" y="140" width="100" height="80" fill="#d9c9a3"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M134 ' + (148 + i * 10) + 'h100" stroke="#b8a780" stroke-width="1"/>').join("") +
      '<rect x="128" y="168" width="112" height="6" fill="#efe6d0"/>' + [132, 168, 204, 236].map(x => '<rect x="' + x + '" y="174" width="4" height="46" fill="#efe6d0"/>').join("") +
      '<rect x="150" y="148" width="22" height="18" fill="#ffe7a8" opacity=".75"/><rect x="194" y="148" width="22" height="18" fill="#ffe7a8" opacity=".75"/><rect x="176" y="182" width="18" height="38" fill="#5a3f2a"/>' +
      /* right tall-skinny: white modern box with a wood strip */
      '<rect x="258" y="96" width="84" height="124" fill="#f1f1ee"/><rect x="258" y="96" width="14" height="124" fill="#b07a4a"/>' +
      [[282, 112], [312, 112], [282, 158], [312, 158]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="22" height="32" fill="#2f3a44"/>').join("") +
      '<rect x="0" y="218" width="400" height="42" fill="#6e6a64"/><path d="M0 218h400" stroke="#aaa59c" stroke-width="3"/>' +
      '<g class="sl-car"><rect x="0" y="230" width="66" height="16" rx="5" fill="#4fc3f7"/><rect x="12" y="222" width="36" height="11" rx="4" fill="#2a6f99"/><circle cx="14" cy="247" r="5" fill="#111"/><circle cx="52" cy="247" r="5" fill="#111"/></g>' +
      label(214, 178, "GENTRIFRIED · EAST NASHVILLE"),
      sky("sls4", "#8ec5e8", "#f6e1b8"));
  }

  /* 5. Lischey Ave and Cleveland St, Tennessee State Capitol behind */
  function slcorner() {
    const cols = Array.from({ length: 8 }, (_, i) => '<rect x="' + (156 + i * 12) + '" y="82" width="5" height="34" fill="#efe8d8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sls5)"/>' +
      /* the hill and the Capitol: limestone temple, pediment, tower with a lantern */
      '<path d="M90 128q110 -36 220 0z" fill="#4a6b3a"/>' +
      '<rect x="150" y="78" width="100" height="40" fill="#d8ceb6"/>' + cols + '<path d="M146 78l54 -18l54 18z" fill="#e3dac4" stroke="#b8ad92" stroke-width="1"/>' +
      '<rect x="186" y="38" width="28" height="24" fill="#d8ceb6"/>' + [189, 196, 203, 209].map(x => '<rect x="' + x + '" y="42" width="3" height="18" fill="#efe8d8"/>').join("") +
      '<rect x="190" y="26" width="20" height="12" fill="#cfc4aa"/><path d="M190 26l10 -12l10 12z" fill="#cfc4aa"/>' +
      '<rect x="0" y="122" width="400" height="102" fill="#8a4a34"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#703a28" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#703a28" stroke-width="1"/>').join("")).join("") +
      tag("STARLITO", 18, 196, 42, GOLD, -6) + tag("GRIND HARD", 196, 214, 18, "#4fc3f7", -3) + tag("LITO", 40, 150, 20, RED, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="sl-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="' + RED + '"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#8a0c20"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(272, 98, 126, "Lischey Ave") + sign(268, 124, 130, "Cleveland St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sl-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sl-sp"><circle cx="240" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sl-sp sl-sp2"><circle cx="246" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sls5", "#2a3466", "#f09a6a"));
  }

  window.SCENES = { slstop: slstop, slbridge: slbridge, slchicken: slchicken, slgentri: slgentri, slcorner: slcorner };
})();
