/* ledisi scenes (Regions tab: The Bay Area; East Oakland, where she grew up from 13 after New Orleans). CSS classes prefixed ldi- (the page's own anim-train is kept).
   1 The AC Transit 18 pulling up on Park Blvd at 13th Ave, by Edna Brewer Middle School (her junior high, then McChesney), the Oakland hills behind
   2 UC Berkeley's Young Musicians Program, where she studied piano and opera for five years: a grand piano on the recital stage, keys moving, notes floating up
   3 Beach Blanket Babylon in San Francisco, the cabaret she joined as a teen: red curtains, spotlights, the famous giant hat with a little city skyline on it, bobbing
   4 The Wiz, Antioch, 1990: she played Dorothy. The yellow brick road on stage, the green city at the end, a twister spinning, the silver slippers
   5 Park Blvd and 13th Ave: green signs, LEDISI tagged on the wall, the lake and downtown with the Kaiser Center's curved tower behind */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ldiglow{0%,100%{opacity:.45}50%{opacity:1}}.ldi-glow{animation:ldiglow 2.2s ease-in-out infinite}.ldi-g2{animation-delay:-1.1s}' +
    '@keyframes ldinote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.ldi-note{animation:ldinote 3s ease-out infinite}.ldi-n2{animation-delay:-1s}.ldi-n3{animation-delay:-2s}' +
    '@keyframes ldikey{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.ldi-key{animation:ldikey .5s ease-in-out infinite}.ldi-k2{animation-delay:-.25s}' +
    '@keyframes ldibob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(2deg)}}.ldi-hat{transform-box:fill-box;transform-origin:50% 100%;animation:ldibob 2.4s ease-in-out infinite}' +
    '@keyframes ldibeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ldi-bm{transform-box:fill-box;transform-origin:50% 0%;animation:ldibeam 3.6s ease-in-out infinite}.ldi-bm2{animation-delay:-1.8s}' +
    '@keyframes ldispin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ldi-tw{transform-box:fill-box;transform-origin:50% 50%;animation:ldispin 1.6s linear infinite}' +
    '@keyframes ldidrift{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.ldi-drift{animation:ldidrift 5s ease-in-out infinite}' +
    '@keyframes ldispray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ldi-sp{animation:ldispray 1.4s ease-out infinite}.ldi-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ldi-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="ldi-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.5) + ' ' + y + 'v-18l8 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const ORANGE = "#ff8c42", GOLD = "#f5c542", VIO = "#9b6bff", ACG = "#00843d", ACB = "#0072bc";

  /* 1 */
  function ldistop() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="124" width="32" height="24" rx="2" fill="#20324a"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="114" width="320" height="72" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<path d="M40 160h320v8h-320z" fill="' + ACG + '"/><path d="M40 168h320v5h-320z" fill="' + ACB + '"/>' +
      '<rect x="326" y="124" width="30" height="44" rx="3" fill="#20324a"/><rect x="300" y="116" width="58" height="8" rx="2" fill="#111"/><text x="329" y="122.6" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">18 MONTCLAIR</text>' +
      '<circle cx="356" cy="178" r="3.5" fill="#fff6c2"/><circle cx="92" cy="188" r="12" fill="#111"/><circle cx="92" cy="188" r="5" fill="#777"/><circle cx="300" cy="188" r="12" fill="#111"/><circle cx="300" cy="188" r="5" fill="#777"/></g>';
    /* the school: long low stucco junior high, cream with a tan band, rows of windows, the hills behind */
    const school = '<rect x="10" y="60" width="380" height="54" fill="#efe2c6"/><rect x="10" y="60" width="380" height="8" fill="#c9a77a"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (20 + i * 27) + '" y="76" width="18" height="24" fill="#5b7a94"/>').join("") +
      '<rect x="176" y="86" width="48" height="28" fill="#7a5236"/><rect x="150" y="66" width="100" height="10" fill="#efe2c6"/><text x="200" y="74" text-anchor="middle" ' + font + ' font-size="7" fill="#6a4a2a" letter-spacing="1">MIDDLE SCHOOL</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#ldi1)"/>' +
      '<path d="M0 70q60-40 120-24t120-18t160 10v40h-400z" fill="#5f8a5a"/><path d="M0 76q80-26 170-12t230-8v30h-400z" fill="#4c7449"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (24 + i * 52) + '" cy="' + (56 + (i % 3) * 3) + '" r="9" fill="#3d6440"/>').join("") +
      school +
      '<rect x="0" y="186" width="400" height="74" fill="#3c3e44"/><rect x="0" y="186" width="400" height="5" fill="#c9c4b4"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54 + 6) + '" y="230" width="30" height="4" fill="#f0d24a"/>').join("") +
      bus +
      '<rect x="370" y="96" width="4" height="92" fill="#6b7178"/><rect x="352" y="80" width="40" height="30" rx="3" fill="#111" stroke="#fff" stroke-width="1"/><text x="372" y="92" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">AC TRANSIT</text>' +
      '<rect x="360" y="96" width="24" height="11" rx="5.5" fill="' + ACG + '"/><text x="372" y="104.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">18</text>' +
      '<rect x="8" y="200" width="150" height="20" rx="3" fill="#111"/><text x="83" y="214" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Park Blvd &amp; 13th Ave</text>',
      sky("ldi1", "#f6b26b", "#ffe3b8"));
  }

  /* 2 */
  function ldiymp() {
    const keys = Array.from({ length: 22 }, (_, i) => '<rect class="' + (i % 5 === 1 ? "ldi-key" : i % 7 === 3 ? "ldi-key ldi-k2" : "") + '" x="' + (128 + i * 6.4) + '" y="166" width="5.8" height="18" fill="#f8f6ee"/>').join("") +
      Array.from({ length: 22 }, (_, i) => [1, 2, 4, 5, 6].includes(i % 7) ? '<rect x="' + (132.4 + i * 6.4) + '" y="166" width="3.6" height="11" fill="#111"/>' : "").join("");
    return svg(
      '<rect width="400" height="260" fill="#1b1410"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="0" width="26" height="150" fill="#5a3a26"/>').join("") +
      '<rect x="0" y="0" width="400" height="150" fill="#000" opacity=".25"/>' +
      '<path class="ldi-bm" d="M200 0l-70 210h140z" fill="#fff4d6" opacity=".14"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#8a5a34"/><rect x="0" y="196" width="400" height="5" fill="#a8744a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 201v59" stroke="#7a4e2c" stroke-width="1.5"/>').join("") +
      /* grand piano, lid up */
      '<path d="M120 160h168q34 0 34 -18q0 -22 -40 -22h-80q-30 0 -50 12z" fill="#0d0d0f" stroke="#333" stroke-width="1.5"/>' +
      '<path d="M150 132l150 -70l6 8l-146 74z" fill="#141416" stroke="#333" stroke-width="1.5"/><path d="M160 140l10 -32" stroke="#555" stroke-width="2"/>' +
      '<rect x="120" y="160" width="160" height="26" fill="#0d0d0f"/>' + keys +
      '<path d="M134 186v12M270 186v12M300 160v38" stroke="#0d0d0f" stroke-width="6"/>' +
      '<rect x="188" y="146" width="40" height="18" rx="1" fill="#f4efe0" transform="rotate(-8 208 155)"/>' +
      '<rect x="54" y="168" width="42" height="10" rx="2" fill="#3a2418"/><path d="M60 178v20M90 178v20" stroke="#3a2418" stroke-width="4"/>' +
      note(170, 120, GOLD) + note(220, 112, ORANGE, "ldi-n2") + note(258, 124, "#fff", "ldi-n3") + note(140, 104, VIO, "ldi-n2") +
      '<rect x="80" y="14" width="240" height="24" rx="3" fill="#003262"/><text x="200" y="31" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fdb515" letter-spacing="1.2">YOUNG MUSICIANS PROGRAM</text>',
      "");
  }

  /* 3 */
  function ldibbb() {
    const city = '<g fill="#e8f0ff">' + [[-50, 22, 26], [-24, 16, 34], [-4, 14, 22], [14, 18, 40], [36, 14, 28]].map(b => '<rect x="' + b[0] + '" y="' + (-b[2]) + '" width="' + b[1] + '" height="' + b[2] + '"/>').join("") +
      '<path d="M2 -40l9 -46l9 46z"/></g>' + Array.from({ length: 12 }, (_, i) => '<rect class="ldi-glow' + (i % 2 ? " ldi-g2" : "") + '" x="' + (-46 + i * 8) + '" y="' + (-12 - (i % 3) * 8) + '" width="3" height="3" fill="#ffd98a"/>').join("");
    const hat = '<g class="ldi-hat"><g transform="translate(200 150)"><ellipse cx="0" cy="0" rx="92" ry="16" fill="#2b5fb0"/><path d="M-62 -4q0 -30 62 -30t62 30z" fill="#3a74d0"/>' +
      '<g transform="translate(0 -30)">' + city + '</g><path d="M-80 -6q20 8 40 0t40 0t40 0t40 0" stroke="' + GOLD + '" stroke-width="4" fill="none"/>' +
      [-70, -40, 40, 70].map(x => '<circle cx="' + x + '" cy="2" r="3" fill="#fff"/>').join("") + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="#14060a"/>' +
      '<path d="M0 0h70q-10 120 6 260h-76z" fill="#9a1426"/><path d="M400 0h-70q10 120 -6 260h76z" fill="#9a1426"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (12 + i * 12) + ' 0q-6 130 4 260" stroke="#6e0c1a" stroke-width="3" fill="none"/><path d="M' + (388 - i * 12) + ' 0q6 130 -4 260" stroke="#6e0c1a" stroke-width="3" fill="none"/>').join("") +
      '<path d="M0 0h400v26q-200 18 -400 0z" fill="#b8192e"/>' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + (12 + i * 25) + '" cy="26" r="3" fill="' + GOLD + '"/>').join("") +
      '<path class="ldi-bm" d="M110 0l-40 200h80z" fill="#fff4d6" opacity=".16"/><path class="ldi-bm ldi-bm2" d="M290 0l-40 200h80z" fill="#ffc6e0" opacity=".16"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a1a12"/><rect x="0" y="196" width="400" height="6" fill="' + GOLD + '" opacity=".7"/>' +
      hat +
      '<rect x="184" y="146" width="32" height="18" rx="6" fill="#e84f8a"/><path d="M172 196q4-34 12-36h32q8 2 12 36z" fill="#e84f8a"/><path d="M172 196l-8 0l10-30zM228 196l8 0l-10-30z" fill="#c23a72"/>' +
      Array.from({ length: 16 }, (_, i) => '<g class="' + (i % 2 ? "ldi-glow" : "ldi-glow ldi-g2") + '"><circle cx="' + (14 + i * 25) + '" cy="250" r="9" fill="#050305"/></g>').join(""),
      "");
  }

  /* 4 */
  function ldiwiz() {
    const bricks = Array.from({ length: 7 }, (_, r) => Array.from({ length: 10 }, (_, c) => {
      const t = r / 6, w = 22 + t * 38, x0 = 200 - (70 + t * 170) + c * w * 0.98 + (r % 2 ? w / 2 : 0), y = 150 + r * 15;
      return x0 < 200 + 70 + t * 170 - 4 ? '<rect x="' + x0.toFixed(1) + '" y="' + y + '" width="' + (w - 2).toFixed(1) + '" height="' + (12 + t * 2) + '" rx="1" fill="' + (c % 3 ? "#f2c21b" : "#e3ae0e") + '" stroke="#a87a06" stroke-width=".8"/>' : "";
    }).join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ldi4)"/>' + stars(10) +
      /* the green city at the end of the road */
      '<g fill="#2fbf6a">' + [[150, 60, 14], [168, 40, 12], [186, 28, 16], [206, 44, 12], [222, 56, 14], [240, 70, 12]].map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (150 - t[1]) + '"/><path d="M' + t[0] + ' ' + t[1] + 'l' + (t[2] / 2) + ' -16l' + (t[2] / 2) + ' 16z"/>').join("") + '</g>' +
      Array.from({ length: 9 }, (_, i) => '<rect class="ldi-glow' + (i % 2 ? " ldi-g2" : "") + '" x="' + (154 + i * 10) + '" y="' + (90 + (i % 3) * 12) + '" width="3" height="5" fill="#d6ffe0"/>').join("") +
      '<path d="M0 150h400v110h-400z" fill="#5a3a22"/>' + bricks +
      /* the twister */
      '<g transform="translate(330 70)"><g class="ldi-tw">' + [0, 1, 2].map(i => '<ellipse cx="0" cy="0" rx="' + (26 - i * 7) + '" ry="' + (6 - i * 1.4) + '" fill="none" stroke="#c9c4d6" stroke-width="3" opacity=".8" transform="translate(0 ' + (i * 16) + ')"/>').join("") + '</g>' +
      '<path d="M-24 0q14 30 24 62q10 -32 24 -62" fill="#a8a2ba" opacity=".55"/></g>' +
      /* the silver slippers */
      '<g transform="translate(170 214)"><path d="M0 10q0 -10 12 -10h10q6 0 8 6l2 6h-32z" fill="#dfe6ef" stroke="#8a96a6"/><path d="M38 10q0 -10 12 -10h10q6 0 8 6l2 6h-32z" fill="#dfe6ef" stroke="#8a96a6"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="ldi-glow' + (i % 2 ? " ldi-g2" : "") + '" cx="' + (6 + i * 12) + '" cy="4" r="1.6" fill="#fff"/>').join("") + '</g>' +
      '<path d="M0 0h50v260h-50zM350 0h50v0z" fill="#3a0e18" opacity=".0"/>' +
      '<rect x="10" y="14" width="136" height="24" rx="3" fill="#111"/><text x="78" y="31" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="2">THE WIZ, 1990</text>',
      sky("ldi4", "#2a1650", "#d07a9a"));
  }

  /* 5 */
  function ldicorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ldi5)"/>' + stars(16) +
      /* downtown by the lake: the Kaiser Center's long curved pale tower, other towers, lake lights */
      '<g fill="#2a2440"><rect x="40" y="70" width="34" height="66"/><rect x="82" y="52" width="26" height="84"/><rect x="268" y="60" width="30" height="76"/><rect x="306" y="80" width="40" height="56"/></g>' +
      '<path d="M120 136v-84q60 -14 128 0v84z" fill="#c9cfd8"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M122 ' + (62 + i * 7) + 'q62 -12 124 0" stroke="#8a93a2" stroke-width="1.2" fill="none"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect class="ldi-glow' + (i % 2 ? " ldi-g2" : "") + '" x="' + (134 + i * 14) + '" y="' + (76 + (i % 3) * 14) + '" width="5" height="3" fill="#ffe8a8"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="ldi-glow' + (i % 2 ? "" : " ldi-g2") + '" cx="' + (8 + i * 18) + '" cy="134" r="1.8" fill="#fff6c2"/>').join("") +
      '<rect x="0" y="136" width="400" height="88" fill="#6e4a6a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#5e3c5a" stroke-width="1"/>').join("") +
      tag("LEDISI", 22, 196, 58, ORANGE, -6) + tag("SOULSINGER", 214, 172, 22, GOLD, -4) + tag("LET LOVE RULE", 30, 216, 16, "#fff", -3) + tag("EAST OAKLAND", 196, 212, 17, VIO, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(310, 98, 90, "Park Blvd") + sign(312, 124, 86, "13th Ave") +
      '<g class="ldi-sp"><circle cx="196" cy="160" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="ldi-sp ldi-sp2"><circle cx="202" cy="154" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("ldi5", "#1a1238", "#e07a4a"));
  }

  window.SCENES = { ldistop: ldistop, ldiymp: ldiymp, ldibbb: ldibbb, ldiwiz: ldiwiz, ldicorner: ldicorner };
})();
