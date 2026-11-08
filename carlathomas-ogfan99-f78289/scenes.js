/* carlathomas scenes (Regions tab: Memphis + Tennessee; Foote Homes, Vance Ave, South Memphis by downtown, where she was born and raised). CSS classes and ids prefixed ct- (the page's own anim-train is kept).
   1 MATA Route 34 Central & Walnut Grove bus pulling up at Vance Ave / Lauderdale St, on the edge of the old Foote Homes.
   2 WDIA radio: the brick studio, the tall tower with its blinking light, the ON AIR sign, the Teen Town Singers' mic (she joined at 10).
   3 Tennessee A&I in Nashville, her college when "Gee Whiz" hit: a columned hall, blue and white banners, students crossing the quad.
   4 The Bohemian Caverns, U Street, Washington DC (her 1967 live album): the cave room, rock arches and stalactites, the spotlit mic.
   5 Vance Ave and S 4th St at Foote Homes: green signs, CARLA THOMAS tagged on the wall, the Egyptian-style Universal Life building behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ctblink{0%,100%{opacity:1}50%{opacity:.15}}.ct-blink{animation:ctblink 1.2s steps(1) infinite}' +
    '@keyframes ctglow{0%,100%{opacity:.55}50%{opacity:1}}.ct-glow{animation:ctglow 2s ease-in-out infinite}' +
    '@keyframes ctwave{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.ct-wave{animation:ctwave 2.4s ease-out infinite;transform-box:fill-box;transform-origin:center}.ct-wave2{animation-delay:-1.2s}' +
    '@keyframes ctnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-64px);opacity:0}}.ct-note{animation:ctnote 3s ease-out infinite}.ct-note2{animation-delay:-1s}.ct-note3{animation-delay:-2s}' +
    '@keyframes ctwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.ct-walk{animation:ctwalk 12s linear infinite}.ct-walk2{animation-delay:-6s}' +
    '@keyframes ctflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.ct-flag{animation:ctflag 2.4s ease-in-out infinite;transform-origin:left center}' +
    '@keyframes ctdrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(40px);opacity:0}}.ct-drip{animation:ctdrip 2.6s ease-in infinite}.ct-drip2{animation-delay:-1.3s}' +
    '@keyframes ctsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ct-sp{animation:ctsp 1.4s ease-out infinite}.ct-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const MATA = "#1f4e79", RED = "#c8102e", PINK = "#ff8fb1", GOLD = "#f5c542", TEAL = "#5fd3c8", TSU = "#1b3f94";
  const person = (x, c) => '<g><circle cx="' + x + '" cy="186" r="5" fill="#3a2a22"/><rect x="' + (x - 5) + '" y="191" width="10" height="16" rx="3" fill="' + c + '"/><path d="M' + (x - 3) + ' 207v10M' + (x + 3) + ' 207v10" stroke="#222" stroke-width="3"/></g>';

  /* 1. MATA Route 34 at Vance Ave / Lauderdale St */
  function ctstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">34 CENTRAL</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const rows = [0, 1, 2].map(i => { const x = 14 + i * 130; return '<rect x="' + x + '" y="62" width="118" height="54" fill="#9a4a36"/><rect x="' + x + '" y="58" width="118" height="6" fill="#d9cdb6"/>' +
      [0, 1, 2, 3].map(j => '<rect x="' + (x + 10 + j * 27) + '" y="72" width="14" height="14" fill="#ffd98a" opacity="' + (j % 2 ? .5 : .85) + '"/><rect x="' + (x + 10 + j * 27) + '" y="94" width="14" height="14" fill="#2b3a4a"/>').join(""); }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cts1)"/>' + stars(16) + rows +
      '<rect x="0" y="116" width="400" height="80" fill="#4f5054"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="30" y="204" width="312" height="44" rx="3" fill="#111"/><text x="42" y="222" ' + font + ' font-size="13" fill="#fff">Vance Ave / Lauderdale St</text><text x="42" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Foote Homes · Route 34 Central &amp; Walnut Grove</text>' +
      badge(296, 226, "34", MATA),
      sky("cts1", "#2a2350", "#f0a080"));
  }

  /* 2. WDIA radio, the Teen Town Singers */
  function ctwdia() {
    const tower = '<path d="M318 210L340 20L362 210" stroke="#c8102e" stroke-width="3" fill="none"/><path d="M324 160h32M328 120h24M332 80h16M335 50h10" stroke="#c8102e" stroke-width="2"/>' +
      '<path d="M324 160L352 120M356 160L328 120M328 120L348 80M352 120L332 80" stroke="#e8e8e8" stroke-width="1.2"/>' +
      '<circle class="ct-blink" cx="340" cy="18" r="4" fill="#ff3b3b"/>' +
      '<circle class="ct-wave" cx="340" cy="18" r="14" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="ct-wave ct-wave2" cx="340" cy="18" r="14" fill="none" stroke="' + GOLD + '" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cts2)"/>' + stars(26) + tower +
      '<rect x="30" y="80" width="260" height="130" fill="#8f4630"/><rect x="26" y="74" width="268" height="10" fill="#e6dccb"/>' +
      '<rect x="80" y="40" width="160" height="34" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="160" y="66" text-anchor="middle" ' + font + ' font-size="24" fill="' + GOLD + '" class="ct-glow">WDIA</text>' +
      /* big studio window */
      '<rect x="52" y="100" width="216" height="90" fill="#2b2238" stroke="#e6dccb" stroke-width="4"/>' +
      '<rect x="62" y="108" width="80" height="22" rx="3" fill="#3a0d0d"/><text x="102" y="124" text-anchor="middle" ' + font + ' font-size="12" fill="#ff4a4a" class="ct-blink">ON AIR</text>' +
      '<rect x="150" y="108" width="108" height="16" fill="' + PINK + '"/><text x="204" y="120" text-anchor="middle" ' + font + ' font-size="9" fill="#3a0d22">TEEN TOWN SINGERS</text>' +
      /* microphone */
      '<rect x="156" y="140" width="16" height="24" rx="8" fill="#c9cdd4" stroke="#6b7078" stroke-width="2"/><path d="M164 164v20M150 184h28" stroke="#6b7078" stroke-width="3"/>' +
      '<text class="ct-note" x="186" y="160" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="ct-note ct-note2" x="196" y="166" font-size="14" fill="' + PINK + '">&#9835;</text><text class="ct-note ct-note3" x="140" y="158" font-size="14" fill="' + TEAL + '">&#9834;</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5650"/>' +
      '<rect x="96" y="228" width="208" height="20" rx="3" fill="#000" opacity=".55"/><text x="200" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">WDIA · SHE JOINED AT 10</text>',
      sky("cts2", "#14183a", "#4a3a6a"));
  }

  /* 3. Tennessee A&I, Nashville */
  function cttsu() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (136 + i * 26) + '" y="92" width="10" height="74" fill="#f4f1ea"/>').join("");
    const trees = [30, 80, 330, 372].map(x => '<rect x="' + (x - 3) + '" y="150" width="6" height="30" fill="#5a3e2a"/><circle cx="' + x + '" cy="140" r="20" fill="#3f7a35"/><circle cx="' + (x + 10) + '" cy="132" r="14" fill="#4f8f42"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cts3)"/>' +
      '<rect x="110" y="70" width="180" height="100" fill="#b5553c"/><path d="M120 92l80 -36l80 36z" fill="#f4f1ea"/><path d="M134 88l66 -28l66 28z" fill="#b5553c"/>' +
      '<rect x="120" y="88" width="160" height="8" fill="#f4f1ea"/>' + cols +
      '<rect x="190" y="130" width="20" height="36" fill="#3a2a22"/>' +
      '<rect x="90" y="166" width="220" height="8" fill="#e0d8c8"/>' + trees +
      '<g class="ct-flag"><rect x="60" y="70" width="44" height="24" fill="' + TSU + '"/><path d="M60 82h44" stroke="#fff" stroke-width="3"/></g><path d="M60 70v100" stroke="#bbb" stroke-width="2"/>' +
      '<g class="ct-flag"><rect x="296" y="70" width="44" height="24" fill="#fff"/><path d="M296 82h44" stroke="' + TSU + '" stroke-width="3"/></g><path d="M296 70v100" stroke="#bbb" stroke-width="2"/>' +
      '<rect x="0" y="174" width="400" height="86" fill="#6aa84f"/><path d="M200 174L150 260M200 174L250 260" stroke="#d8cfbd" stroke-width="16"/>' +
      '<g class="ct-walk">' + person(0, TSU) + '</g><g class="ct-walk ct-walk2">' + person(0, "#fff") + '</g>' +
      '<rect x="98" y="230" width="204" height="20" rx="3" fill="' + TSU + '"/><text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TENNESSEE A&amp;I · NASHVILLE</text>',
      sky("cts3", "#7ab8f0", "#e8f4ff"));
  }

  /* 4. The Bohemian Caverns, U Street, Washington DC */
  function ctcaverns() {
    const tites = Array.from({ length: 14 }, (_, i) => { const x = 10 + i * 29, h = 18 + (i * 13) % 26; return '<path d="M' + x + ' 0l10 ' + h + 'l10 -' + h + 'z" fill="#5a4636"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#1b130e"/>' +
      '<path d="M0 0h400v60q-40 -10 -60 20q-30 -40 -80 -10q-40 -30 -60 10q-50 -40 -90 -6q-40 -24 -60 -4q-30 -10 -50 0z" fill="#3e2f24"/>' + tites +
      '<path d="M0 260V90q30 -20 60 10v160zM400 260V90q-30 -20 -60 10v160z" fill="#4a382a"/>' +
      '<path d="M70 210q0 -110 130 -110t130 110" fill="#2a1d15" stroke="#6b5240" stroke-width="10"/>' +
      '<g class="ct-drip"><circle cx="120" cy="40" r="2" fill="#9ad"/></g><g class="ct-drip ct-drip2"><circle cx="290" cy="46" r="2" fill="#9ad"/></g>' +
      /* spotlight */
      '<path d="M200 60L150 210h100z" fill="#fff3c0" opacity=".18" class="ct-glow"/>' +
      '<rect x="100" y="200" width="200" height="14" fill="#6b4a32"/><rect x="100" y="214" width="200" height="46" fill="#3a281c"/>' +
      '<rect x="194" y="150" width="12" height="20" rx="6" fill="#c9cdd4" stroke="#6b7078" stroke-width="2"/><path d="M200 170v30M190 200h20" stroke="#6b7078" stroke-width="3"/>' +
      /* piano */
      '<path d="M240 200v-30h50q14 0 14 14v16z" fill="#111"/><rect x="240" y="192" width="46" height="5" fill="#f4f1ea"/>' +
      '<text class="ct-note" x="214" y="150" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="ct-note ct-note2" x="176" y="146" font-size="14" fill="' + PINK + '">&#9835;</text>' +
      '<rect x="96" y="232" width="208" height="20" rx="3" fill="#000" opacity=".6"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">LIVE AT THE BOHEMIAN CAVERNS</text>');
  }

  /* 5. Vance Ave and S 4th St at Foote Homes, the Universal Life building behind */
  function ctcorner() {
    const lotus = x => '<rect x="' + (x - 5) + '" y="62" width="10" height="44" fill="#d9c49a"/><path d="M' + (x - 9) + ' 62q9 -12 18 0z" fill="' + TEAL + '"/><rect x="' + (x - 6) + '" y="74" width="12" height="3" fill="' + RED + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cts5)"/>' + stars(28) +
      /* Universal Life building: Egyptian revival, cavetto cornice, lotus columns */
      '<g><rect x="110" y="56" width="180" height="56" fill="#c8b48a"/><path d="M104 56h192l-8 -10h-176z" fill="#e2d2a8"/><rect x="104" y="56" width="192" height="4" fill="' + TEAL + '"/>' +
      [140, 170, 230, 260].map(lotus).join("") +
      '<path d="M200 40l12 6h-24z" fill="' + GOLD + '"/><circle cx="200" cy="50" r="4" fill="' + GOLD + '" class="ct-glow"/>' +
      '<rect x="186" y="70" width="28" height="40" fill="#2b2238"/></g>' +
      '<g fill="#1c2036"><rect x="0" y="90" width="70" height="30"/><rect x="330" y="84" width="70" height="36"/></g>' +
      /* wall */
      '<rect x="0" y="112" width="400" height="98" fill="#8a4a36"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (116 + r * 10) + 'h400" stroke="#6a3426" stroke-width="1"/>').join("") +
      tag("CARLA THOMAS", 18, 172, 30, PINK, -5) +
      tag("GEE WHIZ", 160, 200, 22, GOLD, -4) +
      '<g class="ct-sp"><circle cx="276" cy="152" r="3" fill="' + PINK + '"/></g><g class="ct-sp ct-sp2"><circle cx="284" cy="148" r="2" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8c877c"/><path d="M0 210h400" stroke="#5f5a50" stroke-width="3"/>' +
      '<rect x="331" y="98" width="6" height="140" fill="#5b6066"/>' +
      sign(284, 98, 104, "VANCE AV") + sign(290, 122, 92, "S 4TH ST") +
      '<rect x="100" y="228" width="200" height="22" rx="3" fill="#000" opacity=".55"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">FOOTE HOMES · SOUTH MEMPHIS</text>',
      sky("cts5", "#1a1438", "#7a3a5a"));
  }

  window.SCENES = { ctstop: ctstop, ctwdia: ctwdia, cttsu: cttsu, ctcaverns: ctcaverns, ctcorner: ctcorner };
})();
