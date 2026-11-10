/* maxwell scenes (NYC map, Brooklyn: Gerald Maxwell Rivera grew up in East New York; raised Baptist; at 17 a friend gave him a used Casio keyboard). 400 x 260 SVGs.
   CSS classes prefixed mx- (the page's own anim-train is kept on the train).
   0 Crescent St (J/Z), elevated over Fulton St on the Jamaica line el: brown J and Z bullets, the train pulling in.
   1 The bedroom studio: the used Casio keyboard, a cassette four-track, East New York rooftops out the window, notes floating up.
   2 Sunday church: a Baptist church inside, stained glass, pews, choir robes, light coming through.
   3 Pretty Wings: a stage under giant butterfly wings, spotlights sweeping, butterflies in the air.
   4 Fulton St and Crescent St: green street signs, MAXWELL tagged on the wall, the J el overhead with a train going by. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8c36a", PLUM = "#7a3a8a", ROSE = "#e86a9a", CREAM = "#f4ead8", BROWN = "#996633";
  const css = '<style>' +
    '@keyframes mxflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.95}}.mx-flk{animation:mxflick 2.8s infinite}' +
    '@keyframes mxnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-46px);opacity:0}}.mx-note{animation:mxnote 3.2s ease-out infinite}.mx-n2{animation-delay:-1.1s}.mx-n3{animation-delay:-2.2s}' +
    '@keyframes mxray{0%,100%{opacity:.18}50%{opacity:.42}}.mx-ray{animation:mxray 4s ease-in-out infinite}.mx-ray2{animation-delay:-2s}' +
    '@keyframes mxsweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.mx-sw{transform-box:fill-box;transform-origin:50% 0%;animation:mxsweep 5s ease-in-out infinite}.mx-sw2{animation-delay:-2.5s}' +
    '@keyframes mxfly{0%{transform:translate(0,0)}25%{transform:translate(30px,-16px)}50%{transform:translate(60px,4px)}75%{transform:translate(28px,18px)}100%{transform:translate(0,0)}}.mx-fly{animation:mxfly 9s ease-in-out infinite}.mx-f2{animation-delay:-3s;animation-duration:11s}.mx-f3{animation-delay:-6s;animation-duration:13s}' +
    '@keyframes mxflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.35)}}.mx-flap{transform-box:fill-box;transform-origin:50% 50%;animation:mxflap .5s ease-in-out infinite}' +
    '@keyframes mxreel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mx-reel{transform-box:fill-box;transform-origin:50% 50%;animation:mxreel 2.4s linear infinite}' +
    '@keyframes mxel{from{transform:translateX(-260px)}to{transform:translateX(460px)}}.mx-el{animation:mxel 8s linear infinite}' +
    '@keyframes mxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.mx-sp{animation:mxspray 1.4s ease-out infinite}.mx-spb{animation-delay:.5s}' +
    '@keyframes mxwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.mx-walk{animation:mxwalk 15s linear infinite}.mx-wk2{animation-delay:-7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bullet = (x, y, r, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.25) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const note = (x, y, cls, c) => '<g class="mx-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + c + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14h6" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const fly = (x, y, cls, c, s) => '<g class="mx-fly ' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><g class="mx-flap"><path d="M0 0q-12 -14 -14 -2q0 8 14 2zM0 0q12 -14 14 -2q0 8 -14 2zM0 0q-9 10 -8 12q4 2 8 -12zM0 0q9 10 8 12q-4 2 -8 -12z" fill="' + c + '" stroke="#2a1030" stroke-width="1"/></g><path d="M0 -4v10" stroke="#2a1030" stroke-width="2"/></g></g>';
  /* steel el: dark green girders on columns */
  const elDeck = (y) => '<rect x="0" y="' + y + '" width="400" height="16" fill="#2f4a3a"/><rect x="0" y="' + (y + 16) + '" width="400" height="4" fill="#1f3328"/>' +
    Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' ' + y + 'l10 16l10 -16" stroke="#40604c" stroke-width="2" fill="none"/>').join("");
  const elCols = (y, h) => [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="' + y + '" width="10" height="' + h + '" fill="#2f4a3a"/><path d="M' + (x - 8) + ' ' + y + 'h26" stroke="#1f3328" stroke-width="4"/>').join("");

  /* 0. Crescent St (J/Z), elevated */
  function mxtrain() {
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (78 + i * 32) + '" y="102" width="22" height="18" rx="2" fill="#2a3440"/>').join("");
    const train = '<g class="anim-train"><rect x="60" y="92" width="290" height="58" rx="6" fill="#c8ccd2" stroke="#7a8088" stroke-width="2"/>' + wins +
      '<rect x="60" y="126" width="290" height="5" fill="#8a9098"/><rect x="62" y="98" width="14" height="40" rx="2" fill="#2a3440"/>' + bullet(208, 140, 7, "J", BROWN) +
      '<circle cx="66" cy="142" r="3" fill="#fff6c2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#mxs0)"/>' +
      /* rowhouses below */
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (i * 58) + '" y="' + (170 - (i % 3) * 8) + '" width="54" height="90" fill="' + ["#b0644a", "#c8a07a", "#8a5a4a", "#d0b890"][i % 4] + '"/><rect x="' + (i * 58 + 8) + '" y="' + (184 - (i % 3) * 8) + '" width="12" height="14" fill="#f7e7a8" opacity=".8"/><rect x="' + (i * 58 + 32) + '" y="' + (184 - (i % 3) * 8) + '" width="12" height="14" fill="#2a2a34"/>').join("") +
      /* platform canopy */
      '<rect x="0" y="54" width="400" height="10" fill="#3a5a46"/><path d="M0 64h400" stroke="#1f3328" stroke-width="2"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="64" width="6" height="96" fill="#3a5a46"/>').join("") +
      train +
      '<rect x="0" y="150" width="400" height="12" fill="#6a6a70"/><rect x="0" y="150" width="400" height="3" fill="#e8c020"/>' + elDeck(162) +
      /* station sign */
      '<rect x="120" y="14" width="160" height="34" rx="2" fill="#111"/><path d="M120 18h160" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="180" y="40" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Crescent St</text>' + bullet(250, 34, 8, "J", BROWN) + bullet(269, 34, 8, "Z", BROWN) +
      '<circle class="mx-flk" cx="60" cy="70" r="3" fill="#fff3c2"/><circle class="mx-flk" cx="340" cy="70" r="3" fill="#fff3c2"/>',
      sky("mxs0", "#f2a06a", "#5a3a6a"));
  }

  /* 1. The bedroom studio */
  function mxroom() {
    const keysRow = Array.from({ length: 22 }, (_, i) => '<rect x="' + (84 + i * 10) + '" y="176" width="10" height="28" fill="#fff" stroke="#333" stroke-width="1"/>').join("") +
      Array.from({ length: 22 }, (_, i) => ([0, 1, 3, 4, 5].includes(i % 7) && i < 21) ? '<rect x="' + (91 + i * 10) + '" y="176" width="6" height="17" fill="#111"/>' : "").join("");
    const casio = '<rect x="74" y="156" width="240" height="52" rx="4" fill="#2a2a2e" stroke="#111" stroke-width="2"/>' + keysRow +
      '<rect x="84" y="162" width="60" height="10" rx="1" fill="#6ad08a" opacity=".85"/><circle cx="160" cy="167" r="3" fill="#e23b3b"/><circle cx="170" cy="167" r="3" fill="#e8c020"/><circle cx="180" cy="167" r="3" fill="#3a7bd5"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (200 + i * 10) + '" y="163" width="6" height="6" fill="#888"/>').join("");
    const deck = '<rect x="300" y="116" width="74" height="40" rx="3" fill="#3a3a40" stroke="#111" stroke-width="2"/><rect x="308" y="122" width="58" height="22" rx="2" fill="#1a1a1e"/>' +
      '<g class="mx-reel"><circle cx="322" cy="133" r="7" fill="none" stroke="#ddd" stroke-width="2"/><path d="M322 126v14M315 133h14" stroke="#ddd" stroke-width="1.5"/></g>' +
      '<g class="mx-reel"><circle cx="352" cy="133" r="7" fill="none" stroke="#ddd" stroke-width="2"/><path d="M352 126v14M345 133h14" stroke="#ddd" stroke-width="1.5"/></g>';
    const win = '<rect x="40" y="26" width="150" height="100" fill="url(#mxwin)" stroke="' + CREAM + '" stroke-width="6"/><path d="M115 26v100M40 76h150" stroke="' + CREAM + '" stroke-width="4"/>' +
      '<path d="M43 126v-30h18v-8h16v14h20v-20h22v26h18v-14h24v32z" fill="#2a1e30"/><rect x="66" y="104" width="4" height="5" fill="#f7e7a8"/><rect x="128" y="100" width="4" height="5" fill="#f7e7a8"/><circle cx="160" cy="44" r="8" fill="#fff6d0"/>';
    return svg('<rect width="400" height="260" fill="#5a3a52"/><rect width="400" height="150" fill="#6a4a62"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 0v150" stroke="#7a5a72" stroke-width="2"/>').join("") + win +
      '<rect x="220" y="30" width="60" height="78" fill="' + CREAM + '" stroke="#3a2a32" stroke-width="2"/><rect x="226" y="36" width="48" height="48" fill="' + PLUM + '"/><circle cx="250" cy="60" r="16" fill="#1a1a1e"/><circle cx="250" cy="60" r="4" fill="' + GOLD + '"/><text x="250" y="98" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a32">URBAN HANG</text>' +
      '<rect x="0" y="208" width="400" height="52" fill="#3a2630"/><rect x="0" y="150" width="400" height="6" fill="#4a3240"/>' +
      '<rect x="92" y="208" width="8" height="40" fill="#222"/><rect x="288" y="208" width="8" height="40" fill="#222"/>' + casio + deck +
      note(130, 140, "", GOLD) + note(180, 130, "mx-n2", ROSE) + note(230, 140, "mx-n3", CREAM) +
      '<rect x="20" y="226" width="200" height="20" rx="2" fill="#111"/><text x="120" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">The used Casio, East New York</text>',
      sky("mxwin", "#2a2a6a", "#e87a5a"));
  }

  /* 2. Sunday church */
  function mxchurch() {
    const glass = (x) => '<g transform="translate(' + x + ' 30)"><path d="M0 90v-60a26 26 0 0 1 52 0v60z" fill="#1a1a2a" stroke="#c8b07a" stroke-width="3"/>' +
      '<path d="M4 88v-56a22 22 0 0 1 44 0v56z" fill="#3a6ac8"/><path d="M4 60h44M26 10v78" stroke="#1a1a2a" stroke-width="2"/><circle cx="26" cy="36" r="10" fill="#e8c020" stroke="#1a1a2a" stroke-width="2"/>' +
      '<rect x="6" y="62" width="18" height="24" fill="#c83a3a"/><rect x="28" y="62" width="18" height="24" fill="#3aa86a"/><path d="M14 40l12 -16 12 16z" fill="#e86a9a" opacity=".8"/></g>';
    const rays = '<path class="mx-ray" d="M70 120l-40 140h100z" fill="#fff6c2"/><path class="mx-ray mx-ray2" d="M330 120l-40 140h100z" fill="#fff6c2"/>';
    const pew = (y) => '<rect x="20" y="' + y + '" width="150" height="14" rx="2" fill="#6a3a22"/><rect x="230" y="' + y + '" width="150" height="14" rx="2" fill="#6a3a22"/><rect x="20" y="' + (y + 14) + '" width="150" height="4" fill="#4a2414"/><rect x="230" y="' + (y + 14) + '" width="150" height="4" fill="#4a2414"/>';
    const robe = (x, c) => '<path d="M' + x + ' 150q0 -26 12 -26q12 0 12 26z" fill="' + c + '"/><path d="M' + (x + 6) + ' 128h12l-6 10z" fill="' + GOLD + '"/>';
    return svg('<rect width="400" height="260" fill="#efe2c8"/><rect width="400" height="150" fill="#e8d6b0"/>' +
      glass(44) + glass(304) +
      /* altar, organ pipes */
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (150 + i * 11) + '" y="' + (40 + Math.abs(4 - i) * 6) + '" width="8" height="' + (80 - Math.abs(4 - i) * 6) + '" rx="3" fill="#c8a85a" stroke="#8a6a2a" stroke-width="1"/>').join("") +
      '<rect x="140" y="120" width="120" height="30" fill="#7a2a3a"/><path d="M190 60v40M178 74h24" stroke="' + GOLD + '" stroke-width="5"/>' +
      robe(146, PLUM) + robe(172, PLUM) + robe(198, PLUM) + robe(224, PLUM) +
      '<rect x="0" y="150" width="400" height="110" fill="#8a2a3a"/><rect x="180" y="150" width="40" height="110" fill="#a83a4a"/>' + rays +
      pew(170) + pew(196) + pew(222) +
      note(120, 110, "", "#7a2a3a") + note(280, 104, "mx-n2", "#7a2a3a") +
      '<rect x="130" y="238" width="140" height="16" rx="2" fill="#111"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Raised in the church</text>',
      "");
  }

  /* 3. Pretty Wings stage */
  function mxstage() {
    const wing = (flip) => '<g transform="' + (flip ? 'translate(400 0) scale(-1 1)' : '') + '"><path d="M200 120q-60 -110 -170 -90q-20 60 40 96q-50 20 -30 70q60 10 160 -60z" fill="' + PLUM + '" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M196 118q-50 -80 -140 -72q-8 40 34 70z" fill="' + ROSE + '" opacity=".75"/><circle cx="90" cy="70" r="12" fill="' + GOLD + '" opacity=".85"/><circle cx="72" cy="156" r="9" fill="' + GOLD + '" opacity=".85"/></g>';
    const beam = (x, cls) => '<path class="mx-sw ' + cls + '" d="M' + x + ' 0l-34 200h68z" fill="#fff6d0" opacity=".22"/>';
    return svg('<rect width="400" height="260" fill="url(#mxs3)"/>' + wing(false) + wing(true) +
      '<rect x="196" y="40" width="8" height="120" rx="4" fill="#2a1030"/>' + beam(90, "") + beam(310, "mx-sw2") +
      '<rect x="0" y="180" width="400" height="20" fill="#2a1a2e"/><rect x="0" y="176" width="400" height="6" fill="' + GOLD + '"/>' +
      '<path d="M186 176v-40h28v40" fill="#1a1a1e"/><circle cx="200" cy="130" r="9" fill="#333"/><path d="M200 139v37" stroke="#888" stroke-width="3"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#140a18"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (12 + i * 25) + '" cy="' + (222 + (i % 2) * 6) + '" r="10" fill="#241430"/>').join("") +
      fly(60, 60, "", ROSE, 0.9) + fly(300, 40, "mx-f2", GOLD, 0.8) + fly(160, 90, "mx-f3", "#9ad0ff", 0.7) +
      '<rect x="140" y="236" width="120" height="16" rx="2" fill="#111"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Pretty Wings</text>',
      sky("mxs3", "#1a0a2a", "#5a2a5a"));
  }

  /* 4. Fulton St and Crescent St */
  function mxcorner() {
    const walker = (cls, y, c) => '<g class="mx-walk ' + cls + '"><circle cx="0" cy="' + (y - 22) + '" r="4" fill="#3a2a24"/><rect x="-4" y="' + (y - 18) + '" width="8" height="12" rx="2" fill="' + c + '"/><rect x="-3" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/><rect x="0.5" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/></g>';
    const elTrain = '<g class="mx-el"><rect x="0" y="30" width="240" height="30" rx="4" fill="#c8ccd2" stroke="#7a8088" stroke-width="1.5"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (10 + i * 33) + '" y="36" width="20" height="12" fill="#2a3440"/>').join("") + '</g>';
    return svg('<rect width="400" height="260" fill="url(#mxs4)"/>' + elTrain + elDeck(60) + elCols(80, 150) +
      '<rect x="0" y="98" width="200" height="128" fill="#b0644a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (108 + i * 13) + 'h200" stroke="#9a5440" stroke-width="1"/>').join("") +
      tag("MAXWELL", 12, 160, 30, GOLD, -6) + tag("MUSZE", 40, 200, 18, ROSE, -3) + fly(150, 120, "", ROSE, 0.6) +
      '<rect x="230" y="110" width="160" height="116" fill="#d0b890"/><rect x="246" y="126" width="30" height="34" fill="#f7e7a8" opacity=".8"/><rect x="300" y="126" width="30" height="34" fill="#2a2a34"/><rect x="346" y="126" width="30" height="34" fill="#f7e7a8" opacity=".8"/>' +
      '<rect x="230" y="176" width="160" height="50" fill="#3a2a32"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55555b"/><rect x="0" y="224" width="400" height="4" fill="#9a9aa0"/>' +
      '<path d="M0 244h40M70 244h40M140 244h40M210 244h40M280 244h40M350 244h40" stroke="#e8e0c0" stroke-width="2"/>' +
      walker("", 224, PLUM) + walker("mx-wk2", 224, "#3a7bd5") +
      '<rect x="214" y="92" width="6" height="134" fill="#2f2f2f"/>' + sign(222, 94, 106, "Fulton St") + sign(222, 120, 118, "Crescent St") +
      '<g class="mx-sp"><circle cx="160" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mx-sp mx-spb"><circle cx="166" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mxs4", "#1a1430", "#d8784a"));
  }

  window.SCENES = { mxtrain: mxtrain, mxroom: mxroom, mxchurch: mxchurch, mxstage: mxstage, mxcorner: mxcorner };
})();
