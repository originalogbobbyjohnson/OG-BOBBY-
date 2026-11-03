/* Mustard producer game: South L.A. The E Line at Farmdale, Dorsey High, a family backyard party, the Forum in Inglewood, Obama Blvd & Farmdale Av with the Griffith Observatory. Each scene 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}.neon{animation:neon 3.4s infinite}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes carL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carL 7s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 2s ease-in-out infinite}' +
    '@keyframes wave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.wv{animation:wave 2.6s linear infinite}.wv2{animation-duration:3.4s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3s ease-in-out infinite}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2s ease-in-out infinite}.tw2{animation-delay:-.7s}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.pulse{transform-box:fill-box;transform-origin:50% 50%;animation:pulse .5s ease-in-out infinite}' +
    '@keyframes pad{0%,100%{opacity:.35}50%{opacity:1}}.pad{animation:pad .8s steps(1) infinite}.pd2{animation-delay:-.2s}.pd3{animation-delay:-.4s}.pd4{animation-delay:-.6s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes fall{from{transform:translateY(-20px)}to{transform:translateY(20px)}}.fall{animation:fall .7s linear infinite}.fl2{animation-delay:-.35s}' +
    '@keyframes beam{0%,100%{opacity:.15}50%{opacity:.85}}.beam{animation:beam 3s ease-in-out infinite}' +
    '@keyframes walk{from{transform:translateX(420px)}to{transform:translateX(-40px)}}.walk{animation:walk 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw' + (i % 2 ? " tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const winGrid = (x0, y0, w, h, c1, c2) => { let s = ""; for (let y = y0 + 6; y < y0 + h - 6; y += 11) for (let x = x0 + 4; x < x0 + w - 5; x += 9) s += '<rect x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((x * 5 + y * 3) % 7 ? c1 : c2) + '"/>'; return s; };
  const bricks = (id, c) => '<pattern id="' + id + '" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 10h20M10 0v5M0 5h20M0 5v5M20 5v5" stroke="' + c + '" stroke-width="1"/></pattern>';
  const cloud = (x, y, s, cls) => '<g class="cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const carS = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="5" fill="' + col + '"/><rect x="10" y="' + (y - 8) + '" width="28" height="10" rx="4" fill="' + col + '"/><rect x="14" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><rect x="26" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><circle cx="11" cy="' + (y + 15) + '" r="4.5" fill="#111"/><circle cx="39" cy="' + (y + 15) + '" r="4.5" fill="#111"/></g>';
  const ocean = (y, c1, c2) => {
    let w = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c1 + '"/>';
    w += '<g class="wv"><path d="M0 ' + (y + 6) + Array.from({ length: 12 }, (_, i) => 'q10 -6 20 0t20 0').join("") + '" stroke="' + c2 + '" stroke-width="2" fill="none"/></g>';
    w += '<g class="wv wv2"><path d="M0 ' + (y + 18) + Array.from({ length: 12 }, (_, i) => 'q10 -5 20 0t20 0').join("") + '" stroke="' + c2 + '" stroke-width="1.5" fill="none" opacity=".7"/></g>';
    return w;
  };
  const MUS = "#f4c20d", RED = "#e23b2e", BLUE = "#36a3ff", CREAM = "#f7f3ea";
  const palm = (x, y, h, cls) => '<g class="' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q3 -' + (h / 2) + ' 0 -' + h + '" stroke="#5a4632" stroke-width="4" fill="none"/>' +
    '<g fill="#2f5a3a" transform="translate(' + x + ' ' + (y - h) + ')"><path d="M0 0q-18 -4 -26 8q12 -10 26 -8z"/><path d="M0 0q18 -4 26 8q-12 -10 -26 -8z"/><path d="M0 0q-12 -14 -24 -10q14 0 24 10z"/><path d="M0 0q12 -14 24 -10q-14 0 -24 10z"/><path d="M0 0q0 -16 -6 -20q4 8 6 20z"/></g></g>';
  const speaker = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4" fill="#18181c" stroke="#333" stroke-width="2"/><circle class="pulse" cx="' + (x + w / 2) + '" cy="' + (y + h * 0.66) + '" r="' + (w * 0.36) + '" fill="#2a2a30" stroke="#555" stroke-width="3"/><circle cx="' + (x + w / 2) + '" cy="' + (y + h * 0.66) + '" r="' + (w * 0.12) + '" fill="#444"/><circle cx="' + (x + w / 2) + '" cy="' + (y + h * 0.22) + '" r="' + (w * 0.16) + '" fill="#2a2a30" stroke="#555" stroke-width="2"/>';

  /* 1. The Metro E Line light rail pulling into Farmdale station, right next to Dorsey High, palms and a hazy sunset */
  function eline() {
    let wins = "";
    for (let x = 28; x < 290; x += 34) wins += '<rect x="' + x + '" y="114" width="22" height="20" rx="3" fill="#1d2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#e1)"/>' + cloud(90, 36, 1) + cloud(300, 52, .8, "cld2") +
      palm(30, 160, 80) + palm(372, 160, 90, "sway") + palm(342, 160, 64) +
      '<rect x="0" y="78" width="400" height="2" fill="#555"/>' + [60, 220, 380].map(x => '<rect x="' + x + '" y="62" width="4" height="98" fill="#777"/><rect x="' + (x - 14) + '" y="62" width="32" height="3" fill="#777"/>').join("") +
      /* station canopy + sign with the E Line gold bullet */
      '<rect x="226" y="44" width="166" height="10" fill="#c9ced6"/><rect x="232" y="54" width="4" height="44" fill="#999"/><rect x="384" y="54" width="4" height="44" fill="#999"/>' +
      '<rect x="244" y="60" width="132" height="28" rx="3" fill="#111"/><circle cx="262" cy="74" r="10" fill="#fdb913"/>' + T(262, 79, 13, "#111", "E", ' text-anchor="middle"') + T(320, 80, 13, "#fff", "Farmdale", ' text-anchor="middle"') +
      /* light rail car: silver with gold stripe */
      '<g class="anim-train"><path d="M6 104h290q22 0 26 22v32H6z" fill="#d6dade" stroke="#7a828c" stroke-width="2"/>' + wins +
      '<rect x="6" y="140" width="314" height="7" fill="#fdb913"/><path d="M300 110h10q8 0 10 16h-20z" fill="#1d2a3a"/><circle cx="314" cy="152" r="3" fill="#fff6c2"/><rect x="140" y="94" width="40" height="10" fill="#666"/><path d="M150 94l10-12 10 12" stroke="#555" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="160" width="400" height="18" fill="#c9c4b8"/><rect x="0" y="160" width="400" height="4" fill="#f2d24b"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#6e6a62"/><g fill="#56524a">' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="200" width="14" height="40"/>').join("") + '</g><rect x="0" y="210" width="400" height="4" fill="#aaa"/><rect x="0" y="228" width="400" height="4" fill="#aaa"/>' +
      tag("MUSTARD", 120, 254, 26, MUS, -3),
      sky("e1", "#f08a4b", "#ffd9a0"));
  }

  /* 2. Dorsey High School on Farmdale Av: cream stucco, red tile roof, arched entry, the Dons flag waving */
  function dorsey() {
    return svg(
      '<rect width="400" height="260" fill="url(#d2)"/>' + cloud(80, 34, 1) + cloud(290, 50, .8, "cld2") +
      palm(20, 200, 110) + palm(384, 200, 120, "sway") +
      '<rect x="40" y="96" width="320" height="110" fill="#efe3c8"/><path d="M34 98l22-18h288l22 18z" fill="#b5523a"/>' +
      '<path d="M150 98v-40h100v40" fill="#efe3c8"/><path d="M144 60l56-26 56 26z" fill="#b5523a"/>' +
      '<g fill="#7aa6c8" stroke="#d8c9a8" stroke-width="2">' + [64, 100, 280, 316].map(x => '<rect x="' + x + '" y="114" width="22" height="30"/><rect x="' + x + '" y="156" width="22" height="30"/>').join("") + '</g>' +
      '<path d="M176 206v-58q24-30 48 0v58z" fill="#3a2a22"/><rect x="198" y="152" width="4" height="54" fill="#8a7a5a"/>' +
      '<rect x="160" y="66" width="80" height="22" fill="#14326e"/>' + T(200, 82, 14, "#fff", "DORSEY", ' text-anchor="middle" letter-spacing="2"') +
      '<rect x="44" y="34" width="3" height="66" fill="#999"/><g class="flag"><rect x="47" y="34" width="34" height="20" fill="#14326e"/><rect x="47" y="42" width="34" height="4" fill="' + MUS + '"/></g>' +
      '<rect x="0" y="206" width="400" height="12" fill="#c9c4b8"/><rect x="0" y="218" width="400" height="42" fill="#3a3b40"/>' +
      carS("car", 228, RED) + carS("carL", 240, MUS) +
      tag("DONS", 300, 252, 18, MUS, -4),
      sky("d2", "#4a9ae0", "#cfe8fa"));
  }

  /* 3. A family backyard party in South L.A.: string lights, speaker stacks thumping, the young DJ's turntables on a folding table */
  function backyard() {
    let bulbs = "";
    for (let i = 0; i < 18; i++) { const x = 10 + i * 22, y = 40 + Math.round(10 * Math.sin(i / 17 * Math.PI)); bulbs += '<circle class="tw' + (i % 2 ? " tw2" : "") + '" cx="' + x + '" cy="' + y + '" r="4" fill="' + [MUS, RED, BLUE][i % 3] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#b3)"/>' + stars(16) +
      '<rect x="0" y="80" width="400" height="90" fill="#6b4a32"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="80" width="2" height="90" fill="#4a321f"/>').join("") +
      palm(360, 82, 50) + palm(40, 82, 44) +
      '<path d="M0 36q200 30 400 0" stroke="#222" stroke-width="1.5" fill="none"/>' + bulbs +
      speaker(14, 96, 56, 92) + speaker(330, 96, 56, 92) +
      /* folding table with two decks */
      '<rect x="110" y="150" width="180" height="10" fill="#d9d4c8"/><path d="M122 160l-10 50M278 160l10 50" stroke="#888" stroke-width="4"/>' +
      '<rect x="118" y="132" width="74" height="20" rx="3" fill="#2c2c30"/><rect x="208" y="132" width="74" height="20" rx="3" fill="#2c2c30"/>' +
      '<ellipse class="pulse" cx="155" cy="138" rx="26" ry="6" fill="#0b0b0b"/><ellipse cx="155" cy="138" rx="8" ry="2.4" fill="' + MUS + '"/>' +
      '<ellipse class="pulse" cx="245" cy="138" rx="26" ry="6" fill="#0b0b0b"/><ellipse cx="245" cy="138" rx="8" ry="2.4" fill="' + RED + '"/>' +
      /* lawn + dance floor squares */
      '<rect x="0" y="170" width="400" height="90" fill="#3f6b3a"/>' +
      '<g>' + Array.from({ length: 8 }, (_, i) => '<rect class="pad pd' + (i % 4 + 1) + '" x="' + (60 + i * 36) + '" y="214" width="30" height="16" fill="' + [MUS, RED, BLUE, "#7cd36b"][i % 4] + '" opacity=".8"/>').join("") + '</g>' +
      tag("ON THE BEAT", 112, 254, 22, MUS, -3),
      sky("b3", "#1a1430", "#3a2240"));
  }

  /* 4. The Forum in Inglewood: the round colonnaded arena, tall white columns, lit up for the big summer show */
  function forum() {
    let cols = "";
    for (let i = 0; i < 15; i++) { const x = 40 + i * 22.6; cols += '<rect x="' + (x - 4) + '" y="92" width="8" height="98" fill="#f4f1ea"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#f4)"/>' + stars(18) +
      '<path class="beam" d="M120 92L60 0h30z" fill="#fff3b0"/><path class="beam" d="M280 92L340 0h-30z" fill="#fff3b0" style="animation-delay:-1.5s"/>' +
      '<ellipse cx="200" cy="92" rx="176" ry="18" fill="#e8e3d8"/><ellipse cx="200" cy="88" rx="170" ry="14" fill="#cfc8b8"/>' +
      '<rect x="30" y="92" width="340" height="98" fill="#2a3a7a"/><rect x="30" y="92" width="340" height="98" fill="url(#f4g)" opacity=".5"/>' + cols +
      '<rect x="24" y="186" width="352" height="8" fill="#e8e3d8"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#3a3b40"/><rect x="0" y="194" width="400" height="4" fill="#d9d9d9"/>' +
      '<g fill="#111">' + Array.from({ length: 22 }, (_, i) => '<circle class="bob" style="animation-delay:-' + (i % 5) * 0.2 + 's" cx="' + (12 + i * 18) + '" cy="212" r="6"/><rect x="' + (6 + i * 18) + '" y="216" width="12" height="20" rx="4"/>').join("") + '</g>' +
      palm(8, 194, 70) + palm(392, 194, 76, "sway") +
      tag("POP OUT", 150, 252, 22, MUS, -3),
      sky("f4", "#0e1030", "#3a2a6a") + '<linearGradient id="f4g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + MUS + '"/><stop offset="1" stop-color="#2a3a7a" stop-opacity="0"/></linearGradient>');
  }

  /* 5. His corner by Dorsey High: green signs at Obama Blvd & Farmdale Av, MUSTARD on the wall, palms, the Griffith Observatory domes on the hill */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' +
      '<path d="M0 120q90-50 180-30t220-20v70H0z" fill="#6e5a48"/>' +
      /* Griffith Observatory: white building, central copper-green dome, two side domes */
      '<g transform="translate(286 36)"><rect x="0" y="34" width="110" height="18" fill="#efe9dc"/><rect x="34" y="22" width="42" height="14" fill="#efe9dc"/>' +
      '<path d="M36 22q19-26 38 0z" fill="#3f6b5c"/><rect x="53" y="-6" width="4" height="6" fill="#3f6b5c"/>' +
      '<path d="M2 34q10-14 20 0z" fill="#3f6b5c"/><path d="M88 34q10-14 20 0z" fill="#3f6b5c"/><g fill="#9aa7b2"><rect x="10" y="40" width="5" height="10"/><rect x="40" y="40" width="5" height="10"/><rect x="65" y="40" width="5" height="10"/><rect x="95" y="40" width="5" height="10"/></g></g>' +
      palm(226, 130, 60, "sway") +
      '<rect x="0" y="116" width="270" height="104" fill="#c98a4a"/><rect x="0" y="116" width="270" height="104" fill="url(#c5b)" opacity=".25"/>' +
      tag("MUSTARD", 16, 180, 44, MUS, -6) + tag("10 SUMMERS", 70, 210, 18, RED, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, BLUE) +
      '<rect x="296" y="96" width="5" height="124" fill="#5b6b5f"/>' +
      sign(250, 96, 100, "OBAMA BLVD") + sign(254, 116, 92, "FARMDALE AV"),
      sky("c5", "#f0a060", "#ffe2b0") + bricks("c5b", "#7a4a2a"));
  }

  window.SCENES = { eline, dorsey, backyard, forum, corner };
})();
