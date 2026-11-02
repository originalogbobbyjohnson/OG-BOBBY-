/* Newark, New Jersey opening scenes for the Redman game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes tick{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.hand{transform-box:view-box;animation:tick 8s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-340px)}}' +
    '.mq{animation:scroll 7s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-7deg) translateY(0)}50%{transform:rotate(7deg) translateY(10px)}}' +
    '.chute{transform-box:fill-box;transform-origin:50% 0;animation:sway 3.4s ease-in-out infinite}' +
    '@keyframes knock{0%,60%,100%{transform:translateX(0)}65%,75%{transform:translateX(-3px)}70%,80%{transform:translateX(2px)}}' +
    '.knock{animation:knock 2s infinite}' +
    '@keyframes rip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}' +
    '.rip{animation:rip 3s ease-in-out infinite}' +
    '@keyframes spot{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.spot{transform-box:fill-box;transform-origin:50% 100%;animation:spot 4s ease-in-out infinite}.spot2{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* rail badge: rounded box with the line name, like the NJ Transit signs */
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#e8322b", GOLD = "#ffd34d", GREEN = "#38c172", BRICK = "#9c3f2c";

  /* 1. Newark Broad Street: the NJ Transit train in on the high platform, the old station's brick clock tower, the sign pointing down Broad St to the arena */
  function train() {
    const { svg, sky, tag, T, cloud, brickLines } = LM1;
    let win = ""; for (let x = 14; x < 280; x += 36) win += '<rect x="' + x + '" y="116" width="24" height="18" rx="2" fill="#cfe6ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rd1)"/>' + cloud("lm-drift", 0, 26, 1) +
      /* the 1903 station and its clock tower */
      '<rect x="250" y="56" width="150" height="56" fill="#9c4a32"/>' + brickLines(250, 56, 150, 56, "#7e3a26", 6) +
      '<rect x="300" y="6" width="44" height="106" fill="#a8533a"/>' + brickLines(300, 6, 44, 106, "#7e3a26", 6) +
      '<path d="M296 6h52l-6-6h-40z" fill="#5a3a2a"/><rect x="296" y="20" width="52" height="4" fill="#e8dcc4"/>' +
      '<circle cx="322" cy="42" r="13" fill="#f6f2e6" stroke="#2a2a2a" stroke-width="2"/>' +
      '<g class="lm-spin" style="animation-duration:60s;transform-box:view-box;transform-origin:322px 42px"><path d="M322 42V32" stroke="#111" stroke-width="2"/></g><path d="M322 42h7" stroke="#111" stroke-width="2"/>' +
      [262, 280, 360, 378].map(x => '<path d="M' + x + ' 104v-24a6 6 0 0 1 12 0v24z" fill="#2a1a12"/>').join("") +
      /* the high platform canopy and sign */
      '<rect x="0" y="80" width="250" height="8" fill="#3a3e46"/><rect x="30" y="88" width="5" height="20" fill="#555"/><rect x="200" y="88" width="5" height="20" fill="#555"/>' +
      '<rect x="20" y="40" width="210" height="28" rx="3" fill="#111"/><rect x="20" y="40" width="210" height="3" fill="#fff"/>' +
      T(30, 61, "Newark Broad Street", 15, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* the train: silver with the blue, orange and magenta stripes */
      '<g class="anim-train"><rect x="-10" y="106" width="300" height="58" rx="7" fill="#d4d8de" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="-10" y="140" width="300" height="5" fill="#1a3a8a"/><rect x="-10" y="145" width="300" height="4" fill="#f47b20"/><rect x="-10" y="149" width="300" height="3" fill="#c2185b"/>' + win +
      '<rect x="270" y="112" width="14" height="26" rx="3" fill="#1d2a3a"/><circle cx="282" cy="156" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="164" width="400" height="8" fill="#eab308"/><rect x="0" y="172" width="400" height="88" fill="#8f8a80"/>' +
      /* the walk to the arena */
      '<rect x="270" y="180" width="120" height="34" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      T(330, 195, "Broad St ↓", 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) + T(330, 208, "to the Arena", 10, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      tag("FUNK DOC", 16, 214, 36, "#ff3b30", -5) + tag("BRICK CITY", 26, 250, 24, "#ffd34d", -3) + tag("DEF SQUAD", 250, 250, 22, "#38c172", -4),
      sky("rd1", "#8fc3ea", "#f2dcb0"));
  }

  /* 2. The arena on Mulberry St: red-brown brick, the tall glass atrium, the wrap-around LED screen; lights sweep the sky */
  function arena() {
    let glass = "";
    for (let x = 150; x < 250; x += 12) glass += '<rect x="' + x + '" y="46" width="10" height="120" fill="#7fb4d6" opacity="' + (x % 24 ? .75 : .55) + '"/>';
    let crowd = "";
    for (let i = 0; i < 22; i++) { const x = 8 + i * 18, c = [RED, GOLD, "#f1ede3", GREEN][i % 4]; crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (226 + (i % 3) * 3) + '" r="6" fill="#2b1d16"/><rect x="' + (x - 7) + '" y="' + (232 + (i % 3) * 3) + '" width="14" height="22" rx="5" fill="' + c + '"/></g>'; }
    const mqText = '<text font-family="Anton, Impact, sans-serif" font-size="18" textLength="330" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">TONIGHT: FUNK DOC  *  DEF SQUAD  *</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(16) +
      '<g class="spot"><path d="M70 200l-30 -190h40z" fill="#fff6c2" opacity=".14"/></g><g class="spot spot2"><path d="M330 200l-10 -190h40z" fill="#fff6c2" opacity=".14"/></g>' +
      /* brick wings */
      '<rect x="20" y="70" width="130" height="146" fill="#8a3a2a"/><rect x="250" y="70" width="130" height="146" fill="#8a3a2a"/>' +
      (function () { let b = ""; for (let y = 78; y < 214; y += 8) b += '<path d="M20 ' + y + 'h130M250 ' + y + 'h130" stroke="#6e2c20" stroke-width="1"/>'; return b; })() +
      /* glass atrium */
      '<path d="M146 40h108v176H146z" fill="#1d3550"/>' + glass +
      '<path d="M146 40l54 -18 54 18z" fill="#2a4664"/>' +
      /* wrap-around LED screen */
      '<rect x="14" y="166" width="372" height="30" rx="3" fill="#0b0b0f" stroke="#444" stroke-width="2"/>' +
      '<svg x="18" y="168" width="364" height="26" viewBox="0 0 364 26"><g class="mq">' +
        '<g transform="translate(4 20)">' + mqText + '</g><g transform="translate(344 20)">' + mqText + '</g><g transform="translate(684 20)">' + mqText + '</g>' +
      '</g></svg>' +
      '<rect x="0" y="216" width="400" height="44" fill="#3a3c42"/>' + crowd +
      tag("THE ROCK", 18, 40, 26, GOLD, -5),
      sky("g2", "#0a0a1e", "#3a1f3a"));
  }

  /* 3. The famous tiny house tour: a skinny little house, the doorbell that never worked (so you knock), mess spilling out the window */
  function cribs() {
    let siding = "";
    for (let y = 98; y < 214; y += 7) siding += '<path d="M110 ' + y + 'h180" stroke="#c9c2ae" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cld"><ellipse cx="0" cy="36" rx="42" ry="9" fill="#fff" opacity=".7"/></g><g class="cld cld2"><ellipse cx="0" cy="62" rx="30" ry="7" fill="#fff" opacity=".55"/></g>' +
      /* neighbors */
      '<rect x="0" y="120" width="96" height="96" fill="#b7c3cf"/><path d="M-6 122l54 -34 54 34z" fill="#6b5a52"/>' +
      '<rect x="304" y="114" width="96" height="102" fill="#d9c9a8"/><path d="M298 116l54 -34 54 34z" fill="#5d4b42"/>' +
      /* the house */
      '<rect x="110" y="96" width="180" height="120" fill="#e9e2cf"/>' + siding +
      '<path d="M100 100l100 -62 100 62z" fill="#7a3b2e" stroke="#5a2a20" stroke-width="2"/>' +
      '<rect x="240" y="44" width="14" height="30" fill="#7a6a5e"/>' +
      /* messy window: clothes pile, stacked boxes, a tilted lamp */
      '<rect x="128" y="112" width="70" height="54" fill="#3a4250" stroke="#fff" stroke-width="3"/>' +
      '<path d="M132 162q10 -16 20 -6q8 -14 18 -2q10 -10 22 4v4h-60z" fill="' + RED + '"/><path d="M140 160q8 -8 14 0z" fill="' + GREEN + '"/>' +
      '<rect x="174" y="132" width="18" height="14" fill="#c49a5a"/><rect x="176" y="120" width="14" height="12" fill="#b3884a" transform="rotate(8 183 126)"/>' +
      '<path d="M140 118l10 -2 2 10h-12z" fill="' + GOLD + '" transform="rotate(-14 146 122)"/>' +
      '<path d="M163 112v54M128 139h70" stroke="#fff" stroke-width="2"/>' +
      /* the door, knocking, with a note */
      '<g class="knock"><rect x="220" y="140" width="46" height="76" fill="#7a3b2e" stroke="#5a2a20" stroke-width="2"/><circle cx="258" cy="180" r="3" fill="' + GOLD + '"/></g>' +
      '<rect x="270" y="160" width="10" height="12" rx="2" fill="#444"/><circle cx="275" cy="166" r="2.5" fill="#999"/>' +
      '<rect x="224" y="150" width="38" height="22" fill="#fffbe8" transform="rotate(-4 243 161)"/>' +
      '<text x="243" y="159" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="7" textLength="32" lengthAdjust="spacingAndGlyphs" fill="#111" transform="rotate(-4 243 161)">BELL DON\'T</text>' +
      '<text x="243" y="168" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="7" textLength="32" lengthAdjust="spacingAndGlyphs" fill="#111" transform="rotate(-4 243 161)">WORK. KNOCK</text>' +
      /* steps, front yard, a mattress leaning by the door */
      '<rect x="212" y="214" width="62" height="6" fill="#9a9488"/>' +
      '<rect x="290" y="168" width="14" height="48" rx="3" fill="#e9e6f2" stroke="#9aa" stroke-width="1" transform="rotate(8 297 192)"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#5b8f3e"/><rect x="0" y="236" width="400" height="24" fill="#4a4c52"/>' +
      tag("CRIBS", 22, 44, 34, RED, -6),
      sky("g3", "#7ec3ea", "#d8eef8"));
  }

  /* 4. Doc's a licensed skydiver: a red-and-gold canopy drifting down over Weequahic Park lake and its trees */
  function skydive() {
    let trees = "";
    for (let i = 0; i < 14; i++) { const x = 10 + i * 30, y = 176 + (i % 3) * 4; trees += '<circle cx="' + x + '" cy="' + y + '" r="' + (14 + (i % 2) * 4) + '" fill="' + (i % 2 ? "#3f7a3a" : "#4f8f44") + '"/>'; }
    let ripples = "";
    for (let i = 0; i < 6; i++) ripples += '<path class="rip" style="animation-delay:-' + i * .5 + 's" d="M' + (40 + i * 56) + ' ' + (214 + (i % 3) * 12) + 'h30" stroke="#cfeaf6" stroke-width="1.5" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="cld"><ellipse cx="0" cy="40" rx="50" ry="10" fill="#fff" opacity=".8"/></g><g class="cld cld2"><ellipse cx="0" cy="96" rx="36" ry="8" fill="#fff" opacity=".6"/></g>' +
      /* far skyline */
      '<path d="M0 170h30v-20h18v20h40v-34h16v34h60v-14h20v14h80v-28h20v28h116v10H0z" fill="#9db0c4" opacity=".7"/>' +
      trees +
      /* the lake */
      '<path d="M0 196q100 -10 200 0t200 0v64H0z" fill="#4f8fb3"/>' + ripples +
      /* gazebo-like boathouse on the shore */
      '<rect x="318" y="182" width="40" height="14" fill="#efe6d0"/><path d="M312 184l26 -14 26 14z" fill="#8a3a2a"/>' +
      /* parachute + jumper (silhouette, no face) */
      '<g class="chute">' +
        '<path d="M120 46q60 -46 120 0q-8 6 -20 4q-10 -8 -20 0q-10 -8 -20 0q-10 -8 -20 0q-10 -8 -20 0q-12 2 -20 -4z" fill="' + RED + '"/>' +
        '<path d="M160 50q20 -40 40 -42M200 50q0 -40 0 -42M240 50q-20 -40 -40 -42" stroke="' + GOLD + '" stroke-width="5" fill="none" opacity=".9"/>' +
        '<path d="M124 48l72 70M160 50l38 68M200 50v68M240 50l-38 68M236 48l-34 70" stroke="#eee" stroke-width="1"/>' +
        '<circle cx="200" cy="122" r="6" fill="#2b1d16"/><rect x="194" y="128" width="12" height="18" rx="4" fill="#222"/>' +
        '<path d="M196 146l-4 12M204 146l4 12" stroke="#222" stroke-width="4" stroke-linecap="round"/>' +
      '</g>' +
      tag("WEEQUAHIC", 18, 248, 26, GOLD, -4),
      sky("g4", "#5aa8e0", "#cfe6f5"));
  }

  /* 5. Lafayette St and Mulberry St, by the arena: green street signs, streetlight, the tag wall in Redman red */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      /* brick buildings behind */
      '<rect x="282" y="60" width="90" height="160" fill="#5a2a22"/>' +
      (function () { let w = ""; for (let y = 70; y < 210; y += 16) for (let x = 290; x < 366; x += 16) w += '<rect x="' + x + '" y="' + y + '" width="8" height="10" fill="' + ((x + y) % 3 ? "#2a1612" : "#ffd98a") + '"/>'; return w; })() +
      /* tag wall */
      '<rect x="14" y="70" width="228" height="150" fill="#33363f"/>' +
      '<rect x="14" y="70" width="228" height="150" fill="' + RED + '" opacity=".28"/>' +
      tag("REDMAN", 30, 144, 40, GOLD, -7) + tag("DEF SQUAD", 34, 198, 26, "#fff", -3) + tag("WHUT?", 170, 104, 18, GREEN, 6) +
      /* streetlight */
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h24" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M278 62h24l-6 8h-12z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="252" y="90" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Lafayette St</text>' +
      '<rect x="252" y="112" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="125" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Mulberry St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#140a0a", "#3a1a1a"));
  }

  /* LM1 helpers for the redrawn landmark rooms: same svg / sky / tag / bullet style as above, with their own little animations */
  const LM1 = (function () {
    const css = '<style>' +
      '@keyframes lmDrift{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lm-drift{animation:lmDrift 24s linear infinite}.lm-d2{animation-delay:-12s}' +
      '@keyframes lmCar{from{transform:translateX(-110px)}to{transform:translateX(510px)}}.lm-car{animation:lmCar 6s linear infinite}.lm-c2{animation-delay:-3s}' +
      '@keyframes lmCarL{from{transform:translateX(510px)}to{transform:translateX(-110px)}}.lm-carL{animation:lmCarL 7.5s linear infinite}' +
      '@keyframes lmFlick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmFlick 2.2s infinite}.lm-f2{animation-delay:-.8s}' +
      '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{transform-box:fill-box;transform-origin:50% 0;animation:lmSway 3s ease-in-out infinite}' +
      '.lm-swayb{transform-box:fill-box;transform-origin:50% 100%;animation:lmSway 3.6s ease-in-out infinite}.lm-s2{animation-delay:-1.5s}' +
      '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lm-bob{animation:lmBob 1.4s ease-in-out infinite}.lm-b2{animation-delay:-.7s}.lm-b3{animation-delay:-.35s}' +
      '@keyframes lmRise{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(14px,-150px);opacity:0}}.lm-rise{animation:lmRise 6s ease-in infinite}' +
      '@keyframes lmBlink{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blink{animation:lmBlink 1s steps(1) infinite}.lm-k2{animation-delay:-.5s}' +
      '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lmSpin 14s linear infinite}' +
      '@keyframes lmFly{from{transform:translate(-80px,30px)}to{transform:translate(480px,-30px)}}.lm-fly{animation:lmFly 9s linear infinite}' +
      '@keyframes lmLand{from{transform:translate(460px,-40px)}to{transform:translate(-120px,40px)}}.lm-land{animation:lmLand 10s linear infinite}' +
      '@keyframes lmRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lm-rip{animation:lmRip 3s ease-in-out infinite}.lm-r2{animation-delay:-1.5s}' +
      '@keyframes lmBoat{0%,100%{transform:translateX(0)}50%{transform:translateX(-60px)}}.lm-boat{animation:lmBoat 12s ease-in-out infinite}' +
      '@keyframes lmWalk{from{transform:translateX(0)}to{transform:translateX(70px)}}.lm-walk{animation:lmWalk 5s ease-in-out infinite alternate}.lm-w2{animation-delay:-2.5s}' +
      '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,250px) rotate(300deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}.lm-l2{animation-delay:-2s}.lm-l3{animation-delay:-4s}' +
      '@keyframes lmDrop{0%{transform:translateY(0)}100%{transform:translateY(118px)}}.lm-drop{animation:lmDrop 2.6s cubic-bezier(.5,0,.9,.6) infinite}' +
      '@keyframes lmBall{0%{transform:translate(0,0)}50%{transform:translate(-90px,-26px)}100%{transform:translate(-180px,0)}}.lm-ball{animation:lmBall 2.4s linear infinite}' +
      '@keyframes lmSwim{0%,100%{transform:translateX(0)}50%{transform:translateX(90px)}}.lm-swim{animation:lmSwim 7s ease-in-out infinite}.lm-sw2{animation-delay:-3.5s}' +
      '</style>';
    const svg = (inner, defs) =>
      '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
    const sky = (id, top, bottom) =>
      '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
    const tag = (txt, x, y, size, fill, rot) =>
      '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
      '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
    const bullet = (x, y, letter, color, dark, r) => { r = r || 11;
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36).toFixed(1) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    const T = (x, y, txt, size, fill, o) => { o = o || {};
      return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-family="' + (o.f || "Anton, Impact, sans-serif") + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') +
        (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + ' font-size="' + size + '" fill="' + fill + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + '>' + txt + '</text>'; };
    /* a name plaque: dark box, title + subtitle */
    const plaque = (x, y, w, title, sub, bg, accent) => {
      const ts = Math.min(12, (w - 14) / (title.length * .66)), ss = sub ? Math.min(8, (w - 12) / (sub.length * .62 + sub.length * 1.5 / 8)) : 0;
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (sub ? 34 : 22) + '" rx="4" fill="' + bg + '" stroke="' + accent + '" stroke-width="2"/>' +
        T(x + w / 2, y + 16, title, ts.toFixed(1), "#fff") + (sub ? T(x + w / 2, y + 28, sub, ss.toFixed(1), accent, { f: "Barlow, Arial, sans-serif", w: 700, ls: (ss * 1.5 / 8).toFixed(2) }) : ""); };
    /* green NYC street sign blade */
    const blade = (x, y, w, txt) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      T(x + w / 2, y + 13, txt, 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 });
    const car = (cls, y, c, w) => { w = w || 44;
      return '<g class="' + cls + '"><rect x="0" y="' + y + '" width="' + w + '" height="12" rx="4" fill="' + c + '"/><rect x="' + (w * .22) + '" y="' + (y - 7) + '" width="' + (w * .5) + '" height="8" rx="3" fill="' + c + '"/>' +
        '<rect x="' + (w * .27) + '" y="' + (y - 5) + '" width="' + (w * .4) + '" height="5" fill="#cfe6ff" opacity=".8"/><circle cx="' + (w * .22) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/><circle cx="' + (w * .78) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/>' +
        '<rect x="' + (w - 3) + '" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>'; };
    /* faceless figure (silhouette), optional sign held up */
    const fig = (x, y, c, sign, sc) => { sc = sc || 1;
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><circle cx="0" cy="-30" r="5" fill="' + c + '"/><path d="M-6 -24h12l2 16h-4l-1 14h-6l-1-14h-4z" fill="' + c + '"/>' +
        (sign ? '<path d="M5 -22l6-14" stroke="' + c + '" stroke-width="2.5"/><rect x="' + (13 - Math.max(30, sign[0].length * 4.6 + 6) / 2) + '" y="-58" width="' + Math.max(30, sign[0].length * 4.6 + 6) + '" height="20" fill="' + sign[1] + '" stroke="#222" stroke-width="1"/>' +
          T(13, -44, sign[0], 7, sign[2] || "#111", { f: "Barlow, Arial, sans-serif", w: 700 }) : "") + '</g>'; };
    const wins = (x0, y0, cols, rows, dx, dy, w, h, c, lit) => { let s = "";
      for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += '<rect x="' + (x0 + k * dx) + '" y="' + (y0 + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + ((lit && (k * 7 + r * 3) % 4 === 0) ? lit : c) + '"/>';
      return s; };
    const brickLines = (x, y, w, h, c, step) => { let s = ""; for (let yy = y + (step || 7); yy < y + h; yy += (step || 7)) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".6"/>'; return s; };
    const cloud = (cls, x, y, s, op) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || .8) + '"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff"/><ellipse cx="12" cy="-6" rx="14" ry="9" fill="#fff"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff"/></g></g>';
    const tree = (x, y, r, c, cls) => '<g class="' + (cls || "lm-swayb") + '"><rect x="' + (x - 2.5) + '" y="' + (y - 4) + '" width="5" height="' + (r + 6) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - r * .6) + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/></g>';
    const bird = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" fill="none" stroke="#222" stroke-width="1.6"/></g>';
    /* subway car side (R-type), for the station rooms */
    const subCar = (x, y, w, stripe, letters) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="4" fill="' + stripe + '"/>';
      for (let k = x + 14; k < x + w - 40; k += 44) s += '<rect x="' + k + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
      return s + '<rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="22" rx="3" fill="#1d2a3a"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 50) + '" r="3.5" fill="#fff6c2"/>' + (letters || ""); };
    return { svg, sky, tag, bullet, stars, T, plaque, blade, car, fig, wins, brickLines, cloud, tree, bird, subCar };
  })();

  window.SCENES = { train, arena, cribs, skydive, corner };
})();
