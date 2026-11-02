/* Bronx opening scenes for the Mysonne game (Highbridge). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 5.5s linear infinite}.car2{animation-delay:-2.7s}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}' +
    '.rip{animation:ripple 3s ease-in-out infinite}.rip2{animation-delay:-1.5s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.bannr{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}' +
    '.tree{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3.4s ease-in-out infinite}' +
    '@keyframes flut{0%{transform:translate(0,0)}25%{transform:translate(18px,-14px)}50%{transform:translate(36px,0)}75%{transform:translate(18px,10px)}100%{transform:translate(0,0)}}' +
    '.bfly{animation:flut 4s ease-in-out infinite}.bfly2{animation-delay:-2s}' +
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
  const star5 = (x, y, r, c) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '"/>'; };
  const GOLD = "#f2c230", RED = "#e63946", OLIVE = "#8fbf5a";

  /* 1. Street level under the 4 at 167 St on River Av: the train rolls over, the W 167 St steps climb toward Ogden Av, UNTIL FREEDOM wheat-pastes on the stair wall */
  function train() {
    const { svg, sky, tag, bullet, stars, T, wins } = LM1;
    let girders = "";
    for (let x = 10; x <= 400; x += 64) girders += '<rect x="' + x + '" y="46" width="8" height="168" fill="#3e4a3a"/><path d="M' + (x + 8) + ' 60L' + (x + 64) + ' 78M' + (x + 64) + ' 60L' + (x + 8) + ' 78" stroke="#3e4a3a" stroke-width="3"/>';
    let steps = "";
    for (let i = 0; i < 9; i++) steps += '<rect x="' + (232 + i * 18) + '" y="' + (204 - i * 13) + '" width="20" height="' + (14 + i * 13) + '" fill="' + (i % 2 ? "#8b8478" : "#9b9488") + '"/>';
    const paste = (x, y, r) => '<g transform="rotate(' + r + ' ' + x + ' ' + y + ')"><rect x="' + x + '" y="' + y + '" width="34" height="44" fill="#f4ecd8" stroke="#c9bfa6"/>' +
      '<rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="28" height="18" fill="#111"/>' + T(x + 17, y + 16, "UNTIL", 10, "#f2c230") +
      T(x + 17, y + 33, "FREEDOM", 7.5, "#111") + '<rect x="' + (x + 6) + '" y="' + (y + 37) + '" width="22" height="2" fill="#e63946"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ms1)"/>' + stars(16) +
      /* the hill and the Ogden Av buildings up top */
      '<path d="M200 214L400 90V214z" fill="#2c3328"/>' +
      '<rect x="318" y="20" width="76" height="80" fill="#7a5a3e"/>' + wins(326, 28, 4, 4, 17, 17, 9, 9, "#2a1d17", "#ffd98a") +
      /* the el: deck, girders, the station house with its sign */
      '<rect x="0" y="40" width="400" height="10" fill="#3e4a3a"/>' + girders +
      '<g class="anim-train">' +
        '<rect x="-10" y="4" width="300" height="36" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="-10" y="30" width="300" height="3" fill="#00933c"/>' +
        (function () { let w = ""; for (let x = 4; x < 260; x += 36) w += '<rect x="' + x + '" y="10" width="24" height="14" rx="2" fill="#cfe6ff" opacity=".85"/>'; return w; })() +
        bullet(272, 18, "4", "#00933c", false, 8) + '<circle cx="284" cy="32" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="40" y="58" width="150" height="26" rx="3" fill="#111"/><rect x="40" y="58" width="150" height="3" fill="#fff"/>' +
      T(52, 78, "167 St", 15, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) + bullet(172, 72, "4", "#00933c", false, 9) +
      /* the step street up W 167 St, wheat-pastes on its wall */
      '<rect x="222" y="96" width="10" height="118" fill="#6e675c"/>' + steps +
      '<path d="M232 196L394 92" stroke="#c8c2b4" stroke-width="2"/>' +
      paste(244, 150, -4) + paste(286, 124, 3) + paste(326, 96, -3) +
      '<rect x="262" y="70" width="88" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/>' + T(306, 82, "↑ Ogden Av", 10, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* River Av under the el */
      '<rect x="0" y="214" width="400" height="46" fill="#161b16"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="14" y="120" width="190" height="94" fill="#3a3530"/>' +
      tag("MYSONNE", 26, 168, 36, "#f2c230", -6) + tag("THE GENERAL", 30, 204, 22, "#e63946", -3) +
      '<g class="lm-car">' + '<rect x="0" y="242" width="46" height="12" rx="4" fill="#d8dde3"/><circle cx="10" cy="254" r="3.5" fill="#111"/><circle cx="36" cy="254" r="3.5" fill="#111"/></g>',
      sky("ms1", "#0b1426", "#3a5a6a"));
  }

  /* 2. The Bronx Hall of Justice on E 161 St (2007): the long blue-green glass courthouse on its granite base, protest signs out front */
  function highbridge() {
    const { svg, sky, tag, T, fig, cloud, plaque } = LM1;
    let mull = "";
    for (let x = 30; x <= 370; x += 17) mull += '<path d="M' + x + ' 70V182" stroke="#d6e4e4" stroke-width="1" opacity=".55"/>';
    for (let y = 84; y < 182; y += 14) mull += '<path d="M30 ' + y + 'H370" stroke="#d6e4e4" stroke-width=".8" opacity=".45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ms2)"/>' + cloud("lm-drift", 0, 30, 1.1) + cloud("lm-drift lm-d2", 0, 52, .8, .6) +
      /* the glass curtain wall */
      '<rect x="30" y="70" width="340" height="112" fill="url(#ms2g)"/>' + mull +
      '<path d="M30 70L370 70L370 64L30 64z" fill="#c8cfd0"/>' +
      '<rect x="150" y="96" width="90" height="86" fill="#2e6a6a" opacity=".55"/>' +
      '<g opacity=".2"><path class="lm-flk" d="M40 92l60-14v40l-60 14z" fill="#fff"/></g>' +
      /* granite base and steps */
      '<rect x="20" y="182" width="360" height="24" fill="#8c867c"/><rect x="20" y="182" width="360" height="3" fill="#b6b0a4"/>' +
      '<rect x="160" y="190" width="70" height="16" fill="#1f2a2c"/>' +
      '<path d="M120 206h160v6H120zM110 212h180v6H110z" fill="#a39d90"/>' +
      /* the sidewalk and the people outside */
      '<rect x="0" y="218" width="400" height="42" fill="#3a3a3e"/>' +
      '<g class="lm-bob">' + fig(60, 252, "#1c1c1c", ["FREE THEM", "#f2c230"]) + '</g>' +
      '<g class="lm-bob lm-b2">' + fig(110, 254, "#2a2a2a", ["JUSTICE", "#fff"]) + '</g>' +
      '<g class="lm-bob lm-b3">' + fig(300, 252, "#1c1c1c", ["UNTIL", "#e63946", "#fff"]) + '</g>' +
      '<g class="lm-bob">' + fig(346, 254, "#262626", ["FREEDOM", "#f2c230"]) + '</g>' +
      plaque(118, 8, 164, "BRONX HALL OF JUSTICE", "E 161 ST · SHERIDAN AV", "#123a2a", "#f2c230") +
      tag("UNTIL FREEDOM", 150, 246, 20, "#f2c230", -3),
      sky("ms2", "#5a8fc0", "#cfe2ee") + '<linearGradient id="ms2g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7fc4bf"/><stop offset=".5" stop-color="#3f8f8f"/><stop offset="1" stop-color="#2b5f66"/></linearGradient>');
  }

  /* 3. Foley Square, Lower Manhattan: the black granite Triumph of the Human Spirit, the columns of the NY County Courthouse, a march rallying with bullhorns and signs */
  function armory() {
    const { svg, sky, T, fig, cloud, plaque, tag, bird } = LM1;
    let cols = "";
    for (let x = 214; x <= 388; x += 18) cols += '<rect x="' + x + '" y="92" width="9" height="88" fill="#e6e0d2"/><rect x="' + (x - 2) + '" y="88" width="13" height="5" fill="#d2cbbb"/>';
    let crowd = "";
    const signs = [["MARCH", "#f2c230"], ["NO JUSTICE", "#fff"], ["NO PEACE", "#e63946", "#fff"], ["FREEDOM", "#f2c230"], ["UNTIL", "#fff"]];
    for (let i = 0; i < 9; i++) crowd += '<g class="lm-bob' + (i % 3 ? " lm-b" + (1 + i % 3) : "") + '">' + fig(20 + i * 42, 248 - (i % 2) * 4, i % 2 ? "#1c1c1c" : "#2c2c30", i % 2 ? null : signs[(i / 2) % 5 | 0]) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ms3)"/>' + cloud("lm-drift", 0, 28, 1) + bird("lm-fly", 0, 60) +
      /* NY County Courthouse: wide pediment, Corinthian columns, the long steps */
      '<rect x="200" y="78" width="200" height="12" fill="#ddd6c6"/><path d="M200 78L300 50L400 78z" fill="#e6e0d2"/><path d="M226 74L300 56L374 74z" fill="#cfc7b4"/>' +
      cols + '<rect x="200" y="180" width="200" height="8" fill="#d2cbbb"/>' +
      '<path d="M190 188h210v8H190zM180 196h220v8H180zM170 204h230v8H170z" fill="#bfb8a8"/>' +
      T(300, 86, "NEW YORK COUNTY COURTHOUSE", 7, "#5a5446", { f: "Barlow, Arial, sans-serif", w: 700, ls: 1 }) +
      /* Triumph of the Human Spirit: black granite rising from the fountain base */
      '<ellipse cx="96" cy="206" rx="70" ry="10" fill="#1f2428"/><ellipse cx="96" cy="204" rx="62" ry="7" fill="#3c6f8a"/>' +
      '<path d="M84 200L80 120L74 70L86 30L92 64L98 22L104 60L116 96L106 130L110 200z" fill="#16181b"/>' +
      '<path d="M92 64L98 22L100 60z" fill="#3a3f45"/><path d="M80 120L100 112L106 130" fill="none" stroke="#3a3f45" stroke-width="2"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#8a8478"/>' + crowd +
      /* a bullhorn up on the steps */
      '<g class="lm-bob lm-b2"><g transform="translate(340 196)"><circle cx="0" cy="-30" r="5" fill="#1c1c1c"/><path d="M-6 -24h12l2 16h-4l-1 14h-6l-1-14h-4z" fill="#1c1c1c"/><path d="M-6 -28h-6l-10-6v16l10-6h6z" fill="#f2c230" stroke="#222"/></g></g>' +
      plaque(16, 10, 170, "FOLEY SQUARE", "TRIUMPH OF THE HUMAN SPIRIT", "#123a2a", "#f2c230"),
      sky("ms3", "#7fb0d8", "#e8eef0"));
  }

  /* 4. The old Bronx Borough Courthouse at E 161 St & 3rd Av (1905): gray granite Beaux-Arts, arched windows, boarded doors, Lady Justice on top with her scales */
  function conservatory() {
    const { svg, sky, T, plaque, tag, bird, cloud } = LM1;
    let arches = "";
    for (let i = 0; i < 5; i++) { const x = 92 + i * 46; arches += '<path d="M' + x + ' 150v-30a12 12 0 0 1 24 0v30z" fill="#2a2e34"/><path d="M' + (x - 2) + ' 120a14 14 0 0 1 28 0" fill="none" stroke="#cfc9bd" stroke-width="2"/>' +
      '<rect x="' + x + '" y="166" width="24" height="22" fill="#2a2e34"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#ms4)"/>' + cloud("lm-drift", 0, 40, 1.2, .5) + bird("lm-fly", 0, 54) + bird("lm-fly lm-d2", 30, 70) +
      /* the building */
      '<rect x="70" y="96" width="260" height="120" fill="#9a968e"/><rect x="62" y="88" width="276" height="10" fill="#b5b0a6"/>' +
      '<rect x="70" y="156" width="260" height="4" fill="#b5b0a6"/>' + arches +
      '<rect x="60" y="96" width="14" height="120" fill="#8a867e"/><rect x="326" y="96" width="14" height="120" fill="#8a867e"/>' +
      /* the attic and Lady Justice */
      '<rect x="150" y="70" width="100" height="20" fill="#a8a399"/>' + T(200, 84, "COURT HOUSE", 10, "#4a4a46", { ls: 2 }) +
      '<rect x="190" y="60" width="20" height="10" fill="#8a867e"/>' +
      '<path d="M195 60l2-28h6l2 28z" fill="#6f7f72"/><circle cx="200" cy="28" r="4" fill="#6f7f72"/><path d="M200 34l-14-8" stroke="#6f7f72" stroke-width="2.5"/>' +
      '<g class="lm-sway" style="transform-origin:186px 26px"><path d="M186 26v6M178 32h16" stroke="#6f7f72" stroke-width="1.5"/><path d="M176 32q2 5 4 0M192 32q2 5 4 0" stroke="#6f7f72" stroke-width="1.5" fill="none"/></g>' +
      '<path d="M200 34l10 20" stroke="#6f7f72" stroke-width="2.5"/>' +
      /* the boarded front door */
      '<rect x="182" y="176" width="36" height="40" fill="#7a5a3a"/><path d="M182 186l36 10M182 204l36-8" stroke="#5a3e26" stroke-width="4"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2f3236"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="lm-carL"><rect x="0" y="240" width="46" height="12" rx="4" fill="#e63946"/><circle cx="10" cy="252" r="3.5" fill="#111"/><circle cx="36" cy="252" r="3.5" fill="#111"/></g>' +
      plaque(8, 8, 180, "BRONX BOROUGH COURTHOUSE", "E 161 ST · 3RD AV · 1905", "#123a2a", "#f2c230") +
      tag("JUSTICE", 260, 252, 22, "#f2c230", -4),
      sky("ms4", "#3a5a7a", "#d8b48a"));
  }

  /* 5. Ogden Av and W 170 St in Highbridge: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      /* Art Deco apartment house behind */
      '<rect x="250" y="24" width="140" height="196" fill="#7a5a3e"/><rect x="250" y="24" width="140" height="8" fill="#c9a77a"/>' +
      (function () { let w = ""; for (let y = 40; y < 210; y += 18) for (let x = 262; x < 380; x += 22) w += '<rect x="' + x + '" y="' + y + '" width="11" height="10" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="20" y="70" width="230" height="150" fill="#3e423a"/>' +
      tag("MYSONNE", 32, 146, 38, GOLD, -7) + tag("HIGHBRIDGE", 46, 196, 24, RED, -3) +
      star5(218, 104, 10, GOLD) + star5(232, 124, 7, GOLD) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 170 St</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Ogden Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1a14", "#2a4034"));
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

  window.SCENES = { train, highbridge, armory, conservatory, corner };
})();
