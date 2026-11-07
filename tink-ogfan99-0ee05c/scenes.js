/* tink scenes (Regions tab: Chicago; Calumet Heights, South Side). CSS classes prefixed tk- (the page's own anim-train is kept).
   1 87th St on the Metra Electric South Chicago branch: the island platform up on the embankment, a silver bilevel electric sliding in under the wires.
   2 Simeon Career Academy (Chatham), where she sang in the choir and did the talent shows: tan brick school, music notes floating out.
   3 Pill Hill, Calumet Heights: brick ranch houses up on the limestone ridge, lawns, fall leaves drifting.
   4 Rainbow Beach in winter (Winter's Diary): Lake Michigan iced over, snow falling, the skyline far up the shore.
   5 E 87th St and S Jeffery Blvd in Calumet Heights: green signs, TINK tagged, the Chicago Skyway's steel truss rising behind with cars crossing.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.tk-flk{animation:tkflick 2.2s infinite}.tk-flk2{animation-delay:.7s}' +
    '@keyframes tkcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.tk-car{animation:tkcar 7s linear infinite}.tk-car2{animation-delay:-3.5s}' +
    '@keyframes tkcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.tk-carL{animation:tkcarL 8s linear infinite}.tk-carL2{animation-delay:-4s}' +
    '@keyframes tkup{from{transform:translate(0,0)}to{transform:translate(170px,-62px)}}.tk-up{animation:tkup 4s linear infinite}.tk-up2{animation-delay:-2s}' +
    '@keyframes tknote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.tk-note{animation:tknote 2.6s ease-out infinite}.tk-note2{animation-delay:-.9s}.tk-note3{animation-delay:-1.7s}' +
    '@keyframes tkleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-50px,110px) rotate(200deg);opacity:0}}.tk-leaf{animation:tkleaf 5s linear infinite}.tk-leaf2{animation-delay:-1.7s}.tk-leaf3{animation-delay:-3.4s}' +
    '@keyframes tksnow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.tk-sn{animation:tksnow 6s linear infinite}.tk-sn2{animation-delay:-2s}.tk-sn3{animation-delay:-4s}' +
    '@keyframes tkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tk-sp{animation:tkspray 1.4s ease-out infinite}.tk-sp2{animation-delay:.45s}' +
    '@keyframes tkblink{0%,100%{opacity:.25}50%{opacity:1}}.tk-bl{animation:tkblink 1.6s ease-in-out infinite}.tk-bl2{animation-delay:-.8s}' +
    '@keyframes tkspark{0%,100%{opacity:0}50%{opacity:1}}.tk-spk{animation:tkspark .9s steps(2) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const METRA = "#1f4e79", PINK = "#ff5fa2", ICE = "#9fd8ff", GOLD = "#f2c94c";

  /* 1. 87th St, Metra Electric South Chicago branch: island platform on the embankment, bilevel electric under the wires */
  function tkstation() {
    const upper = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 42) + '" y="80" width="30" height="14" rx="2" fill="#1f2a33"/>').join("");
    const lower = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 42) + '" y="112" width="30" height="14" rx="2" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train">' +
      '<path d="M200 60l-14 -14h28z" fill="none" stroke="#555" stroke-width="2"/><path d="M186 46h28" stroke="#555" stroke-width="2"/>' +
      '<rect x="24" y="62" width="330" height="94" rx="9" fill="#d7dbdf" stroke="#7a828a" stroke-width="2"/>' + upper + lower +
      Array.from({ length: 22 }, (_, i) => '<path d="M' + (30 + i * 15) + ' 132v20" stroke="#bcc2c8" stroke-width="1.5"/>').join("") +
      '<rect x="24" y="100" width="330" height="5" fill="' + METRA + '"/><rect x="24" y="105" width="330" height="2" fill="#c8102e"/>' +
      '<rect x="330" y="68" width="20" height="84" rx="5" fill="#b9bfc5"/><rect x="334" y="74" width="12" height="20" rx="2" fill="#1f2a33"/><circle cx="340" cy="146" r="3.5" fill="#fff6c2"/>' +
      '<rect x="250" y="66" width="70" height="10" rx="2" fill="#111"/><text x="285" y="74" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">SOUTH CHICAGO</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks1)"/>' +
      '<g fill="#3b3346"><rect x="0" y="60" width="40" height="40"/><rect x="360" y="52" width="40" height="48"/></g>' +
      '<path d="M0 42h400" stroke="#2c2c34" stroke-width="2"/>' + [30, 180, 330].map(x => '<rect x="' + (x - 3) + '" y="34" width="6" height="128" fill="#5b636b"/><path d="M' + (x - 16) + ' 40h32" stroke="#5b636b" stroke-width="4"/>').join("") +
      train +
      '<rect x="0" y="158" width="400" height="6" fill="#f2c200"/><rect x="0" y="164" width="400" height="22" fill="#9a958c"/>' +
      '<rect x="120" y="128" width="160" height="6" fill="#2a2d33" opacity="0"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#5c6b3a"/><path d="M0 186l400 0l-40 74H40z" fill="#6e7d45"/>' +
      '<g stroke="#4c5a2c" stroke-width="2">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (20 + i * 28) + ' 196l4 -8l4 8"/>').join("") + '</g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a3f"/><path d="M0 248h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("tk-car", 0, 240, "#7a3fb0") +
      '<rect x="104" y="170" width="196" height="32" rx="3" fill="#111"/><text x="118" y="192" ' + font + ' font-size="17" fill="#fff">87th St</text>' + badge(196, 186, "METRA", METRA) +
      '<g class="tk-spk"><circle cx="200" cy="44" r="3" fill="#bfe3ff"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">METRA ELECTRIC · 87TH ST · BY CALUMET HEIGHTS</text>',
      sky("tks1", "#1e2142", "#d97a6a"));
  }

  /* 2. Simeon Career Academy: tan brick school, choir notes floating out */
  function tksimeon() {
    const wins = Array.from({ length: 3 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (52 + c * 34) + '" y="' + (78 + r * 30) + '" width="22" height="18" fill="' + ((r + c) % 4 ? "#3a5068" : "#ffe9a8") + '" stroke="#5e4a32" stroke-width="1.5"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tks2)"/>' +
      '<g fill="#3f7a3a"><ellipse cx="20" cy="170" rx="40" ry="34"/><ellipse cx="384" cy="166" rx="40" ry="38"/></g>' +
      '<rect x="40" y="60" width="320" height="120" fill="#c8a675"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M40 ' + (66 + i * 8) + 'h320" stroke="#b08f60" stroke-width="1"/>').join("") +
      '<rect x="40" y="56" width="320" height="8" fill="#8a6a44"/>' + wins +
      '<rect x="160" y="136" width="80" height="44" fill="#6b4a2a"/><rect x="166" y="142" width="32" height="38" fill="#3a5068"/><rect x="202" y="142" width="32" height="38" fill="#3a5068"/>' +
      '<rect x="120" y="36" width="160" height="20" rx="2" fill="#123a7a"/><text x="200" y="51" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SIMEON CAREER ACADEMY</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#7a7a74"/><rect x="0" y="180" width="400" height="10" fill="#9a9a92"/>' +
      '<rect x="150" y="190" width="100" height="6" fill="#b5b5ad"/><rect x="140" y="196" width="120" height="6" fill="#a5a59d"/>' +
      '<path d="M330 180V110" stroke="#ddd" stroke-width="2"/><rect x="331" y="110" width="30" height="18" fill="#123a7a"/><rect x="331" y="118" width="30" height="4" fill="' + GOLD + '"/>' +
      '<g class="tk-note"><text x="190" y="140" ' + font + ' font-size="22" fill="' + PINK + '">&#9834;</text></g>' +
      '<g class="tk-note tk-note2"><text x="214" y="136" ' + font + ' font-size="18" fill="' + GOLD + '">&#9835;</text></g>' +
      '<g class="tk-note tk-note3"><text x="176" y="132" ' + font + ' font-size="16" fill="' + ICE + '">&#9834;</text></g>' +
      car("tk-carL", 0, 240, "#2f6fb3") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#22313a">CHOIR AND TALENT SHOWS · CHATHAM</text>',
      sky("tks2", "#8ec5ea", "#f6e7c8"));
  }

  /* 3. Pill Hill, Calumet Heights: brick ranches on the limestone ridge */
  function tkpillhill() {
    const house = (x, y, brick, roof) => '<g><rect x="' + x + '" y="' + y + '" width="86" height="34" fill="' + brick + '"/><path d="M' + (x - 6) + ' ' + y + 'l49 -16l49 16z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 10) + '" y="' + (y + 8) + '" width="26" height="14" fill="#ffe9a8" stroke="#eee" stroke-width="2"/><rect x="' + (x + 54) + '" y="' + (y + 10) + '" width="14" height="24" fill="#5a3a2a"/>' +
      '<rect x="' + (x + 72) + '" y="' + (y + 8) + '" width="10" height="12" fill="#ffe9a8" stroke="#eee" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks3)"/>' +
      '<path d="M0 150q100 -44 200 -46q100 2 200 46v110H0z" fill="#d9cfb4"/>' +
      '<path d="M0 158q100 -44 200 -46q100 2 200 46v102H0z" fill="#6e9c4a"/>' +
      house(26, 118, "#9a4a32", "#3a2e2a") + house(150, 92, "#b5643c", "#2e2a28") + house(276, 116, "#8a3a2a", "#3a3230") +
      '<g fill="#d98a2b"><ellipse cx="128" cy="96" rx="20" ry="26"/></g><rect x="126" y="110" width="4" height="36" fill="#5a3a22"/>' +
      '<g fill="#c9652b"><ellipse cx="262" cy="92" rx="18" ry="24"/></g><rect x="260" y="104" width="4" height="34" fill="#5a3a22"/>' +
      '<path d="M0 214q200 -20 400 0v46H0z" fill="#8a8a82"/><path d="M0 234q200 -16 400 0" stroke="#e0e0d6" stroke-width="2" stroke-dasharray="14 10" fill="none"/>' +
      '<g fill="#b7ab8a"><rect x="0" y="194" width="400" height="6" opacity=".6"/></g>' +
      '<g class="tk-leaf"><path d="M130 70q6 -6 10 0q-6 6 -10 0z" fill="#e0a43a"/></g><g class="tk-leaf tk-leaf2"><path d="M262 64q6 -6 10 0q-6 6 -10 0z" fill="#c9652b"/></g><g class="tk-leaf tk-leaf3"><path d="M200 50q6 -6 10 0q-6 6 -10 0z" fill="#d98a2b"/></g>' +
      car("tk-car tk-car2", 0, 222, PINK) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a22">PILL HILL · CALUMET HEIGHTS</text>',
      sky("tks3", "#f2b46a", "#fbe6c4"));
  }

  /* 4. Rainbow Beach in winter: ice on Lake Michigan, snow falling, skyline far up the shore */
  function tkrainbow() {
    const flakes = (cls, off) => '<g class="' + cls + '">' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 61 + off) % 400) + '" cy="' + ((i * 37) % 240) + '" r="' + (1.4 + (i % 3) * .6) + '" fill="#fff" opacity=".9"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks4)"/>' +
      '<g fill="#8a94b0" opacity=".85"><rect x="250" y="96" width="8" height="30"/><rect x="260" y="84" width="6" height="42"/><rect x="268" y="90" width="10" height="36"/><rect x="280" y="72" width="7" height="54"/><rect x="290" y="88" width="9" height="38"/><rect x="302" y="94" width="8" height="32"/></g>' +
      '<rect x="0" y="126" width="400" height="40" fill="#6f8fb0"/>' +
      '<path d="M0 150h400" stroke="#9fc0dc" stroke-width="2" opacity=".6"/>' +
      '<path d="M0 166l30 -10l40 6l50 -12l40 8l50 -10l60 10l40 -8l50 8l40 -6v30H0z" fill="#e8f2fa"/>' +
      '<path d="M40 162l10 -8l12 6M150 156l12 -10l12 8M300 160l10 -8l14 6" stroke="#b9d3e8" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#f4f7fb"/><path d="M0 196q200 -10 400 0" stroke="#d9e4ee" stroke-width="3" fill="none"/>' +
      '<g><path d="M70 236l12 -60M106 236l-12 -60M74 214h28M78 196h20" stroke="#c8102e" stroke-width="4"/><rect x="70" y="166" width="36" height="12" rx="2" fill="#c8102e"/><rect x="74" y="160" width="28" height="6" fill="#f4f7fb"/></g>' +
      '<g transform="rotate(-8 300 222)"><rect x="268" y="206" width="66" height="34" rx="3" fill="' + PINK + '" stroke="#7a1f4a" stroke-width="2"/><rect x="300" y="206" width="3" height="34" fill="#7a1f4a"/><path d="M276 216h18M276 224h18M308 216h18M308 224h18" stroke="#fff" stroke-width="1.5" opacity=".8"/></g>' +
      flakes("tk-sn", 0) + flakes("tk-sn tk-sn2", 23) + flakes("tk-sn tk-sn3", 47) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#e8f2fa">RAINBOW BEACH · A WINTER DIARY</text>',
      sky("tks4", "#4a5878", "#c9d6e6"));
  }

  /* 5. E 87th St and S Jeffery Blvd, Calumet Heights; the Chicago Skyway truss behind */
  function tkcorner() {
    const skyway = '<g fill="none" stroke="#3c4a5a" stroke-width="3"><path d="M10 120q190 -70 380 0"/><path d="M10 120h380"/>' +
      Array.from({ length: 19 }, (_, i) => { const x = 10 + i * 20; const y = 120 - 70 * (1 - Math.pow((x - 200) / 190, 2)) * 0.5 * 2 / 2; return '<path d="M' + x + ' 120L' + x + ' ' + y.toFixed(1) + '"/>'; }).join("") + '</g>' +
      '<g stroke="#3c4a5a" stroke-width="1.5">' + Array.from({ length: 18 }, (_, i) => { const x = 10 + i * 20, x2 = x + 20; const y1 = 120 - 35 * (1 - Math.pow((x - 200) / 190, 2)); return '<path d="M' + x + ' ' + y1.toFixed(1) + 'L' + x2 + ' 120"/>'; }).join("") + '</g>' +
      '<rect x="40" y="120" width="8" height="40" fill="#3c4a5a"/><rect x="352" y="120" width="8" height="40" fill="#3c4a5a"/>' +
      '<g class="tk-carL"><rect x="0" y="113" width="14" height="6" rx="2" fill="#fff6c2"/></g><g class="tk-carL tk-carL2"><rect x="0" y="113" width="14" height="6" rx="2" fill="#ffb347"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks5)"/>' + skyway +
      '<rect x="0" y="130" width="400" height="94" fill="#7a3b2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#62301f" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#62301f" stroke-width="1"/>').join("")).join("") +
      tag("TINK", 30, 200, 64, PINK, -6) + tag("WINTER'S DIARY", 26, 218, 16, ICE, -3) + tag("ONE IN A MILLION", 30, 152, 13, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "E 87th St") + sign(246, 124, 148, "S Jeffery Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="tk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("tk-car", 0, 240, ICE) +
      '<g class="tk-sp"><circle cx="196" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="tk-sp tk-sp2"><circle cx="202" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">CHICAGO SKYWAY · CALUMET HEIGHTS</text>',
      sky("tks5", "#2a2a5a", "#f08a7a"));
  }

  window.SCENES = { tkstation: tkstation, tksimeon: tksimeon, tkpillhill: tkpillhill, tkrainbow: tkrainbow, tkcorner: tkcorner };
})();
