/* mintcondition scenes (Regions tab: Minneapolis; St. Paul, the Rondo neighborhood). CSS classes and ids prefixed mc- (the page's own anim-train is kept).
   1 Lexington Pkwy station on the METRO Green Line: the platform in the middle of University Av, black sign with the GREEN bullet, the silver train sliding in.
   2 St. Paul Central High School on Lexington Pkwy (the band came together in its performing-arts program): the long brick-and-glass front, notes floating out of the band room.
   3 Rondo Commemorative Plaza at Old Rondo Av and Dale St: the brick plaza, the story panels and the pergola, I-94 traffic rolling by below the wall.
   4 The Rondo Days stage (they headlined the 30th Rondo Days in 2013): drums up front with the singer behind the kit, keys and bass, the crowd's hands up, lights sweeping.
   5 Selby Av and Dale St: green signs, MINT tagged on the wall, the downtown St. Paul skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mcflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.mc-flk{animation:mcflick 2.4s infinite}.mc-flk2{animation-delay:.8s}' +
    '@keyframes mcglow{0%,100%{opacity:.35}50%{opacity:1}}.mc-glow{animation:mcglow 1.8s ease-in-out infinite}.mc-g2{animation-delay:-.9s}' +
    '@keyframes mcnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(40px,-90px);opacity:0}}.mc-note{animation:mcnote 3.6s ease-out infinite}.mc-n2{animation-delay:-1.2s}.mc-n3{animation-delay:-2.4s}' +
    '@keyframes mccar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.mc-car{animation:mccar 5s linear infinite}.mc-car2{animation-delay:-2.5s}' +
    '@keyframes mccarL{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.mc-carL{animation:mccarL 6s linear infinite}' +
    '@keyframes mchand{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.mc-hd{animation:mchand .9s ease-in-out infinite}.mc-hd2{animation-delay:-.45s}.mc-hd3{animation-delay:-.2s}' +
    '@keyframes mcbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.mc-bm{transform-box:fill-box;transform-origin:50% 0;animation:mcbeam 3s ease-in-out infinite}.mc-bm2{animation-delay:-1.5s}' +
    '@keyframes mchit{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}.mc-hit{animation:mchit .45s ease-in-out infinite}.mc-hit2{animation-delay:-.22s}' +
    '@keyframes mcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mc-sp{animation:mcspray 1.4s ease-out infinite}.mc-sp2{animation-delay:.45s}' +
    '@keyframes mcleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,170px) rotate(260deg)}}.mc-lf{transform-box:fill-box;transform-origin:50% 50%;animation:mcleaf 6s linear infinite}.mc-lf2{animation-delay:-2s}.mc-lf3{animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const note = (x, y, cls, c) => '<g class="mc-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.5) + ' ' + (y - 1) + 'v-18l8 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const MINT = "#3fe0b0", BROWN = "#c8955a", GOLD = "#ffd36b", GREEN = "#00a651";

  /* 1. Lexington Pkwy, METRO Green Line: the median platform on University Av, the canopy, the black sign, the train sliding in */
  function mcstation() {
    const tr = '<g class="anim-train"><rect x="20" y="132" width="320" height="64" rx="10" fill="#dfe3e8" stroke="#7a828c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="142" width="34" height="24" rx="3" fill="#1d2833"/>').join("") +
      '<rect x="20" y="172" width="320" height="8" fill="#0053a0"/><rect x="20" y="180" width="320" height="3" fill="#f2c200"/>' +
      '<path d="M340 136q18 4 18 24v28h-18z" fill="#c9ced6" stroke="#7a828c" stroke-width="2"/><rect x="342" y="144" width="12" height="18" rx="2" fill="#1d2833"/><circle cx="352" cy="184" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 132l20 -18M126 116h28" stroke="#2a2f36" stroke-width="2.5"/></g>';
    /* University Av storefronts behind: two-story brick blocks with lit windows */
    const shops = [[0, 70, 70, "#8a5a44"], [70, 82, 60, "#a0714f"], [130, 64, 80, "#7d4f3d"], [210, 76, 70, "#96664a"], [280, 60, 60, "#80533f"], [340, 72, 60, "#9b6b4d"]].map(([x, y, w, c]) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (124 - y) + '" fill="' + c + '"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#5a3a2a"/>' +
      Array.from({ length: Math.floor(w / 18) }, (_, i) => '<rect class="' + (i % 2 ? "mc-glow" : "mc-glow mc-g2") + '" x="' + (x + 6 + i * 18) + '" y="' + (y + 10) + '" width="9" height="11" fill="#ffd98a"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mc1)"/>' + shops +
      '<rect x="0" y="118" width="400" height="80" fill="#5e6168"/><path d="M0 196h400" stroke="#8a8e95" stroke-width="2"/><path d="M0 128h400" stroke="#9aa0a8" stroke-width="2"/>' +
      tr +
      '<rect x="0" y="198" width="400" height="8" fill="#f2c200"/><rect x="0" y="206" width="400" height="54" fill="#a8a29a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 206v54" stroke="#958f87" stroke-width="1"/>').join("") +
      /* the canopy: curved glass roof on slim posts */
      '<path d="M24 92q176 -18 352 0v8q-176 -18 -352 0z" fill="#6f8a7e"/><path d="M24 100q176 -18 352 0" stroke="#bfe8d6" stroke-width="2" fill="none" opacity=".7"/>' + [44, 200, 356].map(x => '<rect x="' + (x - 3) + '" y="94" width="6" height="112" fill="#3d4a56"/>').join("") +
      '<rect class="mc-flk" x="80" y="100" width="60" height="3" fill="#fff8dc"/><rect class="mc-flk mc-flk2" x="250" y="100" width="60" height="3" fill="#fff8dc"/>' +
      '<rect x="62" y="40" width="276" height="34" rx="3" fill="#111"/><text x="76" y="63" ' + font + ' font-size="17" fill="#fff">Lexington Pkwy</text>' + badge(240, 57, "GREEN", GREEN) +
      '<path d="M200 74v14" stroke="#3d4a56" stroke-width="4"/>',
      sky("mc1", "#1e2f3a", "#d98e5f"));
  }

  /* 2. St. Paul Central High School: long brick-and-glass front on Lexington Pkwy, notes floating out of the band room */
  function mccentral() {
    return svg(
      '<rect width="400" height="260" fill="url(#mc2)"/>' +
      '<circle cx="62" cy="52" r="20" fill="#fff3c4" opacity=".9"/>' +
      /* the building: a tall glass block in the middle, brick wings */
      '<rect x="20" y="96" width="360" height="114" fill="#9c5a3c"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M20 ' + (106 + i * 15) + 'h360" stroke="#874c31" stroke-width="1"/>').join("") +
      '<rect x="14" y="88" width="372" height="10" fill="#d9d2c4"/>' +
      Array.from({ length: 2 }, (_, r) => Array.from({ length: 10 }, (_, i) => '<rect x="' + (i < 5 ? 30 + i * 26 : 250 + (i - 5) * 26) + '" y="' + (106 + r * 40) + '" width="18" height="24" fill="' + (i === 7 && r === 0 ? "#ffd98a" : "#33475a") + '"/>').join("")).join("") +
      '<rect x="160" y="44" width="80" height="166" fill="#cfd7dd"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (166 + (i % 4) * 18) + '" y="' + (52 + Math.floor(i / 4) * 34) + '" width="14" height="28" fill="#5b7487"/>').join("") +
      '<rect x="156" y="38" width="88" height="8" fill="#e8ecef"/>' +
      '<rect x="170" y="150" width="60" height="60" fill="#22303c"/><rect x="198" y="150" width="4" height="60" fill="#cfd7dd"/>' +
      '<rect x="104" y="124" width="192" height="20" rx="2" fill="#1b1d22"/><text x="200" y="138" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1.5">CENTRAL HIGH SCHOOL</text>' +
      /* lawn, walk, trees */
      '<rect x="0" y="210" width="400" height="50" fill="#5c8a3e"/><path d="M180 260l10 -50h20l10 50z" fill="#c9c2b4"/>' +
      [40, 112, 300, 362].map(x => '<rect x="' + (x - 3) + '" y="176" width="6" height="36" fill="#4a3424"/><circle cx="' + x + '" cy="168" r="20" fill="#3f7a35"/><circle cx="' + (x + 10) + '" cy="160" r="12" fill="#4f9441"/>').join("") +
      /* notes from the band room window */
      note(300, 110, "", MINT) + note(312, 116, "mc-n2", GOLD) + note(290, 120, "mc-n3", "#fff"),
      sky("mc2", "#7fb6df", "#eaf3f8"));
  }

  /* 3. Rondo Commemorative Plaza: brick plaza, story panels, the pergola, I-94 traffic below */
  function mcrondo() {
    return svg(
      '<rect width="400" height="260" fill="url(#mc3)"/>' +
      /* the freeway trench and traffic */
      '<rect x="0" y="92" width="400" height="44" fill="#4d5159"/><path d="M0 114h400" stroke="#e8e2c4" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="mc-car"><rect x="0" y="98" width="46" height="12" rx="3" fill="#c4262e"/><rect x="8" y="93" width="24" height="7" rx="2" fill="#8a1a20"/></g>' +
      '<g class="mc-car mc-car2"><rect x="0" y="98" width="52" height="12" rx="3" fill="#e8e2d0"/><rect x="8" y="93" width="28" height="7" rx="2" fill="#9aa0a8"/></g>' +
      '<g class="mc-carL"><rect x="0" y="118" width="60" height="13" rx="3" fill="' + MINT + '"/><rect x="34" y="113" width="22" height="7" rx="2" fill="#2a9c7c"/></g>' +
      '<rect x="0" y="136" width="400" height="10" fill="#8f8a80"/>' +
      /* the plaza: brick pavers */
      '<rect x="0" y="146" width="400" height="114" fill="#b0654a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (156 + i * 14) + 'h400" stroke="#97543c" stroke-width="1"/>').join("") +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + (i * 16 + ((Math.floor(i / 1) % 2) * 8)) + ' 146v114" stroke="#97543c" stroke-width=".6"/>').join("") +
      /* the pergola */
      '<rect x="40" y="150" width="8" height="70" fill="#3b3f46"/><rect x="150" y="150" width="8" height="70" fill="#3b3f46"/><rect x="32" y="144" width="134" height="10" fill="#2e3238"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (38 + i * 16) + '" y="138" width="6" height="8" fill="#2e3238"/>').join("") +
      /* story panels */
      [190, 252, 314].map((x, i) => '<rect x="' + x + '" y="160" width="52" height="58" rx="2" fill="#ece3cf" stroke="#3b3f46" stroke-width="3"/>' +
        Array.from({ length: 5 }, (_, j) => '<path d="M' + (x + 8) + ' ' + (172 + j * 8) + 'h' + (36 - (j % 2) * 10) + '" stroke="#7a6a50" stroke-width="2"/>').join("") +
        '<rect x="' + (x + 20) + '" y="218" width="12" height="12" fill="#3b3f46"/>').join("") +
      '<rect x="56" y="196" width="88" height="22" rx="2" fill="#1b1d22"/><text x="100" y="212" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '" letter-spacing="3">RONDO</text>' +
      /* leaves drifting */
      '<ellipse class="mc-lf" cx="340" cy="20" rx="5" ry="3" fill="#e0912f"/><ellipse class="mc-lf mc-lf2" cx="260" cy="10" rx="5" ry="3" fill="#c8552a"/><ellipse class="mc-lf mc-lf3" cx="380" cy="40" rx="5" ry="3" fill="#ffd36b"/>' +
      [20, 372].map(x => '<rect x="' + (x - 3) + '" y="40" width="6" height="56" fill="#4a3424"/><circle cx="' + x + '" cy="36" r="24" fill="#c86a2a"/><circle cx="' + (x + 12) + '" cy="28" r="14" fill="#e0912f"/>').join(""),
      sky("mc3", "#8fc1e3", "#f3e4c4"));
  }

  /* 4. The Rondo Days stage: drum kit up front (the singer plays behind it), keys, bass, crowd hands, lights sweeping */
  function mcdays() {
    const hand = (x, cls) => '<g class="mc-hd ' + cls + '"><rect x="' + (x - 3) + '" y="214" width="6" height="26" rx="3" fill="#6b4630"/><circle cx="' + x + '" cy="212" r="5" fill="#6b4630"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mc4)"/>' +
      '<path class="mc-bm" d="M90 30l-26 170h52z" fill="' + MINT + '" opacity=".22"/><path class="mc-bm mc-bm2" d="M310 30l-26 170h52z" fill="' + GOLD + '" opacity=".22"/>' +
      /* truss and banner */
      '<rect x="20" y="24" width="360" height="10" fill="#2b2f36"/><rect x="20" y="24" width="8" height="186" fill="#2b2f36"/><rect x="372" y="24" width="8" height="186" fill="#2b2f36"/>' +
      [80, 160, 240, 320].map(x => '<rect x="' + (x - 8) + '" y="34" width="16" height="12" rx="2" fill="#111"/><circle class="mc-glow" cx="' + x + '" cy="44" r="4" fill="#fff4c0"/>').join("") +
      '<rect x="120" y="52" width="160" height="26" rx="3" fill="' + BROWN + '"/><text x="200" y="71" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#1b120c" letter-spacing="3">RONDO DAYS</text>' +
      /* stage */
      '<rect x="20" y="186" width="360" height="24" fill="#3a2a20"/><rect x="20" y="182" width="360" height="6" fill="#5a4030"/>' +
      /* keyboard rig left */
      '<rect x="44" y="150" width="70" height="10" rx="2" fill="#1b1d22"/><rect x="48" y="152" width="62" height="5" fill="#f4f4f4"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (50 + i * 8) + '" y="152" width="3" height="3" fill="#111"/>').join("") +
      '<path d="M56 160l-6 22M102 160l6 22" stroke="#555" stroke-width="3"/>' +
      /* drum kit center */
      '<ellipse cx="200" cy="168" rx="26" ry="18" fill="' + MINT + '" stroke="#0e3a2e" stroke-width="3"/><ellipse cx="200" cy="168" rx="14" ry="10" fill="#e8fff6" opacity=".6"/>' +
      '<ellipse class="mc-hit" cx="160" cy="146" rx="16" ry="5" fill="#e0c060"/><path d="M160 150v32" stroke="#777" stroke-width="2"/>' +
      '<ellipse class="mc-hit mc-hit2" cx="244" cy="140" rx="18" ry="5" fill="#e0c060"/><path d="M244 144v38" stroke="#777" stroke-width="2"/>' +
      '<rect x="172" y="140" width="22" height="14" rx="3" fill="' + MINT + '" stroke="#0e3a2e" stroke-width="2"/><rect x="206" y="140" width="22" height="14" rx="3" fill="' + MINT + '" stroke="#0e3a2e" stroke-width="2"/>' +
      /* a mic on a boom in front of the kit */
      '<path d="M232 182l-8 -60l-22 -6" stroke="#9aa0aa" stroke-width="3" fill="none"/><rect x="194" y="110" width="10" height="14" rx="5" fill="#2a2d33"/>' +
      /* bass guitar on a stand right */
      '<path d="M318 182l6 -24" stroke="#555" stroke-width="3"/><ellipse cx="326" cy="150" rx="12" ry="16" fill="' + BROWN + '" stroke="#3a2210" stroke-width="2"/><rect x="323" y="96" width="6" height="44" fill="#3a2210"/>' +
      /* crowd */
      '<rect x="0" y="210" width="400" height="50" fill="#1a1420"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (14 + i * 25) + '" cy="236" r="11" fill="#2a2030"/>').join("") +
      [30, 90, 140, 190, 250, 300, 360].map((x, i) => hand(x, ["", "mc-hd2", "mc-hd3"][i % 3])).join("") +
      note(120, 120, "", MINT) + note(280, 110, "mc-n2", GOLD),
      sky("mc4", "#1b2240", "#8a4a6a"));
  }

  /* 5. Selby Av and Dale St: green signs, MINT tagged, the downtown St. Paul skyline behind */
  function mccorner() {
    const towers = [[160, 70, 40, "#56616c"], [196, 40, 36, "#6b7784"], [228, 58, 30, "#4d5864"], [262, 86, 44, "#5f6b78"], [306, 66, 34, "#525d69"], [340, 92, 60, "#66717d"]].map(([x, y, w, c]) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (180 - y) + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor((180 - y) / 14) * Math.floor(w / 10) }, (_, i) => (i % 3 ? "" : '<rect class="mc-glow ' + (i % 2 ? "mc-g2" : "") + '" x="' + (x + 4 + (i % Math.floor(w / 10)) * 10) + '" y="' + (y + 8 + Math.floor(i / Math.floor(w / 10)) * 14) + '" width="4" height="5" fill="#ffe2a0"/>')).join("")).join("") +
      /* the stepped crown of the tallest tower */
      '<path d="M196 40h36v-8h-6v-8h-24v8h-6z" fill="#7b8794"/><path d="M206 16h16v8h-16z" fill="#8995a2"/><rect x="212" y="4" width="4" height="12" fill="#aab4be"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mc5)"/>' + towers +
      /* street */
      '<rect x="0" y="180" width="400" height="80" fill="#3a3d44"/><path d="M0 220h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="mc-car"><rect x="0" y="196" width="70" height="18" rx="5" fill="' + BROWN + '"/><path d="M12 196l10 -12h26l10 12z" fill="#9a6a3a"/><circle cx="16" cy="216" r="6" fill="#111"/><circle cx="54" cy="216" r="6" fill="#111"/></g>' +
      /* the wall with the tag */
      '<rect x="0" y="40" width="150" height="150" fill="#5a5f6a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (52 + i * 16) + 'h150" stroke="#4c515b" stroke-width="1"/>').join("") +
      tag("MINT", 10, 148, 50, MINT, -8) + tag("Condition", 22, 180, 20, GOLD, -6) +
      '<g><circle class="mc-sp" cx="128" cy="122" r="3" fill="' + MINT + '"/><circle class="mc-sp mc-sp2" cx="134" cy="116" r="2" fill="' + MINT + '"/></g>' +
      /* the pole and signs */
      '<rect x="146" y="12" width="6" height="182" fill="#3b4048"/>' + sign(98, 12, 96, "Selby Av") + sign(104, 38, 90, "Dale St N"),
      sky("mc5", "#1d2440", "#c97a5a"));
  }

  window.SCENES = { mcstation, mccentral, mcrondo, mcdays, mccorner };
})();
