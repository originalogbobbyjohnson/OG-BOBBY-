/* A+ game (NYC map, Long Island: Hempstead, "Young Plus", Parkside). 400 x 260 SVGs.
   Hempstead, West Hempstead and Country Life Press stations, Hofstra, the Coliseum, Belmont, Kennedy Park, Hempstead High,
   Front & Clinton, Main & Fulton and Uniondale corners are already used by other Hempstead games, so these rooms use:
   0. The LIRR Hempstead Branch pulling into Garden City, the stop next door (the 1872 Victorian station house, high platform, electric train).
   1. Parkside Gardens, Hempstead: the brick garden apartments his song is named for, a boombox in the courtyard.
   2. Amsterdam canal houses: "Enjoy Yourself" went Top 5 in the Netherlands (1999), a canal boat sliding by.
   3. A Tokyo crossing at night: the record was big in Japan too, crowds crossing under the screens.
   4. Elm Av & S Franklin St, Hempstead, the Cradle of Aviation Museum's glass hangar and dome on the skyline behind.
   All CSS classes are prefixed ap- so they never clash with the game's own classes. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes apcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.ap-car{animation:apcar 7s linear infinite}' +
    '@keyframes apboat{from{transform:translateX(420px)}to{transform:translateX(-160px)}}.ap-boat{animation:apboat 12s linear infinite}' +
    '@keyframes apblink{0%,100%{opacity:.3}50%{opacity:1}}.ap-bl{animation:apblink 1.8s ease-in-out infinite}.ap-bl2{animation-delay:.6s}.ap-bl3{animation-delay:1.2s}' +
    '@keyframes apflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.ap-flk{animation:apflick 2.6s infinite}' +
    '@keyframes apnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.ap-note{animation:apnote 2.4s linear infinite}.ap-n2{animation-delay:-.8s}.ap-n3{animation-delay:-1.6s}' +
    '@keyframes apwalk{from{transform:translateX(0)}to{transform:translateX(var(--d))}}.ap-walk{animation:apwalk 6s linear infinite}' +
    '@keyframes apbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ap-bob{animation:apbob .6s ease-in-out infinite}.ap-bob2{animation-delay:.3s}' +
    '@keyframes apspin{to{transform:rotate(360deg)}}.ap-spin{transform-box:fill-box;transform-origin:50% 50%;animation:apspin 1.4s linear infinite}' +
    '@keyframes appulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.ap-pulse{transform-box:fill-box;transform-origin:50% 50%;animation:appulse .6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const pill = (x, y, label, color) => '<rect x="' + (x - 22) + '" y="' + (y - 10) + '" width="44" height="20" rx="10" fill="' + color + '"/>' + txt(label, x, y + 5, 12, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 31) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const MAG = "#e85dff", GOLD = "#ffd23f", SKY = "#5ad1ff", CREAM = "#f4ead8", LIRR = "#0039a6";

  /* 0. Garden City, LIRR Hempstead Branch: the little Victorian station house with its porch and dormer, high platform, the electric train sliding in */
  function gardencity() {
    const car = x => '<rect x="' + x + '" y="100" width="128" height="58" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 10 + i * 30) + '" y="110" width="20" height="18" rx="2" fill="#cfe2f5"/>').join("") +
      '<rect x="' + (x + 50) + '" y="108" width="26" height="46" fill="#9aa1ab"/><rect x="' + x + '" y="136" width="128" height="5" fill="' + LIRR + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#apg)"/>' +
      [[20, 70, 26], [90, 64, 30], [380, 66, 28]].map(t => '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="' + t[2] + '" fill="#3f7d3a"/>').join("") +
      /* the station house */
      '<rect x="150" y="58" width="120" height="40" fill="#e9dcc0"/><path d="M140 60l70-26l70 26z" fill="#6b3a2a"/>' +
      '<rect x="196" y="26" width="28" height="22" fill="#e9dcc0"/><path d="M192 28l18-12l18 12z" fill="#6b3a2a"/><rect x="204" y="32" width="12" height="12" fill="#cfe2f5"/>' +
      '<rect x="162" y="68" width="16" height="22" fill="#cfe2f5"/><rect x="242" y="68" width="16" height="22" fill="#cfe2f5"/><rect x="200" y="66" width="20" height="32" fill="#4a2a1e"/>' +
      '<path d="M144 62h132v6h-132z" fill="#2f5a3f"/>' +
      /* the train */
      '<g class="anim-train">' + car(14) + car(146) +
        '<path d="M278 158v-52q0-6 6-6h60q20 4 24 24v34z" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="336" y="106" width="24" height="20" rx="3" fill="#1d2a3a"/>' +
        '<rect x="278" y="136" width="90" height="5" fill="' + LIRR + '"/><circle class="ap-flk" cx="360" cy="146" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="92" fill="#6b6964"/>' +
      '<rect x="40" y="186" width="5" height="40" fill="#2b2b2b"/><rect x="245" y="186" width="5" height="40" fill="#2b2b2b"/>' +
      '<rect x="30" y="176" width="230" height="30" rx="3" fill="#111"/><rect x="30" y="176" width="230" height="3" fill="#fff"/>' +
      '<text x="44" y="198" ' + font + ' font-size="16" fill="#fff">Garden City</text>' + pill(228, 192, "LIRR", LIRR) +
      person(310, 200, "#1b1b1b") + person(336, 204, "#2a2a2a", "ap-bob") +
      txt("HEMPSTEAD BRANCH", 145, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("apg", "#9fd6ff", "#e7f5ff"));
  }

  /* 1. Parkside Gardens: two-story brick garden apartments around a courtyard, a boombox on the bench pumping notes, kids dancing */
  function parkside() {
    const block = (x, y, w) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="#9a4a32"/><rect x="' + x + '" y="' + (y - 6) + '" width="' + w + '" height="6" fill="#4a3a33"/>';
      for (let yy = y + 10; yy < 160; yy += 26) for (let xx = x + 10; xx < x + w - 14; xx += 26) g += '<rect x="' + xx + '" y="' + yy + '" width="14" height="16" fill="#f1e4c3" stroke="#fff" stroke-width="1.5"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#app)"/>' +
      '<circle cx="340" cy="36" r="18" fill="#fff3b0"/>' +
      block(10, 86, 130) + block(150, 70, 100) + block(260, 86, 130) +
      '<rect x="186" y="128" width="28" height="42" fill="#3a2a22"/><rect x="180" y="124" width="40" height="6" fill="#e9e1cf"/>' +
      txt("PARKSIDE", 200, 64, 13, "#fff", 'letter-spacing="4" stroke="#000" stroke-width="2" paint-order="stroke"') +
      /* courtyard */
      '<rect x="0" y="170" width="400" height="90" fill="#7fae5a"/><path d="M160 170h80l30 90h-140z" fill="#cfc8b6"/>' +
      [40, 340].map(x => '<rect x="' + (x - 3) + '" y="140" width="6" height="34" fill="#5a3d2a"/><circle cx="' + x + '" cy="136" r="20" fill="#3f7d3a"/>').join("") +
      /* bench + boombox */
      '<rect x="60" y="206" width="70" height="6" fill="#6b4a2f"/><rect x="64" y="212" width="5" height="14" fill="#4a3220"/><rect x="121" y="212" width="5" height="14" fill="#4a3220"/>' +
      '<g class="ap-pulse"><rect x="74" y="186" width="42" height="20" rx="3" fill="#222" stroke="#999"/><circle cx="84" cy="196" r="6" fill="#555"/><circle cx="106" cy="196" r="6" fill="#555"/><rect x="90" y="190" width="10" height="5" fill="' + GOLD + '"/></g>' +
      ['ap-note', 'ap-note ap-n2', 'ap-note ap-n3'].map((c, i) => '<text class="' + c + '" x="' + (80 + i * 16) + '" y="182" ' + font + ' font-size="16" fill="' + [MAG, GOLD, SKY][i] + '">&#9834;</text>').join("") +
      person(290, 206, "#1b1b1b", "ap-bob") + person(318, 208, "#2a2a2a", "ap-bob ap-bob2") + person(236, 222, "#222", "ap-bob"),
      sky("app", "#7fc8f8", "#e3f4ff"));
  }

  /* 2. Amsterdam: a row of narrow canal houses with gables, the bridge with bikes, a tour boat sliding along the canal */
  function amsterdam() {
    const cols = ["#5a3a2a", "#2f3b4a", "#7a2f2a", "#3e4a36", "#6b4a2a", "#2a2f3a", "#8a5a3a"];
    let houses = "";
    for (let i = 0; i < 7; i++) {
      const x = 8 + i * 56, top = 46 + (i % 3) * 10, c = cols[i];
      houses += '<rect x="' + x + '" y="' + (top + 18) + '" width="52" height="' + (150 - top - 18) + '" fill="' + c + '"/>';
      houses += i % 2 ? '<path d="M' + x + ' ' + (top + 18) + 'h8v-8h8v-8h20v8h8v8h8z" fill="' + c + '"/>' : '<path d="M' + x + ' ' + (top + 18) + 'q8 0 10-10q2-8 6-8h20q4 0 6 8q2 10 10 10z" fill="' + c + '"/>';
      houses += '<rect x="' + (x + 22) + '" y="' + (top + 2) + '" width="8" height="10" fill="#f6e7c1"/>';
      for (let r = 0; r < 4; r++) for (let k = 0; k < 2; k++) houses += '<rect class="ap-bl ap-bl' + ((i + r + k) % 3 + 1) + '" x="' + (x + 8 + k * 24) + '" y="' + (top + 26 + r * 20) + '" width="12" height="13" fill="#f6e7c1" opacity=".85"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#apa)"/>' + houses +
      '<rect x="0" y="150" width="400" height="10" fill="#4a4a4a"/>' +
      /* canal */
      '<rect x="0" y="160" width="400" height="100" fill="#2f5d7a"/>' +
      [176, 196, 220, 244].map((y, i) => '<path d="M' + (i * 30) + ' ' + y + 'h60M' + (160 + i * 20) + ' ' + y + 'h70M' + (300 - i * 10) + ' ' + y + 'h50" stroke="#7fb1d0" stroke-width="2" opacity=".6"/>').join("") +
      /* bridge with bikes */
      '<path d="M120 160q80-34 160 0v8h-160z" fill="#6b5a4a"/><path d="M136 168q64-26 128 0" fill="#2f5d7a"/>' +
      '<path d="M120 154q80-34 160 0" stroke="#e9e1cf" stroke-width="3" fill="none"/>' +
      [170, 222].map(x => '<g class="ap-bob"><circle cx="' + x + '" cy="140" r="5" fill="none" stroke="#111" stroke-width="2"/><circle cx="' + (x + 16) + '" cy="140" r="5" fill="none" stroke="#111" stroke-width="2"/><path d="M' + x + ' 140l8-8l8 8M' + (x + 8) + ' 132v-6" stroke="#111" stroke-width="2"/></g>').join("") +
      /* boat */
      '<g class="ap-boat"><rect x="0" y="198" width="120" height="20" rx="8" fill="#e9e1cf"/><rect x="14" y="186" width="90" height="14" rx="4" fill="#cfe2f5" stroke="#8a8f99"/><rect x="0" y="212" width="120" height="6" fill="' + MAG + '"/></g>' +
      txt("AMSTERDAM", 200, 30, 13, CREAM, 'letter-spacing="5"'),
      sky("apa", "#f6b26b", "#ffe2b8"));
  }

  /* 3. Tokyo at night: the big crossing, neon towers, a giant screen with a spinning record, people walking both ways */
  function tokyo() {
    let towers = "";
    [[0, 30, 70], [74, 50, 60], [140, 20, 120], [266, 40, 64], [334, 26, 66]].forEach((t, i) => {
      towers += '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (170 - t[1]) + '" fill="#1d1a2e"/>';
      for (let yy = t[1] + 8; yy < 160; yy += 10) for (let xx = t[0] + 6; xx < t[0] + t[2] - 6; xx += 10) towers += '<rect class="ap-bl ap-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="4" fill="#ffe7a0" opacity=".6"/>';
    });
    const neon = (x, y, w, h, c) => '<rect class="ap-flk" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="2" fill="none" stroke="' + c + '" stroke-width="3"/>';
    let stripes = "";
    for (let i = 0; i < 10; i++) stripes += '<rect x="' + (40 + i * 34) + '" y="196" width="20" height="40" fill="#e9e9e9" opacity=".85"/>';
    const walkers = [0, 1, 2, 3, 4, 5].map(i => '<g class="ap-walk" style="--d:' + (i % 2 ? -120 : 120) + 'px;animation-delay:-' + i + 's">' + person(i % 2 ? 300 - i * 12 : 80 + i * 14, 198 + (i % 3) * 6, ["#111", "#2a2a3a", "#3a2a2a"][i % 3]) + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#apt)"/>' + stars(8) + towers +
      /* giant screen */
      '<rect x="156" y="40" width="88" height="56" fill="#0a0a12" stroke="#555" stroke-width="3"/>' +
      '<g class="ap-spin"><circle cx="200" cy="68" r="20" fill="#111"/><circle cx="200" cy="68" r="14" fill="none" stroke="#333"/><circle cx="200" cy="68" r="6" fill="' + MAG + '"/></g>' +
      neon(10, 50, 40, 70, MAG) + neon(84, 64, 40, 20, SKY) + neon(276, 56, 44, 24, GOLD) + neon(344, 40, 36, 80, SKY) +
      /* street + crossing */
      '<rect x="0" y="170" width="400" height="90" fill="#2a2a30"/>' + stripes + walkers +
      txt("TOKYO", 200, 252, 12, CREAM, 'letter-spacing="6"'),
      sky("apt", "#07061a", "#3a1f5a"));
  }

  /* 4. Elm Av & S Franklin St, Hempstead: the wall tagged, the Cradle of Aviation Museum's glass hangar and planetarium dome behind, a car rolling by */
  function corner() {
    let glass = "";
    for (let x = 96; x < 300; x += 14) glass += '<rect x="' + x + '" y="60" width="11" height="66" fill="#8ec5e8" opacity=".75"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#apc)"/>' + stars(8) +
      /* the hangar: long glass front, curved roof, the dome to the right, a jet on a pylon */
      '<path d="M86 130v-72q107-30 220 0v72z" fill="#d9dde3"/>' + glass + '<path d="M86 58q107-30 220 0" stroke="#9aa3ad" stroke-width="3" fill="none"/>' +
      '<path d="M306 130v-34a40 40 0 0 1 80 0v34z" fill="#c9ced6"/><path d="M314 96a32 32 0 0 1 64 0" stroke="#9aa3ad" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="70" width="5" height="60" fill="#777"/><path d="M14 66l40-6l10 4l-40 8z" fill="#c9ced6"/><path d="M34 62l10-12h6l-6 14z" fill="#9aa3ad"/>' +
      /* wall */
      '<rect x="0" y="130" width="400" height="96" fill="#cfc4b4"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#bdb2a1" stroke-width="1"/>'; return b; })() +
      tag("A+", 22, 206, 66, MAG, -5) + tag("YOUNG PLUS", 112, 200, 28, GOLD, -4) + tag("PARKSIDE", 120, 222, 16, SKY, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ap-car"><rect x="0" y="238" width="48" height="13" rx="4" fill="' + GOLD + '"/><circle cx="11" cy="251" r="4" fill="#111"/><circle cx="37" cy="251" r="4" fill="#111"/></g>' +
      /* pole + signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Elm Av", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("S Franklin St", 346, 108, 12, "#fff") +
      '<circle class="ap-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("apc", "#0d0b22", "#4a3058"));
  }

  window.SCENES = { gardencity: gardencity, parkside: parkside, amsterdam: amsterdam, tokyo: tokyo, corner: corner };
})();
