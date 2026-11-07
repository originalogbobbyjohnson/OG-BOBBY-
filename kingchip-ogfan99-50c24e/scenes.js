/* kingchip scenes (Regions tab: St. Louis + Ohio; Glenville / East Cleveland, Ohio). CSS classes and ids prefixed kc- (the page's own anim-train is kept).
   1 RTA Red Line pulling into Superior station (on the embankment at Superior Ave, East Cleveland), RED bullet.
   2 Playhouse Square on Euclid Ave: the giant outdoor chandelier swaying over the street ("The Cleveland Show").
   3 The Cavs' downtown arena court, wine and gold, a ball dunking ("slam dunking ... with LeBron").
   4 Eddy Road at night: a Chevy on 30s, crocodile-green interior, screens in the headrests = the "Chevrolet movie theater", trunk bumping.
   5 St. Clair Ave and E 105th St in Glenville: green signs, CHIP tagged on the brick, Terminal Tower downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kcflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kc-flk{animation:kcflick 2.2s infinite}.kc-flk2{animation-delay:.7s}' +
    '@keyframes kcswing{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kc-swing{transform-box:view-box;transform-origin:200px 34px;animation:kcswing 3.2s ease-in-out infinite}' +
    '@keyframes kcglow{0%,100%{opacity:.35}50%{opacity:.9}}.kc-glow{animation:kcglow 1.6s ease-in-out infinite}.kc-glow2{animation-delay:-.8s}' +
    '@keyframes kcdunk{0%{transform:translate(-70px,40px)}45%{transform:translate(0,-18px)}60%{transform:translate(6px,4px)}100%{transform:translate(6px,40px)}}.kc-ball{animation:kcdunk 2.4s ease-in infinite}' +
    '@keyframes kcwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.kc-cr{animation:kcwave .7s ease-in-out infinite}.kc-cr2{animation-delay:-.35s}' +
    '@keyframes kcring{0%{transform:scale(.3);opacity:.9}100%{transform:scale(1.6);opacity:0}}.kc-ring{transform-box:fill-box;transform-origin:50% 50%;animation:kcring 1.1s ease-out infinite}.kc-ring2{animation-delay:.37s}.kc-ring3{animation-delay:.74s}' +
    '@keyframes kcbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.kc-car{animation:kcbounce .55s ease-in-out infinite}' +
    '@keyframes kcscreen{0%,100%{fill:#39d0ff}33%{fill:#ff5ab4}66%{fill:#ffd23a}}.kc-scr{animation:kcscreen 1.5s steps(1) infinite}' +
    '@keyframes kcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kc-sp{animation:kcspray 1.4s ease-out infinite}.kc-sp2{animation-delay:.45s}' +
    '@keyframes kcrain{from{transform:translateY(-20px)}to{transform:translateY(20px)}}.kc-snow{animation:kcrain 2.6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2b134", WINE = "#8a1538", GATOR = "#3cc68a", RED = "#e31837";

  /* 1. Superior station, RTA Red Line, East Cleveland */
  function kcstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 44) + '" y="98" width="34" height="24" rx="3" fill="#1f2a36"/>').join("");
    const train = '<g class="anim-train"><rect x="40" y="86" width="340" height="72" rx="8" fill="#d9dde1" stroke="#8b9399" stroke-width="2"/>' + win +
      '<rect x="40" y="128" width="340" height="7" fill="' + RED + '"/><rect x="40" y="137" width="340" height="3" fill="#1f2a36"/>' +
      '<rect x="44" y="94" width="18" height="52" rx="2" fill="#1f2a36"/><rect x="330" y="90" width="44" height="10" rx="2" fill="#111"/><text x="352" y="98" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">AIRPORT</text>' +
      '<circle class="kc-flk" cx="372" cy="146" r="3.5" fill="#fff6c2"/><circle cx="100" cy="160" r="7" fill="#222"/><circle cx="160" cy="160" r="7" fill="#222"/><circle cx="270" cy="160" r="7" fill="#222"/><circle cx="330" cy="160" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kcs1)"/>' +
      '<g fill="#3a3550"><rect x="0" y="40" width="70" height="60"/><rect x="300" y="30" width="60" height="70"/><rect x="364" y="50" width="36" height="50"/></g>' +
      '<g fill="#ffd98a" opacity=".7"><rect x="12" y="52" width="10" height="12"/><rect x="40" y="52" width="10" height="12"/><rect x="314" y="44" width="10" height="12"/><rect x="340" y="44" width="10" height="12"/></g>' +
      /* embankment + track */
      '<path d="M0 166h400v94H0z" fill="#5b4a3c"/><path d="M0 166h400" stroke="#2c2c2c" stroke-width="5"/><path d="M0 172h400" stroke="#777" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 168v6" stroke="#3d2f24" stroke-width="5"/>').join("") +
      /* island platform canopy */
      '<rect x="20" y="58" width="360" height="10" fill="#6e7378"/><rect x="40" y="68" width="4" height="98" fill="#55595d"/><rect x="356" y="68" width="4" height="98" fill="#55595d"/>' +
      train +
      /* platform edge */
      '<rect x="0" y="176" width="400" height="12" fill="#b9b5ab"/><rect x="0" y="176" width="400" height="3" fill="#f2c200"/>' +
      /* station sign */
      '<rect x="110" y="196" width="180" height="42" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="190" y="224" text-anchor="middle" ' + font + ' font-size="20" fill="#fff" letter-spacing="1">SUPERIOR</text>' +
      '<circle cx="268" cy="217" r="13" fill="' + RED + '"/><text x="268" y="221" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">RED</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">SUPERIOR AVE · EAST CLEVELAND</text>',
      sky("kcs1", "#1a1630", "#7a4a5a"));
  }

  /* 2. Playhouse Square: the outdoor chandelier over Euclid Ave */
  function kcchandelier() {
    const drops = Array.from({ length: 13 }, (_, i) => {
      const x = 152 + i * 8, len = 16 + Math.round(10 * Math.sin(i / 12 * Math.PI));
      return '<path d="M' + x + ' 92v' + len + '" stroke="#fff3c4" stroke-width="1.6"/><circle class="kc-glow' + (i % 2 ? " kc-glow2" : "") + '" cx="' + x + '" cy="' + (94 + len) + '" r="2.6" fill="#fff8d8"/>';
    }).join("");
    const chand = '<g class="kc-swing"><path d="M200 0v40" stroke="#bfa25a" stroke-width="2"/><path d="M200 34L150 70M200 34L250 70" stroke="#bfa25a" stroke-width="1.5"/>' +
      '<ellipse cx="200" cy="72" rx="52" ry="8" fill="none" stroke="#e8cf7a" stroke-width="3"/><ellipse cx="200" cy="86" rx="58" ry="9" fill="none" stroke="#e8cf7a" stroke-width="3"/>' +
      '<path d="M146 72v14M254 72v14M200 64v30" stroke="#e8cf7a" stroke-width="2"/>' + drops +
      '<ellipse class="kc-glow" cx="200" cy="96" rx="70" ry="30" fill="#fff2b0" opacity=".25"/></g>';
    const marquee = (x, w, txt) => '<rect x="' + x + '" y="150" width="' + w + '" height="18" fill="#1a1020" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: Math.floor(w / 8) }, (_, i) => '<circle class="kc-glow' + (i % 2 ? " kc-glow2" : "") + '" cx="' + (x + 4 + i * 8) + '" cy="150" r="1.6" fill="#ffe08a"/>').join("") +
      '<text x="' + (x + w / 2) + '" y="163" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe08a" letter-spacing="1">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#kcs2)"/>' +
      '<rect x="0" y="60" width="110" height="140" fill="#b9a68a"/><rect x="290" y="56" width="110" height="144" fill="#c4b192"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (12 + i * 24) + '" y="76" width="14" height="40" rx="7" fill="#3a2b3a"/><rect x="' + (300 + i * 24) + '" y="76" width="14" height="40" rx="7" fill="#3a2b3a"/>').join("") +
      marquee(4, 100, "THE SHOW") + marquee(296, 100, "TONIGHT") +
      '<rect x="0" y="200" width="400" height="60" fill="#3c3b42"/><path d="M0 230h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="22 14"/>' +
      '<rect x="0" y="196" width="400" height="6" fill="#8c8a84"/>' + chand +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">PLAYHOUSE SQUARE · EUCLID AVE</text>',
      sky("kcs2", "#0e0b22", "#3a2a5a"));
  }

  /* 3. The downtown arena: wine and gold court */
  function kcarena() {
    const crowd = Array.from({ length: 28 }, (_, i) => '<circle class="kc-cr' + (i % 2 ? " kc-cr2" : "") + '" cx="' + (8 + i * 14.2) + '" cy="' + (78 + (i % 3) * 6) + '" r="5" fill="' + (i % 3 === 0 ? WINE : i % 3 === 1 ? GOLD : "#5a4a5e") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#120a10"/>' +
      '<path d="M0 30h400v70H0z" fill="#22141c"/>' + crowd +
      '<g opacity=".8">' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (40 + i * 64) + ' 0L' + (20 + i * 64) + ' 60" stroke="#fff6d0" stroke-width="10" opacity=".07"/>').join("") + '</g>' +
      '<rect x="0" y="100" width="400" height="10" fill="' + WINE + '"/>' +
      '<path d="M0 110h400v150H0z" fill="#c98c4a"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 26) + ' 110v150" stroke="#b77c3e" stroke-width="1"/>').join("") +
      '<path d="M40 260L120 120h160l80 140" fill="none" stroke="#fff" stroke-width="2.5"/><ellipse cx="200" cy="200" rx="54" ry="20" fill="' + WINE + '" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M140 120q60 50 120 0" fill="' + WINE + '" opacity=".85" stroke="#fff" stroke-width="2"/>' +
      /* hoop */
      '<rect x="196" y="60" width="8" height="64" fill="#333"/><rect x="170" y="34" width="60" height="38" fill="#fff" fill-opacity=".85" stroke="#222" stroke-width="2"/><rect x="188" y="48" width="24" height="18" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<rect x="186" y="70" width="28" height="3" fill="#ff6a1a"/><path d="M188 73l4 14h16l4 -14M194 73l2 14M206 73l-2 14M200 73v14" stroke="#fff" stroke-width="1" fill="none"/>' +
      '<g class="kc-ball"><circle cx="194" cy="60" r="8" fill="#e8762c" stroke="#5a2a0a" stroke-width="1.2"/><path d="M186 60h16M194 52v16" stroke="#5a2a0a" stroke-width="1"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff4dc" letter-spacing="2">WINE AND GOLD · DOWNTOWN</text>',
      '');
  }

  /* 4. Eddy Road: the Chevrolet movie theater */
  function kceddy() {
    const rings = [1, 2, 3].map(i => '<circle class="kc-ring kc-ring' + i + '" cx="320" cy="168" r="20" fill="none" stroke="' + GATOR + '" stroke-width="2"/>').join("");
    const car = '<g class="kc-car">' +
      '<path d="M58 176q0 -22 22 -26l34 -28h112l44 28q40 4 44 26v12H58z" fill="' + WINE + '" stroke="#3a0a18" stroke-width="2"/>' +
      '<path d="M120 126h48v24h-66zM176 126h46l34 24h-80z" fill="#14222c"/>' +
      /* crocodile interior + headrest screens */
      '<path d="M108 146h64v4h-64zM178 146h70v4h-70z" fill="' + GATOR + '"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (110 + i * 13) + '" y="146.5" width="5" height="3" rx="1" fill="#1f7a50"/>').join("") +
      '<rect x="146" y="132" width="16" height="11" rx="1.5" class="kc-scr"/><rect x="200" y="132" width="16" height="11" rx="1.5" class="kc-scr"/>' +
      '<path d="M60 168h260" stroke="#f0d9a0" stroke-width="2" opacity=".6"/>' +
      '<circle cx="104" cy="190" r="22" fill="#151515"/><circle cx="104" cy="190" r="15" fill="' + GOLD + '"/><circle cx="104" cy="190" r="4" fill="#fff"/>' +
      '<circle cx="270" cy="190" r="22" fill="#151515"/><circle cx="270" cy="190" r="15" fill="' + GOLD + '"/><circle cx="270" cy="190" r="4" fill="#fff"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M104 190l' + Math.round(14 * Math.cos(i * Math.PI / 3)) + ' ' + Math.round(14 * Math.sin(i * Math.PI / 3)) + 'M270 190l' + Math.round(14 * Math.cos(i * Math.PI / 3)) + ' ' + Math.round(14 * Math.sin(i * Math.PI / 3)) + '" stroke="#a87a1c" stroke-width="2"/>').join("") +
      '<circle class="kc-flk" cx="312" cy="172" r="4" fill="#ff3b3b"/><circle class="kc-flk kc-flk2" cx="60" cy="170" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kcs4)"/>' +
      Array.from({ length: 26 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 19) % 70) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      '<g fill="#2a1e2a"><rect x="0" y="96" width="80" height="80"/><rect x="86" y="110" width="60" height="66"/><rect x="290" y="100" width="110" height="76"/></g>' +
      '<g fill="#ffcf7a" opacity=".6"><rect x="14" y="110" width="12" height="14"/><rect x="48" y="110" width="12" height="14"/><rect x="304" y="114" width="12" height="14"/><rect x="350" y="114" width="12" height="14"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#2c2c33"/><path d="M0 238h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="26 16"/>' +
      '<rect x="356" y="60" width="5" height="116" fill="#2f2f2f"/>' + sign(300, 64, 96, "Eddy Rd") +
      rings + car +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e3c3" letter-spacing="2">EDDY ROAD · 30S ON THE CHEVY</text>',
      sky("kcs4", "#0f0d22", "#45284a"));
  }

  /* 5. St. Clair Ave and E 105th St, Glenville */
  function kccorner() {
    const tower = '<g fill="#cdb894"><rect x="186" y="48" width="44" height="80"/><rect x="192" y="30" width="32" height="20"/><rect x="198" y="16" width="20" height="16"/><path d="M200 16l8 -12 8 12z"/><rect x="206" y="0" width="4" height="6"/></g>' +
      '<g fill="#8a7a62">' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (190 + i * 8) + '" y="56" width="4" height="64"/>').join("") + '</g>' +
      '<circle class="kc-flk" cx="208" cy="2" r="2.5" fill="#ff4a4a"/>';
    const snow = Array.from({ length: 30 }, (_, i) => '<circle class="kc-snow" style="animation-delay:-' + (i % 7) * 0.37 + 's" cx="' + ((i * 47) % 400) + '" cy="' + ((i * 29) % 120) + '" r="1.4" fill="#fff" opacity=".75"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kcs5)"/>' +
      '<g fill="#3a2e3e"><rect x="40" y="86" width="40" height="44"/><rect x="100" y="70" width="40" height="60"/><rect x="250" y="76" width="44" height="54"/><rect x="306" y="92" width="50" height="38"/></g>' +
      tower + snow +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3a2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#64301f" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#64301f" stroke-width="1"/>').join("")).join("") +
      tag("KING CHIP", 16, 190, 44, GOLD, -6) + tag("SLAB", 30, 216, 20, GATOR, -3) + tag("44108", 118, 216, 18, "#ffffff", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(252, 98, 140, "St Clair Ave") + sign(276, 124, 100, "E 105 St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="kc-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="kc-sp"><circle cx="246" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kc-sp kc-sp2"><circle cx="252" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("kcs5", "#141a3a", "#b0606a"));
  }

  window.SCENES = { kcstation: kcstation, kcchandelier: kcchandelier, kcarena: kcarena, kceddy: kceddy, kccorner: kccorner };
})();
