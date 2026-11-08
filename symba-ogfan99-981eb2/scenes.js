/* symba scenes (Regions tab: The Bay Area; Oakland). CSS classes prefixed sy- (the page's own anim-train is kept).
   1 Lake Merritt BART, underground under Oak St: a BART train pulling in, the station sign with the Orange, Green and Blue line bullets.
   2 The L.A. radio freestyle that broke him (Freestyle #104): ON AIR light, the mic, headphones, levels jumping.
   3 The boxing ring for the 2023 movie soundtrack he rapped on ("Culture"): ropes, spotlights, the bell swinging.
   4 "Only black boy in first class, goin' to Paris" (Overnight): the jet window, the iron tower sparkling at night.
   5 Harrison St and Grand Ave by the lake: green signs, SYMBA tagged, the Ordway tower lit up downtown behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes syflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.95}}.sy-flk{animation:syflick 2.4s infinite}.sy-flk2{animation-delay:.8s}' +
    '@keyframes syon{0%,100%{opacity:1}50%{opacity:.45}}.sy-on{animation:syon 1.6s ease-in-out infinite}' +
    '@keyframes sybar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.sy-bar{transform-box:fill-box;transform-origin:50% 100%;animation:sybar .7s ease-in-out infinite}' +
    '.sy-b2{animation-delay:-.2s}.sy-b3{animation-delay:-.4s}.sy-b4{animation-delay:-.55s}' +
    '@keyframes sybell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.sy-bell{transform-box:fill-box;transform-origin:50% 0;animation:sybell .5s ease-in-out infinite}' +
    '@keyframes syspot{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.sy-spot{transform-box:view-box;transform-origin:200px 0px;animation:syspot 4s ease-in-out infinite}.sy-spot2{animation-delay:-2s}' +
    '@keyframes sytwk{0%,100%{opacity:.2}50%{opacity:1}}.sy-tw{animation:sytwk .6s steps(1) infinite}.sy-tw2{animation-delay:-.3s}' +
    '@keyframes sycloud{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.sy-cloud{animation:sycloud 9s linear infinite}' +
    '@keyframes sycar{from{transform:translateX(-120px)}to{transform:translateX(540px)}}.sy-car{animation:sycar 7s linear infinite}.sy-car2{animation-delay:-3.5s}' +
    '@keyframes syspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sy-sp{animation:syspray 1.4s ease-out infinite}.sy-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="54" height="13" rx="5" fill="' + c + '"/><rect x="' + (x + 11) + '" y="' + (y - 8) + '" width="30" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 14) + '" y="' + (y - 6) + '" width="11" height="6" fill="#bfe3ff"/><rect x="' + (x + 28) + '" y="' + (y - 6) + '" width="11" height="6" fill="#bfe3ff"/><circle cx="' + (x + 12) + '" cy="' + (y + 13) + '" r="5" fill="#111"/><circle cx="' + (x + 42) + '" cy="' + (y + 13) + '" r="5" fill="#111"/></g>';
  const bullet = (x, y, c, t) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + c + '"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + t + '</text>';
  const GOLD = "#f5b335", ORG = "#e85d2a", TEAL = "#2fb5a3", BO = "#faa61a", BG = "#4db848", BB = "#0099d8";

  /* 1. Lake Merritt BART, underground */
  function systop() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="112" width="32" height="22" rx="3" fill="#1d2a38"/>').join("");
    const train = '<g class="anim-train"><rect x="30" y="100" width="340" height="70" rx="8" fill="#d9dde1" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<rect x="30" y="142" width="340" height="6" fill="#4a7fb8"/><rect x="30" y="150" width="340" height="3" fill="' + BO + '"/>' +
      '<rect x="190" y="112" width="20" height="54" fill="#b8bec4" stroke="#7d868e"/><circle cx="364" cy="160" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#23262b"/>' +
      '<path d="M0 0h400v70q-200 30-400 0z" fill="#3a3f46"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52 + 10) + '" y="74" width="34" height="5" fill="#fff8dc" class="sy-flk' + (i % 2 ? " sy-flk2" : "") + '"/>').join("") +
      '<rect x="0" y="84" width="400" height="92" fill="#4a4f57"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="84" width="1" height="92" fill="#3d4148"/>').join("") +
      train +
      '<rect x="0" y="176" width="400" height="10" fill="#e8c840"/><rect x="0" y="186" width="400" height="74" fill="#7a7f86"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="186" width="2" height="74" fill="#6a6f76"/>').join("") +
      '<rect x="96" y="14" width="208" height="46" rx="4" fill="#111" stroke="#cfd3d6" stroke-width="1.5"/>' +
      '<text x="200" y="36" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Lake Merritt</text>' +
      bullet(170, 49, BO, "O") + bullet(200, 49, BG, "G") + bullet(230, 49, BB, "B"));
  }

  /* 2. Radio freestyle booth */
  function syleakers() {
    const bars = Array.from({ length: 14 }, (_, i) => '<rect x="' + (236 + i * 10) + '" y="150" width="6" height="40" fill="' + (i % 4 ? TEAL : GOLD) + '" class="sy-bar sy-b' + (1 + (i % 4)) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#16141c"/>' +
      Array.from({ length: 9 }, (_, i) => Array.from({ length: 5 }, (_, k) => '<path d="M' + (8 + i * 22) + ' ' + (16 + k * 22) + 'h12l-6 12z" fill="#262331"/>').join("")).join("") +
      '<rect x="240" y="20" width="120" height="40" rx="6" fill="#3a0d0d" stroke="#555" stroke-width="2"/>' +
      '<text x="300" y="48" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#ff3b30" class="sy-on">ON AIR</text>' +
      '<rect x="226" y="80" width="150" height="120" rx="6" fill="#0c0b10" stroke="#444" stroke-width="2"/>' +
      '<text x="301" y="104" text-anchor="middle" ' + font + ' font-size="11" fill="#d8d2e6">FREESTYLE #104</text>' +
      '<text x="301" y="122" text-anchor="middle" ' + font + ' font-size="8" fill="#8f86a6">LOS ANGELES · LIVE</text>' + bars +
      '<rect x="0" y="200" width="400" height="60" fill="#2c2620"/><rect x="20" y="196" width="360" height="8" fill="#4a3a2c"/>' +
      '<path d="M60 196l40-90" stroke="#888" stroke-width="4"/><path d="M100 106l40 10" stroke="#888" stroke-width="4"/>' +
      '<rect x="128" y="98" width="24" height="40" rx="12" fill="#2b2b2b" stroke="#777" stroke-width="2" transform="rotate(20 140 118)"/>' +
      '<circle cx="152" cy="132" r="24" fill="none" stroke="#555" stroke-width="2" opacity=".7"/>' +
      '<path d="M150 186q0-26 26-26t26 26" fill="none" stroke="#333" stroke-width="5"/><rect x="144" y="180" width="12" height="18" rx="4" fill="' + GOLD + '"/><rect x="196" y="180" width="12" height="18" rx="4" fill="' + GOLD + '"/>');
  }

  /* 3. Boxing ring */
  function syring() {
    return svg(
      '<rect width="400" height="260" fill="#0b0b10"/>' +
      '<g class="sy-spot" opacity=".2"><path d="M200 0L120 260h160z" fill="#fff"/></g><g class="sy-spot sy-spot2" opacity=".14"><path d="M200 0L150 260h100z" fill="' + GOLD + '"/></g>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + (12 + i * 22) + '" cy="' + (150 + (i % 3) * 4) + '" r="9" fill="#1c1c24"/>').join("") +
      '<path d="M40 190h320l30 40H10z" fill="#d8d4cc"/><path d="M10 230h380v20H10z" fill="' + ORG + '"/>' +
      '<rect x="36" y="110" width="8" height="84" fill="#c33"/><rect x="356" y="110" width="8" height="84" fill="#2a5bd7"/>' +
      '<rect x="6" y="140" width="8" height="96" fill="#ddd"/><rect x="386" y="140" width="8" height="96" fill="#ddd"/>' +
      '<path d="M40 120h320M40 142h320M40 164h320" stroke="#e8e2d6" stroke-width="3"/>' +
      '<path d="M10 146l30-26M10 170l30-28M10 194l30-30M390 146l-30-26M390 170l-30-28M390 194l-30-30" stroke="#e8e2d6" stroke-width="3"/>' +
      '<g transform="translate(200 20)"><rect x="-2" y="0" width="4" height="22" fill="#888"/><g class="sy-bell"><path d="M-16 22q16-8 32 0l4 18h-40z" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/><circle cx="0" cy="44" r="4" fill="#7a5512"/></g></g>' +
      '<text x="200" y="98" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff" letter-spacing="3">CULTURE</text>' +
      '<text x="200" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#6a5a44">ON THE SOUNDTRACK · 2023</text>');
  }

  /* 4. First class to Paris: jet window + iron tower */
  function syparis() {
    const tw = Array.from({ length: 16 }, (_, i) => '<circle cx="' + (200 + ((i * 37) % 40) - 20 + (i % 2 ? -(i % 5) : i % 5)) + '" cy="' + (60 + i * 7) + '" r="1.6" fill="#fff6c8" class="sy-tw' + (i % 2 ? " sy-tw2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#d6d0c4"/>' +
      '<rect x="0" y="0" width="400" height="260" fill="#efe9de"/>' +
      '<rect x="110" y="20" width="180" height="200" rx="80" fill="#c8c0b0"/>' +
      '<rect x="124" y="34" width="152" height="172" rx="68" fill="url(#sy4)"/>' +
      '<g clip-path="url(#syclip)">' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (130 + (i * 53) % 150) + '" cy="' + (44 + (i * 29) % 60) + '" r=".9" fill="#fff"/>').join("") +
      '<g class="sy-cloud"><ellipse cx="0" cy="120" rx="50" ry="9" fill="#5a6488" opacity=".7"/></g>' +
      '<path d="M124 180h152v26H124z" fill="#1a1d2e"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + (128 + i * 6.3) + '" cy="' + (184 + (i % 4) * 4) + '" r="1.2" fill="#ffd27a"/>').join("") +
      '<path d="M200 52l-4 30-8 40-10 34-12 28h10l8-16h32l8 16h10l-12-28-10-34-8-40z" fill="#8a6a3a" stroke="#c99a52" stroke-width="1"/>' +
      '<path d="M186 122h28M180 150h40" stroke="#c99a52" stroke-width="3"/><path d="M200 44v10" stroke="#c99a52" stroke-width="2"/>' + tw +
      '</g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#3a2f28"/><rect x="40" y="226" width="120" height="30" rx="10" fill="#5a4636"/>' +
      '<text x="330" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#e8dcc8">1ST CLASS · PARIS</text>',
      sky("sy4", "#0a0e2a", "#3a2b55") + '<clipPath id="syclip"><rect x="124" y="34" width="152" height="172" rx="68"/></clipPath>');
  }

  /* 5. Harrison St & Grand Ave, the Ordway tower behind */
  function sycorner() {
    const winsO = Array.from({ length: 16 }, (_, r) => Array.from({ length: 5 }, (_, c) => '<rect x="' + (232 + c * 9) + '" y="' + (16 + r * 6) + '" width="5" height="3" fill="#ffe6a6" class="' + ((r + c) % 3 ? "" : "sy-flk") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sy5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (14 + i * 33) + '" cy="' + (10 + (i * 11) % 26) + '" r="1" fill="#fff" class="sy-flk' + (i % 2 ? " sy-flk2" : "") + '"/>').join("") +
      '<rect x="120" y="60" width="40" height="60" fill="#1d2233"/><rect x="170" y="44" width="34" height="76" fill="#232a3d"/><rect x="290" y="56" width="44" height="64" fill="#1d2233"/>' +
      '<rect x="226" y="10" width="52" height="110" fill="#2e3448" stroke="#4a5270" stroke-width="1.5"/>' + winsO +
      '<text x="252" y="8" text-anchor="middle" ' + font + ' font-size="6" fill="#9fb0c8">ORDWAY</text>' +
      '<rect x="0" y="116" width="400" height="82" fill="#6b5a6a"/>' +
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2 ? 15 : 0) - 10) + '" y="' + (118 + r * 13) + '" width="28" height="11" fill="#7a6878" stroke="#57475a" stroke-width="1"/>').join("")).join("") +
      tag("SYMBA", 50, 176, 46, GOLD, -5) + tag("RESULTS TAKE TIME", 196, 190, 15, TEAL, -3) +
      '<g class="sy-sp"><circle cx="300" cy="150" r="3" fill="' + ORG + '"/><circle cx="306" cy="146" r="2" fill="' + ORG + '"/></g><g class="sy-sp sy-sp2"><circle cx="312" cy="156" r="2.5" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#34363b"/><rect x="0" y="198" width="400" height="5" fill="#bdbdb4"/>' +
      car("sy-car", 0, 232, ORG) + car("sy-car sy-car2", 0, 232, TEAL) +
      '<rect x="370" y="66" width="5" height="132" fill="#6b7177"/>' + sign(296, 66, 100, "Harrison St") + sign(300, 92, 96, "Grand Ave"),
      sky("sy5", "#0a0c1e", "#3a2a4e"));
  }

  window.SCENES = { systop, syleakers, syring, syparis, sycorner };
})();
