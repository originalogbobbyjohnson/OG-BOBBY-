/* Ol' Dirty Bastard game (NYC map, Brooklyn: Bed-Stuy / Fort Greene). The C pulling into Franklin Av under Fulton St (transfer to the S Franklin Av Shuttle),
   the Prison Ship Martyrs Monument in Fort Greene Park (he was born in Fort Greene), the Brooklyn Zoo (the sea lion pool at Prospect Park Zoo, a ride down the
   Franklin shuttle), Ebbets Field, "the home of the Dodgers, Brooklyn squad" (Shimmy Shimmy Ya), and Putnam Av & Franklin Av, co-named ODB Jones Way in 2026,
   with the Franklin Av Shuttle's embankment behind. 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes flame{0%,100%{transform:scale(1,1)}50%{transform:scale(.85,1.15)}}.flame{transform-box:fill-box;transform-origin:50% 100%;animation:flame .5s ease-in-out infinite}' +
    '@keyframes fly{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.bird{animation:fly 9s linear infinite}.bird2{animation-delay:-4.5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.bob{animation:bob 1.3s ease-in-out infinite}.bob2{animation-delay:-.65s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.wv{animation:wave 3s ease-in-out infinite}' +
    '@keyframes ball{0%{transform:translate(0,0)}50%{transform:translate(70px,-40px)}100%{transform:translate(140px,0)}}.ballf{animation:ball 1.8s linear infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.3) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ACE = "#0039a6", SHUT = "#808183", AMBER = "#ffb627", CORAL = "#ff6f59", CREAM = "#f4ead8", SIGN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';

  /* 1. Franklin Av on the Fulton St line, underground: white tile, a maroon trim band, the black hanging sign with the blue C and the gray S
        (transfer to the Franklin Av Shuttle), the C sliding in */
  function station() {
    let tile = "";
    for (let y = 30; y < 150; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#d9dcd6" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tile += '<path d="M' + x + ' 26v124" stroke="#e3e5df" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#f1f0e9"/>' + tile +
      '<rect x="0" y="0" width="400" height="26" fill="#3a3d40"/>' +
      [8, 92, 176, 260, 344].map(x => '<rect x="' + x + '" y="10" width="44" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      '<rect x="0" y="50" width="400" height="12" fill="#6b1e2a"/><rect x="0" y="53" width="400" height="6" fill="#b5893f"/>' +
      /* mosaic name tablet */
      '<rect x="36" y="72" width="170" height="30" fill="#b5893f"/><rect x="40" y="76" width="162" height="22" fill="#6b1e2a"/>' +
      '<text x="121" y="92" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="2">FRANKLIN AV</text>' +
      /* black hanging sign */
      '<rect x="130" y="28" width="200" height="22" rx="2" fill="#111"/><rect x="130" y="28" width="200" height="2.5" fill="#fff"/>' +
      '<text x="140" y="44" ' + font + ' font-size="12" fill="#fff">Franklin Av</text>' + bullet(290, 39, "C", ACE, false, 8) + bullet(312, 39, "S", SHUT, false, 8) +
      '<rect x="228" y="76" width="96" height="22" rx="2" fill="#111"/><text x="236" y="91" ' + font + ' font-size="8" fill="#fff">Transfer</text>' + bullet(310, 87, "S", SHUT, false, 7) +
      /* columns */
      [352, 388].map(x => '<rect x="' + (x - 6) + '" y="26" width="12" height="150" fill="#2b2f33"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="114" width="310" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="0" y="152" width="316" height="4" fill="' + ACE + '"/>' +
        '<rect x="296" y="124" width="16" height="24" rx="2" fill="#bcd3ea"/>' + bullet(304, 163, "C", ACE, false, 9) +
        '<circle cx="16" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#6d6f73"/>' +
      (() => { let d = ""; for (let x = 0; x < 400; x += 16) d += '<rect x="' + x + '" y="178" width="8" height="6" fill="#c99a06"/>'; return d; })() +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#e8e3d8" letter-spacing="3">FULTON ST · BED-STUY</text>',
      '');
  }

  /* 2. Fort Greene Park: the Prison Ship Martyrs Monument, a tall pale granite Doric column with the bronze urn and its flame on top,
        the wide granite stair up the hill, trees and a pigeon flock */
  function fortgreene() {
    let steps = "";
    for (let i = 0; i < 7; i++) steps += '<rect x="' + (110 - i * 10) + '" y="' + (176 + i * 9) + '" width="' + (180 + i * 20) + '" height="9" fill="' + (i % 2 ? "#cfc9bb" : "#ddd7c8") + '"/>';
    const tree = (x, y, r) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (210 - y) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x - r / 2) + '" cy="' + (y + 6) + '" r="' + (r * .7) + '" fill="#356b31"/>';
    const bird = cls => '<g class="bird ' + cls + '"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#2b2b2b" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#f2)"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5c9a4a"/>' +
      tree(40, 110, 30) + tree(90, 130, 24) + tree(330, 112, 30) + tree(372, 130, 24) +
      /* plaza + stairs */
      '<rect x="120" y="164" width="160" height="14" fill="#e6e0d1"/>' + steps +
      /* the column */
      '<rect x="182" y="150" width="36" height="16" fill="#d8d2c2"/>' +
      '<rect x="188" y="40" width="24" height="112" fill="#e9e4d6"/>' +
      '<path d="M193 44v106M200 44v106M207 44v106" stroke="#cfc8b6" stroke-width="1.2"/>' +
      '<rect x="184" y="34" width="32" height="8" fill="#d8d2c2"/>' +
      /* bronze urn with the flame */
      '<path d="M190 34q0-10 10-12q10 2 10 12z" fill="#5f7d5a" stroke="#3b4f38" stroke-width="1.5"/><rect x="196" y="18" width="8" height="5" fill="#5f7d5a"/>' +
      '<path class="flame" d="M200 2q7 8 3 16h-6q-4-8 3-16z" fill="#ffb627"/><path class="flame" d="M200 8q3 5 1 10h-2q-2-5 1-10z" fill="#fff1b8"/>' +
      bird("") + bird("bird2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="3">FORT GREENE PARK</text>',
      sky("f2", "#5aa7e8", "#cfe8fb"));
  }

  /* 3. The Brooklyn Zoo: the sea lion pool at Prospect Park Zoo, the round blue pool with a rock island, two sea lions bobbing, the arcaded brick
        zoo buildings behind */
  function zoo() {
    let waves = "";
    for (let x = 0; x < 440; x += 40) waves += '<path d="M' + x + ' 0q10-5 20 0t20 0" stroke="#e6f8ff" stroke-width="2" fill="none" opacity=".7"/>';
    const seal = (x, y, cls, flip) => '<g class="bob ' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + (flip ? -1 : 1) + ' 1)">' +
      '<path d="M-22 10q4-26 22-30q10-2 12 8q2 8-6 10q-6 14-28 12z" fill="#4a3b33"/><circle cx="4" cy="-14" r="1.8" fill="#000"/><path d="M10 -10l8 -1M10 -8l8 1" stroke="#cbb" stroke-width=".8"/></g></g>';
    let arches = "";
    for (let x = 30; x < 380; x += 44) arches += '<path d="M' + x + ' 104v-18q14-14 28 0v18z" fill="#2b2f3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#z3)"/>' +
      '<rect x="10" y="62" width="380" height="50" fill="#a8553a"/><path d="M0 62l200-26 200 26z" fill="#7d3b28"/>' + arches +
      '<rect x="10" y="108" width="380" height="6" fill="#e6d3b3"/>' +
      '<rect x="0" y="114" width="400" height="146" fill="#cbbfa7"/>' +
      '<ellipse cx="200" cy="190" rx="180" ry="58" fill="#8d8270"/><ellipse cx="200" cy="190" rx="168" ry="50" fill="#2fa3d6"/>' +
      '<clipPath id="zc"><ellipse cx="200" cy="190" rx="168" ry="50"/></clipPath>' +
      '<g clip-path="url(#zc)"><g transform="translate(0,176)"><g class="wv">' + waves + '</g></g><g transform="translate(0,210)"><g class="wv">' + waves + '</g></g></g>' +
      '<path d="M170 196q30-40 60 0z" fill="#8a7f6b"/><path d="M180 196q20-22 40 0z" fill="#9c917c"/>' +
      seal(118, 196, "", false) + seal(286, 198, "bob2", true) +
      '<rect x="10" y="117" width="120" height="18" rx="2" fill="#2a2f3a"/><text x="70" y="129.5" text-anchor="middle" ' + font + ' font-size="10" fill="' + AMBER + '" letter-spacing="2">BROOKLYN ZOO</text>',
      sky("z3", "#79bff2", "#d9eefc"));
  }

  /* 4. Ebbets Field, the home of the Dodgers: the curved red brick rotunda with tall arched windows and the limestone trim, the light towers,
        a fly ball arcing over */
  function ebbets() {
    let win = "";
    for (let x = 64; x < 340; x += 30) win += '<path d="M' + x + ' 160v-58q10-14 20 0v58z" fill="#1d2a3a" stroke="#e6dcc4" stroke-width="2"/>';
    let brick = "";
    for (let y = 92; y < 200; y += 8) brick += '<path d="M44 ' + y + 'h312" stroke="#8a3424" stroke-width="1"/>';
    const tower = x => '<rect x="' + (x - 2) + '" y="20" width="4" height="70" fill="#4b4f57"/><rect x="' + (x - 16) + '" y="10" width="32" height="14" fill="#4b4f57"/>' +
      [0, 1, 2, 3].map(i => '<circle class="bl bl' + (i % 3 + 1) + '" cx="' + (x - 11 + i * 7.3) + '" cy="17" r="2.6" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#e4)"/>' + tower(30) + tower(370) +
      '<path d="M44 200V92q156-40 312 0v108z" fill="#a8432f"/>' + brick +
      '<path d="M44 92q156-40 312 0" stroke="#e6dcc4" stroke-width="6" fill="none"/>' +
      '<path d="M44 168h312" stroke="#e6dcc4" stroke-width="5"/>' + win +
      '<rect x="150" y="168" width="100" height="32" fill="#e6dcc4"/><rect x="164" y="174" width="72" height="26" fill="#2b2f3a"/>' +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="13" fill="' + CREAM + '" letter-spacing="3">EBBETS FIELD</text>' +
      '<g class="ballf"><circle cx="110" cy="70" r="4" fill="#fff" stroke="#c22" stroke-width="1"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="200" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="230" width="46" height="14" rx="4" fill="' + ACE + '"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="36" cy="244" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="236" width="40" height="13" rx="4" fill="' + AMBER + '"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="30" cy="249" r="4" fill="#111"/></g>' +
      tag("BROOKLYN SQUAD", 112, 226, 18, AMBER, -3),
      sky("e4", "#ff9e5e", "#ffd9a8"));
  }

  /* 5. Putnam Av & Franklin Av in Bed-Stuy, ODB Jones Way: green street signs, a wall tagged ODB, brownstones, and the Franklin Av Shuttle
        rolling along its embankment behind */
  function corner() {
    let bs = "";
    [[0, "#6b3b2a"], [70, "#7a4532"], [140, "#5e3424"]].forEach(([x, c]) => {
      bs += '<rect x="' + x + '" y="70" width="70" height="90" fill="' + c + '"/><rect x="' + x + '" y="66" width="70" height="6" fill="#c9b79a"/>';
      for (let r = 0; r < 2; r++) for (let k = 0; k < 3; k++) bs += '<rect' + ((r + k + x) % 4 === 0 ? ' class="flk"' : '') + ' x="' + (x + 8 + k * 21) + '" y="' + (80 + r * 30) + '" width="12" height="20" fill="' + ((r + k) % 2 ? "#ffe7a8" : "#2e2a3a") + '" stroke="#c9b79a" stroke-width="1.5"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) +
      /* shuttle embankment + train */
      '<rect x="0" y="48" width="400" height="14" fill="#5d5a52"/><path d="M0 62h400" stroke="#3d3a33" stroke-width="3"/>' +
      '<g class="anim-train"><rect x="60" y="28" width="200" height="20" rx="3" fill="#c9ced6"/>' +
        [70, 100, 130, 160, 190, 220].map(x => '<rect x="' + x + '" y="32" width="18" height="9" fill="#ffe7a8"/>').join("") + bullet(250, 38, "S", SHUT, false, 8) + '</g>' +
      bs +
      /* tag wall */
      '<rect x="0" y="150" width="250" height="78" fill="#4d4b52"/>' +
      (() => { let b = ""; for (let y = 156; y < 228; y += 8) b += '<path d="M0 ' + y + 'h250" stroke="#3f3d44" stroke-width="1"/>'; return b; })() +
      tag("ODB", 14, 210, 52, AMBER, -6) + tag("OL' DIRTY", 118, 186, 22, CREAM, -4) + tag("BROOKLYN ZOO", 112, 218, 18, CORAL, -3) +
      /* street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + CORAL + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      /* tree */
      '<circle cx="262" cy="124" r="18" fill="#2e5a3a" opacity=".9"/><rect x="260" y="134" width="5" height="94" fill="#3a2a1e"/>' +
      /* sign pole */
      '<rect x="376" y="72" width="5" height="156" fill="#3d4b3f"/><circle class="flk" cx="378" cy="72" r="4" fill="#fff6c2"/>' +
      blade(290, 82, 108, "ODB Jones Way", 11) + blade(300, 106, 98, "Putnam Av") + blade(300, 130, 98, "Franklin Av"),
      sky("c5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { station: station, fortgreene: fortgreene, zoo: zoo, ebbets: ebbets, corner: corner };
})();
