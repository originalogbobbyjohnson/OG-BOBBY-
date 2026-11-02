/* Soundview opening scenes for the Cory Gunz game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes spray{0%{transform:translateY(0) scaleY(1);opacity:.9}50%{transform:translateY(-6px) scaleY(1.15);opacity:1}100%{transform:translateY(0) scaleY(1);opacity:.9}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:spray 1.4s ease-in-out infinite}.jet2{animation-delay:.5s}' +
    '@keyframes drop{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drop 1.1s ease-in infinite}.drp2{animation-delay:.4s}.drp3{animation-delay:.8s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}' +
    '.wav{animation:wave 3s ease-in-out infinite}.wav2{animation-delay:-1.5s}' +
    '@keyframes sail{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '.boat{animation:sail 18s linear infinite}' +
    '@keyframes drive{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.car{animation:drive 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.gull{animation:bob 1.6s ease-in-out infinite}' +
    '@keyframes glide{from{transform:translateX(-30px)}to{transform:translateX(430px)}}' +
    '.fly{animation:glide 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f5c542", GREEN6 = "#00933c", BLUE = "#4fc3ff", RED = "#ff4d3d";

  /* 1. The 6 pulling into Morrison Av-Soundview, up on the el over Westchester Av */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#3f5246"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#3f5246" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let canopy = "";
    for (let x = 0; x < 400; x += 20) canopy += '<path d="M' + x + ' 50l10-10 10 10z" fill="#2c3a31"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg1)"/>' + stars(18) +
      '<circle cx="340" cy="24" r="12" fill="#fff3d6" opacity=".9"/>' +
      canopy + '<rect x="0" y="50" width="400" height="10" fill="#3f5246"/>' + girders +
      /* station sign */
      '<rect x="62" y="66" width="276" height="34" rx="4" fill="#111"/>' +
      '<rect x="62" y="66" width="276" height="4" fill="#fff"/>' +
      '<text x="74" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Morrison Av–Soundview</text>' +
      bullet(318, 84, "6", GREEN6) +
      /* the 6 train slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="' + GREEN6 + '"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(272, 168, "6", GREEN6) +
      '</g>' +
      /* platform edge + Westchester Av under the el */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#141c18"/>' +
      tag("UPTOWN BABY", 22, 240, 28, GOLD, -4) + tag("GUNZ", 300, 242, 32, BLUE, -8),
      sky("cg1", "#0c1424", "#3a5a7a"));
  }

  /* 2. The Soundview ferry landing at Clason Point: the pier at the tip of Soundview, the blue-and-white ferry pulling out, the Whitestone Bridge across the water */
  function oval() {
    const { svg, sky, tag, T, plaque, cloud, bird, fig } = LM1;
    let cables = ""; for (let x = 222; x <= 378; x += 8) { const y = 50 + Math.pow((x - 300) / 78, 2) * 0 + (Math.abs(x - 300) < 1 ? 0 : 0); cables += '<path d="M' + x + ' ' + (60 + 30 * (1 - Math.pow((x - 300) / 78, 2))).toFixed(1) + 'V100" stroke="#a8b4c0" stroke-width=".8"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#cg2)"/>' + cloud("lm-drift", 0, 26, 1) + bird("lm-fly", 0, 40) +
      /* the Whitestone across the East River */
      '<rect x="0" y="100" width="400" height="6" fill="#7a8a7a"/>' +
      '<rect x="218" y="40" width="8" height="66" fill="#8a96a2"/><rect x="374" y="40" width="8" height="66" fill="#8a96a2"/>' +
      '<rect x="216" y="56" width="12" height="3" fill="#8a96a2"/><rect x="372" y="56" width="12" height="3" fill="#8a96a2"/>' +
      '<path d="M140 98Q180 60 222 42Q300 90 378 42Q400 52 420 70" fill="none" stroke="#a8b4c0" stroke-width="2"/>' + cables +
      '<rect x="120" y="96" width="300" height="5" fill="#8a96a2"/>' +
      T(300, 34, "WHITESTONE BRIDGE", 8, "#4a5a6a", { f: "Barlow, Arial, sans-serif", w: 700, ls: 2 }) +
      /* the water */
      '<rect x="0" y="106" width="400" height="104" fill="url(#cg2w)"/>' +
      '<g class="lm-rip"><path d="M20 130h50M140 150h60M260 138h50M320 170h60M60 186h50" stroke="#dff3ff" stroke-width="2" opacity=".6"/></g>' +
      /* the ferry */
      '<g class="lm-boat"><g transform="translate(150 128)"><path d="M0 22h130l-12 16H10z" fill="#1e4fa8"/><rect x="8" y="6" width="112" height="16" fill="#f6f6f2"/><rect x="28" y="-6" width="70" height="12" fill="#f6f6f2"/>' +
        (function () { let s = ""; for (let x = 14; x < 116; x += 12) s += '<rect x="' + x + '" y="10" width="8" height="6" fill="#2a4a7a"/>'; return s; })() + '<rect x="40" y="-3" width="46" height="6" fill="#2a4a7a"/><rect x="0" y="20" width="130" height="3" fill="#ff8a1e"/></g></g>' +
      /* the pier + landing */
      '<path d="M0 196h170l10 14H0z" fill="#6a5a4a"/><rect x="0" y="210" width="400" height="50" fill="#3a3a3e"/>' +
      '<rect x="20" y="160" width="120" height="36" fill="#e8ecef"/><path d="M14 160h132l-8-14H22z" fill="#1e4fa8"/>' +
      T(80, 182, "SOUNDVIEW", 13, "#1e4fa8") +
      [26, 70, 114, 158].map(x => '<rect x="' + x + '" y="196" width="4" height="20" fill="#4a3a2a"/>').join("") +
      '<g class="lm-bob">' + fig(200, 244, "#111", null, .8) + '</g>' +
      plaque(8, 8, 170, "SOUNDVIEW FERRY LANDING", "CLASON POINT · THE BRONX", "#1a1408", "#f5c542") +
      tag("UPTOWN BABY", 220, 252, 22, "#f5c542", -4),
      sky("cg2", "#8fc8ea", "#f2e2c0") + '<linearGradient id="cg2w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a8ab0"/><stop offset="1" stop-color="#2a5a7a"/></linearGradient>');
  }

  /* 3. Soundview Park at the mouth of the Bronx River, the Whitestone Bridge across the water */
  function river() {
    let deck = '<path d="M0 132q100-6 200 0t200 0" stroke="#9aa6ad" stroke-width="5" fill="none"/>';
    let cables = '<path d="M20 132Q90 78 130 64Q200 120 270 64Q310 78 380 132" stroke="#c3ccd1" stroke-width="2" fill="none"/>';
    for (let x = 30; x < 380; x += 12) {
      const y = x < 130 ? 132 - (x - 20) * 0.62 : x < 270 ? 64 + 28 * (1 - Math.pow((x - 200) / 70, 2)) : 64 + (x - 270) * 0.62;
      deck += '<path d="M' + x + ' ' + Math.min(130, y + 2) + 'V132" stroke="#c3ccd1" stroke-width=".8"/>';
    }
    const tower = x => '<rect x="' + (x - 6) + '" y="60" width="4" height="76" fill="#b8c2c8"/><rect x="' + (x + 2) + '" y="60" width="4" height="76" fill="#b8c2c8"/>' +
      '<rect x="' + (x - 6) + '" y="74" width="12" height="3" fill="#b8c2c8"/><rect x="' + (x - 6) + '" y="102" width="12" height="3" fill="#b8c2c8"/>';
    let grass = "";
    for (let x = 0; x < 400; x += 7) grass += '<path d="M' + x + ' 230q' + (x % 3 - 1) * 3 + '-' + (14 + x % 11) + ' ' + ((x % 5) - 2) + '-' + (20 + x % 9) + '" stroke="#8a9a3c" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg3)"/>' +
      '<circle cx="320" cy="44" r="20" fill="#ffd27a" opacity=".85"/>' +
      '<rect x="0" y="136" width="400" height="124" fill="#24506e"/>' +
      '<path d="M0 136h400" stroke="#47789a" stroke-width="2"/>' +
      tower(130) + tower(270) + cables + deck +
      '<g class="car"><rect x="0" y="126" width="10" height="4" rx="1" fill="#ffe08a"/></g><g class="car car2"><rect x="0" y="126" width="10" height="4" rx="1" fill="#ff6a5a"/></g>' +
      /* sailboat */
      '<g class="boat"><path d="M0 170h30l-5 7h-20z" fill="#f4efe6"/><path d="M15 168v-28l14 26z" fill="#fff"/><path d="M14 168v-22l-10 20z" fill="' + RED + '"/></g>' +
      '<g class="wav"><path d="M0 190q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6ea3c5" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<g class="wav wav2"><path d="M0 206q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6ea3c5" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* the park shore and marsh grass */
      '<path d="M0 218q120-14 240-4t160-4v50H0z" fill="#3e5a2a"/>' + grass +
      '<g class="fly"><path d="M0 70q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="1.8" fill="none"/></g>' +
      '<rect x="18" y="20" width="168" height="44" rx="4" fill="#1b3a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="102" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="1" textLength="148" lengthAdjust="spacingAndGlyphs" fill="#fff">SOUNDVIEW PARK</text>' +
      '<text x="102" y="57" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="1" textLength="148" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">BRONX RIVER · EAST RIVER</text>',
      sky("cg3", "#2a2a5a", "#e8946a"));
  }

  /* 4. Orchard Beach: the crescent pavilion's colonnade in tan brick with blue-green trim, waves rolling in */
  function beach() {
    let cols = "";
    for (let i = 0; i < 17; i++) {
      const x = 22 + i * 22, y = 96 + Math.pow((i - 8) / 8, 2) * 22;
      cols += '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (64 - Math.pow((i - 8) / 8, 2) * 10) + '" fill="#e6d3ae"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#cg4)"/>' +
      '<circle cx="64" cy="40" r="18" fill="#fff1b8"/>' +
      /* curved pavilion: roof band, colonnade, base */
      '<path d="M10 92Q200 60 390 92v14Q200 76 10 106z" fill="#2f9c95"/>' +
      '<path d="M10 92Q200 60 390 92" stroke="#e6d3ae" stroke-width="3" fill="none"/>' +
      '<path d="M14 106Q200 78 386 106V170Q200 150 14 170z" fill="#c7a77a"/>' + cols +
      '<path d="M14 168Q200 148 386 168v10Q200 158 14 178z" fill="#2f9c95"/>' +
      /* central block with clock-like medallion */
      '<rect x="176" y="66" width="48" height="96" fill="#d6bc8e"/><rect x="176" y="66" width="48" height="6" fill="#2f9c95"/>' +
      '<circle cx="200" cy="96" r="12" fill="#2f9c95" stroke="#e6d3ae" stroke-width="2"/><path d="M194 96q6-8 12 0q-6 8-12 0z" fill="#e6d3ae"/>' +
      '<path d="M186 162v-34a14 14 0 0 1 28 0v34z" fill="#3a2a1a"/>' +
      /* sand + water */
      '<rect x="0" y="176" width="400" height="34" fill="#e8d3a2"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2b74a8"/>' +
      '<g class="wav"><path d="M-20 208q20-7 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#f4fbff" stroke-width="3" fill="none"/></g>' +
      '<g class="wav wav2"><path d="M-20 228q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe3f5" stroke-width="2" fill="none" opacity=".7"/></g>' +
      /* umbrella + gulls */
      '<path d="M320 196v-26" stroke="#5a4630" stroke-width="2"/><path d="M300 172q20-18 40 0z" fill="' + RED + '"/><path d="M310 172q10-18 10 0" fill="#fff" opacity=".8"/>' +
      '<g class="gull"><path d="M250 46q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<g class="gull" style="animation-delay:.6s"><path d="M290 30q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      tag("ORCHARD BEACH", 24, 34, 22, GOLD, -3),
      sky("cg4", "#5fb4e8", "#cfeeff"));
  }

  /* 5. Westchester Av and Morrison Av, under the 6: street signs, streetlight, the tag wall */
  function corner() {
    let el = "";
    for (let x = 0; x <= 400; x += 64) el += '<rect x="' + (x - 3) + '" y="20" width="7" height="200" fill="#34443a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg5)"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#34443a"/>' + el +
      '<path d="M0 22h400" stroke="#4d6356" stroke-width="3"/>' +
      /* wall with the tags */
      '<rect x="16" y="66" width="240" height="154" fill="#5a4a44"/>' +
      (function () { let b = ""; for (let y = 70; y < 220; y += 12) b += '<path d="M16 ' + y + 'h240" stroke="#4a3c37" stroke-width="1"/>'; return b; })() +
      tag("CORY GUNZ", 26, 140, 34, GOLD, -7) + tag("96 ERA", 60, 196, 28, BLUE, -3) +
      /* streetlight with flicker */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="256" y="88" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="306" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Westchester Av</text>' +
      '<rect x="262" y="110" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="306" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Morrison Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("cg5", "#0c1424", "#26405a"));
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

  window.SCENES = { train, oval, river, beach, corner };
})();
