/* kmichelle scenes (Regions tab: Memphis + Tennessee; she stayed in Whitehaven, went to Overton High's performing-arts program, then Florida A&M on a music scholarship). CSS classes and ids prefixed km- (the page's own anim-train is kept).
   1 MATA Route 42 Crosstown bus pulling up on Elvis Presley Blvd at Shelby Dr in Whitehaven.
   2 Overton High (Creative and Performing Arts): the auditorium stage in royal blue, white and gray, choir risers, a spotlight, notes rising.
   3 Florida A&M in Tallahassee, where she won a music scholarship: red-brick Lee Hall with white columns, orange and green banners.
   4 Memphis City Hall on Civic Center Plaza, where the mayor gave her the Ambassador award: the white slab, the plaza fountain.
   5 Elvis Presley Blvd and Shelby Dr in Whitehaven: green signs, K. MICHELLE tagged, the boulevard's pines and the downtown skyline glowing far off.
   400 x 260 SVGs. No logos, no faces of real people, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.km-flk{animation:kmflick 2.2s infinite}.km-flk2{animation-delay:.7s}' +
    '@keyframes kmtw{0%,100%{opacity:.3}50%{opacity:1}}.km-tw{animation:kmtw 1.6s ease-in-out infinite}.km-tw2{animation-delay:-.8s}' +
    '@keyframes kmsweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.km-beam{transform-box:fill-box;transform-origin:50% 0%;animation:kmsweep 3.4s ease-in-out infinite}' +
    '@keyframes kmnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.km-note{animation:kmnote 3s ease-out infinite}.km-note2{animation-delay:-1s}.km-note3{animation-delay:-2s}' +
    '@keyframes kmwave{0%,100%{transform:skewY(0deg)}50%{transform:skewY(5deg)}}.km-wave{transform-box:fill-box;transform-origin:0% 50%;animation:kmwave 2.2s ease-in-out infinite}.km-wave2{animation-delay:-1.1s}' +
    '@keyframes kmjet{0%{transform:translateY(0) scaleY(1);opacity:.85}50%{transform:translateY(-6px) scaleY(1.15);opacity:1}100%{transform:translateY(0) scaleY(1);opacity:.85}}.km-jet{transform-box:fill-box;transform-origin:50% 100%;animation:kmjet 1.2s ease-in-out infinite}.km-jet2{animation-delay:-.6s}' +
    '@keyframes kmcar{from{transform:translateX(440px)}to{transform:translateX(-140px)}}.km-car{animation:kmcar 7s linear infinite}' +
    '@keyframes kmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.km-sp{animation:kmspray 1.4s ease-out infinite}.km-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const RED = "#ff4d5e", GOLD = "#ffd27a", TEAL = "#7fd0c8", ROYAL = "#1f3fa8", MATA = "#0a5ea8";
  const pine = (x, y, s) => '<path d="M' + x + ' ' + (y - 60 * s) + 'l' + (16 * s) + ' ' + (26 * s) + 'h' + (-8 * s) + 'l' + (14 * s) + ' ' + (22 * s) + 'h' + (-10 * s) + 'l' + (12 * s) + ' ' + (18 * s) + 'h' + (-48 * s) + 'l' + (12 * s) + ' ' + (-18 * s) + 'h' + (-10 * s) + 'l' + (14 * s) + ' ' + (-22 * s) + 'h' + (-8 * s) + 'z" fill="#1f3a28"/><rect x="' + (x - 3 * s) + '" y="' + y + '" width="' + (6 * s) + '" height="' + (10 * s) + '" fill="#3a2a1e"/>';

  /* 1. MATA 42 Crosstown on Elvis Presley Blvd at Shelby Dr */
  function kmbus() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 40) + '" y="112" width="32" height="26" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="98" width="290" height="84" rx="10" fill="#f2f3f0" stroke="#7d848a" stroke-width="2"/>' + win +
      '<path d="M40 150h290v10h-290z" fill="' + MATA + '"/><path d="M40 160h290v4h-290z" fill="#5cb85c"/>' +
      '<rect x="306" y="110" width="20" height="62" rx="3" fill="#2a3640"/><path d="M316 112v58" stroke="#7d848a" stroke-width="1.5"/>' +
      '<rect x="216" y="101" width="110" height="10" rx="2" fill="#111"/><text x="271" y="109" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">42 CROSSTOWN</text>' +
      '<circle cx="90" cy="184" r="14" fill="#1a1a1a"/><circle cx="90" cy="184" r="6" fill="#9aa1a6"/><circle cx="276" cy="184" r="14" fill="#1a1a1a"/><circle cx="276" cy="184" r="6" fill="#9aa1a6"/>' +
      '<circle class="km-flk" cx="326" cy="168" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms1)"/>' +
      '<g class="km-tw"><circle cx="50" cy="20" r="1.4" fill="#fff"/><circle cx="230" cy="16" r="1.2" fill="#fff"/></g><g class="km-tw km-tw2"><circle cx="140" cy="30" r="1.2" fill="#fff"/><circle cx="310" cy="22" r="1.4" fill="#fff"/></g>' +
      pine(26, 96, 1) + pine(370, 96, 1.05) + pine(340, 92, .7) +
      /* roadside neon sign */
      '<rect x="66" y="40" width="4" height="56" fill="#444"/><rect x="40" y="26" width="58" height="20" rx="3" fill="#1a1020" stroke="' + RED + '" stroke-width="2"/><text class="km-flk" x="69" y="40" text-anchor="middle" ' + font + ' font-size="9" fill="' + RED + '">MOTEL</text>' +
      '<rect x="0" y="96" width="400" height="6" fill="#2a2f36"/>' +
      bus +
      '<rect x="0" y="198" width="400" height="62" fill="#3d4148"/><rect x="0" y="196" width="400" height="3" fill="#cfd4da"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (10 + i * 52) + '" y="226" width="26" height="4" fill="#f2c200"/>').join("") +
      '<rect x="352" y="104" width="5" height="94" fill="#555"/><rect x="336" y="104" width="38" height="44" rx="3" fill="#fff" stroke="' + MATA + '" stroke-width="2"/>' +
      '<rect x="336" y="104" width="38" height="12" fill="' + MATA + '"/><text x="355" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">MATA</text>' +
      '<rect x="343" y="120" width="24" height="14" rx="2" fill="#5cb85c"/><text x="355" y="131" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">42</text>' +
      '<text x="355" y="144" text-anchor="middle" ' + font + ' font-size="5" fill="#222">BUS STOP</text>' +
      '<rect x="12" y="204" width="188" height="24" rx="3" fill="#111"/><text x="20" y="221" ' + font + ' font-size="11" fill="#fff">Elvis Presley / Shelby</text>' +
      '<rect x="160" y="209" width="34" height="14" rx="7" fill="#5cb85c"/><text x="177" y="220" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">42</text>' +
      label(214, 172, "WHITEHAVEN, SOUTH MEMPHIS"),
      sky("kms1", "#140c26", "#4a2a4a"));
  }

  /* 2. Overton High CAPA auditorium: royal blue, white, gray */
  function kmoverton() {
    const folds = (x0, n) => Array.from({ length: n }, (_, i) => '<path d="M' + (x0 + i * 14) + ' 22v156" stroke="#132a7a" stroke-width="3"/>').join("");
    const riser = (y, w, c) => '<rect x="' + (200 - w / 2) + '" y="' + y + '" width="' + w + '" height="12" fill="' + c + '"/>';
    const singer = (x, y) => '<g><circle cx="' + x + '" cy="' + (y - 14) + '" r="6" fill="#2a1e24"/><path d="M' + (x - 8) + ' ' + y + 'q8 -10 16 0v14h-16z" fill="' + ROYAL + '"/><rect x="' + (x - 3) + '" y="' + (y - 7) + '" width="6" height="5" fill="#fff"/></g>';
    const notes = ['<g class="km-note"><text x="150" y="104" font-size="22" fill="' + GOLD + '">&#9834;</text></g>', '<g class="km-note km-note2"><text x="246" y="96" font-size="20" fill="#fff">&#9835;</text></g>', '<g class="km-note km-note3"><text x="200" y="110" font-size="18" fill="' + TEAL + '">&#9834;</text></g>'].join("");
    return svg(
      '<rect width="400" height="260" fill="#0c1024"/>' +
      '<rect x="0" y="0" width="400" height="24" fill="#132a7a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 24q10 10 20 0" fill="#132a7a"/>').join("") +
      '<rect x="0" y="22" width="86" height="156" fill="' + ROYAL + '"/>' + folds(8, 6) + '<rect x="314" y="22" width="86" height="156" fill="' + ROYAL + '"/>' + folds(322, 6) +
      '<g class="km-beam"><path d="M200 0l-70 178h140z" fill="#fff6d0" opacity=".16"/></g>' +
      riser(144, 200, "#8d939c") + riser(156, 230, "#a3a9b1") + riser(168, 260, "#b9bec5") +
      [130, 160, 190, 220, 250].map(x => singer(x + 10, 140)).join("") + [118, 150, 182, 214, 246, 278].map(x => singer(x + 2, 152)).join("") +
      notes +
      '<rect x="0" y="180" width="400" height="20" fill="#4a3a2e"/><rect x="0" y="180" width="400" height="3" fill="#7a5a3e"/>' +
      '<rect x="120" y="186" width="160" height="12" rx="2" fill="#fff"/><text x="200" y="195" text-anchor="middle" ' + font + ' font-size="8" fill="' + ROYAL + '">OVERTON WOLVERINES</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#14121a"/>' + Array.from({ length: 13 }, (_, i) => '<rect x="' + (6 + i * 31) + '" y="' + (212 + (i % 2) * 4) + '" width="24" height="16" rx="5" fill="#26222e"/>').join("") +
      label(76, 248, "OVERTON HIGH, CREATIVE + PERFORMING ARTS"),
      "");
  }

  /* 3. Florida A&M, Tallahassee: red-brick Lee Hall, white columns, orange and green */
  function kmfamu() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (146 + i * 22) + '" y="92" width="9" height="74" fill="#f6f3ea"/>').join("");
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="14" height="20" fill="#2b3a4a" stroke="#f6f3ea" stroke-width="1.5"/>';
    const banner = (x, c, d) => '<g class="km-wave' + (d ? " km-wave2" : "") + '"><rect x="' + x + '" y="52" width="22" height="40" fill="' + c + '"/><path d="M' + x + ' 92l11 -8l11 8z" fill="#1a2a1a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms3)"/>' +
      '<g fill="#3a6a2e"><circle cx="34" cy="140" r="40"/><circle cx="370" cy="136" r="42"/></g>' +
      '<path d="M352 120q10 -40 4 -70M356 54l-20 -6M356 54l18 -12M356 54l4 -20M356 54l-12 -16" stroke="#3d5a2a" stroke-width="3" fill="none"/>' +
      '<rect x="70" y="80" width="260" height="96" fill="#9c4030"/>' + [84, 108, 268, 292].map(x => win(x, 96) + win(x, 136)).join("") +
      '<path d="M134 92l66 -34l66 34z" fill="#f6f3ea" stroke="#c9c2b0" stroke-width="2"/><rect x="134" y="88" width="132" height="6" fill="#f6f3ea"/>' + cols +
      '<rect x="128" y="164" width="144" height="12" fill="#ddd6c6"/>' +
      '<rect x="186" y="44" width="28" height="18" fill="#f6f3ea"/><path d="M182 44l18 -14l18 14z" fill="#6a6f6a"/>' +
      banner(30, "#f47b20", false) + banner(300, "#0a6b3a", true) +
      '<rect x="0" y="176" width="400" height="84" fill="#5a9a3e"/><path d="M200 176l-34 84h68z" fill="#cfc4a8"/>' +
      '<g class="km-note"><text x="96" y="70" font-size="18" fill="#f47b20">&#9835;</text></g><g class="km-note km-note2"><text x="300" y="66" font-size="16" fill="#0a6b3a">&#9834;</text></g>' +
      label(110, 180, "LEE HALL, FLORIDA A&amp;M, TALLAHASSEE"),
      sky("kms3", "#4aa0e0", "#f6e6c4"));
  }

  /* 4. Memphis City Hall on Civic Center Plaza */
  function kmcityhall() {
    const fins = Array.from({ length: 21 }, (_, i) => '<rect x="' + (104 + i * 9.6) + '" y="46" width="3" height="128" fill="#f4f2ec"/>').join("");
    const rows = Array.from({ length: 8 }, (_, i) => '<rect x="104" y="' + (54 + i * 15) + '" width="196" height="2" fill="#e2ded4"/>').join("");
    const jets = [150, 200, 250].map((x, i) => '<path class="km-jet' + (i % 2 ? " km-jet2" : "") + '" d="M' + (x - 4) + ' 214q4 -26 8 0z" fill="#bfe6fb"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kms4)"/>' +
      '<rect x="20" y="96" width="54" height="104" fill="#8e8a82"/><rect x="328" y="80" width="56" height="120" fill="#7c7f86"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (28 + (i % 3) * 16) + '" y="' + (106 + Math.floor(i / 3) * 20) + '" width="8" height="10" fill="#cfd8e0"/>').join("") +
      '<rect x="100" y="40" width="204" height="138" fill="#3a4a5c"/>' + rows + fins +
      '<rect x="96" y="34" width="212" height="8" fill="#f4f2ec"/>' +
      '<rect x="100" y="166" width="204" height="12" fill="#2a3440"/><text x="202" y="175" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CITY HALL</text>' +
      '<rect x="0" y="178" width="400" height="82" fill="#cfc8b8"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 178l-20 82" stroke="#bdb5a3" stroke-width="1.2"/>').join("") +
      '<ellipse cx="200" cy="218" rx="90" ry="14" fill="#3b78a8" stroke="#e9e4d8" stroke-width="4"/>' + jets +
      '<g class="km-tw"><circle cx="60" cy="40" r="2" fill="' + GOLD + '"/></g><g class="km-tw km-tw2"><circle cx="350" cy="30" r="2" fill="' + GOLD + '"/></g>' +
      label(110, 180, "CITY HALL, CIVIC CENTER PLAZA"),
      sky("kms4", "#2a3a6a", "#f0a07a"));
  }

  /* 5. Elvis Presley Blvd and Shelby Dr, Whitehaven */
  function kmcorner() {
    const skyline = '<g fill="#3a2f52">' + [[150, 30, 40], [184, 22, 58], [210, 26, 46], [240, 18, 70], [262, 30, 38], [296, 20, 50]].map(([x, w, h]) => '<rect x="' + x + '" y="' + (112 - h) + '" width="' + w + '" height="' + h + '"/>').join("") + '</g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="km-tw' + (i % 2 ? " km-tw2" : "") + '" x="' + (156 + i * 15) + '" y="' + (78 + (i % 3) * 9) + '" width="3" height="3" fill="' + GOLD + '"/>').join("");
    const car = '<g class="km-car"><path d="M10 238l12 -14h40l14 14z" fill="' + RED + '"/><rect x="0" y="238" width="92" height="12" rx="3" fill="' + RED + '"/><rect x="26" y="227" width="14" height="10" fill="#bfe6fb"/><rect x="44" y="227" width="14" height="10" fill="#bfe6fb"/>' +
      '<circle cx="20" cy="252" r="6" fill="#111"/><circle cx="72" cy="252" r="6" fill="#111"/><circle cx="20" cy="252" r="2.5" fill="#ccc"/><circle cx="72" cy="252" r="2.5" fill="#ccc"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms5)"/>' +
      '<circle cx="80" cy="44" r="16" fill="#fff1c8" opacity=".9"/>' +
      skyline + pine(30, 112, 1) + pine(70, 110, .8) + pine(120, 112, .7) + pine(372, 112, .95) + pine(340, 110, .7) +
      '<rect x="0" y="112" width="400" height="12" fill="#2a2430"/>' +
      /* wall */
      '<rect x="0" y="124" width="400" height="100" fill="#cfc6b4"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (132 + i * 8) + 'h400" stroke="#b8ae9a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (124 + i * 8) + 'v8" stroke="#b8ae9a" stroke-width="1"/>').join("")).join("") +
      tag("K. MICHELLE", 14, 192, 36, RED, -6) + tag("REBELLIOUS SOUL", 26, 152, 16, ROYAL, -4) + tag("PUDDIN'", 196, 214, 20, TEAL, -3) +
      '<g class="km-sp"><circle cx="234" cy="176" r="3" fill="' + RED + '" opacity=".7"/></g><g class="km-sp km-sp2"><circle cx="240" cy="170" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524d"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 100, 148, "Elvis Presley Blvd") + sign(290, 126, 108, "Shelby Dr") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="km-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("kms5", "#1e1440", "#d8706a"));
  }

  window.SCENES = { kmbus: kmbus, kmoverton: kmoverton, kmfamu: kmfamu, kmcityhall: kmcityhall, kmcorner: kmcorner };
})();
