/* Doomtree scenes (Regions tab: Minneapolis). CSS classes and ids prefixed dm- (the page's own anim-train is kept).
   1 Warehouse District/Hennepin Av station, METRO Blue + Green Line, at grade on 5th St downtown: red-brick warehouses behind, black sign with BLUE and GREEN bullets, the train sliding in.
   2 The Varsity Theater in Dinkytown (an early Doomtree Blowout home): cream facade, tall blade sign, marquee bulbs chasing, the line out front, snow.
   3 Duck, Duck, Gray Duck ("Gray Duck", All Hands): kids in a circle in a snowy park, one running the circle, a gray duck flapping over.
   4 The Doomtree Zoo at the St. Paul ballpark in Lowertown (2015): grandstand, a stage in the outfield, spotlights sweeping, hands up.
   5 Washington Av N and Hennepin Av in the Warehouse District: green signs, DOOMTREE tagged on the brick wall, the Hennepin Avenue Bridge's white towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dmflick{0%,100%{opacity:1}50%{opacity:.25}}.dm-flk{animation:dmflick 1s steps(1) infinite}.dm-flk2{animation-delay:-.5s}' +
    '@keyframes dmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.dm-bob{animation:dmbob .6s ease-in-out infinite}.dm-bob2{animation-delay:-.3s}.dm-bob3{animation-delay:-.15s}' +
    '@keyframes dmsnow{0%{transform:translate(0,-20px)}100%{transform:translate(-30px,280px)}}.dm-sn{animation:dmsnow 6s linear infinite}.dm-sn2{animation-delay:-2s}.dm-sn3{animation-delay:-4s}' +
    '@keyframes dmrun{0%,100%{transform:translateX(-120px)}50%{transform:translateX(120px)}}.dm-run{animation:dmrun 4s ease-in-out infinite}' +
    '@keyframes dmfly{0%{transform:translate(-80px,10px)}100%{transform:translate(480px,-30px)}}.dm-fly{animation:dmfly 7s linear infinite}' +
    '@keyframes dmflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.dm-flap{transform-box:fill-box;transform-origin:50% 100%;animation:dmflap .35s ease-in-out infinite}' +
    '@keyframes dmsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.dm-sw{transform-box:fill-box;transform-origin:50% 100%;animation:dmsweep 3s ease-in-out infinite}.dm-sw2{animation-delay:-1.5s}' +
    '@keyframes dmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dm-sp{animation:dmspray 1.4s ease-out infinite}.dm-sp2{animation-delay:.45s}' +
    '@keyframes dmglow{0%,100%{opacity:.35}50%{opacity:1}}.dm-glow{animation:dmglow 2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const snow = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="dm-sn' + (i % 3 ? " dm-sn" + (1 + i % 3) : "") + '" cx="' + ((i * 61) % 420) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 2 ? 1.6 : 2.2) + '" fill="#fff" opacity=".85"/>'; return s; };
  const RED = "#e63946", GOLD = "#f4d35e", ICE = "#7ec8e3", BLUE = "#0053a0", GREEN = "#00a651", BRICK = "#9a4a32";
  const badge = (x, y, txt, col) => '<rect x="' + x + '" y="' + y + '" width="58" height="18" rx="9" fill="' + col + '"/><text x="' + (x + 29) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* a red-brick warehouse block with arched windows */
  const warehouse = (x, y, w, h, col) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + col + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#5e2a1c"/>';
    for (let r = 0; y + 14 + r * 26 + 16 < y + h; r++) for (let c = 0; x + 8 + c * 20 + 12 <= x + w; c++)
      s += '<path d="M' + (x + 8 + c * 20) + ' ' + (y + 30 + r * 26) + 'v-10q6 -7 12 0v10z" fill="' + ((r + c) % 5 === 0 ? "#f6d77a" : "#2b2320") + '"/>';
    return s;
  };
  /* simple kid figure (no face): head, coat, legs */
  const kid = (x, y, coat, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 20) + '" r="6" fill="#f0d2b4"/><rect x="' + (x - 7) + '" y="' + (y - 26) + '" width="14" height="5" rx="2" fill="' + coat + '" opacity=".8"/>' +
    '<rect x="' + (x - 7) + '" y="' + (y - 14) + '" width="14" height="16" rx="4" fill="' + coat + '"/><rect x="' + (x - 6) + '" y="' + (y + 2) + '" width="5" height="9" fill="#2b2f3a"/><rect x="' + (x + 1) + '" y="' + (y + 2) + '" width="5" height="9" fill="#2b2f3a"/></g>';

  /* 1. Warehouse District/Hennepin Av station, METRO Blue + Green Line */
  function dmstation() {
    const tr = '<g class="anim-train"><rect x="20" y="132" width="320" height="64" rx="10" fill="#dfe3e8" stroke="#7a828c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="142" width="34" height="24" rx="3" fill="#1d2833"/>').join("") +
      '<rect x="20" y="172" width="320" height="8" fill="' + BLUE + '"/><rect x="20" y="180" width="320" height="3" fill="#f2c200"/>' +
      '<path d="M340 136q18 4 18 24v28h-18z" fill="#c9ced6" stroke="#7a828c" stroke-width="2"/><rect x="342" y="144" width="12" height="18" rx="2" fill="#1d2833"/><circle cx="352" cy="184" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 132l20 -18M126 116h28" stroke="#2a2f36" stroke-width="2.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dm1)"/>' +
      warehouse(0, 30, 120, 90, BRICK) + warehouse(124, 50, 96, 70, "#b5603f") + warehouse(224, 20, 100, 100, "#8a3f2b") + warehouse(328, 44, 72, 76, "#a8573a") +
      '<rect x="0" y="118" width="400" height="80" fill="#5e6168"/><path d="M0 196h400" stroke="#8a8e95" stroke-width="2"/><path d="M0 128h400" stroke="#9aa0a8" stroke-width="2"/>' +
      '<path d="M0 118h400" stroke="#3a3f46" stroke-width="1.5"/><path d="M0 124h400" stroke="#2a2f36" stroke-width="1" stroke-dasharray="2 10"/>' +
      tr +
      '<rect x="0" y="198" width="400" height="8" fill="#f2c200"/><rect x="0" y="206" width="400" height="54" fill="#a8a29a"/>' +
      '<rect x="0" y="12" width="290" height="10" fill="#3a3f46"/><rect x="284" y="12" width="6" height="222" fill="#3a3f46"/><rect x="278" y="230" width="18" height="6" fill="#3a3f46"/>' +
      '<rect x="20" y="40" width="250" height="40" rx="3" fill="#111"/><text x="30" y="66" ' + font + ' font-size="15" fill="#fff">Warehouse District/Hennepin Av</text>' +
      badge(20, 86, "BLUE", BLUE) + badge(84, 86, "GREEN", GREEN) +
      snow(14),
      sky("dm1", "#3a4a6b", "#c9b8a8"));
  }

  /* 2. The Varsity Theater, Dinkytown: blade sign, marquee, the line out front */
  function dmvarsity() {
    let bulbs = "";
    for (let i = 0; i < 24; i++) bulbs += '<circle class="dm-flk' + (i % 2 ? " dm-flk2" : "") + '" cx="' + (84 + i * 10) + '" cy="110" r="2.6" fill="' + GOLD + '"/>';
    let line = "";
    const coats = [RED, "#3a5a8c", "#5a7a3a", GOLD, "#6b4a8a", "#2e2e2e", ICE];
    coats.forEach((c, i) => { line += kid(40 + i * 48, 222, c, "dm-bob" + (i % 3 ? " dm-bob" + (1 + i % 3) : "")); });
    return svg(
      '<rect width="400" height="260" fill="url(#dm2)"/>' +
      '<rect x="40" y="40" width="320" height="160" fill="#e8dcc0"/><rect x="40" y="40" width="320" height="8" fill="#c9b48a"/>' +
      '<rect x="60" y="56" width="50" height="40" fill="#2b3a4a"/><rect x="290" y="56" width="50" height="40" fill="#2b3a4a"/>' +
      '<rect x="60" y="56" width="50" height="40" fill="' + GOLD + '" opacity=".25" class="dm-glow"/>' +
      /* blade sign */
      '<rect x="186" y="6" width="34" height="96" rx="4" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      ["V", "A", "R", "S", "I", "T", "Y"].map((l, i) => '<text x="203" y="' + (24 + i * 12) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + RED + '">' + l + '</text>').join("") +
      /* marquee */
      '<rect x="74" y="104" width="252" height="40" fill="#14141c" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">DOOMTREE BLOWOUT</text>' +
      '<rect x="150" y="150" width="100" height="50" fill="#3a2a1a"/><rect x="154" y="154" width="44" height="46" fill="#f6d77a" opacity=".55"/><rect x="202" y="154" width="44" height="46" fill="#f6d77a" opacity=".55"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8f949c"/><rect x="0" y="232" width="400" height="28" fill="#4a4e56"/>' +
      line + snow(16),
      sky("dm2", "#141a33", "#3b3a5a"));
  }

  /* 3. Duck, Duck, Gray Duck: the circle in the snowy park, a gray duck flying over */
  function dmduck() {
    let ring = "";
    const coats = [RED, "#3a5a8c", GOLD, "#5a7a3a", "#6b4a8a", ICE, "#d97a2b", "#2e2e2e"];
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2, x = 200 + Math.cos(a) * 92, y = 196 + Math.sin(a) * 30;
      ring += kid(Math.round(x), Math.round(y), coats[i]);
    }
    const runner = '<g class="dm-run"><g class="dm-bob">' + kid(200, 246, RED) + '</g></g>';
    const duck = '<g class="dm-fly"><g transform="translate(0 60)"><ellipse cx="20" cy="12" rx="18" ry="8" fill="#8d9199"/><circle cx="38" cy="6" r="6" fill="#6f747c"/><path d="M43 6l9 2l-9 2z" fill="#e8a33a"/>' +
      '<path class="dm-flap" d="M12 10q6 -20 20 -2z" fill="#a7abb3"/><path d="M2 12l-6 -4v8z" fill="#6f747c"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dm3)"/>' +
      '<path d="M0 120q60 -18 120 -6t140 -4t140 6v24h-400z" fill="#c7d3e0"/>' +
      Array.from({ length: 7 }, (_, i) => '<g transform="translate(' + (20 + i * 62) + ' 86)"><rect x="-3" y="20" width="6" height="22" fill="#5a4636"/><path d="M0 -6l-16 30h32z" fill="#2f5a46"/><path d="M0 -16l-12 22h24z" fill="#3a6b52"/><path d="M-12 18h24" stroke="#fff" stroke-width="3"/></g>').join("") +
      '<rect x="0" y="134" width="400" height="126" fill="#eef3f8"/>' +
      '<ellipse cx="200" cy="200" rx="104" ry="36" fill="none" stroke="#c5d2df" stroke-width="3" stroke-dasharray="6 6"/>' +
      ring + runner + duck +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" stroke="#2b3a4a" stroke-width="3" paint-order="stroke">DUCK, DUCK, GRAY DUCK</text>' +
      snow(18),
      sky("dm3", "#7a9cc6", "#dbe6f2"));
  }

  /* 4. The Doomtree Zoo at the ballpark in Lowertown St. Paul: stage in the outfield, spotlights, hands up */
  function dmzoo() {
    let hands = "";
    for (let i = 0; i < 26; i++) hands += '<g class="dm-bob' + (i % 3 ? " dm-bob" + (1 + i % 3) : "") + '"><circle cx="' + (8 + i * 15.5) + '" cy="' + (226 + (i % 3) * 6) + '" r="7" fill="#1a1a22"/>' +
      (i % 2 ? '<rect x="' + (6 + i * 15.5) + '" y="' + (204 + (i % 3) * 6) + '" width="4" height="18" rx="2" fill="#1a1a22"/>' : "") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dm4)"/>' +
      /* Lowertown warehouses behind */
      warehouse(0, 60, 90, 70, "#7a3a28") + warehouse(300, 50, 100, 80, "#8a4430") +
      /* grandstand + light towers */
      '<path d="M90 120l40 -50h140l40 50z" fill="#4a5260"/><path d="M130 70h140" stroke="#c9ced6" stroke-width="3"/>' +
      '<rect x="96" y="20" width="4" height="100" fill="#5a606a"/><rect x="84" y="12" width="28" height="12" fill="#e8eef6"/>' +
      '<rect x="300" y="20" width="4" height="100" fill="#5a606a"/><rect x="288" y="12" width="28" height="12" fill="#e8eef6"/>' +
      '<rect x="0" y="120" width="400" height="140" fill="#2f6b3a"/><path d="M0 150h400" stroke="#3b7d47" stroke-width="10" opacity=".6"/>' +
      /* spotlights */
      '<path class="dm-sw" d="M140 168l-50 -150h40z" fill="#fff6c2" opacity=".25"/><path class="dm-sw dm-sw2" d="M260 168l10 -150h40z" fill="#fff6c2" opacity=".25"/>' +
      /* stage */
      '<rect x="110" y="130" width="180" height="16" fill="#1a1a22"/><rect x="104" y="146" width="192" height="40" fill="#2a2a34"/>' +
      '<rect x="110" y="96" width="6" height="50" fill="#3a3a44"/><rect x="284" y="96" width="6" height="50" fill="#3a3a44"/><rect x="110" y="92" width="180" height="8" fill="#3a3a44"/>' +
      '<text x="200" y="124" text-anchor="middle" ' + font + ' font-size="20" fill="' + RED + '" stroke="#000" stroke-width="3" paint-order="stroke">DOOMTREE ZOO</text>' +
      '<rect x="176" y="150" width="8" height="24" fill="#c9ced6"/><rect x="216" y="150" width="8" height="24" fill="#c9ced6"/>' +
      '<rect class="dm-glow" x="104" y="146" width="192" height="4" fill="' + GOLD + '"/>' +
      hands,
      sky("dm4", "#1d1636", "#e0785a"));
  }

  /* 5. Washington Av N and Hennepin Av, the Hennepin Avenue Bridge behind */
  function dmcorner() {
    const bridge = '<g opacity=".95"><rect x="0" y="104" width="400" height="10" fill="#4a6a8a"/>' +
      '<rect x="120" y="20" width="10" height="84" fill="#f2f2ee"/><rect x="138" y="20" width="10" height="84" fill="#f2f2ee"/><rect x="118" y="30" width="32" height="5" fill="#f2f2ee"/><rect x="118" y="60" width="32" height="5" fill="#f2f2ee"/>' +
      '<rect x="252" y="20" width="10" height="84" fill="#f2f2ee"/><rect x="270" y="20" width="10" height="84" fill="#f2f2ee"/><rect x="250" y="30" width="32" height="5" fill="#f2f2ee"/><rect x="250" y="60" width="32" height="5" fill="#f2f2ee"/>' +
      '<path d="M-20 70q80 40 154 -48M134 22q66 70 132 0M266 22q74 92 154 48" stroke="#f2f2ee" stroke-width="2.5" fill="none"/>' +
      Array.from({ length: 18 }, (_, i) => { const x = 10 + i * 22; return '<path d="M' + x + ' 104v-' + (12 + (i % 6) * 5) + '" stroke="#e6e6e0" stroke-width="1"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dm5)"/>' + bridge +
      '<rect x="0" y="114" width="400" height="16" fill="#3a5a7a"/>' +
      /* brick wall with the tag */
      '<rect x="0" y="130" width="400" height="100" fill="' + BRICK + '"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (146 + r * 16) + 'h400" stroke="#6e3020" stroke-width="1.5"/>').join("") +
      tag("DOOMTREE", 70, 196, 42, RED, -5) + tag("BANGARANG", 230, 220, 20, GOLD, -3) + tag("DTR", 330, 168, 22, ICE, 6) +
      '<circle class="dm-sp" cx="352" cy="176" r="4" fill="' + ICE + '" opacity=".7"/><circle class="dm-sp dm-sp2" cx="358" cy="172" r="3" fill="' + ICE + '" opacity=".6"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#6e737b"/>' +
      /* sign pole */
      '<rect x="62" y="70" width="6" height="160" fill="#2b5a3a"/>' + sign(10, 72, 110, "Washington Av N") + sign(19, 98, 92, "Hennepin Av") +
      snow(12),
      sky("dm5", "#f08a5d", "#6a4c93"));
  }

  window.SCENES = { dmstation, dmvarsity, dmduck, dmzoo, dmcorner };
})();
