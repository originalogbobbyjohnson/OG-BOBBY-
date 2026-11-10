/* tashacobbs scenes (REGIONS tab: ATLANTA region, as the south Georgia stop; Jesup, Wayne County - born in Jesup, led worship at her father Bishop Fritz Cobbs' Jesup New Life Ministries, moved to Atlanta in 2006, worship leader at the dReam Center Church of Atlanta; "Heart. Passion. Pursuit." recorded live at Passion City Church). CSS classes and ids prefixed tc- (the page's own anim-train is kept).
   1 Amtrak's Silver Meteor pulling into the 1903 Atlantic Coast Line depot in Jesup, pines behind.
   2 Jesup New Life Ministries: the little church where she led worship as a teen, choir swaying, notes rising.
   3 dReam Center Church of Atlanta: purple stage light, the chains breaking apart ("Break Every Chain").
   4 Passion City Church, Atlanta: recording "Heart. Passion. Pursuit." live, lights sweeping, hands raised.
   5 Cherry St and Broad St in downtown Jesup: green signs, TASHA tagged on the brick, the courthouse's red-brick clock tower behind.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tcblink{0%,100%{opacity:.3}50%{opacity:1}}.tc-bl{animation:tcblink 1.6s ease-in-out infinite}.tc-bl2{animation-delay:-.8s}' +
    '@keyframes tcsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tc-sway{animation:tcsway 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.tc-s2{animation-delay:-.45s}.tc-s3{animation-delay:-.9s}.tc-s4{animation-delay:-1.35s}' +
    '@keyframes tcnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.tc-note{animation:tcnote 3s ease-out infinite}.tc-n2{animation-delay:-1s}.tc-n3{animation-delay:-2s}' +
    '@keyframes tcleft{0%,30%{transform:translate(0,0) rotate(0)}70%,100%{transform:translate(-26px,14px) rotate(-18deg)}}.tc-cl{animation:tcleft 2.6s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:50% 50%}' +
    '@keyframes tcright{0%,30%{transform:translate(0,0) rotate(0)}70%,100%{transform:translate(26px,14px) rotate(18deg)}}.tc-cr{animation:tcright 2.6s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:50% 50%}' +
    '@keyframes tcspark{0%,40%{opacity:0;transform:scale(.4)}60%{opacity:1;transform:scale(1.2)}100%{opacity:0;transform:scale(1.6)}}.tc-spark{animation:tcspark 2.6s ease-out infinite alternate;transform-box:fill-box;transform-origin:50% 50%}' +
    '@keyframes tcspot{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.tc-spot{animation:tcspot 3.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0%}.tc-spot2{animation-delay:-1.8s}' +
    '@keyframes tchand{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.tc-hand{animation:tchand 1.4s ease-in-out infinite}.tc-h2{animation-delay:-.5s}.tc-h3{animation-delay:-.9s}' +
    '@keyframes tcsmoke{0%{transform:translate(0,0);opacity:.6}100%{transform:translate(-30px,-24px);opacity:0}}.tc-smk{animation:tcsmoke 3s ease-out infinite}.tc-smk2{animation-delay:-1.5s}' +
    '@keyframes tcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tc-sp{animation:tcspray 1.4s ease-out infinite}.tc-sp2{animation-delay:.45s}' +
    '@keyframes tcsweep{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.tc-hand2{animation:tcsweep 4s ease-in-out infinite;transform-box:fill-box;transform-origin:0% 50%}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c76b", PURP = "#c99bff", ROSE = "#ff7a8a", AMB = "#1b5e9b";
  const pine = (x, y, s, c) => '<g fill="' + c + '"><rect x="' + (x - 1.5 * s) + '" y="' + (y - 10 * s) + '" width="' + (3 * s) + '" height="' + (10 * s) + '" fill="#4a3424"/><path d="M' + x + ' ' + (y - 46 * s) + 'l' + (-9 * s) + ' ' + (16 * s) + 'h' + (5 * s) + 'l' + (-8 * s) + ' ' + (14 * s) + 'h' + (6 * s) + 'l' + (-8 * s) + ' ' + (12 * s) + 'h' + (28 * s) + 'l' + (-8 * s) + ' ' + (-12 * s) + 'h' + (6 * s) + 'l' + (-8 * s) + ' ' + (-14 * s) + 'h' + (5 * s) + 'z"/></g>';
  const note = (x, y, c, cls) => '<g class="tc-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 17) + '" width="1.8" height="17" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 17) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const robe = (x, base, c, cls) => '<g class="tc-sway ' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 28) + '" r="5" fill="#2a1a12"/>' +
    '<path d="M' + (x - 8) + ' ' + base + 'l2 -20q6 -5 12 0l2 20z" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + (base - 21) + 'q4 3 8 0" stroke="' + GOLD + '" stroke-width="1.6" fill="none"/></g>';
  const link = (cx, cy, rot, c) => '<rect x="' + (cx - 14) + '" y="' + (cy - 8) + '" width="28" height="16" rx="8" fill="none" stroke="' + c + '" stroke-width="5" transform="rotate(' + rot + ' ' + cx + ' ' + cy + ')"/>';
  const hand = (x, y, cls) => '<g class="tc-hand ' + (cls || "") + '"><path d="M' + x + ' ' + (y + 30) + 'v-24" stroke="#5a4a7e" stroke-width="5" stroke-linecap="round"/><circle cx="' + x + '" cy="' + (y + 3) + '" r="4.4" fill="#5a4a7e"/></g>';

  /* 1. Amtrak's Silver Meteor at the Jesup depot */
  function tcstation() {
    let win = ""; for (let i = 0; i < 7; i++) win += '<rect x="' + (66 + i * 40) + '" y="120" width="28" height="18" rx="3" fill="#24323f"/><rect x="' + (68 + i * 40) + '" y="122" width="8" height="14" fill="#7b95ad" opacity=".5"/>';
    const train = '<g class="anim-train"><rect x="30" y="110" width="350" height="64" rx="6" fill="#c9ced3" stroke="#7d858c" stroke-width="2"/>' +
      Array.from({ length: 17 }, (_, i) => '<path d="M' + (40 + i * 20) + ' 112v60" stroke="#aeb4ba" stroke-width="1"/>').join("") + win +
      '<rect x="30" y="144" width="350" height="5" fill="' + AMB + '"/><rect x="30" y="151" width="350" height="4" fill="#c8202f"/>' +
      '<path d="M30 116q-14 4 -18 22v34h18z" fill="#c9ced3" stroke="#7d858c" stroke-width="2"/><rect x="14" y="122" width="14" height="14" rx="2" fill="#24323f"/>' +
      '<circle class="tc-bl" cx="18" cy="160" r="3" fill="#fff3b0"/>' +
      '<circle cx="80" cy="178" r="9" fill="#2a2a2a"/><circle cx="110" cy="178" r="9" fill="#2a2a2a"/><circle cx="300" cy="178" r="9" fill="#2a2a2a"/><circle cx="330" cy="178" r="9" fill="#2a2a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tcs1)"/>' +
      pine(20, 112, 1.3, "#2f4a2c") + pine(56, 112, 1.0, "#3a5a34") + pine(372, 112, 1.4, "#2f4a2c") + pine(340, 112, 1.0, "#3a5a34") + pine(310, 112, .8, "#2f4a2c") +
      /* the brick depot with its deep hip roof */
      '<rect x="96" y="66" width="200" height="46" fill="#a4553c"/>' +
      Array.from({ length: 4 }, (_, r) => '<path d="M96 ' + (76 + r * 10) + 'h200" stroke="#874431" stroke-width="1"/>').join("") +
      '<path d="M78 70h236l-24 -26h-188z" fill="#4b3a33"/><path d="M78 70h236" stroke="#2c211c" stroke-width="3"/>' +
      [112, 152, 192, 232, 272].map(x => '<path d="M' + x + ' 70l-10 10" stroke="#e9dcc3" stroke-width="3"/><rect x="' + (x + 6) + '" y="80" width="14" height="22" fill="#2a1f1a"/><rect x="' + (x + 8) + '" y="82" width="10" height="18" fill="#ffd98a" class="tc-bl' + (x % 80 ? " tc-bl2" : "") + '"/>').join("") +
      '<rect x="0" y="108" width="400" height="6" fill="#d9d2c4"/>' +
      '<rect x="0" y="174" width="400" height="12" fill="#5a4a40"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="176" width="10" height="8" fill="#3a2e28"/>').join("") +
      train +
      '<rect x="0" y="186" width="400" height="74" fill="#cfc6b4"/>' +
      '<rect x="40" y="200" width="320" height="46" rx="3" fill="#111"/><text x="56" y="221" ' + font + ' font-size="17" fill="#fff">Jesup</text>' +
      '<text x="56" y="238" ' + font + ' font-size="9.5" fill="#cfd8e0">NW Broad St · Silver Meteor</text>' +
      '<rect x="244" y="212" width="100" height="22" rx="11" fill="' + AMB + '"/><text x="294" y="227" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">AMTRAK SM</text>',
      sky("tcs1", "#f4b980", "#ffe6c2"));
  }

  /* 2. Jesup New Life Ministries */
  function tcchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#tcs2)"/>' +
      '<rect x="0" y="0" width="400" height="160" fill="#2a1f3a"/>' +
      /* back wall cross of light + windows */
      '<rect x="190" y="18" width="20" height="96" fill="' + GOLD + '" opacity=".85"/><rect x="164" y="44" width="72" height="18" fill="' + GOLD + '" opacity=".85"/>' +
      [40, 100, 300, 360].map(x => '<path d="M' + (x - 14) + ' 110v-58q14 -18 28 0v58z" fill="#6a4fa0"/><path d="M' + (x - 14) + ' 80h28M' + x + ' 52v58" stroke="#2a1f3a" stroke-width="2"/>').join("") +
      /* risers + choir */
      '<rect x="40" y="120" width="320" height="12" fill="#5a3e2a"/><rect x="20" y="132" width="360" height="12" fill="#6a4a32"/>' +
      robe(70, 120, PURP, "") + robe(100, 120, PURP, "tc-s2") + robe(130, 120, PURP, "tc-s3") + robe(270, 120, PURP, "tc-s2") + robe(300, 120, PURP, "tc-s4") + robe(330, 120, PURP, "") +
      robe(54, 132, "#8a6ad0", "tc-s3") + robe(86, 132, "#8a6ad0", "") + robe(314, 132, "#8a6ad0", "tc-s2") + robe(346, 132, "#8a6ad0", "tc-s4") +
      /* the teen worship leader at the mic */
      '<g class="tc-sway tc-s2"><circle cx="200" cy="112" r="6" fill="#2a1a12"/><path d="M190 146l3 -26q7 -6 14 0l3 26z" fill="' + ROSE + '"/></g>' +
      '<path d="M222 146v-34" stroke="#cfcfcf" stroke-width="2"/><rect x="219" y="108" width="6" height="8" rx="3" fill="#333"/>' +
      /* organ */
      '<rect x="300" y="146" width="70" height="30" fill="#3a2418"/><rect x="304" y="150" width="62" height="6" fill="#f3efe6"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (306 + i * 6) + '" y="150" width="3" height="4" fill="#111"/>').join("") +
      note(330, 140, GOLD, "") + note(352, 130, PURP, "tc-n2") + note(70, 104, GOLD, "tc-n3") +
      /* pews */
      '<rect x="0" y="176" width="400" height="84" fill="#4a3424"/>' +
      [190, 214, 238].map(y => '<rect x="20" y="' + y + '" width="160" height="12" rx="2" fill="#7a5233"/><rect x="220" y="' + y + '" width="160" height="12" rx="2" fill="#7a5233"/>').join("") +
      '<text x="200" y="168" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">NEW LIFE · JESUP, GA</text>',
      sky("tcs2", "#2a1f3a", "#4a3424"));
  }

  /* 3. dReam Center Church of Atlanta: Break Every Chain */
  function tcchains() {
    const chainL = '<g class="tc-cl">' + link(110, 128, 0, "#c8c8d0") + link(136, 128, 90, "#a8a8b4") + link(162, 128, 0, "#c8c8d0") + link(186, 128, 90, "#a8a8b4") + '</g>';
    const chainR = '<g class="tc-cr">' + link(214, 128, 90, "#a8a8b4") + link(238, 128, 0, "#c8c8d0") + link(264, 128, 90, "#a8a8b4") + link(290, 128, 0, "#c8c8d0") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tcs3)"/>' +
      '<g class="tc-spot" opacity=".35"><path d="M120 0l-50 200h100z" fill="' + PURP + '"/></g><g class="tc-spot tc-spot2" opacity=".35"><path d="M280 0l-50 200h100z" fill="' + GOLD + '"/></g>' +
      '<path d="M76 128h22M302 128h22" stroke="#a8a8b4" stroke-width="5"/><rect x="60" y="112" width="16" height="32" rx="3" fill="#6a6a78"/><rect x="324" y="112" width="16" height="32" rx="3" fill="#6a6a78"/>' +
      chainL + chainR +
      '<g class="tc-spark"><circle cx="200" cy="128" r="16" fill="#fff6c2" opacity=".8"/><path d="M200 100v-14M200 156v14M172 128h-14M228 128h14M182 110l-10 -10M218 110l10 -10M182 146l-10 10M218 146l10 10" stroke="' + GOLD + '" stroke-width="3" stroke-linecap="round"/></g>' +
      '<text x="200" y="58" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="#fff" letter-spacing="2">BREAK EVERY CHAIN</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#120a1e"/><rect x="0" y="186" width="400" height="6" fill="' + PURP + '" opacity=".6"/>' +
      Array.from({ length: 13 }, (_, i) => hand(16 + i * 31, 196 + (i % 2) * 8, ["", "tc-h2", "tc-h3"][i % 3])).join("") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">THE DREAM CENTER · ATLANTA</text>',
      sky("tcs3", "#1a0e2e", "#3a1e5a"));
  }

  /* 4. Passion City Church, recording Heart. Passion. Pursuit. live */
  function tcpassion() {
    return svg(
      '<rect width="400" height="260" fill="url(#tcs4)"/>' +
      '<rect x="40" y="20" width="320" height="110" rx="4" fill="#0e0e16" stroke="#2a2a3a" stroke-width="2"/>' +
      '<rect x="48" y="28" width="304" height="94" fill="url(#tcscr)"/>' +
      '<text x="200" y="70" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" letter-spacing="1.5">HEART. PASSION. PURSUIT.</text>' +
      '<text x="200" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">RECORDED LIVE</text>' +
      '<circle class="tc-bl" cx="336" cy="40" r="5" fill="#ff3b3b"/><text x="322" y="44" text-anchor="end" ' + font + ' font-size="9" fill="#ff8a8a">REC</text>' +
      '<g class="tc-spot" opacity=".3"><path d="M60 0l-40 180h80z" fill="#fff"/></g><g class="tc-spot tc-spot2" opacity=".3"><path d="M340 0l-40 180h80z" fill="#fff"/></g>' +
      '<rect x="0" y="134" width="400" height="20" fill="#26203a"/>' +
      '<g class="tc-sway"><circle cx="200" cy="112" r="7" fill="#1a1020"/><path d="M188 154l4 -32q8 -7 16 0l4 32z" fill="' + GOLD + '"/></g>' +
      [80, 120, 280, 320].map((x, i) => '<rect x="' + (x - 10) + '" y="140" width="20" height="10" fill="#3a3450"/><g class="tc-sway ' + ["tc-s2", "", "tc-s3", "tc-s4"][i] + '"><circle cx="' + x + '" cy="122" r="5" fill="#1a1020"/><path d="M' + (x - 7) + ' 140l2 -14q5 -4 10 0l2 14z" fill="#5a4a7a"/></g>').join("") +
      '<rect x="0" y="154" width="400" height="106" fill="#0c0a14"/>' +
      Array.from({ length: 16 }, (_, i) => hand(10 + i * 25, 176 + (i % 3) * 10, ["", "tc-h2", "tc-h3"][i % 3])).join("") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + PURP + '">PASSION CITY CHURCH · ATLANTA</text>',
      sky("tcs4", "#0c0a14", "#26203a") + '<linearGradient id="tcscr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5a2a8a"/><stop offset="1" stop-color="#c8603a"/></linearGradient>');
  }

  /* 5. Cherry St and Broad St, downtown Jesup, the courthouse clock tower behind */
  function tccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tcs5)"/>' +
      pine(30, 132, 1.2, "#3a5434") + pine(380, 132, 1.3, "#3a5434") +
      /* Wayne County Courthouse: red brick with the clock tower */
      '<rect x="120" y="76" width="160" height="56" fill="#a14a34"/><path d="M114 78h172l-12 -14h-148z" fill="#5a3a30"/>' +
      '<rect x="176" y="18" width="48" height="58" fill="#a14a34"/><path d="M170 20h60l-30 -18z" fill="#5a3a30"/>' +
      '<circle cx="200" cy="44" r="13" fill="#f3efe6" stroke="#e9dcc3" stroke-width="2"/><path d="M200 44v-8" stroke="#222" stroke-width="2"/><g class="tc-hand2"><path d="M200 44h9" stroke="#222" stroke-width="1.6"/></g>' +
      [136, 160, 232, 256].map(x => '<path d="M' + x + ' 128v-28q6 -8 12 0v28z" fill="#f3efe6" opacity=".85"/>').join("") +
      '<path d="M188 132v-32q12 -14 24 0v32z" fill="#3a2418"/>' +
      '<rect x="0" y="132" width="400" height="88" fill="#8a4a36"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (142 + r * 10) + 'h400" stroke="#6e3a2a" stroke-width="1"/>').join("") +
      tag("TASHA", 30, 196, 52, GOLD, -5) + tag("ALREADY GOOD", 208, 166, 16, PURP, -7) + tag("JESUP GA", 214, 206, 18, ROSE, -4) +
      '<g class="tc-sp"><circle cx="160" cy="158" r="2" fill="' + GOLD + '"/><circle cx="166" cy="152" r="1.5" fill="' + GOLD + '"/></g><g class="tc-sp tc-sp2"><circle cx="164" cy="164" r="1.6" fill="' + PURP + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4e54"/><path d="M0 238h400" stroke="#e8d070" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="352" y="90" width="5" height="130" fill="#6a6a70"/>' + sign(290, 92, 104, "Cherry St") + sign(290, 116, 104, "Broad St"),
      sky("tcs5", "#6a8ac0", "#f6c89a"));
  }

  window.SCENES = { tcstation: tcstation, tcchurch: tcchurch, tcchains: tcchains, tcpassion: tcpassion, tccorner: tccorner };
})();
