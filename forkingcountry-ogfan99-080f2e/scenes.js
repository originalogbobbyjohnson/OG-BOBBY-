/* forkingcountry scenes (Regions: Memphis + Tennessee; Nashville, by way of Sydney). CSS classes prefixed fkc- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fkcplane{0%{transform:translate(-90px,30px)}100%{transform:translate(470px,-24px)}}.fkc-plane{animation:fkcplane 9s linear infinite}' +
    '@keyframes fkcblink{0%,100%{opacity:.25}50%{opacity:1}}.fkc-blink{animation:fkcblink 1.2s ease-in-out infinite}.fkc-b2{animation-delay:-.4s}.fkc-b3{animation-delay:-.8s}' +
    '@keyframes fkcrip{0%{transform:translateX(0)}100%{transform:translateX(-32px)}}.fkc-rip{animation:fkcrip 3s linear infinite}' +
    '@keyframes fkcboat{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.fkc-boat{animation:fkcboat 16s linear infinite}' +
    '@keyframes fkcwheel{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fkc-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:fkcwheel 2s linear infinite}' +
    '@keyframes fkcbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.fkc-beam{transform-box:fill-box;transform-origin:50% 100%;animation:fkcbeam 4s ease-in-out infinite}.fkc-bm2{animation-delay:-2s}' +
    '@keyframes fkcwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.fkc-wave{animation:fkcwave 1s ease-in-out infinite}.fkc-w2{animation-delay:-.5s}' +
    '@keyframes fkcsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fkc-sp{animation:fkcsp 1.4s ease-out infinite}.fkc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const stars = (n, seed) => { let s = seed, o = ''; for (let i = 0; i < n; i++) { s = (s * 9301 + 49297) % 233280; const x = (s / 233280) * 400; s = (s * 9301 + 49297) % 233280; const y = (s / 233280) * 90; o += '<circle class="fkc-blink ' + (i % 3 ? 'fkc-b' + (i % 3 + 1) : '') + '" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff"/>'; } return o; };
  /* AT&T Building ("the Batman Building"): dark glass tower, pointed crown, two tall spires */
  const batman = (x, base, s, c) => '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')" fill="' + c + '"><rect x="-22" y="-150" width="44" height="150"/><path d="M-22 -150l6 -14h32l6 14z"/><path d="M-16 -164l4 -26l3 26zM16 -164l-4 -26l-3 26z"/><path d="M-9 -164q9 -18 18 0z"/>' +
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="-18" y="' + (-140 + i * 14) + '" width="36" height="2" fill="#000" opacity=".25"/>').join('') + '</g>';
  const skyline = (base, c) => '<g fill="' + c + '"><rect x="40" y="' + (base - 70) + '" width="34" height="70"/><rect x="80" y="' + (base - 96) + '" width="30" height="96"/><path d="M80 ' + (base - 96) + 'l15 -14l15 14z"/>' +
    '<rect x="230" y="' + (base - 84) + '" width="40" height="84"/><rect x="276" y="' + (base - 110) + '" width="26" height="110"/><rect x="306" y="' + (base - 60) + '" width="44" height="60"/><rect x="118" y="' + (base - 58) + '" width="40" height="58"/></g>';

  /* 1. BNA: WeGo 18 Airport bus pulling up at the terminal, a jet climbing out */
  function fkcstop() {
    return svg('<rect width="400" height="260" fill="url(#fkcs1)"/>' + stars(18, 7) +
      '<g class="fkc-plane"><path d="M0 0l44 -6l8 -6l6 0l-4 7l14 -2q6 1 0 3l-14 2l4 7h-6l-8 -5l-44 4z" fill="#e8eef5"/><circle cx="56" cy="-4" r="1.4" class="fkc-blink" fill="#ff4d4d"/></g>' +
      /* terminal: long glass hall under a curved, wing-like roof */
      '<path d="M20 112q180 -36 360 0v10h-360z" fill="#c9d3dc"/><rect x="30" y="122" width="340" height="66" fill="#2c4a63"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => '<rect x="' + (34 + i * 20) + '" y="126" width="16" height="58" fill="#f2c96b" opacity="' + (i % 3 ? .55 : .85) + '"/>').join('') +
      '<rect x="30" y="160" width="340" height="3" fill="#c9d3dc"/>' +
      '<rect x="140" y="98" width="120" height="16" rx="2" fill="#16222e"/><text x="200" y="110" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="1">NASHVILLE INTL</text>' +
      '<rect x="0" y="188" width="400" height="72" fill="#3a3f45"/><rect x="0" y="214" width="400" height="3" fill="#e9d36a" opacity=".7"/>' +
      /* bus stop pole */
      '<rect x="352" y="140" width="4" height="70" fill="#9aa4ad"/><rect x="330" y="120" width="50" height="34" rx="3" fill="#111"/><circle cx="345" cy="137" r="10" fill="#00529b"/><text x="345" y="141" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">18</text><text x="370" y="135" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BNA</text><text x="370" y="144" text-anchor="middle" ' + font + ' font-size="5" fill="#fff">AIRPORT</text>' +
      /* the bus */
      '<g class="anim-train"><rect x="40" y="168" width="230" height="52" rx="8" fill="#f4f6f8"/><rect x="40" y="196" width="230" height="10" fill="#00529b"/><rect x="40" y="206" width="230" height="4" fill="#63b44f"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (52 + i * 32) + '" y="174" width="26" height="18" rx="2" fill="#26323d"/>').join('') +
      '<rect x="248" y="172" width="18" height="30" rx="2" fill="#26323d"/><rect x="200" y="160" width="66" height="10" rx="2" fill="#111"/><text x="233" y="168" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb400">18 AIRPORT</text>' +
      '<circle cx="82" cy="222" r="10" fill="#1a1a1a"/><circle cx="82" cy="222" r="4" fill="#888"/><circle cx="228" cy="222" r="10" fill="#1a1a1a"/><circle cx="228" cy="222" r="4" fill="#888"/><circle cx="268" cy="210" r="3" fill="#fff3b0"/></g>',
      sky('fkcs1', '#14213d', '#5b6f95'));
  }

  /* 2. The Shelby Street pedestrian bridge over the Cumberland, the downtown skyline and the Batman Building */
  function fkcbridge() {
    return svg('<rect width="400" height="260" fill="url(#fkcs2)"/>' +
      skyline(170, '#3a4660') + batman(200, 170, 0.78, '#2a3448') +
      '<rect x="0" y="170" width="400" height="90" fill="#2b4a63"/>' +
      '<g class="fkc-rip">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => '<path d="M' + (i * 32) + ' ' + (200 + (i % 3) * 14) + 'q8 -3 16 0" stroke="#7fa6c4" stroke-width="1.5" fill="none" opacity=".6"/>').join('') + '</g>' +
      '<g class="fkc-boat"><rect x="0" y="182" width="70" height="12" rx="3" fill="#f4f1ea"/><rect x="8" y="172" width="50" height="10" fill="#f4f1ea"/><rect x="12" y="174" width="42" height="5" fill="#2a3448"/><rect x="26" y="162" width="4" height="10" fill="#c0392b"/><rect x="34" y="162" width="4" height="10" fill="#c0392b"/>' +
      '<g class="fkc-wheel"><circle cx="76" cy="186" r="9" fill="none" stroke="#c0392b" stroke-width="3"/><path d="M67 186h18M76 177v18" stroke="#c0392b" stroke-width="2"/></g></g>' +
      /* the truss bridge in front */
      '<rect x="0" y="146" width="400" height="8" fill="#6b6f74"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<path d="M' + (i * 40) + ' 146l20 -26l20 26" stroke="#8a8f95" stroke-width="3" fill="none"/>').join('') +
      '<path d="M0 120h400" stroke="#8a8f95" stroke-width="4"/><rect x="60" y="154" width="14" height="106" fill="#7a7e83"/><rect x="300" y="154" width="14" height="106" fill="#7a7e83"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<circle class="fkc-blink ' + (i % 2 ? 'fkc-b2' : '') + '" cx="' + (20 + i * 52) + '" cy="117" r="2.2" fill="#ffe28a"/>').join(''),
      sky('fkcs2', '#f29e5c', '#6c4e8a'));
  }

  /* 3. The arena downtown: curved glass front, the tall round tower with its spire, spotlights for the Christmas tour */
  function fkcarena() {
    return svg('<rect width="400" height="260" fill="url(#fkcs3)"/>' + stars(14, 31) +
      '<rect class="fkc-beam" x="110" y="20" width="10" height="150" fill="#fff6c8" opacity=".22"/><rect class="fkc-beam fkc-bm2" x="280" y="20" width="10" height="150" fill="#fff6c8" opacity=".22"/>' +
      /* round corner tower with spire */
      '<rect x="56" y="70" width="44" height="130" fill="#8c95a0"/><rect x="56" y="70" width="44" height="130" fill="url(#fkcglass)" opacity=".6"/><path d="M56 70q22 -10 44 0" fill="#b9c1ca"/><rect x="76" y="20" width="4" height="50" fill="#c7cdd4"/><circle class="fkc-blink" cx="78" cy="20" r="2.5" fill="#ff4d4d"/>' +
      /* glass front */
      '<path d="M100 200v-90q130 -30 270 0v90z" fill="#2f4b66"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => '<rect x="' + (106 + i * 20) + '" y="116" width="16" height="80" fill="#9bc3e0" opacity="' + (i % 2 ? .35 : .5) + '"/>').join('') +
      '<rect x="160" y="140" width="150" height="26" rx="3" fill="#111"/><text x="235" y="158" text-anchor="middle" ' + font + ' font-size="13" fill="#ffd56b" letter-spacing="1">CHRISTMAS TOUR</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#262a30"/>' +
      /* crowd holding up lights */
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => '<g class="fkc-wave ' + (i % 2 ? 'fkc-w2' : '') + '"><circle cx="' + (14 + i * 28) + '" cy="226" r="8" fill="#14161a"/><rect x="' + (6 + i * 28) + '" y="232" width="16" height="30" rx="5" fill="#14161a"/><circle cx="' + (24 + i * 28) + '" cy="212" r="2.4" fill="#fff6c8"/></g>').join(''),
      sky('fkcs3', '#0d1630', '#3b2a5a') + '<linearGradient id="fkcglass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".1"/><stop offset=".5" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity=".1"/></linearGradient>');
  }

  /* 4. Main Street, Franklin: red-brick storefronts and the old theatre's neon blade sign */
  function fkcfranklin() {
    const bulbs = (x, y, n) => { let o = ''; for (let i = 0; i < n; i++) o += '<circle class="fkc-blink ' + (i % 3 ? 'fkc-b' + (i % 3 + 1) : '') + '" cx="' + (x + i * 8) + '" cy="' + y + '" r="1.8" fill="#ffe08a"/>'; return o; };
    return svg('<rect width="400" height="260" fill="url(#fkcs4)"/>' + stars(10, 53) +
      '<rect x="0" y="80" width="110" height="130" fill="#8e3b2c"/><rect x="290" y="70" width="110" height="140" fill="#7b3326"/>' +
      [0, 1, 2].map(i => '<rect x="' + (12 + i * 32) + '" y="96" width="20" height="28" fill="#f2c96b" opacity=".7"/><rect x="' + (302 + i * 32) + '" y="88" width="20" height="28" fill="#f2c96b" opacity=".7"/>').join('') +
      /* theatre */
      '<rect x="110" y="60" width="180" height="150" fill="#a8483a"/><rect x="110" y="60" width="180" height="8" fill="#5e2219"/>' +
      '<rect x="186" y="18" width="28" height="104" rx="3" fill="#1b1b1b" stroke="#e94b3c" stroke-width="2"/>' +
      'FRANKLIN'.split('').map((ch, i) => '<text class="fkc-blink ' + (i % 2 ? 'fkc-b2' : '') + '" x="200" y="' + (32 + i * 11.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#ff6a5a">' + ch + '</text>').join('') +
      '<path d="M120 124h160l-10 30h-140z" fill="#1b1b1b"/><rect x="134" y="128" width="132" height="20" fill="#fff4dc"/><text x="200" y="143" text-anchor="middle" ' + font + ' font-size="12" fill="#a8302a">JOY. TONIGHT</text>' + bulbs(126, 152, 19) +
      '<rect x="160" y="160" width="80" height="50" fill="#2a1a14"/><rect x="166" y="166" width="30" height="44" fill="#f2c96b" opacity=".5"/><rect x="204" y="166" width="30" height="44" fill="#f2c96b" opacity=".5"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4d52"/><rect x="0" y="210" width="400" height="5" fill="#8a8d92"/>' +
      '<rect x="40" y="150" width="4" height="60" fill="#222"/><circle cx="42" cy="146" r="7" fill="#fff3b0" class="fkc-blink"/><rect x="356" y="150" width="4" height="60" fill="#222"/><circle cx="358" cy="146" r="7" fill="#fff3b0" class="fkc-blink fkc-b2"/>',
      sky('fkcs4', '#1a2140', '#4b3b6b'));
  }

  /* 5. The corner: green street signs, the name tagged on brick, the Batman Building behind */
  function fkccorner() {
    return svg('<rect width="400" height="260" fill="url(#fkcs5)"/>' + stars(12, 77) +
      skyline(132, '#2e3854') + batman(205, 132, 0.62, '#3c4870') +
      '<rect x="0" y="130" width="400" height="90" fill="#8a3e2e"/>' +
      [0, 1, 2, 3, 4, 5].map(r => '<path d="M0 ' + (138 + r * 14) + 'h400" stroke="#6e2f22" stroke-width="1"/>').join('') +
      tag('FOR KING', 24, 172, 30, '#ffd56b', -4) + tag('+ COUNTRY', 50, 208, 32, '#7fd3e6', -4) +
      '<g class="fkc-sp"><circle cx="300" cy="170" r="3" fill="#ffd56b" opacity=".7"/></g><g class="fkc-sp fkc-sp2"><circle cx="306" cy="176" r="2.4" fill="#7fd3e6" opacity=".7"/></g>' +
      '<rect x="280" y="176" width="16" height="30" rx="3" fill="#d23"/><rect x="283" y="168" width="10" height="8" fill="#ddd"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3d4045"/>' +
      '<rect x="356" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(302, 44, 92, 'Church St') + sign(302, 70, 92, '4th Ave N'),
      sky('fkcs5', '#101a33', '#45507a'));
  }

  window.SCENES = { fkcstop: fkcstop, fkcbridge: fkcbridge, fkcarena: fkcarena, fkcfranklin: fkcfranklin, fkccorner: fkccorner };
})();
