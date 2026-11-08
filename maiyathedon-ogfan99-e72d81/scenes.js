/* Maiya the Don game (NYC map, Brooklyn: Brownsville, "at home in Brownsville"; Puerto Rican family; makeup artist turned rapper).
   1. The C pulling into Rockaway Av, underground on the Fulton St line at the Ocean Hill / Brownsville edge (every 3 and L stop in the 'Ville already belongs to another game).
   2. The makeup vanity: where it started, beauty videos in the pandemic before the raps; bulbs round the mirror, palette, brushes, the phone recording.
   3. Fulton St in Bed-Stuy, the beauty-supply strip where the "Telfy" video was shot: awnings, wigs on stands in the window, a tote bag swinging, a car rolling by.
   4. The Brooklyn homecoming show (opening for Flo Milli at a Williamsburg warehouse hall): steel trusses, lights sweeping, the crowd's hands up.
   5. Belmont Av & Thomas S Boyland St: green signs, MAIYA tagged on the brick, a Puerto Rican flag in the window, the Belmont Av market stalls and the 'Ville towers behind.
   CSS classes prefixed md-. No logos, no faces, no 9s drawn. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mdflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.md-flk{animation:mdflick 2.4s infinite}.md-flk2{animation-delay:.8s}' +
    '@keyframes mdblink{0%,100%{opacity:.2}50%{opacity:1}}.md-bl{animation:mdblink 1.4s ease-in-out infinite}.md-bl2{animation-delay:-.5s}.md-bl3{animation-delay:-1s}' +
    '@keyframes mdbrush{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.md-brush{transform-box:fill-box;transform-origin:50% 100%;animation:mdbrush 1.6s ease-in-out infinite}' +
    '@keyframes mdrec{0%,49%{opacity:1}50%,100%{opacity:.15}}.md-rec{animation:mdrec 1s steps(1) infinite}' +
    '@keyframes mdswing{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.md-bag{transform-box:fill-box;transform-origin:50% 0%;animation:mdswing 1.7s ease-in-out infinite}' +
    '@keyframes mdcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.md-car{animation:mdcar 7s linear infinite}.md-car2{animation-delay:-3.5s}' +
    '@keyframes mdsweepL{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(18deg)}}.md-beamL{transform-box:fill-box;transform-origin:50% 0%;animation:mdsweepL 3s ease-in-out infinite}' +
    '@keyframes mdsweepR{0%,100%{transform:rotate(20deg)}50%{transform:rotate(-20deg)}}.md-beamR{transform-box:fill-box;transform-origin:50% 0%;animation:mdsweepR 3.4s ease-in-out infinite}' +
    '@keyframes mdhands{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.md-hand{animation:mdhands .9s ease-in-out infinite}.md-hand2{animation-delay:-.3s}.md-hand3{animation-delay:-.6s}' +
    '@keyframes mdflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(5deg)}}.md-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mdflag 1.8s ease-in-out infinite}' +
    '@keyframes mdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.md-sp{animation:mdspray 1.4s ease-out infinite}.md-sp2{animation-delay:.45s}.md-sp3{animation-delay:.9s}' +
    '@keyframes mdsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.md-wig{transform-box:fill-box;transform-origin:50% 100%;animation:mdsway 2.2s ease-in-out infinite}.md-wig2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const blade = (x, y, w, s, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + s + '</text>';
  const PINK = "#ff5cad", GOLD = "#f7c948", ACE = "#0039a6", AQUA = "#7ee8fa";

  /* 1. Rockaway Av on the C, underground on the Fulton St line: cream tile walls, the tile band, the black sign with the blue C, the C pulling in */
  function rockaway() {
    let tile = "";
    for (let y = 30; y < 150; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#dcd6c6" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tile += '<path d="M' + x + ' 26v124" stroke="#e2dccd" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe9da"/>' + tile +
      '<rect x="0" y="0" width="400" height="26" fill="#2c3036"/>' +
      [16, 96, 176, 256, 336].map(x => '<rect x="' + x + '" y="10" width="44" height="5" rx="2" fill="#fffbe6" class="md-flk"/>').join("") +
      '<rect x="0" y="44" width="400" height="12" fill="#3f5a8a"/><rect x="0" y="56" width="400" height="3" fill="#1f2f52"/>' +
      '<rect x="24" y="68" width="170" height="30" fill="#3f5a8a"/><rect x="28" y="72" width="162" height="22" fill="#efe9da"/>' +
      '<text x="109" y="88" text-anchor="middle" ' + font + ' font-size="13" fill="#1f2f52" letter-spacing="2">ROCKAWAY AV</text>' +
      '<rect x="214" y="62" width="180" height="36" rx="2" fill="#111"/><rect x="214" y="62" width="180" height="2.5" fill="#fff"/>' +
      '<text x="222" y="78" ' + font + ' font-size="12.5" fill="#fff">Rockaway Av</text><text x="222" y="91" ' + font + ' font-size="8.5" fill="#fff">Fulton St line</text>' + bullet(374, 80, "C", ACE, false, 10) +
      [334, 382].map(x => '<rect x="' + x + '" y="100" width="9" height="76" fill="#4a556a"/><rect x="' + (x - 2) + '" y="100" width="13" height="4" fill="#38425a"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="6" y="112" width="310" height="64" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="6" y="114" width="310" height="5" fill="#8e96a3"/>' +
        [86, 194].map(x => '<rect x="' + x + '" y="122" width="22" height="50" rx="2" fill="#9aa2ae" stroke="#6b7280"/><path d="M' + (x + 11) + ' 122v50" stroke="#6b7280"/>').join("") +
        '<rect x="282" y="120" width="28" height="20" rx="3" fill="#111"/>' + bullet(296, 130, "C", ACE, false, 7.5) +
        '<circle cx="306" cy="164" r="3.5" fill="#fff6c2" class="md-flk"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="12" fill="#e2c54a"/><rect x="0" y="176" width="400" height="3" fill="#b9a03a"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#7d7a73"/>' +
      [40, 120, 200, 280, 360].map(x => '<rect x="' + x + '" y="200" width="30" height="2" fill="#6b6861"/>').join(""),
      "");
  }

  /* 2. The makeup vanity where it started: bulbs round the mirror, an eyeshadow palette, brushes in a cup, the phone on a tripod recording */
  function vanity() {
    let bulbs = "";
    for (let i = 0; i < 6; i++) bulbs += '<circle class="md-bl md-bl' + (i % 3 + 1) + '" cx="' + (96 + i * 42) + '" cy="30" r="7" fill="#fff4cc"/>';
    for (let i = 0; i < 4; i++) bulbs += '<circle class="md-bl md-bl' + ((i + 1) % 3 + 1) + '" cx="88" cy="' + (56 + i * 26) + '" r="7" fill="#fff4cc"/><circle class="md-bl md-bl' + (i % 3 + 1) + '" cx="312" cy="' + (56 + i * 26) + '" r="7" fill="#fff4cc"/>';
    const pans = ["#ff5cad", "#f7c948", "#b0765a", "#7a3b5a", "#e8b4a0", "#2b1a24", "#c9a24a", "#ff9ac9"];
    let pal = '<rect x="150" y="178" width="104" height="40" rx="5" fill="#1b1b1f" stroke="#555" stroke-width="1.5"/>';
    pans.forEach((c, i) => { pal += '<rect x="' + (156 + (i % 4) * 24) + '" y="' + (183 + Math.floor(i / 4) * 17) + '" width="20" height="13" rx="2" fill="' + c + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#v1)"/>' +
      '<rect x="0" y="0" width="400" height="168" fill="#f6d7e3" opacity=".25"/>' +
      '<rect x="80" y="20" width="240" height="140" rx="8" fill="#e8d2b8" stroke="#c9a24a" stroke-width="3"/>' +
      '<rect x="100" y="42" width="200" height="104" rx="4" fill="url(#v2)"/>' +
      '<path d="M120 60l40 -12M118 76l56 -18" stroke="#fff" stroke-width="3" opacity=".35" stroke-linecap="round"/>' + bulbs +
      '<rect x="0" y="164" width="400" height="96" fill="#f3e6ea"/><rect x="0" y="164" width="400" height="8" fill="#e6c9d4"/>' +
      pal +
      '<rect x="270" y="168" width="26" height="44" rx="4" fill="#ff5cad" stroke="#b3306f" stroke-width="2"/><rect x="270" y="168" width="26" height="8" fill="#b3306f"/>' +
      '<g class="md-brush"><rect x="278" y="128" width="6" height="44" rx="2" fill="#2b1a24"/><path d="M277 128q4 -18 8 0z" fill="#d9a07a"/></g>' +
      '<g class="md-brush" style="animation-delay:-.8s"><rect x="288" y="134" width="5" height="38" rx="2" fill="#c9a24a"/><path d="M286 134q4.5 -14 9 0z" fill="#2b1a24"/></g>' +
      '<rect x="60" y="186" width="70" height="30" rx="4" fill="#fff" stroke="#e6c9d4" stroke-width="2"/><text x="95" y="206" text-anchor="middle" ' + font + ' font-size="12" fill="#b3306f">LASHES</text>' +
      '<rect x="112" y="210" width="10" height="10" rx="2" fill="#2b1a24"/><rect x="104" y="214" width="26" height="4" fill="#2b1a24"/>' +
      '<path d="M354 260l-14 -62M354 260l14 -62M354 260v-62" stroke="#333" stroke-width="3"/>' +
      '<rect x="336" y="150" width="36" height="58" rx="5" fill="#111" stroke="#444" stroke-width="2"/><rect x="340" y="156" width="28" height="44" rx="2" fill="#2a2030"/>' +
      '<circle class="md-rec" cx="347" cy="162" r="3" fill="#ff3b30"/><text x="352" y="165" ' + font + ' font-size="6" fill="#fff">REC</text>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="20" fill="#b3306f">face beat</text>',
      sky("v1", "#3a1428", "#6e2a4a") + '<linearGradient id="v2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfe6f2"/><stop offset="1" stop-color="#8fb3c9"/></linearGradient>');
  }

  /* 3. Fulton St in Bed-Stuy, the beauty-supply strip from the Telfy video: brick fronts, awnings, wigs on stands in the window, a tote swinging */
  function fulton() {
    const front = (x, w, brick, awn, label) => '<rect x="' + x + '" y="40" width="' + w + '" height="160" fill="' + brick + '"/>' +
      [0, 1, 2].map(i => '<rect x="' + (x + 10 + i * (w - 20) / 3) + '" y="52" width="' + ((w - 20) / 3 - 8) + '" height="26" fill="#2a2430"/><rect class="md-bl md-bl' + (i + 1) + '" x="' + (x + 12 + i * (w - 20) / 3) + '" y="54" width="' + ((w - 20) / 3 - 12) + '" height="22" fill="#ffd98a" opacity=".6"/>').join("") +
      '<rect x="' + x + '" y="98" width="' + w + '" height="16" fill="#1d1d22"/><text x="' + (x + w / 2) + '" y="110" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + label + '</text>' +
      '<path d="M' + x + ' 114h' + w + 'l-8 18h-' + (w - 16) + 'z" fill="' + awn + '"/>';
    const wig = (x, c, cls) => '<g class="md-wig ' + cls + '"><rect x="' + (x - 2) + '" y="172" width="4" height="20" fill="#777"/><ellipse cx="' + x + '" cy="158" rx="9" ry="11" fill="#e9d8c8"/><path d="M' + (x - 11) + ' 160q0 -18 11 -18t11 18v26h-5v-22h-12v22h-5z" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#f1)"/>' +
      front(0, 130, "#8a4a36", "#ff5cad", "BEAUTY SUPPLY") + front(134, 130, "#6e3a2c", "#2b6cb0", "WIGS · LASHES") + front(268, 132, "#7a4232", "#f7c948", "SHOES") +
      '<rect x="8" y="136" width="114" height="62" fill="#1f2a36" opacity=".9"/>' + wig(30, "#1b1410", "") + wig(62, "#f7c948", "md-wig2") + wig(94, "#ff5cad", "") +
      '<rect x="142" y="136" width="114" height="62" fill="#1f2a36" opacity=".9"/>' + wig(166, "#5a2a1a", "md-wig2") + wig(200, "#111", "") + wig(234, "#c47a3a", "md-wig2") +
      '<rect x="276" y="136" width="116" height="62" fill="#1f2a36" opacity=".9"/>' +
      [288, 364].map(x => '<path d="M' + x + ' 190h22l-3 -10h-12z" fill="#f3ead6"/>').join("") +
      '<rect x="0" y="200" width="400" height="14" fill="#a8a29a"/><rect x="0" y="214" width="400" height="46" fill="#3e4046"/>' +
      [30, 110, 190, 270, 350].map(x => '<rect x="' + x + '" y="236" width="34" height="3" fill="#e8d36a"/>').join("") +
      '<g class="md-bag"><path d="M322 156q0 -14 12 -14t12 14" stroke="#ffd98a" stroke-width="3" fill="none"/><rect x="316" y="156" width="36" height="32" rx="4" fill="#2b1a24" stroke="#ffd98a" stroke-width="1.5"/><rect x="322" y="164" width="24" height="2" fill="#4a3442"/></g>' +
      '<g class="md-car"><rect x="0" y="222" width="70" height="18" rx="6" fill="' + PINK + '"/><rect x="14" y="214" width="40" height="11" rx="4" fill="' + PINK + '"/><rect x="18" y="216" width="14" height="7" fill="#bfe3ff"/><rect x="36" y="216" width="14" height="7" fill="#bfe3ff"/><circle cx="16" cy="240" r="5" fill="#111"/><circle cx="54" cy="240" r="5" fill="#111"/></g>' +
      '<rect x="392" y="12" width="4" height="202" fill="#3d4b3f"/>' + blade(306, 10, 84, "Fulton St", 11),
      sky("f1", "#ffb38a", "#ffd9a8"));
  }

  /* 4. The homecoming show at a Williamsburg warehouse hall: steel trusses, sweeping lights, a mic stand, the crowd's hands up */
  function homecoming() {
    let truss = "";
    for (let x = 0; x < 400; x += 20) truss += '<path d="M' + x + ' 18l10 14l10 -14" stroke="#6b7280" stroke-width="2" fill="none"/>';
    let crowd = "";
    for (let i = 0; i < 16; i++) { const x = 8 + i * 25, y = 214 + (i % 3) * 6; crowd += '<ellipse cx="' + x + '" cy="' + y + '" rx="11" ry="13" fill="#140a12"/><rect x="' + (x - 14) + '" y="' + (y + 8) + '" width="28" height="50" rx="8" fill="#140a12"/>'; }
    let hands = "";
    for (let i = 0; i < 9; i++) { const x = 20 + i * 44; hands += '<g class="md-hand md-hand' + (i % 3 + 1) + '"><path d="M' + x + ' 222l6 -34" stroke="#140a12" stroke-width="6" stroke-linecap="round"/><circle cx="' + (x + 6) + '" cy="186" r="5" fill="#140a12"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#h1)"/>' +
      '<rect x="0" y="14" width="400" height="4" fill="#6b7280"/><rect x="0" y="32" width="400" height="4" fill="#6b7280"/>' + truss +
      '<g class="md-beamL"><path d="M110 36l-50 170h100z" fill="' + PINK + '" opacity=".28"/></g>' +
      '<g class="md-beamR"><path d="M290 36l-50 170h100z" fill="' + AQUA + '" opacity=".24"/></g>' +
      '<g class="md-beamL" style="animation-duration:2.4s"><path d="M200 36l-36 170h72z" fill="' + GOLD + '" opacity=".22"/></g>' +
      [110, 200, 290].map(x => '<rect x="' + (x - 8) + '" y="34" width="16" height="10" rx="2" fill="#222"/>').join("") +
      '<rect x="0" y="150" width="400" height="30" fill="#24161f"/><rect x="0" y="150" width="400" height="4" fill="#3a2430"/>' +
      '<path d="M200 150v-58" stroke="#aaa" stroke-width="3"/><path d="M186 150h28" stroke="#aaa" stroke-width="3"/><rect x="195" y="84" width="10" height="16" rx="5" fill="#333"/>' +
      '<rect x="40" y="128" width="40" height="22" fill="#111"/><rect x="320" y="128" width="40" height="22" fill="#111"/><circle cx="60" cy="139" r="7" fill="#333"/><circle cx="340" cy="139" r="7" fill="#333"/>' +
      '<text x="200" y="76" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="30" fill="' + PINK + '" stroke="#000" stroke-width="3" paint-order="stroke" class="md-flk">HOMECOMING</text>' +
      hands + crowd,
      sky("h1", "#0c0610", "#2a1024"));
  }

  /* 5. Belmont Av & Thomas S Boyland St: green signs, MAIYA tagged on the brick, a Puerto Rican flag in the window, the market stalls and the towers behind */
  function corner() {
    let towers = "";
    [[10, 70, 46], [70, 50, 40], [300, 60, 44], [352, 44, 40]].forEach(([x, y, w]) => {
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="#5a3a34"/>';
      for (let yy = y + 8; yy < 130; yy += 12) for (let xx = x + 5; xx < x + w - 5; xx += 9) towers += '<rect class="md-bl md-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffd98a" opacity=".7"/>';
    });
    let stalls = "";
    [[120, PINK], [178, GOLD], [236, AQUA]].forEach(([x, c]) => {
      stalls += '<rect x="' + x + '" y="104" width="54" height="34" fill="#3a2a2a"/><path d="M' + (x - 4) + ' 104h62l-6 -14h-50z" fill="' + c + '"/>' +
        [0, 1, 2, 3].map(i => '<circle cx="' + (x + 9 + i * 12) + '" cy="124" r="5" fill="' + ["#ff6b3d", "#7ed957", "#f7c948", "#ff5cad"][i] + '"/>').join("");
    });
    let bricks = "";
    for (let y = 146; y < 226; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a4a36" opacity=".55"/>';
    const flag = (x, y, w, h) => { const s = h / 5; let g = '<g class="md-flag">'; for (let i = 0; i < 5; i++) g += '<rect x="' + x + '" y="' + (y + i * s) + '" width="' + w + '" height="' + s + '" fill="' + (i % 2 ? "#fff" : "#ed0a3f") + '"/>';
      return g + '<path d="M' + x + ' ' + y + 'l' + (w * 0.45) + ' ' + (h / 2) + 'l-' + (w * 0.45) + ' ' + (h / 2) + 'z" fill="#0050f0"/><path d="M' + (x + w * 0.15) + ' ' + (y + h / 2 - 4) + 'l1.2 3h3.2l-2.6 2l1 3.2l-2.8 -2l-2.8 2l1 -3.2l-2.6 -2h3.2z" fill="#fff"/></g>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(12) + towers + stalls +
      '<rect x="0" y="138" width="400" height="88" fill="#6e3a2c"/>' + bricks +
      '<rect x="300" y="146" width="40" height="30" fill="#1f2a36"/><path d="M300 146h40" stroke="#c9b8a0" stroke-width="3"/>' + flag(342, 146, 40, 26) +
      tag("MAIYA", 16, 210, 46, PINK, -6) + tag("BIG DON", 182, 214, 24, GOLD, -4) + tag("KEEP IT CUTE", 18, 162, 16, AQUA, -3) +
      '<g><circle class="md-sp" cx="170" cy="196" r="3" fill="' + PINK + '"/><circle class="md-sp md-sp2" cx="176" cy="190" r="2.4" fill="' + PINK + '"/><circle class="md-sp md-sp3" cx="166" cy="188" r="2" fill="' + PINK + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="md-car md-car2"><rect x="0" y="234" width="62" height="16" rx="5" fill="#2b6cb0"/><rect x="12" y="228" width="34" height="9" rx="3" fill="#2b6cb0"/><circle cx="14" cy="250" r="4.5" fill="#111"/><circle cx="48" cy="250" r="4.5" fill="#111"/></g>' +
      '<rect x="270" y="58" width="5" height="170" fill="#3d4b3f"/>' +
      blade(212, 62, 120, "Belmont Av") + blade(196, 88, 150, "Thomas S Boyland St", 11) +
      '<circle class="md-flk" cx="272" cy="58" r="4" fill="#fff6c2"/>',
      sky("c5", "#0a0c1a", "#3a2a4a"));
  }

  window.SCENES = { rockaway: rockaway, vanity: vanity, fulton: fulton, homecoming: homecoming, corner: corner };
})();
