/* rittz scenes (Regions tab: Atlanta; Gwinnett County, GA - "A white boy from Gwinnett County, Georgia" (My Interview); Lawrenceville is the county seat).
   CSS classes prefixed rz- (the page's own anim-train is kept).
   0 Doraville, the end of MARTA's Gold line and the rail gate into Gwinnett: a train pulling up to the open-air platform, black sign with the GOLD bullet.
   1 The 1885 Gwinnett Historic Courthouse on the Lawrenceville square: red brick, white trim, the tall clock tower (hands turning), big oaks.
   2 On tour: the stage seen from behind the rapper, long red hair, the mic, the crowd's hands up, lights sweeping (In the booth of the 214 / Tech N9ne's bus).
   3 "Up in my Cutlass driving, the sun is shining" (In My Zone): an old-school coupe rolling a Georgia pine road with the kicker thumping.
   4 W Crogan St and S Perry St on the Lawrenceville square: green signs, RITTZ tagged on a brick wall, the courthouse clock tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rzhand{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.rz-hand{transform-box:view-box;animation:rzhand 12s linear infinite}.rz-hand2{animation-duration:90s}' +
    '@keyframes rzwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}.rz-wave{animation:rzwave 1s ease-in-out infinite}.rz-w2{animation-delay:-.33s}.rz-w3{animation-delay:-.66s}' +
    '@keyframes rzbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.rz-beam{transform-box:fill-box;transform-origin:50% 0%;animation:rzbeam 3s ease-in-out infinite}.rz-b2{animation-delay:-1.5s}' +
    '@keyframes rzhair{0%,100%{transform:skewX(0deg)}50%{transform:skewX(-5deg)}}.rz-hair{transform-box:fill-box;transform-origin:50% 0%;animation:rzhair 1.6s ease-in-out infinite}' +
    '@keyframes rzroll{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.rz-roll{animation:rzroll .45s ease-in-out infinite}' +
    '@keyframes rzbass{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.rz-bass{transform-box:fill-box;transform-origin:50% 50%;animation:rzbass 1s ease-out infinite}.rz-bs2{animation-delay:-.5s}' +
    '@keyframes rzpine{0%{transform:translateX(0)}100%{transform:translateX(-200px)}}.rz-pine{animation:rzpine 4s linear infinite}' +
    '@keyframes rzdash{0%{transform:translateX(0)}100%{transform:translateX(-80px)}}.rz-dash{animation:rzdash .8s linear infinite}' +
    '@keyframes rzglow{0%,100%{opacity:.55}50%{opacity:1}}.rz-glow{animation:rzglow 2.4s ease-in-out infinite}' +
    '@keyframes rzleaf{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}.rz-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:rzleaf 3s ease-in-out infinite}' +
    '@keyframes rzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rz-sp{animation:rzspray 1.4s ease-out infinite}.rz-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const RED = "#e0582b", GOLD = "#d4a017", PINE = "#2f6b3a", BRICK = "#a2412c";
  const pine = (x, y, h, c) => '<g fill="' + (c || PINE) + '"><rect x="' + (x - 2) + '" y="' + (y - h * .35) + '" width="4" height="' + (h * .35) + '" fill="#4a3424"/>' +
    '<path d="M' + x + ' ' + (y - h) + 'l' + (h * .16) + ' ' + (h * .3) + 'h-' + (h * .07) + 'l' + (h * .14) + ' ' + (h * .26) + 'h-' + (h * .07) + 'l' + (h * .12) + ' ' + (h * .22) + 'h-' + (h * .56) + 'l' + (h * .12) + ' -' + (h * .22) + 'h-' + (h * .07) + 'l' + (h * .14) + ' -' + (h * .26) + 'h-' + (h * .07) + 'z"/></g>';
  const oak = (x, y, s) => '<g class="rz-leaf"><rect x="' + (x - 4 * s) + '" y="' + (y - 40 * s) + '" width="' + (8 * s) + '" height="' + (40 * s) + '" fill="#5a4030"/>' +
    '<g fill="#3d7a3a"><circle cx="' + x + '" cy="' + (y - 52 * s) + '" r="' + (22 * s) + '"/><circle cx="' + (x - 20 * s) + '" cy="' + (y - 42 * s) + '" r="' + (16 * s) + '"/><circle cx="' + (x + 20 * s) + '" cy="' + (y - 42 * s) + '" r="' + (16 * s) + '"/></g>' +
    '<g fill="#4f9147"><circle cx="' + (x - 6 * s) + '" cy="' + (y - 60 * s) + '" r="' + (10 * s) + '"/><circle cx="' + (x + 12 * s) + '" cy="' + (y - 50 * s) + '" r="' + (8 * s) + '"/></g></g>';
  /* the clock tower of the courthouse: (cx = centre x, by = base y, s = scale) */
  const tower = (cx, by, s, clock) => {
    const w = 34 * s, h = 92 * s, x = cx - w / 2, top = by - h;
    return '<g><rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/>' +
      '<rect x="' + (x - 2 * s) + '" y="' + top + '" width="' + (w + 4 * s) + '" height="' + (4 * s) + '" fill="#f1ece2"/>' +
      '<rect x="' + (x - 2 * s) + '" y="' + (top + 30 * s) + '" width="' + (w + 4 * s) + '" height="' + (3 * s) + '" fill="#f1ece2"/>' +
      '<path d="M' + (cx - 6 * s) + ' ' + (top + 70 * s) + 'v-14a6 6 0 0 1 ' + (12 * s) + ' 0v14z" fill="#2a2a2a" stroke="#f1ece2" stroke-width="' + (1.5 * s) + '"/>' +
      /* belfry with white posts + pyramid roof + finial */
      '<rect x="' + (x + 3 * s) + '" y="' + (top - 22 * s) + '" width="' + (w - 6 * s) + '" height="' + (22 * s) + '" fill="#2a2a2a"/>' +
      '<path d="M' + (x + 3 * s) + ' ' + (top - 22 * s) + 'v22M' + (cx) + ' ' + (top - 22 * s) + 'v22M' + (x + w - 3 * s) + ' ' + (top - 22 * s) + 'v22" stroke="#f1ece2" stroke-width="' + (2.5 * s) + '"/>' +
      '<rect x="' + (x) + '" y="' + (top - 25 * s) + '" width="' + w + '" height="' + (4 * s) + '" fill="#f1ece2"/>' +
      '<path d="M' + (x - 1 * s) + ' ' + (top - 25 * s) + 'L' + cx + ' ' + (top - 54 * s) + 'L' + (x + w + 1 * s) + ' ' + (top - 25 * s) + 'z" fill="#5b5f63"/>' +
      '<path d="M' + cx + ' ' + (top - 54 * s) + 'v-' + (9 * s) + '" stroke="#c9a24a" stroke-width="' + (1.6 * s) + '"/>' +
      /* clock face */
      '<circle cx="' + cx + '" cy="' + (top + 17 * s) + '" r="' + (11 * s) + '" fill="#f7f3ea" stroke="#2a2a2a" stroke-width="' + (1.5 * s) + '"/>' +
      (clock ? '<g class="rz-hand rz-hand2" style="transform-origin:' + cx + 'px ' + (top + 17 * s) + 'px"><path d="M' + cx + ' ' + (top + 17 * s) + 'v-' + (6 * s) + '" stroke="#111" stroke-width="' + (2 * s) + '"/></g>' +
        '<g class="rz-hand" style="transform-origin:' + cx + 'px ' + (top + 17 * s) + 'px"><path d="M' + cx + ' ' + (top + 17 * s) + 'v-' + (9 * s) + '" stroke="#111" stroke-width="' + (1.2 * s) + '"/></g>' :
        '<path d="M' + cx + ' ' + (top + 17 * s) + 'v-' + (7 * s) + 'M' + cx + ' ' + (top + 17 * s) + 'h' + (5 * s) + '" stroke="#111" stroke-width="' + (1.4 * s) + '"/>') + '</g>';
  };

  /* 0. Doraville, end of MARTA's Gold line */
  function rzstation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="128" width="30" height="20" rx="3" fill="#24323f"/>').join("");
    const train = '<g class="anim-train"><rect x="34" y="118" width="330" height="56" rx="8" fill="#d9dde2" stroke="#8a929b" stroke-width="2"/>' + wins +
      '<rect x="34" y="154" width="330" height="6" fill="' + GOLD + '"/><rect x="34" y="162" width="330" height="3" fill="#0b4f9c"/>' +
      '<rect x="336" y="126" width="22" height="30" rx="3" fill="#24323f"/><circle cx="356" cy="166" r="3" fill="#fff6c2"/>' +
      '<rect x="250" y="120" width="64" height="7" rx="2" fill="#111"/><text x="282" y="125.8" text-anchor="middle" ' + font + ' font-size="5.6" fill="#ffb21a">GOLD · DORAVILLE</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rz0)"/>' +
      '<circle class="rz-glow" cx="70" cy="46" r="22" fill="#ffd27a" opacity=".85"/>' +
      pine(330, 112, 70, "#2a5a33") + pine(362, 114, 84, "#2a5a33") + pine(392, 112, 66, "#2a5a33") + pine(20, 112, 60, "#2a5a33") +
      /* open-air canopy on concrete columns */
      '<rect x="0" y="70" width="400" height="12" fill="#c9c4bb"/><rect x="0" y="82" width="400" height="4" fill="#9a958c"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="86" width="10" height="94" fill="#b5afa5"/>').join("") +
      train +
      /* platform edge with the yellow strip */
      '<rect x="0" y="180" width="400" height="80" fill="#8d8a84"/><rect x="0" y="180" width="400" height="6" fill="#f2cf3a"/>' +
      '<path d="M0 200h400" stroke="#7a7771" stroke-width="2"/>' +
      /* black station sign with the gold bullet */
      '<rect x="120" y="22" width="160" height="40" rx="3" fill="#111"/>' +
      '<rect x="128" y="30" width="36" height="24" rx="12" fill="' + GOLD + '"/><text x="146" y="46" text-anchor="middle" ' + font + ' font-size="9" fill="#111">GOLD</text>' +
      '<text x="172" y="47" ' + font + ' font-size="15" fill="#fff">DORAVILLE</text>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">END OF THE GOLD LINE · I-85 NORTH TO GWINNETT</text>',
      sky("rz0", "#4a7fb8", "#f2c38a"));
  }

  /* 1. Gwinnett Historic Courthouse, Lawrenceville square */
  function rzcourt() {
    const arch = (x, y) => '<path d="M' + x + ' ' + (y + 22) + 'v-14a6 6 0 0 1 12 0v14z" fill="#2c3540" stroke="#f1ece2" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rz1)"/>' +
      '<g fill="#fff" opacity=".85"><ellipse cx="80" cy="40" rx="30" ry="9"/><ellipse cx="310" cy="54" rx="36" ry="10"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#5e9a4a"/>' +
      '<g transform="translate(40 50) scale(.8)">' +
      /* main block: red brick, white trim, hipped grey roof */
      '<path d="M96 104l104 -26l104 26z" fill="#5b5f63"/>' +
      '<rect x="96" y="104" width="208" height="92" fill="' + BRICK + '"/>' +
      '<rect x="92" y="102" width="216" height="5" fill="#f1ece2"/><rect x="96" y="148" width="208" height="3" fill="#f1ece2"/>' +
      [108, 132, 156, 232, 256, 280].map(x => arch(x, 116) + arch(x, 160)).join("") +
      /* entry pavilion + steps */
      '<rect x="176" y="120" width="48" height="76" fill="#b04a33"/><path d="M172 120l28 -16l28 16z" fill="#f1ece2"/>' +
      '<path d="M188 196v-30a12 12 0 0 1 24 0v30z" fill="#2c3540" stroke="#f1ece2" stroke-width="2"/>' +
      tower(200, 104, 1, true) +
      '<rect x="160" y="196" width="80" height="6" fill="#d8d2c6"/><rect x="152" y="202" width="96" height="6" fill="#cbc4b6"/></g>' +
      /* walk, oaks */
      '<path d="M190 216h20l30 44h-80z" fill="#d8d2c6"/>' +
      oak(46, 214, 1.2) + oak(360, 216, 1.3) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">HISTORIC COURTHOUSE · LAWRENCEVILLE, GA</text>',
      sky("rz1", "#6fb0e0", "#cfe7f2"));
  }

  /* 2. On tour: the stage from behind */
  function rzstage() {
    const hands = (cls, x0) => '<g class="rz-wave ' + cls + '" fill="#141018">' + [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M' + (x0 + i * 56 - 3) + ' 152l-2 -22h8l-1 22z"/><ellipse cx="' + (x0 + i * 56 - 1) + '" cy="126" rx="6" ry="7"/><path d="M' + (x0 + i * 56 - 7) + ' 124l-2 -9M' + (x0 + i * 56 - 3) + ' 120l-1 -10M' + (x0 + i * 56 + 1) + ' 120l1 -10M' + (x0 + i * 56 + 5) + ' 123l2 -8" stroke="#141018" stroke-width="2.6" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#0d0a14"/>' +
      '<g class="rz-beam" opacity=".35"><path d="M70 0l-50 150h100z" fill="' + GOLD + '"/></g>' +
      '<g class="rz-beam rz-b2" opacity=".35"><path d="M330 0l-50 150h100z" fill="' + RED + '"/></g>' +
      '<g class="rz-beam" opacity=".25"><path d="M200 0l-40 150h80z" fill="#f7f3ea"/></g>' +
      /* the crowd */
      '<path d="M0 170q20 -14 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v30h-400z" fill="#1d1724"/>' +
      hands("", 10) + hands("rz-w2", 38) + hands("rz-w3", 24) +
      '<g fill="#ffe9a8" opacity=".8">' + [30, 90, 150, 230, 300, 360].map((x, i) => '<rect class="rz-glow" x="' + x + '" y="' + (128 + (i % 2) * 8) + '" width="4" height="7" rx="1"/>').join("") + '</g>' +
      /* stage deck + monitors */
      '<rect x="0" y="196" width="400" height="64" fill="#26222c"/><rect x="0" y="196" width="400" height="4" fill="#4a4452"/>' +
      '<path d="M30 230l10 -26h50l10 26z" fill="#111"/><path d="M300 230l10 -26h50l10 26z" fill="#111"/>' +
      /* the rapper from behind: long red hair over a black tee, mic up */
      '<g transform="translate(200 0)">' +
      '<path d="M-34 260q0 -58 34 -64q34 6 34 64z" fill="#121212"/>' +
      '<rect x="-7" y="178" width="14" height="14" fill="#e3b08f"/>' +
      '<ellipse cx="0" cy="166" rx="20" ry="22" fill="#b4441f"/>' +
      '<path class="rz-hair" d="M-20 166q-4 40 6 70h28q10 -30 6 -70z" fill="' + RED + '"/>' +
      '<path d="M-12 172q-2 30 4 58M0 174v58M12 172q2 30 -4 58" stroke="#9c3a18" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path d="M30 216q20 -20 24 -46" stroke="#e3b08f" stroke-width="9" stroke-linecap="round" fill="none"/>' +
      '<rect x="48" y="150" width="10" height="20" rx="4" fill="#2b2b2b"/><circle cx="53" cy="150" r="7" fill="#6a6a6a"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6" opacity=".8">ON THE ROAD · EVERY CITY IS A BLUR</text>');
  }

  /* 3. The Cutlass on a Georgia pine road */
  function rzcutlass() {
    const pines = x0 => [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550].map((d, i) => pine(x0 + d, 150, 60 + (i % 3) * 14, i % 2 ? "#2a5a33" : PINE)).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rz3)"/>' +
      '<circle class="rz-glow" cx="320" cy="52" r="30" fill="#ffd54a"/>' +
      '<g stroke="#ffd54a" stroke-width="3" class="rz-glow">' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<path d="M' + (320 + Math.cos(a * Math.PI / 180) * 38) + ' ' + (52 + Math.sin(a * Math.PI / 180) * 38) + 'L' + (320 + Math.cos(a * Math.PI / 180) * 48) + ' ' + (52 + Math.sin(a * Math.PI / 180) * 48) + '"/>').join("") + '</g>' +
      '<path d="M0 140q100 -30 200 -24q100 6 200 24v20h-400z" fill="#7aa86a"/>' +
      '<g class="rz-pine">' + pines(0) + '</g>' +
      '<rect x="0" y="150" width="400" height="10" fill="#b5795a"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3d3b39"/>' +
      '<g class="rz-dash"><path d="M0 206h40M80 206h40M160 206h40M240 206h40M320 206h40M400 206h40" stroke="#f2cf3a" stroke-width="4"/></g>' +
      /* the old-school coupe: long hood, boxy roof, chrome, wire wheels */
      '<g class="rz-roll">' +
      '<path d="M70 196v-22q0 -6 6 -8l36 -6l26 -24h88l26 24l52 6q8 2 8 10v20z" fill="#7a1f1f"/>' +
      '<path d="M144 160l20 -20h58l20 20z" fill="#9fc3d8"/><path d="M193 140v20" stroke="#7a1f1f" stroke-width="5"/>' +
      '<path d="M70 184h244" stroke="#d9dde2" stroke-width="3"/><rect x="306" y="176" width="10" height="7" fill="#fff6c2"/><rect x="68" y="176" width="6" height="7" fill="#d6261f"/>' +
      [112, 270].map(x => '<circle cx="' + x + '" cy="198" r="17" fill="#141414"/><circle cx="' + x + '" cy="198" r="10" fill="#c9cdd2"/><circle cx="' + x + '" cy="198" r="4" fill="#7a7f86"/>').join("") +
      '</g>' +
      /* the kicker thumping out the trunk */
      '<circle class="rz-bass" cx="74" cy="170" r="16" fill="none" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<circle class="rz-bass rz-bs2" cx="74" cy="170" r="16" fill="none" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">SUNSHINE IN MY POCKET · GEORGIA</text>',
      sky("rz3", "#58a7e0", "#fde6b0"));
  }

  /* 4. W Crogan St and S Perry St, Lawrenceville */
  function rzcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rz4)"/>' +
      '<circle class="rz-glow" cx="60" cy="44" r="16" fill="#ffd27a" opacity=".8"/>' +
      /* the courthouse clock tower behind */
      tower(250, 140, .8, true) + '<path d="M180 134l70 -12l70 12z" fill="#5b5f63"/>' +
      oak(150, 140, .9) + oak(350, 140, 1) +
      /* brick wall */
      '<rect x="0" y="134" width="400" height="92" fill="#8e3b2a"/>' +
      '<g stroke="#6e2c1f" stroke-width="1">' + [146, 158, 170, 182, 194, 206, 218].map((y, i) => '<path d="M0 ' + y + 'h400"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(j => '<path d="M' + (j * 40 + (i % 2) * 20) + ' ' + (y - 12) + 'v12"/>').join("")).join("") + '</g>' +
      '<rect x="0" y="134" width="400" height="5" fill="#d8d2c6"/>' +
      tag("RITTZ", 22, 200, 50, RED, -6) + tag("SLUMERICAN", 26, 220, 16, GOLD, -3) + tag("JONNY VALIANT", 140, 218, 15, "#f7f3ea", -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#5d5a55"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="88" width="6" height="138" fill="#2f2f2f"/>' + sign(280, 90, 118, "W Crogan St") + sign(288, 116, 102, "S Perry St") +
      '<g class="rz-sp"><circle cx="196" cy="166" r="3" fill="' + RED + '" opacity=".7"/></g><g class="rz-sp rz-sp2"><circle cx="202" cy="160" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("rz4", "#2a2f5a", "#f08a5d"));
  }

  window.SCENES = { rzstation: rzstation, rzcourt: rzcourt, rzstage: rzstage, rzcutlass: rzcutlass, rzcorner: rzcorner };
})();
