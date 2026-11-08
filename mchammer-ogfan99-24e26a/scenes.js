/* mchammer scenes (Regions tab: The Bay Area; Fairfax / High Street, East Oakland). CSS classes prefixed mch- (the page's own anim-train is kept). No 9 appears in any scene. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mchglow{0%,100%{opacity:.45}50%{opacity:1}}.mch-glow{animation:mchglow 2.2s ease-in-out infinite}.mch-g2{animation-delay:-1.1s}' +
    '@keyframes mchflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.95}}.mch-flk{animation:mchflick 2.8s infinite}.mch-flk2{animation-delay:1s}' +
    '@keyframes mchsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mch-sw{transform-box:fill-box;transform-origin:50% 100%;animation:mchsway 3s ease-in-out infinite}.mch-sw2{animation-delay:-1.5s}' +
    '@keyframes mchflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.mch-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mchflag 1.6s ease-in-out infinite}' +
    '@keyframes mchball{0%{transform:translate(0,0);opacity:0}10%{opacity:1}100%{transform:translate(250px,-90px);opacity:0}}.mch-ball{animation:mchball 2.6s ease-out infinite}' +
    '@keyframes mchjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.mch-j{animation:mchjump .6s ease-in-out infinite}.mch-j2{animation-delay:-.2s}.mch-j3{animation-delay:-.4s}' +
    '@keyframes mchbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.mch-bm{transform-box:fill-box;transform-origin:50% 0%;animation:mchbeam 3.2s ease-in-out infinite}.mch-bm2{animation-delay:-1.6s}' +
    '@keyframes mchrec{0%{transform:translate(0,0)}50%{transform:translate(0,-12px)}100%{transform:translate(0,0)}}.mch-rec{animation:mchrec 1.4s ease-in-out infinite}.mch-rec2{animation-delay:-.45s}.mch-rec3{animation-delay:-.9s}' +
    '@keyframes mchspin{to{transform:rotate(360deg)}}.mch-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mchspin 2s linear infinite}' +
    '@keyframes mchcar{0%{transform:translateX(480px)}100%{transform:translateX(-180px)}}.mch-car{animation:mchcar 6s linear infinite}' +
    '@keyframes mchspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mch-sp{animation:mchspray 1.4s ease-out infinite}.mch-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, ink) => '<circle cx="' + x + '" cy="' + y + '" r="12" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + (ink || "#fff") + '">' + txt + '</text>';
  const pill = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="52" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + 26) + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mch-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, s, k) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -60 4 -120" stroke="#4a3a2c" stroke-width="6" fill="none"/><g transform="translate(4 -120)"><g class="mch-sw' + (k ? " mch-sw2" : "") + '">' +
    [-70, -30, 10, 50, 90, 130, 170, 210].map(a => '<path d="M0 0q' + (Math.cos(a * Math.PI / 180) * 20).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 20 - 8).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 38).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 38 + 8).toFixed(1) + '" stroke="#2a5a34" stroke-width="6" fill="none" stroke-linecap="round"/>').join("") + '</g></g></g>';
  const GOLD = "#f5c518", PURP = "#8a4fff", AGRN = "#0b5d3b", TEMPO = "#00843d", ACB = "#1d4f8e";
  /* the Coliseum's concrete bowl + its tall light towers, used far off behind the corner */
  const towers = (xs, base, h) => xs.map(x => '<path d="M' + x + ' ' + base + 'V' + (base - h) + '" stroke="#5a5a66" stroke-width="3"/><rect x="' + (x - 13) + '" y="' + (base - h - 12) + '" width="26" height="12" fill="#3a3a46"/>' +
    [0, 1, 2].map(r => [0, 1, 2, 3].map(c => '<circle class="mch-glow' + ((r + c) % 2 ? " mch-g2" : "") + '" cx="' + (x - 9 + c * 6) + '" cy="' + (base - h - 9 + r * 3.2) + '" r="1.4" fill="#fff6d0"/>').join("")).join("")).join("");

  /* 1. Tempo High Street: the median platform on International Blvd at High St, glass canopy, the green Tempo 1T bus sliding in on a gold afternoon, palms on the sidewalk */
  function mchstation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (66 + i * 38) + '" y="108" width="28" height="22" rx="2" fill="#1f2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="316" height="50" rx="8" fill="#f4f6f4" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="40" y="134" width="316" height="6" fill="' + TEMPO + '"/><rect x="40" y="140" width="316" height="3" fill="' + ACB + '"/>' +
      '<rect x="44" y="104" width="16" height="42" fill="#1f2a33"/><rect x="216" y="102" width="8" height="46" fill="#3a3e46"/>' +
      '<path d="M342 102q14 2 14 18v20h-16z" fill="#1f2a33"/><rect x="344" y="106" width="10" height="8" rx="1" fill="#111"/><text x="349" y="113" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a">1T</text>' +
      '<circle cx="90" cy="152" r="8" fill="#111"/><circle cx="180" cy="152" r="8" fill="#111"/><circle cx="310" cy="152" r="8" fill="#111"/><circle cx="352" cy="140" r="3" fill="#fff6c2" class="mch-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mch1)"/>' +
      '<circle cx="330" cy="58" r="24" fill="#ffe08a" opacity=".9"/>' +
      '<path d="M0 84l60 -20l70 10l70 -26l80 18l60 -12l60 20v26H0z" fill="#5b6a4a" opacity=".8"/>' +
      /* two-story storefronts behind */
      [[0, "#d9b48a"], [78, "#c7d3c0"], [300, "#e3c9a0"]].map(([x, c]) => '<rect x="' + x + '" y="74" width="' + (x === 300 ? 100 : 74) + '" height="86" fill="' + c + '"/>' +
        [0, 1, 2].map(k => '<rect x="' + (x + 8 + k * 22) + '" y="84" width="14" height="16" fill="#6a8aa0"/>').join("")).join("") +
      palm(24, 160, .8, 0) + palm(386, 160, .85, 1) +
      /* glass canopy */
      '<rect x="50" y="62" width="300" height="8" fill="#a8c0cc"/><rect x="50" y="70" width="300" height="3" fill="#5a6a74"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="72" width="6" height="86" fill="#5a6a74"/>').join("") +
      bus +
      '<rect x="0" y="158" width="400" height="8" fill="#c9c3b6"/><rect x="0" y="156" width="400" height="3" fill="#f2c200"/>' +
      /* International Blvd with the red bus-only lane */
      '<rect x="0" y="166" width="400" height="94" fill="#36373c"/><rect x="0" y="166" width="400" height="20" fill="#a8322a"/>' +
      '<text x="60" y="181" ' + font + ' font-size="10" fill="#f2e6d8" letter-spacing="4">BUS ONLY</text><text x="250" y="181" ' + font + ' font-size="10" fill="#f2e6d8" letter-spacing="4">BUS ONLY</text>' +
      '<path d="M0 222h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="mch-car"><rect x="0" y="206" width="110" height="22" rx="6" fill="' + PURP + '"/><rect x="24" y="196" width="56" height="14" rx="4" fill="#22303c"/><circle cx="24" cy="230" r="9" fill="#111"/><circle cx="24" cy="230" r="4" fill="' + GOLD + '"/><circle cx="88" cy="230" r="9" fill="#111"/><circle cx="88" cy="230" r="4" fill="' + GOLD + '"/></g>' +
      /* station sign */
      '<rect x="96" y="12" width="208" height="34" rx="3" fill="#111"/><text x="112" y="36" ' + font + ' font-size="18" fill="#fff">High Street</text>' +
      badge(240, 29, "1T", TEMPO) + pill(256, 29, "TEMPO", ACB),
      sky("mch1", "#5a84c8", "#ffd9a0"));
  }

  /* 2. The Oakland A's dugout at the Coliseum, 1970s: green-and-gold, the bat rack he looked after as the clubhouse kid, a ball sailing out over the outfield */
  function mchdugout() {
    const bats = Array.from({ length: 9 }, (_, i) => '<path d="M' + (126 + i * 18) + ' 196l' + (i % 2 ? 3 : -3) + ' -44" stroke="#c89a5a" stroke-width="' + (i % 3 ? 5 : 6) + '" stroke-linecap="round"/><circle cx="' + (126 + i * 18) + '" cy="197" r="3.5" fill="#8a5a2a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mch2)"/>' +
      /* far bleachers in green and gold */
      '<path d="M0 40h400v54H0z" fill="#2c6a48"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (46 + r * 8) + 'h400" stroke="' + (r % 2 ? "#d9b33a" : "#1e5236") + '" stroke-width="3"/>').join("") +
      /* bunting */
      '<path d="M0 40h400" stroke="#ddd" stroke-width="2"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 40q20 18 40 0z" fill="' + (i % 2 ? GOLD : AGRN) + '"/>').join("") +
      /* outfield grass + warning track */
      '<rect x="0" y="94" width="400" height="40" fill="#3f9a4a"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="94" width="25" height="40" fill="#4aa856"/>').join("") +
      '<rect x="0" y="130" width="400" height="8" fill="#b9825a"/>' +
      /* ball flying out */
      '<circle class="mch-ball" cx="120" cy="120" r="4" fill="#fff" stroke="#c33" stroke-width=".8"/>' +
      /* the flag on the pole */
      '<path d="M360 94V24" stroke="#ddd" stroke-width="2"/><g class="mch-flag"><rect x="360" y="24" width="30" height="18" fill="' + GOLD + '"/><rect x="360" y="30" width="30" height="6" fill="' + AGRN + '"/></g>' +
      /* dugout roof + back wall */
      '<rect x="0" y="138" width="400" height="16" fill="' + AGRN + '"/><rect x="0" y="152" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="0" y="156" width="400" height="60" fill="#1d3a2a"/>' +
      /* bat rack */
      '<rect x="112" y="196" width="176" height="8" fill="#6a4a2a"/>' + bats +
      /* helmets on hooks */
      [40, 70, 320, 350].map((x, i) => '<path d="M' + (x - 10) + ' 186q10 -22 20 0z" fill="' + (i % 2 ? GOLD : AGRN) + '" stroke="#0a2a1a" stroke-width="1.5"/><path d="M' + (x + 10) + ' 186h6" stroke="' + (i % 2 ? GOLD : AGRN) + '" stroke-width="3"/>').join("") +
      /* bench + steps */
      '<rect x="0" y="216" width="400" height="10" fill="#7a5a3a"/><rect x="0" y="226" width="400" height="34" fill="#4a4a4a"/>' +
      /* the kid's gold cap on the bench */
      '<path d="M190 216q12 -16 24 0z" fill="' + GOLD + '"/><path d="M214 216h10" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<rect x="12" y="8" width="120" height="22" rx="3" fill="#111"/><text x="72" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">BAT BOY</text>',
      sky("mch2", "#7fb6e8", "#cfe8f4"));
  }

  /* 3. The club at 18th St and San Pablo Ave, Oakland, 1988: the downtown nightclub where he shot "Let's Get It Started" and got signed. Neon marquee, beams over a packed floor, a dancer in a split */
  function mchclub() {
    return svg(
      '<rect width="400" height="260" fill="#120a1e"/>' + stars(8) +
      /* building front */
      '<rect x="40" y="40" width="320" height="120" fill="#2a1a3a"/><rect x="40" y="40" width="320" height="8" fill="#3a2650"/>' +
      [70, 130, 270, 330].map(x => '<rect x="' + (x - 14) + '" y="60" width="28" height="30" fill="#ffcf7a" opacity=".55" class="mch-glow"/>').join("") +
      /* marquee */
      '<rect x="110" y="56" width="180" height="46" rx="4" fill="#0c0612" stroke="' + GOLD + '" stroke-width="3"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle class="mch-flk' + (i % 2 ? " mch-flk2" : "") + '" cx="' + (118 + i * 11) + '" cy="60" r="2" fill="#fff2a0"/>').join("") +
      '<text x="200" y="82" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" class="mch-flk">LIVE TONIGHT</text>' +
      '<text x="200" y="97" text-anchor="middle" ' + font + ' font-size="10" fill="#e6d6ff">18TH &amp; SAN PABLO</text>' +
      /* beams */
      '<g class="mch-bm"><path d="M130 104l-40 120h70z" fill="#fff2c0" opacity=".16"/></g><g class="mch-bm mch-bm2"><path d="M270 104l-30 120h70z" fill="#d9c0ff" opacity=".16"/></g>' +
      /* dance floor */
      '<rect x="0" y="160" width="400" height="100" fill="#1a0f26"/>' +
      Array.from({ length: 10 }, (_, i) => Array.from({ length: 3 }, (_, r) => '<rect class="' + ((i + r) % 3 ? "" : "mch-glow") + '" x="' + (i * 40) + '" y="' + (196 + r * 22) + '" width="38" height="20" fill="' + ((i + r) % 2 ? "#3a1f5a" : "#5a2f2a") + '"/>').join("")).join("") +
      /* the dancer in a split, silhouette, baggy pants */
      '<g class="mch-j"><circle cx="200" cy="164" r="8" fill="#0a0610"/><path d="M194 172h12l4 20h-20z" fill="#0a0610"/><path d="M192 190q-30 2 -46 6l2 6q24 -2 48 -6z" fill="' + GOLD + '"/><path d="M208 190q30 2 46 6l-2 6q-24 -2 -48 -6z" fill="' + GOLD + '"/><path d="M194 176l-18 -14M206 176l18 -14" stroke="#0a0610" stroke-width="5" stroke-linecap="round"/></g>' +
      /* crowd at the sides */
      Array.from({ length: 6 }, (_, i) => { const x = i < 3 ? 22 + i * 30 : 288 + (i - 3) * 30; return '<g class="mch-j' + ["", " mch-j2", " mch-j3"][i % 3] + '"><circle cx="' + x + '" cy="176" r="9" fill="#0a0610"/><rect x="' + (x - 11) + '" y="184" width="22" height="60" rx="7" fill="#0a0610"/></g>'; }).join(""));
  }

  /* 4. The trunk: before the record deal he sold his own records out of his car in Oakland. Open trunk full of 12-inch crates, records hopping, a palm-lined block at sunset */
  function mchtrunk() {
    const rec = (x, y, k, c) => '<g class="mch-rec' + k + '"><circle cx="' + x + '" cy="' + y + '" r="16" fill="#111"/><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + c + '"/><circle cx="' + x + '" cy="' + y + '" r="1.5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mch4)"/>' +
      '<circle cx="80" cy="70" r="30" fill="#ffcf7a" opacity=".9"/>' +
      '<path d="M0 110q90 -26 200 -8q110 -22 200 4V130H0z" fill="#6a5a7a" opacity=".6"/>' +
      palm(40, 170, .9, 0) + palm(360, 170, 1, 1) +
      '<rect x="0" y="170" width="400" height="14" fill="#cfc9bc"/><rect x="0" y="184" width="400" height="76" fill="#3c3d42"/>' +
      /* the car from behind, trunk lid up */
      '<path d="M90 150h220l16 30v34H74v-34z" fill="#1b1b22"/><path d="M110 150l14 -30h152l14 30z" fill="#26262e"/><path d="M128 124h144l10 24H118z" fill="#5a7a9a" opacity=".6"/>' +
      '<path d="M96 150l-10 -46h228l-10 46z" fill="#2a2a34" stroke="#444" stroke-width="2"/>' +
      '<rect x="84" y="186" width="232" height="10" fill="#c8c8d0"/><rect x="82" y="176" width="20" height="10" rx="2" fill="#e83a3a" class="mch-glow"/><rect x="298" y="176" width="20" height="10" rx="2" fill="#e83a3a" class="mch-glow mch-g2"/>' +
      '<circle cx="110" cy="216" r="12" fill="#111"/><circle cx="290" cy="216" r="12" fill="#111"/>' +
      /* crates in the trunk */
      '<rect x="110" y="152" width="80" height="26" fill="#7a5a3a" stroke="#4a3a2a" stroke-width="2"/><rect x="210" y="152" width="80" height="26" fill="#7a5a3a" stroke="#4a3a2a" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (114 + i * 9) + '" y="142" width="7" height="12" fill="#111"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (214 + i * 9) + '" y="142" width="7" height="12" fill="#111"/>').join("") +
      '<text x="150" y="170" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">12 INCH</text><text x="250" y="170" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">OAKTOWN</text>' +
      /* records hopping up out of the crates */
      rec(140, 112, "", GOLD) + rec(200, 104, " mch-rec2", PURP) + rec(260, 112, " mch-rec3", "#3ddc97") +
      '<rect x="14" y="10" width="148" height="22" rx="3" fill="#111"/><text x="88" y="26" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">FRESH OUT THE TRUNK</text>',
      sky("mch4", "#3a2a6a", "#f2a070"));
  }

  /* 5. The corner: Foothill Blvd and Fairfax Ave, a block from his boyhood home on Fairfax, HAMMER tagged on the wall, the Coliseum's light towers glowing over the flats behind */
  function mchcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mch5)"/>' + stars(10) +
      /* the Coliseum: low concrete bowl + its light towers */
      '<path d="M90 136q110 -34 220 0z" fill="#3a3a48"/><path d="M104 132q96 -26 192 0" stroke="#55556a" stroke-width="3" fill="none"/>' +
      towers([110, 170, 230, 290], 134, 52) +
      '<path d="M0 136h400v4H0z" fill="#2a2838"/>' +
      /* wall */
      '<rect x="0" y="140" width="400" height="86" fill="#a88a6a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 140v86" stroke="#94785a" stroke-width="2"/>').join("") +
      tag("HAMMER", 14, 206, 44, GOLD, -6) + tag("OAKTOWN", 22, 162, 18, "#fff", -4) + tag("LIL HAMMER", 236, 178, 15, "#3ddc97", -4) + tag("2 LEGIT", 244, 216, 17, PURP, -3) +
      '<circle class="mch-sp" cx="228" cy="150" r="3" fill="' + GOLD + '"/><circle class="mch-sp mch-sp2" cx="236" cy="156" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(296, 96, 104, "Foothill Blvd") + sign(304, 122, 88, "Fairfax Ave"),
      sky("mch5", "#141036", "#d0784a"));
  }

  window.SCENES = { mchstation: mchstation, mchdugout: mchdugout, mchclub: mchclub, mchtrunk: mchtrunk, mchcorner: mchcorner };
})();
