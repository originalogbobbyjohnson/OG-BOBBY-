/* mcren scenes (Regions tab: Los Angeles + SoCal; Kelly Park, Compton). CSS classes prefixed rn- (the page's own anim-train is kept).
   1 Metro Local 127 bus stop on E Compton Blvd at Atlantic Ave: the orange 127 pulling in at the shelter, palms, a hazy sunset.
   2 Dominguez High School on S San Jose Ave (his school, the Dons): cream stucco, red tile roof, black-red-gold banner waving.
   3 Audio Achievements studio in Torrance, where the first N.W.A album was cut: a 24-track tape machine, reels spinning, meters bouncing.
   4 Kelly Park, East Compton: the grass, the basketball court, a ball bouncing, palms swaying.
   5 E Compton Blvd and S Pannes Ave: green signs, REN tagged on the wall, the 710 freeway and the river power towers behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rnflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rn-flk{animation:rnflick 2.2s infinite}' +
    '@keyframes rnblink{0%,49%{opacity:1}50%,100%{opacity:.25}}.rn-bl{animation:rnblink 1s steps(1) infinite}.rn-bl2{animation-delay:.5s}' +
    '@keyframes rncar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.rn-car{animation:rncar 7s linear infinite}.rn-car2{animation-delay:-3.5s}' +
    '@keyframes rnsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.rn-palm{transform-box:fill-box;transform-origin:50% 100%;animation:rnsway 3.5s ease-in-out infinite}.rn-palm2{animation-delay:-1.6s}' +
    '@keyframes rnspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rn-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rnspin 2.4s linear infinite}' +
    '@keyframes rnball{0%{transform:translateY(0)}100%{transform:translateY(-30px)}}.rn-ball{animation:rnball .5s ease-out infinite alternate}' +
    '@keyframes rnflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.rn-flag{transform-box:fill-box;transform-origin:0 50%;animation:rnflag 1.6s ease-in-out infinite}' +
    '@keyframes rnmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.rn-m{transform-box:fill-box;transform-origin:50% 100%;animation:rnmeter .6s ease-in-out infinite}.rn-m2{animation-delay:-.2s}.rn-m3{animation-delay:-.4s}' +
    '@keyframes rnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rn-sp{animation:rnspray 1.4s ease-out infinite}.rn-sp2{animation-delay:.45s}' +
    '@keyframes rnhaze{0%,100%{opacity:.35}50%{opacity:.6}}.rn-haze{animation:rnhaze 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="rn-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5a3e24" stroke-width="4" fill="none"/>' +
    '<g fill="#2a5a32"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const GOLD = "#e8c15a", RED = "#c8102e", STEEL = "#9aa7b4", METRO = "#e56b1f";

  /* 1. Metro Local 127 on E Compton Blvd at Atlantic Ave */
  function rnstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="112" width="30" height="22" rx="2" fill="#20303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="300" height="58" rx="8" fill="' + METRO + '" stroke="#8a3a0a" stroke-width="2"/>' + wins +
      '<rect x="40" y="140" width="300" height="6" fill="#f6efe4"/>' +
      '<rect x="306" y="110" width="30" height="26" rx="3" fill="#20303c"/><rect x="302" y="102" width="36" height="6" rx="1" fill="#111"/><text x="320" y="107" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">127 DOWNEY</text>' +
      '<circle cx="90" cy="160" r="11" fill="#1a1a1a"/><circle cx="90" cy="160" r="5" fill="#aaa"/><circle cx="290" cy="160" r="11" fill="#1a1a1a"/><circle cx="290" cy="160" r="5" fill="#aaa"/>' +
      '<circle class="rn-flk" cx="336" cy="148" r="3" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rns1)"/>' +
      '<circle cx="320" cy="62" r="26" fill="#ffcf7a" opacity=".7"/><rect class="rn-haze" x="0" y="70" width="400" height="40" fill="#f6b37a"/>' +
      '<g fill="#3a2a3a" opacity=".55"><rect x="0" y="78" width="60" height="30"/><rect x="66" y="86" width="44" height="22"/><rect x="250" y="82" width="70" height="26"/><rect x="330" y="88" width="70" height="20"/></g>' +
      palm(30, 172, 110) + palm(372, 172, 120, "rn-palm2") +
      '<rect x="0" y="168" width="400" height="10" fill="#c9c2b2"/><rect x="0" y="178" width="400" height="82" fill="#4a4846"/>' +
      '<path d="M0 220h40M70 220h40M140 220h40M210 220h40M280 220h40M350 220h40" stroke="#e8d36a" stroke-width="3"/>' +
      bus +
      '<g><rect x="12" y="120" width="5" height="50" fill="#333"/><rect x="2" y="104" width="44" height="18" rx="2" fill="#111"/><rect x="4" y="106" width="16" height="14" rx="2" fill="' + METRO + '"/><text x="12" y="116.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">127</text><text x="33" y="116" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">METRO</text></g>' +
      '<rect x="40" y="20" width="320" height="34" rx="4" fill="#111" stroke="#555" stroke-width="1"/>' +
      '<rect x="50" y="27" width="22" height="20" rx="3" fill="' + METRO + '"/><text x="61" y="41" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">127</text>' +
      '<text x="216" y="35" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Compton Blvd / Atlantic Av</text><text x="216" y="48" text-anchor="middle" ' + font + ' font-size="8" fill="#ccc">METRO LOCAL · EASTBOUND</text>',
      sky("rns1", "#3b2a55", "#f0a36a"));
  }

  /* 2. Dominguez High School, the Dons: cream stucco, red tile roof, black-red-gold */
  function rndominguez() {
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="118" width="20" height="24" rx="1" fill="#3a4a5a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rns2)"/>' +
      '<path d="M30 110L60 92H340L370 110z" fill="#b5442a"/><rect x="34" y="108" width="332" height="74" fill="#efe4c8"/>' + wins +
      '<path d="M170 182v-46q30 -26 60 0v46z" fill="#5a2a1a"/><path d="M176 182v-42q24 -20 48 0v42z" fill="#2a1a12"/>' +
      '<path d="M150 92L200 64L250 92z" fill="#a33a22"/><rect x="160" y="92" width="80" height="18" fill="#efe4c8"/>' +
      '<text x="200" y="105" text-anchor="middle" ' + font + ' font-size="9" fill="#222">DOMINGUEZ HIGH</text>' +
      '<rect x="56" y="40" width="3" height="70" fill="#888"/><g class="rn-flag"><rect x="59" y="40" width="46" height="26" fill="' + RED + '" stroke="#111" stroke-width="2"/><text x="82" y="58" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" stroke="#111" stroke-width=".6">DONS</text></g>' +
      '<rect x="300" y="146" width="56" height="30" rx="2" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="328" y="160" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">DONS</text><text x="328" y="171" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">S SAN JOSE AVE</text>' +
      palm(22, 188, 100) + palm(384, 188, 92, "rn-palm2") +
      '<rect x="0" y="182" width="400" height="22" fill="#7fb05a"/><rect x="0" y="204" width="400" height="56" fill="#c9c0ae"/>' +
      car("rn-car", 0, 236, RED) + car("rn-car rn-car2", 0, 236, "#2a2a2a"),
      sky("rns2", "#5fa7e0", "#dff0ff"));
  }

  /* 3. Audio Achievements, Torrance: the 24-track machine where the first N.W.A album was cut */
  function rnstudio() {
    const reel = (cx) => '<g class="rn-spin"><circle cx="' + cx + '" cy="78" r="30" fill="#c9ccd0" stroke="#666" stroke-width="2"/><circle cx="' + cx + '" cy="78" r="22" fill="#4a3a2a"/><circle cx="' + cx + '" cy="78" r="7" fill="#ddd"/>' +
      '<path d="M' + cx + ' 56v10M' + (cx - 19) + ' 89l8 -5M' + (cx + 19) + ' 89l-8 -5" stroke="#ddd" stroke-width="4"/></g>';
    const meters = Array.from({ length: 8 }, (_, i) => '<rect class="rn-m ' + (i % 3 === 1 ? "rn-m2" : i % 3 === 2 ? "rn-m3" : "") + '" x="' + (262 + i * 14) + '" y="150" width="9" height="40" fill="' + (i < 6 ? "#5ad06a" : RED) + '"/>').join("");
    const faders = Array.from({ length: 10 }, (_, i) => '<rect x="' + (40 + i * 18) + '" y="206" width="3" height="34" fill="#222"/><rect x="' + (36 + i * 18) + '" y="' + (214 + (i * 7) % 18) + '" width="11" height="6" rx="1" fill="#ddd"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1d1a20"/><rect x="0" y="0" width="400" height="130" fill="#2a2430"/>' +
      '<rect x="40" y="30" width="200" height="140" rx="6" fill="#3a3a40" stroke="#777" stroke-width="2"/>' +
      reel(90) + reel(190) +
      '<path d="M90 108L118 138H162L190 108" stroke="#2a1a10" stroke-width="2" fill="none"/><rect x="112" y="132" width="56" height="14" rx="2" fill="#222"/>' +
      '<text x="140" y="162" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">24 TRACK</text>' +
      '<rect x="252" y="140" width="128" height="58" rx="4" fill="#111" stroke="#555"/>' + meters +
      '<rect x="262" y="36" width="118" height="90" rx="4" fill="#0e0e12" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="321" y="62" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">AUDIO</text><text x="321" y="76" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ACHIEVEMENTS</text><text x="321" y="96" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">TORRANCE, CA</text>' +
      '<circle class="rn-bl" cx="290" cy="112" r="4" fill="' + RED + '"/><text x="330" y="115" text-anchor="middle" ' + font + ' font-size="8" fill="' + RED + '">REC</text>' +
      '<rect x="20" y="198" width="230" height="52" rx="4" fill="#2c2c30" stroke="#555"/>' + faders,
      "");
  }

  /* 4. Kelly Park, East Compton: grass, the court, a ball bouncing */
  function rnkellypark() {
    return svg(
      '<rect width="400" height="260" fill="url(#rns4)"/>' +
      '<g fill="#fff" opacity=".8"><ellipse cx="80" cy="40" rx="26" ry="8"/><ellipse cx="300" cy="30" rx="30" ry="9"/></g>' +
      '<g fill="#3e6a34"><circle cx="40" cy="120" r="34"/><circle cx="96" cy="116" r="28"/><circle cx="340" cy="118" r="34"/></g>' +
      palm(150, 150, 110) + palm(250, 150, 118, "rn-palm2") +
      '<rect x="0" y="140" width="400" height="120" fill="#7fb05a"/>' +
      '<path d="M120 170H360L390 250H90z" fill="#3a6a8a"/><path d="M120 170H360L390 250H90z" fill="none" stroke="#f2f2f2" stroke-width="2"/>' +
      '<path d="M240 170v80" stroke="#f2f2f2" stroke-width="1.5"/><ellipse cx="240" cy="208" rx="20" ry="9" fill="none" stroke="#f2f2f2" stroke-width="1.5"/>' +
      '<rect x="356" y="120" width="4" height="70" fill="#888"/><rect x="336" y="114" width="34" height="22" fill="#fff" stroke="#333"/><path d="M344 136h14l-2 10h-10z" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<g class="rn-ball"><circle cx="300" cy="176" r="7" fill="#e07020" stroke="#222" stroke-width="1"/></g>' +
      '<rect x="20" y="186" width="56" height="8" rx="2" fill="#6a4a2a"/><rect x="24" y="194" width="4" height="10" fill="#444"/><rect x="68" y="194" width="4" height="10" fill="#444"/>' +
      '<rect x="12" y="150" width="78" height="22" rx="2" fill="#5a3a22" stroke="#e8d8b0" stroke-width="1.5"/><text x="51" y="165" text-anchor="middle" ' + font + ' font-size="10" fill="#f6ecd2">KELLY PARK</text>',
      sky("rns4", "#7cc0ee", "#e6f4ff"));
  }

  /* 5. E Compton Blvd and S Pannes Ave: REN tagged, the 710 and the river power towers behind */
  function rncorner() {
    const tower = (x) => '<path d="M' + x + ' 128L' + (x + 10) + ' 50L' + (x + 20) + ' 128M' + (x + 3) + ' 104h14M' + (x + 6) + ' 80h8M' + (x - 8) + ' 62h36M' + (x - 4) + ' 74h28" stroke="#3a3a46" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rns5)"/>' +
      '<circle cx="320" cy="58" r="22" fill="#ffd27a" opacity=".8"/>' +
      tower(40) + tower(170) + tower(320) +
      '<path d="M30 62Q115 82 180 62Q260 82 340 62M30 74Q115 94 180 74Q260 94 340 74" stroke="#3a3a46" stroke-width="1" fill="none"/>' +
      '<rect x="0" y="112" width="400" height="10" fill="#8a8680"/><rect x="0" y="122" width="400" height="6" fill="#6a6660"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (20 + i * 50) + '" y="128" width="8" height="10" fill="#6a6660"/>').join("") +
      car("rn-car", 0, 104, "#d8d8d8") + car("rn-car rn-car2", 0, 104, RED) +
      '<rect x="0" y="134" width="400" height="90" fill="#cbbfa8"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#b3a68d" stroke-width="1"/>').join("") +
      tag("MC REN", 26, 202, 46, GOLD, -6) + tag("VILLAIN", 40, 156, 18, RED, -4) + tag("AIN'T RUFF", 176, 158, 15, "#f2efe6", -3) + tag("KELLY PARK", 160, 220, 13, GOLD, -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524d"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(278, 98, 116, "E Compton Blvd") + sign(278, 124, 116, "S Pannes Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="rn-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("rn-car", 0, 240, "#1a1a1a") +
      '<g class="rn-sp"><circle cx="236" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rn-sp rn-sp2"><circle cx="242" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">E COMPTON BLVD · S PANNES AVE · COMPTON</text>',
      sky("rns5", "#241a36", "#d8704a"));
  }

  window.SCENES = { rnstation: rnstation, rndominguez: rndominguez, rnstudio: rnstudio, rnkellypark: rnkellypark, rncorner: rncorner };
})();
