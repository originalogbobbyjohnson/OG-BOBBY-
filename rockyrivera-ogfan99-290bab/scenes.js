/* rockyrivera scenes (Regions tab: The Bay Area; the Excelsior, San Francisco). CSS classes prefixed rr- (the page's own anim-train is kept).
   1 Balboa Park BART: the open-air platform in the cut by the freeway, a white-and-blue BART train sliding in, fog over the hills.
   2 Treasure Island, where she grew up: the cream Art Deco Building One by the water, a ferry crossing, the city skyline across the bay.
   3 SoMa Pilipinas: parol star lanterns swaying over the street, a sun-and-stars mural wall.
   4 McLaren Park above the Excelsior: the water tower on the hill, eucalyptus, fog rolling in.
   5 Mission St and Geneva Ave: green signs, ROCKY tagged, Sutro Tower in the fog behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rrflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rr-flk{animation:rrflick 2.2s infinite}.rr-flk2{animation-delay:.7s}' +
    '@keyframes rrcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.rr-car{animation:rrcar 7s linear infinite}.rr-car2{animation-delay:-3.5s}' +
    '@keyframes rrcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.rr-carL{animation:rrcarL 8s linear infinite}' +
    '@keyframes rrfog{0%,100%{transform:translateX(-30px);opacity:.55}50%{transform:translateX(30px);opacity:.85}}.rr-fog{animation:rrfog 8s ease-in-out infinite}.rr-fog2{animation-delay:-4s}' +
    '@keyframes rrferry{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rr-ferry{animation:rrferry 14s linear infinite}' +
    '@keyframes rrsway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.rr-par{transform-box:fill-box;transform-origin:50% 0;animation:rrsway 2.4s ease-in-out infinite}.rr-par2{animation-delay:-1.2s}' +
    '@keyframes rrglow{0%,100%{opacity:.35}50%{opacity:.9}}.rr-gl{animation:rrglow 2s ease-in-out infinite}.rr-gl2{animation-delay:-1s}' +
    '@keyframes rrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rr-sp{animation:rrspray 1.4s ease-out infinite}.rr-sp2{animation-delay:.45s}' +
    '@keyframes rrbird{0%{transform:translate(0,0)}100%{transform:translate(420px,-20px)}}.rr-bird{animation:rrbird 12s linear infinite}.rr-bird2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const fog = (y, cls) => '<g class="rr-fog ' + (cls || "") + '"><ellipse cx="90" cy="' + y + '" rx="110" ry="14" fill="#f2f2f6"/><ellipse cx="280" cy="' + (y + 6) + '" rx="130" ry="16" fill="#f2f2f6"/></g>';
  const star = (cx, cy, r, c) => { let d = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; d += (i ? "L" : "M") + (cx + Math.cos(a) * rr).toFixed(1) + " " + (cy + Math.sin(a) * rr).toFixed(1); } return '<path d="' + d + 'z" fill="' + c + '"/>'; };
  const BART = "#0099d8", SUN = "#ffcf3a", RED = "#ff4b5c", BLUE = "#4aa3ff";

  /* 1. Balboa Park BART: open-air platform in the cut, white-and-blue train */
  function rrstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="100" width="30" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><path d="M30 94h300q30 0 34 34v20H30z" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="30" y="128" width="334" height="8" fill="' + BART + '"/><rect x="30" y="136" width="334" height="2" fill="#1d3f6e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (100 + i * 88) + '" y="104" width="4" height="44" fill="#c9ced3"/>').join("") +
      '<path d="M330 98q26 2 30 28h-30z" fill="#1f2a33"/><circle cx="356" cy="142" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rrs1)"/>' +
      '<path d="M0 74q60 -30 120 -16q70 -30 140 -6q80 -24 140 4v30H0z" fill="#6f8a6a"/>' +
      '<g fill="#e8e0d0">' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (12 + i * 50) + '" y="' + (62 + (i % 3) * 4) + '" width="20" height="12"/>').join("") + '</g>' +
      fog(64) +
      '<rect x="0" y="80" width="400" height="10" fill="#8a8a86"/><rect x="0" y="76" width="400" height="4" fill="#c9c9c4"/>' +
      car("rr-carL", 0, 66, RED) +
      '<rect x="30" y="44" width="340" height="8" rx="2" fill="#b5b0a6"/>' + [50, 200, 350].map(x => '<rect x="' + (x - 3) + '" y="52" width="6" height="42" fill="#b5b0a6"/>').join("") +
      '<g class="rr-flk"><rect x="100" y="52" width="40" height="3" fill="#fff3c4"/></g><g class="rr-flk rr-flk2"><rect x="260" y="52" width="40" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="150" width="400" height="6" fill="#f2c200"/><rect x="0" y="156" width="400" height="30" fill="#c9c3b6"/>' +
      '<path d="M0 186h400v74H0z" fill="#7d7a72"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 186l20 74" stroke="#6a675f" stroke-width="2"/>').join("") +
      '<rect x="104" y="196" width="200" height="32" rx="3" fill="#111"/><text x="118" y="218" ' + font + ' font-size="17" fill="#fff">Balboa Park</text>' + badge(234, 212, "BART", BART) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a3040" opacity=".9">BALBOA PARK · THE EXCELSIOR · SAN FRANCISCO</text>',
      sky("rrs1", "#9fb8cc", "#e8e2d6"));
  }

  /* 2. Treasure Island: Building One, ferry, skyline across the water */
  function rrisland() {
    const sky1 = [[20, 70], [44, 54], [62, 82], [84, 40], [104, 64], [126, 50], [150, 76], [170, 60], [196, 86], [220, 66], [246, 80], [272, 72], [300, 88]];
    const city = sky1.map(([x, h]) => '<rect x="' + x + '" y="' + (120 - h) + '" width="20" height="' + h + '" fill="#8aa0b4"/>').join("") +
      '<path d="M114 120l10 -96l10 96z" fill="#9fb2c2"/>';
    const ferry = '<g class="rr-ferry"><path d="M0 146h70l-8 10H8z" fill="#f6f6f2" stroke="#4a5a6a" stroke-width="1.5"/><rect x="14" y="136" width="40" height="10" fill="#f6f6f2" stroke="#4a5a6a" stroke-width="1.5"/><rect x="18" y="139" width="32" height="4" fill="#4a6a8a"/><path d="M0 152h70" stroke="' + BLUE + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rrs2)"/>' +
      city +
      '<rect x="0" y="120" width="400" height="56" fill="#4f7a9a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (10 + i * 66) + ' ' + (130 + (i % 3) * 12) + 'q10 -4 20 0" stroke="#bcd6e8" stroke-width="2" fill="none"/>').join("") +
      ferry +
      '<rect x="0" y="174" width="400" height="86" fill="#c8b88a"/><rect x="0" y="174" width="400" height="6" fill="#a8986a"/>' +
      '<path d="M60 236v-46q140 -18 280 0v46z" fill="#efe4c8"/>' +
      '<rect x="168" y="150" width="64" height="86" fill="#f4ead2"/>' + [176, 190, 204, 218].map(x => '<rect x="' + x + '" y="158" width="6" height="56" fill="#d8c8a0"/>').join("") +
      '<rect x="184" y="216" width="32" height="20" fill="#5a4a3a"/><rect x="160" y="146" width="80" height="6" fill="#d8c8a0"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (74 + i * 16) + '" y="204" width="8" height="14" fill="#5a6a7a"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (246 + i * 16) + '" y="204" width="8" height="14" fill="#5a6a7a"/>').join("") +
      '<path d="M60 194q140 -18 280 0" stroke="#d8c8a0" stroke-width="3" fill="none"/>' +
      '<g fill="#3f6a3a"><circle cx="30" cy="226" r="16"/><circle cx="372" cy="224" r="18"/></g><rect x="28" y="230" width="4" height="30" fill="#5a4a3a"/><rect x="370" y="230" width="4" height="30" fill="#5a4a3a"/>' +
      '<g class="rr-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a3040">TREASURE ISLAND · BUILDING ONE</text>',
      sky("rrs2", "#9ccbe8", "#f3e6cc"));
  }

  /* 3. SoMa Pilipinas: parol lanterns over the street, sun-and-stars mural */
  function rrsoma() {
    const parC = [RED, SUN, BLUE, "#ff8ad0", SUN, RED, BLUE];
    const parols = parC.map((c, i) => { const x = 30 + i * 56, y = 52 + (i % 2) * 10; return '<g class="rr-par' + (i % 2 ? " rr-par2" : "") + '"><path d="M' + x + ' 30v' + (y - 44) + '" stroke="#333" stroke-width="1"/>' +
      '<circle class="rr-gl' + (i % 2 ? " rr-gl2" : "") + '" cx="' + x + '" cy="' + y + '" r="20" fill="' + c + '" opacity=".35"/>' + star(x, y, 15, c) + '<circle cx="' + x + '" cy="' + y + '" r="4" fill="#fff8d8"/>' +
      '<path d="M' + (x - 6) + ' ' + (y + 12) + 'l-4 20M' + x + ' ' + (y + 14) + 'v22M' + (x + 6) + ' ' + (y + 12) + 'l4 20" stroke="' + c + '" stroke-width="2"/></g>'; }).join("");
    const rays = Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M' + (200 + Math.cos(a) * 30) + ' ' + (160 + Math.sin(a) * 30) + 'L' + (200 + Math.cos(a) * 52) + ' ' + (160 + Math.sin(a) * 52) + '" stroke="' + SUN + '" stroke-width="7"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rrs3)"/>' +
      '<path d="M0 30q100 10 200 0q100 -10 200 0" stroke="#333" stroke-width="1.5" fill="none"/>' +
      '<rect x="20" y="100" width="360" height="114" fill="#24366e"/><rect x="20" y="100" width="180" height="114" fill="#b0283a" opacity=".85"/>' +
      '<path d="M20 100l120 57l-120 57z" fill="#f6f2ea"/>' + star(44, 120, 7, SUN) + star(44, 194, 7, SUN) + star(118, 157, 7, SUN) +
      rays + '<circle cx="200" cy="160" r="24" fill="' + SUN + '"/>' +
      '<path d="M250 200q30 -40 60 0q30 -40 60 0" stroke="#7be0b0" stroke-width="4" fill="none"/>' +
      '<rect x="20" y="100" width="360" height="114" fill="none" stroke="#3a2a2a" stroke-width="3"/>' +
      parols +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a42"/><path d="M0 246h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("rr-car", 0, 236, SUN) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0" opacity=".9">SOMA PILIPINAS · SAN FRANCISCO</text>',
      sky("rrs3", "#1a1f44", "#7a4a6a"));
  }

  /* 4. McLaren Park: water tower on the hill, eucalyptus, fog */
  function rrmclaren() {
    const euc = (x, y, s) => '<g><path d="M' + x + ' ' + y + 'v-' + (60 * s) + '" stroke="#c9bfae" stroke-width="' + (4 * s) + '"/><ellipse cx="' + x + '" cy="' + (y - 64 * s) + '" rx="' + (16 * s) + '" ry="' + (34 * s) + '" fill="#5f7a62"/><ellipse cx="' + (x + 8 * s) + '" cy="' + (y - 48 * s) + '" rx="' + (12 * s) + '" ry="' + (24 * s) + '" fill="#6f8a70"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rrs4)"/>' +
      '<path d="M0 170q100 -90 220 -84q110 6 180 70v104H0z" fill="#8a9a5a"/>' +
      '<rect x="212" y="62" width="44" height="40" rx="3" fill="#e6e2d8" stroke="#8a8a80" stroke-width="2"/><path d="M210 62q24 -14 48 0z" fill="#d0ccc0"/>' +
      '<path d="M216 102l-6 44M252 102l6 44M226 102v44M242 102v44M214 120h40M212 136h44" stroke="#8a8a80" stroke-width="2.5"/>' +
      euc(70, 190, 1.1) + euc(110, 180, .8) + euc(330, 186, 1) + euc(360, 196, .8) +
      '<path d="M0 230q120 -30 230 -14q100 12 170 -6v50H0z" fill="#6e8448"/>' +
      '<path d="M60 260q50 -40 150 -50q90 -6 150 -30" stroke="#d8c8a0" stroke-width="6" fill="none"/>' +
      fog(150) + fog(196, "rr-fog2") +
      '<g class="rr-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g><g class="rr-bird rr-bird2"><path d="M0 80q4 -4 8 0q4 -4 8 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a3040">MCLAREN PARK · ABOVE THE EXCELSIOR</text>',
      sky("rrs4", "#a8c4d8", "#ece6d6"));
  }

  /* 5. Mission St and Geneva Ave, Sutro Tower in the fog behind */
  function rrcorner() {
    const sutro = '<g><path d="M200 30L170 128M200 30L230 128M200 30v98" stroke="#d8362a" stroke-width="4"/>' +
      [48, 70, 92, 114].map((y, i) => '<path d="M' + (200 - (y - 30) * 0.3) + ' ' + y + 'H' + (200 + (y - 30) * 0.3) + '" stroke="' + (i % 2 ? "#f2f2f2" : "#d8362a") + '" stroke-width="3"/>').join("") +
      '<path d="M176 40h48M172 34h56" stroke="#f2f2f2" stroke-width="2"/><circle class="rr-gl" cx="200" cy="28" r="3" fill="#ff5a4a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rrs5)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 17) % 40 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<path d="M0 132q80 -40 160 -20q60 -26 120 -6q60 -16 120 4v20H0z" fill="#2c3550"/>' +
      sutro + fog(118) +
      '<rect x="0" y="130" width="400" height="94" fill="#6a4a5a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#553848" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#553848" stroke-width="1"/>').join("")).join("") +
      tag("ROCKY", 26, 200, 52, SUN, -6) + tag("BEATROCK", 30, 148, 15, BLUE, -4) + tag("AM I LYIN", 36, 218, 14, "#ffffff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(268, 98, 106, "Mission St") + sign(262, 124, 118, "Geneva Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="rr-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("rr-car", 0, 240, RED) +
      '<g class="rr-sp"><circle cx="218" cy="168" r="3" fill="' + SUN + '" opacity=".7"/></g><g class="rr-sp rr-sp2"><circle cx="224" cy="162" r="2" fill="' + SUN + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">MISSION ST · GENEVA AVE · THE EXCELSIOR</text>',
      sky("rrs5", "#141836", "#4a3a5a"));
  }

  window.SCENES = { rrstation: rrstation, rrisland: rrisland, rrsoma: rrsoma, rrmclaren: rrmclaren, rrcorner: rrcorner };
})();
