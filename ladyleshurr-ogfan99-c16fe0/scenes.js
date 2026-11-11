/* Lady Leshurr scenes (Regions tab: UK + EUROPE; Kingshurst, Solihull, on the east edge of Birmingham - Melesha O'Garro,
   born and raised in Kingshurst, Kittitian family; "Queen's Speech" freestyle series, "Queen Lesh", "Lesh", "bants").
   1 Marston Green station - the nearest rail stop to Kingshurst: two open-air platforms, footbridge, gold-and-black West Midlands Railway train.
   2 Birmingham Airport - right next door to Kingshurst and Marston Green: runway lights, control tower, a jet climbing out.
   3 The Rotunda on New Street - the round tower over Birmingham city centre lit up at night.
   4 Birmingham International Carnival, Handsworth Park - steel pans and costumes for her Caribbean roots.
   5 Kingshurst Way at Haselour Road, B37 - green street signs, LESHURR tagged, jets over the rooftops behind.
   CSS classes prefixed "lls" (the page's anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes llsCloud{0%{transform:translateX(-120px)}100%{transform:translateX(440px)}}.llsCloud{animation:llsCloud 34s linear infinite}.llsC2{animation-delay:-17s}' +
    '@keyframes llsJet{0%{transform:translate(-60px,40px)}100%{transform:translate(460px,-120px)}}.llsJet{animation:llsJet 9s linear infinite}' +
    '@keyframes llsJet2{0%{transform:translate(460px,-10px)}100%{transform:translate(-80px,30px)}}.llsJet2{animation:llsJet2 14s linear infinite}' +
    '@keyframes llsTw{0%,100%{opacity:1}50%{opacity:.2}}.llsTw{animation:llsTw 1.4s ease-in-out infinite}.llsT2{animation-delay:-.5s}.llsT3{animation-delay:-1s}' +
    '@keyframes llsSweep{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}.llsSweep{transform-box:fill-box;transform-origin:50% 100%;animation:llsSweep 4s ease-in-out infinite}' +
    '@keyframes llsBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.llsBounce{animation:llsBounce .9s ease-in-out infinite}.llsB2{animation-delay:-.45s}' +
    '@keyframes llsFeather{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.llsFeather{transform-box:fill-box;transform-origin:50% 100%;animation:llsFeather 1.2s ease-in-out infinite}.llsF2{animation-delay:-.6s}' +
    '@keyframes llsNote{0%{opacity:0;transform:translate(0,0)}30%{opacity:1}100%{opacity:0;transform:translate(10px,-34px)}}.llsNote{animation:llsNote 2.2s ease-out infinite}.llsN2{animation-delay:-1.1s}' +
    '@keyframes llsSpray{0%{opacity:.9;transform:translate(0,0)}100%{opacity:0;transform:translate(8px,-18px)}}.llsSpray{animation:llsSpray 1.3s ease-out infinite}.llsSp2{animation-delay:-.6s}' +
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
  const GOLD = "#f5b700", PURP = "#7b2fbf", PINK = "#ff4fa3", BRICK = "#9a4b36";
  const cloud = (x, y, s, cls, col) => '<g class="llsCloud' + (cls || '') + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + (col || '#d6dbe0') + '" opacity=".85"><ellipse cx="0" cy="0" rx="30" ry="10"/><ellipse cx="18" cy="-6" rx="18" ry="10"/><ellipse cx="-14" cy="-4" rx="14" ry="8"/></g></g>';
  const jet = (s, flip) => '<g transform="scale(' + (flip ? -s : s) + ' ' + s + ')"><path d="M0 0h54q8 0 10 4q-2 4 -10 4H0q-4 -4 0 -8z" fill="#f4f6f8" stroke="#5a6470" stroke-width="1.2"/>' +
    '<path d="M22 4l-10 16h8l16 -16z" fill="#c9d0d8" stroke="#5a6470"/><path d="M22 4l-6 -10h6l12 10z" fill="#c9d0d8" stroke="#5a6470"/><path d="M2 0l-6 -12h6l8 12z" fill="' + PURP + '"/>' +
    '<g fill="#2c3e50"><circle cx="30" cy="3" r="1"/><circle cx="35" cy="3" r="1"/><circle cx="40" cy="3" r="1"/><circle cx="45" cy="3" r="1"/></g><path d="M56 2h6" stroke="#2c3e50" stroke-width="2"/></g>';

  /* 1. Marston Green station: open-air platforms, footbridge, gold-and-black West Midlands Railway train pulling in */
  function llsstation() {
    let wins = '';
    for (let x = 44; x < 292; x += 32) wins += '<rect x="' + x + '" y="134" width="22" height="18" rx="3" fill="#1d2630"/>';
    const train = '<g class="anim-train">' +
      '<rect x="18" y="122" width="294" height="70" rx="9" fill="#2a2d31" stroke="#111" stroke-width="2"/>' +
      '<rect x="18" y="122" width="294" height="9" rx="5" fill="#a9b0b6"/>' +
      '<rect x="18" y="158" width="294" height="12" fill="' + GOLD + '"/>' +
      '<path d="M312 122q28 6 30 36v34h-30z" fill="' + GOLD + '" stroke="#111" stroke-width="2"/>' +
      '<path d="M316 130q18 4 20 24h-20z" fill="#1d2630"/>' +
      '<circle cx="332" cy="180" r="4" fill="#fff6c8"/>' + wins +
      '<rect x="110" y="134" width="14" height="36" fill="#3c3f44" stroke="#111"/><rect x="214" y="134" width="14" height="36" fill="#3c3f44" stroke="#111"/>' +
      '<g fill="#111"><circle cx="66" cy="194" r="7"/><circle cx="96" cy="194" r="7"/><circle cx="238" cy="194" r="7"/><circle cx="268" cy="194" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#llsSk1)"/>' + cloud(60, 34, 1) + cloud(250, 52, .8, ' llsC2') +
      '<g fill="#6f8a5a"><path d="M0 112q40 -26 90 -8t90 -6t110 4t110 -6v20H0z"/></g>' +
      '<g fill="#56704a"><circle cx="30" cy="100" r="16"/><circle cx="62" cy="96" r="20"/><circle cx="350" cy="98" r="18"/><circle cx="382" cy="102" r="14"/></g>' +
      '<path d="M0 108h400v14H0z" fill="#8d8b85"/><path d="M0 108h400" stroke="#fff" stroke-width="2" opacity=".6"/>' +
      '<g fill="#3c4650"><rect x="300" y="60" width="8" height="50"/><rect x="380" y="60" width="8" height="50"/><rect x="296" y="56" width="96" height="10"/></g>' +
      '<path d="M296 56h96v-6h-96z" fill="#5b6872"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#3d3d3a"/><rect x="0" y="192" width="400" height="7" fill="' + GOLD + '"/>' +
      '<rect x="0" y="199" width="400" height="61" fill="#4a4a46"/>' + train +
      '<rect x="118" y="16" width="200" height="40" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<rect x="128" y="25" width="38" height="22" rx="4" fill="' + GOLD + '"/><text x="147" y="41" text-anchor="middle" ' + F + ' font-size="12" fill="#111">WMR</text>' +
      '<text x="174" y="43" ' + F + ' font-size="17" fill="#fff">Marston Green</text>' +
      '<rect x="124" y="56" width="4" height="52" fill="#333"/><rect x="308" y="56" width="4" height="52" fill="#333"/>',
      sky('llsSk1', '#7d97b4', '#d3dde6'));
  }

  /* 2. Birmingham Airport next to Kingshurst: runway with edge lights, control tower, terminal, a jet climbing out */
  function llsairport() {
    let edge = '';
    for (let x = 10; x < 400; x += 26) edge += '<circle cx="' + x + '" cy="214" r="2.4" fill="#ffe27a" class="llsTw' + (x % 3 === 0 ? ' llsT2' : x % 3 === 1 ? ' llsT3' : '') + '"/><circle cx="' + (x + 8) + '" cy="246" r="2.4" fill="#ffe27a" class="llsTw' + (x % 3 === 1 ? ' llsT2' : '') + '"/>';
    let dash = '';
    for (let x = 0; x < 400; x += 40) dash += '<rect x="' + x + '" y="229" width="22" height="3" fill="#f4f4f4"/>';
    let glass = '';
    for (let x = 34; x < 240; x += 16) glass += '<rect x="' + x + '" y="150" width="12" height="22" fill="#8fb7d4" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#llsSk2)"/>' + cloud(80, 40, 1.1) + cloud(300, 30, .9, ' llsC2') +
      '<rect x="20" y="140" width="240" height="44" fill="#c8ccd2" stroke="#7a828c" stroke-width="2"/>' + glass +
      '<path d="M14 140h252l-8 -12H22z" fill="#5d6a78"/>' +
      '<rect x="290" y="70" width="18" height="114" fill="#d6dade" stroke="#7a828c" stroke-width="2"/>' +
      '<path d="M276 70h46l-6 -22h-34z" fill="#2c3e50" stroke="#7a828c" stroke-width="2"/>' +
      '<rect x="284" y="52" width="30" height="12" fill="#8fd0e8" opacity=".8"/><path d="M299 48v-14" stroke="#555" stroke-width="2"/><circle cx="299" cy="32" r="3" fill="#ff4f4f" class="llsTw"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#55585c"/><rect x="0" y="184" width="400" height="20" fill="#6b8a52"/>' + dash + edge +
      '<g class="llsJet"><g transform="translate(0 150) rotate(-18)">' + jet(1.3) + '</g></g>',
      sky('llsSk2', '#5fa3d9', '#cfe6f5'));
  }

  /* 3. The Rotunda on New Street at night: the round tower with its grid of lit windows, city lights below */
  function llsrotunda() {
    let rows = '';
    for (let y = 70; y < 222; y += 10) {
      for (let i = 0; i < 9; i++) {
        const x = 166 + i * 8 + (i > 4 ? 0 : 0);
        rows += '<rect x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((i * 7 + y) % 5 === 0 ? '#2a2236' : '#ffe9a8') + '"' + ((i + y) % 11 === 0 ? ' class="llsTw llsT2"' : '') + '/>';
      }
    }
    let stars = '';
    for (let i = 0; i < 26; i++) stars += '<circle cx="' + ((i * 61) % 400) + '" cy="' + (8 + (i * 23) % 70) + '" r="1.1" fill="#fff" class="llsTw' + (i % 3 === 1 ? ' llsT2' : i % 3 === 2 ? ' llsT3' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#llsSk3)"/>' + stars +
      '<g fill="#1f1830"><rect x="0" y="150" width="60" height="110"/><rect x="64" y="120" width="44" height="140"/><rect x="252" y="130" width="60" height="130"/><rect x="316" y="104" width="40" height="156"/><rect x="358" y="160" width="42" height="100"/></g>' +
      '<g fill="#ffd27a" opacity=".7"><rect x="10" y="164" width="6" height="6"/><rect x="34" y="184" width="6" height="6"/><rect x="74" y="140" width="6" height="6"/><rect x="92" y="170" width="6" height="6"/><rect x="266" y="150" width="6" height="6"/><rect x="290" y="186" width="6" height="6"/><rect x="326" y="124" width="6" height="6"/><rect x="340" y="160" width="6" height="6"/></g>' +
      '<rect x="156" y="60" width="88" height="170" rx="4" fill="url(#llsCyl)" stroke="#2a2236" stroke-width="2"/>' +
      '<path d="M156 60h88" stroke="#a89cc0" stroke-width="3"/>' +
      rows + '<rect x="156" y="60" width="88" height="170" fill="url(#llsShade)"/>' +
      '<ellipse cx="200" cy="60" rx="44" ry="6" fill="#5b5070" stroke="#2a2236" stroke-width="2"/><path d="M156 230q44 10 88 0" fill="none" stroke="#2a2236" stroke-width="2"/>' + '<rect x="150" y="44" width="100" height="16" rx="8" fill="#2a2236" stroke="' + PINK + '" stroke-width="2"/>' +
      '<rect x="158" y="49" width="84" height="6" rx="2" fill="' + PINK + '" class="llsTw"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#141018"/><path d="M0 232h400" stroke="#ffcf6a" stroke-width="2" opacity=".6"/>' +
      '<g class="llsJet2"><g transform="translate(0 30)">' + jet(.7, 1) + '</g></g>',
      sky('llsSk3', '#120b24', '#3b2a5e') + '<linearGradient id="llsCyl" x1="0" x2="1"><stop offset="0" stop-color="#3a3348"/><stop offset=".35" stop-color="#6a6080"/><stop offset="1" stop-color="#2a2236"/></linearGradient><linearGradient id="llsShade" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".45"/><stop offset=".3" stop-color="#fff" stop-opacity=".08"/><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient>');
  }

  /* 4. Birmingham International Carnival, Handsworth Park: steel pan drummer, feathered costumes, bunting, crowd */
  function llscarnival() {
    let bunt = '';
    const cols = [GOLD, PINK, '#2bb673', PURP, '#2f8fe0'];
    for (let i = 0; i < 20; i++) bunt += '<path d="M' + (i * 21) + ' 30l10 14 10 -14z" fill="' + cols[i % 5] + '"/>';
    let crowd = '';
    for (let i = 0; i < 40; i++) {
      const x = 6 + i * 10, y = 214 + (i % 3) * 5;
      crowd += '<g class="llsBounce' + (i % 2 ? ' llsB2' : '') + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="#1a1420"/><rect x="' + (x - 5) + '" y="' + (y + 3) + '" width="10" height="26" fill="#1a1420"/></g>';
    }
    const dancer = (x, c, cls) => '<g class="llsFeather' + cls + '"><path d="M' + (x - 30) + ' 150q30 -100 60 0z" fill="' + c + '" opacity=".9"/><path d="M' + (x - 20) + ' 150q20 -70 40 0z" fill="#fff3b0" opacity=".7"/></g>' +
      '<g fill="' + c + '"><rect x="' + (x - 7) + '" y="150" width="14" height="34" rx="4"/><path d="M' + (x - 7) + ' 184l-6 22h8l5 -18 5 18h8l-6 -22z"/></g>' +
      '<rect x="' + (x - 5) + '" y="136" width="10" height="14" rx="5" fill="#2a1a20"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#llsSk4)"/>' + cloud(90, 70, .9) + cloud(300, 60, 1, ' llsC2') +
      '<path d="M0 30h400" stroke="#555" stroke-width="1.5"/>' + bunt +
      '<g fill="#3f7a3a"><circle cx="20" cy="150" r="34"/><circle cx="70" cy="140" r="30"/><circle cx="340" cy="144" r="32"/><circle cx="390" cy="152" r="28"/></g>' +
      '<rect x="0" y="170" width="400" height="90" fill="#5d9a48"/>' +
      dancer(120, PINK, '') + dancer(280, PURP, ' llsF2') +
      '<g><ellipse cx="200" cy="186" rx="34" ry="10" fill="#d7dde3" stroke="#6b737c" stroke-width="2"/><ellipse cx="200" cy="184" rx="26" ry="6" fill="#aeb6bf"/>' +
      '<path d="M172 190v22M228 190v22" stroke="#6b737c" stroke-width="3"/>' +
      '<rect x="193" y="150" width="14" height="30" rx="4" fill="' + GOLD + '"/><rect x="195" y="136" width="10" height="14" rx="5" fill="#2a1a20"/>' +
      '<path d="M193 160l-12 18M207 160l12 18" stroke="#2a1a20" stroke-width="4"/></g>' +
      '<g class="llsNote"><text x="228" y="150" ' + F + ' font-size="16" fill="' + GOLD + '">&#9835;</text></g>' +
      '<g class="llsNote llsN2"><text x="160" y="146" ' + F + ' font-size="14" fill="#fff">&#9834;</text></g>' + crowd,
      sky('llsSk4', '#4aa8e8', '#bfe3f7'));
  }

  /* 5. Kingshurst Way at Haselour Road, B37: green street signs, LESHURR tagged on the parade wall, jets over the rooftops */
  function llscorner() {
    let bricks = '';
    for (let y = 150; y < 230; y += 10) bricks += '<path d="M200 ' + y + 'h200" stroke="#7a3826" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#llsSk5)"/>' + cloud(70, 40, 1) + cloud(260, 30, .8, ' llsC2') +
      '<g class="llsJet"><g transform="translate(0 110) rotate(-14)">' + jet(.9) + '</g></g>' +
      '<g fill="#8a5a46"><path d="M0 130l30 -22 30 22z"/><path d="M60 130l30 -22 30 22z"/><path d="M120 130l30 -22 30 22z"/></g>' +
      '<g fill="#c9b8a2"><rect x="4" y="130" width="52" height="40"/><rect x="64" y="130" width="52" height="40"/><rect x="124" y="130" width="52" height="40"/></g>' +
      '<g fill="#3a3f46"><rect x="14" y="140" width="12" height="12"/><rect x="34" y="140" width="12" height="12"/><rect x="74" y="140" width="12" height="12"/><rect x="94" y="140" width="12" height="12"/><rect x="134" y="140" width="12" height="12"/><rect x="154" y="140" width="12" height="12"/></g>' +
      '<rect x="0" y="170" width="200" height="60" fill="#7c8a6a"/>' +
      '<rect x="200" y="140" width="200" height="90" fill="' + BRICK + '"/>' + bricks +
      '<path d="M200 140h200v-8H200z" fill="#4a3a32"/>' +
      tag('LESHURR', 214, 196, 30, GOLD, -5) + tag('QUEEN LESH', 250, 222, 15, PINK, -3) +
      '<g class="llsSpray"><circle cx="380" cy="186" r="2" fill="' + GOLD + '"/></g><g class="llsSpray llsSp2"><circle cx="386" cy="180" r="2" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#55524c"/><path d="M0 232h400" stroke="#888" stroke-width="2"/>' +
      '<rect x="186" y="62" width="5" height="168" fill="#2f3a33"/>' +
      '<rect x="112" y="64" width="150" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="187" y="78" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">KINGSHURST WAY</text>' +
      '<rect x="128" y="88" width="122" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="189" y="102" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">HASELOUR ROAD</text>',
      sky('llsSk5', '#8fb2d2', '#e2e9ef'));
  }

  window.SCENES = { llsstation, llsairport, llsrotunda, llscarnival, llscorner };
})();
