/* nobigdyl scenes (Regions tab: Memphis + Tennessee; grew up in Bell Buckle, TN - "grew up in the woods, 30 miles from the nearest college" - MTSU in Murfreesboro, then Nashville with Indie Tribe). CSS classes prefixed nb- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nbglow{0%,100%{opacity:.45}50%{opacity:1}}.nb-glow{animation:nbglow 2.2s ease-in-out infinite}.nb-g2{animation-delay:-1.1s}' +
    '@keyframes nbblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.nb-bl{animation:nbblink 1s steps(1) infinite}.nb-bl2{animation-delay:-.5s}' +
    '@keyframes nbfly{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(40px,-30px);opacity:0}}.nb-ff{animation:nbfly 4s ease-in-out infinite}.nb-ff2{animation-delay:-1.3s}.nb-ff3{animation-delay:-2.6s}' +
    '@keyframes nbsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.nb-sw{transform-box:fill-box;transform-origin:50% 100%;animation:nbsway 4s ease-in-out infinite}.nb-sw2{animation-delay:-2s}' +
    '@keyframes nbbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.nb-bm{transform-box:fill-box;transform-origin:50% 0%;animation:nbbeam 4s ease-in-out infinite}.nb-bm2{animation-delay:-2s}' +
    '@keyframes nbjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.nb-hj{animation:nbjump .9s ease-in-out infinite}.nb-hj2{animation-delay:-.45s}' +
    '@keyframes nbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nb-sp{animation:nbspray 1.4s ease-out infinite}.nb-sp2{animation-delay:.45s}' +
    '@keyframes nbdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(30px);opacity:0}}.nb-dr{animation:nbdrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const SUN = "#ffcf4a", LEAF = "#5ec27a", SKYB = "#7ab8ff";
  const shops = (y) => [["#c8553d", 0], ["#e8c170", 64], ["#5a8a9a", 128], ["#b86a8a", 192], ["#8aa65a", 256], ["#d88a4a", 320]].map(([c, x]) =>
    '<rect x="' + (x + 2) + '" y="' + y + '" width="60" height="' + (150 - y) + '" fill="' + c + '"/><rect x="' + x + '" y="' + (y - 6) + '" width="64" height="8" fill="#5a4636"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y + 14) + '" width="20" height="' + (136 - y - 14) + '" fill="#2a3442"/><rect x="' + (x + 34) + '" y="' + (y + 14) + '" width="22" height="18" fill="#ffe6a8" opacity=".8"/>' +
    '<path d="M' + (x + 4) + ' ' + (y + 8) + 'h56l-4 6h-48z" fill="#f4efe2" opacity=".8"/>').join("");

  /* 0. Railroad Square, Bell Buckle: the freight train rolling right through the middle of town past the row of old one-story painted shops, the crossing lights blinking, the TN 82 route sign */
  function nbstation() {
    const train = '<g class="anim-train">' +
      '<rect x="10" y="150" width="120" height="50" rx="4" fill="#2a3a5a"/><rect x="96" y="136" width="34" height="30" rx="3" fill="#2a3a5a"/><rect x="102" y="142" width="22" height="12" fill="#ffe6a8"/>' +
      '<rect x="10" y="168" width="120" height="6" fill="' + SUN + '"/>' +
      [140, 260].map(x => '<rect x="' + x + '" y="148" width="112" height="52" rx="2" fill="#7a4a3a"/><path d="M' + (x + 8) + ' 156v36M' + (x + 30) + ' 156v36M' + (x + 52) + ' 156v36M' + (x + 74) + ' 156v36M' + (x + 96) + ' 156v36" stroke="#5a3428" stroke-width="2"/>').join("") +
      [30, 90, 160, 230, 280, 350].map(x => '<circle cx="' + x + '" cy="204" r="7" fill="#1a1a1a"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nb0)"/>' +
      '<path d="M0 90q100 -26 200 -8q100 -20 200 4v40h-400z" fill="#6a8a5a"/>' +
      shops(96) +
      '<rect x="0" y="150" width="400" height="110" fill="#8a8274"/><rect x="0" y="206" width="400" height="5" fill="#5a5048"/><rect x="0" y="216" width="400" height="5" fill="#5a5048"/>' +
      Array.from({ length: 26 }, (_, i) => '<rect x="' + (i * 16) + '" y="204" width="8" height="20" fill="#4a3a2e"/>').join("") +
      train +
      '<rect x="364" y="120" width="4" height="110" fill="#ddd"/><path d="M350 128l32 16M350 144l32 -16" stroke="#fff" stroke-width="5"/><path d="M350 128l32 16M350 144l32 -16" stroke="#111" stroke-width="1"/>' +
      '<circle class="nb-bl" cx="356" cy="158" r="5" fill="#ff3a2a"/><circle class="nb-bl nb-bl2" cx="376" cy="158" r="5" fill="#ff3a2a"/>' +
      '<rect x="12" y="16" width="250" height="32" rx="3" fill="#111"/><text x="24" y="37" ' + font + ' font-size="13" fill="#fff">Bell Buckle · Railroad Square</text>' +
      '<rect x="276" y="14" width="40" height="36" rx="3" fill="#fff" stroke="#111" stroke-width="2"/><path d="M282 20h28v18q-14 10 -28 0z" fill="none" stroke="#111" stroke-width="2"/><text x="296" y="36" text-anchor="middle" ' + font + ' font-size="11" fill="#111">82</text>',
      sky("nb0", "#9cc8ee", "#f4e6c8"));
  }

  /* 1. Out in the woods of Middle Tennessee, where he grew up: a little garage with the door up and a mic inside, glowing under the tall tree canopy, fireflies and katydids at dusk */
  function nbwoods() {
    const tree = (x, s, d) => '<g class="nb-sw' + (d ? " nb-sw2" : "") + '"><rect x="' + (x - 5 * s) + '" y="' + (100 - 10 * s) + '" width="' + 10 * s + '" height="' + (130 + 10 * s) + '" fill="#4a3426"/>' +
      '<circle cx="' + x + '" cy="' + (90 - 20 * s) + '" r="' + 34 * s + '" fill="#2e5a34"/><circle cx="' + (x - 22 * s) + '" cy="' + (100 - 10 * s) + '" r="' + 24 * s + '" fill="#3a6a3e"/><circle cx="' + (x + 22 * s) + '" cy="' + (100 - 12 * s) + '" r="' + 26 * s + '" fill="#356238"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nb1)"/>' +
      tree(40, 1.2, 0) + tree(110, 1, 1) + tree(300, 1.1, 1) + tree(370, 1.3, 0) +
      '<rect x="0" y="200" width="400" height="60" fill="#3a5a2e"/>' +
      '<path d="M150 200v-70l60 -30l60 30v70z" fill="#d8cfbf" stroke="#8a8274" stroke-width="2"/><rect x="168" y="140" width="84" height="60" fill="#ffd98a" class="nb-glow"/>' +
      '<rect x="168" y="132" width="84" height="10" fill="#bdb4a2"/>' +
      '<path d="M210 196v-30" stroke="#333" stroke-width="2.5"/><path d="M202 196h16" stroke="#333" stroke-width="2.5"/><rect x="205" y="152" width="10" height="16" rx="5" fill="#333"/>' +
      '<rect x="230" y="176" width="14" height="20" fill="#555"/><circle cx="237" cy="184" r="4" fill="#222"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle class="nb-ff' + (i % 3 ? (i % 3 === 1 ? " nb-ff2" : " nb-ff3") : "") + '" cx="' + (30 + i * 42) + '" cy="' + (190 - (i % 4) * 14) + '" r="2.5" fill="#f4ff8a"/>').join("") +
      '<g transform="translate(70 214)"><path d="M0 0q10 -8 22 0l-4 4h-14z" fill="' + LEAF + '"/><path d="M4 0l-6 -10M16 0l6 -10" stroke="' + LEAF + '" stroke-width="1.5"/></g>',
      sky("nb1", "#2a3a6a", "#f2a35a"));
  }

  /* 2. MTSU in Murfreesboro: the old red-brick main building with its tall white columns and pediment, the lawn and the sidewalk out front */
  function nbmtsu() {
    return svg(
      '<rect width="400" height="260" fill="url(#nb2)"/>' +
      '<rect x="40" y="80" width="320" height="110" fill="#a8473a"/>' +
      Array.from({ length: 13 }, (_, r) => '<path d="M40 ' + (86 + r * 8) + 'h320" stroke="#8a3a2e" stroke-width="1"/>').join("") +
      [56, 86, 286, 316].map(x => '<rect x="' + x + '" y="96" width="20" height="30" fill="#2a3442" stroke="#f4f0e6" stroke-width="2"/><rect x="' + x + '" y="144" width="20" height="30" fill="#2a3442" stroke="#f4f0e6" stroke-width="2"/>').join("") +
      '<path d="M130 76L200 40L270 76z" fill="#f4f0e6" stroke="#cfc8b8" stroke-width="2"/><rect x="130" y="76" width="140" height="10" fill="#f4f0e6"/>' +
      [140, 168, 196, 224, 252].map(x => '<rect x="' + x + '" y="86" width="10" height="104" fill="#fbf8f0" stroke="#cfc8b8" stroke-width="1"/>').join("") +
      '<rect x="186" y="150" width="28" height="40" fill="#3a2a22"/><rect x="34" y="70" width="332" height="10" fill="#6a4a3a"/>' +
      '<rect x="120" y="190" width="160" height="8" fill="#e8e4dc"/><rect x="110" y="198" width="180" height="8" fill="#d8d4cc"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#5a9a4a"/><path d="M200 206l-40 54h80z" fill="#cfc8b8"/>' +
      '<g class="nb-sw"><rect x="20" y="130" width="8" height="80" fill="#4a3426"/><circle cx="24" cy="120" r="28" fill="#3e6a3a"/></g><g class="nb-sw nb-sw2"><rect x="372" y="130" width="8" height="80" fill="#4a3426"/><circle cx="376" cy="120" r="28" fill="#3e6a3a"/></g>' +
      '<rect x="300" y="226" width="80" height="22" rx="3" fill="#0a3a7a"/><text x="340" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MURFREESBORO</text>',
      sky("nb2", "#7ab8ee", "#eef4fa"));
  }

  /* 3. A Nashville club stage on an Indie Tribe night: brick back wall, string lights, the crowd's hands up, stage beams sweeping in solar gold and leaf green */
  function nbstage() {
    return svg(
      '<rect width="400" height="260" fill="#1a1214"/>' +
      Array.from({ length: 12 }, (_, r) => '<path d="M0 ' + (10 + r * 12) + 'h400" stroke="#2e2022" stroke-width="2"/>').join("") +
      '<g class="nb-bm"><path d="M110 0l-44 170h88z" fill="' + SUN + '" opacity=".18"/></g><g class="nb-bm nb-bm2"><path d="M290 0l-44 170h88z" fill="' + LEAF + '" opacity=".18"/></g>' +
      '<path d="M0 30q50 16 100 0q50 16 100 0q50 16 100 0q50 16 100 0" stroke="#555" stroke-width="1" fill="none"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle class="nb-glow' + (i % 2 ? " nb-g2" : "") + '" cx="' + (12 + i * 25) + '" cy="' + (34 + Math.abs(Math.sin(i * 0.8)) * 6) + '" r="3" fill="#ffe6a8"/>').join("") +
      '<rect x="60" y="130" width="280" height="40" fill="#2a2a30"/><rect x="60" y="126" width="280" height="6" fill="#444"/>' +
      '<rect x="80" y="96" width="30" height="34" fill="#111"/><circle cx="95" cy="113" r="10" fill="#333"/><rect x="290" y="96" width="30" height="34" fill="#111"/><circle cx="305" cy="113" r="10" fill="#333"/>' +
      '<path d="M200 128v-34" stroke="#888" stroke-width="2"/><rect x="195" y="84" width="10" height="14" rx="5" fill="#888"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#0e0a0c"/>' +
      Array.from({ length: 14 }, (_, i) => '<g class="nb-hj' + (i % 2 ? " nb-hj2" : "") + '"><circle cx="' + (14 + i * 28) + '" cy="' + (200 + (i % 3) * 8) + '" r="11" fill="#2a2024"/><path d="M' + (8 + i * 28) + ' ' + (196 + (i % 3) * 8) + 'l-6 -26M' + (20 + i * 28) + ' ' + (196 + (i % 3) * 8) + 'l6 -26" stroke="#2a2024" stroke-width="5" stroke-linecap="round"/></g>').join("") +
      '<rect x="140" y="56" width="120" height="22" rx="3" fill="#111" stroke="' + SUN + '" stroke-width="1.5"/><text x="200" y="71" text-anchor="middle" ' + font + ' font-size="10" fill="' + SUN + '">NASHVILLE TONIGHT</text>',
      '');
  }

  /* 4. The corner: Railroad Square and Webb Rd in Bell Buckle, NOBIGDYL. tagged on the old brick wall, the painted shop row and the crossing signal behind */
  function nbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#nb4)"/>' +
      '<path d="M0 80q100 -26 200 -8q100 -20 200 4v40h-400z" fill="#4a6a4a"/>' +
      [["#c8553d", 0], ["#e8c170", 70], ["#5a8a9a", 140], ["#b86a8a", 210]].map(([c, x]) => '<rect x="' + x + '" y="84" width="66" height="56" fill="' + c + '" opacity=".85"/><rect x="' + (x + 36) + '" y="98" width="22" height="16" fill="#ffe6a8" class="nb-glow"/>').join("") +
      '<rect x="304" y="40" width="4" height="56" fill="#ddd"/><path d="M292 44l28 14M292 58l28 -14" stroke="#fff" stroke-width="4"/><circle class="nb-bl" cx="298" cy="72" r="4" fill="#ff3a2a"/><circle class="nb-bl nb-bl2" cx="314" cy="72" r="4" fill="#ff3a2a"/>' +
      '<rect x="0" y="136" width="400" height="90" fill="#8a4a3a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#6e3a2e" stroke-width="1"/>').join("") +
      tag("nobigdyl.", 16, 198, 46, SUN, -5) + tag("INDIE TRIBE", 28, 222, 20, LEAF, -3) + tag("DYLLIE", 252, 192, 26, SKYB, -6) + tag("MIDDLE TENN", 180, 222, 18, "#fff", -4) +
      '<g class="nb-dr"><path d="M58 206q-4 6 0 10q4 -4 0 -10z" fill="' + SUN + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="352" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(268, 98, 130, "Railroad Sq") + sign(290, 124, 108, "Webb Rd") +
      '<g class="nb-sp"><circle cx="168" cy="166" r="3" fill="' + SUN + '" opacity=".7"/></g><g class="nb-sp nb-sp2"><circle cx="174" cy="160" r="2" fill="' + SUN + '" opacity=".6"/></g>',
      sky("nb4", "#2a2a5a", "#f2a35a"));
  }

  window.SCENES = { nbstation: nbstation, nbwoods: nbwoods, nbmtsu: nbmtsu, nbstage: nbstage, nbcorner: nbcorner };
})();
