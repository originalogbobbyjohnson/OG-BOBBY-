/* thecars scenes (Regions tab: Boston + New England; Kenmore Square, Boston). CSS classes prefixed tc- (the page's own anim-train is kept on the trolley).
   1 Kenmore on the Green Line (B, C, D), under Kenmore Square: underground platform, cream tile wall, black KENMORE sign with the green GL badge and B/C/D circles, a two-car Green Line trolley sliding in.
   2 The Rathskeller ("the Rat"), 528 Commonwealth Ave in Kenmore Square, 1977, where the band built its Boston following: low brick basement, tiny stage, amps, a band in dark silhouette, checkered floor, a flickering painted sign.
   3 WBCN 104.1 FM, 1977, the Boston rock station that played the band's demo tape of "Just What I Needed" before they had a deal: studio desk, reel-to-reel spinning, ON AIR light, FM dial at 104.1, sound waves.
   4 The Paradise on Commonwealth Ave, 1978, where they headlined six straight nights when the first album came out: brick front, marquee with chasing bulbs, a line out the door, a Green Line B trolley rolling down the middle of Comm Ave.
   5 Commonwealth Ave and Brookline Ave in Kenmore Square: green signs, THE CARS tagged on the brick, the steel rooftop sign frame over the Square with its chasing bulbs behind (no lettering, no emblem). */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes tcflick{0%,100%{opacity:1}44%{opacity:.8}50%{opacity:.3}56%{opacity:.95}}.tc-flk{animation:tcflick 2.4s infinite}.tc-flk2{animation-delay:-1.1s}' +
    '@keyframes tcbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tc-bob{animation:tcbob .9s ease-in-out infinite}.tc-bob2{animation-delay:-.45s}' +
    '@keyframes tcspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.tc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tcspin 2.4s linear infinite}' +
    '@keyframes tcwave{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.6);opacity:0}}.tc-wave{transform-box:fill-box;transform-origin:0% 50%;animation:tcwave 1.8s ease-out infinite}.tc-wave2{animation-delay:-.6s}.tc-wave3{animation-delay:-1.2s}' +
    '@keyframes tcchase{0%,100%{opacity:.25}50%{opacity:1}}.tc-bulb{animation:tcchase .8s steps(2) infinite}.tc-bulb2{animation-delay:-.4s}' +
    '@keyframes tctrolley{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.tc-trol{animation:tctrolley 9s linear infinite}' +
    '@keyframes tcbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.tc-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tcbeam 3.4s ease-in-out infinite}.tc-beam2{animation-delay:-1.7s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const brick = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = y + 8; r < y + h; r += 8) { s += '<path d="M' + x + ' ' + r + 'h' + w + '" stroke="' + m + '" stroke-width=".8" opacity=".6"/>'; for (let q = x + ((r / 8) % 2 ? 9 : 0); q < x + w; q += 18) s += '<path d="M' + q + ' ' + (r - 8) + 'v8" stroke="' + m + '" stroke-width=".7" opacity=".5"/>'; } return s; };
  const pill = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (label.length * 8 + 14) / 2) + '" y="' + (y + 13) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">' + label + '</text>';
  const circ = (x, y, color, l) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + color + '"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">' + l + '</text>';
  /* silhouette of a player, seen in shadow (no face detail) */
  const player = (x, y, guitar, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 34) + '" r="6" fill="#0b0b0f"/><path d="M' + (x - 7) + ' ' + (y - 27) + 'h14l3 20h-20z" fill="#0b0b0f"/><path d="M' + (x - 6) + ' ' + (y - 7) + 'l-2 14h5l3-12 3 12h5l-2-14z" fill="#0b0b0f"/>' +
    (guitar ? '<path d="M' + (x - 12) + ' ' + (y - 12) + 'l26-12" stroke="#0b0b0f" stroke-width="3"/><ellipse cx="' + (x - 9) + '" cy="' + (y - 12) + '" rx="7" ry="5" fill="' + guitar + '"/>' : '') + '</g>';
  const RED = "#e8322f", CYAN = "#3ad1e6", GOLD = "#ffcf3a", GL = "#00843d";

  /* 1. Kenmore station, Green Line */
  function tcstation() {
    let tiles = "";
    for (let x = 0; x < 400; x += 20) for (let y = 30; y < 150; y += 12) tiles += '<rect x="' + (x + ((y / 12) % 2 ? 10 : 0)) + '" y="' + y + '" width="19" height="11" fill="#e9e1cc" opacity=".9"/>';
    const car = (x) =>
      '<rect x="' + x + '" y="112" width="168" height="70" rx="6" fill="#d9dcd6" stroke="#5c615a" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="160" width="168" height="10" fill="' + GL + '"/>' +
      '<rect x="' + x + '" y="114" width="168" height="5" fill="' + GL + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 31) + '" y="124" width="24" height="24" rx="2" fill="#1d2a2f"/>').join("") +
      '<rect x="' + (x + 72) + '" y="124" width="22" height="46" fill="#2a3a3f" stroke="#5c615a"/>' +
      '<path d="M' + (x + 60) + ' 112l12-14h22l12 14" fill="none" stroke="#333" stroke-width="2"/>' +
      '<circle cx="' + (x + 24) + '" cy="184" r="7" fill="#222"/><circle cx="' + (x + 144) + '" cy="184" r="7" fill="#222"/>';
    const train = '<g class="anim-train">' + car(30) + car(202) +
      '<rect x="30" y="126" width="0" height="0"/><rect x="356" y="128" width="10" height="16" rx="2" fill="#1d2a2f"/>' +
      '<rect x="352" y="150" width="10" height="6" rx="2" fill="#fff6b0"/>' +
      '<rect x="296" y="150" width="56" height="9" rx="1" fill="#111"/><text x="324" y="157" text-anchor="middle" ' + F + ' font-weight="700" font-size="6.5" fill="#ffb000">C CLEVELAND CIR</text>' +
      '</g>';
    return svg(
      '<rect width="400" height="260" fill="#2b2a27"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#1a1a18"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 70) + '" y="8" width="40" height="5" rx="2" fill="#fff8d8" class="tc-flk' + (i % 2 ? ' tc-flk2' : '') + '"/>').join("") +
      '<rect x="0" y="30" width="400" height="120" fill="#cfc6ae"/>' + tiles +
      '<rect x="0" y="92" width="400" height="6" fill="' + GL + '"/>' +
      '<rect x="70" y="40" width="260" height="40" rx="3" fill="#111"/>' +
      '<text x="190" y="68" text-anchor="middle" ' + F + ' font-weight="700" font-size="21" fill="#fff" letter-spacing="1">KENMORE</text>' +
      pill(80, 51, GL, "GL") +
      circ(270, 60, GL, "B") + circ(291, 60, GL, "C") + circ(312, 60, GL, "D") +
      '<rect x="0" y="150" width="400" height="40" fill="#151513"/>' +
      '<path d="M0 186h400M0 192h400" stroke="#7a7a72" stroke-width="2"/>' +
      train +
      '<rect x="0" y="196" width="400" height="64" fill="#8d8a80"/>' +
      '<rect x="0" y="196" width="400" height="8" fill="#e6c832"/>' +
      '<rect x="40" y="206" width="70" height="4" fill="#6f6c64"/><rect x="250" y="206" width="70" height="4" fill="#6f6c64"/>' +
      '<rect x="160" y="214" width="80" height="26" rx="2" fill="#111"/><text x="200" y="231" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">KENMORE SQ ↑</text>'
    );
  }

  /* 2. The Rathskeller, Kenmore Square, 1977 */
  function tcrat() {
    let floor = "";
    for (let x = 0; x < 400; x += 20) for (let y = 200; y < 260; y += 20) floor += '<rect x="' + x + '" y="' + y + '" width="20" height="20" fill="' + (((x + y) / 20) % 2 ? "#e9e6dd" : "#151515") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b0f0e"/>' +
      brick(0, 0, 400, 200, "#5a2620", "#2a100d") +
      '<rect x="0" y="0" width="400" height="16" fill="#120807"/>' +
      '<path d="M0 16h400" stroke="#3a3a3a" stroke-width="4"/><path d="M60 16v8M200 16v8M340 16v8" stroke="#3a3a3a" stroke-width="3"/>' +
      '<g class="tc-beam"><path d="M110 16l-50 160h80z" fill="' + RED + '" opacity=".18"/></g>' +
      '<g class="tc-beam tc-beam2"><path d="M290 16l-40 160h80z" fill="' + CYAN + '" opacity=".16"/></g>' +
      '<rect x="100" y="28" width="200" height="34" rx="3" fill="#f0e6c8" stroke="#2a100d" stroke-width="2"/>' +
      '<text x="200" y="52" text-anchor="middle" ' + A + ' font-size="18" fill="' + RED + '" class="tc-flk" letter-spacing="2">RATHSKELLER</text>' +
      '<rect x="40" y="150" width="320" height="50" fill="#2b1a12"/><rect x="40" y="150" width="320" height="5" fill="#4a2e1e"/>' +
      '<rect x="56" y="112" width="30" height="38" fill="#141414" stroke="#3a3a3a"/><circle cx="71" cy="124" r="7" fill="#262626"/><circle cx="71" cy="140" r="7" fill="#262626"/>' +
      '<rect x="314" y="112" width="30" height="38" fill="#141414" stroke="#3a3a3a"/><circle cx="329" cy="124" r="7" fill="#262626"/><circle cx="329" cy="140" r="7" fill="#262626"/>' +
      '<ellipse cx="200" cy="140" rx="18" ry="8" fill="#ddd" opacity=".9"/><rect x="186" y="128" width="28" height="12" fill="#222"/>' +
      '<ellipse cx="174" cy="128" rx="9" ry="3" fill="' + GOLD + '"/><path d="M174 128v20" stroke="#999"/><ellipse cx="228" cy="124" rx="9" ry="3" fill="' + GOLD + '"/><path d="M228 124v24" stroke="#999"/>' +
      player(110, 150, RED, "tc-bob") + player(150, 150, "", "tc-bob tc-bob2") + '<path d="M150 116v-14" stroke="#555" stroke-width="2"/><circle cx="150" cy="100" r="3" fill="#555"/>' +
      player(260, 150, CYAN, "tc-bob tc-bob2") + player(292, 150, "", "tc-bob") +
      '<rect x="276" y="128" width="34" height="5" fill="#222"/>' +
      floor +
      '<path d="M0 200h400" stroke="#000" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<g class="tc-bob' + (i % 2 ? ' tc-bob2' : '') + '"><circle cx="' + (30 + i * 56) + '" cy="226" r="9" fill="#0b0b0f"/><rect x="' + (20 + i * 56) + '" y="234" width="20" height="30" rx="6" fill="#0b0b0f"/></g>').join("")
    );
  }

  /* 3. WBCN 104.1 FM, 1977: the demo tape on the air */
  function tcradio() {
    let dial = "";
    for (let f = 88; f <= 108; f += 2) { const x = 70 + (f - 88) * 13; dial += '<path d="M' + x + ' 52v8" stroke="#f0e6c8" stroke-width="1.2"/>' + (f % 4 === 0 ? '<text x="' + x + '" y="72" text-anchor="middle" ' + F + ' font-size="7" fill="#f0e6c8">' + f + '</text>' : ''); }
    const needleX = 70 + (104.1 - 88) * 13;
    return svg(
      '<rect width="400" height="260" fill="url(#tcs3)"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#3b2f3a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="190" fill="#463845"/>').join("") +
      '<rect x="40" y="36" width="320" height="48" rx="6" fill="#1a1416" stroke="#8a6b3a" stroke-width="3"/>' + dial +
      '<rect x="' + (needleX - 1.5) + '" y="40" width="3" height="40" fill="' + RED + '"/>' +
      '<text x="200" y="104" text-anchor="middle" ' + A + ' font-size="15" fill="' + GOLD + '" letter-spacing="2">WBCN  104.1 FM  BOSTON</text>' +
      '<rect x="300" y="116" width="72" height="26" rx="4" fill="#2a0c0c" stroke="#111" stroke-width="2"/><rect x="304" y="120" width="64" height="18" rx="3" fill="' + RED + '" class="tc-flk"/><text x="336" y="134" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">ON AIR</text>' +
      /* reel to reel */
      '<rect x="40" y="112" width="130" height="96" rx="6" fill="#bfbab0" stroke="#5a564e" stroke-width="2"/>' +
      '<g class="tc-spin"><circle cx="76" cy="146" r="24" fill="#2b2b2b"/><circle cx="76" cy="146" r="6" fill="#ccc"/><path d="M76 124v14M56 158l12-7M96 158l-12-7" stroke="#ccc" stroke-width="4"/></g>' +
      '<g class="tc-spin"><circle cx="134" cy="146" r="24" fill="#2b2b2b"/><circle cx="134" cy="146" r="6" fill="#ccc"/><path d="M134 124v14M114 158l12-7M154 158l-12-7" stroke="#ccc" stroke-width="4"/></g>' +
      '<path d="M76 170l29 18 29-18" fill="none" stroke="#5b3a1e" stroke-width="2"/>' +
      '<rect x="56" y="190" width="98" height="12" rx="2" fill="#f4efe2"/><text x="105" y="199" text-anchor="middle" ' + F + ' font-weight="700" font-size="6.5" fill="#222">DEMO: JUST WHAT I NEEDED</text>' +
      /* mic + waves */
      '<path d="M236 210v-60" stroke="#333" stroke-width="4"/><path d="M236 150l20-18" stroke="#333" stroke-width="4"/><rect x="250" y="112" width="18" height="30" rx="9" fill="#555" stroke="#222" stroke-width="2"/>' +
      '<g transform="translate(276 128)"><path class="tc-wave" d="M0-14q12 14 0 28" fill="none" stroke="' + CYAN + '" stroke-width="3"/><path class="tc-wave tc-wave2" d="M0-14q12 14 0 28" fill="none" stroke="' + CYAN + '" stroke-width="3"/><path class="tc-wave tc-wave3" d="M0-14q12 14 0 28" fill="none" stroke="' + CYAN + '" stroke-width="3"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#5a3a24"/><rect x="0" y="206" width="400" height="6" fill="#7a5234"/>' +
      '<rect x="190" y="214" width="180" height="30" rx="3" fill="#222"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (198 + i * 17) + '" y="' + (220 + (i % 3) * 4) + '" width="6" height="12" rx="2" fill="#ddd"/>').join("") +
      '<rect x="30" y="218" width="120" height="24" fill="#111"/><rect x="34" y="222" width="54" height="16" fill="#e9e3d4"/><rect x="92" y="222" width="54" height="16" fill="#e9e3d4"/>',
      sky("tcs3", "#2a2230", "#151015")
    );
  }

  /* 4. The Paradise on Commonwealth Ave, 1978 */
  function tcparadise() {
    let bulbs = "";
    for (let i = 0; i < 24; i++) bulbs += '<circle cx="' + (92 + i * 9) + '" cy="96" r="2.2" fill="#fff4b0" class="tc-bulb' + (i % 2 ? ' tc-bulb2' : '') + '"/><circle cx="' + (92 + i * 9) + '" cy="134" r="2.2" fill="#fff4b0" class="tc-bulb' + (i % 2 ? '' : ' tc-bulb2') + '"/>';
    const trolley = '<g class="tc-trol"><rect x="0" y="176" width="150" height="40" rx="5" fill="#d9dcd6" stroke="#5c615a"/><rect x="0" y="202" width="150" height="7" fill="' + GL + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 28) + '" y="182" width="20" height="14" rx="2" fill="#1d2a2f"/>').join("") +
      '<path d="M60 176l10-12h20l10 12" fill="none" stroke="#333" stroke-width="2"/><rect x="118" y="168" width="28" height="7" rx="1" fill="#111"/><text x="132" y="174" text-anchor="middle" ' + F + ' font-weight="700" font-size="5.5" fill="#ffb000">B BOSTON COLLEGE</text>' +
      '<circle cx="22" cy="218" r="5" fill="#222"/><circle cx="128" cy="218" r="5" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tcs4)"/>' + stars(16) +
      brick(40, 40, 320, 132, "#6b2f24", "#3a1610") +
      '<rect x="40" y="40" width="320" height="8" fill="#3a1610"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 60) + '" y="54" width="32" height="26" fill="#1b1b22"/><rect x="' + (64 + i * 60) + '" y="54" width="32" height="26" fill="#ffcc77" opacity=".22" class="tc-flk' + (i % 2 ? ' tc-flk2' : '') + '"/>').join("") +
      '<path d="M84 92h232l-10 46H94z" fill="#151518" stroke="#c9a24a" stroke-width="2"/>' + bulbs +
      '<text x="200" y="114" text-anchor="middle" ' + A + ' font-size="15" fill="' + GOLD + '" letter-spacing="3">PARADISE</text>' +
      '<text x="200" y="129" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">THE CARS · 6 NIGHTS · SOLD OUT</text>' +
      '<rect x="182" y="140" width="36" height="32" fill="#2b1a12"/><rect x="186" y="144" width="28" height="28" fill="#ffb64a" opacity=".55" class="tc-flk"/>' +
      Array.from({ length: 9 }, (_, i) => '<g class="tc-bob' + (i % 2 ? ' tc-bob2' : '') + '"><circle cx="' + (232 + i * 13) + '" cy="152" r="4.5" fill="#0b0b0f"/><rect x="' + (227 + i * 13) + '" y="157" width="10" height="16" rx="3" fill="#0b0b0f"/></g>').join("") +
      '<rect x="0" y="172" width="400" height="88" fill="#3e3e40"/>' +
      '<rect x="0" y="170" width="400" height="5" fill="#8a8a86"/>' +
      '<path d="M0 220h400M0 226h400" stroke="#777" stroke-width="2"/>' +
      '<path d="M0 162h400" stroke="#222" stroke-width="1"/>' +
      trolley +
      '<rect x="0" y="236" width="400" height="24" fill="#2e2e30"/><path d="M0 248h400" stroke="#e6c832" stroke-width="2" stroke-dasharray="18 12"/>',
      sky("tcs4", "#0d0b1d", "#3a2c4a")
    );
  }

  /* 5. Commonwealth Ave and Brookline Ave, Kenmore Square */
  function tccorner() {
    let frame = '<rect x="176" y="10" width="200" height="86" fill="none" stroke="#3f444c" stroke-width="3"/>';
    for (let x = 176; x <= 376; x += 20) frame += '<path d="M' + x + ' 10v86" stroke="#3f444c" stroke-width="1.4"/>';
    for (let y = 10; y <= 96; y += 14) frame += '<path d="M176 ' + y + 'h200" stroke="#3f444c" stroke-width="1.2"/>';
    for (let x = 186; x < 376; x += 10) for (let y = 17; y < 96; y += 14) frame += '<circle cx="' + x + '" cy="' + y + '" r="1.8" fill="#fff4c4" class="tc-bulb' + (((x / 10) + (y / 14)) % 2 ? ' tc-bulb2' : '') + '"/>';
    frame += '<path d="M196 96l-10 26M356 96l10 26M276 96v26" stroke="#3f444c" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tcs5)"/>' + stars(14) +
      frame +
      '<rect x="150" y="112" width="250" height="38" fill="#3a2c2a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (158 + i * 24) + '" y="120" width="12" height="10" fill="#ffcc77" opacity=".5"/>').join("") +
      '<rect x="0" y="96" width="150" height="54" fill="#4a3530"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (10 + i * 28) + '" y="106" width="14" height="12" fill="#ffcc77" opacity=".45" class="tc-flk' + (i % 2 ? ' tc-flk2' : '') + '"/>').join("") +
      brick(0, 146, 400, 70, "#7b3a2c", "#3e1a12") +
      '<rect x="0" y="144" width="400" height="4" fill="#d8cfc0"/>' +
      tag("THE CARS", 30, 198, 46, RED, -6) + tag("LET'S GO", 232, 176, 20, CYAN, -4) + tag("HEARTBEAT CITY", 220, 206, 17, GOLD, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#3f3f42"/><rect x="0" y="214" width="400" height="5" fill="#9a958c"/>' +
      '<path d="M0 240h400" stroke="#d9d5cb" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="10" y="70" width="5" height="146" fill="#4a5058"/>' +
      '<rect x="8" y="64" width="146" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="81" y="79" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Commonwealth Ave</text>' +
      '<rect x="8" y="88" width="146" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="81" y="103" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Brookline Ave</text>',
      sky("tcs5", "#0a0d1c", "#2b3150")
    );
  }

  window.SCENES = { tcstation, tcrat, tcradio, tcparadise, tccorner };
})();
