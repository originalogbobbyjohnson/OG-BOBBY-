/* Potter Payper scenes (Regions tab: UK + EUROPE; Barking, East London IG11 - Jamal Pottinger, raised by his nan on the Gascoigne Estate, Barking;
   Training Day mixtapes 1-3, Thanks for Waiting (2022), Real Back in Style (2023)).
   1 Barking station: open-air platforms under a canopy, a silver District line train with red doors pulling in, District green + H&C pink line bands.
   2 The Gascoigne Estate, IG11: the tall slab towers and low-rise blocks, windows lighting up, a ball on the "blue courts" (Free Double M).
   3 Barking Abbey ruins and the Curfew Tower: grey ragstone gate tower with its little lead-and-timber bell turret, the abbey's low ruined walls on the grass.
   4 Barking Park: the long boating lake, pedal boats drifting, the fountain spraying, trees round the water.
   5 Ripple Road at Gascoigne Road, IG11: London street plates, POTTER PAYPER tagged, Barking Town Hall's red-brick clock tower behind.
   Ghetts' kit uses Plaistow / Barking Road, so neither appears here. CSS classes prefixed "ppy" (the page's own anim-train is kept).
   No logos (no roundel), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ppyCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.ppyCloud{animation:ppyCloud 30s linear infinite}.ppyC2{animation-delay:-15s}' +
    '@keyframes ppyWin{0%,100%{opacity:.15}50%{opacity:1}}.ppyW{animation:ppyWin 3s steps(1) infinite}.ppyW2{animation-delay:-1s}.ppyW3{animation-delay:-2s}' +
    '@keyframes ppyBall{0%,100%{transform:translate(0,0)}25%{transform:translate(40px,-34px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,-20px)}}.ppyBall{animation:ppyBall 2.6s ease-in-out infinite}' +
    '@keyframes ppyBell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ppyBell{transform-box:fill-box;transform-origin:50% 0;animation:ppyBell 1.6s ease-in-out infinite}' +
    '@keyframes ppyBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.ppyBird{animation:ppyBird 12s linear infinite}' +
    '@keyframes ppyBoat{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.ppyBoat{animation:ppyBoat 9s ease-in-out infinite}.ppyB2{animation-duration:12s;animation-direction:reverse}' +
    '@keyframes ppyJet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.8)}}.ppyJet{transform-box:fill-box;transform-origin:50% 100%;animation:ppyJet 1.2s ease-in-out infinite}' +
    '@keyframes ppyRip{0%{opacity:.8;transform:scale(.6)}100%{opacity:0;transform:scale(1.6)}}.ppyRip{transform-box:fill-box;transform-origin:50% 50%;animation:ppyRip 2.4s ease-out infinite}' +
    '@keyframes ppyBus{0%{transform:translateX(-220px)}100%{transform:translateX(560px)}}.ppyBus{animation:ppyBus 11s linear infinite}' +
    '@keyframes ppyHand{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ppyHand{transform-box:view-box;transform-origin:300px 64px;animation:ppyHand 20s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const DIST = "#00782a", HC = "#f3a9bb", GOLD = "#e9c46a";
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="ppyCloud"><ellipse cx="40" cy="34" rx="34" ry="10"/><ellipse cx="62" cy="27" rx="20" ry="9"/></g>' +
    '<g class="ppyCloud ppyC2"><ellipse cx="40" cy="62" rx="28" ry="8"/><ellipse cx="56" cy="56" rx="16" ry="8"/></g></g>';

  /* 1. Barking station - open-air platforms, District line train pulling in */
  function ppystation() {
    let wins = "";
    for (const x of [30, 66, 150, 186, 270]) wins += '<rect x="' + x + '" y="146" width="26" height="20" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 138h300q26 0 30 24v36H10z" fill="#e9eaec" stroke="#2a2a2a" stroke-width="2"/>' + wins +
      '<g fill="#d0202a"><rect x="112" y="148" width="20" height="48"/><rect x="232" y="148" width="20" height="48"/></g>' +
      '<g fill="#9fb3c4"><rect x="115" y="152" width="6" height="22"/><rect x="123" y="152" width="6" height="22"/><rect x="235" y="152" width="6" height="22"/><rect x="243" y="152" width="6" height="22"/></g>' +
      '<rect x="10" y="186" width="330" height="8" fill="#1f3f9a"/><path d="M314 148q20 2 22 22h-22z" fill="#d0202a"/><rect x="326" y="178" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="50" cy="201" r="6"/><circle cx="74" cy="201" r="6"/><circle cx="270" cy="201" r="6"/><circle cx="294" cy="201" r="6"/></g></g>';
    let posts = "";
    for (let x = 20; x < 400; x += 60) posts += '<rect x="' + x + '" y="40" width="5" height="96" fill="#2f5a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ppys1)"/>' + clouds(.55) +
      '<g fill="#7d7f86"><rect x="0" y="70" width="70" height="60"/><rect x="300" y="60" width="100" height="70"/></g>' +
      '<g fill="#ffe28a"><rect class="ppyW" x="12" y="82" width="8" height="8"/><rect class="ppyW ppyW2" x="36" y="96" width="8" height="8"/><rect class="ppyW ppyW3" x="320" y="76" width="8" height="8"/><rect class="ppyW" x="356" y="96" width="8" height="8"/></g>' +
      '<path d="M0 30h400v12H0z" fill="#e6e1d3"/><path d="M0 42h400v4H0z" fill="#9a958a"/>' + posts +
      '<rect x="0" y="128" width="400" height="10" fill="#4a4d55"/>' +
      '<path d="M0 138h400v68H0z" fill="#2a2c31"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#6b6e75"/><rect x="0" y="206" width="400" height="6" fill="#f2c14e"/>' +
      '<g transform="translate(102 56)"><rect width="196" height="44" rx="4" fill="#10245a" stroke="#fff" stroke-width="2"/>' +
      '<text x="98" y="22" text-anchor="middle" ' + F + ' font-size="17" fill="#fff" letter-spacing="2">BARKING</text>' +
      '<rect x="18" y="30" width="78" height="8" rx="2" fill="' + DIST + '"/><rect x="100" y="30" width="78" height="8" rx="2" fill="' + HC + '"/></g>' +
      '<g transform="translate(18 220)"><rect width="96" height="22" rx="3" fill="#111"/><text x="48" y="15" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">DISTRICT · H&amp;C</text></g>' +
      '<g transform="translate(286 220)"><rect width="96" height="22" rx="3" fill="#111"/><text x="48" y="15" text-anchor="middle" ' + F + ' font-size="9" fill="#ee7623">OVERGROUND</text></g>',
      sky("ppys1", "#7f9cc4", "#d9c7a8"));
  }

  /* 2. The Gascoigne Estate - towers, low-rise blocks, the blue courts */
  function ppyestate() {
    let towerWins = "";
    for (let y = 44; y < 176; y += 14) for (const x of [42, 58, 74, 90, 248, 264, 280, 296]) {
      const k = (x + y) % 3; towerWins += '<rect class="ppyW' + (k ? ' ppyW' + (k + 1) : '') + '" x="' + x + '" y="' + y + '" width="9" height="7" fill="' + (k === 1 ? '#ffe28a' : '#3b4656') + '"/>';
    }
    let low = "";
    for (const x of [130, 160, 190]) for (const y of [118, 136, 154]) low += '<rect x="' + x + '" y="' + y + '" width="18" height="10" fill="' + ((x + y) % 4 ? '#3b4656' : '#ffe28a') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ppys2)"/>' + clouds(.5) +
      '<rect x="34" y="34" width="76" height="152" fill="#b9b3a6"/><rect x="34" y="30" width="76" height="6" fill="#8d877b"/>' +
      '<rect x="240" y="34" width="76" height="152" fill="#c4bfb2"/><rect x="240" y="30" width="76" height="6" fill="#8d877b"/>' + towerWins +
      '<rect x="120" y="106" width="104" height="80" fill="#a2472f"/><g stroke="#e8e2d6" stroke-width="2">' + [128, 146, 164].map(y => '<path d="M120 ' + y + 'h104"/>').join("") + '</g>' + low +
      '<rect x="330" y="110" width="60" height="76" fill="#9e4a33"/><g fill="#3b4656"><rect x="340" y="120" width="14" height="10"/><rect x="364" y="120" width="14" height="10"/><rect x="340" y="144" width="14" height="10"/><rect class="ppyW" x="364" y="144" width="14" height="10" fill="#ffe28a"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3d7a3a"/>' +
      '<rect x="120" y="196" width="200" height="54" fill="#2c5fa8" stroke="#fff" stroke-width="2"/><path d="M220 196v54" stroke="#fff" stroke-width="2"/><circle cx="220" cy="223" r="12" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="124" y="210" width="4" height="26" fill="#ddd"/><rect x="312" y="210" width="4" height="26" fill="#ddd"/>' +
      '<g stroke="#b6bcc4" stroke-width="1" opacity=".7">' + [104, 112, 120, 328, 336].map(x => '<path d="M' + x + ' 190v64"/>').join("") + '</g>' +
      '<g class="ppyBall"><circle cx="160" cy="232" r="6" fill="#f7f3ea" stroke="#111" stroke-width="1.5"/></g>' +
      tag("IG11", 20, 238, 22, GOLD, -5),
      sky("ppys2", "#6c88b8", "#e9c9a0"));
  }

  /* 3. Barking Abbey ruins and the Curfew Tower */
  function ppyabbey() {
    return svg(
      '<rect width="400" height="260" fill="url(#ppys3)"/>' + clouds(.7) +
      '<g class="ppyBird" fill="none" stroke="#333" stroke-width="2"><path d="M20 60q6 -6 12 0q6 -6 12 0"/></g>' +
      '<g fill="#4f8a44"><rect x="304" y="140" width="8" height="40" fill="#5a3d26"/><circle cx="308" cy="128" r="30"/><circle cx="336" cy="146" r="22" fill="#3f7d3a"/><rect x="62" y="146" width="7" height="34" fill="#5a3d26"/><circle cx="66" cy="138" r="24" fill="#3f7d3a"/></g>' +
      '<rect x="0" y="178" width="400" height="82" fill="#5e9a4a"/>' +
      /* ruined abbey walls */
      '<g fill="#a69f8e" stroke="#7e7768" stroke-width="1.5"><rect x="10" y="196" width="90" height="12"/><rect x="10" y="180" width="12" height="28"/><rect x="62" y="186" width="10" height="22"/>' +
      '<rect x="300" y="200" width="88" height="10"/><rect x="376" y="184" width="12" height="26"/><rect x="330" y="190" width="10" height="20"/></g>' +
      /* Curfew Tower: ragstone gate tower with arch, turret on top */
      '<g transform="translate(140 0)">' +
      '<rect x="0" y="70" width="120" height="120" fill="#9b9586" stroke="#6f695d" stroke-width="2"/>' +
      '<g stroke="#8a8476" stroke-width="1">' + [88, 106, 124, 142, 160, 178].map(y => '<path d="M0 ' + y + 'h120"/>').join("") + '</g>' +
      '<path d="M36 190v-56q24 -30 48 0v56z" fill="#2b2a28"/><path d="M40 190v-54q20 -24 40 0v54" fill="none" stroke="#c9c2b0" stroke-width="3"/>' +
      '<rect x="50" y="92" width="20" height="26" rx="10" fill="#2b2a28"/>' +
      '<g fill="#9b9586" stroke="#6f695d" stroke-width="2"><rect x="-6" y="62" width="14" height="12"/><rect x="22" y="62" width="14" height="12"/><rect x="50" y="62" width="14" height="12"/><rect x="84" y="62" width="14" height="12"/><rect x="112" y="62" width="14" height="12"/></g>' +
      '<rect x="44" y="34" width="32" height="30" fill="#e8e1cc" stroke="#6f695d" stroke-width="2"/><path d="M40 34l20 -22l20 22z" fill="#5d6670"/><rect x="58" y="4" width="4" height="10" fill="#5d6670"/>' +
      '<g class="ppyBell"><path d="M53 40q7 -6 14 0v12h-14z" fill="#c9a24a"/></g>' +
      '</g>' +
      '<text x="200" y="232" text-anchor="middle" ' + F + ' font-size="11" fill="#f7f3ea" stroke="#1a1a1a" stroke-width="3" paint-order="stroke" letter-spacing="2">BARKING ABBEY · THE CURFEW TOWER</text>',
      sky("ppys3", "#8fb3d9", "#f1dfb8"));
  }

  /* 4. Barking Park - boating lake, pedal boats, fountain */
  function ppypark() {
    let trees = "";
    for (let i = 0; i < 9; i++) { const x = 16 + i * 48; trees += '<rect x="' + (x - 3) + '" y="100" width="6" height="30" fill="#5a3d26"/><circle cx="' + x + '" cy="' + (92 - (i % 2) * 8) + '" r="' + (24 + (i % 3) * 3) + '" fill="' + (i % 2 ? '#3f7d3a' : '#4f9446') + '"/>'; }
    const boat = (x, y, c, cls) => '<g class="ppyBoat' + (cls || "") + '"><path d="M' + x + ' ' + y + 'h40l-6 12h-28z" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 12) + '" width="16" height="12" rx="3" fill="#f7f3ea"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ppys4)"/>' + clouds(.7) + trees +
      '<rect x="0" y="126" width="400" height="20" fill="#6aa555"/>' +
      '<path d="M0 146h400v82H0z" fill="#4f86b3"/><g stroke="#cfe3ee" stroke-width="2" opacity=".5"><path d="M20 170h40M120 190h60M250 166h50M320 204h50M60 214h40"/></g>' +
      '<g transform="translate(200 186)"><ellipse class="ppyRip" cx="0" cy="0" rx="26" ry="6" fill="none" stroke="#e4f1f8" stroke-width="2"/>' +
      '<g class="ppyJet"><path d="M-3 0q-10 -40 3 -60q13 20 3 60z" fill="#e4f1f8" opacity=".9"/><path d="M0 -58q-24 10 -30 40M0 -58q24 10 30 40" fill="none" stroke="#e4f1f8" stroke-width="3" opacity=".8"/></g></g>' +
      boat(40, 170, "#d0202a") + boat(290, 196, "#f2c14e", " ppyB2") + boat(110, 208, "#2c5fa8", " ppyB2") +
      '<rect x="0" y="228" width="400" height="32" fill="#cdbb94"/><g fill="#6b4a2b"><rect x="40" y="236" width="40" height="5"/><rect x="44" y="241" width="4" height="10"/><rect x="72" y="241" width="4" height="10"/></g>' +
      '<text x="390" y="252" text-anchor="end" ' + F + ' font-size="11" fill="#3a2a1a" letter-spacing="2">BARKING PARK</text>',
      sky("ppys4", "#7fb2e0", "#f6e2b8"));
  }

  /* 5. Ripple Road at Gascoigne Road - the corner, Barking Town Hall clock tower behind */
  function ppycorner() {
    const plate = (x, y, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="138" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="69" y="20" text-anchor="middle" ' + F + ' font-size="11.5" fill="#111">' + name + '</text>' +
      '<rect x="0" y="25" width="138" height="9" fill="#c4202e"/><text x="69" y="32" text-anchor="middle" ' + F + ' font-size="6.5" fill="#fff">' + dist + '</text></g>';
    let ticks = "";
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; ticks += '<path d="M' + (300 + Math.sin(a) * 13).toFixed(1) + ' ' + (64 - Math.cos(a) * 13).toFixed(1) + 'L' + (300 + Math.sin(a) * 16).toFixed(1) + ' ' + (64 - Math.cos(a) * 16).toFixed(1) + '" stroke="#111" stroke-width="1.5"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#ppys5)"/>' + clouds(.5) +
      /* Town Hall: long red-brick front, tall slim clock tower */
      '<rect x="180" y="84" width="220" height="40" fill="#a24a34"/><g fill="#e8dcc0">' + [192, 216, 240, 264, 330, 354, 378].map(x => '<rect x="' + x + '" y="92" width="12" height="18"/>').join("") + '</g>' +
      '<rect x="286" y="28" width="28" height="96" fill="#a8503a" stroke="#7a3624" stroke-width="2"/><rect x="282" y="22" width="36" height="8" fill="#e8dcc0"/><path d="M290 22l10 -14l10 14z" fill="#6f7b6a"/>' +
      '<circle cx="300" cy="64" r="17" fill="#f7f3ea" stroke="#e8dcc0" stroke-width="3"/>' + ticks + '<path d="M300 64v-9" stroke="#111" stroke-width="2"/><g class="ppyHand"><path d="M300 64v-13" stroke="#c4202e" stroke-width="1.5"/></g>' +
      '<rect x="0" y="116" width="400" height="94" fill="#3a3d46"/>' +
      '<g stroke="#2e3038" stroke-width="1">' + [128, 144, 160, 176, 192].map(y => '<path d="M0 ' + y + 'h400"/>').join("") + '</g>' +
      tag("POTTER PAYPER", 12, 170, 28, "#f2f2f2", -6) + tag("TRAINING DAY", 120, 202, 17, GOLD, -4) +
      '<g class="ppyBus"><rect x="0" y="196" width="120" height="44" rx="6" fill="#d0202a"/><g fill="#1d2a33"><rect x="8" y="202" width="20" height="12"/><rect x="34" y="202" width="20" height="12"/><rect x="60" y="202" width="20" height="12"/><rect x="86" y="202" width="20" height="12"/>' +
      '<rect x="8" y="220" width="20" height="10"/><rect x="34" y="220" width="20" height="10"/><rect x="60" y="220" width="20" height="10"/></g><circle cx="24" cy="242" r="7" fill="#111"/><circle cx="98" cy="242" r="7" fill="#111"/></g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#2a2a30"/>' +
      '<rect x="384" y="130" width="6" height="116" fill="#2a2a2a"/>' +
      plate(244, 134, "RIPPLE ROAD", "IG11 · BARKING &amp; DAGENHAM") + plate(244, 170, "GASCOIGNE ROAD", "IG11 · BARKING &amp; DAGENHAM"),
      sky("ppys5", "#56709e", "#e8a97a"));
  }

  window.SCENES = { ppystation, ppyestate, ppyabbey, ppypark, ppycorner };
})();
