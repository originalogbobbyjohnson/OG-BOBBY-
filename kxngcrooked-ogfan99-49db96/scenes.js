/* kxngcrooked scenes (Regions tab: Los Angeles + SoCal; Eastside Long Beach). CSS classes prefixed kx- (the page's own anim-train is kept).
   Dominick Wickliffe was born on the Eastside of Long Beach; OC Weekly (2014): his rap career started in the studio apartment he shared
   with his older brother at Palmer Court and 20th St, and he escaped to the beach with friends.
   0 Long Beach Transit Route 21 (Cherry Ave) pulling up to the Cherry Ave / 20th St stop; black stop sign with the route bullet.
   1 Signal Hill, right above the Eastside: nodding oil pump jacks and an old derrick, the LA skyline far off.
   2 The Palmer Court studio apartment: egg-crate foam, a mic, a mattress, a 52-week calendar for Hip Hop Weekly.
   3 Rainbow Harbor by the downtown shore (he escaped to the beach with friends): the white Lions Lighthouse, its beam sweeping, boats rocking.
   4 E 20th St and Palmer Ct: green signs, KXNG CROOKED tagged on a stucco wall, palms, the Long Beach skyline and the white
     cable-stayed bridge into the port behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kxnod{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.kx-nod{transform-box:fill-box;transform-origin:52% 12%;animation:kxnod 2.4s ease-in-out infinite}.kx-n2{animation-delay:-1.2s}.kx-n3{animation-delay:-.6s}' +
    '@keyframes kxwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.kx-wave{animation:kxwave 3s ease-in-out infinite}.kx-w2{animation-delay:-1.5s}' +
    '@keyframes kxsmoke{0%{transform:translate(0,0);opacity:.6}100%{transform:translate(18px,-30px);opacity:0}}.kx-smoke{animation:kxsmoke 3s ease-out infinite}.kx-s2{animation-delay:-1s}.kx-s3{animation-delay:-2s}' +
    '@keyframes kxblink{0%,55%{opacity:1}56%,100%{opacity:.15}}.kx-blink{animation:kxblink 1.2s steps(1) infinite}' +
    '@keyframes kxbar{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.kx-bar{transform-box:fill-box;transform-origin:50% 100%;animation:kxbar .6s ease-in-out infinite}.kx-b2{animation-delay:-.15s}.kx-b3{animation-delay:-.3s}.kx-b4{animation-delay:-.45s}' +
    '@keyframes kxgull{0%{transform:translate(0,0)}50%{transform:translate(70px,-10px)}100%{transform:translate(0,0)}}.kx-gull{animation:kxgull 10s ease-in-out infinite}' +
    '@keyframes kxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kx-sp{animation:kxspray 1.4s ease-out infinite}.kx-sp2{animation-delay:.45s}' +
    '@keyframes kxglow{0%,100%{opacity:.5}50%{opacity:1}}.kx-glow{animation:kxglow 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const RED = "#d7263d", GOLD = "#f2c14e", SEA = "#3fb6d9", LBT = "#0a6fb5";
  const palm = (x, y, h) => '<path d="M' + x + ' ' + y + 'q-3 -' + (h / 2) + ' 2 -' + h + '" stroke="#5a4632" stroke-width="5" fill="none"/>' +
    '<g fill="#2f6b3a">' + [-60, -25, 10, 45, 80, 120].map(a => '<path d="M' + (x + 2) + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 14) + ' ' + (-8 + Math.sin(a * Math.PI / 180) * 4) + ' ' + (Math.cos(a * Math.PI / 180) * 26) + ' ' + (6 + Math.sin(a * Math.PI / 180) * 10) + 'q' + (-Math.cos(a * Math.PI / 180) * 12) + ' -4 ' + (-Math.cos(a * Math.PI / 180) * 26) + ' ' + (-6 - Math.sin(a * Math.PI / 180) * 10) + 'z"/>').join("") + '</g>';
  /* a pump jack: base + samson post, a walking beam that nods around (cx,cy) */
  const jack = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="-34" y="-4" width="70" height="6" fill="#2b2b2b"/><path d="M-6 -4l8 -42l8 42z" fill="none" stroke="#3a3a3a" stroke-width="4"/>' +
    '<rect x="18" y="-22" width="14" height="18" rx="2" fill="#3a3a3a"/><circle cx="25" cy="-14" r="7" fill="#555"/>' +
    '<g class="kx-nod ' + (cls || "") + '">' +
    '<rect x="-36" y="-50" width="66" height="7" rx="2" fill="#c9a227"/><path d="M-36 -54q-10 4 -10 14q0 8 6 10l4 -14z" fill="#c9a227"/>' +
    '<path d="M-44 -30v26" stroke="#222" stroke-width="2"/><path d="M24 -44l2 26" stroke="#3a3a3a" stroke-width="3"/></g></g>';

  /* 0. Long Beach Transit Route 21 at Cherry Ave / 20th St */
  function kxstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 40) + '" y="110" width="32" height="24" rx="3" fill="#20303f"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="300" height="62" rx="9" fill="#f3f4f6" stroke="#7a8590" stroke-width="2"/>' + wins +
      '<path d="M40 142h300" stroke="' + LBT + '" stroke-width="8"/><path d="M40 151h300" stroke="#6cbf4a" stroke-width="4"/>' +
      '<rect x="306" y="108" width="28" height="36" rx="3" fill="#20303f"/>' +
      '<rect x="240" y="102" width="62" height="8" rx="2" fill="#111"/><text x="271" y="108.6" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb21a">21 CHERRY</text>' +
      '<circle cx="90" cy="164" r="13" fill="#222"/><circle cx="90" cy="164" r="5" fill="#888"/><circle cx="292" cy="164" r="13" fill="#222"/><circle cx="292" cy="164" r="5" fill="#888"/>' +
      '<circle cx="336" cy="150" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kx0)"/>' +
      '<circle class="kx-glow" cx="330" cy="50" r="20" fill="#ffd27a" opacity=".8"/>' +
      /* Signal Hill rising behind, derricks on top */
      '<path d="M0 100q80 -40 170 -36q90 4 150 30l80 6v20h-400z" fill="#8a7a62" opacity=".75"/>' +
      '<path d="M200 66l6 -26l6 26M203 54h6" stroke="#3a3a3a" stroke-width="2" fill="none"/>' +
      '<g fill="#d6c7ae"><rect x="20" y="88" width="40" height="18"/><rect x="66" y="84" width="30" height="22"/><rect x="250" y="86" width="44" height="20"/></g>' +
      palm(22, 178, 92) + palm(378, 178, 100) +
      '<rect x="0" y="168" width="400" height="12" fill="#c9c3b6"/><rect x="0" y="180" width="400" height="80" fill="#55524d"/>' +
      '<path d="M0 222h60M100 222h60M200 222h60M300 222h60" stroke="#e8d84a" stroke-width="3"/>' +
      bus +
      /* bus stop pole + black sign with route bullet */
      '<rect x="356" y="96" width="4" height="84" fill="#444"/>' +
      '<rect x="296" y="60" width="98" height="40" rx="3" fill="#111"/>' +
      '<circle cx="312" cy="80" r="11" fill="' + LBT + '"/><text x="312" y="84.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">21</text>' +
      '<text x="328" y="77" ' + font + ' font-size="9.5" fill="#fff">CHERRY AV</text><text x="328" y="91" ' + font + ' font-size="9.5" fill="#fff">&amp; 20TH ST</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">EASTSIDE · LONG BEACH, CA</text>',
      sky("kx0", "#3d5a8c", "#f2b27a"));
  }

  /* 1. Signal Hill pump jacks */
  function kxsignal() {
    return svg(
      '<rect width="400" height="260" fill="url(#kx1)"/>' +
      '<circle class="kx-glow" cx="80" cy="70" r="26" fill="#ffcf6b" opacity=".8"/>' +
      /* far LA skyline */
      '<g fill="#6b6f8a" opacity=".7"><rect x="250" y="102" width="10" height="34"/><rect x="262" y="92" width="12" height="44"/><rect x="276" y="98" width="9" height="38"/><rect x="287" y="86" width="13" height="50"/><rect x="302" y="104" width="10" height="32"/></g>' +
      '<text x="281" y="82" text-anchor="middle" ' + font + ' font-size="7" fill="#d9dbe8" opacity=".8">L.A.</text>' +
      '<path d="M0 150q90 -46 200 -44q110 2 200 40v114h-400z" fill="#9c8564"/>' +
      '<path d="M0 170q100 -30 200 -28q110 2 200 26v92h-400z" fill="#7d6a4e"/>' +
      /* old wooden derrick */
      '<path d="M330 150l12 -70l12 70M334 128h16M338 106h8M332 140h20" stroke="#4a3a2a" stroke-width="3" fill="none"/>' +
      jack(110, 168, 1, "") + jack(230, 160, .8, "kx-n2") + jack(330, 190, .7, "kx-n3") +
      '<g fill="#e0d3b8"><rect x="20" y="186" width="34" height="20"/><path d="M18 186l19 -12l19 12z" fill="#a0523a"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#4f4a42"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">SIGNAL HILL · OVER THE EASTSIDE</text>',
      sky("kx1", "#2d3f73", "#f0a868"));
  }

  /* 2. Palmer Court studio apartment */
  function kxstudio() {
    const foam = Array.from({ length: 5 }, (_, r) => Array.from({ length: 6 }, (_, c) => '<circle cx="' + (40 + c * 22) + '" cy="' + (40 + r * 22) + '" r="8" fill="#3b3b47"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2228"/>' +
      '<rect x="24" y="24" width="140" height="120" fill="#262631"/>' + foam +
      /* window with sunset + palm */
      '<rect x="210" y="30" width="100" height="70" fill="#f2a85e"/><path d="M210 80h100v20h-100z" fill="#d97a4a"/><path d="M260 30v70M210 65h100" stroke="#5a4a3a" stroke-width="4"/><rect x="210" y="30" width="100" height="70" fill="none" stroke="#5a4a3a" stroke-width="5"/>' +
      '<path d="M290 100q-2 -24 2 -40" stroke="#2a2a2a" stroke-width="3" fill="none"/><path d="M292 60q-10 -2 -16 6M292 60q10 -4 16 4M292 60q-4 -8 -12 -10" stroke="#2a2a2a" stroke-width="2.5" fill="none"/>' +
      /* calendar */
      '<rect x="326" y="30" width="58" height="66" rx="2" fill="#f3efe6"/><rect x="326" y="30" width="58" height="14" fill="' + RED + '"/>' +
      '<text x="355" y="41" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">WEEKLY</text>' +
      '<text x="355" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#222">52</text><text x="355" y="88" text-anchor="middle" ' + font + ' font-size="7" fill="#555">WEEKS</text>' +
      /* floor, mattress */
      '<rect x="0" y="190" width="400" height="70" fill="#5a4636"/><path d="M0 206h400M0 226h400M0 246h400" stroke="#4a382a" stroke-width="2"/>' +
      '<rect x="230" y="172" width="150" height="26" rx="6" fill="#d9d2c4"/><rect x="236" y="164" width="40" height="14" rx="5" fill="#f3efe6"/>' +
      /* mic stand + pop filter */
      '<rect x="98" y="110" width="4" height="86" fill="#777"/><path d="M80 196h40" stroke="#777" stroke-width="5"/>' +
      '<rect x="92" y="88" width="16" height="26" rx="8" fill="#a8adb4" stroke="#555" stroke-width="2"/><circle cx="128" cy="100" r="13" fill="#111" opacity=".55" stroke="#777" stroke-width="2.5"/>' +
      /* boombox / 4-track with level bars */
      '<rect x="150" y="160" width="70" height="36" rx="4" fill="#1c1c1c"/><circle cx="165" cy="178" r="9" fill="#333" stroke="#666"/><circle cx="205" cy="178" r="9" fill="#333" stroke="#666"/>' +
      '<g fill="' + GOLD + '"><rect class="kx-bar" x="177" y="168" width="3" height="18"/><rect class="kx-bar kx-b2" x="182" y="168" width="3" height="18"/><rect class="kx-bar kx-b3" x="187" y="168" width="3" height="18"/><rect class="kx-bar kx-b4" x="192" y="168" width="3" height="18"/></g>' +
      '<circle class="kx-blink" cx="214" cy="164" r="2.5" fill="' + RED + '"/>' +
      /* notebook */
      '<rect x="40" y="200" width="44" height="30" rx="2" fill="#f3efe6" transform="rotate(-8 62 215)"/><path d="M46 208h32M46 214h30M46 220h26" stroke="#7a8bd0" stroke-width="1.2" transform="rotate(-8 62 215)"/>' +
      '<text x="200" y="152" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">PALMER CT · WHERE IT STARTED</text>',
      "");
  }

  /* 3. Rainbow Harbor: the Lions Lighthouse at Shoreline Village */
  function kxharbor() {
    return svg(
      '<rect width="400" height="260" fill="url(#kx3)"/>' +
      '<g class="kx-gull"><path d="M70 50q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      /* downtown towers behind */
      '<g fill="#7d86a6" opacity=".75"><rect x="20" y="96" width="18" height="60"/><rect x="42" y="80" width="22" height="76"/><rect x="68" y="102" width="16" height="54"/><rect x="300" y="90" width="20" height="66"/><rect x="324" y="104" width="16" height="52"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2f7fa8"/>' +
      /* jetty */
      '<path d="M150 170h170l10 10h-190z" fill="#8a8378"/>' +
      /* the lighthouse: white octagonal tower, dark lantern room, rotating beam */
      '<path d="M222 172l6 -96h24l6 96z" fill="#f3efe6"/><path d="M228 76h24" stroke="#c9c2b4" stroke-width="2"/>' +
      '<path d="M232 120h16M231 140h18M230 158h20" stroke="#d8d1c3" stroke-width="2"/>' +
      '<rect x="224" y="70" width="32" height="6" fill="#2b2b2b"/><rect x="230" y="52" width="20" height="18" fill="#1d3b4a"/><rect x="234" y="56" width="12" height="12" fill="#ffe08a"/>' +
      '<path d="M228 52l12 -12 12 12z" fill="#2b2b2b"/>' +
      '<g class="kx-glow"><path d="M246 62l120 -24v34z" fill="#fff3b0" opacity=".35"/></g>' +
      /* boats */
      '<g class="kx-wave"><path d="M40 196h50l-6 8h-38z" fill="#f3efe6"/><path d="M64 196v-30l14 28z" fill="#fff"/></g>' +
      '<g class="kx-wave kx-w2"><path d="M330 206h40l-5 7h-30z" fill="#f3efe6"/><rect x="340" y="198" width="16" height="8" fill="#e8ecf2"/></g>' +
      '<g class="kx-wave"><path d="M0 222q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a9dcef" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 238q200 -12 400 0v22h-400z" fill="#e8d3a2"/>' + palm(24, 244, 86) + palm(376, 246, 80) +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#5a3a1a">RAINBOW HARBOR · LONG BEACH</text>',
      sky("kx3", "#5fa6d6", "#f6d29a"));
  }

  /* 4. E 20th St and Palmer Ct */
  function kxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kx4)"/>' +
      /* skyline + white cable-stayed bridge */
      '<g fill="#3a3550"><rect x="150" y="70" width="16" height="60"/><rect x="170" y="56" width="20" height="74"/><rect x="194" y="78" width="14" height="52"/><rect x="212" y="64" width="18" height="66"/><rect x="234" y="84" width="12" height="46"/></g>' +
      '<rect x="40" y="58" width="6" height="72" fill="#eef2f6"/><rect x="104" y="58" width="6" height="72" fill="#eef2f6"/>' +
      '<g stroke="#eef2f6" stroke-width="1">' + [0, 1, 2, 3, 4].map(i => '<path d="M43 ' + (62 + i * 6) + 'L' + (4 + i * 6) + ' 112M43 ' + (62 + i * 6) + 'L' + (82 - i * 6) + ' 112M107 ' + (62 + i * 6) + 'L' + (68 + i * 6) + ' 112M107 ' + (62 + i * 6) + 'L' + (146 - i * 6) + ' 112"/>').join("") + '</g>' +
      '<path d="M0 112h150" stroke="#eef2f6" stroke-width="4"/>' +
      palm(270, 134, 96) + palm(380, 134, 84) +
      /* stucco wall */
      '<rect x="0" y="130" width="400" height="96" fill="#d8c3a5"/><rect x="0" y="130" width="400" height="6" fill="#bfa888"/>' +
      tag("KXNG CROOKED", 14, 196, 36, RED, -6) + tag("C.O.B.", 30, 220, 18, GOLD, -3) + tag("STAY WOKE", 150, 220, 18, SEA, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#5d5a55"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="322" y="86" width="6" height="140" fill="#2f2f2f"/>' + sign(268, 88, 114, "E 20th St") + sign(274, 114, 102, "Palmer Ct") +
      '<g class="kx-sp"><circle cx="208" cy="168" r="3" fill="' + RED + '" opacity=".7"/></g><g class="kx-sp kx-sp2"><circle cx="214" cy="162" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("kx4", "#26254f", "#f08a5d"));
  }

  window.SCENES = { kxstation: kxstation, kxsignal: kxsignal, kxstudio: kxstudio, kxharbor: kxharbor, kxcorner: kxcorner };
})();
