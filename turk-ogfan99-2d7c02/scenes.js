/* turk scenes (Regions tab: New Orleans; the Magnolia Projects, 3rd Ward / Central City, Uptown - where Turk (Tab Virgil Jr.) grew up). CSS classes and ids prefixed tk- (the page's own anim-train is kept).
   1 LaSalle St / Seventh St on RTA bus route 57 (Franklin - Freret), which runs LaSalle St right through the old Magnolia: the bus pulls in under the live oaks.
   2 "Still On Fire": a hometown stage at night - flame cannons shooting up, light beams sweeping, hands up in the crowd (silhouettes).
   3 "Joseph" (his 2025 album and title track - "my name Hot Boy Turk, but you can call me Joseph"): a coat of many colors on a hanger in a beam of light, doves crossing.
   4 Sunday morning at an Uptown church ("Thank you, Lord", 13 years out, clean and sober): white clapboard church, the bell swinging, stained glass glowing at sunrise.
   5 Seventh St and Clara St in the old Magnolia: green signs, TURK tagged on the brick, the pointed white Plaza Tower on the skyline behind. Every 9 avoided. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tkflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.tk-flk{animation:tkflick 2.2s infinite}.tk-flk2{animation-delay:.8s}' +
    '@keyframes tkmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.tk-moss{transform-box:fill-box;transform-origin:50% 0%;animation:tkmoss 3.4s ease-in-out infinite}.tk-moss2{animation-delay:-1.7s}' +
    '@keyframes tkflame{0%,100%{transform:scaleY(1);opacity:.95}50%{transform:scaleY(1.35);opacity:.75}}.tk-fl{transform-box:fill-box;transform-origin:50% 100%;animation:tkflame .5s ease-in-out infinite}.tk-fl2{animation-delay:-.25s}' +
    '@keyframes tkbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.tk-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tkbeam 3s ease-in-out infinite}.tk-beam2{animation-delay:-1.5s}' +
    '@keyframes tkbnc{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.tk-bnc{animation:tkbnc .7s ease-in-out infinite}.tk-bnc2{animation-delay:-.35s}' +
    '@keyframes tksway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tk-sway{transform-box:fill-box;transform-origin:50% 0%;animation:tksway 3s ease-in-out infinite}' +
    '@keyframes tkglow{0%,100%{opacity:.35}50%{opacity:.7}}.tk-glow{animation:tkglow 2.6s ease-in-out infinite}' +
    '@keyframes tkdove{from{transform:translate(-40px,0)}to{transform:translate(460px,-40px)}}.tk-dove{animation:tkdove 11s linear infinite}.tk-dove2{animation-delay:-5.5s}' +
    '@keyframes tkbell{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.tk-bell{transform-box:fill-box;transform-origin:50% 0%;animation:tkbell 1.4s ease-in-out infinite}' +
    '@keyframes tkcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.tk-cloud{animation:tkcloud 30s linear infinite}.tk-cloud2{animation-delay:-15s}' +
    '@keyframes tkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tk-spr{animation:tkspray 1.4s ease-out infinite}.tk-spr2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const PURP = "#a58bff", FIRE = "#ff7a1a", MINT = "#46d39a";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.55, -0.15, 0.25, 0.65].map((k, i) => '<path class="tk-moss' + (i % 2 ? " tk-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 12 1 22q-2 7 0 12" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const trunk = (x, y, h) => '<path d="M' + (x - 5) + ' ' + (y + h) + 'q4 -' + (h / 2) + ' 2 -' + h + 'h6q-2 ' + (h / 2) + ' 4 ' + h + 'z" fill="#3a2a1e"/>';
  /* old Magnolia-style brick building: red brick, white iron gallery */
  const brick = (x, y, w, h) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#9a4a34"/>' +
    Array.from({ length: Math.floor(w / 22) }, (_, i) => '<rect class="' + (i % 2 ? "tk-flk" : "") + '" x="' + (x + 6 + i * 22) + '" y="' + (y + 10) + '" width="10" height="14" fill="#ffe2a0" opacity=".85"/><rect x="' + (x + 6 + i * 22) + '" y="' + (y + 44) + '" width="10" height="14" fill="#2a1a18"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 32) + '" width="' + w + '" height="3" fill="#eee"/>' + Array.from({ length: Math.floor(w / 8) }, (_, i) => '<rect x="' + (x + 2 + i * 8) + '" y="' + (y + 32) + '" width="1.5" height="10" fill="#eee"/>').join("") + '</g>';

  /* 1. LaSalle St / Seventh St, RTA 57 */
  function tkstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="118" width="268" height="72" rx="10" fill="#f2f4f6" stroke="#2a3440" stroke-width="2"/>' + win +
      '<rect x="296" y="124" width="30" height="40" rx="4" fill="#1d2a36"/><rect x="60" y="156" width="268" height="7" fill="#2e8b57"/><rect x="60" y="163" width="268" height="4" fill="' + PURP + '"/>' +
      '<rect x="262" y="108" width="64" height="12" rx="2" fill="#111"/><text x="294" y="117" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">57 FRANKLIN</text>' +
      '<circle cx="104" cy="192" r="11" fill="#1c1c1c"/><circle cx="104" cy="192" r="4" fill="#888"/><circle cx="280" cy="192" r="11" fill="#1c1c1c"/><circle cx="280" cy="192" r="4" fill="#888"/>' +
      '<rect x="322" y="170" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks1)"/>' +
      brick(0, 70, 130, 70) + brick(150, 76, 110, 64) +
      trunk(330, 100, 50) + oak(330, 84, 58, "#24402a") + trunk(40, 104, 46) + oak(40, 92, 44, "#24402a") +
      '<rect x="0" y="190" width="400" height="10" fill="#bdb6aa"/><rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/><path d="M0 230h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="358" y="100" width="5" height="100" fill="#2f2f2f"/><rect x="340" y="104" width="44" height="44" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' +
      '<circle cx="362" cy="120" r="11" fill="#2e8b57"/><text x="362" y="124.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">57</text><text x="362" y="142" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">RTA BUS</text>' +
      '<rect x="8" y="16" width="224" height="40" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="20" y="34" ' + font + ' font-size="14" fill="#fff">LASALLE ST</text><text x="20" y="50" ' + font + ' font-size="11" fill="#cfd8dc">at Seventh St  •  the Magnolia</text>' +
      '<circle cx="210" cy="36" r="12" fill="#2e8b57"/><text x="210" y="40.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">57</text>',
      sky("tks1", "#141a36", "#c8705a"));
  }

  /* 2. Still On Fire: the stage */
  function tkfire() {
    const crowd = Array.from({ length: 12 }, (_, i) => { const x = 14 + i * 34, h = 34 + (i % 3) * 6; return '<g class="tk-bnc' + (i % 2 ? " tk-bnc2" : "") + '" fill="#0a0612"><circle cx="' + x + '" cy="' + (238 - h) + '" r="9"/><rect x="' + (x - 10) + '" y="' + (246 - h) + '" width="20" height="' + (h + 10) + '" rx="6"/>' +
      (i % 2 ? '<path d="M' + (x + 7) + ' ' + (250 - h) + 'l10 -26" stroke="#0a0612" stroke-width="6" stroke-linecap="round"/>' : '<path d="M' + (x - 7) + ' ' + (250 - h) + 'l-8 -28" stroke="#0a0612" stroke-width="6" stroke-linecap="round"/>') + '</g>'; }).join("");
    const flame = (x, cls) => '<g class="tk-fl ' + cls + '"><path d="M' + (x - 14) + ' 150q-4 -40 14 -70q18 30 14 70z" fill="' + FIRE + '"/><path d="M' + (x - 8) + ' 150q-2 -26 8 -46q10 20 8 46z" fill="#ffd34d"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0c0818"/>' +
      [70, 200, 330].map((x, i) => '<path class="tk-beam' + (i % 2 ? " tk-beam2" : "") + '" d="M' + x + ' 0l-30 170h60z" fill="' + [PURP, "#ffffff", MINT][i] + '" opacity=".18"/>').join("") +
      '<rect x="20" y="10" width="360" height="10" fill="#333"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 8) + '" y="18" width="16" height="10" fill="#555"/>').join("") +
      '<rect x="0" y="150" width="400" height="30" fill="#1e1a26"/><rect x="0" y="150" width="400" height="4" fill="' + PURP + '"/>' +
      '<rect x="10" y="96" width="40" height="54" fill="#191919"/><rect x="350" y="96" width="40" height="54" fill="#191919"/><circle cx="30" cy="112" r="9" fill="#333"/><circle cx="30" cy="136" r="11" fill="#333"/><circle cx="370" cy="112" r="9" fill="#333"/><circle cx="370" cy="136" r="11" fill="#333"/>' +
      flame(80, "") + flame(140, "tk-fl2") + flame(260, "") + flame(320, "tk-fl2") +
      '<rect x="160" y="40" width="80" height="26" rx="3" fill="#160f22" stroke="' + FIRE + '" stroke-width="2"/><text x="200" y="59" text-anchor="middle" ' + font + ' font-size="15" fill="' + FIRE + '" class="tk-flk">ON FIRE</text>' +
      '<rect x="196" y="100" width="4" height="50" fill="#888"/><circle cx="198" cy="98" r="5" fill="#bbb"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#140e1e"/>' + crowd);
  }

  /* 3. Joseph: the coat of many colors */
  function tkjoseph() {
    const stripes = ["#c62828", "#2a9d8f", "#f4a261", "#6a4c93", "#e9c46a", "#1d6fa5", "#8d5524", "#43a047"];
    const coat = '<g class="tk-sway"><path d="M200 46q-6 -14 4 -16" stroke="#c9a24a" stroke-width="3" fill="none"/><path d="M160 60h80" stroke="#8a5a2a" stroke-width="5" stroke-linecap="round"/>' +
      '<clipPath id="tkcoat"><path d="M168 60h64l36 40l-16 14l-12 -12v118h-80v-118l-12 12l-16 -14z"/></clipPath>' +
      '<g clip-path="url(#tkcoat)">' + stripes.map((c, i) => '<rect x="120" y="' + (56 + i * 23) + '" width="80" height="23" fill="' + c + '"/><rect x="200" y="' + (56 + i * 23) + '" width="80" height="23" fill="' + stripes[(i + 3) % 8] + '"/><path d="M120 ' + (78 + i * 23) + 'h160" stroke="#fff3c4" stroke-width="1.5" stroke-dasharray="3 3"/>').join("") + '</g>' +
      '<path d="M168 60h64l36 40l-16 14l-12 -12v118h-80v-118l-12 12l-16 -14z" fill="none" stroke="#2a1a10" stroke-width="2"/><path d="M200 62v158" stroke="#2a1a10" stroke-width="1.5"/><path d="M186 60l14 22l14 -22" fill="none" stroke="#2a1a10" stroke-width="2"/></g>';
    const dove = (cls, y) => '<g class="tk-dove ' + cls + '"><path d="M0 ' + y + 'q10 -10 20 0q-4 -12 8 -16q-2 10 4 14q6 0 8 4q-14 4 -40 -2z" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks3)"/>' +
      '<path class="tk-glow" d="M160 0h80l70 260h-220z" fill="#fff6c8"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#3a2a22"/>' + coat + dove("", 40) + dove("tk-dove2", 70),
      sky("tks3", "#2a1a4a", "#a58bff"));
  }

  /* 4. Sunday morning church */
  function tkchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#tks4)"/>' +
      '<circle cx="320" cy="110" r="34" fill="#ffd36a" opacity=".9"/>' +
      '<g class="tk-cloud"><ellipse cx="0" cy="40" rx="40" ry="10" fill="#fff" opacity=".7"/></g><g class="tk-cloud tk-cloud2"><ellipse cx="0" cy="66" rx="30" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<rect x="120" y="110" width="160" height="110" fill="#f4f1ea"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M120 ' + (116 + i * 8) + 'h160" stroke="#dcd6c8" stroke-width="1"/>').join("") +
      '<path d="M110 112l90 -50l90 50z" fill="#5a3a2a"/>' +
      '<rect x="176" y="34" width="48" height="50" fill="#f4f1ea" stroke="#dcd6c8"/><path d="M170 36l30 -30l30 30z" fill="#5a3a2a"/><path d="M200 6v-6" stroke="#c9a24a" stroke-width="2"/><rect x="197" y="-2" width="6" height="2" fill="#c9a24a"/>' +
      '<rect x="186" y="44" width="28" height="30" fill="#2a1a10"/><g class="tk-bell"><path d="M192 48h16l4 20h-24z" fill="#c9a24a"/><circle cx="200" cy="70" r="3" fill="#7a5a10"/></g>' +
      '<rect x="182" y="160" width="36" height="60" rx="16" fill="#6a3a22"/><path d="M200 160v60" stroke="#3a1a10" stroke-width="2"/>' +
      [140, 244].map((x, i) => '<path d="M' + x + ' 190v-34q8 -14 16 0v34z" fill="#1a1a2a"/><path class="tk-flk' + (i ? " tk-flk2" : "") + '" d="M' + (x + 2) + ' 188v-30q6 -10 12 0v30z" fill="url(#tkglass)"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#4a7a3a"/><rect x="172" y="220" width="56" height="40" fill="#bdb6aa"/>' +
      oak(40, 150, 50, "#24402a") + trunk(40, 160, 60) + oak(370, 160, 40, "#24402a") + trunk(370, 170, 50),
      sky("tks4", "#7fb6e8", "#ffd9a0") + '<linearGradient id="tkglass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e53935"/><stop offset=".35" stop-color="#ffd23f"/><stop offset=".7" stop-color="#1e88e5"/><stop offset="1" stop-color="#8e24aa"/></linearGradient>');
  }

  /* 5. Seventh St and Clara St, Plaza Tower behind */
  function tkcorner() {
    const plaza = '<g><rect x="186" y="40" width="40" height="100" fill="#e6e2d6"/><rect x="226" y="40" width="10" height="100" fill="#c9c4b6"/><path d="M184 40l26 -30l28 30z" fill="#d8d3c4"/><path d="M211 10v-12" stroke="#bbb" stroke-width="2"/><circle class="tk-flk" cx="211" cy="-2" r="2" fill="#ff5a5a"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect class="' + (i % 4 ? "" : "tk-flk") + '" x="' + (190 + (i % 4) * 9) + '" y="' + (48 + Math.floor(i / 4) * 14) + '" width="5" height="8" fill="#ffe9a8" opacity=".75"/>').join("") + '</g>' +
      '<g fill="#3a4258"><rect x="120" y="80" width="44" height="60"/><rect x="250" y="70" width="40" height="70"/><rect x="296" y="92" width="30" height="48"/><rect x="88" y="98" width="28" height="42"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks5)"/>' + plaza +
      oak(30, 106, 58, "#24402a") + oak(372, 110, 50, "#24402a") +
      '<rect x="0" y="126" width="400" height="98" fill="#8a4a36"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("TURK", 20, 196, 64, PURP, -6) + tag("HOT BOYS", 40, 220, 22, FIRE, -4) + tag("YOU TOO?", 186, 178, 20, MINT, -8) + tag("JOSEPH", 200, 212, 20, "#ffd23f", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="372" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(282, 98, 112, "Seventh St") + sign(282, 124, 112, "Clara St") +
      '<rect x="8" y="116" width="4" height="108" fill="#222"/><circle class="tk-flk" cx="10" cy="114" r="7" fill="#ffe9a8"/>' +
      '<g class="tk-spr"><circle cx="160" cy="166" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="tk-spr tk-spr2"><circle cx="166" cy="160" r="2" fill="' + PURP + '" opacity=".6"/></g>',
      sky("tks5", "#1a1640", "#d97a5a"));
  }

  window.SCENES = { tkstation: tkstation, tkfire: tkfire, tkjoseph: tkjoseph, tkchurch: tkchurch, tkcorner: tkcorner };
})();
