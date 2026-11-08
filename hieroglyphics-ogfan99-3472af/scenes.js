/* Hieroglyphics scenes (Regions tab: The Bay Area; East Oakland). CSS classes prefixed hgl- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes hglflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.hgl-flk{animation:hglflick 2.4s infinite}.hgl-flk2{animation-delay:.8s}' +
    '@keyframes hgltw{0%,100%{opacity:.2}50%{opacity:1}}.hgl-tw{animation:hgltw 2.6s ease-in-out infinite}.hgl-tw2{animation-delay:-1.3s}' +
    '@keyframes hglout{0%,30%{opacity:1}40%,75%{opacity:0}85%,100%{opacity:1}}.hgl-out{animation:hglout 6s steps(1) infinite}.hgl-o2{animation-delay:-1s}.hgl-o3{animation-delay:-2s}.hgl-o4{animation-delay:-3s}.hgl-o5{animation-delay:-4s}' +
    '@keyframes hglbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.hgl-bus{animation:hglbus 7s ease-out infinite;animation-delay:-3.2s}' +
    '@keyframes hgldoor{0%,100%{transform:translateY(0)}50%{transform:translateY(-44px)}}.hgl-door{animation:hgldoor 6s ease-in-out infinite}' +
    '@keyframes hglfork{0%,100%{transform:translateX(0)}50%{transform:translateX(-120px)}}.hgl-fork{animation:hglfork 6s ease-in-out infinite}' +
    '@keyframes hgljet{0%{transform:translate(-80px,30px)}100%{transform:translate(480px,-40px)}}.hgl-jet{animation:hgljet 9s linear infinite}' +
    '@keyframes hglbeam{0%,100%{opacity:.25}50%{opacity:.9}}.hgl-bm{animation:hglbeam 2s ease-in-out infinite}.hgl-bm2{animation-delay:-1s}' +
    '@keyframes hglsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hgl-sp{animation:hglsp 1.4s ease-out infinite}.hgl-sp2{animation-delay:.45s}' +
    '@keyframes hglwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.hgl-wv{animation:hglwave 4s ease-in-out infinite}.hgl-wv2{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="hgl-tw' + (i % 2 ? " hgl-tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 37 + (i * i) % 23) % 72) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const GOLD = "#e8b931", TEAL = "#2bb3a3", RED = "#d6453d", ACT = "#00843d";

  /* 1. Foothill Blvd & Seminary Av, East Oakland: the AC Transit 40 pulling up at dusk, the stop pole with its black sign, stucco storefronts and palms, the hills behind */
  function hglstop() {
    let shops = "";
    const sc = ["#d8b98a", "#c99a7a", "#e2cfa6", "#b9a48a"];
    for (let i = 0; i < 5; i++) shops += '<rect x="' + (i * 82) + '" y="96" width="78" height="64" fill="' + sc[i % 4] + '"/><rect x="' + (i * 82 + 10) + '" y="116" width="58" height="30" fill="#2a2a34"/><rect class="hgl-flk' + (i % 2 ? " hgl-flk2" : "") + '" x="' + (i * 82 + 12) + '" y="118" width="54" height="10" fill="#ffd98a" opacity=".45"/><rect x="' + (i * 82) + '" y="96" width="78" height="8" fill="#7a5a44"/>';
    const palm = x => '<path d="M' + x + ' 160q-3-50 2-74" stroke="#5a4632" stroke-width="5" fill="none"/>' + [-50, -20, 15, 45].map(a => '<path d="M' + (x + 2) + ' 86q' + (a * 0.6) + ' -14 ' + a + ' 6" stroke="#2f6b3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("");
    const bus = '<g class="hgl-bus"><rect x="40" y="132" width="250" height="70" rx="9" fill="#f4f4f0" stroke="#8a9198" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 36) + '" y="142" width="30" height="26" rx="3" fill="#24323e"/>').join("") +
      '<rect x="40" y="176" width="250" height="8" fill="' + ACT + '"/><rect x="40" y="186" width="250" height="3" fill="#7fbf3f"/>' +
      '<rect x="270" y="138" width="18" height="40" rx="3" fill="#24323e"/><rect x="250" y="134" width="36" height="7" rx="2" fill="#111"/><text x="268" y="140" text-anchor="middle" ' + F + ' font-weight="700" font-size="6.5" fill="#ffb000">40</text>' +
      '<circle cx="90" cy="204" r="12" fill="#1a1a1a"/><circle cx="90" cy="204" r="5" fill="#8a8a8a"/><circle cx="240" cy="204" r="12" fill="#1a1a1a"/><circle cx="240" cy="204" r="5" fill="#8a8a8a"/>' +
      '<circle cx="286" cy="194" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hglg1)"/>' + stars(10) +
      '<path d="M0 96q60-34 140-26t130-20t130 14v32H0z" fill="#2f3a50"/>' +
      shops + palm(30) + palm(372) +
      '<rect x="0" y="160" width="400" height="56" fill="#3a3c42"/><path d="M0 188h400" stroke="#e8c547" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="0" y="214" width="400" height="46" fill="#9a968c"/><rect x="0" y="212" width="400" height="4" fill="#bdb8ad"/>' +
      '<rect x="320" y="66" width="5" height="148" fill="#4a5058"/>' +
      '<rect x="250" y="40" width="144" height="46" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="258" y="58" ' + F + ' font-weight="700" font-size="12" fill="#fff">Foothill Blvd</text><text x="258" y="76" ' + F + ' font-weight="700" font-size="12" fill="#fff">&amp; Seminary Av</text>' +
      '<rect x="354" y="50" width="32" height="18" rx="9" fill="' + ACT + '"/><text x="370" y="63.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">40</text>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + GOLD + '">EAST OAKLAND</text>',
      sky("hglg1", "#141235", "#e07a4a"));
  }

  /* 2. "Oakland Blackouts": the East Oakland flats at night seen from the hills, the street-light grid going dark block by block, stars coming out over the bay */
  function hglblackout() {
    let grid = "";
    const cls = ["", " hgl-o2", " hgl-o3", " hgl-o4", " hgl-o5"];
    for (let r = 0; r < 7; r++) {
      const y = 146 + r * 10, n = 22 + r * 3;
      let row = "";
      for (let i = 0; i < n; i++) { const x = (i + 0.5) * (400 / n) + (r % 2) * 4; row += '<circle cx="' + x.toFixed(1) + '" cy="' + (y + (i % 3)) + '" r="' + (1 + r * 0.18).toFixed(2) + '" fill="' + (i % 5 ? "#ffd98a" : "#fff3c4") + '"/>'; }
      grid += '<g class="hgl-out' + cls[r % 5] + '">' + row + '</g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#hglg2)"/>' + stars(46) +
      '<circle cx="64" cy="44" r="13" fill="#fff4dc" opacity=".85"/><circle cx="70" cy="40" r="11" fill="#0b0b22"/>' +
      '<rect x="0" y="118" width="400" height="20" fill="#16213a"/><path class="hgl-wv" d="M0 128h60M120 132h80M260 126h70" stroke="#4a6a8a" stroke-width="1.2"/>' +
      '<path d="M0 138h400v122H0z" fill="#0c0f1c"/>' + grid +
      '<path d="M0 222q80-16 160-8t140-6t100 8v50H0z" fill="#0a140e"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 27 - 6) + ' 238l9-26 9 26z" fill="#0f2418"/>').join("") +
      '<text x="200" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + GOLD + '">OAKLAND BLACKOUTS</text>',
      sky("hglg2", "#03031a", "#1c2048"));
  }

  /* 3. The Hiero Imperium warehouse in the flat West Oakland warehouse district: the crew's own label, roll-up door lifting, boxes of records rolling out on a forklift */
  function hglwarehouse() {
    let boxes = "";
    for (let i = 0; i < 9; i++) boxes += '<rect x="' + (226 + (i % 3) * 22) + '" y="' + (178 - Math.floor(i / 3) * 18) + '" width="20" height="16" fill="#b98a52" stroke="#6a4a2a"/><path d="M' + (226 + (i % 3) * 22) + ' ' + (184 - Math.floor(i / 3) * 18) + 'h20" stroke="#6a4a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hglg3)"/>' +
      '<rect x="20" y="60" width="360" height="150" fill="#8a7f72"/><path d="M20 60l180-26 180 26z" fill="#6a6158"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (34 + i * 34) + '" y="72" width="22" height="16" fill="#3a4a5a"/><rect x="' + (36 + i * 34) + '" y="74" width="18" height="5" fill="#9ec3d8" opacity=".5"/>').join("") +
      '<rect x="60" y="104" width="140" height="106" fill="#2a2a30"/>' +
      '<rect x="70" y="140" width="40" height="70" fill="#1a1a20"/><rect x="72" y="150" width="10" height="60" fill="#3a3a44"/>' +
      '<g class="hgl-door">' + Array.from({ length: 13 }, (_, i) => '<rect x="60" y="' + (104 + i * 8) + '" width="140" height="7" fill="#b6b2a8"/>').join("") + '</g>' +
      '<rect x="56" y="98" width="148" height="8" fill="#55524c"/>' +
      '<rect x="214" y="104" width="150" height="26" fill="#1c1c22"/><text x="289" y="122" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + GOLD + '" letter-spacing="1">HIERO IMPERIUM</text>' +
      boxes +
      '<g class="hgl-fork"><rect x="300" y="182" width="44" height="22" rx="3" fill="#e8b931"/><rect x="306" y="166" width="26" height="18" fill="none" stroke="#3a3a3a" stroke-width="3"/><path d="M296 160v44M296 202h-20" stroke="#3a3a3a" stroke-width="4"/>' +
        '<rect x="276" y="186" width="18" height="14" fill="#b98a52" stroke="#6a4a2a"/><circle cx="310" cy="206" r="6" fill="#1a1a1a"/><circle cx="336" cy="206" r="6" fill="#1a1a1a"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5850"/><path d="M0 232h400" stroke="#d8c86a" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="#fff">WEST OAKLAND · INDEPENDENT SINCE THE 90s</text>',
      sky("hglg3", "#6a8fb8", "#e8c79a"));
  }

  /* 4. "From Oakland to Auckland": the Sky Tower over Auckland's harbour at night, a jet crossing, ferry lights on the water (the worldwide ride in Make Your Move) */
  function hglauckland() {
    let city = "";
    const b = [[10, 40], [44, 70], [70, 54], [100, 90], [128, 62], [250, 80], [278, 104], [310, 66], [336, 88], [366, 58]];
    b.forEach(([x, h], i) => { city += '<rect x="' + x + '" y="' + (190 - h) + '" width="26" height="' + h + '" fill="#1c2a44"/>'; for (let y = 196 - h; y < 186; y += 10) city += '<rect class="hgl-tw' + (i % 2 ? " hgl-tw2" : "") + '" x="' + (x + 5) + '" y="' + y + '" width="4" height="4" fill="#ffd98a"/><rect x="' + (x + 15) + '" y="' + y + '" width="4" height="4" fill="#ffd98a" opacity=".6"/>'; });
    const tower = '<rect x="196" y="40" width="8" height="150" fill="#d8dde4"/><path d="M190 190l6-120h8l6 120z" fill="#c8ced6"/>' +
      '<rect x="182" y="80" width="36" height="8" rx="3" fill="#e8ecf0"/><path d="M180 88h40l-6 14h-28z" fill="#9aa4b0"/><rect x="184" y="90" width="32" height="5" fill="#9ee8ff" class="hgl-bm"/>' +
      '<rect x="188" y="106" width="24" height="5" rx="2" fill="#e8ecf0"/><path d="M199 40l1-26 1 26z" fill="#c8ced6"/><circle class="hgl-flk" cx="200" cy="14" r="2.5" fill="' + RED + '"/>' +
      '<path class="hgl-bm hgl-bm2" d="M200 84l-60-60h20zM200 84l60-60h-20z" fill="' + TEAL + '" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hglg4)"/>' + stars(30) + tower + city +
      '<g class="hgl-jet"><path d="M0 60l30-4 6-8 4 8 16 2-16 3-4 8-6-8z" fill="#e8ecf0"/><circle class="hgl-flk" cx="2" cy="60" r="1.6" fill="' + RED + '"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#0d2238"/>' +
      '<path class="hgl-wv" d="M10 204h50M110 214h70M230 206h60M320 220h60" stroke="#ffd98a" stroke-width="1.5" opacity=".5"/>' +
      '<path class="hgl-wv hgl-wv2" d="M40 230h40M150 240h50M280 236h50" stroke="#9ee8ff" stroke-width="1.2" opacity=".5"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '">FROM OAKLAND TO AUCKLAND</text>',
      sky("hglg4", "#05061e", "#27315e"));
  }

  /* 5. The corner: Telegraph Av and Broadway in Downtown Oakland, HIEROGLYPHICS tagged on the wall, the Cathedral Building's narrow cream Gothic flatiron with its copper-green crown lit up behind */
  const CATH = '<g transform="translate(0 24)">' +
    '<path d="M176 74V20h48v54z" fill="#e9dcc0"/><path d="M176 20l24-8 24 8z" fill="#c9b894"/>' +
    '<path d="M172 22l28-28 28 28z" fill="#5fa58a" stroke="#3f7a62" stroke-width="1.2"/>' +
    '<path d="M180 22v-10l4-6 4 6v10M212 22v-10l4-6 4 6v10" fill="#5fa58a" stroke="#3f7a62" stroke-width="1"/><path d="M198 -6h4v-10h-4z" fill="#5fa58a"/>' +
    '<rect x="192" y="6" width="16" height="10" fill="#4f8f78"/><rect class="hgl-flk" x="195" y="8" width="4" height="6" fill="#ffd98a"/><rect class="hgl-flk hgl-flk2" x="201" y="8" width="4" height="6" fill="#ffd98a"/>' +
    Array.from({ length: 5 }, (_, r) => [182, 194, 206, 216].map(x => '<rect x="' + x + '" y="' + (28 + r * 9) + '" width="4" height="6" fill="#ffd98a" opacity="' + (r % 2 ? ".55" : ".85") + '"/>').join("")).join("") +
    '<rect x="100" y="40" width="50" height="34" fill="#2a2440"/><rect x="250" y="34" width="46" height="40" fill="#2a2440"/><rect x="40" y="50" width="44" height="24" fill="#2a2440"/><rect x="316" y="46" width="44" height="28" fill="#2a2440"/>' +
    '</g>';
  function hglcorner() {
    let bricks = "";
    for (let y = 74; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#3e2c3a"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1020"/>' +
      '<rect x="0" y="0" width="400" height="74" fill="url(#hglg5)"/>' + stars(8) + CATH + '<rect x="0" y="74" width="400" height="136" fill="#24141f"/>' + bricks +
      '<rect x="0" y="72" width="400" height="4" fill="#2a1a24"/>' +
      tag("HIEROGLYPHICS", 16, 132, 34, GOLD, -6) + tag("3RD EYE", 40, 178, 30, TEAL, -4) + tag("HIERO", 200, 192, 26, RED, -8) +
      '<circle class="hgl-sp" cx="190" cy="186" r="3" fill="' + RED + '" opacity=".8"/><circle class="hgl-sp hgl-sp2" cx="196" cy="182" r="2" fill="' + RED + '" opacity=".8"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<rect x="356" y="80" width="5" height="130" fill="#4a5058"/>' +
      '<rect x="288" y="78" width="108" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="342" y="93" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Telegraph Av</text>' +
      '<rect x="300" y="102" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="117" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Broadway</text>',
      sky("hglg5", "#0d0b22", "#3a2a55"));
  }

  window.SCENES = { hglstop, hglblackout, hglwarehouse, hglauckland, hglcorner };
})();
