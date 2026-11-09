/* Kylie Minogue game (GENRES: Pop; INTERNATIONAL region: ASIA + AUSTRALIA; Surrey Hills, Melbourne - born in Melbourne,
   family moved to Surrey Hills, she went to Camberwell High School).
   Rooms: a Metro train pulling into Union station (below ground, Lilydale/Belgrave lines, Surrey Hills/Mont Albert),
   a Ramsay Street cul-de-sac (she was Charlene on the Melbourne soap), the gold hotpants under the Arts Centre Melbourne
   spire, Flinders Street Station with a green tram, and Union Road & Canterbury Road in Surrey Hills with the city skyline behind.
   CSS classes prefixed "kmg" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmgTw{0%,100%{opacity:.25}50%{opacity:1}}.kmgTw{animation:kmgTw 1.8s ease-in-out infinite}.kmgT2{animation-delay:-.6s}.kmgT3{animation-delay:-1.2s}' +
    '@keyframes kmgSpin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.kmgSpin{transform-box:fill-box;transform-origin:50% 50%;animation:kmgSpin 6s linear infinite}' +
    '@keyframes kmgTram{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.kmgTram{animation:kmgTram 9s linear infinite;animation-delay:-5s}' +
    '@keyframes kmgBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-24px)}}.kmgBird{animation:kmgBird 10s linear infinite}.kmgBd2{animation-delay:-4.5s}' +
    '@keyframes kmgSpray{0%{opacity:0;transform:scale(.4)}40%{opacity:.9}100%{opacity:0;transform:scale(1.2)}}.kmgSpray{transform-box:fill-box;transform-origin:50% 100%;animation:kmgSpray 1.6s ease-out infinite}.kmgSp2{animation-delay:-.8s}' +
    '@keyframes kmgBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.kmgBob{animation:kmgBob 2s ease-in-out infinite}' +
    '@keyframes kmgCar{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.kmgCar{animation:kmgCar 6s linear infinite}.kmgCr2{animation-delay:-3s}' +
    '@keyframes kmgHue{0%,100%{fill:#ffd23f}50%{fill:#ff4fa3}}.kmgHue{animation:kmgHue 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#ffd23f", PINK = "#ff4fa3", TEAL = "#4fd1e8", NAVY = "#152c6b";
  const stars = (n, seed) => {
    let s = "", k = seed || 7;
    for (let i = 0; i < n; i++) { k = (k * 37 + 11) % 101; const x = (k * 4.1 + i * 23) % 400, y = (k * 1.3 + i * 7) % 90; s += '<circle cx="' + x.toFixed(1) + '" cy="' + (6 + y).toFixed(1) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="kmgTw' + (i % 3 ? ' kmgT' + (1 + i % 3) : '') + '"/>'; }
    return s;
  };
  const bullet = (x, y, code) => '<g><circle cx="' + x + '" cy="' + y + '" r="11" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 3.5) + '" ' + F + ' font-size="8.5" fill="#fff" text-anchor="middle">' + code + '</text></g>';
  /* Melbourne skyline: Eureka Tower (gold crown), Australia 108, blocks */
  const skyline = (base, c, lit) => {
    let s = '<g fill="' + c + '">' +
      '<rect x="40" y="' + (base - 60) + '" width="26" height="60"/><rect x="70" y="' + (base - 84) + '" width="22" height="84"/><rect x="96" y="' + (base - 50) + '" width="30" height="50"/>' +
      '<rect x="130" y="' + (base - 128) + '" width="24" height="128"/>' +
      '<path d="M160 ' + base + 'v-112q14 -14 28 -6v118z"/>' +
      '<rect x="196" y="' + (base - 74) + '" width="28" height="74"/><rect x="228" y="' + (base - 96) + '" width="20" height="96"/><rect x="252" y="' + (base - 58) + '" width="34" height="58"/>' +
      '<rect x="292" y="' + (base - 80) + '" width="22" height="80"/><rect x="318" y="' + (base - 44) + '" width="40" height="44"/></g>' +
      '<rect x="130" y="' + (base - 128) + '" width="24" height="16" fill="' + GOLD + '"/>' +
      '<rect x="130" y="' + (base - 112) + '" width="24" height="3" fill="#fff" opacity=".6"/>';
    if (lit) for (let y = base - 100; y < base - 6; y += 10) for (let x = 134; x < 152; x += 6) s += '<rect x="' + x + '" y="' + y + '" width="3" height="4" fill="#ffe9a8" opacity=".55"/>';
    return s;
  };

  /* 1. Union station: below ground, Metro train (white with blue and yellow bands) pulls in, black station sign */
  function kmgunion() {
    let wins = "";
    for (let x = 34; x < 360; x += 30) wins += '<rect x="' + x + '" y="122" width="22" height="16" rx="2" fill="#1d2b3a"/>';
    const train = '<g class="anim-train">' +
      '<rect x="18" y="108" width="364" height="64" rx="10" fill="#eef1f4" stroke="#9aa6b2" stroke-width="1.5"/>' + wins +
      '<rect x="18" y="146" width="364" height="7" fill="' + NAVY + '"/><rect x="18" y="153" width="364" height="4" fill="#ffc72c"/><rect x="18" y="157" width="364" height="3" fill="' + TEAL + '"/>' +
      '<rect x="120" y="120" width="16" height="44" fill="#d5dbe1" stroke="#8a96a2"/><rect x="250" y="120" width="16" height="44" fill="#d5dbe1" stroke="#8a96a2"/>' +
      '<rect x="356" y="116" width="22" height="26" rx="4" fill="#1d2b3a"/><circle cx="372" cy="160" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kmgSk1)"/>' +
      '<rect x="0" y="0" width="400" height="36" fill="#b9c0c6"/><rect x="0" y="34" width="400" height="6" fill="#8d959c"/>' +
      '<path d="M0 40h400v32H0z" fill="#a7aeb5"/>' +
      '<g fill="#9aa2a9">' + [0, 80, 160, 240, 320].map(x => '<rect x="' + (x + 4) + '" y="44" width="72" height="24" rx="2"/>').join("") + '</g>' +
      '<rect x="0" y="72" width="400" height="104" fill="#c7cdd2"/>' +
      '<rect x="110" y="78" width="180" height="30" rx="3" fill="#111"/>' +
      '<text x="166" y="99" ' + F + ' font-size="18" fill="#fff" text-anchor="middle">Union</text>' +
      bullet(232, 93, "LIL") + bullet(260, 93, "BEL") +
      train +
      '<rect x="0" y="172" width="400" height="10" fill="#ffd200"/><rect x="0" y="182" width="400" height="78" fill="#8f979e"/>' +
      '<g fill="#7d858c">' + [30, 110, 190, 270, 350].map(x => '<rect x="' + x + '" y="196" width="40" height="3"/>').join("") + '</g>' +
      '<rect x="20" y="206" width="70" height="30" rx="3" fill="#0f1b2d"/><text x="55" y="220" ' + F + ' font-size="8" fill="#ffd200" text-anchor="middle">LILYDALE</text><text x="55" y="231" ' + F + ' font-size="7" fill="#fff" text-anchor="middle">PLATFORM 1</text>',
      sky("kmgSk1", "#9aa3ab", "#c7cdd2"));
  }

  /* 2. Ramsay Street: the cul-de-sac with brick houses, red tile roofs, gum tree, sprinkler, cockatoos */
  function kmgramsay() {
    const house = (x, y, w, brick, roof) =>
      '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="56" fill="' + brick + '"/>' +
      '<path d="M' + (x - 8) + ' ' + y + 'L' + (x + w / 2) + ' ' + (y - 30) + 'L' + (x + w + 8) + ' ' + y + 'z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 10) + '" y="' + (y + 14) + '" width="22" height="18" fill="#cfe7f5" stroke="#fff" stroke-width="2"/>' +
      '<rect x="' + (x + w - 32) + '" y="' + (y + 14) + '" width="22" height="18" fill="#cfe7f5" stroke="#fff" stroke-width="2"/>' +
      '<rect x="' + (x + w / 2 - 8) + '" y="' + (y + 26) + '" width="16" height="30" fill="#6b3b22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kmgSk2)"/>' +
      '<g class="kmgBird"><path d="M0 40q7 -7 14 0q7 -7 14 0" stroke="#fff" stroke-width="3" fill="none"/><circle cx="14" cy="38" r="2" fill="#ffd23f"/></g>' +
      '<g class="kmgBird kmgBd2"><path d="M0 60q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2.6" fill="none"/></g>' +
      house(20, 112, 100, "#b5653f", "#8e2f22") + house(150, 100, 110, "#d4a373", "#7a2a1e") + house(290, 112, 96, "#a8553a", "#93372a") +
      '<path d="M268 168q-4 -60 6 -100" stroke="#cfc6b8" stroke-width="8" fill="none"/>' +
      '<g fill="#5f8a55"><circle cx="262" cy="70" r="20"/><circle cx="286" cy="60" r="18"/><circle cx="276" cy="82" r="16"/></g>' +
      '<rect x="0" y="168" width="400" height="22" fill="#6fae4c"/>' +
      '<path d="M0 190h400v70H0z" fill="#5d6166"/><ellipse cx="200" cy="232" rx="150" ry="22" fill="#6a6e73"/>' +
      '<rect x="0" y="188" width="400" height="4" fill="#cfd2d4"/>' +
      '<g transform="translate(70 168)"><path d="M0 0l-6 -6" stroke="#333" stroke-width="2"/>' +
      '<path class="kmgSpray" d="M-6 -6q-14 -16 -26 -2M-6 -6q0 -20 -6 -26M-6 -6q12 -16 22 -6" stroke="#bfe6ff" stroke-width="2" fill="none"/>' +
      '<path class="kmgSpray kmgSp2" d="M-6 -6q-10 -12 -18 0M-6 -6q10 -12 16 -2" stroke="#e6f6ff" stroke-width="2" fill="none"/></g>' +
      '<rect x="326" y="150" width="4" height="40" fill="#777"/><rect x="300" y="138" width="60" height="16" rx="2" fill="#1f6f3f" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="330" y="150" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">RAMSAY ST</text>',
      sky("kmgSk2", "#6cc3f0", "#d8f0fb"));
  }

  /* 3. Arts Centre Melbourne: the white lattice spire lit at night, the gold hotpants in a glass case */
  function kmghotpants() {
    let rings = "";
    for (let i = 0; i < 9; i++) {
      const y = 186 - i * 16, hw = 34 - i * 3.5;
      rings += '<path d="M' + (200 - hw) + ' ' + y + 'L' + (200 - hw + 3.5) + ' ' + (y - 16) + 'M' + (200 + hw) + ' ' + y + 'L' + (200 + hw - 3.5) + ' ' + (y - 16) +
        'M' + (200 - hw) + ' ' + y + 'L' + (200 + hw - 3.5) + ' ' + (y - 16) + 'M' + (200 + hw) + ' ' + y + 'L' + (200 - hw + 3.5) + ' ' + (y - 16) + '" stroke="#f4f6ff" stroke-width="1.6"/>' +
        '<path d="M' + (200 - hw) + ' ' + y + 'H' + (200 + hw) + '" stroke="#f4f6ff" stroke-width="1.6"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#kmgSk3)"/>' + stars(26, 3) +
      '<path d="M200 186V8" stroke="#f4f6ff" stroke-width="2"/>' + rings +
      '<g class="kmgTw"><circle cx="200" cy="8" r="3" fill="#ff4fa3"/></g>' +
      '<g class="kmgTw kmgT2">' + [170, 154, 138, 122, 106].map((y, i) => '<circle cx="' + (200 - 26 + i * 4) + '" cy="' + y + '" r="1.6" fill="#ffd9f0"/><circle cx="' + (200 + 26 - i * 4) + '" cy="' + y + '" r="1.6" fill="#ffd9f0"/>').join("") + '</g>' +
      '<g stroke="#f4f6ff" stroke-width="1.4" fill="none"><path d="M166 186q-14 10 -40 22M234 186q14 10 40 22M178 186q-6 10 -18 22M222 186q6 10 18 22M190 186v22M210 186v22"/><path d="M150 196q50 -8 100 0M134 204q66 -10 132 0"/></g>' +
      '<path d="M110 208q90 -14 180 0v4H110z" fill="#2b2f4a"/><rect x="0" y="206" width="400" height="54" fill="#1a1d33"/>' +
      '<rect x="40" y="128" width="88" height="96" rx="4" fill="#ffffff" fill-opacity=".1" stroke="#cfe3ff" stroke-width="2"/>' +
      '<rect x="36" y="224" width="96" height="16" rx="2" fill="#3a3550"/>' +
      '<g class="kmgBob"><path d="M58 160h52l-4 34h-18l-4 -12l-4 12h-18z" fill="' + GOLD + '" stroke="#b8860b" stroke-width="1.5"/>' +
      '<path d="M58 160h52v6H58z" fill="#e6b422"/><path d="M66 170l4 10M98 170l-4 10" stroke="#fff6c2" stroke-width="2" opacity=".7"/></g>' +
      '<g class="kmgTw kmgT3"><path d="M118 146l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff"/></g>' +
      '<g class="kmgTw"><path d="M52 150l1.5 4l4 1.5l-4 1.5l-1.5 4l-1.5 -4l-4 -1.5l4 -1.5z" fill="#fff"/></g>' +
      '<rect x="260" y="150" width="112" height="56" rx="3" fill="#24284a"/>' +
      '<g fill="#ffd9a8" opacity=".75">' + [268, 290, 312, 334, 356].map(x => '<rect x="' + x + '" y="160" width="10" height="14"/><rect x="' + x + '" y="182" width="10" height="14"/>').join("") + '</g>',
      sky("kmgSk3", "#0b0f2e", "#3a2a5e"));
  }

  /* 4. Flinders Street Station: ochre facade, red-brick bands, green copper dome, row of clocks, a green tram rolling past */
  function kmgflinders() {
    let clocks = "";
    for (let i = 0; i < 6; i++) { const x = 150 + i * 20; clocks += '<circle cx="' + x + '" cy="160" r="7" fill="#f4efe2" stroke="#222" stroke-width="1.2"/><path d="M' + x + ' 160v-5M' + x + ' 160h3.5" stroke="#222" stroke-width="1.2"/>'; }
    let arches = "";
    for (let x = 20; x < 380; x += 34) if (x < 130 || x > 260) arches += '<path d="M' + x + ' 150v-22q12 -14 24 0v22z" fill="#5a3a24"/>';
    const tram = '<g class="kmgTram"><rect x="0" y="182" width="150" height="40" rx="6" fill="#2e6b3c"/>' +
      '<rect x="0" y="206" width="150" height="5" fill="#e8c35a"/><rect x="0" y="182" width="150" height="6" rx="3" fill="#e9e2c8"/>' +
      [8, 34, 60, 86, 112].map(x => '<rect x="' + x + '" y="190" width="20" height="13" rx="2" fill="#cfe7f5"/>').join("") +
      '<path d="M60 182l14 -22M74 160h16" stroke="#333" stroke-width="2"/><circle cx="30" cy="224" r="5" fill="#222"/><circle cx="120" cy="224" r="5" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kmgSk4)"/>' +
      
      '<rect x="10" y="96" width="380" height="80" fill="#e0a83c"/>' +
      '<rect x="10" y="96" width="380" height="8" fill="#b4472e"/><rect x="10" y="118" width="380" height="4" fill="#b4472e"/>' + arches +
      '<rect x="130" y="70" width="140" height="106" fill="#e6b04a"/><rect x="130" y="70" width="140" height="6" fill="#b4472e"/>' +
      '<path d="M150 70q50 -66 100 0z" fill="#5f9e88"/><path d="M168 70q32 -40 64 0" stroke="#7fbfa6" stroke-width="2" fill="none"/>' +
      '<rect x="196" y="20" width="8" height="16" fill="#5f9e88"/><circle cx="200" cy="18" r="4" fill="#e0a83c"/>' +
      '<path d="M170 176v-46q30 -30 60 0v46z" fill="#4a2c1c"/><rect x="140" y="150" width="120" height="20" fill="#3b2418"/>' + clocks +
      '<path d="M40 96q10 -24 20 0zM340 96q10 -24 20 0z" fill="#5f9e88"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#585c62"/><path d="M0 228h400M0 234h400" stroke="#9aa0a6" stroke-width="2"/>' + tram,
      sky("kmgSk4", "#7ec3ea", "#f2e6c8"));
  }

  /* 5. Union Road & Canterbury Road, Surrey Hills: green street signs, KYLIE tagged on a wall, the city skyline at dusk */
  function kmgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kmgSk5)"/>' + stars(10, 9) +
      skyline(150, "#3c2d55", true) +
      '<rect x="0" y="150" width="400" height="16" fill="#2a2140"/>' +
      '<rect x="0" y="120" width="250" height="110" fill="#c98a5a"/>' +
      '<g stroke="#a76b40" stroke-width="1">' + [132, 144, 156, 168, 180, 192, 204, 216].map(y => '<path d="M0 ' + y + 'H250"/>').join("") + '</g>' +
      tag("KYLIE", 28, 186, 50, PINK, -6) + tag("LA LA LA", 70, 216, 20, GOLD, -3) + tag("PADAM", 168, 146, 18, TEAL, 4) +
      '<rect x="250" y="150" width="150" height="80" fill="#e9d8b8"/><rect x="250" y="150" width="150" height="10" fill="#8e2f22"/>' +
      '<rect x="260" y="176" width="40" height="40" fill="#ffd9a8" opacity=".85"/><rect x="340" y="176" width="44" height="40" fill="#ffd9a8" opacity=".85"/><rect x="250" y="166" width="150" height="6" fill="#ff4fa3" opacity=".7"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4d52"/><rect x="0" y="228" width="400" height="4" fill="#c8c8c8"/>' +
      '<g class="kmgCar"><rect x="0" y="234" width="46" height="14" rx="4" fill="#ff4fa3"/><rect x="8" y="228" width="26" height="9" rx="3" fill="#ff86c0"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="36" cy="249" r="4" fill="#111"/></g>' +
      '<rect x="306" y="96" width="5" height="134" fill="#8a8f94"/>' +
      '<rect x="262" y="94" width="94" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="309" y="107" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">UNION RD</text>' +
      '<rect x="268" y="116" width="110" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="323" y="129" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">CANTERBURY RD</text>' +
      '<text x="309" y="150" ' + F + ' font-size="8" fill="#fff" text-anchor="middle" opacity=".8">SURREY HILLS</text>',
      sky("kmgSk5", "#2a1b4a", "#ff8fb8"));
  }

  window.SCENES = { kmgunion, kmgramsay, kmghotpants, kmgflinders, kmgcorner };
})();
