/* Mumford & Sons game (GENRES: ROCK; INTERNATIONAL region: UK + EUROPE; Wimbledon, south-west London - Marcus Mumford grew
   up in Wimbledon Chase and met Ben Lovett at King's College School, Wimbledon; the band formed in London's folk scene in 2007).
   Rooms: Wimbledon station (District line, open-air platforms under the canopy; trams and trains too), the grass courts
   with the ivy-covered green stadium wall, a candle-lit West London basement folk night (banjo, double bass, kick drum),
   a Gentlemen of the Road Stopover (bunting, festoon lights, a field stage at dusk), and Southside Common at Woodhayes Road,
   by their old school, with the Wimbledon Windmill on the Common behind.
   CSS classes prefixed "mns" (the page's anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mnsFlick{0%,100%{opacity:1;transform:scaleY(1)}40%{opacity:.75;transform:scaleY(.85)}70%{opacity:.95;transform:scaleY(1.1)}}.mnsFlick{transform-box:fill-box;transform-origin:50% 100%;animation:mnsFlick 1.1s ease-in-out infinite}.mnsF2{animation-delay:-.4s}.mnsF3{animation-delay:-.8s}' +
    '@keyframes mnsTw{0%,100%{opacity:1}50%{opacity:.3}}.mnsTw{animation:mnsTw 1.8s ease-in-out infinite}.mnsT2{animation-delay:-.6s}.mnsT3{animation-delay:-1.2s}' +
    '@keyframes mnsSail{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.mnsSail{transform-box:fill-box;transform-origin:50% 50%;animation:mnsSail 9s linear infinite}' +
    '@keyframes mnsBall{0%{transform:translate(0,0)}25%{transform:translate(70px,-34px)}50%{transform:translate(140px,0)}75%{transform:translate(70px,-34px)}100%{transform:translate(0,0)}}.mnsBall{animation:mnsBall 3s linear infinite}' +
    '@keyframes mnsNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(20px,-60px);opacity:0}}.mnsNote{animation:mnsNote 3s linear infinite}.mnsN2{animation-delay:-1s}.mnsN3{animation-delay:-2s}' +
    '@keyframes mnsSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.mnsSway{transform-box:fill-box;transform-origin:50% 0;animation:mnsSway 2.4s ease-in-out infinite}.mnsW2{animation-delay:-1.2s}' +
    '@keyframes mnsBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.mnsBird{animation:mnsBird 14s linear infinite}.mnsBd2{animation-delay:-7s}' +
    '@keyframes mnsSpray{0%{opacity:.9;transform:translate(0,0)}100%{opacity:0;transform:translate(8px,-18px)}}.mnsSpray{animation:mnsSpray 1.3s ease-out infinite}.mnsSp2{animation-delay:-.6s}' +
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
  const DIS = "#007229", TRAM = "#84b817", GOLD = "#e8c26a", IVY = "#2f5a2a", PURP = "#4b2a6b";
  const bird = (x, y, cls) => '<g class="mnsBird' + (cls || '') + '"><path d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>';
  const bulb = (x, y, i) => '<circle cx="' + x + '" cy="' + y + '" r="3" fill="#ffe08a" class="mnsTw' + (i % 3 === 1 ? ' mnsT2' : i % 3 === 2 ? ' mnsT3' : '') + '"/>';

  /* 1. Wimbledon station: open-air platform under the canopy, a District line train pulling in, black sign with District + Tram bullets */
  function mnsstation() {
    let wins = '';
    for (let x = 50; x < 290; x += 36) wins += '<rect x="' + x + '" y="134" width="24" height="20" rx="3" fill="#bfe2f5"/>';
    const train = '<g class="anim-train">' +
      '<rect x="20" y="122" width="280" height="72" rx="8" fill="#eef0f1" stroke="#2b2b2b" stroke-width="2"/>' +
      '<rect x="20" y="164" width="280" height="12" fill="#c8102e"/><rect x="20" y="176" width="280" height="6" fill="#0019a8"/>' +
      '<path d="M300 122q26 2 30 30v42h-30z" fill="#c8102e" stroke="#2b2b2b" stroke-width="2"/>' +
      '<rect x="306" y="132" width="18" height="22" rx="3" fill="#1b2a33"/><circle cx="320" cy="184" r="4" fill="#fff6c8"/>' + wins +
      '<rect x="120" y="134" width="12" height="44" fill="#d5d8da" stroke="#555"/><rect x="220" y="134" width="12" height="44" fill="#d5d8da" stroke="#555"/>' +
      '<g fill="#111"><circle cx="70" cy="196" r="7"/><circle cx="100" cy="196" r="7"/><circle cx="230" cy="196" r="7"/><circle cx="260" cy="196" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mnsSk1)"/>' + bird(40, 90) +
      '<path d="M0 80h400v18H0z" fill="#5c5f63"/><path d="M0 98h400" stroke="#3a3c3f" stroke-width="3"/>' +
      '<g fill="#7a7d80">' + [20, 100, 180, 260, 340].map(x => '<rect x="' + x + '" y="98" width="6" height="96"/>').join('') + '</g>' +
      '<g stroke="#8d9094" stroke-width="2">' + [0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => '<path d="M' + x + ' 80l20 -12h20l-20 12"/>').join('') + '</g>' +
      '<rect x="0" y="194" width="400" height="66" fill="#3d3d3a"/><rect x="0" y="194" width="400" height="8" fill="#ffffff"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#55524c"/>' + train +
      '<rect x="112" y="18" width="200" height="42" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<rect x="122" y="27" width="30" height="24" rx="12" fill="' + DIS + '"/><text x="137" y="44" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">D</text>' +
      '<rect x="158" y="27" width="30" height="24" rx="12" fill="' + TRAM + '"/><text x="173" y="44" text-anchor="middle" ' + F + ' font-size="13" fill="#111">T</text>' +
      '<text x="196" y="45" ' + F + ' font-size="17" fill="#fff">Wimbledon</text>',
      sky('mnsSk1', '#9fb7cc', '#dfe7ee'));
  }

  /* 2. The grass courts: ivy-green stadium wall, purple-and-green trim, a rally on the lawn, strawberries-and-cream summer sky */
  function mnscourt() {
    let ivy = '';
    for (let i = 0; i < 70; i++) ivy += '<circle cx="' + ((i * 37) % 400) + '" cy="' + (40 + (i * 23) % 70) + '" r="' + (4 + i % 4) + '" fill="' + (i % 2 ? '#2f5a2a' : '#3c6e33') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mnsSk2)"/>' +
      '<path d="M0 34h400v86H0z" fill="#e9e4d6"/>' + ivy +
      '<path d="M0 30h400v8H0z" fill="' + PURP + '"/><path d="M0 116h400v6H0z" fill="' + PURP + '"/>' +
      '<g fill="#d6d0c0">' + [60, 160, 260, 340].map(x => '<rect x="' + x + '" y="56" width="26" height="30" rx="13"/>').join('') + '</g>' +
      '<path d="M0 122h400v138H0z" fill="#5e9e3a"/>' +
      '<g fill="#6aae44">' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 50) + '" y="122" width="25" height="138"/>').join('') + '</g>' +
      '<path d="M40 248L90 140h220l50 108z" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<path d="M66 194h268M200 140v108" stroke="#fff" stroke-width="2"/>' +
      '<rect x="60" y="186" width="280" height="14" fill="none" stroke="#333" stroke-width="1"/><path d="M60 193h280" stroke="#111" stroke-width="2"/>' +
      '<g stroke="#ddd" stroke-width=".6">' + [70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330].map(x => '<path d="M' + x + ' 186v14"/>').join('') + '</g>' +
      '<rect x="56" y="180" width="4" height="22" fill="#fff"/><rect x="340" y="180" width="4" height="22" fill="#fff"/>' +
      '<g class="mnsBall"><circle cx="130" cy="170" r="4" fill="#d9f24a" stroke="#7a8a10"/></g>',
      sky('mnsSk2', '#7fb6e6', '#d8ecf8'));
  }

  /* 3. A candle-lit West London basement folk night: brick vault, banjo, double bass and a kick drum on a tiny stage */
  function mnsfolk() {
    let bricks = '';
    for (let y = 10; y < 190; y += 12) for (let x = (y / 12) % 2 ? -20 : 0; x < 400; x += 40) bricks += '<rect x="' + x + '" y="' + y + '" width="38" height="10" fill="#6b3524"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a140c"/>' + bricks +
      '<path d="M0 0h400v40Q200 -10 0 40z" fill="#1a0c06"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a2414"/><rect x="40" y="176" width="320" height="16" fill="#5a3a20"/>' +
      '<g><path d="M140 176V90" stroke="#3a2410" stroke-width="5"/><ellipse cx="140" cy="146" rx="22" ry="30" fill="#8a4a1c" stroke="#3a1a08" stroke-width="2"/><path d="M128 140h24M128 150h24" stroke="#3a1a08" stroke-width="2"/><rect x="134" y="86" width="12" height="12" fill="#3a2410"/></g>' +
      '<g><circle cx="220" cy="140" r="22" fill="#e8dcc0" stroke="#5a4a2a" stroke-width="4"/><circle cx="220" cy="140" r="16" fill="#f4ecd8"/><path d="M220 118V60" stroke="#5a3a1c" stroke-width="5"/><rect x="214" y="54" width="12" height="10" fill="#3a2410"/></g>' +
      '<g><circle cx="290" cy="156" r="22" fill="#b0412e" stroke="#3a1a08" stroke-width="3"/><circle cx="290" cy="156" r="16" fill="#f4ecd8"/><path d="M276 176l-6 0M304 176l6 0" stroke="#999" stroke-width="3"/></g>' +
      [70, 110, 330, 360].map((x, i) => '<rect x="' + (x - 3) + '" y="198" width="6" height="18" fill="#f4ecd8"/><path d="M' + x + ' 198q-4 -8 0 -14q4 6 0 14z" fill="#ffcf5a" class="mnsFlick' + (i % 3 === 1 ? ' mnsF2' : i % 3 === 2 ? ' mnsF3' : '') + '"/>').join('') +
      '<g fill="' + GOLD + '"><text x="180" y="70" class="mnsNote" font-size="20">&#9834;</text><text x="250" y="60" class="mnsNote mnsN2" font-size="18">&#9835;</text><text x="120" y="70" class="mnsNote mnsN3" font-size="18">&#9834;</text></g>' +
      '<path d="M0 100q100 -18 200 0t200 0" stroke="#5a4020" stroke-width="1" fill="none"/>' +
      [30, 80, 130, 180, 230, 280, 330, 380].map((x, i) => bulb(x, 100 + (i % 2 ? -4 : 2), i)).join(''),
      '');
  }

  /* 4. A Gentlemen of the Road Stopover: field stage at dusk, bunting and festoon lights over the crowd, hills behind */
  function mnsstopover() {
    let crowd = '';
    for (let i = 0; i < 44; i++) { const x = 6 + i * 9.2, y = 214 + (i % 3) * 5; crowd += '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#1a1410"/><rect x="' + (x - 5) + '" y="' + (y + 3) + '" width="10" height="24" fill="#1a1410"/>'; }
    const cols = ['#b0412e', GOLD, '#2f6f8f', '#7a9a4a'];
    let flags = '';
    for (let i = 0; i < 16; i++) flags += '<path d="M' + (8 + i * 25) + ' ' + (60 + Math.abs(8 - i) * 2) + 'l10 0 -5 12z" fill="' + cols[i % 4] + '" class="mnsSway' + (i % 2 ? ' mnsW2' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mnsSk4)"/>' +
      '<path d="M0 150q80 -40 160 -10t140 -20 100 10v130H0z" fill="#4a6a3a"/><path d="M0 170q100 -24 200 -6t200 -8v104H0z" fill="#5d7f45"/>' +
      '<rect x="110" y="110" width="180" height="90" fill="#2a1a10"/><path d="M100 110l100 -40 100 40z" fill="#b0412e" stroke="#5a1a10" stroke-width="2"/>' +
      '<rect x="120" y="120" width="160" height="60" fill="#3a2414"/>' +
      '<g class="mnsTw"><path d="M150 120l-20 60h40z" fill="#ffe08a" opacity=".25"/></g><g class="mnsTw mnsT2"><path d="M250 120l20 60h-40z" fill="#ffe08a" opacity=".25"/></g>' +
      '<g fill="#111"><rect x="150" y="160" width="6" height="20"/><rect x="196" y="156" width="6" height="24"/><rect x="244" y="160" width="6" height="20"/></g>' +
      '<path d="M0 56q100 30 200 16t200 -16" stroke="#3a2a1a" stroke-width="1.5" fill="none"/>' + flags +
      '<path d="M0 96q100 22 200 12t200 -12" stroke="#3a2a1a" stroke-width="1" fill="none"/>' +
      [20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => bulb(x, 98 + Math.round(10 - Math.abs(200 - x) / 22), i)).join('') + crowd,
      sky('mnsSk4', '#3a2a5a', '#e89a5a'));
  }

  /* 5. Southside Common at Woodhayes Road: green street signs, their name tagged on an old brick wall, the Windmill on the Common behind */
  function mnscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mnsSk5)"/>' + bird(80, 40) + bird(220, 60, ' mnsBd2') +
      '<path d="M0 160q100 -30 200 -20t200 -10v100H0z" fill="#6f9a4a"/>' +
      '<g transform="translate(250 30)"><path d="M10 120l8 -70h34l8 70z" fill="#efe8d6" stroke="#8a8170" stroke-width="2"/><path d="M14 50q21 -26 42 0z" fill="#5a5a5a"/>' +
      '<rect x="28" y="96" width="14" height="24" fill="#5a3a24"/><rect x="30" y="66" width="10" height="12" fill="#7a7468"/>' +
      '<g class="mnsSail" transform="translate(35 44)"><g fill="#f4f1ea" stroke="#555" stroke-width="1.5"><rect x="-4" y="-46" width="8" height="42"/><rect x="-4" y="4" width="8" height="42"/><rect x="-46" y="-4" width="42" height="8"/><rect x="4" y="-4" width="42" height="8"/></g><circle r="5" fill="#444"/></g></g>' +
      '<rect x="0" y="150" width="250" height="80" fill="#8a4a32"/>' +
      '<g stroke="#6e3626" stroke-width="1">' + [160, 172, 184, 196, 208, 220].map(y => '<path d="M0 ' + y + 'h250"/>').join('') + '</g>' +
      '<path d="M0 150h250" stroke="#5a2a1a" stroke-width="5"/>' +
      tag('MUMFORD &amp; SONS', 12, 196, 22, GOLD, -4) + tag('SW19', 40, 222, 16, '#f4f4f4', -3) +
      '<g class="mnsSpray"><circle cx="226" cy="186" r="2" fill="' + GOLD + '"/></g><g class="mnsSpray mnsSp2"><circle cx="232" cy="180" r="2" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#55524c"/><path d="M0 232h400" stroke="#888" stroke-width="2"/>' +
      '<rect x="356" y="70" width="5" height="160" fill="#2f3a33"/>' +
      '<rect x="270" y="72" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">SOUTHSIDE COMMON</text>' +
      '<rect x="286" y="96" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="339" y="110" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">WOODHAYES RD</text>',
      sky('mnsSk5', '#8fb8d8', '#e6eef2'));
  }

  window.SCENES = { mnsstation, mnscourt, mnsfolk, mnsstopover, mnscorner };
})();
