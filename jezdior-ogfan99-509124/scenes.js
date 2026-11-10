/* jezdior scenes (Regions tab: Los Angeles + SoCal; Hollywood, LA — son of UK punk guitarist Steve Dior,
   walks "down the boulevard jus' lookin' at all the stars" on "Lucky Enough"; plays futsal around LA; his fans are the Funeral Crew).
   CSS classes prefixed jz- (the page's own anim-train slides the train in).
   1 Metro B Line pulling into Hollywood/Highland, underground under Hollywood Blvd.
   2 The sidewalk stars on Hollywood Blvd at night: pink terrazzo stars in charcoal squares, one blank star waiting ("That'll be me one day").
   3 A rooftop futsal court at night under the lights, the ball bouncing.
   4 The backyard shed where his dad played guitar: an electric guitar on a stand, amp glowing, string lights.
   5 Hollywood Blvd & N Highland Ave: green signs, JEZ DIOR tagged, the Hollywood Hills and palms under purple skies.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jzglow{0%,100%{opacity:.35}50%{opacity:1}}.jz-glow{animation:jzglow 1.4s ease-in-out infinite}.jz-glow2{animation-delay:-.7s}' +
    '@keyframes jztw{0%,100%{opacity:.2}50%{opacity:1}}.jz-tw{animation:jztw 2.2s ease-in-out infinite}.jz-tw2{animation-delay:-1.1s}.jz-tw3{animation-delay:-.5s}' +
    '@keyframes jzball{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.jz-ball{animation:jzball 1.1s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes jzroll{0%{transform:translateX(0)}50%{transform:translateX(120px)}100%{transform:translateX(0)}}.jz-roll{animation:jzroll 4s ease-in-out infinite}' +
    '@keyframes jzcar{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.jz-car{animation:jzcar 6s linear infinite}.jz-car2{animation-duration:8s;animation-delay:-3s}' +
    '@keyframes jzstr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}.jz-str{transform-box:fill-box;transform-origin:50% 50%;animation:jzstr .18s linear infinite}' +
    '@keyframes jznote{0%{transform:translate(0,0);opacity:1}100%{transform:translate(30px,-60px);opacity:0}}.jz-note{animation:jznote 2.6s ease-out infinite}.jz-note2{animation-delay:-1.3s}' +
    '@keyframes jzsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.jz-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jzsway 3.6s ease-in-out infinite}' +
    '@keyframes jzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jz-sp{animation:jzspray 1.4s ease-out infinite}.jz-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const PUR = "#c9a7ff", ROSE = "#ff4d6d", BONE = "#efe7d8", RED = "#e3131b";
  const star5 = (cx, cy, r, fill, stroke) => {
    let d = "";
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); }
    return '<path d="' + d + 'z" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.6"/>';
  };
  const palm = (x, base, h, s, col) => {
    const top = base - h;
    return '<g><path d="M' + (x - 2 * s) + ' ' + base + 'Q' + (x + 3 * s) + ' ' + (base - h / 2) + ' ' + x + ' ' + top + 'h' + (3 * s) + 'Q' + (x + 5 * s) + ' ' + (base - h / 2) + ' ' + (x + 2 * s) + ' ' + base + 'z" fill="' + col + '"/>' +
      '<g class="jz-sway" fill="' + col + '">' + [-80, -50, -20, 10, 40, 70, 200, 160].map(a => '<path transform="rotate(' + a + ' ' + (x + s) + ' ' + top + ')" d="M' + (x + s) + ' ' + top + 'l' + (26 * s) + ' ' + (-6 * s) + 'l' + (-4 * s) + ' ' + (10 * s) + 'z"/>').join("") + '</g></g>';
  };
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="24" height="8" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 14) + '" r="4" fill="#111"/><rect x="44" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/><rect x="0" y="' + (y + 3) + '" width="3" height="3" fill="#ff3b3b"/></g>';

  /* 1. Metro B Line into Hollywood/Highland (underground) */
  function jzstop() {
    const win = (x0) => Array.from({ length: 5 }, (_, i) => '<rect x="' + (x0 + 12 + i * 30) + '" y="122" width="22" height="20" rx="2" fill="#1b2630"/>').join("");
    const coach = (x0) => '<rect x="' + x0 + '" y="110" width="166" height="66" rx="5" fill="#c9ced3" stroke="#6d757c" stroke-width="2"/>' + win(x0) +
      '<rect x="' + x0 + '" y="150" width="166" height="6" fill="' + RED + '"/><rect x="' + (x0 + 74) + '" y="118" width="18" height="52" fill="#aab1b7" stroke="#6d757c"/>';
    const train = '<g class="anim-train">' + coach(16) + coach(186) + '<path d="M352 110h22q12 0 14 14v52h-36z" fill="#c9ced3" stroke="#6d757c" stroke-width="2"/><rect x="358" y="120" width="22" height="18" rx="3" fill="#1b2630"/>' +
      '<rect x="352" y="150" width="36" height="6" fill="' + RED + '"/><circle cx="382" cy="164" r="3" fill="#fff6c2" class="jz-glow"/>' +
      [40, 150, 210, 320].map(x => '<circle cx="' + x + '" cy="180" r="7" fill="#222"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2730"/>' +
      /* vaulted ceiling */
      '<path d="M0 0h400v70q-200 -60 -400 0z" fill="#3d3946"/>' +
      '<g stroke="#57515f" stroke-width="2" fill="none">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 62q' + 25 + ' -40 50 0"/>').join("") + '</g>' +
      '<g class="jz-glow">' + [60, 200, 340].map(x => '<rect x="' + (x - 26) + '" y="58" width="52" height="5" rx="2" fill="#fff1d0"/>').join("") + '</g>' +
      /* tiled wall */
      '<rect x="0" y="70" width="400" height="40" fill="#5b4f63"/>' +
      '<g stroke="#4a4052" stroke-width="1">' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 70v40"/>').join("") + '<path d="M0 90h400"/></g>' +
      '<rect x="0" y="104" width="400" height="6" fill="' + PUR + '" opacity=".7"/>' +
      train +
      '<rect x="0" y="186" width="400" height="10" fill="#6f6a74"/><rect x="0" y="196" width="400" height="36" fill="#a19aa6"/><rect x="0" y="196" width="400" height="5" fill="#f2c94c"/>' +
      /* station sign */
      '<rect x="92" y="204" width="216" height="24" rx="3" fill="#111"/>' +
      '<circle cx="108" cy="216" r="9" fill="' + RED + '"/><text x="108" y="220" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">B</text>' +
      '<text x="124" y="221" ' + font + ' font-size="13" fill="#fff">HOLLYWOOD/HIGHLAND</text>' +
      '<rect x="0" y="232" width="400" height="28" fill="#3b3640"/>' +
      label(70, 260, "METRO B LINE · HOLLYWOOD/HIGHLAND · UNDER HOLLYWOOD BLVD"));
  }

  /* 2. The sidewalk stars on Hollywood Blvd at night */
  function jzstars() {
    const tile = (x, y, blank) => '<g><rect x="' + x + '" y="' + y + '" width="86" height="58" fill="#33302f" stroke="#1f1d1c" stroke-width="2"/>' +
      star5(x + 43, y + 30, 24, "#e8a4b4", "#c8a25a") + '<circle cx="' + (x + 43) + '" cy="' + (y + 31) + '" r="8" fill="#c8a25a" opacity="' + (blank ? .9 : .55) + '"/>' +
      (blank ? '<rect class="jz-glow" x="' + (x + 3) + '" y="' + (y + 3) + '" width="80" height="52" fill="none" stroke="' + PUR + '" stroke-width="2"/>' : '') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jzs2)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="jz-tw' + (i % 3 ? " jz-tw" + (i % 3 + 1) : "") + '" cx="' + (15 + i * 28) + '" cy="' + (12 + (i * 37) % 40) + '" r="1.4" fill="#fff"/>').join("") +
      /* storefront row */
      '<rect x="0" y="54" width="400" height="66" fill="#241d2c"/>' +
      [10, 110, 210, 310].map((x, i) => '<rect x="' + x + '" y="62" width="80" height="50" fill="' + ["#3a2f45", "#2f3445", "#45302f", "#33452f"][i] + '"/><rect class="jz-glow' + (i % 2 ? " jz-glow2" : "") + '" x="' + (x + 8) + '" y="70" width="64" height="30" fill="' + ["#ffd08a", "#a7d8ff", "#ffb3c1", "#d6ffb3"][i] + '" opacity=".6"/>').join("") +
      palm(98, 120, 70, .8, "#120e18") + palm(300, 120, 80, .9, "#120e18") +
      car("jz-car", 126, "#7a5cff") + car("jz-car jz-car2", 126, "#e8e1d4") +
      '<rect x="0" y="146" width="400" height="6" fill="#8d8a86"/>' +
      /* terrazzo sidewalk with stars */
      '<rect x="0" y="152" width="400" height="80" fill="#2a2726"/>' +
      tile(4, 160, false) + tile(102, 160, false) + tile(200, 160, true) + tile(298, 160, false) +
      '<text class="jz-glow" x="243" y="157" text-anchor="middle" ' + font + ' font-size="8" fill="' + PUR + '">THAT\'LL BE ME ONE DAY</text>' +
      label(70, 260, "HOLLYWOOD BLVD · WALKING DOWN THE BOULEVARD"),
      sky("jzs2", "#140c24", "#3b2350"));
  }

  /* 3. Rooftop futsal court at night */
  function jzfutsal() {
    return svg(
      '<rect width="400" height="260" fill="url(#jzs3)"/>' +
      /* skyline */
      '<g fill="#1a1426">' + [[0, 80, 40], [40, 60, 30], [70, 90, 50], [120, 70, 36], [156, 100, 40], [260, 76, 44], [304, 96, 30], [334, 66, 66]].map(b => '<rect x="' + b[0] + '" y="' + (140 - b[1]) + '" width="' + b[2] + '" height="' + b[1] + '"/>').join("") + '</g>' +
      '<g fill="#ffe2a0" opacity=".55">' + Array.from({ length: 22 }, (_, i) => '<rect x="' + (8 + (i * 47) % 380) + '" y="' + (78 + (i * 23) % 56) + '" width="4" height="5"/>').join("") + '</g>' +
      /* light poles */
      [30, 370].map(x => '<rect x="' + (x - 2) + '" y="30" width="4" height="120" fill="#555"/><rect x="' + (x - 16) + '" y="24" width="32" height="10" rx="2" fill="#777"/><g opacity=".14"><path class="jz-glow" d="M' + (x - 16) + ' 34l-30 110h92l-30 -110z" fill="#fff6d0"/></g>').join("") +
      /* fence */
      '<rect x="0" y="120" width="400" height="30" fill="none"/>' +
      '<g stroke="#5c5866" stroke-width="1" opacity=".8">' + Array.from({ length: 41 }, (_, i) => '<path d="M' + (i * 10) + ' 112l10 36M' + (i * 10 + 10) + ' 112l-10 36"/>').join("") + '</g>' +
      '<rect x="0" y="110" width="400" height="3" fill="#5c5866"/>' +
      /* court */
      '<path d="M20 232l40 -84h280l40 84z" fill="#2f6fb0"/>' +
      '<path d="M40 228l32 -72h256l32 72z" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 156v72" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="190" rx="28" ry="12" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M54 196h40q8 -16 0 -30h-30" fill="none" stroke="#fff" stroke-width="2"/><path d="M346 196h-40q-8 -16 0 -30h30" fill="none" stroke="#fff" stroke-width="2"/>' +
      /* goals */
      '<path d="M44 166v-22h22v22" fill="none" stroke="#f4f4f4" stroke-width="3"/><path d="M356 166v-22h-22v22" fill="none" stroke="#f4f4f4" stroke-width="3"/>' +
      '<g stroke="#bbb" stroke-width=".6">' + [48, 52, 56, 60].map(x => '<path d="M' + x + ' 144v22"/>').join("") + [340, 344, 348, 352].map(x => '<path d="M' + x + ' 144v22"/>').join("") + '</g>' +
      /* ball */
      '<g class="jz-roll"><g class="jz-ball"><circle cx="140" cy="200" r="9" fill="#f7f3ea" stroke="#222" stroke-width="1.5"/><path d="M136 196l4 -2l4 2l-1 5h-6z" fill="#222"/></g></g>' +
      label(110, 180, "FUTSAL UNDER THE LIGHTS · LA"),
      sky("jzs3", "#0d0a1c", "#3a2a5c"));
  }

  /* 4. The backyard shed: dad's guitar */
  function jzshed() {
    return svg(
      '<rect width="400" height="260" fill="#1a1410"/>' +
      /* wooden plank wall */
      '<g>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="40" height="190" fill="' + (i % 2 ? "#5a3e2b" : "#634430") + '" stroke="#3d2a1d" stroke-width="2"/>').join("") + '</g>' +
      /* string lights */
      '<path d="M0 26q100 30 200 0t200 0" fill="none" stroke="#222" stroke-width="1.5"/>' +
      Array.from({ length: 12 }, (_, i) => { const x = 16 + i * 33, y = 26 + 12 * Math.sin((x / 400) * Math.PI * 2) + 6; return '<circle class="jz-tw' + (i % 3 ? " jz-tw" + (i % 3 + 1) : "") + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="4" fill="#ffd98a"/>'; }).join("") +
      /* window with purple sky */
      '<rect x="270" y="50" width="96" height="70" fill="#4b2a6e" stroke="#2b1d12" stroke-width="5"/><path d="M318 50v70M270 85h96" stroke="#2b1d12" stroke-width="4"/>' +
      '<circle cx="296" cy="68" r="8" fill="#f4e7c8" opacity=".8"/>' +
      /* floor */
      '<rect x="0" y="190" width="400" height="42" fill="#3a2a1e"/>' +
      /* amp */
      '<rect x="196" y="132" width="78" height="62" rx="4" fill="#1d1d1d" stroke="#000" stroke-width="2"/><rect x="202" y="148" width="66" height="40" fill="#3a3530"/>' +
      '<g stroke="#2a2622" stroke-width="1">' + Array.from({ length: 8 }, (_, i) => '<path d="M202 ' + (151 + i * 5) + 'h66"/>').join("") + '</g>' +
      '<rect x="202" y="136" width="66" height="8" fill="' + BONE + '"/>' + [210, 220, 230, 240, 250, 260].map(x => '<circle cx="' + x + '" cy="140" r="2" fill="#222"/>').join("") +
      '<circle class="jz-glow" cx="266" cy="140" r="2" fill="' + ROSE + '"/>' +
      /* guitar on a stand */
      '<path d="M96 198l18 -40M150 198l-18 -40" stroke="#222" stroke-width="4"/>' +
      '<rect x="118" y="34" width="10" height="100" fill="#3b2516"/>' +
      '<rect x="114" y="22" width="18" height="18" rx="3" fill="#2a1a10"/>' + [26, 32, 38].map(y => '<circle cx="112" cy="' + y + '" r="2" fill="#ccc"/><circle cx="134" cy="' + y + '" r="2" fill="#ccc"/>').join("") +
      '<path d="M123 128c-30 0 -40 20 -32 34c-12 10 -8 34 14 38c10 2 26 2 36 0c22 -4 26 -28 14 -38c8 -14 -2 -34 -32 -34z" fill="' + ROSE + '" stroke="#5a1020" stroke-width="2"/>' +
      '<path d="M108 150c-6 -10 4 -20 15 -20c11 0 21 10 15 20" fill="' + BONE + '" opacity=".85"/>' +
      '<rect x="110" y="168" width="26" height="6" rx="2" fill="#222"/><rect x="112" y="182" width="22" height="4" fill="#999"/>' +
      '<g class="jz-str">' + [119, 121.5, 124, 126.5].map(x => '<path d="M' + x + ' 34v150" stroke="#e8e8e8" stroke-width=".7"/>').join("") + '</g>' +
      '<path d="M136 188q40 10 66 -10" fill="none" stroke="#111" stroke-width="3"/>' +
      /* notes */
      '<g fill="' + PUR + '"><g class="jz-note"><circle cx="250" cy="110" r="5"/><rect x="254" y="90" width="2" height="20"/></g><g class="jz-note jz-note2"><circle cx="224" cy="116" r="5"/><rect x="228" y="96" width="2" height="20"/></g></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#120d0a"/>' +
      label(70, 260, "THE BACKYARD SHED · AT LEAST MY GUITAR WAS STILL THERE"));
  }

  /* 5. Hollywood Blvd & N Highland Ave */
  function jzcorner() {
    const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#jzs5)"/>' +
      '<circle cx="80" cy="64" r="22" fill="#ffb38a" opacity=".85"/>' +
      /* hollywood hills */
      '<path d="M0 120q40 -50 90 -40t90 -30t100 20t120 -10v80h-400z" fill="#3b2650"/>' +
      '<path d="M0 132q60 -30 120 -20t110 -20t170 10v40h-400z" fill="#2a1b3a"/>' +
      '<rect x="250" y="40" width="2" height="34" fill="#1a1024"/><circle class="jz-glow" cx="251" cy="40" r="2" fill="#ff4040"/>' +
      palm(40, 150, 110, 1, "#140d1c") + palm(160, 150, 90, .9, "#140d1c") + palm(220, 150, 120, 1, "#140d1c") +
      /* wall */
      '<rect x="0" y="150" width="400" height="82" fill="#d8cfc4"/>' +
      '<g stroke="#c2b7aa" stroke-width="1">' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (170 + r * 16) + 'h400"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40 + (r % 2) * 20) + ' ' + (150 + r * 16) + 'v16"/>').join("")).join("") + '</g>' +
      tag("JEZ DIOR", 22, 214, 44, PUR, -5) +
      tag("FUNERAL CREW", 210, 180, 15, "#1a1a1a", 4) + tag("LUCKY ENOUGH", 214, 222, 16, ROSE, -3) +
      '<g fill="' + PUR + '" opacity=".75"><circle class="jz-sp" cx="206" cy="200" r="3"/><circle class="jz-sp jz-sp2" cx="214" cy="194" r="2.5"/><circle class="jz-sp" cx="210" cy="206" r="2"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      '<rect x="364" y="80" width="5" height="152" fill="#7a7f86"/>' +
      sign(262, 70, 134, "HOLLYWOOD BLVD") + sign(290, 96, 106, "N HIGHLAND AV") +
      label(12, 300, "HOLLYWOOD BLVD &amp; N HIGHLAND AV · HOLLYWOOD HILLS"),
      sky("jzs5", "#2a1446", "#d98bb0"));
  }

  window.SCENES = { jzstop, jzstars, jzfutsal, jzshed, jzcorner };
})();
