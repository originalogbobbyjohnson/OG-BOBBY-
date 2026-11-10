/* karifaux scenes (Regions tab: More of the South; Little Rock, Arkansas - "the Little City" - where Kari Faux grew up and went to Little Rock Central High). CSS classes prefixed krf- (the page's own anim-train is kept on the streetcar).
   1 Rock Region METRO Streetcar at the River Market stop: a maroon-and-cream replica trolley pulling in, black stop sign with the Blue and Green line bullets.
   2 Little Rock Central High School (her school): the tan-brick Collegiate Gothic front, the four niche statues (shapes only), arched entrance and reflecting pool.
   3 The Junction Bridge over the Arkansas River at night, lights shifting colour, a riverboat drifting by.
   4 Lost En Los Angeles: the move west with bLAck pARty - palm trees, the freeway sign, the Hollywood hills.
   5 Daisy L. Gatson Bates Dr and S Park St by Central High: green signs, KARI FAUX tagged on the brick, the Arkansas State Capitol dome behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes krfglow{0%,100%{opacity:.55}50%{opacity:1}}.krf-glow{animation:krfglow 2.4s ease-in-out infinite}.krf-glow2{animation-delay:-1.2s}' +
    '@keyframes krfhue{0%{stroke:#c77dff}33%{stroke:#ff5fa2}66%{stroke:#7fe0d2}100%{stroke:#c77dff}}.krf-hue{animation:krfhue 4s linear infinite}' +
    '@keyframes krfboat{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.krf-boat{animation:krfboat 16s linear infinite}' +
    '@keyframes krfflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.krf-flag{transform-box:fill-box;transform-origin:0 50%;animation:krfflag 1.6s ease-in-out infinite}' +
    '@keyframes krfcar{from{transform:translateX(420px)}to{transform:translateX(-120px)}}.krf-car{animation:krfcar 5s linear infinite}.krf-car2{animation-delay:-2.5s}' +
    '@keyframes krfsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.krf-palm{transform-box:fill-box;transform-origin:50% 100%;animation:krfsway 3s ease-in-out infinite}' +
    '@keyframes krfripple{0%,100%{transform:scaleX(1);opacity:.5}50%{transform:scaleX(1.3);opacity:.9}}.krf-rip{transform-box:fill-box;transform-origin:50% 50%;animation:krfripple 2.2s ease-in-out infinite}' +
    '@keyframes krfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.krf-sp{animation:krfspray 1.4s ease-out infinite}.krf-sp2{animation-delay:.45s}' +
    '@keyframes krfblink{0%,100%{opacity:.3}50%{opacity:1}}.krf-bl{animation:krfblink 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const VIO = "#c77dff", PINK = "#ff5fa2", TEAL = "#7fe0d2", BLUE = "#1f5fae", GRN = "#2e9a48";
  /* Arkansas State Capitol: white neoclassical dome with lantern, columned wings */
  const capitol = (x, base, s) => '<g fill="#eceae2"><rect x="' + (x - 70 * s) + '" y="' + (base - 30 * s) + '" width="' + (140 * s) + '" height="' + (30 * s) + '"/>' +
    Array.from({ length: 12 }, (_, i) => '<rect x="' + (x - 64 * s + i * 11.4 * s) + '" y="' + (base - 28 * s) + '" width="' + (4 * s) + '" height="' + (26 * s) + '" fill="#cfccc2"/>').join("") +
    '<rect x="' + (x - 24 * s) + '" y="' + (base - 52 * s) + '" width="' + (48 * s) + '" height="' + (22 * s) + '"/>' +
    '<path d="M' + (x - 22 * s) + ' ' + (base - 52 * s) + 'a' + (22 * s) + ' ' + (24 * s) + ' 0 0 1 ' + (44 * s) + ' 0z"/>' +
    '<rect x="' + (x - 5 * s) + '" y="' + (base - 86 * s) + '" width="' + (10 * s) + '" height="' + (12 * s) + '"/><path d="M' + (x - 5 * s) + ' ' + (base - 86 * s) + 'l' + (5 * s) + ' ' + (-8 * s) + 'l' + (5 * s) + ' ' + (8 * s) + 'z"/></g>';

  /* 1. Rock Region METRO Streetcar, River Market */
  function krfstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (64 + i * 34) + '" y="122" width="24" height="26" rx="3" fill="#2a2a30"/>').join("");
    const car = '<g class="anim-train"><rect x="44" y="104" width="296" height="14" rx="6" fill="#efe3c4"/><rect x="50" y="116" width="284" height="66" rx="6" fill="#7a1f2b" stroke="#4a1018" stroke-width="2"/>' + win +
      '<rect x="50" y="154" width="284" height="6" fill="#d9b04a"/><rect x="40" y="96" width="304" height="10" rx="4" fill="#3a3a3a"/>' +
      '<path d="M190 96l-30-40M190 96l30-40" stroke="#333" stroke-width="2"/>' +
      '<circle cx="96" cy="186" r="10" fill="#222"/><circle cx="122" cy="186" r="10" fill="#222"/><circle cx="262" cy="186" r="10" fill="#222"/><circle cx="288" cy="186" r="10" fill="#222"/>' +
      '<rect x="60" y="106" width="72" height="9" rx="2" fill="#111"/><text x="96" y="113.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">RIVER MARKET</text><circle cx="334" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#krfs1)"/>' +
      '<path d="M0 56h400" stroke="#333" stroke-width="1.5"/>' +
      '<g fill="#3c3046"><rect x="0" y="40" width="70" height="80"/><rect x="300" y="30" width="100" height="90"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<rect class="krf-glow' + (i % 2 ? ' krf-glow2' : '') + '" x="' + (10 + (i % 3) * 20) + '" y="' + (52 + Math.floor(i / 3) * 24) + '" width="10" height="12" fill="#ffd98a"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (312 + (i % 3) * 28) + '" y="' + (44 + Math.floor(i / 3) * 26) + '" width="14" height="14" fill="#ffd98a" opacity=".7"/>').join("") +
      car +
      '<rect x="0" y="196" width="400" height="64" fill="#5f5a58"/><path d="M0 200h400M0 208h400" stroke="#9a948c" stroke-width="2"/>' +
      '<rect x="20" y="214" width="200" height="34" rx="3" fill="#111"/><text x="120" y="236" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">River Market</text>' +
      bullet(232, 231, "BLUE", BLUE) + bullet(300, 231, "GREEN", GRN),
      sky("krfs1", "#2a1d3a", "#7a4a6e"));
  }

  /* 2. Little Rock Central High School */
  function krfcentral() {
    const bays = [20, 66, 112, 296, 342].map((x) => { return '<rect x="' + x + '" y="108" width="20" height="26" fill="#3a3a48"/><rect x="' + x + '" y="146" width="20" height="26" fill="#3a3a48"/>'; }).join("");
    const niche = (x) => '<path d="M' + x + ' 92v-22a8 8 0 0 1 16 0v22z" fill="#8c7a5a"/><path d="M' + (x + 8) + ' 90v-16" stroke="#e8dcc0" stroke-width="5" stroke-linecap="round"/><circle cx="' + (x + 8) + '" cy="72" r="3.5" fill="#e8dcc0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#krfs2)"/>' +
      '<rect x="0" y="96" width="400" height="90" fill="#c9a77a"/><path d="M0 96h400" stroke="#a88a5e" stroke-width="3"/>' + bays +
      '<rect x="160" y="54" width="120" height="132" fill="#d4b588"/><path d="M160 54h120" stroke="#a88a5e" stroke-width="3"/>' +
      niche(170) + niche(196) + niche(228) + niche(254) +
      '<path d="M196 186v-46a24 24 0 0 1 48 0v46z" fill="#3a2a22"/><path d="M200 186v-44a20 20 0 0 1 40 0v44" fill="none" stroke="#e8dcc0" stroke-width="2"/>' +
      '<rect x="176" y="96" width="88" height="10" fill="#b49a6c"/><text x="220" y="104" text-anchor="middle" ' + font + ' font-size="7.5" fill="#3a2a22">CENTRAL HIGH SCHOOL</text>' +
      '<rect x="0" y="186" width="400" height="74" fill="#4f7a3a"/><rect x="130" y="200" width="180" height="26" rx="13" fill="#6fa3c4"/><ellipse class="krf-rip" cx="220" cy="213" rx="40" ry="4" fill="#d6eef8"/>' +
      '<rect x="216" y="186" width="8" height="14" fill="#d8d0c0"/>' +
      '<rect x="60" y="150" width="3" height="36" fill="#444"/><g class="krf-flag"><rect x="63" y="150" width="24" height="14" fill="#c8102e"/><rect x="63" y="150" width="10" height="7" fill="#002868"/></g>',
      sky("krfs2", "#5aa0d8", "#cfe6f5"));
  }

  /* 3. Junction Bridge over the Arkansas River */
  function krfbridge() {
    const truss = (x, w) => '<rect x="' + x + '" y="112" width="' + w + '" height="6" fill="#4a4a52"/><rect x="' + x + '" y="138" width="' + w + '" height="6" fill="#4a4a52"/>' +
      Array.from({ length: Math.floor(w / 16) }, (_, i) => '<path d="M' + (x + i * 16) + ' 118l16 20M' + (x + i * 16 + 16) + ' 118l-16 20" stroke="#4a4a52" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#krfs3)"/>' +
      '<g fill="#22182e"><rect x="10" y="70" width="34" height="80"/><rect x="50" y="40" width="26" height="110"/><rect x="82" y="84" width="40" height="66"/><rect x="300" y="88" width="40" height="62"/><rect x="346" y="62" width="30" height="88"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (54 + (i % 2) * 12) + '" y="' + (48 + Math.floor(i / 2) * 18) + '" width="6" height="8" fill="#ffd98a" opacity=".7"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#14243a"/>' +
      truss(20, 160) + truss(220, 160) +
      '<rect x="180" y="60" width="40" height="90" fill="#4a4a52"/><rect x="176" y="56" width="48" height="8" fill="#5a5a62"/><path d="M180 112h40M180 138h40" stroke="#5a5a62" stroke-width="3"/>' +
      '<rect x="24" y="144" width="8" height="40" fill="#4a4a52"/><rect x="368" y="144" width="8" height="40" fill="#4a4a52"/><rect x="184" y="150" width="32" height="40" fill="#3a3a42"/>' +
      '<path class="krf-hue" d="M20 112h360M20 144h360" stroke="#c77dff" stroke-width="2.5" opacity=".9"/>' +
      Array.from({ length: 12 }, (_, i) => '<path class="krf-hue" d="M' + (20 + i * 32) + ' ' + (196 + (i % 3) * 14) + 'h18" stroke="#c77dff" stroke-width="2" opacity=".5"/>').join("") +
      '<g class="krf-boat"><path d="M0 214h90l-10 12H10z" fill="#e8e0d0"/><rect x="14" y="198" width="60" height="16" fill="#f4efe6"/><rect x="20" y="202" width="48" height="5" fill="#2a3a4a"/><rect x="62" y="186" width="6" height="12" fill="#b22"/></g>',
      sky("krfs3", "#120a22", "#3a2450"));
  }

  /* 4. Lost En Los Angeles */
  function krfla() {
    const palm = (x, h) => '<g class="krf-palm"><path d="M' + x + ' 200q-4 -' + h / 2 + ' 2 -' + h + '" stroke="#3a2a1e" stroke-width="5" fill="none"/>' +
      '<g fill="#1f3a26">' + [-60, -25, 15, 50, 85, 130].map(a => '<path d="M' + (x + 2) + ' ' + (200 - h) + 'q' + (Math.cos(a * Math.PI / 180) * 18) + ' ' + (-10 + Math.sin(a * Math.PI / 180) * 6) + ' ' + (Math.cos(a * Math.PI / 180) * 34) + ' ' + (Math.abs(Math.sin(a * Math.PI / 180)) * 14) + 'l-6 2z"/>').join("") + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#krfs4)"/>' +
      '<circle cx="300" cy="120" r="34" fill="#ffd27a" opacity=".85"/>' +
      '<path d="M0 140q60-40 120-14t120-20t160 10v60H0z" fill="#6b4a5e"/><path d="M0 160q80-30 160-6t240-8v60H0z" fill="#4e3448"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#3a3640"/><rect x="0" y="174" width="400" height="6" fill="#77707a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 56) + '" y="214" width="28" height="4" fill="#f2e6b0"/>').join("") +
      '<g class="krf-car"><rect x="0" y="194" width="50" height="14" rx="4" fill="' + PINK + '"/><rect x="10" y="186" width="28" height="10" rx="3" fill="#2a2a30"/><circle cx="12" cy="210" r="5" fill="#111"/><circle cx="40" cy="210" r="5" fill="#111"/></g>' +
      '<g class="krf-car krf-car2"><rect x="0" y="226" width="50" height="14" rx="4" fill="' + TEAL + '"/><rect x="10" y="218" width="28" height="10" rx="3" fill="#2a2a30"/><circle cx="12" cy="242" r="5" fill="#111"/><circle cx="40" cy="242" r="5" fill="#111"/></g>' +
      palm(40, 120) + palm(84, 100) + palm(360, 130) +
      '<rect x="146" y="40" width="4" height="70" fill="#555"/><rect x="250" y="40" width="4" height="70" fill="#555"/>' +
      '<rect x="130" y="40" width="140" height="48" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">LOS ANGELES</text><text x="200" y="78" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LOST EN L.A.  EXIT</text>',
      sky("krfs4", "#ff9a6a", "#ffd0a0"));
  }

  /* 5. Daisy L. Gatson Bates Dr and S Park St */
  function krfcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#krfs5)"/>' +
      '<g fill="#3a2c48"><rect x="10" y="88" width="46" height="44"/><rect x="300" y="80" width="50" height="52"/><rect x="356" y="98" width="40" height="34"/></g>' +
      capitol(170, 132, 1) +
      '<rect x="0" y="126" width="400" height="98" fill="#7e4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#683a2c" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#683a2c" stroke-width="1"/>').join("")).join("") +
      tag("KARI FAUX", 16, 190, 38, VIO, -6) + tag("LOWKEY", 168, 216, 18, PINK, -4) + tag("LITTLE CITY", 24, 216, 15, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(232, 98, 160, "Daisy L Gatson Bates Dr") + sign(282, 124, 100, "S Park St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="krf-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="krf-sp"><circle cx="236" cy="166" r="3" fill="' + VIO + '" opacity=".7"/></g><g class="krf-sp krf-sp2"><circle cx="242" cy="160" r="2" fill="' + VIO + '" opacity=".6"/></g>',
      sky("krfs5", "#3a2458", "#f08a8a"));
  }

  window.SCENES = { krfstation: krfstation, krfcentral: krfcentral, krfbridge: krfbridge, krfla: krfla, krfcorner: krfcorner };
})();
